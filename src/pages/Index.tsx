
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GratuityCalculator from '@/components/GratuityCalculator';
import FeatureCards from '@/components/FeatureCards';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Testimonials from '@/components/Testimonials';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Calculadora de Gratuity UAE | Calcula tu compensación laboral en Emiratos Árabes Unidos</title>
        <meta name="description" content="Calcula tu gratificación laboral en UAE con nuestra calculadora gratuita. Obtén resultados precisos basados en la ley laboral de Emiratos Árabes Unidos 2024." />
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
                  Cálculo Preciso
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Calculadora de Gratuity UAE
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Nuestra calculadora utiliza las fórmulas oficiales según la Ley Laboral de UAE 2024 para calcular tu gratificación con precisión.
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
                  ¿Por Qué es Importante Entender Gratuity?
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Tu gratuity es un derecho. Conocer cómo se calcula asegura que recibas lo que mereces.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Maximiza tu Pago</h3>
                  <p className="text-gray-600 flex-grow">
                    Aprende estrategias para obtener la gratificación más alta posible según tu situación laboral.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Evita Problemas Legales</h3>
                  <p className="text-gray-600 flex-grow">
                    Comprende tus derechos bajo las leyes laborales de UAE y evita disputas innecesarias.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-gratuity-100 p-3 rounded-full mb-4">
                    <svg className="h-8 w-8 text-gratuity-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Planifica tu Futuro</h3>
                  <p className="text-gray-600 flex-grow">
                    Aprende las mejores formas de invertir y gestionar tu gratificación para asegurar tu futuro financiero.
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
                  Todo lo que Necesitas Saber Sobre Gratuity UAE
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Explora nuestra completa guía sobre gratificaciones en Emiratos Árabes Unidos
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
                  Preguntas Frecuentes Sobre Gratuity
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Respuestas a las dudas más comunes sobre gratificaciones en UAE
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
