
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GratuityCalculator from '@/components/GratuityCalculator';
import FeatureCards from '@/components/FeatureCards';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>UAE Gratuity Calculator | Accurate End-of-Service Benefits Calculation</title>
        <meta 
          name="description" 
          content="Easily determine your end-of-service gratuity and get expert insights on UAE gratuity rules." 
        />
        <meta 
          name="keywords" 
          content="UAE gratuity calculator, end of service calculator UAE, gratuity payment UAE, UAE labor law gratuity, calculate gratuity online, gratuity eligibility UAE, how to claim gratuity, limited contract gratuity UAE" 
        />
        <link rel="canonical" href="https://gratuitylaw.com/" />
        <link rel="icon" type="image/png" href="/lovable-uploads/103b8bdd-c929-4bee-ad89-4e43fa11af15.png" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          
          <div className="py-12 md:py-16">
            <GratuityCalculator />
          </div>
          
          <div className="py-10 md:py-16 bg-gray-50">
            <FeatureCards />
          </div>
          
          <div className="py-12 md:py-20">
            <Testimonials />
          </div>
          
          <div className="py-10 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FaqSection />
            </div>
          </div>
          
          <div className="py-12 md:py-16">
            <CtaSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
