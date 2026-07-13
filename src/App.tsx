import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import OpeningAnimation from "@/components/ui/opening-animation";
import Navbar from "../src/components/Navbar";



// Paths updated because App.tsx is outside the src directory
import Index from "../src/pages/Index.tsx";
import NotFound from "../src/pages/NotFound.tsx";
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import LabellingRange from "../src/pages/LabellingRange.tsx";
import LabellingCategory from "../src/pages/LabellingCategory.tsx";
import LabellingProductDetail from "../src/pages/LabellingProductDetail.tsx";
import ConsumableDetails from "../src/pages/ConsumableDetails.tsx";
import Company from "../src/pages/Company.tsx";
import ContactPage from "../src/pages/ContactPage.tsx";

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
      <Navbar/>
        <Routes>
          {/* Main Landing/Home Page */}
          <Route path="/" element={<Index />} />
          
          {/* Naye Multi-page Labelling Routes */}
          <Route path="/labelling-range" element={<LabellingRange />} />
          <Route path="/labelling/:categoryId" element={<LabellingCategory />} />
          <Route path="/labelling/product/:productId" element={<LabellingProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consumable/:slug" element={<ConsumableDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
       )}
    </TooltipProvider>
  </QueryClientProvider>
);
}

