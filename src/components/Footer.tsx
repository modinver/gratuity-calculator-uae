
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0369a1] text-[#FEF7CD]">
      {/* Decorative Wave Pattern */}
      <div className="h-6 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iI2ZlZjdjZCIgZmlsbC1vcGFjaXR5PSIwLjIiIGQ9Ik0wLDAsUzAsMTIwLDAsNTAsWiI+PCEtLSB3aGF0ZXZlciAtLT48L3BhdGg+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-[#FEF7CD] pb-2 inline-block">Gratuity UAE</h3>
            <p className="text-[#FEF7CD] text-opacity-90">
              Comprehensive guide on labor gratuity in the United Arab Emirates. Expert advice and accurate calculations.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FEF7CD] hover:text-white transition-colors">
                <Facebook size={22} className="drop-shadow-md" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FEF7CD] hover:text-white transition-colors">
                <Twitter size={22} className="drop-shadow-md" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FEF7CD] hover:text-white transition-colors">
                <Instagram size={22} className="drop-shadow-md" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FEF7CD] hover:text-white transition-colors">
                <Linkedin size={22} className="drop-shadow-md" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#FEF7CD] hover:text-white transition-colors">
                <Youtube size={22} className="drop-shadow-md" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white border-b-2 border-[#FEF7CD] pb-2 inline-block mb-6">Laws & Rules</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/gratuity-law-uae-guide" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  UAE Gratuity Law
                </Link>
              </li>
              <li>
                <Link to="/limited-vs-unlimited-contracts" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Contract Types
                </Link>
              </li>
              <li>
                <Link to="/who-is-eligible-for-gratuity-uae" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link to="/gratuity-calculation-uae-guide" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Calculation Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white border-b-2 border-[#FEF7CD] pb-2 inline-block mb-6">About Us</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about-us" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white border-b-2 border-[#FEF7CD] pb-2 inline-block mb-6">Policies</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-[#0EA5E9] hover:text-white transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEF7CD] mr-2"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#FEF7CD] border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center md:justify-start">
              <Mail size={18} className="text-[#FEF7CD] mr-2" />
              <a href="mailto:info@gratuityuae.com" className="text-[#0EA5E9] hover:text-white">info@gratuityuae.com</a>
            </div>
            <div className="flex items-center justify-center">
              <Phone size={18} className="text-[#FEF7CD] mr-2" />
              <a href="tel:+971 4 123 4567" className="text-[#0EA5E9] hover:text-white">+971 4 123 4567</a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin size={18} className="text-[#FEF7CD] mr-2" />
              <span className="text-[#FEF7CD]">Dubai, United Arab Emirates</span>
            </div>
          </div>
          
          <p className="text-center text-[#FEF7CD] text-opacity-90">
            © {currentYear} <span className="font-semibold">Gratuity UAE Calculator</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
