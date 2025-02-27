
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Aquí iría la lógica de envío del formulario
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Limpiamos el formulario
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gratuity-800 mb-4">
              Contacta con Nosotros
            </h1>
            <p className="text-gray-600">
              ¿Tienes alguna pregunta sobre gratuity en UAE? Estamos aquí para ayudarte.
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
                    placeholder="Tu nombre"
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
                    placeholder="Tu email"
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
                    placeholder="Tu mensaje"
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
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <Separator className="my-8" />

            <div className="text-center text-sm text-gray-500">
              <p>También puedes contactarnos directamente:</p>
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
  );
};

export default Contact;
