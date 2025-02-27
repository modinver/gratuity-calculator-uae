
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
          <p className="ml-3 text-gray-700"><strong>Gratuity</strong> is a mandatory end-of-service benefit for employees in the UAE who have completed at least one year of continuous service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">The calculation of gratuity is based on the employee's <strong>basic salary</strong> and the total length of service.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Employees must follow a structured <strong>claim process</strong> to receive their gratuity, including preparing necessary documents and approaching their employer.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">In cases where gratuity is not paid, employees can seek <strong>legal advice</strong> and utilize resources like the <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">MoHRE Official Website</a>.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Understanding <strong>employee rights</strong> under UAE Labor Law is crucial for preventing and resolving gratuity disputes.</p>
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
    { id: "introduction", title: "Introduction" },
    { id: "understanding-gratuity", title: "Understanding Gratuity in the UAE" },
    { id: "calculate-gratuity", title: "How to Calculate Gratuity" },
    { id: "steps-to-claim", title: "Steps to Claim Gratuity in the UAE" },
    { id: "gratuity-not-paid", title: "What to Do If Gratuity Is Not Paid by Employer" },
    { id: "dispute-resolution", title: "Gratuity Dispute Resolution in Dubai" },
    { id: "legal-action", title: "Legal Action for Unpaid Gratuity in the UAE" },
    { id: "file-complaint", title: "How to File a Complaint for Gratuity in the UAE" },
    { id: "employee-rights", title: "Employee Rights Under UAE Labor Law" },
    { id: "tips", title: "Tips to Prevent Gratuity Disputes" },
    { id: "conclusion", title: "Conclusion" },
    { id: "additional-resources", title: "Additional Resources" },
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
  const title = "How to Claim Gratuity in UAE - A Comprehensive Guide";

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

