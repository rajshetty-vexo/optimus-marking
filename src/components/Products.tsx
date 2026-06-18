import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { labellingData } from "../data/labellingData";

const Products = () => {
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
            Our Solutions
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6:gap-x-12 gap-y-16 pt-8 justify-items-center w-full px-2">
          {labellingData.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              /* Core Hexagon Wrapper Panel: Soft drop-shadow normal state me aur hover pr pure Orange Glow */
              className="relative w-[300px] h-[320px] sm:w-[310px] sm:h-[330px] lg:w-[270px] lg:h-[290px] xl:w-[320px] xl:h-[350px] group transition-all duration-500 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]"
            >
              {/* Layer 1: Background Shape Mask (Isse hover border effect banta hai) */}
              <div 
                className="absolute inset-0 bg-transparent group-hover:bg-[#F97316] transition-colors duration-500"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />

              {/* Layer 2: Inner Core Content Box (No border normal, matches layout spacing) */}
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
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Navigation CTA: Standard Optimus Theme Buttons */}
                <div className="w-full mb-6 flex justify-center px-4">
                  <Link
                    to={`/labelling/${cat.id}`}
                    className="w-full max-w-[135px] text-center text-white text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm block transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: '#0B192C' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F97316')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0B192C')}
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;