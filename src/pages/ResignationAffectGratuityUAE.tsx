
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
          <p className="ml-3 text-gray-700">Gratuity is a crucial end-of-service benefit in the UAE, applicable under various employment termination scenarios.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">The impact of resignation on gratuity depends on contract type and years of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Gratuity deduction rules may apply in cases of unpaid debts, property damage, or disciplinary actions.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Unpaid leave can reduce the service period, thereby affecting the gratuity amount.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Understanding the legal framework ensures both employees and employers comply with UAE labor laws.</p>
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
    { id: "does-resignation-affect", title: "Does Resignation Affect Gratuity in UAE?" },
    { id: "understanding-gratuity", title: "Understanding Gratuity in the UAE" },
    { id: "impact-resignation", title: "Impact of Resignation on Gratuity" },
    { id: "deduction-rules", title: "Gratuity Deduction Rules in the UAE" },
    { id: "unpaid-leave", title: "How Is Gratuity Affected by Unpaid Leave?" },
    { id: "terminated-employees", title: "Gratuity for Terminated Employees in UAE" },
    { id: "contract-employees", title: "Gratuity for Contract Employees in UAE" },
    { id: "additional-factors", title: "Additional Factors Affecting Gratuity" },
    { id: "practical-examples", title: "Practical Examples" },
    { id: "conclusion", title: "Conclusion" },
    { id: "call-to-action", title: "Call to Action" },
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
  const title = "Does Resignation Affect Gratuity in UAE? Understanding the Impact on Employee Benefits";

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

