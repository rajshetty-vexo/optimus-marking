import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Cijproduct1 from "../assets/Slides/Cijproduct1.png";
import DOD_Slide from "../assets/Slides/DOD Slide.jpeg";
import consumables from "../assets/Slides/consumables.png";

export type SlideMedia = "video" | "image";

export interface HeroSlide {
  id: string;
  mediaType: SlideMedia;
  mediaSrc: string;         
  posterSrc?: string;       
  tag?: string;             
  heading: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  productImages?: string[]; 
  productLabels?: string[]; 
  layout?: "left" | "center";
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const slides: HeroSlide[] = [
  {
    id: "slide-tij",
    mediaType: "video",
    mediaSrc:"https://res.cloudinary.com/rjfewkks/video/upload/v1783755393/InShot_20260711_124001275_erruqd.mp4",
    tag: "TIJ Technology",
    heading: "FAMJet TIJ\nPrecision in Every Drop",
    description:
      "Thermal Inkjet systems available in 22mm, 12.7mm and wider formats — ideal for pharmaceutical, food & beverage, and logistics coding.",
    ctaLabel: "View TIJ Range",
    ctaHref: "/product-range",
    layout: "left",
  },
  {
    id: "slide-laser",
    mediaType: "image",
    mediaSrc: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676978/marking3_swcewh.jpg",
    posterSrc: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676977/marking1_svtad9.jpg",
    tag: "Laser Coding",
    heading: "Permanent Marks.\nZero Consumables.",
    description:
      "Fibre and CO₂ laser coders for permanent, tamper-proof marks on metal, glass, plastic and more — with minimal maintenance and zero ink cost.",
    ctaLabel: "Explore Laser Systems",
    ctaHref: "#products",
    layout: "left",
  },
  {
    id: "slide-dod",
    mediaType: "image",
    mediaSrc: DOD_Slide,
    tag: "DOD Technology",
    heading: "Famjet Makro\nHeavy-Duty Industrial Printing",
    description: "High-performance electromagnetic Drop on Demand (DOD) technology. Built for tough environments to print on plastic, metal, pipes, wood & concrete.",
    ctaLabel: "Explore DOD Range",
    ctaHref: "/product-range#dod",
    layout: "left",
  },
  {
    id: "slide-labelling",
    mediaType: "video",
    mediaSrc:"https://res.cloudinary.com/rjfewkks/video/upload/v1783755460/InShot_20260711_125724467_y7drzh.mp4",
    tag: "Print & Apply",
    heading: "Smart Print & Apply\nat Line Speed",
    description:
      "Automated label application systems for top, side, front-back, and wraparound labelling — seamlessly integrated with your packaging line.",
    ctaLabel: "See Labelling Solutions",
    ctaHref: "/product-range#label",
    layout: "left",
  },
  {
    id: "slide-labelling-showcase",
    mediaType: "video",
    mediaSrc: "https://res.cloudinary.com/rjfewkks/video/upload/v1783954086/InShot_20260713_201142601_okpetw.mp4", 
    tag: "Labelling Automation",
    heading: "High-Speed Industrial\nLabelling Systems",
    description: "Custom-engineered labelling machinery designed for flawless deployment across primary packaging lines, flat surfaces, or high-speed conveyor belts.",
    ctaLabel: "Discover Machinery",
    ctaHref: "/product-range#label",
    layout: "left"
  },
  {
    id: "slide-consumables",
    mediaType: "image",
    mediaSrc: consumables,
    tag: "Consumables",
    heading: "Premium Fluids\nFor All Coders",
    description: "High-grade industrial inks, solvents, make-ups, and cleaning solutions engineered for maximum performance, minimum downtime, and flawless printing quality.",
    ctaLabel: "View Consumables",
    ctaHref: "/product-range#consumables",
    layout: "left"
  },
  {
    id: "slide-cij",
    mediaType: "image",
    mediaSrc: Cijproduct1,
    tag: "Applications & Outputs",
    heading: "Crisp & Reliable\nBatch Coding",
    subheading: "New Thinking. New Efficiency. New Possibilities.",
    description:
      "See our real-time high-speed printing results. Clear, smudge-proof printing of Batch Numbers, MRP, and Expiry Dates on dairy foils, caps, and containers.",
    ctaLabel: "Get Solution For Your Product",
    ctaHref: "#contact",
    layout: "left",
  },
];

const AUTOPLAY_DELAY = 5000; 

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1); 
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = slides.length + 1;

  const go = useCallback(
    (newIndex: number, dir: number) => {
      setDirection(dir);
      setCurrent((newIndex + total) % total);
    },
    [total]
  );

  const next = useCallback(() => go(current + 1, 1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) {
      next(); 
    } else if (info.offset.x > swipeThreshold) {
      prev(); 
    }
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const checkHashAndSwitchSlide = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      
      if (hash) {
        if (hash === "home") go(0, 1);
        else if (hash === "tij") go(1, 1);   
        else if (hash === "laser") go(2, 1); 
        else if (hash === "dod") go(3, 1);   
        else if (hash === "label") go(4, 1); 
        else if (hash === "consumables") go(6, 1);
        else if (hash === "cij") go(7, 1);  

        setTimeout(() => {
          const sliderElement = document.getElementById("hero-slider-section");
          if (sliderElement) {
            sliderElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    checkHashAndSwitchSlide();
    window.addEventListener("hashchange", checkHashAndSwitchSlide);
    return () => window.removeEventListener("hashchange", checkHashAndSwitchSlide);
  }, [go]);

  return (
    <section
      id="hero-slider-section"
      className="hs-root"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Product showcase slider"
    >
      {/* ⚡ FIXED 1: Hata diya mode="popLayout" taaki slide animation container flow ko break na kare */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          drag={typeof window !== "undefined" && window.innerWidth < 1024 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          {/* INDEX 0: Home Hero */}
          {current === 0 && <Hero />}

          {/* INDEX 1: TIJ Technology */}
          {current === 1 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[0].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[0].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[0].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[0].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[0].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <video src={slides[0].mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover drop-shadow-xl rounded-xl border border-gray-100" />
              </div>
            </div>
          )}

          {/* INDEX 2: Laser Coding */}
          {current === 2 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[1].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[1].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[1].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[1].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[1].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <img src={slides[1].mediaSrc} alt="Laser Machine" className="w-full h-full object-contain drop-shadow-xl" />
              </div>
            </div>
          )}

          {/* INDEX 3: DOD Range */}
          {current === 3 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[2].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[2].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[2].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[2].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[2].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <img src={slides[2].mediaSrc} alt="DOD Machine" className="w-full h-full object-contain drop-shadow-xl rounded-xl border border-gray-100" />
              </div>
            </div>
          )}   
          
          {/* INDEX 4: Label Print & Apply */}
          {current === 4 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[3].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[3].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[3].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[3].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[3].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <video src={slides[3].mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover drop-shadow-xl rounded-xl border border-gray-100" />
              </div>
            </div>
          )}

          {/* INDEX 5: Labelling Solution */}
          {current === 5 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[4].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[4].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[4].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[4].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[4].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <video src={slides[4].mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover drop-shadow-xl rounded-xl border border-gray-100" />
              </div>
            </div>
          )}

          {/* INDEX 6: Consumables Slide */}
          {current === 6 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[5].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[5].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[5].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[5].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[5].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <img src={slides[5].mediaSrc} alt="Consumables Portfolio" className="w-full h-full object-contain drop-shadow-xl rounded-xl" />
              </div>
            </div>
          )}

          {/* INDEX 7: CIJ Technology */}
          {current === 7 && (
            <div className="w-full h-full grid lg:grid-cols-2 items-center bg-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 gap-6 select-none">
              <div className="flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1 self-center">
                <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
                  {slides[6].tag}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1951] leading-tight whitespace-pre-line">
                  {slides[6].heading}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {slides[6].description}
                </p>
                <div className="pt-1">
                  <Link to={slides[6].ctaHref} className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md">
                    {slides[6].ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center order-1 lg:order-2 self-center">
                <img src={slides[6].mediaSrc} alt="CIJ Machine" className="w-full h-full object-contain drop-shadow-xl" /> 
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="hs-arrow hs-arrow-left" onClick={prev} aria-label="Previous slide">
        <ChevronLeft className="hs-arrow-icon" />
      </button>
      <button className="hs-arrow hs-arrow-right" onClick={next} aria-label="Next slide">
        <ChevronRight className="hs-arrow-icon" />
      </button>

      {/* Global Dots Indicators */}
      <div className="hs-dots flex" role="tablist">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = index === current;
          return (
            <motion.button
              key={index}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              className="hs-dot"
              animate={{
                width: isActive ? 22 : 8,
                backgroundColor: isActive
                  ? "#F97316"
                  : current === 0
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(30, 25, 81, 0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => go(index, index > current ? 1 : -1)}
            />
          );
        })}
      </div>

      {/* ⚡ FIXED 2: Pure strict layout parameters inside CSS styles */}
      <style>{`
        .hs-root {
          position: relative;
          height: calc(100vh - 4.6rem);
          height: calc(100dvh - 4.6rem);
          width: 100%;
          overflow: hidden;
          background-color: #ffffff;
        }

        @media (max-width: 1024px) {
          .hs-root {
            height: calc(100vh - 4rem);
            height: calc(100dvh - 4rem);
          }
        }

        .hs-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(30, 25, 81, 0.1);
          border: 1px solid rgba(30, 25, 81, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .hs-arrow:hover {
          background: #F97316;
          border-color: #F97316;
        }
        .hs-arrow:hover .hs-arrow-icon {
          color: #ffffff;
        }
        .hs-arrow-left  { left: 20px; }
        .hs-arrow-right { right: 20px; }

        @media (max-width: 768px) {
          .hs-arrow { display: none; }
        }

        .hs-arrow-icon {
          width: 20px;
          height: 20px;
          color: #1E1951;
          stroke-width: 2.5;
        }

        .hs-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          align-items: center;
          gap: 8px;
        }

        .hs-dot {
          height: 8px;
          border-radius: 9999px;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;