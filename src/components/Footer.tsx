
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Heart, Star } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#38bdf8] border-b-2 border-[#38bdf8] pb-2 inline-block">Gratuity UAE</h3>
            <p className="text-gray-300">
              Comprehensive guide on labor gratuity in the United Arab Emirates. Expert advice and accurate calculations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#38bdf8] border-b-2 border-[#38bdf8] pb-2 inline-block mb-6">Laws & Rules</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/gratuity-law-uae-guide" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  UAE Gratuity Law
                </Link>
              </li>
              <li>
                <Link to="/limited-vs-unlimited-contracts" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Contract Types
                </Link>
              </li>
              <li>
                <Link to="/who-is-eligible-for-gratuity-uae" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link to="/gratuity-calculation-uae-guide" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Calculation Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#38bdf8] border-b-2 border-[#38bdf8] pb-2 inline-block mb-6">About Us</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#38bdf8] border-b-2 border-[#38bdf8] pb-2 inline-block mb-6">Policies</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-[#38bdf8] transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-2"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 border-opacity-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center md:justify-start">
              <Mail size={18} className="text-[#38bdf8] mr-2" />
              <a href="mailto:info@gratuitylaw.com" className="text-gray-300 hover:text-[#38bdf8]">info@gratuitylaw.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin size={18} className="text-[#38bdf8] mr-2" />
              <span className="text-gray-300">Dubai, United Arab Emirates</span>
            </div>
          </div>
          
          {/* Social Icons Centered */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:text-white transition-colors">
              <Facebook size={24} className="drop-shadow-lg" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:text-white transition-colors">
              <Twitter size={24} className="drop-shadow-lg" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:text-white transition-colors">
              <Instagram size={24} className="drop-shadow-lg" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:text-white transition-colors">
              <Linkedin size={24} className="drop-shadow-lg" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:text-white transition-colors">
              <Youtube size={24} className="drop-shadow-lg" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mb-4">
            <Star className="text-[#38bdf8] mx-1" size={16} />
            <Heart className="text-[#38bdf8] mx-1" size={16} />
            <Star className="text-[#38bdf8] mx-1" size={16} />
          </div>
          
          <p className="text-center text-gray-400">
            © {currentYear} <span className="font-semibold text-gray-300">Gratuity UAE Calculator</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
