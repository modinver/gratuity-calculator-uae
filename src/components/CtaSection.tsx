
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Calculator } from 'lucide-react';

const CtaSection = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  
  const isHomepage = location.pathname === '/';
  const isCalculatorPage = location.pathname.includes('/calculator');
  
  // Custom CTA buttons based on current page
  const renderCtaButtons = () => {
    // If on calculator page, suggest reading about the law
    if (isCalculatorPage) {
      return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link
            to="/gratuity-law-uae-guide"
            className="inline-flex items-center justify-center rounded-md bg-gratuity-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gratuity-800 focus:outline-none focus:ring-2 focus:ring-gratuity-500 focus:ring-offset-2"
          >
            {t('learn_law')}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      );
    }
    
    // Default CTA buttons for other pages
    return (
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <Link
          to="/#gratuity-calculator"
          className={`inline-flex items-center justify-center rounded-md ${language === 'en' ? 'flex-row' : 'flex-row-reverse'} bg-gratuity-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gratuity-800 focus:outline-none focus:ring-2 focus:ring-gratuity-500 focus:ring-offset-2`}
        >
          {language === 'en' && <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />}
          {t('use_calculator_cta')}
          {language !== 'en' && <Calculator className="ml-2 h-5 w-5" aria-hidden="true" />}
        </Link>
        
        <Link
          to="/gratuity-law-uae-guide"
          className={`inline-flex items-center justify-center rounded-md ${language === 'en' ? 'flex-row' : 'flex-row-reverse'} border border-transparent bg-white px-6 py-3 text-base font-medium text-gratuity-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gratuity-500 focus:ring-offset-2`}
        >
          {t('learn_more_gratuity')}
          {language === 'en' ? 
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /> :
            <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
          }
        </Link>
      </div>
    );
  };
  
  return (
    <section className="bg-gratuity-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('dont_wait')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {t('take_control')}
          </p>
          <div className="mt-8">
            {renderCtaButtons()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
