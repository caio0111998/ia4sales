import React from 'react';
import { Shield, FileText, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="IA4SALES Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-white">IA4SALES</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm sm:text-base">Termos de uso</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm sm:text-base">Política de privacidade</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm sm:text-base">Suporte</span>
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center text-gray-500">
          <p className="text-sm sm:text-base">&copy; 2024 IA4SALES. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm sm:text-base">Transformando operações comerciais com inteligência artificial real.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;