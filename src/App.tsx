import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Paths updated because App.tsx is outside the src directory
import Index from "../src/pages/Index.tsx";
import NotFound from "../src/pages/NotFound.tsx";
import LabellingRange from "../src/pages/LabellingRange.tsx";
import LabellingCategory from "../src/pages/LabellingCategory.tsx";
import LabellingProductDetail from "../src/pages/LabellingProductDetail.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Landing/Home Page */}
          <Route path="/" element={<Index />} />
          
          {/* Naye Multi-page Labelling Routes */}
          <Route path="/labelling-range" element={<LabellingRange />} />
          <Route path="/labelling/:categoryId" element={<LabellingCategory />} />
          <Route path="/labelling/product/:productId" element={<LabellingProductDetail />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;