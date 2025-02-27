
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-gratuity-800">
                Gratuity UAE
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gratuity-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/gratuity-law-uae" className="text-gray-600 hover:text-gratuity-700 transition-colors">
                  Leyes de Gratuity
                </Link>
              </li>
              <li>
                <Link to="/gratuity-calculation-uae" className="text-gray-600 hover:text-gratuity-700 transition-colors">
                  Cálculo
                </Link>
              </li>
              <li>
                <Link to="/gratuity-faqs" className="text-gray-600 hover:text-gratuity-700 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gratuity-700 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gratuity-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gratuity-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/gratuity-law-uae" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Leyes de Gratuity
            </Link>
            <Link 
              to="/gratuity-calculation-uae" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Cálculo
            </Link>
            <Link 
              to="/gratuity-faqs" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Preguntas Frecuentes
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
