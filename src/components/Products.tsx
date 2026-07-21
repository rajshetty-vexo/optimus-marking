import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { labelingData, thermalInkjetData, dodPrintingData } from "../data/productData";
import { consumablesData } from "../data/consumablesData";

// ─────────────────────────────────────────────────────────────────────────────
// All products from all ranges combined for the marquee
// Add/remove slices here to control how many from each range appear
// ─────────────────────────────────────────────────────────────────────────────
const allProducts = [
  ...thermalInkjetData,
  ...dodPrintingData,
  ...labelingData,
  ...consumablesData,
];

// ─────────────────────────────────────────────────────────────────────────────
// Single hexagon card — reused for both marquee loops
// ─────────────────────────────────────────────────────────────────────────────
interface HexCardProps {
  cat: any;
  cardKey: string;
  activeCard: string | null;
  setActiveCard: (key: string | null) => void;
}

const HexCard = ({ cat, cardKey, activeCard, setActiveCard }: HexCardProps) => {
  const isHovered = activeCard === cardKey;
  
  // ⚡ FIX 1: Safely catch all consumables (including matching slug properties)
  const isConsumable = 
    !!cat.slug || 
    !cat.machines && (
      cat.id?.toLowerCase().includes("cartridges") ||
      cat.id?.toLowerCase().includes("ribbon") || 
      cat.id?.toLowerCase().includes("ttr") || 
      cat.id?.toLowerCase().includes("tto") || 
      cat.id?.toLowerCase().includes("ink") || 
      cat.id?.toLowerCase().includes("solvent") ||
      cat.id?.toLowerCase().includes("printer-consumables")
    );

  const isTechBrand =
    cat.id?.toLowerCase().includes("tij") ||
    cat.id?.toLowerCase().includes("dod") ||
    cat.title?.toLowerCase().includes("dod")||
    cat.title?.toLowerCase().includes("famjet") ||
    cat.title?.toLowerCase().includes("makro");   

  // ⚡ FIX 2: Dynamic fallback targeting slug to eliminate "Product Not Found" on TIJ Cartridges
  const linkTo = isConsumable 
    ? `/consumable/${cat.slug || cat.id}` 
    : cat.machines && cat.machines.length > 0
      ? `/product-category/${cat.id}`
      : `/product/${cat.id}`;

  return (
    <Link
    to={linkTo}
      key={cardKey}
      onMouseEnter={() => setActiveCard(cardKey)}
      onMouseLeave={() => setActiveCard(null)}
      onTouchStart={() => setActiveCard(cardKey)}
      onTouchEnd={() => setActiveCard(null)}
      className={`relative w-[290px] h-[310px] sm:w-[310px] sm:h-[330px] lg:w-[260px] lg:h-[280px] xl:w-[320px] xl:h-[350px] 
        group transition-all duration-500 ease-in-out filter 
        drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] shrink-0
        ${isHovered ? "drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]" : ""}`}
    >
      {/* Orange border layer */}
      <div
        className={`absolute inset-0 transition-colors duration-500 
          ${isHovered ? "bg-[#F97316]" : "bg-transparent"}`}
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />

      {/* White inner hexagon */}
      <div
        className="absolute inset-[0.7px] bg-white flex flex-col justify-between items-center p-6 text-center transition-all duration-500"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        {/* Title */}
        <div className="w-full mt-6 px-5 sm:px-6">
          <h3 className="text-[14px] sm:text-base lg:text-[13px] xl:text-[14px] font-extrabold text-[#0B192C] tracking-wide uppercase line-clamp-2 min-h-[44px] flex items-center justify-center">
            {cat.title}
          </h3>
        </div>

        {/* Product Image */}
        <div className="h-36 w-full flex items-center justify-center overflow-hidden px-4 my-1">
          <img
            src={cat.image}
            alt={cat.title}
            className={`max-h-full max-w-full object-contain transform transition-transform duration-500 ease-out mix-blend-multiply
              ${isHovered ? "scale-105" : ""}`}
          />
        </div>

        {/* Logo / Discover More toggle */}
        <div className="w-full mb-6 h-[38px] relative flex justify-center items-center px-4 overflow-hidden">

          {/* Logo — Hidden automatically for consumables, otherwise toggles on hover */}
          <div className={`absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out
            ${isConsumable ? "opacity-0 scale-95 pointer-events-none" : isHovered ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
            {cat.logo && (
              <img
                src={
                  typeof cat.logo === "object" && cat.logo !== null
                    ? (cat.logo as any).default || String(cat.logo)
                    : cat.logo
                }
                alt="Brand Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isTechBrand ? "h-11 max-w-[85%]" : "h-7"
                }`}
              />
            )}
          </div>

          {/* Discover More button — ⚡ FIX 3: Always visible on Consumables, hover action for others */}
          <div className={`absolute inset-0 w-full flex justify-center items-center transition-all duration-500 ease-in-out
            ${isConsumable ? "opacity-100 translate-y-0 z-10" : isHovered ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <span
            
              className="w-full max-w-[135px] text-center text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm block transition-all duration-300 shadow-sm bg-[#F97316]"
            >
              Discover More
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Products section
// ─────────────────────────────────────────────────────────────────────────────
const Products = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">

      {/* Background hex pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="hex-pattern"
            width="56" height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2)"
          >
            <polygon
              points="28,0 56,16.66 56,50 28,66.66 0,50 0,16.66"
              fill="none"
              stroke="hsl(var(--navy))"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-display">

        {/* Header */}
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
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1951] uppercase">
            Coding, Marking & Labeling Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            We offer comprehensive industrial Coding, Marking and Labelling solutions to meet every
            manufacturing need, from high-speed production lines to specialty applications.
          </p>
        </motion.div>

        {/* Marquee */}
        <div
          className="w-full overflow-hidden relative py-8 select-none"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
          onTouchStart={() => setIsSliderPaused(true)}
          onTouchEnd={() => setIsSliderPaused(false)}
        >
          <style>{`
            @keyframes marqueeLoop {
              0%   { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              gap: 32px;
              animation: marqueeLoop 40s linear infinite;
            }
            @media (min-width: 768px) {
              .marquee-track { gap: 48px; }
            }
          `}</style>

          <div
            className="marquee-track"
            style={{ animationPlayState: isSliderPaused ? "paused" : "running" }}
          >
            {/* Loop 1 */}
            {allProducts.map((cat) => (
              <HexCard
                key={`${cat.id}-loop1`}
                cardKey={`${cat.id}-loop1`}
                cat={cat}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
            {/* Loop 2 — clone for seamless infinite scroll*/}
            {allProducts.map((cat) => (
              <HexCard
                key={`${cat.id}-loop2`}
                cardKey={`${cat.id}-loop2`}
                cat={cat}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="w-full flex justify-center mt-16">
          <Link
            to="/product-range"
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