# ⚙️ Configuración del Servidor para Panel de Administración

## 🎯 PASOS IMPORTANTES DESPUÉS DE SUBIR AL HOSTING

### 1️⃣ Crear la carpeta `uploads/` en el servidor

Vía FTP o Administrador de Archivos del cPanel:

```
public_html/
├── uploads/           ← CREAR ESTA CARPETA
│   └── gallery/       ← CREAR ESTA SUBCARPETA
├── api/
├── assets/
├── index.html
└── .htaccess
```

### 2️⃣ Configurar Permisos de Carpetas

**MUY IMPORTANTE:** Las siguientes carpetas necesitan permisos de escritura.

Vía FTP (FileZilla, WinSCP, etc.):
1. Haz clic derecho en la carpeta
2. Selecciona "Permisos" o "Atributos de archivo"
3. Establece en **755** o **777**

**Carpetas que necesitan permisos:**
```
uploads/          → 755 o 777
uploads/gallery/  → 755 o 777
api/              → 755
```

**Archivos PHP:**
```
api/upload-image.php → 644
```

### Comando SSH (si tienes acceso SSH):
```bash
chmod 755 uploads/
chmod 755 uploads/gallery/
chmod 755 api/
chmod 644 api/upload-image.php
```

---

## 🧪 Probar el Panel de Administración

### 1. Acceder al panel:
```
https://tu-sitio.com/admin/login
```

### 2. Iniciar sesión:
- **Usuario y contraseña:** los configurados en `admin-config.php` (ver ADMIN-README.md, sección "Configurar la contraseña del panel")

### 3. Probar subida de imagen:
1. Selecciona "Cambiar Imagen" en cualquier foto
2. Elige una imagen de prueba
3. Click en "Subir Imagen"
4. Deberías ver: "¡Imagen actualizada exitosamente!"

### 4. Verificar que se guardó:
- Vía FTP, verifica que aparezcan archivos en `uploads/` o `uploads/gallery/`
- Si aparecen, ✅ **está funcionando correctamente**

---

## ❌ Solución de Problemas

### Problema: "Error al guardar el archivo. Verifica los permisos"

**Solución:**
1. Cambia los permisos de `uploads/` a **777**
2. Cambia los permisos de `uploads/gallery/` a **777**
3. Intenta subir nuevamente
4. Si funciona, puedes bajarlos a **755** después

### Problema: "No se pudo crear el directorio"

**Solución:**
1. Crea manualmente las carpetas `uploads/` y `uploads/gallery/` vía FTP
2. Establece permisos 755 o 777
3. Intenta subir nuevamente

### Problema: "Error de conexión" o no sube nada

**Solución:**
1. Verifica que el archivo `api/upload-image.php` existe en el servidor
2. Verifica que PHP esté habilitado en tu hosting
3. Revisa los logs de error de PHP en tu cPanel
4. Contacta a soporte de tu hosting para verificar configuración PHP

### Problema: La imagen se sube pero no se ve en el sitio

**Solución:**
1. Limpia la caché del navegador (Ctrl+F5)
2. Verifica que la imagen esté realmente en `uploads/` o `uploads/gallery/`
3. Verifica los permisos del archivo (debe ser 644)

---

## 🔍 Verificación de PHP

Para verificar que PHP esté funcionando:

### Método 1: Crear un archivo de prueba
1. Crea un archivo `test.php` con este contenido:
```php
<?php
phpinfo();
?>
```
2. Súbelo a la raíz de tu sitio
3. Accede a `tu-sitio.com/test.php`
4. Si ves información de PHP, está funcionando
5. **ELIMINA el archivo después** por seguridad

### Método 2: Revisar en cPanel
1. Entra a tu cPanel
2. Busca "Versión de PHP" o "Configuración de PHP"
3. Verifica que PHP 7.4 o superior esté activo

---

## 📋 Checklist de Configuración

Antes de usar el panel de administración, verifica:

- [ ] Carpeta `uploads/` creada en la raíz
- [ ] Carpeta `uploads/gallery/` creada
- [ ] Permisos de `uploads/` establecidos en 755 o 777
- [ ] Permisos de `uploads/gallery/` establecidos en 755 o 777
- [ ] Archivo `api/upload-image.php` existe en el servidor
- [ ] Archivo `api/.htaccess` existe en el servidor
- [ ] Archivo `api/auth.php` existe en el servidor
- [ ] `admin-config.php` creado fuera de `public_html` (o `api/config.php`) con el hash de la contraseña
- [ ] PHP está habilitado en el hosting
- [ ] Puedes acceder a `/admin/login`
- [ ] Puedes iniciar sesión con las credenciales

---

## 📁 Estructura Final del Servidor

```
public_html/
├── .htaccess
├── index.html
├── favicon.svg
├── uploads/              ← NUEVA CARPETA (permisos 755/777)
│   ├── hero-bg.jpg      ← Imágenes subidas via admin
│   ├── about-team.jpg
│   └── gallery/          ← NUEVA SUBCARPETA (permisos 755/777)
│       ├── foto1.jpg
│       ├── foto2.jpg
│       ├── ... (hasta foto8.jpg)
├── api/
│   ├── upload-image.php  ← Script PHP (permisos 644)
│   ├── auth.php          ← Inicio de sesión del panel
│   ├── _lib.php          ← Funciones comunes (no accesible directo)
│   └── .htaccess
└── assets/
    ├── [CSS, JS compilados]
    └── [imágenes por defecto]
```

---

## ✅ Cómo Funciona

1. **Imágenes por Defecto:** Están en `assets/` (las que subiste inicialmente)
2. **Imágenes Actualizadas:** Se guardan en `uploads/`
3. **Prioridad:** El sitio intenta cargar primero desde `uploads/`, si no existe, usa las de `assets/`
4. **Panel Admin:** Muestra las imágenes actuales y permite cambiarlas

---

## 🆘 Si Nada Funciona

Contacta al soporte de tu hosting y pregunta:
1. ¿Está PHP habilitado?
2. ¿Qué versión de PHP tengo?
3. ¿Puedo crear carpetas con permisos de escritura?
4. ¿Hay alguna restricción para subir archivos vía PHP?

---

**Después de seguir estos pasos, el panel de administración debería funcionar perfectamente.** 🎉

