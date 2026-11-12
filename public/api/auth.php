<?php
/**
 * Autenticación del panel de administración.
 *   GET                         -> { authenticated: bool }
 *   POST {action:"login", username, password}
 *   POST {action:"logout"}
 * La contraseña se valida contra un hash (password_hash) guardado en la
 * configuración privada del servidor; nunca en el código.
 */
require_once __DIR__ . '/_lib.php';

api_headers('GET, POST');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    $auth = admin_is_authenticated();
    echo json_encode([
        'success' => true,
        'authenticated' => $auth,
        'user' => $auth ? ($_SESSION['admin_user'] ?? null) : null,
    ]);
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

require_ajax_header();
admin_session_start();

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    $input = $_POST;
}
$action = $input['action'] ?? 'login';

if ($action === 'logout') {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $p = session_get_cookie_params();
        setcookie(session_name(), '', [
            'expires' => time() - 42000,
            'path' => $p['path'],
            'secure' => $p['secure'],
            'httponly' => $p['httponly'],
            'samesite' => 'Strict',
        ]);
    }
    session_destroy();
    echo json_encode(['success' => true]);
    exit;
}

$config = admin_config();
$expectedUser = $config['admin_user'] ?? '';
$hash = $config['admin_password_hash'] ?? '';

if ($expectedUser === '' || $hash === '') {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => 'El panel no está configurado en el servidor (falta admin-config.php).',
    ]);
    exit;
}

// Límite simple de intentos por sesión
$attempts = $_SESSION['login_attempts'] ?? 0;
$lockedUntil = $_SESSION['login_locked_until'] ?? 0;
if ($lockedUntil > time()) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Demasiados intentos. Espera unos minutos.']);
    exit;
}

$username = (string)($input['username'] ?? '');
$password = (string)($input['password'] ?? '');

if (hash_equals($expectedUser, $username) && password_verify($password, $hash)) {
    session_regenerate_id(true);
    $_SESSION['admin_auth'] = true;
    $_SESSION['admin_user'] = $username;
    $_SESSION['admin_last_activity'] = time();
    $_SESSION['login_attempts'] = 0;
    echo json_encode(['success' => true, 'user' => $username]);
    exit;
}

$attempts++;
$_SESSION['login_attempts'] = $attempts;
if ($attempts >= 5) {
    $_SESSION['login_locked_until'] = time() + 300;
    $_SESSION['login_attempts'] = 0;
}
sleep(1);
http_response_code(401);
echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
