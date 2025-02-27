
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Pages
import Index from '@/pages/Index';
import GratuityLawUAEGuide from '@/pages/GratuityLawUAEGuide';
import GratuityEligibilityUAE from '@/pages/GratuityEligibilityUAE';
import GratuityCalculationGuide from '@/pages/GratuityCalculationGuide';
import GratuityLimitedContractUAE from '@/pages/GratuityLimitedContractUAE';
import ResignationAffectGratuityUAE from '@/pages/ResignationAffectGratuityUAE';
import TimeToReceiveGratuityUAE from '@/pages/TimeToReceiveGratuityUAE';
import GratuityTaxUAE from '@/pages/GratuityTaxUAE';
import InvestGratuityUAE from '@/pages/InvestGratuityUAE';
import GratuityClaim from '@/pages/GratuityClaim';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// CSS
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gratuity-law-uae-guide" element={<GratuityLawUAEGuide />} />
        <Route path="/gratuity-eligibility-uae" element={<GratuityEligibilityUAE />} />
        <Route path="/gratuity-calculation-guide" element={<GratuityCalculationGuide />} />
        <Route path="/gratuity-limited-contract-uae" element={<GratuityLimitedContractUAE />} />
        <Route path="/resignation-affect-gratuity-uae" element={<ResignationAffectGratuityUAE />} />
        <Route path="/time-to-receive-gratuity-uae" element={<TimeToReceiveGratuityUAE />} />
        <Route path="/gratuity-tax-uae" element={<GratuityTaxUAE />} />
        <Route path="/invest-gratuity-uae" element={<InvestGratuityUAE />} />
        <Route path="/gratuity-claim" element={<GratuityClaim />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
