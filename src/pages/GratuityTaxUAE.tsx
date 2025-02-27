
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
          <p className="ml-3 text-gray-700">Gratuity is a mandatory end-of-service benefit for employees in the UAE.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">Gratuity payments are not taxable in the UAE.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Understanding gratuity deductions is essential for both employers and employees.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Specific scenarios can lead to deductions from gratuity payments.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">The UAE's tax-free status on gratuity contrasts with practices in other countries.</p>
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
    { id: "overview", title: "Overview of Gratuity in UAE" },
    { id: "taxation", title: "Taxation of Gratuity in the UAE" },
    { id: "tax-deductions", title: "Gratuity Tax Deductions in Dubai" },
    { id: "deductions", title: "Deductions from Gratuity Payments" },
    { id: "end-of-service", title: "Tax on End-of-Service Benefits in the UAE" },
    { id: "financial-planning", title: "Financial Planning and Final Considerations" },
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
  const title = "Is Gratuity Taxable in UAE? Understanding Gratuity Tax Deductions and End-of-Service Benefits";

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

const GratuityTaxUAE = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Is Gratuity Taxable in UAE? Understanding Gratuity Tax Deductions | ActuDubai</title>
        <meta 
          name="description" 
          content="Discover if gratuity is taxable in the UAE and learn about gratuity tax deductions in Dubai. This guide clarifies tax on end-of-service benefits and what you need to know!" 
        />
        <meta 
          name="keywords" 
          content="is gratuity taxable in UAE, gratuity tax deductions Dubai, tax on end-of-service benefits UAE, gratuity deductions from salary UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Is Gratuity Taxable in UAE? Understanding Gratuity Tax Deductions and End-of-Service Benefits
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 10 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Gratuity is a vital component of employee compensation in the United Arab Emirates (UAE), serving as a mandatory end-of-service benefit for qualifying employees. In the UAE, gratuity is a lump-sum payment given to employees who have completed at least one year of continuous service, as a token of appreciation and acknowledgment of their dedication and effort in their respective roles. Understanding the tax implications of gratuity is crucial, as both employers and employees often wonder, <strong>"Is gratuity taxable in UAE?"</strong> This comprehensive guide will clarify the tax status of gratuity and other end-of-service benefits in the UAE, dispelling common misconceptions and providing actionable insights.
            </p>
            
            <section id="overview">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Overview of Gratuity in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Understanding End-of-Service Benefits</h3>
              <p className="text-gray-700 leading-relaxed">
                End-of-service benefits are entitlements provided to employees upon the termination of their employment contract, with gratuity being the most significant component in the UAE. These benefits act as a form of compensation for employees who have dedicated their time and skills to an organization.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Gratuity According to UAE Labor Law</h3>
              <p className="text-gray-700 leading-relaxed">
                As per the UAE Labor Law, gratuity is a statutory benefit that employers must provide to employees who have completed at least one year of continuous service. This entitlement is critical in ensuring that employees receive acknowledgment for their service once they leave an organization (<a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Law in UAE - FactoHR</a>).
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility Criteria for Gratuity Payments</h3>
              <p className="text-gray-700 leading-relaxed">
                All employees, irrespective of their position or nationality, are eligible for gratuity if they meet the service duration requirement of at least one year. This applies to both expatriates and UAE nationals, fostering an inclusive working environment.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Methods for Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>First Five Years of Service:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees are entitled to 21 days' basic salary for each year of service.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Beyond Five Years of Service:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees receive 30 days' basic salary for each additional year after five years.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Example Calculation:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                An employee with a basic salary of AED 10,000 and six years of service would calculate gratuity as follows:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>First 5 years:</strong><br />
                [(21 days × 5 years × AED 10,000) ÷ 30 = AED 35,000]
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6th year:</strong><br />
                [(30 days × 1 year × AED 10,000) ÷ 30 = AED 10,000]
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Total Gratuity:</strong> AED 35,000 + AED 10,000 = AED 45,000
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more detailed calculations on gratuity, please refer to the source: (<a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How to Calculate Gratuity UAE - Bayzat</a>).
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Deductions from Salary UAE</h3>
              <p className="text-gray-700 leading-relaxed">
                It's noteworthy that gratuity is not deducted from an employee's salary but is an additional benefit. Employees can look forward to this financial return as a safety net at the end of their service.
              </p>
            </section>
            
            <section id="taxation">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Taxation of Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Addressing the Primary Question</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Is gratuity taxable in UAE?</strong> The straightforward answer is no; gratuity is not taxable in the UAE.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Explanation of Tax-Free Status</h3>
              <p className="text-gray-700 leading-relaxed">
                The UAE does not impose personal income tax, meaning that individual income, including salaries and end-of-service benefits like gratuity, is not subject to taxation. Consequently, employees receive their full gratuity amount without any deductions for income tax (<a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Calculator - Qureos</a>).
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Implications for Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                As gratuity payments are tax-free, employees can receive their entitled amounts, allowing for better financial planning. This non-taxed nature ensures that employees benefit fully from their end-of-service payments.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Implications for Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers are not required to withhold any taxes from gratuity payments and can calculate gratuity based solely on the employee's tenure and basic salary. This simplifies payroll processes and helps employers budget for future gratuity obligations.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Comparison with Other Countries</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike in some countries where gratuity or similar benefits may be taxed, the UAE provides a tax-free environment for such payments, promoting investment and workforce stability.
              </p>
            </section>
            
            <section id="tax-deductions">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Tax Deductions in Dubai</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Clarifying the Concept of Gratuity Tax Deductions</h3>
              <p className="text-gray-700 leading-relaxed">
                Given the UAE's tax-free status, there are no <strong>gratuity tax deductions in Dubai</strong> or any other emirate. Employees can receive their full gratuity amount without tax liabilities.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Common Misconceptions</h3>
              <p className="text-gray-700 leading-relaxed">
                Expatriates may be confused due to tax practices in their home countries; however, in Dubai, gratuity is paid without tax deductions. Understanding this aspect clears up misconceptions about potential taxation on gratuity.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Emphasis on Uniformity Across Emirates</h3>
              <p className="text-gray-700 leading-relaxed">
                The taxation laws regarding gratuity are consistent across all emirates, which means that each employee, regardless of their location in the UAE, can expect similar gratuity treatment.
              </p>
            </section>
            
            <section id="deductions">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Deductions from Gratuity Payments</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Understanding Non-Tax Deductions</h3>
              <p className="text-gray-700 leading-relaxed">
                While gratuity is not subject to tax deductions, certain circumstances may lead to deductions from the gratuity payment. Understanding these situations can help employees prepare for potential changes to their expected gratuity amount.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Scenarios Where Deductions Might Apply</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Outstanding Debts to the Employer:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees who have outstanding loans or debts to the employer can see these amounts deducted from the gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Example:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                If an employee owes AED 5,000 to the employer, this amount will be deducted from their gratuity payment (<a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Law in UAE - FactoHR</a>).
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Disciplinary Reasons and Termination for Cause:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Under Article 120 of the UAE Labor Law, employees terminated for gross misconduct may forfeit their right to gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Examples of Misconduct:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Theft, breach of trust, or disclosure of confidential information (<a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Law in UAE - FactoHR</a>).
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Resignation Before Completing Five Years (Unlimited Contract):</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees under an unlimited contract who resign before completing five years may receive a reduced gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Gratuity Entitlement Based on Years of Service:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>1-3 years: 1/3 of the 21 days' gratuity pay.</li>
                <li>3-5 years: 2/3 of the 21 days' gratuity pay.</li>
                <li>Over 5 years: Full gratuity pay.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Example:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                An employee resigning after 4 years with a basic salary of AED 8,000 would have gratuity calculated as:
              </p>
              <p className="text-gray-700 leading-relaxed">
                [(21 days × 4 years × AED 8,000 ÷ 30) × 2/3 = AED 14,933.33]
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more on this, visit (<a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How to Calculate Gratuity UAE - Bayzat</a>).
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Emphasizing the Non-Tax Nature of Deductions</h3>
              <p className="text-gray-700 leading-relaxed">
                It's important to note that these deductions are not tax-related but rather are based on specific clauses in the UAE Labor Law. This distinction helps clarify the legal basis for any deductions made from gratuity payments.
              </p>
            </section>
            
            <section id="end-of-service">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Tax on End-of-Service Benefits in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of End-of-Service Benefits</h3>
              <p className="text-gray-700 leading-relaxed">
                End-of-service benefits include gratuity and other payments owed to the employee upon termination, such as unpaid salary, compensations, and leave balances.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Tax Implications for Other End-of-Service Benefits</h3>
              <p className="text-gray-700 leading-relaxed">
                Like gratuity, other end-of-service benefits are also not taxed in the UAE. This comprehensive tax-free status ensures that employees receive their full dues upon leaving an organization (<a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Calculator - Qureos</a>).
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Unified Tax-Free Status</h3>
              <p className="text-gray-700 leading-relaxed">
                The UAE's policy guarantees that all forms of employee compensation at the end of service are provided tax-free, allowing for increased financial freedom for departing employees.
              </p>
            </section>
            
            <section id="financial-planning">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Financial Planning and Final Considerations</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Importance of Understanding Gratuity and Deductions</h3>
              <p className="text-gray-700 leading-relaxed">
                Awareness of gratuity entitlements and potential deductions allows for better financial planning and can prevent unexpected shortfalls. Knowledge of these policies can significantly impact both employees and employers.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Advice for Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees should familiarize themselves with their contract terms and the UAE Labor Law to understand their rights fully. This knowledge empowers them to advocate for their entitlements effectively.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Advice for Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers must adhere to legal requirements when calculating and disbursing gratuity to avoid disputes and legal issues. A proactive approach to gratuity management can enhance workplace relations.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Encouragement to Consult Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                For personalized advice, consulting with financial advisors or legal experts knowledgeable in UAE labor laws is recommended. This preliminary guidance can help navigate complex issues regarding gratuity and taxation.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Gratuity in the UAE is a significant, non-taxable end-of-service benefit. There are no gratuity tax deductions in Dubai or any other emirate. While potential deductions exist based on specific circumstances, they are not tax-related. Understanding the nuances of gratuity payments ensures transparency and satisfaction for both employees and employers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For further questions or personalized guidance, consider consulting a legal expert specializing in UAE labor law. Gratuity represents both security and appreciation for dedicated service, and understanding its implications is essential for both parties involved.
              </p>
              
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
                    <Link to="/best-way-invest-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      The Best Way to Invest Your Gratuity in the UAE
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. Is gratuity taxable for expatriates in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  No, gratuity is not taxable for expatriates in the UAE. The UAE does not impose personal income tax, so gratuity payments are received in full without any tax deductions.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. What factors can lead to deductions from my gratuity payment?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Deductions from gratuity payments can occur due to outstanding debts to the employer, termination for gross misconduct, or resignation before completing the required service period under an unlimited contract.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. How is gratuity calculated for employees with more than five years of service?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For employees with more than five years of service, gratuity is calculated at 21 days' basic salary for each of the first five years and 30 days' basic salary for each additional year beyond five years.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Are there any taxes on other end-of-service benefits besides gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  No, other end-of-service benefits such as unpaid salary, compensations, and leave balances are also not taxed in the UAE.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. Can employers deduct gratuity from my salary?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity is not deducted from an employee's salary. It is an additional benefit provided upon the termination of the employment contract.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">6. Where can I find more information about gratuity laws in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For more detailed information, you can refer to resources like <a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Law in UAE - FactoHR</a> or consult with legal experts specializing in UAE labor laws.
                </p>
              </div>
            </section>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Additional Resources</h3>
              <p className="text-gray-700 leading-relaxed">
                We invite readers to share their experiences or pose questions in the comments section below. For more insights on employment laws in the UAE, explore our articles on labor contracts, employee rights, and financial planning for expatriates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding your rights and benefits regarding gratuity can impact your overall financial health and stability in the UAE, making it a topic worth exploring deeply.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This blog serves to provide clarity and support for employees navigating the intricacies of gratuity and taxation within the UAE framework.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Previous Blog Posts:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                For insights related to whether gratuity is taxable or subject to deductions, refer to <Link to="/gratuity-tax-deductions" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Tax and Deductions</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you're looking for advice on financial planning after receiving gratuity, check out <Link to="/options-after-receiving-gratuity" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Options After Receiving Gratuity</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For frequently asked questions about gratuity in the UAE, visit <Link to="/gratuity-faqs" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity FAQs</Link>.
              </p>
            </div>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/best-way-invest-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Best Way to Invest Gratuity in UAE
            </Link>
            <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              UAE Gratuity Law Guide
              <ChevronUp className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GratuityTaxUAE;
