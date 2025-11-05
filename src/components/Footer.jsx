import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-bold">CLUB VR Futsal</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">
              "Dios, Decisión y Disciplina nos hace grandes"
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/horarios" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Horarios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Calle 71 # 73a-44<br />
                  Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+57 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@clubvrfutsal.com</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Únete a nuestra comunidad y mantente informado de todas nuestras actividades.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CLUB VR Futsal. Todos los derechos reservados.
            </p>
            
            {/* Botón discreto de administración */}
            <Link
              to="/admin/login"
              className="text-gray-600 hover:text-primary transition-colors text-xs opacity-50 hover:opacity-100"
              title="Panel de Administración"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

