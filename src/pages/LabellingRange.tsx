import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { labellingData } from "../data/labellingData";

const LabellingRange = () => {
  // Mobile touch active state aur desktop hover state track karne ke liye
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-20 font-display mt-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Optimus Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2 uppercase">
            LABELING Product Range
          </h1>
          <div className="w-24 h-1 bg-orange mx-auto mb-16 mt-4"></div>

          {/* 📱 Mobile view mein dynamic Horizontal Scroll / 💻 Desktop view mein solid Hexagon Grid Layout */}
          <div className="flex overflow-x-auto pb-8 pt-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-16 justify-items-center w-full px-2 snap-x snap-mandatory scrollbar-none gap-6 md:gap-y-16">
            {labellingData.map((cat, index) => {
              const isHovered = activeCard === cat.id;
              
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  
                  // Desktop Hover Controllers
                  onMouseEnter={() => setActiveCard(cat.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  
                  // Mobile Touch Controller
                  onTouchStart={() => {
                    if (activeCard === cat.id) {
                      setActiveCard(null);
                    } else {
                      setActiveCard(cat.id);
                    }
                  }}
                  className={`relative w-[290px] h-[310px] sm:w-[310px] sm:h-[330px] lg:w-[270px] lg:h-[290px] xl:w-[320px] xl:h-[350px] group transition-all duration-500 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] shrink-0 snap-center ${
                    isHovered ? "drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]" : ""
                  }`}
                >
                  {/* Layer 1: Border Structure Shape Mask */}
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isHovered ? "bg-[#F97316]" : "bg-transparent group-hover:bg-[#F97316]"
                    }`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />

                  {/* Layer 2: Core Custom Card Window */}
                  <div
                    className="absolute inset-[0.7px] bg-white flex flex-col justify-between items-center p-6 text-center transition-all duration-500"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    {/* Hexagon Top: Title Layout Grid */}
                    <div className="w-full mt-6 px-4">
                      <h3 className="text-[13px] sm:text-base lg:text-[13px] xl:text-[14px] font-extrabold text-[#0B192C] tracking-wide uppercase line-clamp-2 min-h-[44px] flex items-center justify-center">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Hexagon Center: Image Scaler Box */}
                    <div className="h-32 w-full flex items-center justify-center overflow-hidden px-4 my-1">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className={`max-h-full max-w-full object-contain transform transition-transform duration-500 ease-out mix-blend-multiply ${
                          isHovered ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />
                    </div>

                    {/* Hexagon Bottom: Static/Hover Perfect UI Button (No IMA Logo) */}
                    <div className="w-full mb-6 flex justify-center px-4">
                      <Link
                        to={`/labelling/${cat.id}`}
                        className="w-full max-w-[135px] text-center text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm block transition-all duration-300 shadow-sm"
                        style={{ backgroundColor: isHovered ? '#F97316' : '#0B192C' }}
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabellingRange;