
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Clock, BookOpen, Facebook, Twitter, Linkedin, Copy, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

// Componente para las Key Takeaways con estilo especial
const KeyTakeaways = () => {
  return (
    <div className="my-8 rounded-lg bg-gradient-to-r from-gratuity-50 to-gratuity-100 p-6 shadow-md border border-gratuity-200">
      <h2 className="text-xl font-semibold mb-4 text-gratuity-800 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-gratuity-600" />
        Key Takeaways
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
          <p className="ml-3 text-gray-700">Gratuity is a crucial end-of-service benefit in the UAE, ensuring financial security for employees.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">Understanding the differences between limited and unlimited contracts is essential for maximizing gratuity entitlements.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Recent updates to the UAE Labour Law have standardized gratuity calculations, simplifying eligibility and payment processes.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Employees should be aware of legal frameworks and factors affecting gratuity to protect their rights effectively.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Employers must comply with gratuity regulations to maintain legal compliance and foster positive employee relations.</p>
        </li>
      </ul>
    </div>
  );
};

// Componente para la Tabla de Contenidos con estilo elegante
const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const tocItems = [
    { id: "understanding-gratuity", title: "Understanding Gratuity in UAE Employment Contracts: Limited vs Unlimited" },
    { id: "overview", title: "Overview of Gratuity in the UAE" },
    { id: "limited-contracts", title: "Understanding Limited Contracts in the UAE" },
    { id: "gratuity-calculation-limited", title: "Gratuity Calculation for Limited Contracts" },
    { id: "unlimited-contracts", title: "Understanding Unlimited Contracts in the UAE" },
    { id: "gratuity-calculation-unlimited", title: "Gratuity Calculation for Unlimited Contracts" },
    { id: "differences", title: "Difference Between Limited and Unlimited Contract Gratuity" },
    { id: "gratuity-rules", title: "Gratuity Rules for Fixed-Term Contracts in UAE" },
    { id: "factors", title: "Factors Affecting Gratuity Calculations" },
    { id: "understanding-entitlements", title: "Importance of Understanding Gratuity Entitlements" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faq", title: "Frequently Asked Questions" }
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="my-8 rounded-lg border border-gratuity-200 shadow-md overflow-hidden">
      <button 
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-gray-800 focus:outline-none"
      >
        <span className="text-lg font-semibold flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-gratuity-600" />
          Table of Contents
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="p-4 bg-gray-50">
          <ul className="space-y-2">
            {tocItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="text-left w-full py-1 px-2 rounded-md text-gratuity-700 hover:bg-gratuity-100 hover:text-gratuity-800 transition-colors text-sm"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Componente para botones de redes sociales
const SocialShareButtons = () => {
  const shareUrl = window.location.href;
  const title = "Understanding Gratuity for Limited Contract UAE: Key Insights and Calculations";

  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareViaTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareViaLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
        duration: 3000,
      });
    });
  };

  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Share2 className="h-5 w-5 mr-2 text-gratuity-600" />
        Share this guide
      </h3>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-[#3b5998] hover:bg-[#3b5998]/90 text-white border-none flex items-center"
          onClick={shareViaFacebook}
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white border-none flex items-center"
          onClick={shareViaTwitter}
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white border-none flex items-center"
          onClick={shareViaLinkedin}
        >
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  );
};

// Componente para fórmulas matemáticas con estilo especial
const Formula = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-center font-mono text-sm md:text-base overflow-x-auto">
      {children}
    </div>
  );
};

