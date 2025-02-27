
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-base sm:text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 animate-slide-down">
          <div className="text-base text-gray-700 space-y-2">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is eligible for gratuity in UAE?",
      answer: (
        <>
          <p>
            To be eligible for gratuity in UAE, you must:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Have completed at least 1 year of continuous service</li>
            <li>Be working under a valid employment contract</li>
            <li>Not have been dismissed for any of the reasons specified in Article 120 of the Labor Law</li>
          </ul>
          <p className="mt-2">
            <Link to="/gratuity-eligibility" className="text-gratuity-700 hover:text-gratuity-800">
              More details about eligibility →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "How is gratuity calculated for unlimited contracts?",
      answer: (
        <>
          <p>
            For unlimited contracts, the calculation depends on whether you resign or are dismissed:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Voluntary resignation:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>1-3 years: 7 days of salary per year</li>
                <li>3-5 years: 14 days of salary per year</li>
                <li>More than 5 years: 21 days for the first 5 years + 30 days for each additional year</li>
              </ul>
            </li>
            <li className="mt-1"><strong>Dismissal:</strong> 21 days for each year of the first 5 years + 30 days for each additional year</li>
          </ul>
          <p className="mt-2">
            <Link to="/gratuity-calculation-uae" className="text-gratuity-700 hover:text-gratuity-800">
              See detailed calculation example →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Is gratuity subject to tax in UAE?",
      answer: (
        <>
          <p>
            No, gratuity is not subject to tax in the United Arab Emirates, as the country does not have an income tax system for individuals. However, if you are an expatriate and your country of origin taxes global income, you may need to declare this income in your country of fiscal residence.
          </p>
          <p className="mt-2">
            <Link to="/is-gratuity-taxable-uae" className="text-gratuity-700 hover:text-gratuity-800">
              More information about taxes and gratuity →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "What should I do if my employer refuses to pay my gratuity?",
      answer: (
        <>
          <p>
            If your employer refuses to pay your gratuity, you can follow these steps:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>File a formal complaint with the Ministry of Human Resources and Emiratisation (MOHRE)</li>
            <li>If not resolved, the case will be transferred to labor courts</li>
            <li>Consider consulting with a specialized labor lawyer</li>
          </ol>
          <p className="mt-2">
            <Link to="/unpaid-gratuity-uae" className="text-gratuity-700 hover:text-gratuity-800">
              Complete guide on claims →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "What is the difference between limited and unlimited contracts?",
      answer: (
        <>
          <p>
            The main differences are:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Limited contract:</strong> Has a specific end date. Gratuity is paid in full regardless of who terminates the contract.</li>
            <li><strong>Unlimited contract:</strong> Has no end date. Gratuity may be reduced if the employee resigns before completing 5 years.</li>
          </ul>
          <p className="mt-2">
            <Link to="/limited-vs-unlimited-contracts" className="text-gratuity-700 hover:text-gratuity-800">
              Detailed contract comparison →
            </Link>
          </p>
        </>
      )
    }
  ];

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFaq(index)}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to="/gratuity-faqs"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gratuity-600 hover:bg-gratuity-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500 transition-colors"
        >
          See all FAQs
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
