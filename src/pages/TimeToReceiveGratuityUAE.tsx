
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
          <p className="ml-3 text-gray-700">Gratuity is a crucial <strong>end-of-service benefit</strong> for employees in the UAE.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">Understanding the <strong>gratuity calculation</strong> helps in financial planning during employment transitions.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Employees are entitled to gratuity after completing <strong>one year of continuous service</strong>.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Factors such as <strong>reason for termination</strong> and <strong>employer's financial situation</strong> affect the gratuity payment timeline.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Domestic workers have specific gratuity rights governed by <strong>Federal Law No. 10 of 2017</strong>.</p>
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
    { id: "understanding-gratuity", title: "Understanding Gratuity in the UAE: A Complete Guide" },
    { id: "what-is-gratuity", title: "What is Gratuity in the UAE?" },
    { id: "how-long-to-receive", title: "How Long Does It Take to Receive Gratuity in UAE?" },
    { id: "gratuity-depend-salary", title: "Does Gratuity Depend on Basic Salary in UAE?" },
    { id: "employers-hold-gratuity", title: "Can Employers Hold My Gratuity in UAE?" },
    { id: "domestic-workers", title: "Gratuity for Domestic Workers in UAE" },
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
  const title = "How Long Does It Take to Receive Gratuity in the UAE? Understanding Your Rights and Timeline";

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

