
import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <div className="relative overflow-hidden bg-[#1A1F2C]">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#38bdf8] to-transparent opacity-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#38bdf8] to-transparent opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated on UAE Gratuity Laws
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our newsletter to receive the latest updates on labor laws, calculation methods, and expert advice tailored for UAE employees.
          </p>
          
          {isSubmitted ? (
            <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 animate-fade-in">
              <div className="flex items-center justify-center text-white">
                <Check className="h-5 w-5 mr-2 text-green-400" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 sm:flex">
              <div className="w-full sm:max-w-md mx-auto sm:mx-0">
                <div className="min-w-0 w-full bg-white/10 backdrop-blur-sm flex items-center border border-white/20 rounded-l-lg rounded-r-lg sm:rounded-r-none px-4 py-2 text-base text-white placeholder-white/60 shadow-sm focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-20">
                  <Mail className="h-5 w-5 text-white/70 mr-3 flex-shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="bg-transparent border-none focus:outline-none flex-1 text-white placeholder-white/60 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#38bdf8] text-white hover:bg-[#38bdf8]/90 border border-transparent rounded-lg sm:rounded-l-none px-5 py-3 text-base font-medium transition-colors disabled:opacity-70"
                  disabled={isLoading || !email}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
          
          <p className="mt-4 text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
