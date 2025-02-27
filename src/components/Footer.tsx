
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Gratuity UAE</h3>
            <p className="text-sm text-gray-600">
              Calculadora y guía completa sobre la gratificación laboral en Emiratos Árabes Unidos
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Leyes y Normas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-law-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Ley de Gratuity en UAE
                </Link>
              </li>
              <li>
                <Link to="/limited-vs-unlimited-contracts" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Contratos Limitados vs Ilimitados
                </Link>
              </li>
              <li>
                <Link to="/gratuity-eligibility" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Elegibilidad para Gratuity
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Cálculo</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-calculation-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Cómo Calcular el Gratuity
                </Link>
              </li>
              <li>
                <Link to="/factors-affecting-gratuity" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Factores que Afectan el Gratuity
                </Link>
              </li>
              <li>
                <Link to="/gratuity-terminated-employees" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Gratuity para Empleados Despedidos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-faqs" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/invest-gratuity-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Cómo Invertir tu Gratuity
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Gratuity UAE Calculator. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
