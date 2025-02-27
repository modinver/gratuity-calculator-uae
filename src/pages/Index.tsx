
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GratuityCalculator from '@/components/GratuityCalculator';
import FeatureCards from '@/components/FeatureCards';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Testimonials from '@/components/Testimonials';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' 
            ? 'Free Gratuity Calculator Updated to UAE law - ActuDubai.com'
            : 'حاسبة مكافأة نهاية الخدمة | احسب تعويضاتك في الإمارات العربية المتحدة'}
        </title>
        <meta 
          name="description" 
          content={language === 'en'
            ? 'Calculate your Gratuity now and check if your payment is in line with the current law.'
            : 'احسب مكافأة نهاية خدمتك في الإمارات باستخدام حاسبتنا المجانية. احصل على نتائج دقيقة استنادًا إلى قانون العمل الإماراتي 2024.'}
        />
        <meta name="keywords" content="Gratuity Calculator UAE, Gratuity Law, Gratuity Payment" />
        <html lang={language} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />
          
          {/* Calculator Section */}
          <section id="gratuity-calculator" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gratuity-100 text-gratuity-800">
                  {t('precise_calc')}
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {t('calculator_title')}
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('calculator_subtitle')}
                </p>
              </div>
              
              <GratuityCalculator />
            </div>
          </section>
          
          {/* Why Gratuity Matters Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {t('why_important')}
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('understand_rights')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t('maximize_payment')}</h3>
                  <p className="text-gray-600 flex-grow">
                    {t('maximize_description')}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t('avoid_legal')}</h3>
                  <p className="text-gray-600 flex-grow">
                    {t('avoid_description')}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t('plan_future')}</h3>
                  <p className="text-gray-600 flex-grow">
                    {t('plan_description')}
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Feature Cards Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {t('everything_need')}
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('explore_guide')}
                </p>
              </div>
              
              <FeatureCards />
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Testimonials />
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {t('common_questions')}
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('answers_common')}
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <FaqSection />
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <CtaSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
