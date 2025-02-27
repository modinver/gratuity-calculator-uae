
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' 
            ? 'Contact Us - ActuDubai.com'
            : 'اتصل بنا - ActuDubai.com'}
        </title>
        <meta 
          name="description" 
          content={language === 'en'
            ? 'Get in touch with our gratuity calculation experts for assistance with your UAE end-of-service benefits.'
            : 'تواصل مع خبراء حساب مكافأة نهاية الخدمة للحصول على المساعدة بشأن مكافآت نهاية الخدمة في الإمارات.'}
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Contact Hero Section */}
          <section className="bg-gradient-to-b from-gratuity-50 to-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  {language === 'en' 
                    ? 'Our team of experts is here to help with your gratuity calculation queries.'
                    : 'فريق الخبراء لدينا هنا للمساعدة في استفساراتك حول حساب مكافأة نهاية الخدمة.'}
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Form Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ContactForm />
            </div>
          </section>
          
          {/* Additional Contact Information */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {language === 'en' ? 'Email Us' : 'راسلنا عبر البريد الإلكتروني'}
                    </h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@actudubai.com" className="text-gratuity-700 hover:underline">
                        info@actudubai.com
                      </a>
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {language === 'en' ? 'Office Hours' : 'ساعات العمل'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Monday to Friday: 9:00 AM - 5:00 PM (GST)'
                        : 'الاثنين إلى الجمعة: 9:00 صباحًا - 5:00 مساءً (توقيت الخليج)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
