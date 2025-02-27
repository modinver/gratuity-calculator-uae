
import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role }) => {
  return (
    <div className="flex flex-col h-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex-1">
        <svg className="h-8 w-8 text-gratuity-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed">
          {content}
        </p>
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <div className="ml-0">
            <p className="text-base font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Esta calculadora me ayudó a entender exactamente cuánto gratuity me correspondía. Cuando mi empleador me ofreció menos, pude negociar con confianza mostrando los cálculos correctos.",
      author: "Alejandro R.",
      role: "Ingeniero, 6 años en Dubai"
    },
    {
      content: "Después de usar esta herramienta, descubrí que mi gratuity debía ser casi un 30% mayor de lo que mi empresa había calculado inicialmente. ¡Ha sido un gran ahorro!",
      author: "María L.",
      role: "Contadora, 4 años en Abu Dhabi"
    },
    {
      content: "La información sobre contratos limitados e ilimitados me ayudó a tomar la decisión correcta al firmar mi nuevo contrato. Definitivamente me ha dado una ventaja financiera.",
      author: "Javier M.",
      role: "Ejecutivo de Marketing, UAE"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Valorado por Profesionales en UAE
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Miles de expatriados y residentes en Emiratos Árabes Unidos confían en nuestra calculadora para planificar su futuro financiero.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <Testimonial
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
