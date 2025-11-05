# CLUB VR Futsal - Sitio Web Oficial

![CLUB VR Futsal](./public/favicon.svg)

**"Dios, Decisión y Disciplina nos hace grandes"**

Sitio web oficial de la fundación CLUB VR Futsal, dedicada a la formación integral de niños y jóvenes de 5 a 17 años a través del fútbol sala en Bogotá, Colombia.

## 🌟 Características

- ✅ Diseño moderno y responsive (móvil, tablet, desktop)
- ✅ 5 secciones principales: Inicio, Nosotros, Galería, Horarios, Contacto
- ✅ Navegación fluida con React Router
- ✅ Animaciones sutiles y efectos visuales
- ✅ Optimizado para SEO
- ✅ Listo para hosting compartido con Apache
- ✅ Integración con Google Maps
- ✅ Estilos con Tailwind CSS

## 📋 Requisitos

- Node.js 16+ y npm
- Navegador web moderno
- Hosting compartido con soporte para Apache (para producción)

## 🚀 Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 3. Construir para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 4. Previsualizar el build de producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
club-vr-futsal/
├── public/
│   ├── .htaccess          # Configuración Apache para hosting
│   └── favicon.svg        # Icono del sitio
├── src/
│   ├── assets/            # Imágenes y recursos (agregar fotos aquí)
│   ├── components/        # Componentes reutilizables
│   │   ├── Logo.jsx       # Logo del club
│   │   ├── Navbar.jsx     # Barra de navegación
│   │   ├── Footer.jsx     # Pie de página
│   │   └── ScrollToTop.jsx
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx       # Página de inicio
│   │   ├── About.jsx      # Sobre nosotros
│   │   ├── Gallery.jsx    # Galería de fotos
│   │   ├── Schedule.jsx   # Horarios y categorías
│   │   └── Contact.jsx    # Contacto
│   ├── styles/
│   │   └── index.css      # Estilos globales y Tailwind
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── DEPLOY.md              # Guía detallada de despliegue
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Actualizar Colores

Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: '#00843D',    // Verde del logo
  secondary: '#1a1a1a',  // Negro/gris oscuro
}
```

### Actualizar Contenido

#### Datos de Contacto

Edita `src/pages/Contact.jsx`:
- Teléfono: Busca `+57 XXX XXX XXXX` y reemplaza
- Email: Busca `info@clubvrfutsal.com` y reemplaza
- Redes sociales: Actualiza los enlaces de Facebook, Instagram y WhatsApp

#### Horarios y Categorías

Edita `src/pages/Schedule.jsx`:
- Encuentra el array `categories`
- Modifica días, horarios, cupos según tus necesidades

### Agregar Fotos Reales

#### Para la Galería:

1. Crea la carpeta `src/assets/gallery/`
2. Guarda tus fotos (nombradas como: foto1.jpg, foto2.jpg, etc.)
3. En `src/pages/Gallery.jsx`:

```javascript
// Importa las fotos
import foto1 from '../assets/gallery/foto1.jpg';
import foto2 from '../assets/gallery/foto2.jpg';

// En el array de images, reemplaza:
{
  id: 1,
  src: foto1,  // Agrega esta línea
  title: 'Tu título',
  description: 'Tu descripción'
}
```

#### Para otras secciones:

1. Guarda la imagen en `src/assets/`
2. Importa en el componente: `import imagen from '../assets/nombre-imagen.jpg';`
3. Usa: `<img src={imagen} alt="descripción" />`
4. Elimina los divs de placeholder

### Actualizar Mapa de Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección exacta: "Calle 71 # 73a-44, Bogotá"
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Pégalo en `src/pages/Contact.jsx` reemplazando el iframe existente

## 🌐 Despliegue a Hosting Compartido

Consulta la guía detallada en [`DEPLOY.md`](./DEPLOY.md) para instrucciones paso a paso sobre cómo subir el sitio a tu hosting compartido.

### Resumen rápido:

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting
3. Asegúrate de que `.htaccess` esté incluido
4. ¡Listo!

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos
- **React Icons** - Biblioteca de iconos
- **Google Maps** - Integración de mapas

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🎯 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph tags para redes sociales
- Títulos y descripciones apropiados
- Estructura semántica HTML5
- Sitemap compatible (se genera con el build)

## 📄 Licencia

© 2025 CLUB VR Futsal. Todos los derechos reservados.

## 📞 Contacto

- **Dirección:** Calle 71 # 73a-44, Bogotá, Colombia
- **Teléfono:** +57 XXX XXX XXXX (actualizar con número real)
- **Email:** info@clubvrfutsal.com (actualizar con email real)

---

## 📝 Notas Importantes

### Antes de Publicar:

- [ ] Actualizar número de teléfono en Contact.jsx y Footer.jsx
- [ ] Actualizar email en Contact.jsx y Footer.jsx
- [ ] Actualizar enlaces de redes sociales (Facebook, Instagram, WhatsApp)
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Actualizar iframe de Google Maps con ubicación exacta
- [ ] Verificar horarios y categorías en Schedule.jsx
- [ ] Probar todas las rutas y navegación
- [ ] Verificar diseño responsive en diferentes dispositivos

### Para Actualizar el Sitio Después de Publicado:

1. Hacer cambios en el código
2. Ejecutar `npm run build`
3. Subir los archivos actualizados de `dist/` al servidor
4. Limpiar caché del navegador (Ctrl+F5)

---

**¡Gracias por elegir esta solución para CLUB VR Futsal!** 🏆⚽

Si tienes preguntas o necesitas ayuda, consulta la documentación o contacta al desarrollador.
