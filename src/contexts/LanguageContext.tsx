
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

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
  },
  ar: {
    // Header
    "home": "الرئيسية",
    "gratuity_laws": "قوانين مكافأة نهاية الخدمة",
    "calculation": "حساب المكافأة",
    "claims_disputes": "المطالبات والنزاعات",
    "tax_deductions": "الضرائب والخصومات",
    "managing_gratuity": "إدارة المكافأة",
    "faqs": "الأسئلة الشائعة",
    "contact": "اتصل بنا",
    
    // Hero
    "free_calculator": "حاسبة مجانية",
    "hero_title": "احسب مكافأة نهاية الخدمة فوراً وافهم قوانين الإمارات",
    "hero_subtitle": "حدد بسهولة مكافأة نهاية خدمتك واحصل على رؤى الخبراء حول قواعد المكافآت في الإمارات.",
    "use_calculator": "استخدم الحاسبة",
    "learn_law": "تعرف على قانون الإمارات",
    "precise_calculation": "حساب دقيق",
    "compliant_law": "متوافق 100% مع قانون العمل",
    "updated_regulations": "محدث بأحدث اللوائح لعام 2024",
    "verified_experts": "مُصدق من قبل الخبراء",
    "legal_consultants": "مستشارين قانونيين متخصصين",
    
    // Calculator Section
    "precise_calc": "حساب دقيق",
    "calculator_title": "حاسبة مكافأة نهاية الخدمة الإماراتية",
    "calculator_subtitle": "تستخدم حاسبتنا الصيغ الرسمية وفقًا لقانون العمل الإماراتي 2024 لحساب مكافأتك بدقة.",
    "contract_type": "نوع العقد",
    "limited": "محدد المدة",
    "unlimited": "غير محدد المدة",
    "termination_reason": "سبب إنهاء الخدمة",
    "resignation": "استقالة طوعية",
    "termination": "فصل / إنهاء من قبل صاحب العمل",
    "start_date": "تاريخ بدء العمل",
    "end_date": "تاريخ انتهاء العمل",
    "basic_salary": "الراتب الأساسي الشهري (درهم)",
    "unpaid_days": "أيام غير مدفوعة (إن وجدت)",
    "calculate": "حساب المكافأة",
    "calculation_result": "نتيجة الحساب",
    "estimated_gratuity": "مكافأتك المقدرة",
    "years_of_service": "سنوات الخدمة",
    "basic_salary_result": "الراتب الأساسي",
    "daily_wage": "الأجر اليومي",
    "deductions": "الخصومات (أيام غير مدفوعة)",
    "calculation_breakdown": "تفصيل الحساب",
    "base_gratuity": "المكافأة الأساسية:",
    "additional_gratuity": "المكافأة الإضافية:",
    "deductions_unpaid": "الخصومات (أيام غير مدفوعة):",
    "total": "المجموع:",
    "note": "ملاحظة:",
    "calculation_disclaimer": "هذا الحساب هو تقدير استنادًا إلى قانون العمل الإماراتي. قد تختلف النتائج حسب الظروف الخاصة. استشر مستشارًا قانونيًا للحصول على معلومات دقيقة حول حالتك الخاصة.",

    // Why Gratuity Matters Section
    "why_important": "لماذا فهم مكافأة نهاية الخدمة مهم؟",
    "understand_rights": "مكافأة نهاية الخدمة هي حق لك. معرفة كيفية حسابها يضمن حصولك على ما تستحقه.",
    "maximize_payment": "تعظيم مدفوعاتك",
    "maximize_description": "تعلم استراتيجيات للحصول على أعلى مكافأة ممكنة بناءً على وضعك الوظيفي.",
    "avoid_legal": "تجنب المشاكل القانونية",
    "avoid_description": "افهم حقوقك بموجب قوانين العمل الإماراتية وتجنب النزاعات غير الضرورية.",
    "plan_future": "خطط لمستقبلك",
    "plan_description": "تعلم أفضل الطرق لاستثمار وإدارة مكافأتك لتأمين مستقبلك المالي.",

    // Feature Cards Section
    "everything_need": "كل ما تحتاج لمعرفته عن مكافأة نهاية الخدمة في الإمارات",
    "explore_guide": "استكشف دليلنا الشامل حول مكافآت نهاية الخدمة في الإمارات العربية المتحدة",
    "law_title": "قانون مكافأة نهاية الخدمة الإماراتي",
    "law_description": "اكتشف كل شيء عن قانون العمل الذي ينظم مكافآت نهاية الخدمة في الإمارات العربية المتحدة.",
    "contracts_title": "العقود المحددة مقابل غير المحددة",
    "contracts_description": "اكتشف الاختلافات وكيف تؤثر على مكافأتك النهائية.",
    "eligibility_title": "الأهلية للحصول على المكافأة",
    "eligibility_description": "تعرف على متطلبات الأهلية للحصول على مكافأة نهاية الخدمة في الإمارات.",
    "calculate_title": "كيفية حساب المكافأة",
    "calculate_description": "تعلم الصيغة الدقيقة وكيفية حساب مكافأتك خطوة بخطوة.",
    "factors_title": "العوامل المؤثرة على المكافأة",
    "factors_description": "اكتشف العوامل التي يمكن أن تزيد أو تقلل من مدفوعاتك النهائية.",
    "terminated_title": "مكافأة الموظفين المفصولين",
    "terminated_description": "اعرف حقوقك في حالة الفصل وكيفية حساب مكافأتك.",
    "claim_title": "كيفية المطالبة بمكافأتك",
    "claim_description": "دليل خطوة بخطوة للمطالبة بمكافأة نهاية خدمتك عند انتهاء عقدك.",
    "disputes_title": "نزاعات المكافأة",
    "disputes_description": "ماذا تفعل عندما لا يدفع صاحب العمل المكافأة بشكل صحيح.",
    "taxable_title": "هل المكافأة خاضعة للضريبة؟",
    "taxable_description": "معلومات حول الضرائب على مكافآت نهاية الخدمة في الإمارات.",
    "faq_title": "الأسئلة المتكررة",
    "faq_description": "إجابات على الأسئلة الأكثر شيوعًا حول مكافآت نهاية الخدمة في الإمارات.",
    "read_more": "اقرأ المزيد",

    // Testimonials Section
    "valued_professionals": "يقدرها المحترفون في الإمارات",
    "thousands_trust": "آلاف المغتربين والمقيمين في الإمارات العربية المتحدة يثقون بحاسبتنا لتخطيط مستقبلهم المالي.",

    // FAQ Section
    "common_questions": "أسئلة شائعة حول مكافأة نهاية الخدمة",
    "answers_common": "إجابات على الشكوك الأكثر شيوعًا حول مكافآت نهاية الخدمة في الإمارات",
    "who_eligible": "من المؤهل للحصول على مكافأة نهاية الخدمة في الإمارات؟",
    "eligible_answer_1": "لتكون مؤهلاً للحصول على مكافأة نهاية الخدمة في الإمارات، يجب عليك:",
    "completed_year": "إكمال سنة واحدة على الأقل من الخدمة المتواصلة",
    "valid_contract": "العمل بموجب عقد عمل ساري المفعول",
    "not_dismissed": "عدم الفصل لأي من الأسباب المحددة في المادة 120 من قانون العمل",
    "more_eligibility": "المزيد من التفاصيل حول الأهلية ←",
    "unlimited_calculation": "كيف يتم حساب مكافأة نهاية الخدمة للعقود غير المحددة؟",
    "unlimited_answer": "بالنسبة للعقود غير المحددة، يعتمد الحساب على ما إذا كنت تستقيل أو يتم فصلك:",
    "voluntary_resignation": "الاستقالة الطوعية:",
    "years_1_3": "1-3 سنوات: 7 أيام راتب عن كل سنة",
    "years_3_5": "3-5 سنوات: 14 يوم راتب عن كل سنة",
    "years_more_5": "أكثر من 5 سنوات: 21 يوم للسنوات الخمس الأولى + 30 يوم لكل سنة إضافية",
    "dismissal": "الفصل:",
    "detailed_calculation": "انظر مثال حساب مفصل ←",
    "taxable_question": "هل مكافأة نهاية الخدمة خاضعة للضريبة في الإمارات؟",
    "taxable_answer": "لا، مكافأة نهاية الخدمة ليست خاضعة للضريبة في الإمارات العربية المتحدة، حيث لا يوجد في البلاد نظام ضريبة دخل للأفراد. ومع ذلك، إذا كنت مغتربًا وكان بلدك الأصلي يفرض ضرائب على الدخل العالمي، فقد تحتاج إلى إعلان هذا الدخل في بلد إقامتك الضريبية.",
    "more_tax_info": "مزيد من المعلومات حول الضرائب ومكافأة نهاية الخدمة ←",
    "employer_refuses": "ماذا أفعل إذا رفض صاحب العمل دفع مكافأة نهاية الخدمة الخاصة بي؟",
    "refusal_steps": "إذا رفض صاحب العمل دفع مكافأة نهاية الخدمة الخاصة بك، يمكنك اتباع هذه الخطوات:",
    "formal_claim": "تقديم شكوى رسمية إلى وزارة الموارد البشرية والتوطين (MOHRE)",
    "not_resolved": "إذا لم يتم حلها، سيتم تحويل القضية إلى محاكم العمل",
    "consider_lawyer": "فكر في استشارة محامٍ متخصص في قانون العمل",
    "complete_guide": "دليل كامل حول المطالبات ←",
    "contract_difference": "ما الفرق بين العقود المحددة وغير المحددة؟",
    "main_differences": "الاختلافات الرئيسية هي:",
    "limited_contract": "العقد المحدد:",
    "limited_description": "له تاريخ انتهاء محدد. يتم دفع مكافأة نهاية الخدمة بالكامل بغض النظر عمن ينهي العقد.",
    "unlimited_contract": "العقد غير المحدد:",
    "unlimited_description": "ليس له تاريخ انتهاء. قد يتم تخفيض المكافأة إذا استقال الموظف قبل إكمال 5 سنوات.",
    "detailed_comparison": "مقارنة مفصلة للعقود ←",
    "see_all_faqs": "مشاهدة جميع الأسئلة الشائعة",

    // CTA Section
    "dont_wait": "لا تنتظر أكثر",
    "take_control": "تحكم بمكافأة نهاية خدمتك اليوم",
    "calculate_learn": "احسب مكافأة نهاية خدمتك وتعلم كل ما تحتاج لمعرفته حول حقوقك في الإمارات.",
    "use_calculator_cta": "استخدم الحاسبة",
    "learn_more_gratuity": "تعلم المزيد عن مكافأة نهاية الخدمة",

    // Footer
    "calculator_guide": "حاسبة ودليل شامل حول مكافأة نهاية الخدمة في الإمارات العربية المتحدة",
    "laws_rules": "القوانين والقواعد",
    "calculation_footer": "الحساب",
    "quick_links": "روابط سريعة",
    "rights_reserved": "جميع الحقوق محفوظة.",

    // NotFound page
    "page_not_found": "الصفحة غير موجودة",
    "sorry_message": "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.",
    "back_home": "العودة إلى الصفحة الرئيسية",
    "popular_pages": "الصفحات الشائعة",
    "gratuity_calculator": "حاسبة مكافأة نهاية الخدمة",
    "uae_law": "قانون مكافأة نهاية الخدمة الإماراتي",
    "how_calculate": "كيفية حساب مكافأة نهاية الخدمة"
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  
  useEffect(() => {
    // Set dir attribute on document.body based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // You might also want to store the language preference
    localStorage.setItem('language', language);
  }, [language]);
  
  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguageState(savedLanguage);
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
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
