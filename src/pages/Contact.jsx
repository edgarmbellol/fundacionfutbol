import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Contáctanos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para responder todas tus preguntas y ayudarte a unirte a nuestra familia
          </p>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-1">Dirección</h3>
                    <p className="text-gray-700">Calle 71 # 73a-44</p>
                    <p className="text-gray-700">Bogotá, Colombia</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-1">Teléfono</h3>
                    <p className="text-gray-700">+57 XXX XXX XXXX</p>
                    <p className="text-gray-600 text-sm">Lunes a Viernes: 2:00 PM - 8:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-1">Email</h3>
                    <p className="text-gray-700">info@clubvrfutsal.com</p>
                    <p className="text-gray-600 text-sm">Respuesta en 24-48 horas</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-1">Horario de Atención</h3>
                    <p className="text-gray-700">Lunes a Viernes: 2:00 PM - 8:00 PM</p>
                    <p className="text-gray-700">Sábados: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={28} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={28} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Encuéntranos
              </h2>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Google Maps Embed */}
                <iframe
                  title="Ubicación CLUB VR Futsal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.632343157389!2d-74.11499!3d4.709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c5e52f5a5e5%3A0x5e5e5e5e5e5e5e5e!2sCalle%2071%20%2373a-44%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                question: '¿Cuál es el proceso de inscripción?',
                answer: 'Contáctanos por WhatsApp, teléfono o correo electrónico. Te brindaremos toda la información sobre documentos necesarios, costos y disponibilidad de cupos en la categoría correspondiente.',
              },
              {
                question: '¿Qué documentos necesito para inscribir a mi hijo?',
                answer: 'Necesitarás fotocopia del documento de identidad del niño, certificado médico de aptitud física, formulario de inscripción (que te proporcionamos) y autorización firmada por los padres.',
              },
              {
                question: '¿Ofrecen clases de prueba?',
                answer: 'Sí, ofrecemos una clase de prueba gratuita para que el niño conozca el club, las instalaciones y el método de entrenamiento antes de tomar la decisión de inscribirse.',
              },
              {
                question: '¿Cuál es el costo de la inscripción?',
                answer: 'Los costos varían según la categoría y el plan elegido (mensual o trimestral). Contáctanos para recibir información detallada sobre precios y formas de pago.',
              },
              {
                question: '¿Qué pasa si mi hijo no puede asistir a un entrenamiento?',
                answer: 'Entendemos que pueden surgir imprevistos. Pedimos que nos notifiquen las ausencias. Dependiendo del motivo, se pueden coordinar sesiones de recuperación.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-secondary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-xl mb-8">
            No dudes en contactarnos. Estamos aquí para ayudarte en todo el proceso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/57XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="mr-2" size={24} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

