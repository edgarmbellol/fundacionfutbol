import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import DynamicImage from '../components/DynamicImage';

// Importar todas las fotos de la galería por defecto
import foto1Default from '../assets/gallery/foto1.jpg';
import foto2Default from '../assets/gallery/foto2.jpg';
import foto3Default from '../assets/gallery/foto3.jpg';
import foto4Default from '../assets/gallery/foto4.jpg';
import foto5Default from '../assets/gallery/foto5.jpg';
import foto6Default from '../assets/gallery/foto6.jpg';
import foto7Default from '../assets/gallery/foto7.jpg';
import foto8Default from '../assets/gallery/foto8.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    const baseImages = [
      { id: 1, defaultSrc: foto1Default, type: 'foto1', title: 'Entrenamiento Sub-7', description: 'Niños en sesión de entrenamiento' },
      { id: 2, defaultSrc: foto2Default, type: 'foto2', title: 'Partido Amistoso', description: 'Encuentro deportivo con otro club' },
      { id: 3, defaultSrc: foto3Default, type: 'foto3', title: 'Celebración de Gol', description: 'Momento de alegría en el campo' },
      { id: 4, defaultSrc: foto4Default, type: 'foto4', title: 'Equipo Sub-11', description: 'Foto oficial del equipo' },
      { id: 5, defaultSrc: foto5Default, type: 'foto5', title: 'Torneo Local', description: 'Participación en competencia' },
      { id: 6, defaultSrc: foto6Default, type: 'foto6', title: 'Entrenadores', description: 'Nuestro equipo técnico' },
      { id: 7, defaultSrc: foto7Default, type: 'foto7', title: 'Premiación', description: 'Entrega de medallas y trofeos' },
      { id: 8, defaultSrc: foto8Default, type: 'foto8', title: 'Instalaciones', description: 'Cancha donde entrenamos' },
    ];

    if (isDevelopment) {
      setImages(baseImages.map(img => ({ ...img, src: img.defaultSrc })));
    } else {
      // Intentar cargar desde uploads/
      const loadedImages = baseImages.map(img => {
        const uploadsPath = `/uploads/gallery/${img.type}.jpg?v=${Date.now()}`;
        return { ...img, src: uploadsPath, fallbackSrc: img.defaultSrc };
      });
      setImages(loadedImages);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Galería</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Momentos especiales y recuerdos de nuestra familia CLUB VR Futsal
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => openModal(image)}
                style={{ backgroundColor: '#f0f0f0' }}
              >
                {/* Imagen de la galería */}
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover"
                  style={{ display: 'block', width: '100%', height: '256px', objectFit: 'cover' }}
                  onError={(e) => {
                    // Si falla cargar desde uploads/, usar la imagen por defecto
                    if (image.fallbackSrc) {
                      e.target.src = image.fallbackSrc;
                    } else if (image.defaultSrc) {
                      e.target.src = image.defaultSrc;
                    }
                  }}
                />

                {/* Overlay - solo visible al hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}
                >
                  <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería adicional - Videos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Videos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/kZMQRStt6eI"
                  title="CLUB VR Futsal - Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">CLUB VR Futsal</h3>
                <p className="text-gray-600 text-sm">Actividades y momentos especiales</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/_AsqrP7EjvY"
                  title="CLUB VR Futsal - Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">CLUB VR Futsal</h3>
                <p className="text-gray-600 text-sm">Entrenamientos y competencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={closeModal}
          >
            <FaTimes size={32} />
          </button>
          <div className="max-w-4xl w-full">
            {/* Imagen ampliada */}
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                if (selectedImage.fallbackSrc) {
                  e.target.src = selectedImage.fallbackSrc;
                } else if (selectedImage.defaultSrc) {
                  e.target.src = selectedImage.defaultSrc;
                }
              }}
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