const GratuityLimitedContractUAE = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Understanding Gratuity for Limited Contract UAE: Key Insights and Calculations</title>
        <meta 
          name="description" 
          content="Understand gratuity for limited contracts in the UAE. Learn how to calculate gratuity, differences from unlimited contracts, and key updates to UAE Labour Law. Explore eligibility, termination scenarios, and important factors affecting gratuity payments." 
        />
        <meta 
          name="keywords" 
          content="gratuity for limited contract UAE, gratuity for unlimited contract UAE, difference between limited and unlimited contract gratuity, gratuity rules for fixed-term contracts in UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Gratuity for Limited Contract UAE: Key Insights and Calculations
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 12 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <p className="text-gray-700 leading-relaxed">
              In the fast-paced economic environment of the United Arab Emirates (UAE), understanding your employment rights, particularly <strong>gratuity for limited contract UAE</strong>, is vital for financial stability. As a country with a large expatriate workforce, knowing how employment contracts dictate end-of-service benefits can be crucial for ensuring fair compensation upon leaving a job. Gratuity represents not just a financial benefit; it embodies the recognition of service and loyalty to an employer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In this post, we will explore the intricacies of gratuity in the UAE, focusing on how it varies between limited and unlimited contracts, and what employees need to know to protect their rights.
            </p>
            
            <section id="understanding-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Gratuity in UAE Employment Contracts: Limited vs Unlimited</h2>
              <p className="text-gray-700 leading-relaxed">
                The UAE labor market operates with two main types of employment contracts: limited (fixed-term) and unlimited (open-ended). Each contract type carries specific implications for gratuity entitlements, which makes understanding these differences essential for both employers and employees.
              </p>
            </section>
            
            <section id="overview">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Overview of Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity refers to the end-of-service benefit provided to employees who have completed at least one year of continuous service. As mandated by UAE Labour Law, this payment is calculated based on the employee's duration of employment and their basic salary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Significance of Gratuity:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Represents financial security for employees transitioning to new job opportunities.</li>
                <li>Serves as an incentive for loyalty and longevity within a company.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                According to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>, gratuity is crucial for promoting employee retention and ensuring certain financial protections for workers.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Framework and Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                The UAE Labour Law governs gratuity calculations, with recent exceptions and amendments that affect how gratuity is calculated. Employees must complete at least one year of continuous service to be eligible for gratuity payments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The regulations state that <strong>gratuity rules for fixed-term contracts in UAE</strong> have recently been unified, simplifying previous complexities. For more insights, refer to <a href="https://finflx.com/blog/gratuity-calculator-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FINFLX</a>.
              </p>
            </section>
            
            <section id="limited-contracts">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Limited Contracts in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Characteristics of Limited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                Limited contracts, referred to as fixed-term contracts, are agreements that specify a particular duration of employment with a clear start and end date.
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>These contracts are commonly used for specific projects or roles that have a defined timeline.</li>
                <li>A limited contract typically entails penalties for early termination unless both parties agree to an end.</li>
                <li>Employees should be aware that their means of termination may involve legal consequences that can impact their end-of-service benefits.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                According to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>, a limited contract is binding until the agreed-upon expiration unless terminated for valid reasons.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Termination Clauses</h3>
              <p className="text-gray-700 leading-relaxed">
                Termination clauses in limited contracts may involve significant financial penalties if the employee or employer decides to end the contract prematurely. Employees need to understand these potential costs to avoid any unexpected losses.
              </p>
            </section>
            
            <section id="gratuity-calculation-limited">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Calculation for Limited Contracts</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">How to Calculate Gratuity for Limited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity calculations for limited contracts are straightforward:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Less than one year of service:</strong> No gratuity is payable.</li>
                <li><strong>One to five years of service:</strong> 21 days of basic salary for each year.</li>
                <li><strong>More than five years of service:</strong> 30 days of basic salary for each additional year beyond five.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Formula</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Formula for One to Five Years:</strong>
              </p>
              <Formula>
                Gratuity = (Basic Salary ÷ 30) × 21 × Number of Years of Service
              </Formula>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Formula for More than Five Years:</strong>
              </p>
              <Formula>
                Gratuity = (Basic Salary ÷ 30) × 21 × 5 + (Basic Salary ÷ 30) × 30 × (Years of Service - 5)
              </Formula>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example Calculation</h3>
              <p className="text-gray-700 leading-relaxed">
                Assuming an employee has a basic salary of AED 10,000 and completes four years of service:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Daily Wage Calculation:</strong>
              </p>
              <Formula>
                10,000 ÷ 30 = AED 333.33
              </Formula>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Gratuity Entitlement:</strong>
              </p>
              <Formula>
                333.33 × 21 × 4 = AED 28,000
              </Formula>
              
              <p className="text-gray-700 leading-relaxed">
                It's important to note that gratuity is calculated based on the last drawn basic salary, excluding any allowances or bonuses. The maximum gratuity cannot exceed two years' wages. For detailed information, refer to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>.
              </p>
            </section>
            
            <section id="unlimited-contracts">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Unlimited Contracts in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Characteristics of Unlimited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlimited contracts, also known as open-ended contracts, have no specified end date and continue until either the employer or employee decides to terminate. They provide more flexibility for both parties involved.
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees can leave their position by providing notice, typically 30 days.</li>
                <li>Termination must be grounded in valid reasons to circumvent disputes or legal issues.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                According to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>, understanding the terms of unlimited contracts can assist employees in making informed career decisions.
              </p>
            </section>
            
            <section id="gratuity-calculation-unlimited">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Calculation for Unlimited Contracts</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">How to Calculate Gratuity for Unlimited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                For unlimited contracts, the gratuity calculation can vary significantly based on whether an employee resigns or is terminated.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Calculation when Employee Resigns</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Less than one year of service:</strong> No gratuity is payable.</li>
                <li><strong>1-3 years of service:</strong> Eligible for 1/3 of 21 days' basic salary for each year.</li>
                <li><strong>3-5 years of service:</strong> Eligible for 2/3 of 21 days' basic salary for each year.</li>
                <li><strong>More than 5 years of service:</strong> Eligible for full 21 days' basic salary for each year up to five years, plus 30 days for each additional year.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Formulas</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>1-3 Years of Service:</strong>
              </p>
              <Formula>
                Gratuity = (Basic Salary ÷ 30) × 21 × Number of Years × (1/3)
              </Formula>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>3-5 Years of Service:</strong>
              </p>
              <Formula>
                Gratuity = (Basic Salary ÷ 30) × 21 × Number of Years × (2/3)
              </Formula>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Over 5 Years of Service:</strong> Same formula as for limited contracts after five years.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example Calculations</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Resignation after 2 Years:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Daily wage: 10,000 ÷ 30 = AED 333.33</li>
                <li>Gratuity entitlement: 333.33 × 21 × 2 × (1/3) = AED 4,666.67</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Resignation after 4 Years:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Gratuity entitlement: 333.33 × 21 × 4 × (2/3) = AED 18,666.67</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Termination after 4 Years:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Gratuity entitlement: 333.33 × 21 × 4 = AED 28,000</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                In these calculations, the gratuity reduction applies only in resignation scenarios. This provision encourages employees to remain with their employer longer, leading to increased job satisfaction and stability.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Calculation when Employee is Terminated</h3>
              <p className="text-gray-700 leading-relaxed">
                If terminated, the gratuity is calculated similarly to limited contract employees without any reductions. Refer to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a> for comprehensive rules.
              </p>
            </section>
            
            <section id="differences">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Difference Between Limited and Unlimited Contract Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Upon Resignation Scenarios</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Limited Contracts:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees usually receive their full gratuity upon resigning after fulfilling the contract term.</li>
                <li>Early resignation may limit gratuity entitlement or incur penalties.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>Unlimited Contracts:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees might not receive full gratuity upon resignation if they leave before completing five years, which reflects the prorated calculations defined previously.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                Employers should also be aware that gratuity may be forfeited if the employee is dismissed for gross misconduct. Both contract types adhere to this ruling, established under Article 120 of the UAE Labour Law.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Key Differences Summary</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Limited contracts permit full gratuity upon completion, regardless of whether the employee resigns.</li>
                <li>Unlimited contracts apply prorating based on years served, particularly if resignation occurs within the first five years.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These distinctions facilitate informed decision-making for both prospective employees and their employers, ensuring there are no surprises when it comes to payment upon leaving.
              </p>
            </section>
            
            <section id="gratuity-rules">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Rules for Fixed-Term Contracts in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact of the New UAE Labour Law</h3>
              <p className="text-gray-700 leading-relaxed">
                Recent updates to the UAE Labour Law have re-classified all contracts as fixed-term (limited) contracts, thus streamlining employment standards across the board and enhancing rights for employees. According to <a href="https://finflx.com/blog/gratuity-calculator-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FINFLX</a>:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees become eligible for gratuity after completing one year of service.</li>
                <li>The calculation remains standard at 21 days of basic salary for each year for the first five years, and 30 days for additional years thereafter.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Moreover, employers must settle all gratuity and end-of-service benefits within 14 days of an employee's last working day. This requirement enhances employee confidence in receiving their due payments.
              </p>
            </section>
            
            <section id="factors">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Factors Affecting Gratuity Calculations</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Considerations in Calculating Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Basic Salary:</strong> Gratuity is assessed based on the last drawn basic salary, excluding allowances like housing or transportation benefits. This ensures that the gratuity reflects only the core salary portion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Continuous Service:</strong> Any interruptions in your service could impact gratuity entitlement. Notably, approved leaves do not count as interruptions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Dismissal for Cause:</strong> Employees terminated for misconduct might lose their right to gratuity. Misconduct criteria are outlined in the UAE Labour Law, such as violations of contract terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Capping of Gratuity:</strong> Maximum gratuity is capped at two years' wages, which is an important consideration for long-term employees.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Refer to <a href="https://finflx.com/blog/gratuity-calculator-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FINFLX</a> for more details on how these factors influence gratuity payments.
              </p>
            </section>
            
            <section id="understanding-entitlements">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Importance of Understanding Gratuity Entitlements</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">For Employees and Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>For Employees:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Knowledge of these benefits assists in effective financial planning and contract negotiations.</li>
                <li>Foreseeing the impact of contract type on future earnings can significantly influence one's career trajectory.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>For Employers:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Insight into legal obligations helps maintain compliance and avoid potential legal disputes.</li>
                <li>Good budgeting practices regarding gratuity liabilities can enhance overall strategy.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Avoiding Disputes</h3>
              <p className="text-gray-700 leading-relaxed">
                A thorough understanding of gratuity entitlements minimizes the risk of conflicts. Transparency between employers and employees fosters a long-term relationship based on trust and mutual respect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Seeking professional advice from HR experts or legal advisors for specific cases is highly encouraged.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is a vital end-of-service benefit in the UAE that significantly influences financial planning for employees. Understanding the calculation methods for both limited and unlimited contracts is paramount not only for securing rightful benefits but also for ensuring compliance with legal obligations by employers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Recent legal updates have standardized these processes, making it easier than ever to comprehend entitlements. Employees are advised to take charge of their contracts proactively, ensuring they protect their rights effectively.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Call to Action</h3>
              <p className="text-gray-700 leading-relaxed">
                We invite readers to share their experiences with gratuity calculations in the UAE. If you have questions or require further clarification on any points discussed, please reach out. It's also highly recommended to consult with HR departments or legal advisors for personalized guidance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For comprehensive information on UAE Labour Law, please explore reputable sources and ensure you are well-informed about your rights and entitlements under <strong>gratuity rules for fixed-term contracts in UAE</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding these facets not only empowers you but also solidifies the foundation of any successful working relationship in the UAE.
              </p>
            </section>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Articles</h3>
              <p className="mb-4 text-gray-700">Explore more content about gratuity in the UAE:</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Gratuity Calculation Guide in the UAE
                  </Link>
                </li>
                <li>
                  <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Understanding UAE Gratuity Law
                  </Link>
                </li>
                <li>
                  <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Who Is Eligible for Gratuity in UAE
                  </Link>
                </li>
                <li>
                  <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Does Resignation Affect Gratuity in UAE?
                  </Link>
                </li>
                <li>
                  <Link to="/is-gratuity-taxable-in-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Is Gratuity Taxable in UAE?
                  </Link>
                </li>
              </ul>
            </div>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. What is gratuity in UAE employment contracts?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity is an end-of-service benefit provided to employees who have completed at least one year of continuous service, calculated based on the duration of employment and basic salary.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. How does gratuity differ between limited and unlimited contracts?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Limited contracts typically offer straightforward gratuity payments upon contract completion, while unlimited contracts may prorate gratuity based on years of service, especially if the employee resigns before five years.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. Are there any recent changes to gratuity rules in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, recent updates to the UAE Labour Law have standardized gratuity calculations for fixed-term contracts, ensuring eligibility after one year of service and setting clear calculation formulas.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Can gratuity be forfeited?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, if an employee is dismissed for gross misconduct, they may lose their entitlement to gratuity as per Article 120 of the UAE Labour Law.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. What factors affect the calculation of gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Factors include the basic salary, continuous service duration, any interruptions in service, dismissal for cause, and the capping of gratuity at two years' wages.
                </p>
              </div>
            </section>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/how-long-to-receive-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              How Long to Receive Gratuity in UAE
            </Link>
            <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              Gratuity Calculation Guide
              <ChevronUp className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GratuityLimitedContractUAE;
