
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
      question: "¿Quién es elegible para recibir gratuity en UAE?",
      answer: (
        <>
          <p>
            Para ser elegible para la gratificación en UAE, debes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Haber completado al menos 1 año de servicio continuo</li>
            <li>Estar trabajando bajo un contrato laboral válido</li>
            <li>No haber sido despedido por alguna de las razones especificadas en el Artículo 120 de la Ley Laboral</li>
          </ul>
          <p className="mt-2">
            <Link to="/gratuity-eligibility" className="text-gratuity-700 hover:text-gratuity-800">
              Más detalles sobre elegibilidad →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "¿Cómo se calcula el gratuity para contratos ilimitados?",
      answer: (
        <>
          <p>
            Para contratos ilimitados, el cálculo depende de si renuncias o eres despedido:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Renuncia voluntaria:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>1-3 años: 7 días de salario por año</li>
                <li>3-5 años: 14 días de salario por año</li>
                <li>Más de 5 años: 21 días por los primeros 5 años + 30 días por cada año adicional</li>
              </ul>
            </li>
            <li className="mt-1"><strong>Despido:</strong> 21 días por cada año de los primeros 5 años + 30 días por cada año adicional</li>
          </ul>
          <p className="mt-2">
            <Link to="/gratuity-calculation-uae" className="text-gratuity-700 hover:text-gratuity-800">
              Ver ejemplo de cálculo detallado →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "¿Es el gratuity sujeto a impuestos en UAE?",
      answer: (
        <>
          <p>
            No, el gratuity no está sujeto a impuestos en Emiratos Árabes Unidos, ya que el país no tiene un sistema de impuesto sobre la renta para personas físicas. Sin embargo, si eres expatriado y tu país de origen grava los ingresos globales, es posible que debas declarar este ingreso en tu país de residencia fiscal.
          </p>
          <p className="mt-2">
            <Link to="/is-gratuity-taxable-uae" className="text-gratuity-700 hover:text-gratuity-800">
              Más información sobre impuestos y gratuity →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "¿Qué debo hacer si mi empleador se niega a pagar mi gratuity?",
      answer: (
        <>
          <p>
            Si tu empleador se niega a pagar tu gratuity, puedes seguir estos pasos:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Presenta una reclamación formal ante el Ministerio de Recursos Humanos y Emiratización (MOHRE)</li>
            <li>Si no se resuelve, el caso se transferirá a los tribunales laborales</li>
            <li>Considera consultar con un abogado especializado en derecho laboral</li>
          </ol>
          <p className="mt-2">
            <Link to="/unpaid-gratuity-uae" className="text-gratuity-700 hover:text-gratuity-800">
              Guía completa sobre reclamaciones →
            </Link>
          </p>
        </>
      )
    },
    {
      question: "¿Cuál es la diferencia entre contratos limitados e ilimitados?",
      answer: (
        <>
          <p>
            Las principales diferencias son:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Contrato limitado:</strong> Tiene una fecha de finalización específica. La gratificación se paga completamente independientemente de quién termine el contrato.</li>
            <li><strong>Contrato ilimitado:</strong> No tiene fecha de finalización. La gratificación puede reducirse si el empleado renuncia antes de completar 5 años.</li>
          </ul>
          <p className="mt-2">
            <Link to="/limited-vs-unlimited-contracts" className="text-gratuity-700 hover:text-gratuity-800">
              Comparación detallada de contratos →
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
          Ver todas las preguntas frecuentes
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
