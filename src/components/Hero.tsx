
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Book, CheckCircle, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="bg-gradient-to-b from-gratuity-50 to-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gratuity-100 text-gratuity-800">
              {t('free_calculator')}
            </span>
            
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {t('hero_title')}
            </h1>
            
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
              {t('hero_subtitle')}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/#gratuity-calculator"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gratuity-700 hover:bg-gratuity-800 md:py-4 md:text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {t('use_calculator')}
              </Link>
              
              <Link
                to="/gratuity-law-uae-guide"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gratuity-700 bg-gratuity-50 hover:bg-gratuity-100 md:py-4 md:text-lg"
              >
                <Book className="w-5 h-5 mr-2" />
                {t('learn_law')}
              </Link>
            </div>
            
            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="flex-shrink-0 h-5 w-5 text-gratuity-600" />
                <p className="ml-2 text-sm text-gray-600">{t('precise_calculation')}</p>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start">
                <Shield className="flex-shrink-0 h-5 w-5 text-gratuity-600" />
                <p className="ml-2 text-sm text-gray-600">{t('compliant_law')}</p>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start">
                <Award className="flex-shrink-0 h-5 w-5 text-gratuity-600" />
                <p className="ml-2 text-sm text-gray-600">{t('verified_experts')}</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="UAE Gratuity Calculator" 
              className="w-full max-w-lg object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