const GratuityClaim = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>How to Claim Gratuity in UAE: A Comprehensive Guide</title>
        <meta 
          name="description" 
          content="Learn how to claim gratuity in the UAE with this comprehensive guide. Understand eligibility, calculation methods, legal rights, and the step-by-step process to ensure you receive your end-of-service benefits. Find solutions for disputes and legal actions if gratuity is not paid." 
        />
        <meta 
          name="keywords" 
          content="how to claim gratuity in UAE, gratuity not paid by employer UAE, gratuity dispute resolution Dubai, legal action for unpaid gratuity UAE, file complaint for gratuity UAE" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Claim Gratuity in UAE - A Comprehensive Guide
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
              Understanding <strong>how to claim gratuity in UAE</strong> is crucial for all employees working in this vibrant region. Gratuity is a key benefit that provides financial security when employment ends. Specifically, gratuity is defined as an end-of-service benefit awarded to employees who have completed at least one year of continuous service in the UAE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This payment is calculated based on the employee's basic salary and length of service. As such, it is a significant sum that provides a cushion during the transitional phase after leaving a job. Many employees rely on this payment to manage their financial needs post-employment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, a pressing issue can arise when gratuity is <strong>not paid by the employer in UAE</strong>, leading to disputes and confusion. This blog post aims to inform you about the steps you need to take to claim your gratuity and resolve any potential disputes effectively.
            </p>
            
            <section id="understanding-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Understanding Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is an entitlement under the UAE Labor Law for employees after their employment ends. According to the law, employers are legally obligated to pay gratuity within 14 days following the employee's departure from the company (<a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Source</a>).
              </p>
              
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Eligibility Criteria</h4>
              <p className="text-gray-700 leading-relaxed">
                To qualify for gratuity, employees must have:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Completed at least one year of continuous service.</li>
                <li>Not been terminated due to misconduct.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Understanding these requirements is essential, especially for those concerned about <strong>gratuity not paid by employer UAE</strong>. For more details on the implications of resignation on gratuity, refer to the article on <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">does resignation affect gratuity UAE</Link>.
              </p>
            </section>
            
            <section id="calculate-gratuity">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">How to Calculate Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Method</h3>
              <p className="text-gray-700 leading-relaxed">
                Calculating gratuity can seem complicated, but it's based on straightforward guidelines:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>For the first 5 years of service</strong>: You are entitled to <strong>21 days' basic salary</strong> for each year of service.</li>
                <li><strong>For service exceeding 5 years</strong>: You receive <strong>30 days' basic salary</strong> for each additional year beyond five.</li>
              </ul>
              
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Cap on Gratuity</h4>
              <p className="text-gray-700 leading-relaxed">
                It's important to note that the total gratuity amount must not exceed <strong>two years' worth of your basic salary</strong>.
              </p>
              
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Example Calculation</h4>
              <p className="text-gray-700 leading-relaxed">
                To illustrate this process:
              </p>
              <ol className="list-decimal pl-6 mt-2 text-gray-700">
                <li><strong>Basic Salary</strong>: AED 5,000</li>
                <li><strong>Years of Service</strong>: 7 years</li>
              </ol>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>For the first five years: 5 years × 21 days × (AED 5,000 / 30) = AED 17,500</li>
                <li>For the next two years: 2 years × 30 days × (AED 5,000 / 30) = AED 10,000</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Total Gratuity</strong> = AED 17,500 + AED 10,000 = AED 27,500
              </p>
              <p className="text-gray-700 leading-relaxed">
                For further reference on calculating your gratuity, check the following resources: (<a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Source</a>, <a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Source</a>).
              </p>
            </section>
            
            <section id="steps-to-claim">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Steps to Claim Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Step 1: Confirm Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Before you initiate the claim process, ensure you have completed at least <strong>one year of continuous service</strong> with your employer.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Step 2: Prepare Necessary Documents</h3>
              <p className="text-gray-700 leading-relaxed">
                Gather the required documents to substantiate your claim, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Employment Contract</strong>: Both original and copies.</li>
                <li><strong>Final Settlement Letter</strong>: Obtained from your employer.</li>
                <li><strong>Salary Slips</strong>: For the entire span of your employment.</li>
                <li><strong>Identification Documents</strong>: A copy of your passport and Emirates ID.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Step 3: Approach Your Employer</h3>
              <p className="text-gray-700 leading-relaxed">
                In this step, you should:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Formally request the gratuity payment from your Human Resources department or management.</li>
                <li>Submit a written request outlining your entitlement and keep copies of your communications.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Step 4: Maintain Written Records</h3>
              <p className="text-gray-700 leading-relaxed">
                It's essential to keep an unaltered record of all your communications as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Document all interactions regarding your gratuity claims.</li>
                <li>Use emails or registered letters for official correspondence to maintain a trail of communications.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These steps are critical in the event you need to prove your claim for <strong>how to claim gratuity in UAE</strong> or if you find yourself facing <strong>gratuity not paid by employer UAE</strong> issues.
              </p>
            </section>
            
            <section id="gratuity-not-paid">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">What to Do If Gratuity Is Not Paid by Employer</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Identify Reasons for Non-Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Sometimes, employers may not pay gratuity for several reasons, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Disputes over gratuity calculations.</li>
                <li>Accusations of misconduct that led to termination.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Document Non-Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensure you:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Keep meticulous records of unpaid gratuity statements.</li>
                <li>Save all written correspondence with the employer concerning this issue.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Remind Employer of Legal Obligations</h3>
              <p className="text-gray-700 leading-relaxed">
                In your communications:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Politely inform your employer of their legal obligation to pay gratuity in accordance with UAE Labor Law.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Seek Legal Advice</h3>
              <p className="text-gray-700 leading-relaxed">
                If the issue persists, consider consulting a labor lawyer for professional guidance. This action may be necessary if you face challenges with <strong>legal action for unpaid gratuity UAE</strong>. For legal insights on this matter, check our post on <Link to="/legal-action-unpaid-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">legal action for unpaid gratuity UAE</Link>.
              </p>
            </section>
            
            <section id="dispute-resolution">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Gratuity Dispute Resolution in Dubai</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Ministry of Human Resources and Emiratisation (MoHRE)</h3>
              <p className="text-gray-700 leading-relaxed">
                The MoHRE plays a vital role in resolving labor disputes, including gratuity payment issues. For more information, visit the <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">MoHRE Official Website</a>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Steps to Resolve Disputes</h3>
              <ol className="list-decimal pl-6 mt-2 text-gray-700">
                <li>
                  <strong>File a Complaint with MoHRE</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>You can visit a Tasheel service center or use their online portal.</li>
                    <li>Provide them with necessary details and documentation about your gratuity claim.</li>
                  </ul>
                </li>
                <li>
                  <strong>Mediation Process</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>MoHRE will mediate between you and your employer to try to reach an amicable conclusion.</li>
                  </ul>
                </li>
                <li>
                  <strong>Referral to Labor Court</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>If mediation fails and you still have unresolved issues, the case can be referred to the labor court.</li>
                  </ul>
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                This process helps ensure <strong>gratuity dispute resolution Dubai</strong> for employees experiencing issues with their former employers. For guidance on how to file a complaint, see our guide on <Link to="/file-complaint-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">file complaint for gratuity UAE</Link>.
              </p>
            </section>
            
            <section id="legal-action">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Legal Action for Unpaid Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">When to Consider Legal Action</h3>
              <p className="text-gray-700 leading-relaxed">
                You may need to consider legal action if:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Your employer refuses to pay after attempts at mediation through MoHRE.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Process of Filing a Legal Claim</h3>
              <ol className="list-decimal pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Consult a Labor Lawyer</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Seek professional legal advice to understand your options concerning legal proceedings.</li>
                  </ul>
                </li>
                <li>
                  <strong>File a Case in Labor Court</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Prepare all legal documents with the help of your lawyer.</li>
                    <li>Submit all evidence and documentation to support your claim.</li>
                  </ul>
                </li>
              </ol>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Potential Outcomes</h3>
              <p className="text-gray-700 leading-relaxed">
                The court may order:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>The employer to pay the owed gratuity plus any damages incurred.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Considerations</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Be mindful of potential legal fees involved.</li>
                <li>Understand the emotional stress that can accompany legal proceedings.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This step may be necessary for those facing difficulties with <strong>gratuity not paid by employer UAE</strong>.
              </p>
            </section>
            
            <section id="file-complaint">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">How to File a Complaint for Gratuity in the UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Prepare Documentation</h3>
              <p className="text-gray-700 leading-relaxed">
                Collect the following documents before filing a complaint:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Employment contract</li>
                <li>Salary slips</li>
                <li>Communication records with your employer</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Filing the Complaint</h3>
              <ol className="list-decimal pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Contact MoHRE</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Utilize the online portal or visit a Tasheel service center to submit your complaint.</li>
                  </ul>
                </li>
                <li>
                  <strong>Submit the Complaint</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Clearly outline your grievance and attach supporting documents.</li>
                  </ul>
                </li>
              </ol>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Process After Filing</h3>
              <p className="text-gray-700 leading-relaxed">
                Once your complaint is filed:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>MoHRE will schedule mediation sessions to address your issue.</li>
                <li>If unresolved, your case will be referred to the labor court.</li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Timelines</h3>
              <p className="text-gray-700 leading-relaxed">
                The mediation typically happens within a few weeks, bringing light to how to <strong>file complaint for gratuity UAE</strong> effectively.
              </p>
            </section>
            
            <section id="employee-rights">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Employee Rights Under UAE Labor Law</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Protections</h3>
              <p className="text-gray-700 leading-relaxed">
                Employees are entitled to gratuity payments upon termination. It is crucial to understand your employee rights regarding these payments, as employers cannot withhold gratuity without valid legal reasons.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Relevant Laws</h3>
              <p className="text-gray-700 leading-relaxed">
                Familiarizing yourself with key articles from the UAE Labor Law regarding end-of-service benefits is vital for any employee. For a deeper insight, consult our post on <Link to="/gratuity-tax-deductions-dubai" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">gratuity tax deductions Dubai</Link>.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Penalties for Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers may face fines or legal action for non-compliance with gratuity payment laws – an important consideration for anyone involved in resolving such disputes.
              </p>
            </section>
            
            <section id="tips">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Tips to Prevent Gratuity Disputes</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li><strong>Understand Your Contract</strong>: Review the terms related to gratuity and end-of-service benefits clearly.</li>
                <li><strong>Maintain Records</strong>: Keep copies of all employment-related documents to ensure you have proof.</li>
                <li><strong>Open Communication</strong>: Discuss any concerns proactively with your employer.</li>
                <li><strong>Stay Informed</strong>: Keep up-to-date with changes in labor laws and regulations to avoid unexpected issues in the future.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                By following these guidelines, employees can significantly reduce the likelihood of facing any <strong>gratuity dispute resolution Dubai</strong> issues.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                To summarize, understanding <strong>how to claim gratuity in UAE</strong> is essential for employees. If you find yourself in a situation where gratuity is <strong>not paid by the employer in UAE</strong>, follow the outlined steps systematically.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Be proactive in asserting your rights and seek the necessary channels to resolve any disputes. Share your experiences and consider reaching out to MoHRE or legal professionals if you face difficulties claiming your gratuity.
              </p>
            </section>
            
            <section id="additional-resources">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Additional Resources</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Government Agencies</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>Ministry of Human Resources and Emiratisation (MoHRE)</strong>: <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">MoHRE Official Website</a></li>
                    <li><strong>Tasheel Service Centers</strong>: Locations and services offered.</li>
                  </ul>
                </li>
                <li>
                  <strong>Legal References</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>UAE Labor Law</strong>: Access to official labor law documents for reference.</li>
                  </ul>
                </li>
                <li>
                  <strong>Tools</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>Gratuity Calculator</strong>: <a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Qureos Gratuity Calculator</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Informative Articles</strong>:
                  <ul className="list-disc pl-6 mt-2">
                    <li><a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat - How to Calculate Gratuity UAE</a></li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Getting educated about gratuity claims can help you secure your financial rights and navigate the complexities of employment in the UAE confidently.
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
                    <Link to="/limited-vs-unlimited-contracts" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Difference Between Limited and Unlimited Contracts
                    </Link>
                  </li>
                  <li>
                    <Link to="/is-gratuity-taxable-in-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Gratuity Tax and Deductions in UAE
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">1. What is gratuity and who is eligible for it in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity is an end-of-service benefit awarded to employees who have completed at least one year of continuous service in the UAE. Both UAE nationals and expatriate workers are eligible, provided they meet the service duration and other criteria.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">2. How is gratuity calculated?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gratuity is calculated based on the employee's basic salary and the total length of service. For the first five years, it's calculated at 21 days' basic salary per year. For service beyond five years, it's 30 days' basic salary per additional year, with the total gratuity not exceeding two years' basic salary.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">3. What should I do if my employer does not pay my gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  If your employer fails to pay gratuity, you should first approach them formally with a written request. If unresolved, you can file a complaint with MoHRE and follow the dispute resolution process, which may include mediation or legal action.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">4. Can resignation affect my gratuity entitlement?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Generally, resignation does not affect gratuity entitlement as long as the employee has completed at least one year of service. However, specific conditions may apply, so it's advisable to consult the UAE Labor Law or seek legal advice.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">5. What documents are required to claim gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Required documents include your employment contract, final settlement letter, salary slips covering your entire period of employment, and identification documents like your passport and Emirates ID.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">6. Where can I find more information about gratuity and labor laws in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can visit the <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">MoHRE Official Website</a>, consult legal professionals, or refer to official UAE Labor Law documents and informative articles available online.
                </p>
              </div>
            </section>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/who-is-eligible-for-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Who Is Eligible for Gratuity in UAE
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

export default GratuityClaim;
