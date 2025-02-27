
import React from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative h-10 w-10 bg-gradient-to-br from-gratuity-600 to-gratuity-800 rounded-lg shadow-md flex items-center justify-center">
        <Calculator size={20} className="text-white" />
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gratuity-600">
          <DollarSign size={12} className="text-gratuity-700" />
        </div>
      </div>
      
      <div className="flex flex-col ml-3">
        <span className="text-lg font-bold text-gratuity-800 leading-tight tracking-wide">ActuDubai.com</span>
        <span className="text-xs text-gray-600 leading-tight tracking-wide">Gratuity Calculator</span>
      </div>
    </Link>
  );
};

export default Logo;
