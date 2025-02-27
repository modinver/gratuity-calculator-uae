
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: language === 'en' ? 'Message Sent' : 'تم إرسال الرسالة',
          description: language === 'en' ? 'We will get back to you shortly.' : 'سنرد عليك قريباً.',
          variant: 'default',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: language === 'en' ? 'Error' : 'خطأ',
        description: language === 'en' ? 'Failed to send your message. Please try again.' : 'فشل إرسال رسالتك. يرجى المحاولة مرة أخرى.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
        </h2>
        <p className="text-gray-600 mb-8">
          {language === 'en' 
            ? 'Have questions about your gratuity calculation? Reach out to our team for assistance.'
            : 'هل لديك أسئلة حول حساب مكافأة نهاية الخدمة؟ تواصل مع فريقنا للحصول على المساعدة.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={language === 'en' ? 'Your Name' : 'اسمك'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gratuity-500 focus:border-gratuity-500"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={language === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gratuity-500 focus:border-gratuity-500"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Your Phone (optional)' : 'رقم هاتفك (اختياري)'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gratuity-500 focus:border-gratuity-500"
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={language === 'en' ? 'Your Message' : 'رسالتك'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gratuity-500 focus:border-gratuity-500"
              ></textarea>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gratuity-700 hover:bg-gratuity-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
            ) : (
              <Send className="h-5 w-5 mr-2" />
            )}
            {language === 'en' ? 'Send Message' : 'إرسال رسالة'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
