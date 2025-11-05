<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');

// Respuesta por defecto
$response = ['success' => false, 'message' => ''];

try {
    // Manejar peticiones GET para obtener imágenes actuales
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $uploadsDir = dirname(__DIR__) . '/uploads/';
        $images = [];
        
        // Lista de imágenes
        $imageList = ['hero-bg', 'about-team', 'foto1', 'foto2', 'foto3', 'foto4', 'foto5', 'foto6', 'foto7', 'foto8'];
        
        foreach ($imageList as $img) {
            $galleryPath = ($img !== 'hero-bg' && $img !== 'about-team') ? 'gallery/' : '';
            $fileName = $img . '.jpg';
            $filePath = $uploadsDir . $galleryPath . $fileName;
            
            if (file_exists($filePath)) {
                $images[$img] = '/uploads/' . $galleryPath . $fileName . '?v=' . filemtime($filePath);
            }
        }
        
        $response['success'] = true;
        $response['images'] = $images;
        echo json_encode($response);
        exit;
    }

    // Verificar que sea una petición POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Método no permitido');
    }

    // Verificar que se haya subido un archivo
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('No se recibió ningún archivo o hubo un error en la subida');
    }

    // Verificar que se especificó el tipo de imagen
    if (!isset($_POST['type'])) {
        throw new Exception('No se especificó el tipo de imagen');
    }

    $type = $_POST['type'];
    $file = $_FILES['image'];

    // Validar el tipo de archivo
    $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($fileType, $allowedTypes)) {
        throw new Exception('Tipo de archivo no permitido. Solo se permiten JPG, PNG y WEBP');
    }

    // Validar el tamaño del archivo (máximo 5MB)
    if ($file['size'] > 5 * 1024 * 1024) {
        throw new Exception('El archivo es demasiado grande. Máximo 5MB');
    }

    // Crear carpeta uploads/ si no existe
    $uploadsDir = dirname(__DIR__) . '/uploads/';
    $targetDir = $uploadsDir;
    $fileName = '';

    if ($type === 'hero-bg' || $type === 'about-team') {
        $fileName = $type . '.jpg';
    } elseif (preg_match('/^foto[1-8]$/', $type)) {
        $targetDir .= 'gallery/';
        $fileName = $type . '.jpg';
    } else {
        throw new Exception('Tipo de imagen no válido');
    }

    // Crear directorios si no existen
    if (!is_dir($targetDir)) {
        if (!mkdir($targetDir, 0755, true)) {
            throw new Exception('No se pudo crear el directorio. Verifica los permisos.');
        }
    }

    $targetPath = $targetDir . $fileName;

    // Mover el archivo
    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        // Cambiar permisos del archivo
        chmod($targetPath, 0644);
        
        $response['success'] = true;
        $response['message'] = 'Imagen subida exitosamente';
        $response['path'] = $fileName;
        $response['url'] = '/uploads/' . ($type !== 'hero-bg' && $type !== 'about-team' ? 'gallery/' : '') . $fileName;
    } else {
        throw new Exception('Error al guardar el archivo. Verifica los permisos de la carpeta uploads/');
    }

} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
?>

