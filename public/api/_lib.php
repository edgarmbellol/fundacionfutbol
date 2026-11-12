<?php
/**
 * Funciones comunes para la API del panel de administración.
 * Este archivo no se debe llamar directamente (bloqueado en .htaccess).
 */

if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === basename(__FILE__)) {
    http_response_code(404);
    exit;
}

/**
 * Carga la configuración privada del servidor.
 * Orden de búsqueda:
 *   1. Ruta indicada en la variable de entorno FUNDACION_ADMIN_CONFIG
 *   2. Un nivel por encima de la raíz pública: ../admin-config.php (recomendado, fuera de public_html)
 *   3. api/config.php (junto a este archivo; nunca se sube a Git)
 */
function admin_config(): array {
    static $config = null;
    if ($config !== null) {
        return $config;
    }
    $candidates = [];
    $envPath = getenv('FUNDACION_ADMIN_CONFIG');
    if ($envPath) {
        $candidates[] = $envPath;
    }
    $candidates[] = dirname(__DIR__, 2) . '/admin-config.php';
    $candidates[] = __DIR__ . '/config.php';

    foreach ($candidates as $path) {
        if (is_file($path)) {
            $loaded = require $path;
            if (is_array($loaded)) {
                $config = $loaded;
                return $config;
            }
        }
    }
    $config = [];
    return $config;
}

/** Envía cabeceras JSON y CORS restringido al dominio del sitio. */
function api_headers(string $methods = 'GET, POST'): void {
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store');

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = admin_config()['allowed_origins'] ?? [];
    if ($origin !== '' && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: ' . $methods);
        header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
        header('Vary: Origin');
    }
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

/** Inicia la sesión PHP con cookie segura. */
function admin_session_start(): void {
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
    session_name('fundacion_admin');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => $secure,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    session_start();
}

function admin_is_authenticated(): bool {
    admin_session_start();
    if (empty($_SESSION['admin_auth'])) {
        return false;
    }
    // Expira la sesión tras 2 horas de inactividad
    $last = $_SESSION['admin_last_activity'] ?? 0;
    if (time() - $last > 7200) {
        $_SESSION = [];
        session_destroy();
        return false;
    }
    $_SESSION['admin_last_activity'] = time();
    return true;
}

/**
 * Las peticiones que modifican datos deben enviar la cabecera
 * X-Requested-With: XMLHttpRequest (protección básica contra CSRF).
 */
function require_ajax_header(): void {
    if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'XMLHttpRequest') {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Petición no permitida']);
        exit;
    }
}

function require_admin(): void {
    require_ajax_header();
    if (!admin_is_authenticated()) {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'No autorizado. Inicia sesión nuevamente.']);
        exit;
    }
}
