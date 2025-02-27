
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
import GratuityClaim from "./pages/GratuityClaim";
import InvestGratuityUAE from "./pages/InvestGratuityUAE";
import GratuityTaxUAE from "./pages/GratuityTaxUAE";
import ResignationAffectGratuityUAE from "./pages/ResignationAffectGratuityUAE";
import TimeToReceiveGratuityUAE from "./pages/TimeToReceiveGratuityUAE";
import GratuityLimitedContractUAE from "./pages/GratuityLimitedContractUAE";
import Contact from "./pages/Contact";

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
            <Route path="/gratuity-calculation-uae-guide/" element={<GratuityCalculationGuide />} />
            <Route path="/gratuity-law-uae-guide" element={<GratuityLawUAEGuide />} />
            <Route path="/gratuity-law-uae-guide/" element={<GratuityLawUAEGuide />} />
            <Route path="/who-is-eligible-for-gratuity-uae" element={<GratuityEligibilityUAE />} />
            <Route path="/who-is-eligible-for-gratuity-uae/" element={<GratuityEligibilityUAE />} />
            <Route path="/how-to-claim-gratuity-uae" element={<GratuityClaim />} />
            <Route path="/how-to-claim-gratuity-uae/" element={<GratuityClaim />} />
            <Route path="/best-way-invest-gratuity-uae" element={<InvestGratuityUAE />} />
            <Route path="/best-way-invest-gratuity-uae/" element={<InvestGratuityUAE />} />
            <Route path="/is-gratuity-taxable-in-uae" element={<GratuityTaxUAE />} />
            <Route path="/is-gratuity-taxable-in-uae/" element={<GratuityTaxUAE />} />
            <Route path="/does-resignation-affect-gratuity-uae" element={<ResignationAffectGratuityUAE />} />
            <Route path="/does-resignation-affect-gratuity-uae/" element={<ResignationAffectGratuityUAE />} />
            <Route path="/how-long-to-receive-gratuity-uae" element={<TimeToReceiveGratuityUAE />} />
            <Route path="/how-long-to-receive-gratuity-uae/" element={<TimeToReceiveGratuityUAE />} />
            <Route path="/gratuity-limited-contract-uae" element={<GratuityLimitedContractUAE />} />
            <Route path="/gratuity-limited-contract-uae/" element={<GratuityLimitedContractUAE />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
