import { useState, useEffect } from 'react';

const DynamicImage = ({ defaultSrc, imageType, alt, className, style, ...props }) => {
  const [imageSrc, setImageSrc] = useState(defaultSrc);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // En desarrollo, usar imagen por defecto
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isDevelopment) {
      setImageSrc(defaultSrc);
      setLoading(false);
      return;
    }

    // En producción, intentar cargar desde uploads/
    const uploadsPath = imageType.startsWith('foto') 
      ? `/uploads/gallery/${imageType}.jpg`
      : `/uploads/${imageType}.jpg`;

    const img = new Image();
    img.onload = () => {
      setImageSrc(uploadsPath + '?v=' + Date.now());
      setLoading(false);
    };
    img.onerror = () => {
      setImageSrc(defaultSrc);
      setLoading(false);
    };
    img.src = uploadsPath;
  }, [defaultSrc, imageType]);

  return (
    <img 
      src={imageSrc} 
      alt={alt}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default DynamicImage;

