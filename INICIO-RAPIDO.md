# 🚀 Inicio Rápido - CLUB VR Futsal

## Para Ver el Sitio Ahora Mismo

El servidor de desarrollo ya está corriendo. Abre tu navegador en:

👉 **http://localhost:5173**

Si no está corriendo, ejecuta:
```bash
npm run dev
```

## 📝 3 Pasos para Publicar

### 1. Personalizar Contenido (IMPORTANTE)

Antes de publicar, actualiza:

**Contacto** (`src/pages/Contact.jsx` y `src/components/Footer.jsx`):
- [ ] Teléfono: Busca `+57 XXX XXX XXXX` y cambia
- [ ] Email: Busca `info@clubvrfutsal.com` y cambia
- [ ] WhatsApp: Busca `https://wa.me/57XXXXXXXXXX` y cambia
- [ ] Facebook: Actualiza el enlace en ambos archivos
- [ ] Instagram: Actualiza el enlace en ambos archivos

**Fotos** (opcional pero recomendado):
- [ ] Crea carpeta `src/assets/gallery/`
- [ ] Guarda fotos del Facebook ahí
- [ ] Sigue instrucciones en `src/pages/Gallery.jsx`

**Mapa de Google**:
- [ ] Actualiza el iframe en `src/pages/Contact.jsx`

### 2. Construir el Proyecto

```bash
npm run build
```

Esto crea la carpeta `dist/` con todo listo para subir.

### 3. Subir al Hosting

**Opción A - FTP:**
1. Conecta con FileZilla/WinSCP a tu hosting
2. Ve a la carpeta `public_html` (o `www`)
3. Sube TODO el contenido de `dist/` (no la carpeta dist, sino su contenido)
4. ¡Listo!

**Opción B - cPanel:**
1. Entra a tu cPanel
2. Abre "Administrador de Archivos"
3. Ve a `public_html`
4. Sube los archivos de `dist/`
5. ¡Listo!

## 🎨 Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: '#00843D',    // Verde del logo (cambiar aquí)
  secondary: '#1a1a1a',  // Negro/gris (cambiar aquí)
}
```

Después ejecuta:
```bash
npm run build
```

## 📁 Archivos Importantes

- **README.md** → Documentación completa
- **DEPLOY.md** → Guía detallada de despliegue
- **RESUMEN.md** → Resumen de lo que se creó
- **INICIO-RAPIDO.md** → Este archivo

## ⚠️ Errores Comunes

### "npm: no se reconoce..."
Instala Node.js desde https://nodejs.org

### El sitio no carga en el hosting
Verifica que:
- El archivo `.htaccess` esté en la raíz
- Hayas subido el CONTENIDO de `dist/`, no la carpeta
- `index.html` esté en la raíz de `public_html`

### Las rutas dan error 404
El archivo `.htaccess` es necesario. Si tu hosting usa Nginx, contacta a soporte.

## 🆘 Ayuda

- **Dudas técnicas**: Lee `README.md`
- **Problemas al subir**: Lee `DEPLOY.md`
- **Soporte hosting**: Contacta a tu proveedor

## ✅ Checklist Mínimo

Antes de publicar:

- [ ] Cambiar teléfono de contacto
- [ ] Cambiar email
- [ ] Actualizar enlaces de redes sociales
- [ ] Ejecutar `npm run build`
- [ ] Subir contenido de `dist/` al hosting
- [ ] Probar el sitio en vivo

## 🎯 Todo Listo!

El sitio está completamente funcional. Solo personaliza el contenido y súbelo al hosting.

**¡Éxito con CLUB VR Futsal!** ⚽🏆

