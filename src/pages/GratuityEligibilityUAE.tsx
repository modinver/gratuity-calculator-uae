
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
          <p className="ml-3 text-gray-700"><strong>Gratuity eligibility in UAE</strong> is crucial for both employees and employers to ensure compliance with labor laws.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">Gratuity serves as a significant end-of-service benefit contributing to employees' financial security.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Understanding <strong>gratuity rules for employees</strong> helps in accurate financial planning and fair compensation.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Various factors such as employment duration, contract type, and reasons for termination affect gratuity eligibility.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Both UAE nationals and expatriates are eligible for gratuity benefits under certain conditions.</p>
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
    { id: "section-1", title: "Understanding Gratuity" },
    { id: "section-2", title: "Eligibility Criteria for Gratuity" },
    { id: "section-3", title: "Gratuity Rules for Employees" },
    { id: "section-4", title: "Gratuity for Part-Time Workers in UAE" },
    { id: "section-5", title: "UAE Gratuity for Expats" },
    { id: "section-6", title: "Difficult Scenarios - Can My Employer Deny Gratuity Payment?" },
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
  const title = "Who is Eligible for Gratuity in UAE: A Comprehensive Guide";

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

const GratuityEligibilityUAE = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Who is Eligible for Gratuity in UAE: A Comprehensive Guide to Eligibility Criteria and Calculation Methods</title>
        <meta 
          name="description" 
          content="Discover who is eligible for gratuity in the UAE with this comprehensive guide. Learn about eligibility criteria, calculation methods, and key regulations to ensure compliance with labor laws and fair end-of-service benefits." 
        />
        <meta 
          name="keywords" 
          content="who is eligible for gratuity in UAE, gratuity rules for employees, gratuity for part-time workers in UAE, eligibility criteria for gratuity Dubai, UAE gratuity for expats, can my employer deny gratuity payment?" 
        />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who is Eligible for Gratuity in UAE: A Comprehensive Guide to Eligibility Criteria and Calculation Methods
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
              Understanding <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">who is eligible for gratuity in UAE</a> is essential for employees and employers to ensure compliance with labor laws and fair compensation. Gratuity serves as a crucial end-of-service benefit that significantly contributes to employees' financial security and planning. This comprehensive guide will delve into gratuity eligibility, helping you navigate the rules and regulations effectively.
            </p>
            
            <section id="introduction">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Introduction</h2>
              
              <p className="text-gray-700 leading-relaxed">
                The purpose of this article is to provide a clear understanding of gratuity eligibility in the UAE, focusing on the <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">gratuity rules for employees</a>. Knowing the <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">eligibility criteria for gratuity Dubai</a> is vital for both parties involved in the employment sector to make informed decisions.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Overview of Topics</h3>
              <p className="text-gray-700 leading-relaxed">We will explore the following key areas:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Understanding gratuity.</li>
                <li>Eligibility criteria.</li>
                <li>Gratuity calculation methods.</li>
                <li>Provisions for part-time workers and expatriates.</li>
                <li>Scenarios where gratuity might be denied.</li>
              </ul>
            </section>
            
            <section id="section-1">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 1: Understanding Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Gratuity</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is a form of financial recognition for an employee's service and loyalty to their employer in the UAE. This end-of-service benefit rewards employees for their contributions and serves as a financial cushion when transitioning between jobs or during retirement. Gratuity is significant as it provides a safety net for employees after their tenure ends.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is governed by the UAE Labor Law, specifically Articles 132 to 141. This legal framework outlines the rights of employees regarding gratuity and ensures fair treatment across various employment types. It is essential to understand this framework to ensure compliance and fair practices in the workplace.
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Importance for Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding gratuity is crucial for financial planning. It impacts employees during job transitions and can significantly affect their future well-being. Knowledge about gratuity eligibility can help employees better prepare for their financial future.
              </p>
            </section>
            
            <section id="section-2">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 2: Eligibility Criteria for Gratuity</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">General Eligibility Conditions</h3>
              <p className="text-gray-700 leading-relaxed">
                To determine <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">who is eligible for gratuity in UAE</a>, consider the following conditions:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Completion of One Year of Continuous Service</strong><br />
                  Employees must have worked continuously for at least one year to qualify for gratuity.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
                <li>
                  <strong>Employment Under a Valid Employment Contract</strong><br />
                  Eligibility requires that the employee hold a valid employment contract, which can be either limited or unlimited. Understanding the differences between these contract types is crucial for employees planning their career paths.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
                <li>
                  <strong>Not Dismissed for Reasons Outlined in Article 120</strong><br />
                  If an employee is terminated due to misconduct or other serious offenses stated in Article 120 of the UAE Labor Law, they are disqualified from receiving gratuity.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Applicability to Employee Types</h3>
              <p className="text-gray-700 leading-relaxed">
                Both UAE nationals and expatriates are eligible for gratuity benefits if they meet the outlined conditions. This inclusivity affirms the importance of understanding the <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">eligibility criteria for gratuity Dubai</a> for a diverse workforce.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact of Employment Duration and Contract Type</h3>
              <p className="text-gray-700 leading-relaxed">
                The length of service greatly influences gratuity amounts. For employees under limited contracts, gratuity eligibility is straightforward, but nuances surface in unlimited contracts, especially if the employee resigns before reaching certain years of service.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <Link to="/gratuity-limited-contract-uae" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Limited vs Unlimited Contracts</Link></p>
            </section>
            
            <section id="section-3">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 3: Gratuity Rules for Employees</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Based on Length of Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity calculations depend on the duration of the employee's service:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>1-5 Years of Service</strong>:<br />
                  Employees are entitled to 21 days' basic salary for each year of service.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
                <li>
                  <strong>More than 5 Years of Service</strong>:<br />
                  Employees are entitled to 30 days' basic salary for each additional year beyond five years.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Method</h3>
              <p className="text-gray-700 leading-relaxed">
                Gratuity is based on the employee's last basic salary, excluding allowances and benefits. Only the basic salary counts toward the gratuity calculation, emphasizing clear and precise financial assessment.
              </p>
              <blockquote className="pl-4 border-l-4 border-gratuity-500 italic my-4 text-gray-700">
                "Gratuity considers only the basic salary, excluding benefits like housing and transportation."
              </blockquote>
              <p className="text-gray-700 leading-relaxed text-sm italic">Sources:<br />
                <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a><br />
                <a href="https://www.finanshels.com/blog/how-to-calculate-gratuity-amount-in-the-uae" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FinAnshels</a>
              </p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Impact of Contract Type</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Limited Contracts</strong>:<br />
                  Gratuity calculations are straightforward unless termination occurs under Article 120.
                </li>
                <li>
                  <strong>Unlimited Contracts</strong>:<br />
                  The gratuity may be affected if the employee resigns before fulfilling specific terms.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://actudubai.com/who-is-eligible-for-gratuity-uae/" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Factors Affecting Gratuity Payment</a></p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Examples of Gratuity Calculation</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  For an employee with a basic salary of 5,000 AED who worked for 3 years:<br />
                  Gratuity = 21 days x 5,000 AED / 30 days x 3 years = 10,500 AED.
                </li>
                <li>
                  For an employee with a basic salary of 7,000 AED who worked for 6 years:<br />
                  Gratuity = (21 days x 5,000 AED / 30 days x 5 years) + (30 days x 2,000 AED / 30 days x 1 year) = 14,000 AED + 2,100 AED = 16,100 AED.
                </li>
              </ul>
            </section>
            
            <section id="section-4">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 4: Gratuity for Part-Time Workers in UAE</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility of Part-Time Workers</h3>
              <p className="text-gray-700 leading-relaxed">
                Part-time employees in the UAE are entitled to gratuity benefits. Gratuity for these workers is calculated on a pro-rata basis, ensuring fair compensation relative to their actual hours of work.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://www.finanshels.com/blog/how-to-calculate-gratuity-amount-in-the-uae" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FinAnshels</a></p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Method for Part-Time Workers</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Pro-Rata Basis</strong>:<br />
                  Gratuity is calculated based on the total hours worked compared to full-time hours. The calculation adjusts the gratuity according to actual work time.<br />
                  <span className="text-sm italic">Source: <a href="https://www.finanshels.com/blog/how-to-calculate-gratuity-amount-in-the-uae" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">FinAnshels</a></span>
                </li>
                <li>
                  <strong>Adjusted Basic Salary</strong>:<br />
                  The basic salary is modified according to the part-time arrangement, ensuring calculated fairness in remuneration.
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Legal Provisions</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding labor laws related to part-time employment is essential for employees. This knowledge protects their rights and ensures proper gratuity calculations.
              </p>
            </section>
            
            <section id="section-5">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 5: UAE Gratuity for Expats</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility of Expatriate Employees</h3>
              <p className="text-gray-700 leading-relaxed">
                Expatriates working in the UAE receive gratuity benefits under the same conditions as UAE nationals. They are eligible for gratuity if they meet the outlined criteria.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://hlbhamt.com/uae-gratuity-policy-and-settlement/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">HLB HAMT</a></p>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Considerations for Expatriates</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Visa Status</strong>:<br />
                  The type of visa an employee holds can impact gratuity eligibility. This connection underscores the need to understand employment terms thoroughly.<br />
                  <span className="text-sm italic">Source: <a href="https://hlbhamt.com/uae-gratuity-policy-and-settlement/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">HLB HAMT</a></span>
                </li>
                <li>
                  <strong>Contract Terms</strong>:<br />
                  Understanding the specifics of the employment contract is critical for expatriates, as contract conditions directly influence gratuity determination.<br />
                  <span className="text-sm italic">Source: <a href="https://actudubai.com/who-is-eligible-for-gratuity-uae/" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Gratuity Claims and Disputes</a></span>
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Exceptions</h3>
              <p className="text-gray-700 leading-relaxed">
                It is vital to note that UAE nationals may be exempt from gratuity as they benefit from mandatory National pension plans.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://www.qureos.com/gratuity-calculator" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Qureos</a></p>
            </section>
            
            <section id="section-6">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Section 6: Difficult Scenarios - Can My Employer Deny Gratuity Payment?</h2>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Potential Reasons for Denial</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Dismissal Under Article 120</strong>:<br />
                  If an employee is dismissed for serious misconduct, they lose the right to gratuity.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
                <li>
                  <strong>Resignation Without Notice</strong>:<br />
                  Employees who leave their job without proper notice may see their gratuity affected, especially in unlimited contracts.<br />
                  <span className="text-sm italic">Source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">Bayzat</a></span>
                </li>
                <li>
                  <strong>Failure to Fulfill Contractual Obligations</strong>:<br />
                  Breach of contract terms, whether by the employer or employee, may lead to gratuity denial.
                </li>
              </ul>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Employee Rights and Recourse</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>
                  <strong>Legal Action</strong>:<br />
                  Employees can file complaints with the Ministry of Human Resources and Emiratisation to address grievances. Seeking legal advice can help protect their rights if gratuity is unjustly withheld.
                </li>
                <li>
                  <strong>Documentation</strong>:<br />
                  Maintaining proper records is vital for substantiating claims and supporting employees' rights to gratuity payments.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-sm italic">Source: <a href="https://actudubai.com/who-is-eligible-for-gratuity-uae/" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">How to Claim Gratuity in UAE</a></p>
            </section>
            
            <section id="conclusion">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                In summary, understanding <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">who is eligible for gratuity in UAE</a> ensures that employees receive their rightful end-of-service benefits. Key points covered include eligibility criteria, calculation methods, and specific provisions for part-time workers and expatriates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This knowledge not only supports employees in their career transitions but also emphasizes the importance of awareness of labor laws. Employees are encouraged to consult with HR professionals for personalized guidance and ensure they are well-informed about their rights.
              </p>
            </section>
            
            <section id="call-to-action">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Call to Action</h2>
              <p className="text-gray-700 leading-relaxed">
                We invite readers to share their experiences or questions in the comments below. Have questions about your gratuity? Share them with us! For personalized assistance, seek professional advice to navigate specific situations regarding gratuity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through understanding the <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">gratuity rules for employees</a>, everyone can ensure fair treatment in the workplace.
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
                    <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                      Understanding UAE Gratuity Law
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
            
            <section id="faq">
              <h2 className="mt-8 text-2xl font-semibold text-gratuity-700">Frequently Asked Questions</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">What is the minimum period of service required to be eligible for gratuity in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees must complete at least one year of continuous service with their employer to be eligible for gratuity benefits in the UAE.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Are part-time workers eligible for gratuity in the UAE?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, part-time workers are eligible for gratuity in the UAE. Their gratuity is calculated on a pro-rata basis according to their working hours compared to full-time employment.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Can my employer deny gratuity if I resign from my job?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Generally, if you've completed at least one year of service, you're entitled to gratuity even if you resign. However, the amount may vary based on your contract type and length of service.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">What components of my salary are considered when calculating gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Only your basic salary is considered when calculating gratuity. Allowances such as housing, transportation, and other benefits are excluded from the calculation.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Are UAE nationals eligible for gratuity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE nationals who are enrolled in the pension scheme under Federal Law No. 7 of 1999 are typically exempt from gratuity as they benefit from the national pension plan instead.
                </p>
              </div>
            </section>
          </article>
          
          <SocialShareButtons />
          
          <Separator className="my-12" />
          
          <div className="flex justify-between items-center">
            <Link to="/gratuity-calculation-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
              <ChevronUp className="h-4 w-4 mr-1" />
              Gratuity Calculation Guide
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

export default GratuityEligibilityUAE;
