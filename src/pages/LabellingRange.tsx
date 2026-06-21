import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { labellingData } from "../data/labellingData";

const LabellingRange = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top automatically when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mobile Scroll Tracking Function
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    
    // Calculate index based on how much user scrolled: card width (285) + gap (24)
    const index = Math.round(scrollLeft / (285 + 24)); 
    if (index >= 0 && index < labellingData.length) {
      setCurrentActiveIndex(index);
    }
  };

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

          {/* Mobile: Horizontal Scroll | Desktop: Clean 4-Column Grid */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-6 pt-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-16 justify-items-center w-full px-6 pl-8 md:px-4 snap-x snap-mandatory scrollbar-none md:overflow-x-visible"
          >
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
                  className={`relative w-[285px] h-[310px] sm:w-[310px] sm:h-[330px] lg:w-[260px] lg:h-[280px] xl:w-[290px] xl:h-[320px] group transition-all duration-500 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] shrink-0 snap-center ${
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
                    {/* Hexagon Top: Title */}
                    <div className="w-full mt-6 px-2">
                      <h3 className="text-[13px] sm:text-base lg:text-[12px] xl:text-[14px] font-extrabold text-[#0B192C] tracking-wide uppercase line-clamp-2 min-h-[44px] flex items-center justify-center">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Hexagon Center: Image */}
                    <div className="h-28 w-full flex items-center justify-center overflow-hidden px-4 my-1">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className={`max-h-full max-w-full object-contain transform transition-transform duration-500 ease-out mix-blend-multiply ${
                          isHovered ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />
                    </div>

                    {/* Hexagon Bottom: Button */}
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

          {/* Mobile Only: Dynamic Swipe Guide Hint */}
          <div className="flex flex-col items-center justify-center mt-2 md:hidden">
            <AnimatePresence>
              {currentActiveIndex < labellingData.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs text-muted-foreground/70 flex items-center gap-1.5 font-medium"
                >
                  <span>Swipe to view more</span>
                  <motion.svg 
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </motion.svg>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Dynamic Moving Dots Indicators */}
            <div className="flex gap-2.5 mt-3 items-center h-2">
              {labellingData.map((_, i) => {
                const isSelected = i === currentActiveIndex;
                return (
                  <div key={i} className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]/20" />
                    {isSelected && (
                      <motion.div 
                        layoutId="activeMobileDot"
                        className="absolute h-1.5 w-5 bg-[#F97316] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabellingRange;