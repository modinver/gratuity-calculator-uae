
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here would go the form submission logic
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Clear the form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gratuity-800 mb-4">
                Contact Us
              </h1>
              <p className="text-gray-600">
                Do you have any questions about gratuity in the UAE? We're here to help.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="pl-10"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="pl-10"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <Textarea
                      placeholder="Your message"
                      className="pl-10 min-h-[150px]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gratuity-600 hover:bg-gratuity-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <Separator className="my-8" />

              <div className="text-center text-sm text-gray-500">
                <p>You can also contact us directly:</p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@gratuityuae.com" className="hover:text-gratuity-600">
                      info@gratuityuae.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
