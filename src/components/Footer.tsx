
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

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
              Comprehensive guide on labor gratuity in the United Arab Emirates. Expert advice and accurate calculations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Laws & Rules</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gratuity-law-uae-guide" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  UAE Gratuity Law
                </Link>
              </li>
              <li>
                <Link to="/limited-vs-unlimited-contracts" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Contract Types
                </Link>
              </li>
              <li>
                <Link to="/who-is-eligible-for-gratuity-uae" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Eligibility Requirements
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-gray-600 hover:text-gratuity-700 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Gratuity UAE Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