const ResignationAffectGratuityUAE = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Does Resignation Affect Gratuity in UAE? | ActuDubai</title>
        <meta 
          name="description" 
          content="Does resignation affect gratuity in the UAE? Learn how contract type and service duration impact your end-of-service benefits. Understand deduction rules and exact calculations under UAE labor law." 
        />
        <meta 
          name="keywords" 
          content="does resignation affect gratuity UAE, gratuity deduction rules UAE, how is gratuity affected by unpaid leave, gratuity for terminated employees UAE, gratuity for contract employees UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Does Resignation Affect Gratuity in UAE? Understanding the Impact on Employee Benefits
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 10 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <section id="does-resignation-affect">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Does Resignation Affect Gratuity in UAE?</h2>
              <p className="text-gray-700 leading-relaxed">
                The question of whether <strong>resignation affects gratuity in the UAE</strong> is a common concern for many employees working in the region. In short, yes, resignation can affect your gratuity entitlements, but the exact impact depends on several factors including your contract type and length of service. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding these implications is crucial for planning your career moves and ensuring you receive the benefits you're entitled to. This comprehensive guide explores the relationship between resignation and gratuity, covering essential aspects like <strong>gratuity deduction rules in the UAE</strong>, the impact of unpaid leave, and specific considerations for different types of employment contracts.
              </p>
            </section>
            
            <section id="understanding-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is an indispensable end-of-service benefit mandated by UAE Labor Law. It is calculated based on the employee's last basic salary and length of service.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                According to UAE Labor Law, gratuity calculations vary according to the type of employment contract (limited or unlimited) and years of service.
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Unlimited Contracts:</strong> The gratuity entitlement is based on service duration.</li>
                <li><strong>Limited Contracts:</strong> Gratuity is also calculated similarly but may have specific clauses affecting payouts.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Facilitating a nuanced understanding, detailed calculations can be located in various resources to help employees evaluate their eligibility correctly. For more comprehensive information, please refer to <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">how to calculate gratuity in UAE</Link>.
              </p>
            </section>
            
            <section id="impact-resignation">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Impact of Resignation on Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Resignation and Gratuity Entitlement</h3>
              <p className="text-gray-700 leading-relaxed">
                Resignation does impact gratuity. The extent of this impact hinges on the employee's contract type and the duration of their service.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Unlimited Contracts</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Service Less Than 1 Year:</strong> Employees are not entitled to any gratuity if they resign before completing one year of service.</li>
                <li><strong>Service Between 1-3 Years:</strong> Employees can receive one-third (1/3) of the 21 days' basic salary for each year of service.</li>
                <li><strong>Service Between 3-5 Years:</strong> Employees earn two-thirds (2/3) of the 21 days' basic salary for each year of service.</li>
                <li><strong>Service Over 5 Years:</strong> Employees receive the full gratuity of 21 days' pay for each of the first five years and 30 days' pay for each additional year.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For further information, consult the guidelines outlined by <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Limited Contracts</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Completion of Contract:</strong> Employees are entitled to full gratuity; 21 days of basic salary for each year of service up to 5 years, and 30 days for each additional year.</li>
                <li><strong>Resignation Before Contract Ends:</strong> Employees may forfeit gratuity rights unless explicitly stated otherwise in the contract.</li>
                <li><strong>Early Termination by Employer:</strong> Employees will receive full gratuity for years completed and a proportional amount for any partial year worked.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Refer to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a> for more details.
              </p>
            </section>
            
            <section id="deduction-rules">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Deduction Rules in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Circumstances Leading to Deductions</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity may be subject to deductions under specific circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Unpaid Debts to Employer:</strong> Salaries owed or loans taken that remain unpaid may be deducted from gratuity.</li>
                <li><strong>Damage to Company Property:</strong> Costs for any damages caused by the employee, intentionally or out of negligence.</li>
                <li><strong>Disciplinary Deductions:</strong> Gratuity deductions arising from disciplinary actions in accordance with company policy.</li>
                <li><strong>Incomplete Service Period:</strong> Resignation before completing one year nullifies gratuity entitlement.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Additionally, you can reference the specific articles in UAE Labor Law regarding deductions. For clearer understanding, please check <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat's guidelines</a>.
              </p>
            </section>
            
            <section id="unpaid-leave">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">How Is Gratuity Affected by Unpaid Leave?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Unpaid Leave</h3>
              <p className="text-gray-700 leading-relaxed">
                Unpaid leave refers to any approved time off from work in which the employee does not receive salary.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact on Service Period</h3>
              <p className="text-gray-700 leading-relaxed">
                Days of unpaid leave generally do not count towards the total service period. This could lower the gratuity amount an employee is entitled to receive.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example</h3>
              <p className="text-gray-700 leading-relaxed">
                If an employee takes 60 days of unpaid leave during the year, the gratuity would be calculated based on 305 days of service instead of 365 days.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Interpretation</h3>
              <p className="text-gray-700 leading-relaxed">
                The UAE Labor Law states that only days worked contribute to gratuity. For insights into unpaid leave impacts, refer to the information provided by <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>.
              </p>
            </section>
            
            <section id="terminated-employees">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity for Terminated Employees in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Termination by Employer</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees terminated by the employer may be entitled to full gratuity, provided they have completed at least one year of service.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Termination for Cause (Article 120)</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees dismissed for gross misconduct under Article 120 of the UAE Labor Law might lose their gratuity entitlements.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Examples of Gross Misconduct</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Theft</li>
                <li>Disclosure of confidential information</li>
                <li>Physical assault</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Reference</h3>
              <p className="text-gray-700 leading-relaxed">
                You can find details on this in Article 120 of the UAE Labor Law. For additional clarity, consult resources like <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Notice Period</h3>
              <p className="text-gray-700 leading-relaxed">
                It is essential to understand how the notice period could affect gratuity calculations.
              </p>
            </section>
            
            <section id="contract-employees">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity for Contract Employees in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Contract Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                Contract employees are those working under fixed-term contracts within the UAE.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Entitlement upon Contract Completion</h3>
              <p className="text-gray-700 leading-relaxed">
                These employees are eligible for full gratuity according to standard calculations.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Early Termination by Employee</h3>
              <p className="text-gray-700 leading-relaxed">
                Resigning before the contract ends can lead to forfeiture of gratuity rights, barring any contractual allowances.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Early Termination by Employer</h3>
              <p className="text-gray-700 leading-relaxed">
                If the employer terminates the contract, the employee is entitled to their gratuity and potentially other compensations.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculations</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>For Less Than 5 Years of Service:</strong> Gratuity = 21 days' basic salary for each year of service.</li>
                <li><strong>For More Than 5 Years of Service:</strong> Gratuity = 30 days' basic salary for each additional year after 5 years.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Refer to <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a> for comprehensive details.
              </p>
            </section>
            
            <section id="additional-factors">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Additional Factors Affecting Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Salary Components</h3>
              <p className="text-gray-700 leading-relaxed">
                Only the basic salary counts towards gratuity calculations. This means allowances and other benefits are excluded.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Continuous Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Uninterrupted service is crucial for gratuity eligibility.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Fraction of a Year</h3>
              <p className="text-gray-700 leading-relaxed">
                Partial years of service are calculated proportionally.
              </p>
            </section>
            
            <section id="practical-examples">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Practical Examples</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 1: Resignation under Unlimited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Scenario:</strong><br />
                An employee resigns after 4 years, earning a basic salary of AED 12,000.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Calculation:</strong><br />
                Entitled to two-thirds of gratuity:<br />
                Gratuity = [(12,000 ÷ 30) × 21 × 4] × (2/3)<br />
                Gratuity Amount: AED 22,400
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example 2: Termination under Limited Contract</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Scenario:</strong><br />
                An employee is terminated after 6 years, earning AED 15,000.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Calculation:</strong><br />
                Gratuity = [(15,000 ÷ 30) × 21 × 5] + [(15,000 ÷ 30) × 30 × 1]<br />
                Gratuity Amount: AED 52,500
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Summary of Key Points</h3>
              <p className="text-gray-700 leading-relaxed">
                In summary, resignation affects gratuity entitlements based on contract type and the duration of service. Employees should realize that unpaid leave can condense the overall service period, lowering gratuity amounts. Additionally, understanding gratuity deduction rules facilitates better planning for future finances.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Final Thoughts</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees should review their contracts and discuss with HR or legal professionals for tailored advice. On the flip side, employers must adhere to gratuity laws to foster positive employee relations.
              </p>
            </section>
            
            <section id="call-to-action">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Call to Action</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Engagement Invitation</h3>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to share your experiences or any questions in the comments below.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Social Sharing</h3>
              <p className="text-gray-700 leading-relaxed">
                Spread the knowledge by sharing this post with others who might benefit from understanding gratuity rights within the UAE.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Professional Advice</h3>
              <p className="text-gray-700 leading-relaxed">
                Consider reaching out to legal professionals for specific cases related to gratuity entitlements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By educating yourself about how resignation affects gratuity in the UAE, you empower yourself to make informed decisions throughout your career.
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
                  <Link to="/how-to-claim-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    How to Claim Gratuity in UAE
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
                <h3 className="text-xl font-semibold text-gray-800">1. Does resignation affect gratuity entitlements in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, resignation can affect gratuity entitlements based on the type of contract and the length of service. For more details, see <strong>does resignation affect gratuity UAE</strong>.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. What are the gratuity deduction rules in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity deductions may occur due to unpaid debts, property damage, or disciplinary actions. Refer to <strong>gratuity deduction rules UAE</strong> for comprehensive information.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. How does unpaid leave impact gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unpaid leave can reduce the total service period, thereby decreasing the gratuity amount. Learn more at <strong>impact of unpaid leave on gratuity</strong>.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Is there a difference in gratuity for contract employees?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, contract employees have specific gratuity entitlements based on their fixed-term contracts. Details can be found at <strong>gratuity for contract employees UAE</strong>.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. What happens to gratuity if an employee is terminated?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Terminated employees may be entitled to full or partial gratuity depending on the reason for termination. For more information, visit <strong>gratuity for terminated employees UAE</strong>.
                </p>
              </div>
            </section>
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

export default ResignationAffectGratuityUAE;
