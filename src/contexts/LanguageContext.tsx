
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the available languages
type Language = 'en' | 'ar';

// Define the shape of the context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Header
  home: 'Home',
  law_guide: 'Law Guide',
  calculation_guide: 'Calculation Guide',
  contact: 'Contact',
  
  // Hero
  free_calculator: 'Free Calculator',
  hero_title: 'Calculate Your UAE Gratuity Payment',
  hero_subtitle: 'Accurately calculate your end-of-service benefits based on the latest UAE labor law.',
  use_calculator: 'Use Calculator',
  learn_law: 'Learn About the Law',
  precise_calculation: 'Precise Calculation',
  compliant_law: 'Compliant with Law',
  verified_experts: 'Verified by Experts',
  
  // Calculator
  precise_calc: 'Precise Calculator',
  calculator_title: 'UAE Gratuity Calculator',
  calculator_subtitle: 'Calculate your end-of-service gratuity payment based on the latest UAE labor law.',
  
  // Why Important
  why_important: 'Why Your Gratuity Matters',
  understand_rights: 'Understanding your rights ensures you receive the payment you deserve.',
  maximize_payment: 'Maximize Your Payment',
  maximize_description: 'Understand exactly how your gratuity is calculated to ensure you receive the full amount you\'re entitled to.',
  avoid_legal: 'Avoid Legal Disputes',
  avoid_description: 'Know your rights and entitlements to avoid potential disputes with your employer during the settlement process.',
  plan_future: 'Plan Your Financial Future',
  plan_description: 'Your gratuity can be a significant sum that can help fund your next career move or supplement your savings.',
  
  // Featured Section
  everything_need: 'Everything You Need to Know',
  explore_guide: 'Explore our complete guide to understanding gratuity in the UAE.',
  
  // FAQ
  common_questions: 'Common Questions',
  answers_common: 'Find answers to the most common questions about gratuity in the UAE.',
  
  // CTA
  still_questions: 'Still Have Questions?',
  expert_help: 'Our team is here to help ensure you receive the payment you deserve.',
  get_advice: 'Get Expert Advice',
  
  // Footer
  quick_links: 'Quick Links',
  resources: 'Resources',
  legal: 'Legal',
  privacy_policy: 'Privacy Policy',
  terms_service: 'Terms of Service',
  copyright: '© 2024 ActuDubai.com. All rights reserved.',
};

// Arabic translations
const arTranslations: Record<string, string> = {
  // Header
  home: 'الرئيسية',
  law_guide: 'دليل القانون',
  calculation_guide: 'دليل الحساب',
  contact: 'اتصل بنا',
  
  // Hero
  free_calculator: 'حاسبة مجانية',
  hero_title: 'احسب مكافأة نهاية خدمتك في الإمارات',
  hero_subtitle: 'احسب مكافأة نهاية خدمتك بدقة استنادًا إلى أحدث قانون العمل الإماراتي.',
  use_calculator: 'استخدم الحاسبة',
  learn_law: 'تعرف على القانون',
  precise_calculation: 'حساب دقيق',
  compliant_law: 'متوافق مع القانون',
  verified_experts: 'معتمد من قبل الخبراء',
  
  // Calculator
  precise_calc: 'حاسبة دقيقة',
  calculator_title: 'حاسبة مكافأة نهاية الخدمة في الإمارات',
  calculator_subtitle: 'احسب مكافأة نهاية خدمتك بناءً على أحدث قانون العمل الإماراتي.',
  
  // Why Important
  why_important: 'لماذا مكافأة نهاية الخدمة مهمة',
  understand_rights: 'فهم حقوقك يضمن حصولك على المبلغ الذي تستحقه.',
  maximize_payment: 'زيادة مدفوعاتك',
  maximize_description: 'افهم بالضبط كيفية حساب مكافأة نهاية خدمتك لضمان حصولك على المبلغ الكامل الذي يحق لك.',
  avoid_legal: 'تجنب النزاعات القانونية',
  avoid_description: 'اعرف حقوقك ومستحقاتك لتجنب النزاعات المحتملة مع صاحب العمل خلال عملية التسوية.',
  plan_future: 'خطط لمستقبلك المالي',
  plan_description: 'قد تكون مكافأة نهاية خدمتك مبلغًا كبيرًا يمكن أن يساعد في تمويل خطوتك المهنية التالية أو دعم مدخراتك.',
  
  // Featured Section
  everything_need: 'كل ما تحتاج معرفته',
  explore_guide: 'استكشف دليلنا الكامل لفهم مكافأة نهاية الخدمة في الإمارات.',
  
  // FAQ
  common_questions: 'الأسئلة الشائعة',
  answers_common: 'اعثر على إجابات لأكثر الأسئلة شيوعًا حول مكافأة نهاية الخدمة في الإمارات.',
  
  // CTA
  still_questions: 'هل لا تزال لديك أسئلة؟',
  expert_help: 'فريقنا موجود هنا للمساعدة في ضمان حصولك على المدفوعات التي تستحقها.',
  get_advice: 'احصل على نصيحة الخبراء',
  
  // Footer
  quick_links: 'روابط سريعة',
  resources: 'موارد',
  legal: 'قانوني',
  privacy_policy: 'سياسة الخصوصية',
  terms_service: 'شروط الخدمة',
  copyright: '© 2024 ActuDubai.com. جميع الحقوق محفوظة.',
};

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Set default language based on browser or your preference
  const [language, setLanguage] = useState<Language>('en');
  
  // Translation function
  const t = (key: string): string => {
    const translations = language === 'en' ? enTranslations : arTranslations;
    return translations[key] || key; // Return the key itself if translation not found
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
