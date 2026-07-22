import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import OpeningAnimation from "@/components/ui/opening-animation";
import Navbar from "../src/components/Navbar";
import ScrollToTop from "../src/components/ScrollToTop.tsx";
import CookieBanner from "@/components/CookieBanner";

import Index from "../src/pages/Index.tsx";
import NotFound from "../src/pages/NotFound.tsx";
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import ProductRange from "../src/pages/ProductRange.tsx";
import ProductCategory from "../src/pages/ProductCategory.tsx";
import ProductDetail from "../src/pages/ProductDetail.tsx";
import ConsumableDetails from "../src/pages/ConsumableDetails.tsx";
import Company from "../src/pages/Company.tsx";
import ContactPage from "../src/pages/ContactPage.tsx";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";
import TermsConditions from "../src/pages/TermsConditions";

const queryClient = new QueryClient();

export default function App(){
    const [showIntro, setShowIntro] = useState(true);

    return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {showIntro && <OpeningAnimation onComplete={() => setShowIntro(false)} />}
       {!showIntro && (
      <BrowserRouter>
      <ScrollToTop />
      <CookieBanner />
      <Navbar/>
        <Routes>
          {/* Main Landing/Home Page */}
          <Route path="/" element={<Index />} />
          
         
          <Route path="/product-range" element={<ProductRange />} />
          <Route path="/product-category/:categoryId" element={<ProductCategory />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consumable/:slug" element={<ConsumableDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
       )}
    </TooltipProvider>
  </QueryClientProvider>
);
}

