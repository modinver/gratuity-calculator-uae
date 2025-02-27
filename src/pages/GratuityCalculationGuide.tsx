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
          <p className="ml-3 text-gray-700">Gratuity calculation in the UAE is based on the employee's last basic salary and years of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">The calculation method varies depending on whether the contract is limited or unlimited.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">For unlimited contracts, the gratuity is calculated differently based on the length of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Employees are generally eligible for gratuity after completing one year of continuous service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Understanding the calculation ensures employees receive their rightful end-of-service benefits.</p>
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
    { id: "introduction", title: "Introduction to Gratuity Calculation in the UAE" },
    { id: "eligibility", title: "Who is Eligible for Gratuity?" },
    { id: "calculation-methods", title: "Gratuity Calculation Methods" },
    { id: "unlimited-contracts", title: "Gratuity for Unlimited Contracts" },
    { id: "limited-contracts", title: "Gratuity for Limited Contracts" },
    { id: "additional-factors", title: "Additional Factors Affecting Gratuity" },
    { id: "practical-examples", title: "Practical Examples" },
    { id: "legal-updates", title: "Legal Updates and Amendments" },
    { id: "resources", title: "Resources and Tools" },
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
  const title = "Gratuity Calculation UAE - A Comprehensive Guide on How to Calculate Gratuity in UAE";

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

