
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gratuity-600 opacity-90"></div>
      
      <svg
        className="absolute left-0 top-0 h-full w-48 text-white transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="md:ml-auto md:w-2/3 lg:pr-16 flex flex-col items-center md:items-start">
          <h2 className="text-base font-semibold uppercase tracking-wider text-white">
            No esperes más
          </h2>
          <p className="mt-2 text-3xl font-bold text-white text-center md:text-left">
            Toma Control de tu Gratuity Hoy
          </p>
          <p className="mt-3 text-lg text-gratuity-100 text-center md:text-left">
            Calcula tu gratificación de fin de servicio y aprende todo lo que necesitas saber sobre tus derechos en UAE.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gratuity-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Usar la Calculadora
            </Link>
            <Link
              to="/gratuity-law-uae"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gratuity-500 hover:border-gratuity-500 transition-colors"
            >
              Aprender más sobre Gratuity
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
