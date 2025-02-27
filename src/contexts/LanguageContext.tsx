
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Our translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "home": "Home",
    "gratuity_laws": "Gratuity Laws & Rules",
    "calculation": "Gratuity Calculation",
    "claims_disputes": "Claims & Disputes",
    "tax_deductions": "Tax & Deductions", 
    "managing_gratuity": "Managing Gratuity",
    "faqs": "FAQs",
    "contact": "Contact",
    
    // Hero
    "free_calculator": "Free Calculator",
    "hero_title": "Calculate Your Gratuity Instantly & Understand UAE Gratuity Laws",
    "hero_subtitle": "Easily determine your end-of-service gratuity and get expert insights on UAE gratuity rules.",
    "use_calculator": "Use Calculator",
    "learn_law": "Learn About UAE Law",
    "precise_calculation": "Precise Calculation",
    "compliant_law": "100% Compliant with Labor Law",
    "updated_regulations": "Updated with the latest 2024 regulations",
    "verified_experts": "Verified by Experts",
    "legal_consultants": "Specialized legal consultants",
    
    // Calculator Section
    "precise_calc": "Precise Calculation",
    "calculator_title": "UAE Gratuity Calculator",
    "calculator_subtitle": "Our calculator uses official formulas according to the 2024 UAE Labor Law to calculate your gratuity accurately.",
    "contract_type": "Contract Type",
    "limited": "Limited",
    "unlimited": "Unlimited",
    "termination_reason": "Termination Reason",
    "resignation": "Voluntary Resignation",
    "termination": "Dismissal / Employer Termination",
    "start_date": "Employment Start Date",
    "end_date": "Employment End Date",
    "basic_salary": "Monthly Basic Salary (AED)",
    "unpaid_days": "Unpaid Days (If applicable)",
    "calculate": "Calculate Gratuity",
    "calculation_result": "Calculation Result",
    "estimated_gratuity": "Your Estimated Gratuity",
    "years_of_service": "Years of Service",
    "basic_salary_result": "Basic Salary",
    "daily_wage": "Daily Wage",
    "deductions": "Deductions (unpaid days)",
    "calculation_breakdown": "Calculation Breakdown",
    "base_gratuity": "Base Gratuity:",
    "additional_gratuity": "Additional Gratuity:",
    "deductions_unpaid": "Deductions (unpaid days):",
    "total": "Total:",
    "note": "Note:",
    "calculation_disclaimer": "This calculation is an estimate based on UAE Labor Law. Results may vary depending on specific circumstances. Consult with a legal advisor for accurate information about your particular case.",

    // Why Gratuity Matters Section
    "why_important": "Why Is Gratuity Important?",
    "understand_rights": "Your gratuity is your right. Knowing how it's calculated ensures you get what you deserve.",
    "maximize_payment": "Maximize Your Payment",
    "maximize_description": "Learn strategies to get the highest possible gratuity based on your employment situation.",
    "avoid_legal": "Avoid Legal Issues",
    "avoid_description": "Understand your rights under UAE labor laws and avoid unnecessary disputes.",
    "plan_future": "Plan Your Future",
    "plan_description": "Learn the best ways to invest and manage your gratuity to secure your financial future.",

    // Feature Cards Section
    "everything_need": "Everything You Need to Know About UAE Gratuity",
    "explore_guide": "Explore our comprehensive guide on gratuities in the United Arab Emirates",
    "law_title": "UAE Gratuity Law",
    "law_description": "Discover everything about the labor law that regulates gratuities in the United Arab Emirates.",
    "contracts_title": "Limited vs Unlimited Contracts",
    "contracts_description": "Find out the differences and how they affect your final gratuity.",
    "eligibility_title": "Eligibility for Gratuity",
    "eligibility_description": "Know the requirements to be eligible for labor gratuity in UAE.",
    "calculate_title": "How to Calculate Gratuity",
    "calculate_description": "Learn the exact formula and how to calculate your gratuity step by step.",
    "factors_title": "Factors Affecting Gratuity",
    "factors_description": "Discover what factors can increase or decrease your final payment.",
    "terminated_title": "Gratuity for Terminated Employees",
    "terminated_description": "Know your rights in case of dismissal and how your gratuity is calculated.",
    "claim_title": "How to Claim Your Gratuity",
    "claim_description": "Step-by-step guide to claim your labor gratuity at the end of your contract.",
    "disputes_title": "Gratuity Disputes",
    "disputes_description": "What to do when your employer doesn't pay the gratuity correctly.",
    "taxable_title": "Is Gratuity Taxable?",
    "taxable_description": "Information about the taxation of gratuities in UAE.",
    "faq_title": "Frequently Asked Questions",
    "faq_description": "Answers to the most common questions about gratuities in UAE.",
    "read_more": "Read more",

    // Testimonials Section
    "valued_professionals": "Valued by Professionals in UAE",
    "thousands_trust": "Thousands of expatriates and residents in the United Arab Emirates trust our calculator to plan their financial future.",

    // FAQ Section
    "common_questions": "Common Questions About Gratuity",
    "answers_common": "Answers to the most common doubts about gratuities in UAE",
    "who_eligible": "Who is eligible to receive gratuity in UAE?",
    "eligible_answer_1": "To be eligible for gratuity in UAE, you must:",
    "completed_year": "Have completed at least 1 year of continuous service",
    "valid_contract": "Be working under a valid employment contract",
    "not_dismissed": "Not have been dismissed for any of the reasons specified in Article 120 of the Labor Law",
    "more_eligibility": "More details about eligibility →",
    "unlimited_calculation": "How is gratuity calculated for unlimited contracts?",
    "unlimited_answer": "For unlimited contracts, the calculation depends on whether you resign or are dismissed:",
    "voluntary_resignation": "Voluntary resignation:",
    "years_1_3": "1-3 years: 7 days of salary per year",
    "years_3_5": "3-5 years: 14 days of salary per year",
    "years_more_5": "More than 5 years: 21 days for the first 5 years + 30 days for each additional year",
    "dismissal": "Dismissal:",
    "detailed_calculation": "See detailed calculation example →",
    "taxable_question": "Is gratuity subject to tax in UAE?",
    "taxable_answer": "No, gratuity is not subject to tax in the United Arab Emirates, as the country does not have an income tax system for individuals. However, if you are an expatriate and your country of origin taxes global income, you may need to declare this income in your country of fiscal residence.",
    "more_tax_info": "More information about taxes and gratuity →",
    "employer_refuses": "What should I do if my employer refuses to pay my gratuity?",
    "refusal_steps": "If your employer refuses to pay your gratuity, you can follow these steps:",
    "formal_claim": "File a formal complaint with the Ministry of Human Resources and Emiratisation (MOHRE)",
    "not_resolved": "If not resolved, the case will be transferred to labor courts",
    "consider_lawyer": "Consider consulting with a lawyer specialized in labor law",
    "complete_guide": "Complete guide on claims →",
    "contract_difference": "What is the difference between limited and unlimited contracts?",
    "main_differences": "The main differences are:",
    "limited_contract": "Limited contract:",
    "limited_description": "Has a specific end date. Gratuity is paid in full regardless of who terminates the contract.",
    "unlimited_contract": "Unlimited contract:",
    "unlimited_description": "Has no end date. Gratuity may be reduced if the employee resigns before completing 5 years.",
    "detailed_comparison": "Detailed contract comparison →",
    "see_all_faqs": "See all FAQs",

    // CTA Section
    "dont_wait": "Don't Wait Any Longer",
    "take_control": "Take Control of Your Gratuity Today",
    "calculate_learn": "Calculate your end-of-service gratuity and learn everything you need to know about your rights in UAE.",
    "use_calculator_cta": "Use Calculator",
    "learn_more_gratuity": "Learn More About Gratuity",

    // Footer
    "calculator_guide": "Calculator and comprehensive guide on labor gratuity in the United Arab Emirates",
    "laws_rules": "Laws and Rules",
    "calculation_footer": "Calculation",
    "quick_links": "Quick Links",
    "rights_reserved": "All rights reserved.",

    // NotFound page
    "page_not_found": "Page Not Found",
    "sorry_message": "Sorry, we couldn't find the page you're looking for.",
    "back_home": "Back to homepage",
    "popular_pages": "Popular Pages",
    "gratuity_calculator": "Gratuity Calculator",
    "uae_law": "UAE Gratuity Law",
    "how_calculate": "How to Calculate Gratuity"
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Always use English as the default and only language
  const [language] = useState<Language>('en');
  
  useEffect(() => {
    // Set dir attribute on document.body based on language (always LTR for English)
    document.documentElement.dir = 'ltr';
    
    // Store the language preference (always English)
    localStorage.setItem('language', language);
  }, [language]);
  
  // Dummy setLanguage function that doesn't actually change the language
  const setLanguage = () => {
    // No-op since we only support English now
  };
  
  // Translation function (always uses English)
  const t = (key: string): string => {
    return translations.en[key] || key;
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
