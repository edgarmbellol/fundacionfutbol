import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaTrophy, FaUsers, FaFutbol, FaHeart } from 'react-icons/fa';
import heroBgDefault from '../assets/hero-bg.jpg';

const Home = () => {
  const [heroBg, setHeroBg] = useState(heroBgDefault);

  useEffect(() => {
    // Intentar cargar imagen desde uploads/
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (!isDevelopment) {
      const img = new Image();
      img.onload = () => setHeroBg('/uploads/hero-bg.jpg?v=' + Date.now());
      img.onerror = () => setHeroBg(heroBgDefault);
      img.src = '/uploads/hero-bg.jpg';
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            CLUB VR Futsal
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Formando Campeones
          </h2>
          <p className="text-xl md:text-2xl mb-4 italic font-light">
            "Dios, Decisión y Disciplina nos hace grandes"
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Somos una fundación dedicada a formar niños y jóvenes entre 5 y 17 años 
            en el deporte del fútbol sala, promoviendo valores y disciplina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ¡Únete Ahora!
            </Link>
            <Link
              to="/nosotros"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Características principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              ¿Por qué elegir CLUB VR Futsal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brindamos una formación integral que va más allá del deporte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Excelencia Deportiva
              </h3>
              <p className="text-gray-600">
                Entrenamiento profesional enfocado en el desarrollo de habilidades técnicas y tácticas
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Trabajo en Equipo
              </h3>
              <p className="text-gray-600">
                Fomentamos el compañerismo y la colaboración entre todos nuestros jugadores
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFutbol className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Pasión por el Fútbol
              </h3>
              <p className="text-gray-600">
                Cultivamos el amor por el deporte y la dedicación en cada entrenamiento
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Valores y Disciplina
              </h3>
              <p className="text-gray-600">
                Formamos personas íntegras basadas en respeto, responsabilidad y esfuerzo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de edad */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Categorías por Edad
            </h2>
            <p className="text-xl text-gray-600">
              Aceptamos niños y jóvenes desde los 5 hasta los 17 años
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Sub-7', age: '5-6 años' },
              { name: 'Sub-9', age: '7-8 años' },
              { name: 'Sub-11', age: '9-10 años' },
              { name: 'Sub-13', age: '11-12 años' },
              { name: 'Sub-15', age: '13-14 años' },
              { name: 'Sub-17', age: '15-17 años' },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-primary text-white p-6 rounded-lg text-center card-hover cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm">{category.age}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/horarios"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Horarios Completos
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para ser parte de nuestra familia?
          </h2>
          <p className="text-xl mb-8">
            Únete a CLUB VR Futsal y descubre todo tu potencial en el fútbol sala
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

