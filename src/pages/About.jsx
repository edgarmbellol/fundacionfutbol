import { useState, useEffect } from 'react';
import { FaCheck, FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import aboutImageDefault from '../assets/about-team.jpg';

const About = () => {
  const [aboutImage, setAboutImage] = useState(aboutImageDefault);

  useEffect(() => {
    // Intentar cargar imagen desde uploads/
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (!isDevelopment) {
      const img = new Image();
      img.onload = () => setAboutImage('/uploads/about-team.jpg?v=' + Date.now());
      img.onerror = () => setAboutImage(aboutImageDefault);
      img.src = '/uploads/about-team.jpg';
    }
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce más sobre nuestra historia, misión y valores que nos definen
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                CLUB VR Futsal nació con el sueño de formar niños y jóvenes no solo como 
                deportistas excepcionales, sino como personas íntegras y comprometidas con 
                su comunidad.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Desde nuestros inicios, hemos trabajado incansablemente para ofrecer un 
                espacio seguro donde los jóvenes puedan desarrollar sus habilidades 
                deportivas mientras cultivan valores fundamentales como el respeto, 
                la disciplina y el trabajo en equipo.
              </p>
              <p className="text-lg text-gray-700">
                Con el lema "Dios, Decisión y Disciplina nos hace grandes", inspiramos a 
                cada jugador a dar lo mejor de sí mismo, tanto dentro como fuera de la cancha.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Equipo CLUB VR Futsal" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <FaBullseye className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Formar integralmente a niños y jóvenes a través del fútbol sala, 
                desarrollando sus capacidades deportivas, personales y sociales, 
                promoviendo valores fundamentales que les permitan ser ciudadanos 
                ejemplares y deportistas comprometidos.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <FaEye className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Nuestra Visión</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser reconocidos como la fundación líder en formación de fútbol sala 
                en Bogotá, destacándonos por la excelencia deportiva y el desarrollo 
                integral de nuestros jugadores, siendo un referente en valores y 
                compromiso social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada una de nuestras acciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Disciplina',
                description: 'Fomentamos el compromiso, la constancia y la dedicación en cada entrenamiento.',
              },
              {
                title: 'Respeto',
                description: 'Valoramos la dignidad de cada persona, promoviendo la convivencia armoniosa.',
              },
              {
                title: 'Trabajo en Equipo',
                description: 'Creemos en la fuerza del colectivo y la importancia de colaborar juntos.',
              },
              {
                title: 'Responsabilidad',
                description: 'Formamos jugadores conscientes de sus deberes y compromisos.',
              },
              {
                title: 'Honestidad',
                description: 'Promovemos la transparencia, la verdad y el juego limpio.',
              },
              {
                title: 'Perseverancia',
                description: 'Enseñamos a nuestros jugadores a no rendirse ante los desafíos.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-3">
                  <FaCheck className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-secondary">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Beneficios de Unirse al Club
            </h2>
            <p className="text-xl text-gray-600">
              Lo que obtendrás al ser parte de nuestra familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Entrenamiento profesional con coaches certificados',
              'Desarrollo de habilidades técnicas y tácticas del fútbol sala',
              'Participación en torneos y competencias locales',
              'Ambiente seguro y familiar para el aprendizaje',
              'Formación en valores y desarrollo personal',
              'Uniforme y equipamiento deportivo',
              'Horarios flexibles adaptados a diferentes edades',
              'Instalaciones adecuadas para la práctica',
              'Seguimiento personalizado del progreso de cada jugador',
              'Actividades recreativas y eventos especiales',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
              >
                <FaStar className="text-primary text-xl mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¡Forma parte de nuestra historia!
          </h2>
          <p className="text-xl mb-8">
            Únete a CLUB VR Futsal y sé parte de una comunidad que transforma vidas
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Inscríbete Ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

