# 📸 Guía Completa para Agregar Imágenes

## 📁 Paso 1: Crear las Carpetas y Guardar tus Fotos

### Estructura de carpetas necesaria:

```
club-vr-futsal/
└── src/
    └── assets/
        ├── hero-bg.jpg          # Imagen de fondo para la página de inicio
        ├── about-team.jpg       # Foto del equipo para "Sobre Nosotros"
        └── gallery/             # Crear esta carpeta para la galería
            ├── foto1.jpg
            ├── foto2.jpg
            ├── foto3.jpg
            ├── foto4.jpg
            ├── foto5.jpg
            ├── foto6.jpg
            ├── foto7.jpg
            └── foto8.jpg
```

### Recomendaciones para las imágenes:

- **Formato:** JPG o PNG
- **Tamaño recomendado:**
  - Hero/fondo: 1920x1080px (horizontal)
  - Galería: 800x600px o similar
  - Fotos del equipo: 1200x800px
- **Peso:** Optimiza las imágenes (usa TinyPNG.com) para que pesen menos de 500KB cada una

---

## 🏠 PÁGINA DE INICIO (Home.jsx)

### Imagen de Fondo Hero

**Archivo:** `src/pages/Home.jsx`

**Línea:** Aproximadamente línea 7-22

**Qué hacer:**

1. Guarda tu imagen en: `src/assets/hero-bg.jpg`
2. Abre el archivo `src/pages/Home.jsx`
3. Busca esta sección:

```javascript
// Al inicio del archivo, después de los imports
import heroBg from '../assets/hero-bg.jpg';
```

4. Encuentra esta línea (aproximadamente línea 7):

```javascript
<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-green-700 text-white">
```

5. Reemplázala por:

```javascript
<section 
  className="relative h-screen flex items-center justify-center text-white"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

---

## 👥 PÁGINA SOBRE NOSOTROS (About.jsx)

### Imagen del Equipo/Instalaciones

**Archivo:** `src/pages/About.jsx`

**Qué hacer:**

1. Guarda tu imagen en: `src/assets/about-team.jpg`
2. Abre el archivo `src/pages/About.jsx`
3. Al inicio del archivo, después de los imports, agrega:

```javascript
import aboutImage from '../assets/about-team.jpg';
```

4. Busca esta sección (aproximadamente línea 48-56):

```javascript
<div className="relative">
  {/* 
    NOTA PARA ACTUALIZAR: 
    Reemplaza esta imagen placeholder:
  */}
  <div className="w-full h-96 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
    <p className="text-gray-600 text-center px-4">
      [Imagen del equipo o instalaciones]<br />
      Reemplazar con foto real
    </p>
  </div>
</div>
```

5. Reemplázala por:

```javascript
<div className="relative">
  <img 
    src={aboutImage} 
    alt="Equipo CLUB VR Futsal" 
    className="w-full h-96 object-cover rounded-lg shadow-xl"
  />
</div>
```

---

## 📸 GALERÍA (Gallery.jsx)

### Fotos de la Galería (8 fotos)

**Archivo:** `src/pages/Gallery.jsx`

**Qué hacer:**

1. Crea la carpeta: `src/assets/gallery/`
2. Guarda tus fotos como: `foto1.jpg`, `foto2.jpg`, hasta `foto8.jpg`
3. Abre el archivo `src/pages/Gallery.jsx`
4. Al inicio del archivo, después de `import { useState } from 'react';`, agrega:

```javascript
// Importar todas las fotos
import foto1 from '../assets/gallery/foto1.jpg';
import foto2 from '../assets/gallery/foto2.jpg';
import foto3 from '../assets/gallery/foto3.jpg';
import foto4 from '../assets/gallery/foto4.jpg';
import foto5 from '../assets/gallery/foto5.jpg';
import foto6 from '../assets/gallery/foto6.jpg';
import foto7 from '../assets/gallery/foto7.jpg';
import foto8 from '../assets/gallery/foto8.jpg';
```

5. Busca el array `images` (aproximadamente línea 7-52):

```javascript
const images = [
  {
    id: 1,
    title: 'Entrenamiento Sub-7',
    description: 'Niños en sesión de entrenamiento',
    placeholder: 'Foto de entrenamiento categoría Sub-7',
  },
  // ... más objetos
];
```

6. Reemplázalo por:

```javascript
const images = [
  {
    id: 1,
    src: foto1,  // ✅ Agregar esta línea
    title: 'Entrenamiento Sub-7',
    description: 'Niños en sesión de entrenamiento',
  },
  {
    id: 2,
    src: foto2,  // ✅ Agregar esta línea
    title: 'Partido Amistoso',
    description: 'Encuentro deportivo con otro club',
  },
  {
    id: 3,
    src: foto3,  // ✅ Agregar esta línea
    title: 'Celebración de Gol',
    description: 'Momento de alegría en el campo',
  },
  {
    id: 4,
    src: foto4,  // ✅ Agregar esta línea
    title: 'Equipo Sub-11',
    description: 'Foto oficial del equipo',
  },
  {
    id: 5,
    src: foto5,  // ✅ Agregar esta línea
    title: 'Torneo Local',
    description: 'Participación en competencia',
  },
  {
    id: 6,
    src: foto6,  // ✅ Agregar esta línea
    title: 'Entrenadores',
    description: 'Nuestro equipo técnico',
  },
  {
    id: 7,
    src: foto7,  // ✅ Agregar esta línea
    title: 'Premiación',
    description: 'Entrega de medallas y trofeos',
  },
  {
    id: 8,
    src: foto8,  // ✅ Agregar esta línea
    title: 'Instalaciones',
    description: 'Cancha donde entrenamos',
  },
];
```

7. Busca esta sección (aproximadamente línea 88-96):

```javascript
<div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
  <div className="text-center p-4">
    <p className="text-gray-600 font-semibold mb-2">{image.title}</p>
    <p className="text-gray-500 text-sm">{image.placeholder}</p>
  </div>
