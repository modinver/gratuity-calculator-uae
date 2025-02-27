
import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, image }) => {
  return (
    <div className="flex flex-col h-full bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex-1">
        <svg className="h-8 w-8 text-gratuity-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic">
          {content}
        </p>
      </div>
      <div className="mt-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full object-cover" src={image} alt={author} />
          </div>
          <div className="ml-4">
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
      content: "This calculator helped me understand exactly how much gratuity I was entitled to. When my employer offered me less, I was able to confidently negotiate by showing the correct calculations.",
      author: "Alejandro R.",
      role: "Engineer, 6 years in Dubai",
      image: "/placeholder.svg"
    },
    {
      content: "After using this tool, I discovered my gratuity should be almost 30% higher than what my company had initially calculated. It's been a significant saving!",
      author: "Maria L.",
      role: "Accountant, 4 years in Abu Dhabi",
      image: "/placeholder.svg"
    },
    {
      content: "The information about limited and unlimited contracts helped me make the right decision when signing my new contract. It has definitely given me a financial advantage.",
      author: "Javier M.",
      role: "Marketing Executive, UAE",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Users Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from professionals who have benefited from our gratuity calculator
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <Testimonial
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