const TimeToReceiveGratuityUAE = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>How Long Does It Take to Receive Gratuity in the UAE? | ActuDubai</title>
        <meta 
          name="description" 
          content="Discover everything you need to know about gratuity in the UAE, including how long it takes to receive it, its dependency on your basic salary, and rights for domestic workers." 
        />
        <meta 
          name="keywords" 
          content="how long does it take to receive gratuity in UAE, does gratuity depend on basic salary UAE, can employer hold my gratuity UAE, gratuity for domestic workers UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Long Does It Take to Receive Gratuity in the UAE? Understanding Your Rights and Timeline
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Estimated reading time: 5 minutes</span>
          </div>
          
          <SocialShareButtons />
          <KeyTakeaways />
          <TableOfContents />
          
          <article className="prose prose-blue max-w-none">
            <p className="text-gray-700 leading-relaxed">
              In the United Arab Emirates (UAE), gratuity is an end-of-service benefit that is vital for employees. It acts as a financial acknowledgment for their hard work and dedication. One common question that arises among employees is <strong>how long does it take to receive gratuity in the UAE</strong>? Understanding gratuity is essential for both employees and employers, as it can significantly impact termination processes and financial planning. In this blog post, we'll explore key aspects of gratuity in the UAE, answer common questions, and clarify your rights and responsibilities as an employee.
            </p>
            
            <section id="understanding-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Gratuity in the UAE: A Complete Guide</h2>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is a fundamental part of the employment landscape in the UAE. Let's explore its various aspects to help you better understand your entitlements.
              </p>
            </section>
            
            <section id="what-is-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">What is Gratuity in the UAE?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is a lump-sum payment made to employees when they leave their job. It is meant as a form of financial recognition for their years of service and loyalty to the company.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                This end-of-service benefit is clearly defined in <strong>UAE Labour Law (Federal Law No. 8 of 1980)</strong>. Employees must complete at least one year of continuous service to be entitled to receive gratuity. According to the law, all employment contracts must include terms related to gratuity entitlements, ensuring compliance from employers to provide this benefit.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Importance in Employment Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding how gratuity works is essential as it should be explicitly stated in all employment contracts. This protects the interests of both employees and employers by providing clear guidelines on gratuity entitlement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keyword: "<strong>does gratuity depend on basic salary UAE</strong>"
              </p>
              <p className="text-gray-700 leading-relaxed">
                In essence, gratuity does depend on the basic salary, as calculations are based on this financial figure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Sources:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><a href="https://u.ae/en/information-and-services/jobs/working-in-uae-government-sector/end-of-service-benefits-in-the-uae-government-sector" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">UAE Labour Law Overview</a></li>
              </ul>
            </section>
            
            <section id="how-long-to-receive">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">How Long Does It Take to Receive Gratuity in UAE?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Standard Timeline for Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Generally, gratuity payments should be processed within 14 days of the employment termination date. This short timeframe ensures that employees do not face long delays after leaving their job.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Source:</strong> <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat - How to Calculate Gratuity UAE</a>
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Factors Influencing the Time Frame</h3>
              <p className="text-gray-700 leading-relaxed">
                Several factors can influence the timeline for receiving gratuity:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Reason for Termination:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>If an employee resigns or is terminated, this can impact the payment timeline.</li>
                <li>Complying with the notice period is key; failing to do so may delay gratuity processing.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Employer's Financial Situation:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employers facing financial challenges may take longer to process gratuity payments.</li>
                <li>Situations such as bankruptcy can legally complicate the payment of gratuity.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Disputes or Outstanding Issues:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>If there are unresolved disputes, such as debts owed to the employer, it may hold up payment.</li>
                <li>Legal issues pending between the employer and employee can similarly delay the receipt of gratuity.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Obligations of Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers are required to follow the timeline mandated by UAE labor law. Failing to pay gratuity on time can lead to penalties, including fines or legal action.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Employee Rights and Recourse</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees have the right to file a complaint if their gratuity is delayed. They can contact the Ministry of Human Resources and Emiratisation (MOHRE) for assistance. Seeking legal help is also advisable if gratuity is unjustly withheld.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keyword: "<strong>how long does it take to receive gratuity in UAE</strong>"
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can learn more about this in detail <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">here</Link>.
              </p>
            </section>
            
            <section id="gratuity-depend-salary">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Does Gratuity Depend on Basic Salary in UAE?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity Calculation Basis</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, gratuity is indeed calculated based on the employee's basic salary, excluding allowances and extra benefits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Source:</strong> <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat - How to Calculate Gratuity UAE</a>
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Method</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>For the First Five Years of Service:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees receive 21 days of basic salary for each year of service.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>For Service Beyond Five Years:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employees earn 30 days of basic salary for each additional year of service.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Maximum Limit:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>The total gratuity amount must not exceed two years' worth of basic salary.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Examples</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Example 1:</strong> Consider an employee with 3 years of service and a basic salary of AED 8,000.
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Gratuity = 21 days x 3 years = 63 days</li>
                <li>Monetary Value = (AED 8,000 / 30) x 63 = AED 16,800.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Example 2:</strong> An employee with 7 years of service and a basic salary of AED 10,000.
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>First 5 years: Gratuity = 21 days x 5 = 105 days.</li>
                <li>Additional 2 years: Gratuity = 30 days x 2 = 60 days.</li>
                <li>Total Gratuity Days = 105 + 60 = 165 days.</li>
                <li>Monetary Value = (AED 10,000 / 30) x 165 = AED 55,000.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact of Employment Types</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding the differences between limited and unlimited contracts can influence gratuity entitlement and calculation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keyword: "<strong>does gratuity depend on basic salary UAE</strong>"
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more insights, refer to <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">this related source</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Sources:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><a href="https://www.pushdigits.com/gratuity-calculation-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">PushDigits - Gratuity Calculation in UAE</a></li>
              </ul>
            </section>
            
            <section id="employers-hold-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Can Employers Hold My Gratuity in UAE?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Stance on Withholding Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers are required by law to pay gratuity, but certain conditions allow them to withhold this amount legally:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Illegal to Withhold Without Just Cause:</strong> It is against the UAE labor law to unjustly deny payment.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Circumstances Allowing Gratuity Withholding</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Gross Misconduct:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Defined under Article 120 of the UAE Labour Law. Examples of misconduct include:</li>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li><strong>Assault:</strong> Physical violence toward employer or coworkers.</li>
                  <li><strong>Theft or Fraud:</strong> Engaging in criminal acts.</li>
                  <li><strong>Disclosure of Confidential Information:</strong> Violating confidentiality agreements.</li>
                </ul>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Source:</strong> <a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Qureos - Gratuity Calculator</a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Outstanding Debts to Employer:</strong> Employers can legally hold back amounts owed by employees.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Contractual Agreements:</strong> Specific terms in the employment contract may apply, provided they comply with labor laws.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Employee Protections</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees can appeal against unfair withholding of gratuity through established channels. Legal support is also available via MOHRE.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keyword: "<strong>can employer hold my gratuity UAE</strong>"
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more information, see <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">the related article</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Sources:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Qureos - Gratuity Calculator</a></li>
              </ul>
            </section>
            
            <section id="domestic-workers">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity for Domestic Workers in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility Criteria</h3>
              <p className="text-gray-700 leading-relaxed">
                Domestic workers have rights to gratuity similar to those in other employment sectors after completing one year of continuous service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Source:</strong> <a href="https://www.etisalataudit.com/end-of-service-gratuity-explained/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Etisalat Audit - End of Service Gratuity Explained</a>
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Method</h3>
              <p className="text-gray-700 leading-relaxed">
                Domestic workers gain 14 days of basic salary for each year of service worked.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Example</h3>
              <p className="text-gray-700 leading-relaxed">
                For a domestic worker with 4 years of service and a basic salary of AED 2,000:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Gratuity = 14 days x 4 years = 56 days.</li>
                <li>Monetary Value = (AED 2,000 / 30) x 56 = AED 3,733.33.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Framework Specific to Domestic Workers</h3>
              <p className="text-gray-700 leading-relaxed">
                Domestic workers are governed by Federal Law No. 10 of 2017 on Domestic Workers. This law covers their rights, including timely payment and protection from abuse.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Importance of Transparent Contracts</h3>
              <p className="text-gray-700 leading-relaxed">
                Employment contracts for domestic workers must explicitly state terms related to gratuity. Employers must also provide a copy to the workers to ensure they understand their rights.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Comparison with Other Employment Sectors</h3>
              <p className="text-gray-700 leading-relaxed">
                While gratuity entitlements are similar across sectors, some nuances apply specifically to domestic workers based on their distinct working conditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keyword: "<strong>gratuity for domestic workers UAE</strong>"
              </p>
              <p className="text-gray-700 leading-relaxed">
                For additional information, check <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">this source</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Sources:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><a href="https://www.etisalataudit.com/end-of-service-gratuity-explained/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Etisalat Audit - End of Service Gratuity Explained</a></li>
              </ul>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                In summary, understanding gratuity in the UAE is crucial for employees across all sectors. It serves as a significant financial benefit at the end of employment. This guide covered how gratuity is calculated, the legal obligations of employers, and the rights of employees. Employees must remember to review their employment contracts regularly, as these documents will clarify their entitlements and rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more insights on gratuity and other labor-related topics, refer to the <strong>MOHRE Official Website</strong> <a href="https://www.mohre.gov.ae/en/home.aspx" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">here</a>. If faced with complex situations regarding gratuity, seeking professional legal advice is always recommended.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In conclusion, grasping the details of gratuity entitlements empowers employees and provides peace of mind when navigating employment transitions.
              </p>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. How long does it take to receive gratuity in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Generally, gratuity should be paid within 14 days of employment termination. However, factors like employer's financial situation, disputes, or reason for termination can influence this timeline.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. Does gratuity calculation depend on basic salary in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, gratuity is calculated based on an employee's basic salary, excluding allowances and additional benefits. The calculation is typically 21 days of basic salary for each of the first five years of service, and 30 days for each year thereafter.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. Can my employer legally withhold my gratuity payment?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employers can only withhold gratuity under specific circumstances, such as if the employee has outstanding debts to the employer, has committed gross misconduct (as defined in Article 120 of UAE Labour Law), or based on specific contractual terms that comply with labor laws.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Are domestic workers entitled to gratuity in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, domestic workers are entitled to gratuity after completing one year of continuous service. The calculation is typically 14 days of basic salary for each year of service. This is governed by Federal Law No. 10 of 2017 on Domestic Workers.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. What should I do if my employer refuses to pay my gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  If your employer refuses to pay gratuity without just cause, you can file a complaint with the Ministry of Human Resources and Emiratisation (MOHRE). It's advisable to seek legal assistance if the issue persists.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">6. Does resignation affect my gratuity entitlement?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, resignation can affect gratuity entitlement. Under unlimited contracts, if you resign before completing 5 years, you may receive a reduced amount based on your years of service. Under limited contracts, resigning before contract completion may lead to gratuity forfeiture unless specified otherwise in your contract.
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
                <li>
                  <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Does Resignation Affect Gratuity in UAE?
                  </Link>
                </li>
              </ul>
            </div>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Does Resignation Affect Gratuity in UAE?
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

export default TimeToReceiveGratuityUAE;
