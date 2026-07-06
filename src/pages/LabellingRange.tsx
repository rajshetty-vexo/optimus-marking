import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductRow from "@/components/ProductRow";
import { labellingData, thermalInkjetData, dodPrintingData } from "../data/labellingData";

const LabellingRange = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {

      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
   
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-20 font-display mt-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Global Portfolio Central Identifier */}
          <div className="w-full mb-16 text-center">
            <span className="text-orange text-lg sm:text-2xl font-bold tracking-widest uppercase inline-block">
              Optimus Portfolio
            </span>
          </div>

          {/* 🎯 SECTION: CIJ & Laser Product Range (Data is pending) */}
          {/* <div id="cij"> ... </div> */}
          {/* <div id="laser"> ... </div> */}

          {/* 🎯 SECTION 1: Thermal Inkjet (TIJ) Product Range */}
    
          <div id="tij" className="scroll-mt-24 pt-6 pb-6 lg:py-0">
            <ProductRow 
              title="Thermal Inkjet (TIJ) Printing Range" 
              products={thermalInkjetData} 
            />
          </div>

          {/* 🎯 SECTION 2: Drop-On-Demand (DOD) Product Range */}
          <div id="dod" className="scroll-mt-24 pt-6 pb-6 lg:py-0"> 
            <ProductRow 
              title="Drop-On-Demand (DOD) Printing Range" 
              products={dodPrintingData} 
            />
          </div>

          {/* 🎯 SECTION 3: Standard Labelling Product Range */}
          <div id="label" className="scroll-mt-24 pt-6 pb-6 lg:py-0">
            <ProductRow 
              title="LABELING Product Range" 
              products={labellingData} 
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabellingRange;