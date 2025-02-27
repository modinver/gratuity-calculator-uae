
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
        Leer más <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </Link>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Ley de Gratuity en UAE",
      description: "Descubre todo sobre la ley laboral que regula las gratificaciones en Emiratos Árabes Unidos.",
      href: "/gratuity-law-uae"
    },
    {
      icon: <FilePlus size={24} />,
      title: "Contratos Limitados vs Ilimitados",
      description: "Entérate de las diferencias y cómo afectan a tu gratificación final.",
      href: "/limited-vs-unlimited-contracts"
    },
    {
      icon: <UserCheck size={24} />,
      title: "Elegibilidad para Gratuity",
      description: "Conoce los requisitos para ser elegible para recibir gratificación laboral en UAE.",
      href: "/gratuity-eligibility"
    },
    {
      icon: <Calculator size={24} />,
      title: "Cómo Calcular Gratuity",
      description: "Aprende la fórmula exacta y cómo calcular tu gratificación paso a paso.",
      href: "/gratuity-calculation-uae"
    },
    {
      icon: <Landmark size={24} />,
      title: "Factores que Afectan el Gratuity",
      description: "Descubre qué factores pueden aumentar o disminuir tu pago final.",
      href: "/factors-affecting-gratuity"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Gratuity para Empleados Despedidos",
      description: "Conoce tus derechos en caso de despido y cómo se calcula tu gratificación.",
      href: "/gratuity-terminated-employees"
    },
    {
      icon: <FileText size={24} />,
      title: "Cómo Reclamar tu Gratuity",
      description: "Guía paso a paso para reclamar tu gratificación laboral al finalizar tu contrato.",
      href: "/how-to-claim-gratuity"
    },
    {
      icon: <Scale size={24} />,
      title: "Disputas por Gratuity",
      description: "Qué hacer cuando tu empleador no paga la gratificación correctamente.",
      href: "/gratuity-dispute-resolution"
    },
    {
      icon: <DollarSign size={24} />,
      title: "¿Es el Gratuity Sujeto a Impuestos?",
      description: "Información sobre la fiscalidad de las gratificaciones en EAU.",
      href: "/is-gratuity-taxable-uae"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Preguntas Frecuentes",
      description: "Respuestas a las dudas más comunes sobre gratificaciones en UAE.",
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
