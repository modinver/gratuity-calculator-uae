
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Gratuity UAE</h3>
            <p className="text-sm text-gray-600">
              {t('calculator_guide')}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('laws_rules')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-law-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('law_title')}
                </Link>
              </li>
              <li>
                <Link to="/limited-vs-unlimited-contracts" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('contracts_title')}
                </Link>
              </li>
              <li>
                <Link to="/gratuity-eligibility" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('eligibility_title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('calculation_footer')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-calculation-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('calculate_title')}
                </Link>
              </li>
              <li>
                <Link to="/factors-affecting-gratuity" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('factors_title')}
                </Link>
              </li>
              <li>
                <Link to="/gratuity-terminated-employees" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('terminated_title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('quick_links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-faqs" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('faqs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/invest-gratuity-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  {t('factors_title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Gratuity UAE Calculator. {t('rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
