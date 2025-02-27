
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Clock, BookOpen, Facebook, Twitter, Linkedin, Copy, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

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
          <p className="ml-3 text-gray-700"><strong>Gratuity law in the UAE</strong> ensures financial compensation for employees after completing one year of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">The <strong>Federal Decree Law No. 33 of 2021</strong> standardizes end-of-service benefits across the UAE.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Gratuity calculations are based on the <em>basic salary</em> and length of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Both <strong>employees and employers</strong> have specific rights and obligations under the gratuity law.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Understanding gratuity law is crucial for maintaining fair labor practices in the UAE.</p>
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
    { id: "section-1", title: "Overview of Gratuity in the UAE" },
    { id: "section-2", title: "Legal Framework Governing Gratuity Payments" },
    { id: "section-3", title: "Calculating Gratuity as per UAE Labor Law" },
    { id: "section-4", title: "Gratuity Entitlement Based on Contract Duration" },
    { id: "section-5", title: "Conditions and Exceptions in Gratuity Payments" },
    { id: "section-6", title: "Key Takeaways for Employees and Employers" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion" },
    { id: "call-to-action", title: "Call to Action" },
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

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Gratuity Law in the UAE: A Comprehensive Guide
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 15 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <section id="introduction">
              <p className="text-gray-700 leading-relaxed">
                Gratuity law in the UAE refers to the legal regulations governing end-of-service benefits that employers must pay to employees who have completed at least one year of continuous service. This law is an essential aspect of the UAE's labor regulations, providing financial compensation to employees when their employment ends. Understanding the gratuity payment rules in Dubai is crucial for both employees and employers, as it impacts their rights and obligations within the workplace.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gratuity serves as a critical part of employee rights, offering financial security during transitions between jobs. This benefit is vital for both expatriates and local workers, reinforcing the UAE's commitment to fair labor practices.
              </p>
            </section>
            
            <section id="section-1">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 1: Overview of Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">What is Gratuity?</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is an end-of-service benefit that employers must provide to employees who complete a minimum of one year of continuous service. The amount is calculated based on the employee's basic salary and time spent at the company. As stated in the <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">gratuity law UAE</a>, it is a mandatory payment designed to provide employees with support once their employment ends.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Purpose of Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">The primary purposes of gratuity payments are:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Providing financial support to employees after the end of their employment.</li>
                <li>Rewarding loyalty and long-term service to the company.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Basis of Gratuity in the UAE</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is governed by <strong>Federal Decree Law No. 33 of 2021</strong>, which came into effect in February 2022. This law replaced the earlier <strong>Federal Law No. 8/1980</strong>. The new law emphasizes fair treatment of employees and ensures proper compensation for their service. You can learn more about this law through the following source: <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How the New Gratuity Law in the UAE 2022 Affects Employees</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Applicability</h3>
              <p className="text-gray-700 leading-relaxed">
                The gratuity law UAE applies to all employees in the UAE who have completed one year or more of continuous service. This includes both expatriates and UAE nationals, thus extending fair labor practices to a diverse workforce. Additionally, you can read more about who is eligible for gratuity by exploring this article: <Link to="/gratuity-eligibility" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Who is Eligible for Gratuity in UAE</Link>.
              </p>
            </section>
            
            <section id="section-2">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 2: Legal Framework Governing Gratuity Payments</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Federal Decree Law No. 33 of 2021</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Key Provisions:</h4>
              <p className="text-gray-700 leading-relaxed">
                The <strong>Federal Decree Law No. 33 of 2021</strong> standardizes end-of-service benefits throughout the UAE by implementing the following provisions:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Ensures timely payment of gratuity within two weeks of termination.</li>
                <li>Emphasizes clarity in calculating owed gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For a more in-depth understanding, refer to <a href="https://www.alphapartners.co/blog/navigating-end-of-service-benefits-in-the-uae-a-comprehensive-guide" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Navigating End-of-Service Benefits in the UAE: A Comprehensive Guide</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Employer Obligations</h3>
              <p className="text-gray-700 leading-relaxed">Employers are legally obligated to:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Accurately calculate gratuity benefits and ensure timely payments.</li>
                <li>Failure to comply can lead to legal penalties.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Comparison with Payment of Gratuity Act 1972</h3>
              <p className="text-gray-700 leading-relaxed">
                It is important to note that the <strong>Payment of Gratuity Act 1972</strong> is specific to India and does not affect the UAE. However, examining different gratuity calculations across countries can enhance understanding. Knowledge of regulations from other regions fosters a broader perspective on gratuity matters. Learn more about this aspect in relation to the UAE by referring to the keyword: <em>gratuity under payment of gratuity act 1972</em> and check our article on <Link to="/gratuity-for-limited-contracts" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity for Limited Contracts in UAE</Link>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">International Perspectives</h3>
              <p className="text-gray-700 leading-relaxed">
                The UAE gratuity laws differ significantly from other countries. Notably, the UAE's system grants end-of-service benefits without imposing hefty restrictions, showcasing a unique legal framework aimed at ensuring employee security.
              </p>
            </section>
            
            <section id="section-3">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 3: Calculating Gratuity as per UAE Labor Law</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Calculation Formula</h3>
              <p className="text-gray-700 leading-relaxed">Calculating gratuity in the UAE is straightforward:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>For service between 1–5 years</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Gratuity = 21 days of basic salary for each year of service.</li>
                  </ul>
                </li>
                <li>
                  <strong>For service exceeding 5 years</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Gratuity = (21 days' basic salary × 5 years) + (30 days' basic salary × (years of service - 5)).</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Maximum Limit</h3>
              <p className="text-gray-700 leading-relaxed">
                The total gratuity amount cannot exceed two years' basic salary for employees serving more than five years. For further details, check this link: <a href="https://msofficegeek.com/uae-gratuity-calculator/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">UAE Gratuity Calculator</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Components of Gratuity Calculation</h3>
              <p className="text-gray-700 leading-relaxed">The calculation revolves around the basic salary alone. Essential considerations include:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Basic Salary</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Gratuity is computed based on the last basic salary only, excluding any benefits like transportation or housing allowances.</li>
                    <li>Refer to this useful source for more information: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-ua/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How to Calculate Gratuity UAE</a>.</li>
                  </ul>
                </li>
                <li>
                  <strong>Length of Service</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Includes all continuous years worked for the employer. Note that any partial years are calculated on a pro-rata basis.</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Detailed Calculation Examples</h3>
              <p className="text-gray-700 leading-relaxed">To clarify the calculation process, here are two examples:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Example 1</strong>: An employee with a basic salary of AED 10,000 and 3 years of service.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Daily wage = AED 10,000 / 30 = AED 333.33.</li>
                    <li>Gratuity = 21 days × AED 333.33 × 3 = AED 21,000.</li>
                  </ul>
                </li>
                <li>
                  <strong>Example 2</strong>: An employee with a basic salary of AED 12,000 and 7 years of service.
                  <ul className="list-disc pl-6 mt-2">
                    <li>First five years: 21 days × AED 400 × 5 = AED 42,000.</li>
                    <li>Remaining two years: 30 days × AED 400 × 2 = AED 24,000.</li>
                    <li>Total Gratuity = AED 42,000 + AED 24,000 = AED 66,000.</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Factors Influencing Gratuity Amount</h3>
              <p className="text-gray-700 leading-relaxed">Several factors may influence the total gratuity amount, including:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Unpaid leave can be excluded from total service length.</li>
                <li>Any previous advances on gratuity payments should be adjusted accordingly. For a broader understanding, check this link: <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Does Resignation Affect Gratuity UAE</Link>.</li>
              </ul>
            </section>
            
            <section id="section-4">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 4: Gratuity Entitlement Based on Contract Duration</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Employment Contract Types in the UAE</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Limited (Fixed-Term) Contracts:</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Limited contracts have specified start and end dates.</li>
                <li>Under the new law, all contracts are now limited, simplifying employment processes. For more insights, visit: <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How the New Gratuity Law in the UAE 2022 Affects Employees</a>.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity for Limited Contracts</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Entitlement:</h4>
              <p className="text-gray-700 leading-relaxed">
                Employees on limited contracts are entitled to full gratuity pay after completing a year of service, regardless of their reason for leaving, be it resignation or termination.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact of Resignation or Termination</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Resignation:</h4>
              <p className="text-gray-700 leading-relaxed">
                Employees still receive full gratuity rights after a year, with no penalties for resigning.
              </p>
              
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Termination:</h4>
              <p className="text-gray-700 leading-relaxed">
                Employers are required to pay gratuity within two weeks following termination. For additional details, refer to: <a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FactoHR - Gratuity Law in UAE</a>.
              </p>
            </section>
            
            <section id="section-5">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 5: Conditions and Exceptions in Gratuity Payments</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility Criteria</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Minimum Service Period:</h4>
              <p className="text-gray-700 leading-relaxed">
                Employees must complete at least one year of continuous service to qualify for gratuity benefits, as described in this source: <a href="https://www.alphapartners.co/blog/navigating-end-of-service-benefits-in-the-uae-a-comprehensive-guide" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Navigating End-of-Service Benefits in the UAE</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Components Excluded from Gratuity</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Excluded Allowances:</h4>
              <p className="text-gray-700 leading-relaxed">
                Gratuity calculations are strictly based on the employee's basic salary. The following allowances are excluded:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Housing allowance</li>
                <li>Transportation allowance</li>
                <li>Overtime pay</li>
                <li>Other perks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For further insight, check this source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-ua/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How to Calculate Gratuity UAE</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Exceptions and Special Cases</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Termination for Gross Misconduct</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>When an employee is terminated for gross misconduct, they may lose their gratuity rights. Specific grounds for this forfeiture are outlined under Article 44 of the UAE Labor Law.</li>
                  </ul>
                </li>
                <li>
                  <strong>Maximum Gratuity Payment Limit</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>The gratuity payment is capped at a maximum of two years' salary, ensuring fair compensation without imposing undue burdens on employers. Check here for more information: <a href="https://msofficegeek.com/uae-gratuity-calculator/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">UAE Gratuity Calculator</a>.</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Payment Timelines</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers must pay gratuity amounts within 14 days of the end of the employment contract.
              </p>
            </section>
            
            <section id="section-6">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 6: Key Takeaways for Employees and Employers</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">For Employees</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Understanding Your Rights:</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Every employee is eligible for gratuity after completing one year of service.</li>
                <li>Remember that gratuity is based on the last basic salary, excluding allowances.</li>
                <li>Resignation does not affect entitlement under the new law.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Action Points:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Maintain records of employment duration and salary details.</li>
                <li>Consult HR for clarity around gratuity calculations.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">For Employers</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Compliance Obligations:</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Ensure accurate calculations and timely gratuity disbursements.</li>
                <li>Familiarize yourself with the latest labor laws to maintain compliance.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Best Practices:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Maintain transparent communication with employees regarding end-of-service benefits.</li>
                <li>Keep detailed records to streamline gratuity processing for departing employees.</li>
              </ul>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">What is the minimum service period required to qualify for gratuity in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees must complete at least one year of continuous service to qualify for gratuity benefits.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">How is gratuity calculated for employees with more than five years of service?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For service exceeding five years, gratuity is calculated as (21 days' basic salary × 5 years) plus (30 days' basic salary × the number of years beyond five).
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Are housing and transportation allowances included in the gratuity calculation?</h3>
                <p className="text-gray-700 leading-relaxed">
                  No, gratuity calculations are based solely on the employee's basic salary. Housing, transportation, and other allowances are excluded.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">What happens to gratuity if an employee resigns?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees who resign after completing one year of service are still entitled to full gratuity rights without any penalties.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">What are the consequences for employers who fail to pay gratuity on time?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employers who fail to comply with gratuity payment timelines may face legal penalties and fines as per the UAE labor laws.
                </p>
              </div>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Understanding the <strong>gratuity law UAE</strong> is essential for both employees and employers. It helps safeguard rights and ensure compliance with labor regulations. Gratuity serves as an important form of compensation that reflects the value of employee services.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Encouragement to Stay Informed</h3>
              <p className="text-gray-700 leading-relaxed">
                Staying updated with legal changes is crucial for making informed employment decisions. This awareness promotes a fair and productive work environment.
              </p>
            </section>
            
            <section id="call-to-action">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Call to Action</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Engage with Readers</h3>
              <p className="text-gray-700 leading-relaxed">
                We invite you to share your experiences or ask questions about gratuity laws in the UAE. How has the new labor law impacted your understanding of gratuity?
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Resources and Assistance</h3>
              <p className="text-gray-700 leading-relaxed">
                For more information, consider visiting legal firms or government portals. For instance, check the UAE Government page on <a href="https://u.ae/en/information-and-services/jobs/end-of-service-benefits" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">End of Service Benefits</a>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You might also want to reach out to HR professionals or legal advisors for personalized guidance regarding gratuity matters. This support can help you navigate the intricacies of the law effectively.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding and applying the gratuity law in the UAE can lead to a more harmonious work relationship, ensuring financial security for employees while maintaining compliance for employers.
              </p>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources</h3>
                <p className="mb-4 text-gray-700">Explore more content related to gratuity in the UAE:</p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Gratuity Calculation Guide in the UAE
                    </Link>
                  </li>
                  <li>
                    <Link to="/unpaid-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Guide on Gratuity Claims and Disputes
                    </Link>
                  </li>
                  <li>
                    <Link to="/limited-vs-unlimited-contracts" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Difference Between Limited and Unlimited Contracts
                    </Link>
                  </li>
                  <li>
                    <Link to="/is-gratuity-taxable-in-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Gratuity Tax and Deductions in UAE
                    </Link>
                  </li>
                  <li>
                    <Link to="/invest-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Best Ways to Invest Your Gratuity
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GratuityLawUAEGuide;
