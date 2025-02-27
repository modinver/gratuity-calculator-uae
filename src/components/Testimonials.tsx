
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  date: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, image, rating, date }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-center mb-4">
        <img 
          className="h-10 w-10 rounded-full object-cover mr-4" 
          src={image} 
          alt={author} 
        />
        <div>
          <h4 className="text-gray-900 font-medium">{author}</h4>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-500">{date}</span>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
        {content}
      </p>
      
      <div className="mt-auto flex items-center">
        <svg width="20" height="20" viewBox="0 0 48 48" className="mr-1">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <span className="text-xs font-medium text-[#4285F4]">Posted on Google Business</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "This calculator was incredibly helpful and accurate. When my employer offered me less than what I was entitled to, I confidently negotiated using the calculations from this tool. The process was smooth and user-friendly.",
      author: "James Thompson",
      role: "Senior Engineer",
      image: "/placeholder.svg",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      content: "I discovered my gratuity should be almost 30% higher than initially calculated by my company. The detailed breakdown helped me understand my rights better. Excellent resource for UAE employees!",
      author: "Sarah Mitchell",
      role: "Financial Analyst",
      image: "/placeholder.svg",
      rating: 5,
      date: "1 month ago"
    },
    {
      content: "The information about limited and unlimited contracts was eye-opening. Thanks to this calculator, I made an informed decision when signing my new contract. Very grateful for this free tool.",
      author: "Mohammed Ahmed",
      role: "Marketing Director",
      image: "/placeholder.svg",
      rating: 4,
      date: "2 months ago"
    },
    {
      content: "Clear, precise, and trustworthy calculations. The explanations for each step made it easy to understand how my gratuity was determined. Highly recommend this to all UAE workers.",
      author: "Lisa Chen",
      role: "HR Manager",
      image: "/placeholder.svg",
      rating: 5,
      date: "3 months ago"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="ml-2 text-lg font-medium text-gray-900">
              4.9 out of 5
            </p>
            <p className="ml-2 text-sm text-gray-500">
              Based on 200+ reviews
            </p>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 48 48" className="mr-1">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span className="text-sm font-medium text-[#4285F4]">Google Business Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
