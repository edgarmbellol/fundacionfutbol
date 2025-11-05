# Guía de Despliegue - CLUB VR Futsal

## 📋 Requisitos Previos

- Acceso a tu panel de control de hosting compartido (cPanel, Plesk, etc.)
- Cliente FTP (FileZilla, WinSCP, etc.) o acceso al administrador de archivos del hosting
- Node.js instalado en tu computadora local (para hacer el build)

## 🏗️ Construcción del Proyecto

### 1. Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 2. Construir el Proyecto para Producción

```bash
npm run build
```

Este comando generará una carpeta `dist` con todos los archivos optimizados listos para producción.

## 📤 Subir Archivos al Hosting

### Opción 1: Usando FTP/SFTP

1. Abre tu cliente FTP (FileZilla, WinSCP, etc.)
2. Conéctate a tu hosting compartido usando las credenciales FTP
3. Navega a la carpeta pública de tu sitio web (normalmente llamada `public_html`, `www`, o `htdocs`)
4. Sube **TODO el contenido** de la carpeta `dist` (NO la carpeta dist en sí, sino su contenido)
5. Asegúrate de que el archivo `.htaccess` se haya subido correctamente

### Opción 2: Usando el Administrador de Archivos del cPanel

1. Inicia sesión en tu cPanel
2. Abre "Administrador de archivos"
3. Navega a `public_html` o la carpeta raíz de tu dominio
4. Haz clic en "Cargar" y selecciona todos los archivos dentro de la carpeta `dist`
5. Alternativamente, puedes comprimir la carpeta `dist` en un archivo ZIP, subirlo y descomprimirlo directamente en el servidor

## ⚙️ Configuración Post-Despliegue

### Verificar el archivo .htaccess

El archivo `.htaccess` es crucial para que React Router funcione correctamente. Verifica que esté presente en la raíz de tu sitio y contenga las reglas de reescritura necesarias.

Si tu hosting no soporta `.htaccess` (por ejemplo, si usa Nginx en lugar de Apache), contacta a tu proveedor de hosting para configurar las redirecciones necesarias.

### Configurar el dominio

Si estás usando un subdominio o una subcarpeta, es posible que necesites actualizar la configuración base en `vite.config.js` antes de hacer el build:

```javascript
export default defineConfig({
  base: '/subfolder/', // Ajusta esto si tu sitio está en una subcarpeta
  // ... resto de la configuración
})
```

## 🧪 Verificar el Despliegue

1. Abre tu navegador y visita tu dominio
2. Navega entre las diferentes secciones del sitio
3. Verifica que:
   - Todas las páginas cargan correctamente
   - La navegación funciona sin errores 404
   - Las imágenes y recursos se muestran correctamente
   - El diseño responsive funciona en móvil y desktop

## 🔧 Solución de Problemas Comunes

### Problema: Página en blanco o error 404

**Solución:** 
- Verifica que hayas subido el contenido de `dist`, no la carpeta `dist` completa
- Asegúrate de que `index.html` esté en la raíz de tu carpeta pública
- Verifica que el archivo `.htaccess` esté presente y correctamente configurado

### Problema: Las rutas no funcionan (Error 404 al navegar)

**Solución:**
- Verifica que el archivo `.htaccess` esté en la raíz del sitio
- Asegúrate de que tu hosting soporte `mod_rewrite` de Apache
- Contacta a tu proveedor de hosting si es necesario

### Problema: Los recursos (CSS, JS, imágenes) no cargan

**Solución:**
- Verifica las rutas en la consola del navegador
- Si estás en una subcarpeta, actualiza el `base` en `vite.config.js`
- Reconstruye el proyecto con `npm run build` y vuelve a subir

### Problema: El sitio se ve diferente que en desarrollo

**Solución:**
- Verifica que todas las dependencias de CSS (Tailwind) se hayan incluido correctamente
- Revisa la consola del navegador en busca de errores
- Asegúrate de que todos los archivos se hayan subido completamente

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios en el código:

1. Realiza tus cambios en el código fuente
2. Ejecuta `npm run build` para generar una nueva versión
3. Sube los archivos actualizados de la carpeta `dist` al servidor
4. Limpia la caché del navegador si es necesario (Ctrl+F5)

## 📱 Optimización Adicional

### Habilitar HTTPS

Si tu hosting ofrece certificados SSL gratuitos (Let's Encrypt):

1. Activa SSL en tu cPanel
2. Descomenta las líneas de redirección HTTPS en `.htaccess`
3. Vuelve a subir el archivo `.htaccess`

### Configurar Compresión

El archivo `.htaccess` incluido ya tiene configuración para compresión GZIP y caché del navegador, lo que mejorará significativamente el rendimiento del sitio.

## 🆘 Soporte

Si encuentras problemas durante el despliegue:

1. Revisa esta guía cuidadosamente
2. Consulta la documentación de tu proveedor de hosting
3. Contacta al soporte técnico de tu hosting si es necesario

---

**Nota:** Esta guía asume que estás usando hosting compartido con Apache. Si tu hosting usa Nginx u otro servidor, las configuraciones pueden variar. Consulta con tu proveedor de hosting para obtener instrucciones específicas.

