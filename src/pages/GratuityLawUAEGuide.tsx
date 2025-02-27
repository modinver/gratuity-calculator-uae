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
          <p className="ml-3 text-gray-700">Gratuity is a mandatory end-of-service benefit in the UAE.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">The UAE Labour Law governs gratuity eligibility and calculation.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Gratuity calculation depends on the type of contract and years of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Employees may forfeit gratuity under specific termination conditions.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Staying informed on legal updates ensures compliance and fair practices.</p>
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
    { id: "introduction", title: "Introduction to Gratuity Law in the UAE" },
    { id: "legal-framework", title: "Legal Framework Governing Gratuity" },
    { id: "eligibility", title: "Eligibility Criteria for Gratuity" },
    { id: "calculation-method", title: "Gratuity Calculation Method" },
    { id: "forfeiture", title: "Forfeiture of Gratuity" },
    { id: "recent-updates", title: "Recent Updates to Gratuity Laws" },
    { id: "practical-examples", title: "Practical Examples" },
    { id: "employer-obligations", title: "Employer Obligations" },
    { id: "employee-rights", title: "Employee Rights" },
    { id: "dispute-resolution", title: "Dispute Resolution" },
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
  const title = "Understanding Gratuity Law in the UAE: A Comprehensive Guide";

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

