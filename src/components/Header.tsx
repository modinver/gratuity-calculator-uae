
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-gratuity-700 transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              to="/gratuity-law-uae-guide"
              className="text-sm font-medium hover:text-gratuity-700 transition-colors"
            >
              {t('law_guide')}
            </Link>
            <Link
              to="/gratuity-calculation-guide"
              className="text-sm font-medium hover:text-gratuity-700 transition-colors"
            >
              {t('calculation_guide')}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-gratuity-700 transition-colors"
            >
              {t('contact')}
            </Link>
          </nav>
          
          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-base font-medium hover:text-gratuity-700 transition-colors px-4"
              >
                {t('home')}
              </Link>
              <Link
                to="/gratuity-law-uae-guide"
                className="text-base font-medium hover:text-gratuity-700 transition-colors px-4"
              >
                {t('law_guide')}
              </Link>
              <Link
                to="/gratuity-calculation-guide"
                className="text-base font-medium hover:text-gratuity-700 transition-colors px-4"
              >
                {t('calculation_guide')}
              </Link>
              <Link
                to="/contact"
                className="text-base font-medium hover:text-gratuity-700 transition-colors px-4"
              >
                {t('contact')}
              </Link>
              <div className="px-4 pt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
