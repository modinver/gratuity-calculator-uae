
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
          <p className="ml-3 text-gray-700">Gratuity calculation in the UAE is essential for financial planning.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
          <p className="ml-3 text-gray-700">Understanding the eligibility criteria ensures fair compensation.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
          <p className="ml-3 text-gray-700">Different employment contracts affect gratuity computation.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
          <p className="ml-3 text-gray-700">Using an online gratuity calculator simplifies the process.</p>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gratuity-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">5</div>
          <p className="ml-3 text-gray-700">Being aware of legal updates helps in accurate gratuity calculations.</p>
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
    { id: "factors-affecting", title: "Factors Affecting Gratuity Calculation" },
    { id: "calculation-basics", title: "Gratuity Calculation Basics" },
    { id: "gratuity-calculator", title: "Using a Gratuity Calculator UAE" },
    { id: "scenarios", title: "Different Scenarios for Gratuity Calculation" },
    { id: "example-calculation", title: "Example Calculation" },
    { id: "retirement-calculation", title: "Retirement Gratuity Calculation" },
    { id: "online-calculation", title: "Online Gratuity Amount Calculation" },
    { id: "faq", title: "Common FAQs about Gratuity Calculation in the UAE" },
    { id: "considerations", title: "Important Considerations and Legal Updates" },
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

