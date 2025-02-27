
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
          content="Calculate your UAE gratuity payment accurately with our free online calculator. Learn about UAE labor law, eligibility criteria, and how to claim your end-of-service benefits." 
        />
        <meta 
          name="keywords" 
          content="UAE gratuity calculator, end of service calculator UAE, gratuity payment UAE, UAE labor law gratuity, calculate gratuity online, gratuity eligibility UAE, how to claim gratuity" 
        />
        <link rel="canonical" href="https://www.actudubai.com/" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <GratuityCalculator />
          <FeatureCards />
          <Testimonials />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
