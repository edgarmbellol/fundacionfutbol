<?php
/**
 * EJEMPLO de configuración privada del panel de administración.
 *
 * 1. Copia este archivo FUERA de la carpeta pública, un nivel arriba de
 *    public_html, con el nombre admin-config.php
 *    (alternativa: api/config.php en el servidor; nunca lo subas a Git).
 * 2. Genera el hash de tu contraseña con:
 *       php -r "echo password_hash('TU_CONTRASEÑA_NUEVA', PASSWORD_DEFAULT), PHP_EOL;"
 *    y pégalo en admin_password_hash. No guardes la contraseña en texto plano.
 * 3. En allowed_origins pon el dominio del sitio (con https://).
 */
return [
    'admin_user' => 'admin',
    'admin_password_hash' => '<PEGA_AQUI_EL_HASH_GENERADO>',
    'allowed_origins' => [
        'https://tu-dominio.com',
        'https://www.tu-dominio.com',
    ],
];
