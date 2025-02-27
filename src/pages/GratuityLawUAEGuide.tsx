
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, FileText, Bookmark, Clock } from 'lucide-react';

const GratuityLawUAEGuide = () => {
  const { t } = useLanguage();

  // Scroll to section helper function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Understanding Gratuity Law in the UAE: A Comprehensive Guide | ActuDbai</title>
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
      
      <main className="bg-gray-50 pb-16">
        {/* Hero section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock size={16} className="mr-1" />
                <span>Estimated reading time: 15 minutes</span>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Understanding Gratuity Law in the UAE: A Comprehensive Guide
              </h1>
              
              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Key Takeaways</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Gratuity law in the UAE</strong> ensures financial compensation for employees after completing one year of service.</li>
                  <li>The <strong>Federal Decree Law No. 33 of 2021</strong> standardizes end-of-service benefits across the UAE.</li>
                  <li>Gratuity calculations are based on the <em>basic salary</em> and length of service.</li>
                  <li>Both <strong>employees and employers</strong> have specific rights and obligations under the gratuity law.</li>
                  <li>Understanding gratuity law is crucial for maintaining fair labor practices in the UAE.</li>
                </ul>
              </div>
              
              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-3">Table of Contents</h2>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-1')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Overview of Gratuity in the UAE
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-2')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Legal Framework Governing Gratuity Payments
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-3')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Calculating Gratuity as per UAE Labor Law
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-4')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Gratuity Entitlement Based on Contract Duration
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-5')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Conditions and Exceptions in Gratuity Payments
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('section-6')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Key Takeaways for Employees and Employers
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('faq')}
                      className="text-gratuity-600 hover:text-gratuity-800 hover:underline flex items-center"
                    >
                      <Bookmark size={16} className="mr-2" />
                      Frequently Asked Questions
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Introduction */}
              <div className="prose max-w-none mb-8">
                <p>
                  Gratuity law in the UAE refers to the legal regulations governing end-of-service benefits that employers must pay to employees who have completed at least one year of continuous service. This law is an essential aspect of the UAE's labor regulations, providing financial compensation to employees when their employment ends. Understanding the gratuity payment rules in Dubai is crucial for both employees and employers, as it impacts their rights and obligations within the workplace.
                </p>
                <p>
                  Gratuity serves as a critical part of employee rights, offering financial security during transitions between jobs. This benefit is vital for both expatriates and local workers, reinforcing the UAE's commitment to fair labor practices.
                </p>
              </div>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 1: Overview of Gratuity in the UAE</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>What is Gratuity?</h3>
                  <p>
                    Gratuity is an end-of-service benefit that employers must provide to employees who complete a minimum of one year of continuous service. The amount is calculated based on the employee's basic salary and time spent at the company. As stated in the <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">gratuity law UAE</a>, it is a mandatory payment designed to provide employees with support once their employment ends.
                  </p>
                  
                  <h3>Purpose of Gratuity</h3>
                  <p>The primary purposes of gratuity payments are:</p>
                  <ul>
                    <li>Providing financial support to employees after the end of their employment.</li>
                    <li>Rewarding loyalty and long-term service to the company.</li>
                  </ul>
                  
                  <h3>Legal Basis of Gratuity in the UAE</h3>
                  <p>
                    Gratuity is governed by <strong>Federal Decree Law No. 33 of 2021</strong>, which came into effect in February 2022. This law replaced the earlier <strong>Federal Law No. 8/1980</strong>. The new law emphasizes fair treatment of employees and ensures proper compensation for their service. You can learn more about this law through the following source: <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">How the New Gratuity Law in the UAE 2022 Affects Employees</a>.
                  </p>
                  
                  <h3>Applicability</h3>
                  <p>
                    The gratuity law UAE applies to all employees in the UAE who have completed one year or more of continuous service. This includes both expatriates and UAE nationals, thus extending fair labor practices to a diverse workforce. Additionally, you can read more about who is eligible for gratuity by exploring this article: <Link to="/gratuity-eligibility" className="text-gratuity-600 hover:text-gratuity-800">Who is Eligible for Gratuity in UAE</Link>.
                  </p>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 2: Legal Framework Governing Gratuity Payments</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>Federal Decree Law No. 33 of 2021</h3>
                  <h4>Key Provisions:</h4>
                  <p>
                    The <strong>Federal Decree Law No. 33 of 2021</strong> standardizes end-of-service benefits throughout the UAE by implementing the following provisions:
                  </p>
                  <ul>
                    <li>Ensures timely payment of gratuity within two weeks of termination.</li>
                    <li>Emphasizes clarity in calculating owed gratuity.</li>
                  </ul>
                  <p>
                    For a more in-depth understanding, refer to <a href="https://www.alphapartners.co/blog/navigating-end-of-service-benefits-in-the-uae-a-comprehensive-guide" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">Navigating End-of-Service Benefits in the UAE: A Comprehensive Guide</a>.
                  </p>
                  
                  <h3>Employer Obligations</h3>
                  <p>Employers are legally obligated to:</p>
                  <ul>
                    <li>Accurately calculate gratuity benefits and ensure timely payments.</li>
                    <li>Failure to comply can lead to legal penalties.</li>
                  </ul>
                  
                  <h3>Comparison with Payment of Gratuity Act 1972</h3>
                  <p>
                    It is important to note that the <strong>Payment of Gratuity Act 1972</strong> is specific to India and does not affect the UAE. However, examining different gratuity calculations across countries can enhance understanding. Knowledge of regulations from other regions fosters a broader perspective on gratuity matters. Learn more about this aspect in relation to the UAE by referring to the keyword: <em>gratuity under payment of gratuity act 1972</em> and check our article on <Link to="/gratuity-for-limited-contracts" className="text-gratuity-600 hover:text-gratuity-800">Gratuity for Limited Contracts in UAE</Link>.
                  </p>
                  
                  <h3>International Perspectives</h3>
                  <p>
                    The UAE gratuity laws differ significantly from other countries. Notably, the UAE's system grants end-of-service benefits without imposing hefty restrictions, showcasing a unique legal framework aimed at ensuring employee security.
                  </p>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 3: Calculating Gratuity as per UAE Labor Law</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>Gratuity Calculation Formula</h3>
                  <p>Calculating gratuity in the UAE is straightforward:</p>
                  <ul>
                    <li>
                      <strong>For service between 1–5 years</strong>:
                      <ul>
                        <li>Gratuity = 21 days of basic salary for each year of service.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>For service exceeding 5 years</strong>:
                      <ul>
                        <li>Gratuity = (21 days' basic salary × 5 years) + (30 days' basic salary × (years of service - 5)).</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>Maximum Limit</h3>
                  <p>
                    The total gratuity amount cannot exceed two years' basic salary for employees serving more than five years. For further details, check this link: <a href="https://msofficegeek.com/uae-gratuity-calculator/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">UAE Gratuity Calculator</a>.
                  </p>
                  
                  <h4>Components of Gratuity Calculation</h4>
                  <p>The calculation revolves around the basic salary alone. Essential considerations include:</p>
                  <ul>
                    <li>
                      <strong>Basic Salary</strong>:
                      <ul>
                        <li>Gratuity is computed based on the last basic salary only, excluding any benefits like transportation or housing allowances.</li>
                        <li>Refer to this useful source for more information: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-ua/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">How to Calculate Gratuity UAE</a>.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Length of Service</strong>:
                      <ul>
                        <li>Includes all continuous years worked for the employer. Note that any partial years are calculated on a pro-rata basis.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>Detailed Calculation Examples</h3>
                  <p>To clarify the calculation process, here are two examples:</p>
                  <ul>
                    <li>
                      <strong>Example 1</strong>: An employee with a basic salary of AED 10,000 and 3 years of service.
                      <ul>
                        <li>Daily wage = AED 10,000 / 30 = AED 333.33.</li>
                        <li>Gratuity = 21 days × AED 333.33 × 3 = AED 21,000.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Example 2</strong>: An employee with a basic salary of AED 12,000 and 7 years of service.
                      <ul>
                        <li>First five years: 21 days × AED 400 × 5 = AED 42,000.</li>
                        <li>Remaining two years: 30 days × AED 400 × 2 = AED 24,000.</li>
                        <li>Total Gratuity = AED 42,000 + AED 24,000 = AED 66,000.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>Factors Influencing Gratuity Amount</h3>
                  <p>Several factors may influence the total gratuity amount, including:</p>
                  <ul>
                    <li>Unpaid leave can be excluded from total service length.</li>
                    <li>Any previous advances on gratuity payments should be adjusted accordingly. For a broader understanding, check this link: <Link to="/does-resignation-affect-gratuity-uae" className="text-gratuity-600 hover:text-gratuity-800">Does Resignation Affect Gratuity UAE</Link>.</li>
                  </ul>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 4: Gratuity Entitlement Based on Contract Duration</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>Employment Contract Types in the UAE</h3>
                  <h4>Limited (Fixed-Term) Contracts:</h4>
                  <ul>
                    <li>Limited contracts have specified start and end dates.</li>
                    <li>Under the new law, all contracts are now limited, simplifying employment processes. For more insights, visit: <a href="https://muhami.ae/articles/how-the-new-gratuity-law-in-the-uae-2022-affects-e/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">How the New Gratuity Law in the UAE 2022 Affects Employees</a>.</li>
                  </ul>
                  
                  <h3>Gratuity for Limited Contracts</h3>
                  <h4>Entitlement:</h4>
                  <p>
                    Employees on limited contracts are entitled to full gratuity pay after completing a year of service, regardless of their reason for leaving, be it resignation or termination.
                  </p>
                  
                  <h3>Impact of Resignation or Termination</h3>
                  <h4>Resignation:</h4>
                  <p>
                    Employees still receive full gratuity rights after a year, with no penalties for resigning.
                  </p>
                  
                  <h4>Termination:</h4>
                  <p>
                    Employers are required to pay gratuity within two weeks following termination. For additional details, refer to: <a href="https://factohr.com/gratuity-law-in-uae/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">FactoHR - Gratuity Law in UAE</a>.
                  </p>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 5: Conditions and Exceptions in Gratuity Payments</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>Eligibility Criteria</h3>
                  <h4>Minimum Service Period:</h4>
                  <p>
                    Employees must complete at least one year of continuous service to qualify for gratuity benefits, as described in this source: <a href="https://www.alphapartners.co/blog/navigating-end-of-service-benefits-in-the-uae-a-comprehensive-guide" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">Navigating End-of-Service Benefits in the UAE</a>.
                  </p>
                  
                  <h3>Components Excluded from Gratuity</h3>
                  <h4>Excluded Allowances:</h4>
                  <p>
                    Gratuity calculations are strictly based on the employee's basic salary. The following allowances are excluded:
                  </p>
                  <ul>
                    <li>Housing allowance</li>
                    <li>Transportation allowance</li>
                    <li>Overtime pay</li>
                    <li>Other perks</li>
                  </ul>
                  <p>
                    For further insight, check this source: <a href="https://www.bayzat.com/blog/how-to-calculate-gratuity-ua/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">How to Calculate Gratuity UAE</a>.
                  </p>
                  
                  <h3>Exceptions and Special Cases</h3>
                  <ul>
                    <li>
                      <strong>Termination for Gross Misconduct</strong>:
                      <ul>
                        <li>When an employee is terminated for gross misconduct, they may lose their gratuity rights. Specific grounds for this forfeiture are outlined under Article 44 of the UAE Labor Law.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Maximum Gratuity Payment Limit</strong>:
                      <ul>
                        <li>The gratuity payment is capped at a maximum of two years' salary, ensuring fair compensation without imposing undue burdens on employers. Check here for more information: <a href="https://msofficegeek.com/uae-gratuity-calculator/" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">UAE Gratuity Calculator</a>.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>Payment Timelines</h3>
                  <p>
                    Employers must pay gratuity amounts within 14 days of the end of the employment contract.
                  </p>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 6: Key Takeaways for Employees and Employers</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>For Employees</h3>
                  <h4>Understanding Your Rights:</h4>
                  <ul>
                    <li>Every employee is eligible for gratuity after completing one year of service.</li>
                    <li>Remember that gratuity is based on the last basic salary, excluding allowances.</li>
                    <li>Resignation does not affect entitlement under the new law.</li>
                  </ul>
                  
                  <h3>Action Points:</h3>
                  <ul>
                    <li>Maintain records of employment duration and salary details.</li>
                    <li>Consult HR for clarity around gratuity calculations.</li>
                  </ul>
                  
                  <h3>For Employers</h3>
                  <h4>Compliance Obligations:</h4>
                  <ul>
                    <li>Ensure accurate calculations and timely gratuity disbursements.</li>
                    <li>Familiarize yourself with the latest labor laws to maintain compliance.</li>
                  </ul>
                  
                  <h3>Best Practices:</h3>
                  <ul>
                    <li>Maintain transparent communication with employees regarding end-of-service benefits.</li>
                    <li>Keep detailed records to streamline gratuity processing for departing employees.</li>
                  </ul>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">What is the minimum service period required to qualify for gratuity in the UAE?</h3>
                    <p className="text-gray-700">
                      Employees must complete at least one year of continuous service to qualify for gratuity benefits.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">How is gratuity calculated for employees with more than five years of service?</h3>
                    <p className="text-gray-700">
                      For service exceeding five years, gratuity is calculated as (21 days' basic salary × 5 years) plus (30 days' basic salary × the number of years beyond five).
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">Are housing and transportation allowances included in the gratuity calculation?</h3>
                    <p className="text-gray-700">
                      No, gratuity calculations are based solely on the employee's basic salary. Housing, transportation, and other allowances are excluded.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">What happens to gratuity if an employee resigns?</h3>
                    <p className="text-gray-700">
                      Employees who resign after completing one year of service are still entitled to full gratuity rights without any penalties.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">What are the consequences for employers who fail to pay gratuity on time?</h3>
                    <p className="text-gray-700">
                      Employers who fail to comply with gratuity payment timelines may face legal penalties and fines as per the UAE labor laws.
                    </p>
                  </div>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Conclusion */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
                
                <div className="prose max-w-none mb-6">
                  <p>
                    Understanding the <strong>gratuity law UAE</strong> is essential for both employees and employers. It helps safeguard rights and ensure compliance with labor regulations. Gratuity serves as an important form of compensation that reflects the value of employee services.
                  </p>
                  
                  <h3>Encouragement to Stay Informed</h3>
                  <p>
                    Staying updated with legal changes is crucial for making informed employment decisions. This awareness promotes a fair and productive work environment.
                  </p>
                </div>
              </section>
              
              <hr className="my-8 border-gray-200" />
              
              {/* Call to Action */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Call to Action</h2>
                
                <div className="prose max-w-none mb-6">
                  <h3>Engage with Readers</h3>
                  <p>
                    We invite you to share your experiences or ask questions about gratuity laws in the UAE. How has the new labor law impacted your understanding of gratuity?
                  </p>
                  
                  <h3>Resources and Assistance</h3>
                  <p>
                    For more information, consider visiting legal firms or government portals. For instance, check the UAE Government page on <a href="https://u.ae/en/information-and-services/jobs/end-of-service-benefits" target="_blank" rel="noopener noreferrer" className="text-gratuity-600 hover:text-gratuity-800">End of Service Benefits</a>.
                  </p>
                  <p>
                    You might also want to reach out to HR professionals or legal advisors for personalized guidance regarding gratuity matters. This support can help you navigate the intricacies of the law effectively.
                  </p>
                  <p>
                    Understanding and applying the gratuity law in the UAE can lead to a more harmonious work relationship, ensuring financial security for employees while maintaining compliance for employers.
                  </p>
                </div>
              </section>
              
              {/* Article end */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                <div>
                  <Link to="/gratuity-calculation-uae-guide" className="inline-flex items-center text-sm text-gratuity-600 hover:text-gratuity-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Guía de Cálculo de Gratuity
                  </Link>
                </div>
                <div>
                  <Link to="/limited-vs-unlimited-contracts" className="inline-flex items-center text-sm text-gratuity-600 hover:text-gratuity-800">
                    Contratos Limitados vs Ilimitados
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GratuityLawUAEGuide;
