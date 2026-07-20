import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ── Custom Type for Consumables ──
interface ConsumableItem {
  id: string;
  title: string;
  image: string;
  logo?: string;
}

interface ConsumablesRowProps {
  title: string;
  products: ConsumableItem[];
}

const ConsumablesRow = ({ title, products }: ConsumablesRowProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

const handleScroll = () => {
  if (!scrollRef.current) return;
  const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  
  // 1. Check if user reached the exact end of horizontal scrolling
  const isAtEnd = Math.abs(scrollWidth - clientWidth - scrollLeft) < 5;
  
  if (isAtEnd) {
    setCurrentActiveIndex(products.length - 1);
    return;
  }

  // 2. Standard Responsive calculation based on dynamic card width
  const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || 285;
  const gap = 24; 
  
  const index = Math.round(scrollLeft / (cardWidth + gap));
  if (index >= 0 && index < products.length) {
    setCurrentActiveIndex(index);
  }
};

  return (
    <div className="w-full mb-24 last:mb-0">
      {/* Title Setup */}
      <div className="w-full mb-12 px-6 pl-8 md:px-4">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-navy uppercase tracking-wide">
            {title}
          </h2>
          <div className="w-20 h-1 bg-orange mt-3"></div>
        </div>
      </div>

      {/* Hexagon Layout Matrix: Mobile Swiper ── Desktop Grid */}
      {/* 🛠️ FIX: Grid structure balanced to fit 5 item configuration while matching rows spacing logic */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-6 pt-4 xl:grid xl:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-16 justify-items-center w-full px-6 pl-8 xl:px-4 snap-x snap-mandatory scrollbar-none xl:overflow-x-visible"
      >
        {products.map((cat, index) => {
          const isHovered = activeCard === cat.id;
          
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              
              onMouseEnter={() => setActiveCard(cat.id)}
              onMouseLeave={() => setActiveCard(null)}
              // onTouchStart={() => setActiveCard(activeCard === cat.id ? null : cat.id)}
              className={`relative w-[285px] h-[310px] sm:w-[310px] sm:h-[330px] lg:w-[260px] lg:h-[280px] xl:w-[290px] xl:h-[320px] group transition-all duration-500 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] shrink-0 snap-center ${
                isHovered ? "drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]" : ""
              }`}
            >
              {/* Layer 1: Outer Hexagon Border */}
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isHovered ? "bg-[#F97316]" : "bg-transparent group-hover:bg-[#F97316]"
                }`}
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />

              {/* Layer 2: Inner Card Content */}
              <Link
              to={`/consumable/${cat.id}`}
                className="absolute inset-[0.7px] bg-white flex flex-col justify-between items-center p-6 text-center transition-all duration-500"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                {/* Header Title Block */}
                <div className="w-full mt-6 px-2">
                  <h3 className="text-[13px] sm:text-base lg:text-[12px] xl:text-[14px] font-extrabold text-[#0B192C] tracking-wide uppercase line-clamp-2 min-h-[44px] flex items-center justify-center">
                    {cat.title}
                  </h3>
                </div>

                {/* Center Image Viewport */}
                <div className="h-28 w-full flex items-center justify-center overflow-hidden px-4 my-1">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className={`max-h-full max-w-full object-contain transform transition-transform duration-500 ease-out mix-blend-multiply ${
                      isHovered ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                </div>
{/* Hexagon Base CTA Footer - STEADY VERSION */}
      <div className="w-full mb-6 h-[38px] flex justify-center items-center px-4 overflow-hidden">
        
        <div className="w-full max-w-[135px] text-center text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm bg-[#F97316] shadow-sm transition-transform duration-300 group-hover:scale-105">
          Discover More
        </div>

      </div>
    </Link> 
  </motion.div>
);
        })}
      </div>

      {/* Mobile-Only Dynamic Assistant Scroll */}
      <div className="flex flex-col items-center justify-center mt-2 xl:hidden min-h-[40px]">
        <div className="h-5 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          {currentActiveIndex < products.length - 1 && (
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
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
        {/* Dot Matrix Tracking */}
        <div className="flex gap-2.5 mt-3 items-center h-2">
          {products.map((_, i) => {
            const isSelected = i === currentActiveIndex;
            return (
              <div key={i} className="relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]/20" />
                {isSelected && (
                  <motion.div 
                    layoutId={`activeMobileConsumableDot-${title.replace(/\s+/g, "-").toLowerCase()}`}
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
  );
};

export default ConsumablesRow;