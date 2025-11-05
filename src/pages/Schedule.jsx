import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const Schedule = () => {
  const categories = [
    {
      name: 'Sub-7',
      age: '5-6 años',
      days: 'Lunes y Miércoles',
      time: '3:00 PM - 4:00 PM',
      description: 'Iniciación deportiva con énfasis en coordinación y diversión',
      maxPlayers: '15 niños',
    },
    {
      name: 'Sub-9',
      age: '7-8 años',
      days: 'Lunes y Miércoles',
      time: '4:00 PM - 5:00 PM',
      description: 'Desarrollo de fundamentos básicos del fútbol sala',
      maxPlayers: '18 niños',
    },
    {
      name: 'Sub-11',
      age: '9-10 años',
      days: 'Martes y Jueves',
      time: '3:00 PM - 4:30 PM',
      description: 'Perfeccionamiento técnico y trabajo táctico grupal',
      maxPlayers: '20 niños',
    },
    {
      name: 'Sub-13',
      age: '11-12 años',
      days: 'Martes y Jueves',
      time: '4:30 PM - 6:00 PM',
      description: 'Entrenamiento competitivo con preparación para torneos',
      maxPlayers: '20 niños',
    },
    {
      name: 'Sub-15',
      age: '13-14 años',
      days: 'Miércoles y Viernes',
      time: '5:00 PM - 6:30 PM',
      description: 'Entrenamiento avanzado con enfoque táctico y físico',
      maxPlayers: '22 jugadores',
    },
    {
      name: 'Sub-17',
      age: '15-17 años',
      days: 'Miércoles y Viernes',
      time: '6:30 PM - 8:00 PM',
      description: 'Alto rendimiento y preparación pre-profesional',
      maxPlayers: '22 jugadores',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Horarios y Categorías</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Encuentra la categoría perfecta para tu edad y revisa nuestros horarios de entrenamiento
          </p>
        </div>
      </section>

      {/* Categorías y horarios */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden card-hover"
              >
                {/* Header de la card */}
                <div className="bg-primary text-white p-6 text-center">
                  <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg">{category.age}</p>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <FaCalendarAlt className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Días</p>
                      <p className="text-gray-600">{category.days}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Horario</p>
                      <p className="text-gray-600">{category.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaUsers className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Cupos</p>
                      <p className="text-gray-600">{category.maxPlayers}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Información Adicional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ubicación */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Ubicación</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Todos nuestros entrenamientos se realizan en:
              </p>
              <p className="font-semibold text-lg text-gray-800 mb-2">
                Calle 71 # 73a-44
              </p>
              <p className="text-gray-700 mb-4">Bogotá, Colombia</p>
              <p className="text-gray-600 text-sm">
                Contamos con instalaciones modernas y seguras, especialmente diseñadas 
                para la práctica del fútbol sala.
              </p>
            </div>

            {/* Qué incluye */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                ¿Qué incluye la inscripción?
              </h3>
              <ul className="space-y-3">
                {[
                  'Entrenamiento 2 veces por semana',
                  'Uniforme oficial del club',
                  'Seguro deportivo',
                  'Participación en torneos',
                  'Seguimiento personalizado',
                  'Acceso a eventos especiales',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8">
            Inscribe a tu hijo en la categoría correspondiente y únete a nuestra familia deportiva
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

export default Schedule;