const GratuityCalculationGuide = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gratuity Calculation UAE - A Comprehensive Guide on How to Calculate Gratuity in UAE</title>
        <meta 
          name="description" 
          content="Learn how to calculate gratuity in the UAE with this comprehensive guide. Understand eligibility, formulas, and legal updates to ensure accurate gratuity computation." 
        />
        <meta 
          name="keywords" 
          content="gratuity calculator UAE, gratuity calculation, gratuity computation, retirement gratuity calculator, 1-year gratuity calculation, 5-year gratuity calculation, gratuity amount calculation online, how to calculate gratuity in UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gratuity Calculation UAE: A Comprehensive Guide on How to Calculate Gratuity in UAE
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 10 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <section id="introduction">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Introduction to Gratuity Calculation in the UAE</h2>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is an essential end-of-service benefit for employees in the UAE, mandated by the UAE Labour Law. It is a lump sum payment provided to employees upon completion of their service, provided they meet certain eligibility criteria. Understanding <strong>how to calculate gratuity in UAE</strong> is crucial for both employees and employers to ensure fair compensation and compliance with the law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This guide provides a comprehensive overview of gratuity calculation in the UAE, covering eligibility criteria, calculation methods, and important considerations for both limited and unlimited contracts. Whether you're an employee seeking to understand your entitlements or an employer aiming to comply with legal requirements, this guide will provide you with the knowledge and tools necessary for accurate gratuity computation.
              </p>
            </section>
            
            <section id="eligibility">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Who is Eligible for Gratuity?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">General Eligibility Criteria</h3>
              <p className="text-gray-700 leading-relaxed">
                According to the UAE Labour Law, employees are generally eligible for gratuity if they have completed at least one year of continuous service with the same employer. This applies to both full-time and part-time employees, regardless of their nationality.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Specific Conditions</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Minimum Service Period:</strong> Employees must complete at least one year of continuous service to be eligible for gratuity.</li>
                <li><strong>Termination Type:</strong> The reason for termination can affect eligibility. Employees who are terminated for gross misconduct may not be entitled to gratuity.</li>
                <li><strong>Contract Type:</strong> The calculation method differs slightly based on whether the contract is limited or unlimited.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For more detailed information on eligibility, please refer to <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Who Is Eligible for Gratuity in UAE</Link>.
              </p>
            </section>
            
            <section id="calculation-methods">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Calculation Methods</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Basic Salary Definition</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is calculated based on the employee's last drawn basic salary. This typically excludes allowances, bonuses, and other benefits.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Formula</h3>
              <p className="text-gray-700 leading-relaxed">
                The calculation formula varies depending on the type of contract and the length of service. Here are the general guidelines:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>For the first five years of service:</strong> 21 days' basic salary for each year.</li>
                <li><strong>For each additional year after five years:</strong> 30 days' basic salary for each year.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To simplify the calculation, you can use a <strong>gratuity calculator UAE</strong>.
              </p>
            </section>
            
            <section id="unlimited-contracts">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity for Unlimited Contracts</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Service Less Than One Year</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees who have worked for less than one year are not entitled to gratuity.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Service Between One and Five Years</h3>
              <p className="text-gray-700 leading-relaxed">
                For employees with service between one and five years, the gratuity is calculated as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>1-3 years:</strong> 1/3 of 21 days' basic salary for each year of service.</li>
                <li><strong>3-5 years:</strong> 2/3 of 21 days' basic salary for each year of service.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Service Exceeding Five Years</h3>
              <p className="text-gray-700 leading-relaxed">
                For employees with more than five years of service, the gratuity is calculated as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>21 days' basic salary for each of the first five years.</li>
                <li>30 days' basic salary for each additional year after five years.</li>
              </ul>
            </section>
            
            <section id="limited-contracts">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity for Limited Contracts</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Completion of Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees who complete their limited contract are entitled to full gratuity as per the calculation method mentioned above.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Early Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                If the contract is terminated early by the employer, the employee is still entitled to gratuity for the completed years of service. However, if the employee terminates the contract early without a valid reason, they may forfeit their gratuity rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more detailed information, please refer to <Link to="/gratuity-limited-contract-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Limited Contract UAE</Link>.
              </p>
            </section>
            
            <section id="additional-factors">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Additional Factors Affecting Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Absence Without Leave</h3>
              <p className="text-gray-700 leading-relaxed">
                Days of absence without leave may be deducted from the total service period, affecting the gratuity calculation.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Unpaid Leave</h3>
              <p className="text-gray-700 leading-relaxed">
                Unpaid leave may also affect the calculation, as only the days worked are considered for gratuity.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gross Misconduct</h3>
              <p className="text-gray-700 leading-relaxed">
                Termination due to gross misconduct may result in the employee forfeiting their right to gratuity.
              </p>
            </section>
            
            <section id="practical-examples">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Practical Examples</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 1: Unlimited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                An employee with an unlimited contract has worked for 4 years and has a basic salary of AED 10,000.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Calculation:</strong><br />
                Since the service is between 3 and 5 years, the employee is entitled to 2/3 of 21 days' salary for each year.
                Gratuity = (2/3) * (21/30) * 10,000 * 4 = AED 18,666.67
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 2: Limited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                An employee with a limited contract has completed 6 years of service and has a basic salary of AED 12,000.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Calculation:</strong><br />
                For the first 5 years: 21 days' salary per year.<br />
                For the 6th year: 30 days' salary.<br />
                Gratuity = (21/30) * 12,000 * 5 + (30/30) * 12,000 * 1 = AED 54,000
              </p>
            </section>
            
            <section id="legal-updates">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Legal Updates and Amendments</h2>
              <p className="text-gray-700 leading-relaxed">
                The UAE Labour Law is subject to updates and amendments. It is important to stay informed about any changes that may affect gratuity calculation.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Recent Amendments</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep an eye on official announcements from the Ministry of Human Resources and Emiratisation (MoHRE) for any recent changes.
              </p>
            </section>
            
            <section id="resources">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Resources and Tools</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Online Gratuity Calculators</h3>
              <p className="text-gray-700 leading-relaxed">
                Several online tools can help you calculate gratuity accurately. These calculators take into account the type of contract, length of service, and basic salary.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                For complex cases or disputes, it is advisable to seek legal consultation from a lawyer specializing in UAE Labour Law.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Understanding <strong>how to calculate gratuity in UAE</strong> is essential for both employees and employers. By following the guidelines and using the available resources, you can ensure fair compensation and compliance with the UAE Labour Law. Whether you are using a <strong>gratuity calculator UAE</strong> or consulting legal experts, being informed is the key to a smooth and equitable end-of-service process.
              </p>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. How is gratuity calculated for a 5-year service?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For the first five years of service, gratuity is calculated at 21 days' basic salary for each year.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. What is the 1-year gratuity calculation?</h3>
                <p className="text-gray-700 leading-relaxed">
                  If an employee has completed one year of service, they are entitled to 21 days' basic salary as gratuity.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. Can I use a retirement gratuity calculator?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, you can use a retirement gratuity calculator to estimate your end-of-service benefits accurately.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. How to do gratuity amount calculation online?</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can use online gratuity calculators available on various websites to calculate the gratuity amount by entering your basic salary, years of service, and contract type.
                </p>
              </div>
            </section>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Articles</h3>
              <p className="mb-4 text-gray-700">Explore more content about gratuity in the UAE:</p>
              <ul className="space-y-2">
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
                  <Link to="/how-to-claim-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    How to Claim Gratuity in UAE
                  </Link>
                </li>
                <li>
                  <Link to="/best-way-invest-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    The Best Way to Invest Your Gratuity in the UAE
                  </Link>
                </li>
                <li>
                  <Link to="/is-gratuity-taxable-in-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Is Gratuity Taxable in UAE?
                  </Link>
                </li>
              </ul>
            </div>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              UAE Gratuity Law Guide
            </Link>
            <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              Who Is Eligible for Gratuity in UAE
              <ChevronUp className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GratuityCalculationGuide;
