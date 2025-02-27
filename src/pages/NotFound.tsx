
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="text-gratuity-600 mb-6">
            <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Página no encontrada</h1>
          <p className="mt-3 text-base text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gratuity-600 hover:bg-gratuity-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500 transition-colors duration-150">
              Volver a la página principal
            </Link>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-medium text-gray-900">Páginas populares</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  Calculadora de Gratuity
                </Link>
              </li>
              <li>
                <Link to="/gratuity-law-uae" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  Ley de Gratuity en UAE
                </Link>
              </li>
              <li>
                <Link to="/gratuity-calculation-uae" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  Cómo Calcular Gratuity
                </Link>
              </li>
              <li>
                <Link to="/gratuity-faqs" className="text-gratuity-600 hover:text-gratuity-800 transition-colors">
                  Preguntas Frecuentes
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
