
import React from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        {/* Fondo de la calculadora */}
        <div className="h-10 w-10 bg-gradient-to-br from-gratuity-600 to-gratuity-800 rounded-lg shadow-md flex items-center justify-center transform -rotate-3">
          <Calculator size={20} className="text-white" />
        </div>
        
        {/* Símbolo de dólar superpuesto */}
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gratuity-600">
          <DollarSign size={14} className="text-gratuity-700" />
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-1">
        <span className="text-lg font-bold text-gratuity-800 leading-none">ActuDbai</span>
        <span className="text-xs text-gray-600 font-light -mt-0.5">gratuity calculator</span>
      </div>
    </Link>
  );
};

export default Logo;
