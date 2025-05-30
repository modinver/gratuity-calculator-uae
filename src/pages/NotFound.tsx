
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found | GratuityLaw.com</title>
        <meta 
          name="description" 
          content="The page you were looking for could not be found. Explore our UAE gratuity calculator, guides on UAE labor law, and resources for end-of-service benefits calculation." 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="text-gratuity-600 mb-6">
            <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{t('page_not_found')}</h1>
          <p className="mt-3 text-base text-gray-600">
            {t('sorry_message')}
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gratuity-600 hover:bg-gratuity-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500 transition-colors duration-150">
              {t('back_home')}
            </Link>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-medium text-gray-900">{t('popular_pages')}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  {t('gratuity_calculator')}
                </Link>
              </li>
              <li>
                <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  {t('uae_law')}
                </Link>
              </li>
              <li>
                <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  {t('how_calculate')}
                </Link>
              </li>
              <li>
                <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  {t('gratuity_eligibility')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