const GratuityCalculationGuide = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Gratuity Calculation UAE - A Comprehensive Guide on How to Calculate Gratuity in UAE
        </h1>
        <div className="flex items-center text-gray-500 mb-6">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">Estimated reading time: 10 minutes</span>
        </div>
        
        <KeyTakeaways />
        <TableOfContents />
        
        <article className="prose prose-blue max-w-none">
          <section id="introduction">
            <p>
              Gratuity calculation in the UAE, commonly referred to as end-of-service benefits, is a crucial financial entitlement for employees working in the region. Whether you're considering a job change, nearing retirement, or simply want to understand your rights, knowing how to calculate gratuity in the UAE is essential. The UAE Labor Law mandates gratuity payments to eligible workers, ensuring that employees receive fair compensation for their service to employers.
            </p>
            <p>
              Understanding gratuity calculation is not only important for employees but also for employers who need to comply with legal obligations. Both parties benefit from knowing accurate gratuity computation, making financial planning easier and fostering a fair workplace.
            </p>
            <p>
              In this comprehensive guide, we will cover the fundamentals of gratuity, delve into the factors affecting calculation, illustrate how to use gratuity calculators, present various scenarios, and address common FAQs. Additionally, you'll find details about gratuity amount calculation online.
            </p>
          </section>
          
          <section id="understanding-gratuity">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Understanding Gratuity in the UAE</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition of Gratuity</h3>
            <p>
              Gratuity is a mandatory payment made by employers to employees who have completed at least one year of continuous service. According to the UAE Labor Law, this payment is designed to act as a financial cushion for employees upon the termination of their service. Understanding gratuity calculation is crucial for employees planning their finances effectively.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Purpose of Gratuity</h3>
            <p>
              The primary purpose of gratuity is to provide financial security to employees at the end of their employment. This benefit helps to ease transitions, whether it be a move to a new job or retirement. It represents a significant portion of an employee's severance and needs to be calculated accurately to ensure employees receive their rightful dues.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Eligibility Criteria</h3>
            <p>
              In the UAE, all expatriate workers are entitled to gratuity payments under the Labor Law. However, UAE nationals are not eligible for gratuity as they are covered by mandatory national pension plans. Understanding who qualifies for gratuity facilitates better financial planning for both employees and employers.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Types of Employment Contracts</h3>
            <p>
              Gratuity calculation can vary significantly based on the type of employment contract an employee has. Two main types are:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Limited Contracts:</strong> Employees on these contracts may face penalties if they leave before the term ends but are eligible for gratuity based on their years of service.
              </li>
              <li>
                <strong>Unlimited Contracts:</strong> Gratuity calculations for unlimited contracts generally follow standard labor law provisions without penalties for early termination.
              </li>
            </ul>
            <p>
              Understanding these distinctions is crucial for accurate gratuity calculation.
            </p>
          </section>
          
          <section id="factors-affecting">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Factors Affecting Gratuity Calculation</h2>
            <p>
              Gratuity calculation UAE is influenced by several key factors:
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Basic Salary</h3>
            <p>
              Gratuity calculations are based on the employee's last drawn basic salary, excluding allowances, bonuses, and overtime. This basic salary is the starting point for determining the gratuity amount.
            </p>
            <p>
              Research point: "Gratuity is calculated based on the employee's last drawn basic salary, excluding allowances or bonuses."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Length of Service</h3>
            <p>
              The duration of employment plays a direct role in determining the gratuity amount. The longer an employee has served, the more substantial their gratuity payout will be.
            </p>
            <p>
              Research point: "The duration of employment directly impacts the gratuity amount."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Reason for Termination</h3>
            <p>
              The reason for termination—whether it's resignation, results of an employee's choice, or termination by the employer—can significantly impact the gratuity entitlement. Resignations often result in reduced gratuity amounts, while terminations for misconduct may lead to forfeiture of gratuity benefits.
            </p>
            <p>
              Research point: "Whether an employee resigns or is terminated can affect gratuity entitlement."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Type of Contract</h3>
            <p>
              As mentioned earlier, the type of employment contract will also influence how gratuity is calculated, with different rules applying to limited and unlimited contracts.
            </p>
          </section>
          
          <section id="calculation-basics">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Gratuity Calculation Basics</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">General Formula for Gratuity Calculation</h3>
            <p>
              Gratuity in the UAE is calculated using these formulas:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>For service up to 5 years:</strong> 21 days' basic salary for each year of service.
              </li>
              <li>
                <strong>For service exceeding 5 years:</strong> 30 days' basic salary for each additional year beyond five years.
              </li>
            </ul>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Calculation Steps</h3>
            <p>
              Follow these steps for gratuity computation:
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Calculate the daily wage by dividing the basic salary by 30.</li>
              <li>Determine the number of gratuity days based on years of service (21 or 30 days).</li>
              <li>Multiply the daily wage by the number of gratuity days to get annual gratuity.</li>
              <li>Multiply annual gratuity by total years of service.</li>
            </ol>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Maximum Gratuity Limit</h3>
            <p>
              Note that the total gratuity cannot exceed two years' worth of the employee's basic salary. Understanding this cap helps employees manage their expectations regarding gratuity payouts.
            </p>
            <p>
              Research point: "The total gratuity cannot exceed two years' worth of the employee's basic salary."
            </p>
          </section>
          
          <section id="gratuity-calculator">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Using a Gratuity Calculator UAE</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Definition and Purpose</h3>
            <p>
              A gratuity calculator is an online tool that simplifies the gratuity calculation process. It allows users to get quick and accurate estimations of their gratuity amounts, taking the guesswork out of the equation.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Required Information</h3>
            <p>
              To use a gratuity calculator effectively, you'll typically need to input:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Joining date</li>
              <li>End-of-service date</li>
              <li>Last drawn monthly salary (including allowances)</li>
              <li>Last drawn basic salary</li>
            </ul>
            <p>
              Research point: "These calculators typically require the following information: joining date, end-of-service date, last drawn monthly salary (including allowances), last drawn basic salary."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Benefits of Using Online Calculators</h3>
            <p>
              There are numerous benefits of using online gratuity calculators:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Convenience:</strong> Easily accessible from anywhere.</li>
              <li><strong>Time-saving:</strong> Get results in seconds.</li>
              <li><strong>Accuracy:</strong> Reduces the chance of manual calculation errors.</li>
            </ul>
            <p>
              These tools empower employees to plan their finances better by knowing what to expect from their gratuity payouts.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">How to Find and Use a Gratuity Calculator</h3>
            <p>
              You can easily find reputable gratuity calculators online by doing a simple search. Be sure to verify the credibility of the website or tool you choose to ensure accuracy. Here's a basic step-by-step guide to inputting information:
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Go to a credible gratuity calculator website.</li>
              <li>Enter your joining date and end-of-service date.</li>
              <li>Fill in your last drawn monthly salary and last basic salary.</li>
              <li>Click on "Calculate" to see your estimated gratuity amount.</li>
            </ol>
          </section>
          
          <section id="scenarios">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Different Scenarios for Gratuity Calculation</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Scenario 1: Less than 1 Year of Service</h3>
            <p>
              Employees who leave before completing one full year of service are not entitled to any gratuity pay.
            </p>
            <p>
              Research point: "Employees who leave work before completing one full year of service are not entitled to any gratuity pay."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Scenario 2: 1-3 Years of Service</h3>
            <p>
              For employees with 1–3 years of service, they are entitled to receive 1/3 of the 21 days' gratuity pay for each year of work.
            </p>
            <p>
              Research point: "For employees with 1–3 years of service, the gratuity is calculated as 1/3 of the 21 days' gratuity pay for each year of work."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Scenario 3: 3-5 Years of Service</h3>
            <p>
              Employees who have worked for 3–5 years are entitled to receive 2/3 of the 21 days' gratuity pay for each year of work.
            </p>
            <p>
              Research point: "Employees who have worked for 3–5 years are entitled to 2/3 of the 21 days' gratuity pay for each year of work."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Scenario 4: Over 5 Years of Service</h3>
            <p>
              For employees with more than 5 years of service, they receive full 30 days' gratuity pay for each year beyond the five-year mark.
            </p>
            <p>
              Research point: "For employees with more than 5 years of service: full 30 days' gratuity pay for each year beyond the five-year mark."
            </p>
          </section>
          
          <section id="example-calculation">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Example Calculation</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Example for 4 Years of Service</h3>
            <p>
              <strong>Employee Details:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Basic salary: AED 10,000</li>
              <li>Length of service: 4 years</li>
            </ul>
            <p>
              <strong>Calculation Steps:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Calculate daily wage: AED 10,000 / 30 = AED 333.33</li>
              <li>Calculate 21-day gratuity pay: AED 333.33 × 21 = AED 7,000</li>
              <li>Multiply by years of service: AED 7,000 × 4 = AED 28,000</li>
            </ol>
            <p>
              <strong>Total Gratuity Amount:</strong> AED 28,000.
            </p>
            <p>
              Research point: "The total gratuity amount would be AED 28,000."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Example for 6 Years of Service</h3>
            <p>
              <strong>Employee Details:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Basic salary: AED 12,000</li>
              <li>Length of service: 6 years</li>
            </ul>
            <p>
              <strong>Calculation Steps:</strong>
            </p>
            <p>
              <strong>First 5 Years:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Calculate daily wage: AED 12,000 / 30 = AED 400</li>
              <li>Gratuity per year for 21 days: AED 400 × 21 = AED 8,400</li>
              <li>Total for first 5 years: AED 8,400 × 5 = AED 42,000</li>
            </ol>
            <p>
              <strong>6th Year:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Gratuity per year: 30 days' salary = AED 400 × 30 = AED 12,000</li>
            </ol>
            <p>
              <strong>Total Gratuity Amount:</strong> AED 42,000 + AED 12,000 = AED 54,000.
            </p>
          </section>
          
          <section id="retirement-calculation">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Retirement Gratuity Calculation</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Gratuity for Retiring Employees</h3>
            <p>
              Employees who are retiring calculate their gratuity in a similar manner as other employees, but they should confirm any additional provisions specified in their contracts. It is essential to check for any special retirement benefits that may be applicable.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Using a Retirement Gratuity Calculator</h3>
            <p>
              If available, consider using specialized retirement gratuity calculators that factor in retirement-specific conditions. These tools can provide a clearer picture of what to expect upon retirement.
            </p>
          </section>
          
          <section id="online-calculation">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Online Gratuity Amount Calculation</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Advantages of Online Calculators</h3>
            <p>
              Online gratuity calculators offer ease and speed for individuals looking to assess their gratuity amounts. They minimize the potential for errors when conducting manual calculations, allowing users to focus on other important financial planning aspects.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Ensuring Accurate Inputs</h3>
            <p>
              When using online calculators, it's crucial to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Double-check all input data (basic salary, employment dates).</li>
              <li>Understand the terms and assumptions used by the calculators, as these can vary between platforms.</li>
            </ul>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Recommendations</h3>
            <p>
              Always recommend using calculators from reputable sources, such as government websites or trusted HR platforms. Being informed about how to calculate gratuity in UAE can make a significant difference for employees facing job transitions.
            </p>
          </section>
          
          <section id="faq">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Common FAQs about Gratuity Calculation in the UAE</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Am I Entitled to Gratuity if I Resign Before One Year?</h3>
            <p>
              No, employees who leave before completing one full year of service are not entitled to gratuity.
            </p>
            <p>
              Research point: "Employees who leave work before completing one full year of service are not entitled to any gratuity pay."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Does Gratuity Include Allowances and Bonuses?</h3>
            <p>
              No, gratuity is calculated only on the basic salary, excluding allowances and bonuses.
            </p>
            <p>
              Research point: "Gratuity is calculated based on the employee's last drawn basic salary, excluding allowances or bonuses."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">What Is the Maximum Gratuity Payable?</h3>
            <p>
              The maximum gratuity is capped at two years' worth of the employee's basic salary.
            </p>
            <p>
              Research point: "The total gratuity cannot exceed two years' worth of the employee's basic salary."
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">How Does Termination for Misconduct Affect Gratuity?</h3>
            <p>
              Employees terminated for misconduct may forfeit their gratuity rights as per UAE Labor Law.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">When Should the Gratuity Be Paid?</h3>
            <p>
              Employers must settle gratuity payments within 14 days of the employee's last working day.
            </p>
            <p>
              Research point: "Employers must settle gratuity within 14 days of an employee's departure."
            </p>
          </section>
          
          <section id="considerations">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Important Considerations and Legal Updates</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Stay Informed on Labor Law Changes</h3>
            <p>
              It's vital for both employees and employers to stay informed about any updates to the UAE Labor Law that may affect gratuity calculations. Always consult HR professionals or legal experts for personalized advice related to employment.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Consultation for Complex Cases</h3>
            <p>
              Employees with unique circumstances should seek professional guidance to ensure they navigate the gratuity calculation process correctly.
            </p>
          </section>
          
          <section id="conclusion">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Conclusion</h2>
            <p>
              In summary, understanding gratuity calculation in the UAE is essential for both employees and employers to ensure fair compensation. Knowing how to calculate gratuity empowers employees in their financial planning and prepares them for transitions between jobs or into retirement.
            </p>
            <p>
              We encourage you to utilize online gratuity calculators for accurate estimations, as this can save time and prevent errors in calculations.
            </p>
          </section>
          
          <section id="call-to-action">
            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Call to Action</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Share the Blog Post</h3>
            <p>
              If you found this guide helpful, please share it with colleagues or friends who might benefit from understanding gratuity calculations in the UAE.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Subscribe for Updates</h3>
            <p>
              For more insights on employment and finance in the UAE, consider subscribing to our blog or newsletter for future updates.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Feedback and Interaction</h3>
            <p>
              We would love to hear your experiences or any questions you might have about gratuity in the UAE in the comments section below.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources</h3>
              <p className="mb-4">Explore more content related to gratuity in the UAE:</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/gratuity-law-uae-guide" className="text-gratuity-600 hover:text-gratuity-800 hover:underline">
                    Gratuity Laws and Regulations in the UAE
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
        
        <Separator className="my-12" />
        
        <div className="flex justify-between items-center">
          <Link to="/" className="text-gratuity-600 hover:text-gratuity-800 flex items-center">
            <ChevronUp className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GratuityCalculationGuide;