const GratuityLawUAEGuide = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Understanding Gratuity Law in the UAE: A Comprehensive Guide</title>
        <meta 
          name="description" 
          content="Understand the UAE gratuity law and how end-of-service benefits are calculated based on your basic salary and years of service. Learn about employee rights, employer obligations, and key regulations under Federal Decree Law No. 33 of 2021." 
        />
        <meta 
          name="keywords" 
          content="gratuity law UAE, gratuity act 1972 calculation, UAE gratuity law for limited contracts, gratuity calculation as per UAE labor law, gratuity under payment of gratuity act 1972, gratuity payment rules in Dubai" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Gratuity Law in the UAE: A Comprehensive Guide
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
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Introduction to Gratuity Law in the UAE</h2>
              <p className="text-gray-700 leading-relaxed">
                Gratuity, also known as end-of-service benefit, is a statutory entitlement for employees in the UAE upon completion of their service. It serves as a financial reward for their dedication and contribution to the company.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This guide provides a detailed overview of the gratuity law in the UAE, covering eligibility criteria, calculation methods, recent updates, and the rights and obligations of both employers and employees.
              </p>
            </section>
            
            <section id="legal-framework">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Legal Framework Governing Gratuity</h2>
              <p className="text-gray-700 leading-relaxed">
                The gratuity law in the UAE is primarily governed by the Federal Decree Law No. 33 of 2021, also known as the UAE Labour Law. This law outlines the provisions related to end-of-service benefits, including eligibility, calculation, and payment procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Key articles within the law address various aspects of gratuity, such as the conditions under which an employee is entitled to gratuity, the method of calculating the gratuity amount, and the circumstances in which an employee may forfeit their right to gratuity.
              </p>
            </section>
            
            <section id="eligibility">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Eligibility Criteria for Gratuity</h2>
              <p className="text-gray-700 leading-relaxed">
                To be eligible for gratuity in the UAE, an employee must have completed at least one year of continuous service with the same employer. Both full-time and part-time employees are entitled to gratuity, provided they meet this minimum service requirement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, certain categories of employees, such as those on probation or those terminated for gross misconduct, may not be eligible for gratuity.
              </p>
            </section>
            
            <section id="calculation-method">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Calculation Method</h2>
              <p className="text-gray-700 leading-relaxed">
                The method of calculating gratuity in the UAE depends on the type of employment contract (limited or unlimited) and the length of service.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Limited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                For employees with limited contracts (fixed-term contracts), the gratuity is calculated as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>21 days' basic salary for each year of service for the first five years.</li>
                <li>30 days' basic salary for each additional year of service beyond five years.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Unlimited Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                For employees with unlimited contracts, the gratuity is calculated differently based on the length of service:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Less than 1 year: No gratuity.</li>
                <li>1-3 years: 1/3 of 21 days' basic salary for each year of service.</li>
                <li>3-5 years: 2/3 of 21 days' basic salary for each year of service.</li>
                <li>More than 5 years: 21 days' basic salary for each year of service for the first five years, and 30 days' basic salary for each additional year of service beyond five years.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Important Considerations</h3>
              <p className="text-gray-700 leading-relaxed">
                Only the basic salary is considered for gratuity calculation. Allowances and other benefits are not included.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The gratuity amount is capped at two years' salary.
              </p>
            </section>
            
            <section id="forfeiture">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Forfeiture of Gratuity</h2>
              <p className="text-gray-700 leading-relaxed">
                Under certain circumstances, an employee may forfeit their right to gratuity. These circumstances typically involve gross misconduct or violation of company policies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Article 120 of the UAE Labour Law specifies the conditions under which an employer may terminate an employee without gratuity. These conditions include acts of violence, theft, disclosure of confidential information, and other serious offenses.
              </p>
            </section>
            
            <section id="recent-updates">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Recent Updates to Gratuity Laws</h2>
              <p className="text-gray-700 leading-relaxed">
                The UAE Labour Law is subject to periodic updates and amendments to keep pace with evolving labor practices and economic conditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Federal Decree Law No. 33 of 2021 introduced several changes to the gratuity law, including clarifications on eligibility criteria, calculation methods, and payment procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Staying informed about these updates is crucial for both employers and employees to ensure compliance and fair practices.
              </p>
            </section>
            
            <section id="practical-examples">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Practical Examples</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 1: Limited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                An employee with a limited contract has completed 6 years of service with a basic salary of AED 10,000 per month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gratuity Calculation:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>(5 years x 21 days x AED 10,000) / 30 = AED 35,000</li>
                <li>(1 year x 30 days x AED 10,000) / 30 = AED 10,000</li>
                <li>Total Gratuity = AED 35,000 + AED 10,000 = AED 45,000</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 2: Unlimited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                An employee with an unlimited contract has completed 4 years of service with a basic salary of AED 8,000 per month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gratuity Calculation:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>(4 years x 21 days x AED 8,000) / 30 x (2/3) = AED 14,933.33</li>
              </ul>
            </section>
            
            <section id="employer-obligations">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Employer Obligations</h2>
              <p className="text-gray-700 leading-relaxed">
                Employers in the UAE have several obligations related to gratuity, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Calculating and paying gratuity to eligible employees upon termination of service.</li>
                <li>Maintaining accurate records of employee service and salary.</li>
                <li>Complying with all provisions of the UAE Labour Law related to gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Failure to meet these obligations may result in legal penalties and financial liabilities.
              </p>
            </section>
            
            <section id="employee-rights">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Employee Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Employees in the UAE have several rights related to gratuity, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>The right to receive gratuity upon completion of at least one year of service.</li>
                <li>The right to have their gratuity calculated accurately and in accordance with the law.</li>
                <li>The right to dispute any discrepancies in the gratuity amount.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Employees should be aware of their rights and seek legal advice if they believe their rights have been violated.
              </p>
            </section>
            
            <section id="dispute-resolution">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                In case of disputes related to gratuity, both employers and employees have recourse to legal channels for resolution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The UAE Labour Law provides mechanisms for resolving labor disputes, including mediation, conciliation, and litigation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Employees can file a complaint with the Ministry of Human Resources and Emiratisation (MOHRE) if they believe their gratuity rights have been violated.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Understanding the gratuity law in the UAE is essential for both employers and employees to ensure compliance and fair practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By adhering to the provisions of the UAE Labour Law and staying informed about recent updates, both parties can foster a positive and equitable working environment.
              </p>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. What is gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity, also known as end-of-service benefit, is a statutory entitlement for employees in the UAE upon completion of their service.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. Who is eligible for gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees who have completed at least one year of continuous service with the same employer are eligible for gratuity.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. How is gratuity calculated?</h3>
                <p className="text-gray-700 leading-relaxed">
                  The method of calculating gratuity depends on the type of employment contract (limited or unlimited) and the length of service.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Can an employee forfeit their right to gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under certain circumstances, such as gross misconduct or violation of company policies, an employee may forfeit their right to gratuity.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. What should an employee do in case of a gratuity dispute?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees can file a complaint with the Ministry of Human Resources and Emiratisation (MOHRE) if they believe their gratuity rights have been violated.
                </p>
              </div>
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
            <Link to="/is-gratuity-taxable-in-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Is Gratuity Taxable in UAE?
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

export default GratuityLawUAEGuide;
