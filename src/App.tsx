
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GratuityCalculationGuide from "./pages/GratuityCalculationGuide";
import GratuityLawUAEGuide from "./pages/GratuityLawUAEGuide";
import GratuityEligibilityUAE from "./pages/GratuityEligibilityUAE";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gratuity-calculation-uae-guide" element={<GratuityCalculationGuide />} />
            <Route path="/gratuity-law-uae-guide" element={<GratuityLawUAEGuide />} />
            <Route path="/who-is-eligible-for-gratuity-uae" element={<GratuityEligibilityUAE />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
