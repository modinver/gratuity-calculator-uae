
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calculator, 
  FilePlus, 
  FileText, 
  HelpCircle, 
  Landmark,
  Scale,
  UserCheck,
  Briefcase,
  DollarSign
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, href }) => {
  return (
    <Link 
      to={href}
      className="group relative p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gratuity-200 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gratuity-100 text-gratuity-700 mb-4 group-hover:bg-gratuity-700 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gratuity-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 flex-grow">
        {description}
      </p>
      <div className="mt-4 text-sm font-medium text-gratuity-700 group-hover:text-gratuity-800 flex items-center transition-colors">
        Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </Link>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "UAE Gratuity Law",
      description: "Discover everything about the labor law that regulates gratuities in the United Arab Emirates.",
      href: "/gratuity-law-uae"
    },
    {
      icon: <FilePlus size={24} />,
      title: "Limited vs Unlimited Contracts",
      description: "Learn about the differences and how they affect your final gratuity payment.",
      href: "/limited-vs-unlimited-contracts"
    },
    {
      icon: <UserCheck size={24} />,
      title: "Gratuity Eligibility",
      description: "Know the requirements to be eligible for gratuity payment in the UAE.",
      href: "/gratuity-eligibility"
    },
    {
      icon: <Calculator size={24} />,
      title: "How to Calculate Gratuity",
      description: "Learn the exact formula and how to calculate your gratuity step by step.",
      href: "/gratuity-calculation-uae"
    },
    {
      icon: <Landmark size={24} />,
      title: "Factors Affecting Gratuity",
      description: "Discover what factors can increase or decrease your final payment.",
      href: "/factors-affecting-gratuity"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Gratuity for Terminated Employees",
      description: "Know your rights in case of dismissal and how your gratuity is calculated.",
      href: "/gratuity-terminated-employees"
    },
    {
      icon: <FileText size={24} />,
      title: "How to Claim Your Gratuity",
      description: "Step-by-step guide to claim your labor gratuity at the end of your contract.",
      href: "/how-to-claim-gratuity"
    },
    {
      icon: <Scale size={24} />,
      title: "Gratuity Disputes",
      description: "What to do when your employer doesn't pay the gratuity correctly.",
      href: "/gratuity-dispute-resolution"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Is Gratuity Taxable?",
      description: "Information about taxation of gratuities in the UAE.",
      href: "/is-gratuity-taxable-uae"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about gratuities in the UAE.",
      href: "/gratuity-faqs"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          href={feature.href}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
