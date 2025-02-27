
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('gratuity-calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col items-center z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gratuity-100 text-gratuity-800 mb-6 animate-fade-in">
          {t('free_calculator')}
        </span>
        
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 leading-tight tracking-tight max-w-5xl animate-slide-down ${language === 'ar' ? 'font-arabic' : ''}`}>
          {t('hero_title')}
        </h1>
        
        <p className="mt-6 max-w-2xl text-center text-xl text-gray-600 animate-slide-down delay-100">
          {t('hero_subtitle')}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-down delay-200">
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gratuity-600 hover:bg-gratuity-700 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500"
          >
            {t('use_calculator')}
            <ArrowDown className="ml-2 h-4 w-4" />
          </button>
          
          <Link
            to="/gratuity-law-uae-guide"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500"
          >
            {t('learn_law')}
          </Link>
        </div>
        
        <div className="mt-16 w-full max-w-4xl mx-auto glassmorphism animate-fade-in delay-300">
          <div className="flex flex-col md:flex-row justify-between p-6 md:p-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-sm font-semibold text-gratuity-800 uppercase tracking-wide">
                {t('precise_calculation')}
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {t('compliant_law')}
              </p>
              <p className="mt-3 text-lg text-gray-600">
                {t('updated_regulations')}
              </p>
            </div>
            
            <div className="self-center">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-12 w-12 text-gratuity-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium text-gray-900">{t('verified_experts')}</p>
                  <p className="text-gray-600">{t('legal_consultants')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
