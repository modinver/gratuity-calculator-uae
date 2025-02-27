
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface DropdownProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
  isOpen: boolean;
  toggleDropdown: () => void;
}

const NavDropdown: React.FC<DropdownProps> = ({ title, items, isOpen, toggleDropdown }) => {
  const { language } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
        toggleDropdown();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);
  
  return (
    <div className="relative group" ref={dropdownRef}>
      <button 
        className="flex items-center text-gray-600 hover:text-gratuity-700 transition-colors text-sm font-medium py-2"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown 
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className={`absolute z-50 ${language === 'ar' ? 'right-0' : 'left-0'} mt-0 w-56 bg-white rounded-md shadow-lg py-1 animate-fade-in border border-gray-100`}>
          {items.map((item, index) => (
            <Link 
              key={index}
              to={item.href}
              className="block px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 hover:text-gratuity-700"
              onClick={toggleDropdown}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Navigation structure
  const navItems = {
    laws: {
      title: t('gratuity_laws'),
      items: [
        { label: 'UAE Gratuity Law', href: '/gratuity-law-uae-guide' },
        { label: 'Limited vs Unlimited Contracts', href: '/limited-vs-unlimited-contracts' },
        { label: 'Eligibility for Gratuity', href: '/who-is-eligible-for-gratuity-uae' }
      ]
    },
    calculation: {
      title: t('calculation'),
      items: [
        { label: 'How to Calculate Gratuity', href: '/gratuity-calculation-uae-guide' },
        { label: 'Factors Affecting Gratuity', href: '/factors-affecting-gratuity' },
        { label: 'Gratuity for Terminated Employees', href: '/gratuity-terminated-employees' }
      ]
    },
    claims: {
      title: 'Claims & Disputes',
      items: [
        { label: 'How to Claim Gratuity', href: '/how-to-claim-gratuity-uae' },
        { label: 'Employer Did Not Pay Gratuity', href: '/unpaid-gratuity-uae' },
        { label: 'Legal Actions & Dispute Resolution', href: '/gratuity-dispute-resolution' }
      ]
    },
    tax: {
      title: 'Tax & Deductions',
      items: [
        { label: 'Is Gratuity Taxable?', href: '/is-gratuity-taxable-in-uae/' },
        { label: 'Deductions & Salary Impact', href: '/gratuity-deductions-uae' }
      ]
    },
    managing: {
      title: 'Managing Gratuity',
      items: [
        { label: 'Best Ways to Invest Gratuity', href: '/invest-gratuity-uae' },
        { label: 'Financial Planning After Gratuity', href: '/financial-planning-gratuity' }
      ]
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-semibold text-gratuity-800">
                Gratuity UAE
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-5">
              <li>
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gratuity-700 transition-colors py-2">
                  {t('home')}
                </Link>
              </li>
              <li>
                <NavDropdown 
                  title={t('gratuity_laws')}
                  items={navItems.laws.items}
                  isOpen={openDropdown === 'laws'}
                  toggleDropdown={() => toggleDropdown('laws')}
                />
              </li>
              <li>
                <NavDropdown 
                  title={t('calculation')}
                  items={navItems.calculation.items}
                  isOpen={openDropdown === 'calculation'}
                  toggleDropdown={() => toggleDropdown('calculation')}
                />
              </li>
              <li>
                <NavDropdown 
                  title="Claims & Disputes"
                  items={navItems.claims.items}
                  isOpen={openDropdown === 'claims'}
                  toggleDropdown={() => toggleDropdown('claims')}
                />
              </li>
              <li>
                <NavDropdown 
                  title="Tax & Deductions"
                  items={navItems.tax.items}
                  isOpen={openDropdown === 'tax'}
                  toggleDropdown={() => toggleDropdown('tax')}
                />
              </li>
              <li>
                <NavDropdown 
                  title="Managing Gratuity"
                  items={navItems.managing.items}
                  isOpen={openDropdown === 'managing'}
                  toggleDropdown={() => toggleDropdown('managing')}
                />
              </li>
            </ul>
            
            <div className="ml-5 flex items-center">
              <LanguageSwitcher />
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            
            <button 
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-gratuity-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gratuity-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-100">
            <div className="py-1">
              <Link 
                to="/" 
                className="block px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-gratuity-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
            </div>
            
            {/* Gratuity Laws & Rules */}
            <div className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Gratuity Laws & Rules
              </p>
              {navItems.laws.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="block px-3 py-1.5 rounded-md text-xs text-gray-700 hover:text-gratuity-700 hover:bg-gray-50 ml-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Gratuity Calculation */}
            <div className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Gratuity Calculation
              </p>
              {navItems.calculation.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="block px-3 py-1.5 rounded-md text-xs text-gray-700 hover:text-gratuity-700 hover:bg-gray-50 ml-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Gratuity Claims & Disputes */}
            <div className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Gratuity Claims & Disputes
              </p>
              {navItems.claims.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="block px-3 py-1.5 rounded-md text-xs text-gray-700 hover:text-gratuity-700 hover:bg-gray-50 ml-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Gratuity Tax & Deductions */}
            <div className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Gratuity Tax & Deductions
              </p>
              {navItems.tax.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="block px-3 py-1.5 rounded-md text-xs text-gray-700 hover:text-gratuity-700 hover:bg-gray-50 ml-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Managing Your Gratuity */}
            <div className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Managing Your Gratuity
              </p>
              {navItems.managing.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="block px-3 py-1.5 rounded-md text-xs text-gray-700 hover:text-gratuity-700 hover:bg-gray-50 ml-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
