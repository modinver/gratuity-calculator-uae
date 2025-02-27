
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language } = useLanguage();
  
  // Since we're removing the language switching functionality,
  // this component will now just display that the site is in English
  
  return (
    <div 
      className="flex items-center justify-center p-2 rounded-md text-gray-700"
      aria-label="Website language: English"
    >
      <Globe size={20} className="mr-1" />
      <span className="text-sm font-medium">English</span>
    </div>
  );
};

export default LanguageSwitcher;
