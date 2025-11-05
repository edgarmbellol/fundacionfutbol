# 🔐 Panel de Administración - CLUB VR Futsal

## Acceso al Panel

### Credenciales de Administrador:
- **Usuario:** `admin`
- **Contraseña:** `Zencode123*`

### Cómo acceder:

**Opción 1: Botón en el Footer**
1. Ve a cualquier página del sitio web
2. Desplázate hasta el footer (parte inferior)
3. En la esquina inferior derecha verás un enlace discreto que dice "Admin"
4. Haz clic en él para ir al login

**Opción 2: URL Directa**
Puedes acceder directamente a: `tu-sitio.com/admin/login`

---

## ⚠️ IMPORTANTE - Configuración en el Hosting

Después de subir los archivos al hosting, necesitas:

### 1. Verificar que PHP esté habilitado
El panel de administración requiere PHP para funcionar. La mayoría de hostings compartidos ya lo tienen.

### 2. Verificar permisos de carpetas
Las siguientes carpetas necesitan permisos de escritura (755 o 777):
```
src/assets/
src/assets/gallery/
```

Para cambiar permisos vía FTP:
1. Conéctate por FTP
2. Haz clic derecho en la carpeta `src/assets/`
3. Selecciona "Permisos" o "CHMOD"
4. Establece en `755` o marca todas las casillas de escritura
5. Marca "Aplicar a subdirectorios"

### 3. Estructura de archivos en el hosting

Asegúrate de que estos archivos estén presentes:
```
public_html/
├── api/
│   ├── upload-image.php    ← Script de subida
│   └── .htaccess           ← Configuración PHP
├── assets/
│   ├── [archivos compilados]
├── index.html
└── .htaccess
```

---

## 📸 Cómo Cambiar Imágenes

### Paso 1: Iniciar Sesión
1. Accede al panel de administración
2. Ingresa las credenciales
3. Haz clic en "Iniciar Sesión"

### Paso 2: Seleccionar Imagen a Cambiar
Verás una lista de todas las imágenes que puedes cambiar:

**Imagen de Fondo Principal:**
- La imagen grande de fondo en la página de inicio
- Tamaño recomendado: 1920x1080px

**Foto del Equipo:**
- Aparece en la página "Sobre Nosotros"
- Tamaño recomendado: 1200x800px

**Galería - Fotos 1 a 8:**
- Las 8 fotos que aparecen en la galería
- Tamaño recomendado: 800x600px cada una

### Paso 3: Subir Nueva Imagen
1. Haz clic en "Seleccionar Imagen" de la foto que quieres cambiar
2. Elige el archivo desde tu computadora
3. Verás una vista previa de la imagen seleccionada
4. Haz clic en "Subir Imagen"
5. Espera a que aparezca el mensaje de éxito

### Paso 4: Ver los Cambios
1. Recarga la página web (Ctrl+F5 o Cmd+Shift+R)
2. Verás la nueva imagen en su lugar

---

## ✅ Requisitos de las Imágenes

### Formatos Aceptados:
- ✅ JPG / JPEG
- ✅ PNG
- ✅ WEBP

### Tamaño Máximo:
- 5MB por imagen

### Tamaños Recomendados:
- **Hero Background:** 1920x1080px (horizontal)
- **Foto del Equipo:** 1200x800px (horizontal)
- **Galería:** 800x600px (horizontal preferiblemente)

### Consejos:
1. **Optimiza las imágenes antes de subirlas:**
   - Usa [TinyPNG.com](https://tinypng.com) o [Squoosh.app](https://squoosh.app)
   - Reduce el tamaño sin perder calidad
   - Imágenes más ligeras = página más rápida

2. **Mantén la orientación:**
   - Usa fotos horizontales (paisaje)
   - Evita fotos verticales (retrato)

3. **Buena iluminación:**
   - Fotos claras y bien iluminadas
   - Evita fotos muy oscuras o borrosas

---

## 🔒 Seguridad

### Cambiar la Contraseña

Para cambiar la contraseña del administrador:

1. Abre el archivo: `src/pages/AdminLogin.jsx`
2. Busca estas líneas (aproximadamente línea 14-15):
```javascript
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'Zencode123*';
```
3. Cambia `'Zencode123*'` por tu nueva contraseña
4. Guarda el archivo
5. Ejecuta `npm run build` para recompilar
6. Sube el nuevo build al hosting

### Recomendaciones de Seguridad:
- ✅ Cambia la contraseña por defecto
- ✅ No compartas las credenciales
- ✅ Cierra sesión después de usar el panel
- ✅ No dejes la sesión abierta en computadoras públicas

---

## 🆘 Solución de Problemas

### "Error al subir la imagen"
**Causa:** Permisos de carpeta incorrectos
**Solución:** Verifica que las carpetas `src/assets/` y `src/assets/gallery/` tengan permisos 755 o 777

### "Error de conexión"
**Causa:** El archivo PHP no está accesible
**Solución:** 
1. Verifica que `public/api/upload-image.php` esté en el servidor
2. Asegúrate de que PHP esté habilitado en tu hosting
3. Contacta a tu proveedor de hosting si es necesario

### "Archivo demasiado grande"
**Causa:** La imagen supera 5MB
**Solución:** 
1. Optimiza la imagen en [TinyPNG.com](https://tinypng.com)
2. O reduce la resolución de la imagen

### "No se ve la nueva imagen"
**Causa:** Caché del navegador
**Solución:** 
1. Recarga con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)
2. O limpia la caché del navegador manualmente

### "No puedo iniciar sesión"
**Causa:** Credenciales incorrectas
**Solución:** 
1. Verifica que estés usando:
   - Usuario: `admin`
   - Contraseña: `Zencode123*` (distingue mayúsculas/minúsculas)
2. Asegúrate de no tener espacios adicionales

---

## 📱 Uso en Móvil

El panel de administración es responsive y funciona en:
- ✅ Computadoras de escritorio
- ✅ Laptops
- ✅ Tablets
- ✅ Teléfonos móviles

Puedes gestionar las imágenes desde cualquier dispositivo.

---

## 🎯 Resumen Rápido

1. **Acceder:** Footer → "Admin" o ir a `/admin/login`
2. **Login:** Usuario: `admin` / Contraseña: `Zencode123*`
3. **Seleccionar:** Click en "Seleccionar Imagen" de la foto a cambiar
4. **Subir:** Elige archivo, revisa preview, click "Subir Imagen"
5. **Ver:** Recarga la página web (Ctrl+F5)

---

**¿Necesitas ayuda?** Contacta al desarrollador o consulta este archivo.

