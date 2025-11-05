// Función para cargar imágenes con fallback
export const getImageUrl = (defaultImage, imageType) => {
  // En desarrollo, usar las imágenes por defecto
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return defaultImage;
  }

  // En producción, intentar cargar desde uploads/ primero
  const uploadsPath = imageType.startsWith('foto') 
    ? `/uploads/gallery/${imageType}.jpg`
    : `/uploads/${imageType}.jpg`;

  return uploadsPath;
};

// Hook para cargar imágenes con fallback
export const useImageWithFallback = (defaultImage, imageType) => {
  const [imageSrc, setImageSrc] = React.useState(defaultImage);

  React.useEffect(() => {
    // En desarrollo, usar imagen por defecto
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setImageSrc(defaultImage);
      return;
    }

    // En producción, intentar cargar desde uploads/
    const uploadsPath = imageType.startsWith('foto') 
      ? `/uploads/gallery/${imageType}.jpg`
      : `/uploads/${imageType}.jpg`;

    const img = new Image();
    img.onload = () => setImageSrc(uploadsPath + '?v=' + Date.now());
    img.onerror = () => setImageSrc(defaultImage);
    img.src = uploadsPath;
  }, [defaultImage, imageType]);

  return imageSrc;
};

