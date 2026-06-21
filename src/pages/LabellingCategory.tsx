import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { labellingData } from "../data/labellingData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const LabellingCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = labellingData.find((c) => c.id === categoryId);
  const navigate = useNavigate();

  // Mobile Dots & Scroll Tracking States
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset active index whenever the category changes
    setCurrentActiveIndex(0);
  }, [categoryId]);

  if (!category) return <div className="text-center py-20 font-display">Category Not Found</div>;

  const totalMachines = category.machines?.length || 0;

  // Mobile Scroll Monitor to calculate current visible card index
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    
    // Card width (290) + Gap (24) = 314
    const index = Math.round(scrollLeft / (290 + 24));
    if (index >= 0 && index < totalMachines) {
      setCurrentActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-16 mt-16 max-w-7xl mx-auto px-6 w-full font-display overflow-hidden">
        {/* Back Button */}
        <button 
          onClick={() => navigate("/labelling-range")} 
          className="text-orange font-semibold hover:underline text-base mb-6 inline-block"
        >
          &larr; Back to Products
        </button>
        
        {/* Category Hero Banner */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white mb-12 shadow-hex relative overflow-hidden">
          <p className="text-orange text-xs font-bold uppercase tracking-widest mb-2">{category.subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">{category.title}</h1>
          <p className="text-white/80 text-base max-w-3xl leading-relaxed">{category.description}</p>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-navy uppercase tracking-wider mb-8">Machines Portfolio</h2>
        
        {/* Mobile: Standard Square Card Horizontal Scroll | Desktop: Clean 3-Column Grid Layout */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-6 pt-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full px-4 pl-6 md:px-0 snap-x snap-mandatory scrollbar-none md:overflow-x-visible"
        >
          {category.machines.map((machine, index) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-orange/50 transition-all duration-300 shadow-sm hover:shadow-hex group shrink-0 w-[290px] sm:w-[320px] md:w-full snap-center"
            >
              <div>
                {/* Image Viewer Box */}
                <div className="w-full h-52 sm:h-56 bg-white border border-border/60 rounded-lg flex items-center justify-center p-2 mb-6 overflow-hidden transition-all duration-300 group-hover:border-orange/20 relative">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply"
                  />
                </div>

                {/* Machine Name */}
                <h3 className="text-xl font-bold text-foreground mb-3">{machine.name}</h3>

                {/* Description content with HTML parser */}
                <p 
                  className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: machine.description }}
                />
              </div>

              {/* View Machine Button */}
              <Link 
                to={`/labelling/product/${machine.id}`}
                className="text-center bg-navy hover:bg-orange text-white font-bold py-3 rounded-md transition duration-200 uppercase text-xs tracking-wider shadow-sm block"
              >
                View Machine
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Only: Smart Dynamic Indicators (Only renders if there is more than 1 item) */}
        {totalMachines > 1 && (
          <div className="flex flex-col items-center justify-center mt-4 md:hidden">
            <AnimatePresence>
              {currentActiveIndex < totalMachines - 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs text-muted-foreground/70 flex items-center gap-1.5 font-medium"
                >
                  <span>Swipe left to view more</span>
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
            
            {/* Real Dynamic Sliding Dots Tracking Container */}
            <div className="flex gap-2.5 mt-3 items-center h-2">
              {category.machines.map((_, i) => {
                const isSelected = i === currentActiveIndex;
                return (
                  <div key={i} className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]/20" />
                    {isSelected && (
                      <motion.div 
                        layoutId="activeCategoryDot"
                        className="absolute h-1.5 w-5 bg-[#F97316] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default LabellingCategory;