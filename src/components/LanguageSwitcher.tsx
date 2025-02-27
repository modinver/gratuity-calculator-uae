
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gratuity-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gratuity-500"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe size={20} className="mr-1" />
      <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitcher;