</div>
```

8. Reemplázala por:

```javascript
<img 
  src={image.src} 
  alt={image.title}
  className="w-full h-64 object-cover"
/>
```

9. Busca el modal (aproximadamente línea 159-168):

```javascript
<div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
  <div className="text-center p-4">
    <p className="text-gray-700 text-2xl font-bold mb-4">{selectedImage.title}</p>
    <p className="text-gray-600">{selectedImage.placeholder}</p>
  </div>
</div>
```

10. Reemplázala por:

```javascript
<img 
  src={selectedImage.src} 
  alt={selectedImage.title}
  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
/>
```

---

## 🎬 Videos de YouTube (OPCIONAL)

### En la Galería

**Archivo:** `src/pages/Gallery.jsx`

**Qué hacer:**

1. Ve a YouTube y copia el ID del video (ejemplo: si el URL es `https://youtube.com/watch?v=ABC123`, el ID es `ABC123`)
2. Busca esta sección (aproximadamente línea 133):

```javascript
<div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
  <div className="text-center p-4">
    <p className="text-gray-700 font-semibold">Video: Resumen del Torneo 2024</p>
    <p className="text-gray-600 text-sm mt-2">
      Agrega tu video de YouTube aquí
    </p>
  </div>
</div>
```

3. Reemplázala por:

```javascript
<iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/TU_VIDEO_ID_AQUI"
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
  className="rounded-t-lg"
></iframe>
```

---

## ✅ Checklist de Imágenes

- [ ] Crear carpeta `src/assets/gallery/`
- [ ] Descargar y optimizar fotos del Facebook
- [ ] Guardar `hero-bg.jpg` en `src/assets/`
- [ ] Guardar `about-team.jpg` en `src/assets/`
- [ ] Guardar 8 fotos en `src/assets/gallery/` (foto1.jpg - foto8.jpg)
- [ ] Actualizar `Home.jsx` con imagen de fondo
- [ ] Actualizar `About.jsx` con imagen del equipo
- [ ] Actualizar `Gallery.jsx` con imports de fotos
- [ ] Actualizar array de images en `Gallery.jsx`
- [ ] Actualizar componentes que muestran las fotos
- [ ] (Opcional) Agregar videos de YouTube

---

## 🔄 Después de Agregar las Imágenes

1. **Guarda todos los archivos**
2. **Reconstruye el proyecto:**
   ```bash
   npm run build
   ```
3. **Verifica en el navegador** que las imágenes se vean correctamente
4. **Sube todo** al hosting cuando esté listo

---

## 💡 Consejos

1. **Nombra tus archivos correctamente:** Sin espacios, sin tildes, todo en minúsculas
   - ✅ `entrenamiento-sub7.jpg`
   - ❌ `Entrenamiento Sub-7.jpg`

2. **Optimiza las imágenes antes de subirlas:**
   - Usa [TinyPNG.com](https://tinypng.com) o [Squoosh.app](https://squoosh.app)
   - Reduce el peso sin perder calidad

3. **Mantén proporciones consistentes:**
   - Todas las fotos de galería del mismo tamaño aproximado
   - Fotos horizontales funcionan mejor

4. **Haz backup:**
   - Guarda copias de tus fotos originales antes de editarlas

---

## 🆘 ¿Problemas?

### Las imágenes no se ven:
- Verifica que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas)
- Asegúrate de haber guardado los archivos en las carpetas correctas
- Ejecuta `npm run build` nuevamente

### Error al construir:
- Verifica que hayas importado todas las imágenes correctamente
- Revisa que no haya errores de tipeo en los nombres

### Las imágenes se ven cortadas:
- Ajusta `object-cover` a `object-contain` en las clases de las imágenes
- O ajusta las dimensiones con `h-` y `w-` de Tailwind

---

¡Listo! Con esto tu página quedará completa con todas tus fotos reales. 🎉



