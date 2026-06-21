import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IMALogo from "../assets/Logo/IMA Labeling logo.png";
import { labellingData } from "../data/labellingData";

const Products = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hex-pattern" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="28,0 56,16.66 56,50 28,66.66 0,50 0,16.66" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-display">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#F97316] text-sm font-semibold tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] uppercase">
            Coding, Marking & Labeling Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            We offer comprehensive industrial printing solutions to meet every manufacturing need,
            from high-speed production lines to specialty applications.
          </p>
        </motion.div>

        {/* Hexagonal Dynamic Layout Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-16 pt-8 justify-items-center w-full px-2">
          {labellingData.slice(0,4).map((cat, index) => {
            const isHovered = activeCard === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                
                // Desktop Hover Handlers
                onMouseEnter={() => setActiveCard(cat.id)} 
                onMouseLeave={() => setActiveCard(null)}   
                
                onTouchStart={(e) => {
                  if (activeCard === cat.id) {
                   
                    setActiveCard(null);
                  } else {
                    setActiveCard(cat.id);
                  }
                }}
                
                className={`relative w-[300px] h-[320px] sm:w-[310px] sm:h-[330px] lg:w-[270px] lg:h-[290px] xl:w-[320px] xl:h-[350px] group transition-all duration-500 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] ${
                  isHovered ? "drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]" : ""
                }`}
              >
                {/* Layer 1: Background Shape Mask */}
                <div 
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isHovered ? "bg-[#F97316]" : "bg-transparent group-hover:bg-[#F97316]"
                  }`}
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                />

                {/* Layer 2: Inner Core Content Box */}
                <div 
                  className="absolute inset-[0.7px] bg-white flex flex-col justify-between items-center p-6 text-center transition-all duration-500"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  {/* Product Title Section */}
                  <div className="w-full mt-6 px-5 sm:px-6">
                    <h3 className="text-[14px] sm:text-base lg:text-[13px] xl:text-[14px] font-extrabold text-[#0B192C] tracking-wide uppercase line-clamp-2 min-h-[44px] flex items-center justify-center">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Product Image Viewer Box */}
                  <div className="h-36 w-full flex items-center justify-center overflow-hidden px-4 my-1">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className={`max-h-full max-w-full object-contain transform transition-transform duration-500 ease-out ${
                        isHovered ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />
                  </div>

                  {/* 🎯 Navigation CTA Section controlled by React State */}
                  <div className="w-full mb-6 h-[38px] relative flex justify-center items-center px-4 overflow-hidden">
                    
                    {/* STEADY MODE: Company PNG Logo */}
                    <div 
                      className={`absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${
                        isHovered ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                      }`}
                    >
                      <img 
                        src={IMALogo} 
                        alt="IMA Labeling Logo" 
                        className="h-7 w-auto object-contain" 
                      />
                    </div>

                    {/* HOVER / TOUCH ACTIVE MODE: Orange Button */}
                    <div 
                      className={`absolute inset-0 w-full flex justify-center items-center transition-all duration-500 ease-in-out ${ 
                        isHovered ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <Link
                        to={`/labelling/${cat.id}`} 
                        className="w-full max-w-[135px] text-center text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm block transition-all duration-300 shadow-sm bg-[#F97316]" 
                      >
                        Discover More
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
<div className="w-full flex justify-center mt-16">
  <Link
    to="/labelling-range"
    className="bg-[#0B192C] hover:bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-md transition-all duration-300"
  >
    View All Products
  </Link>
</div>


      </div>
    </section>
  );
};

export default Products;