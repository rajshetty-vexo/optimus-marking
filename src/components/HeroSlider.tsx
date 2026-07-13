import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
// import  Slideimage  from "@assets/Slides/Markedimage.png";
import Cijproduct from "../assets/Slides/Cijproduct.png";
import LabelSlide1 from "../assets/Slides/LabelSlide1.png";
import TIJ_M9Slide from "../assets/Slides/TIJ_M9Slide.jpg";
import Cijproduct1 from "../assets/Slides/Cijproduct1.png";
import TIJ_22mm from "../assets/Slides/TIJ_22mm.png";


export type SlideMedia = "video" | "image";

export interface HeroSlide {
  id: string;
  mediaType: SlideMedia;
  mediaSrc: string;         // video mp4 URL or image URL
  posterSrc?: string;       // video poster / fallback image
  tag?: string;             // e.g. "CIJ Technology"
  heading: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  productImages?: string[]; // product variant images shown at bottom
  productLabels?: string[]; // labels for each productImages item
  // Layout: "left" = text left / media right, "center" = text centered on top of media
  layout?: "left" | "center";
}

// Imports ke theek niche ye copy-paste karo
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
  // ── SLIDE 1: TIJ Technology (Product variants image row layout) ─────────────
  {
    id: "slide-tij",
    mediaType: "video",
    // TODO: Replace with a real background/showcase image for TIJ
    // mediaSrc: TIJ_M9Slide,
    mediaSrc:"https://res.cloudinary.com/rjfewkks/video/upload/v1783755393/InShot_20260711_124001275_erruqd.mp4",
    tag: "TIJ Technology",
    heading: "FAMJet TIJ\nPrecision in Every Drop",
    description:
      "Thermal Inkjet systems available in 22mm, 12.7mm and wider formats — ideal for pharmaceutical, food & beverage, and logistics coding.",
    ctaLabel: "View TIJ Range",
    ctaHref: "/labelling-range",
    // TODO: Replace these placeholder URLs with real product model images
    // productImages: [
    //  TIJ_22mm ,
    //   "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676976/marking2_xdkjxm.jpg",
    //   "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676978/marking3_swcewh.jpg",
    // ],
    // productLabels: ["22mm", "12.7mm"],
    layout: "left",
  },

  // ── SLIDE 2: Laser — add real image ────────────────────────────────────────
  {
    id: "slide-laser",
    mediaType: "image",
    // TODO: Replace with real laser machine image
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

  // SLIDE-3 DOD Range Drop On Demand
  {
    id: "slide-dod",
    mediaType: "image",
    mediaSrc: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676976/marking2_xdkjxm.jpg", // TODO: Yahan apna MakroMobile ya MakroPlus ka slide image daal dena
    tag: "DOD Technology",
    heading: "Famjet Makro\nHeavy-Duty Industrial Printing",
    description: "High-performance electromagnetic Drop on Demand (DOD) technology. Built for tough environments to print on concrete, metal, pipes, and wood.",
    ctaLabel: "Explore DOD Range",
    ctaHref: "/labelling-range#dod",
    layout: "left",
  },
  
  // ── SLIDE 4: Label Print & Apply ───────────────────────────────────────────
  {
    id: "slide-labelling",
    mediaType: "video",
    // TODO: Replace with real labelling machine image
    // mediaSrc:LabelSlide1,
    mediaSrc:"https://res.cloudinary.com/rjfewkks/video/upload/v1783755460/InShot_20260711_125724467_y7drzh.mp4",
    tag: "Label Print & Apply",
    heading: "Smart Labelling\nat Line Speed",
    description:
      "Automated label application systems for top, side, front-back, and wraparound labelling — seamlessly integrated with your packaging line.",
    ctaLabel: "See Labelling Solutions",
    ctaHref: "/labelling-range#label",
    layout: "left",
  },

     // // ── SLIDE 3: CIJ Technology (Product Images) ───────────────────────────────
  //  {
  //   id: "slide-cij",
  //   mediaType: "image",
  //   mediaSrc: Cijproduct1,
  //   // TODO: Replace with a thumbnail image shown before video loads
  //   tag: "Applications & Outputs",
  //   heading: "Crisp & Reliable\nBatch Coding",
  //   subheading: "New Thinking. New Efficiency. New Possibilities.",
  //   description:
  //     "See our real-time high-speed printing results. Clear, smudge-proof printing of Batch Numbers, MRP, and Expiry Dates on dairy foils, caps, and containers.",
  //   ctaLabel: "Get Solution For Your Product",
  //   ctaHref: "#contact",
  //   layout: "left",
  // },

  // ── Add more slides here following the same structure ─────────────────────
];

// ─────────────────────────────────────────────────────────────────────────────
// HeroSlider component
// ─────────────────────────────────────────────────────────────────────────────
const AUTOPLAY_DELAY = 5000; // ms between auto-advances

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const slideContentRef = useRef<HTMLDivElement>(null);
  const [dynamicMinHeight, setDynamicMinHeight] = useState<number | null>(null);

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

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  // Pause on touch (mobile)
  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

// 💡 Page reload ya URL badalne par correct slide open karne ke liye useEffect
useEffect(() => {
  const checkHashAndSwitchSlide = () => {
    // window.location.hash se '#' hatakar lowercase karenge (e.g., "tij")
    const hash = window.location.hash.replace("#", "").toLowerCase();
    
    if (hash) {
      if (hash === "home") go(0, 1);
      else if (hash === "tij") go(1, 1);   // Slide 1: TIJ 
      else if (hash === "laser") go(2, 1); // Slide 2: Laser
      else if (hash === "dod") go(3, 1);   // Slide 3: DOD
      else if (hash === "label") go(4, 1); // Slide 4: Label Print
      else if (hash === "cij") go(5, 1);  // Slide 5: CIJ

      // 100ms ka chhota break dekar slider wale main element par scroll jump maro
      setTimeout(() => {
        const sliderElement = document.getElementById("hero-slider-section");
        if (sliderElement) {
          sliderElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // 1. Jab page fresh reload ho tab check karega
  checkHashAndSwitchSlide();

  // 2. Agar user usi page par reh kar dropdown click kare toh event listen karega
  window.addEventListener("hashchange", checkHashAndSwitchSlide);
  return () => window.removeEventListener("hashchange", checkHashAndSwitchSlide);
}, [go]);

  // 💡 Dynamic height measurement — runs whenever the slide changes, on resize,
  // and once after transition/image-load settles (350ms). This is what makes
  // the slider genuinely responsive on iPad Mini/Air/Pro, Samsung phones, etc.
  useEffect(() => {
    const measure = () => {
      if (current === 0) {
        // Hero (index 0) manages its own layout/height — don't override it.
        setDynamicMinHeight(null);
        return;
      }
      const navOffset = window.innerWidth <= 1024 ? 64 : 73.6; // matches CSS media query below
      const viewportFloor = window.innerHeight - navOffset;
      const contentHeight = slideContentRef.current?.scrollHeight ?? 0;
      setDynamicMinHeight(Math.max(viewportFloor, contentHeight));
    };

    measure();
    const raf = requestAnimationFrame(measure);
    const settleTimer = setTimeout(measure, 350);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
      window.removeEventListener("resize", measure);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section
      id="hero-slider-section"
      className="hs-root"
      style={dynamicMinHeight ? { minHeight: `${dynamicMinHeight}px` } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Product showcase slider"
    >
      {/* ── Slides ── */}
<AnimatePresence mode="popLayout" custom={direction}>
  <motion.div
    key={current}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="absolute inset-0 w-full h-full"
  >
    {/* ── INDEX 0: Original Hexagon Dynamic Counter Hero Section ── */}
    {current === 0 && <Hero />
  }

     {/* ── INDEX 1: TIJ Technology (Product variants image row layout) ── */}
{current === 1 && (
  <div
    ref={slideContentRef}
    className="relative w-full h-auto min-h-[calc(100vh-4.6rem)] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-5 sm:px-10 md:px-14 lg:px-20 gap-6 sm:gap-8 overflow-hidden"
  >
        <div className="flex flex-col justify-center text-left space-y-3 sm:space-y-5 max-w-xl z-10 order-2 lg:order-1 w-full">
          <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
            {slides[0].tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1951] font-display leading-tight whitespace-pre-line">
            {slides[0].heading}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            {slides[0].description}
          </p>
          {/* Product variants indicator row if available */}
          {slides[0].productImages && (
            <div className="flex gap-3 sm:gap-4 pt-2 overflow-x-auto">
              {slides[0].productImages.map((img, i) => (
                <div key={i} className="flex flex-col items-center border border-gray-200 p-2 rounded bg-gray-50 min-w-[64px] sm:min-w-[70px]">
                  <img src={img} alt="" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                  <span className="text-[11px] sm:text-xs text-orange-500 font-bold mt-1">{slides[0].productLabels?.[i]}</span>
                </div>
              ))}
            </div>
          )}
          <div className="pt-2">
            <Link
              to={slides[0].ctaHref}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold font-display px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md"
            >
              {slides[0].ctaLabel}
            </Link>
          </div>
        </div>
        <div className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 mt-2 lg:mt-0">
      {slides[0].mediaType === "video" ? (
<video 
  src={slides[0].mediaSrc} 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full lg:max-w-[95%] lg:h-[60vh] object-cover drop-shadow-2xl rounded-2xl border border-gray-100"
/>
) : (
  <img 
    src={slides[3].mediaSrc} 
    alt="Labelling Machine" 
    className="w-full h-full object-contain drop-shadow-2xl"
  />
)}
        </div>
      </div>
    )}

   

 {/* ── INDEX 2: Laser Coding Technology (Laser details perfectly synced) ── */}
{current === 2 && (
  <div
    ref={slideContentRef}
    className="relative w-full h-auto min-h-[calc(100vh-4.6rem)] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-5 sm:px-10 md:px-14 lg:px-20 gap-6 sm:gap-8 overflow-hidden"
  >
        <div className="flex flex-col justify-center text-left space-y-3 sm:space-y-5 max-w-xl z-10 order-2 lg:order-1 w-full">
          <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
            {slides[1].tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1951] font-display leading-tight whitespace-pre-line">
            {slides[1].heading}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            {slides[1].description}
          </p>
          <div className="pt-2">
            <Link
              to={slides[1].ctaHref}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold font-display px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md"
            >
              {slides[1].ctaLabel}
            </Link>
          </div>
        </div>
        <div className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 mt-2 lg:mt-0">
          <img 
            src={slides[1].mediaSrc} 
            alt="Laser Machine" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    )}

    {/* ── INDEX 3: DOD Technology (New Slide Layer mapping) ── */}
{current === 3 && (
  <div
    ref={slideContentRef}
    className="relative w-full h-auto min-h-[calc(100vh-4.6rem)] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-5 sm:px-10 md:px-14 lg:px-20 gap-6 sm:gap-8 overflow-hidden"
  >
        <div className="flex flex-col justify-center text-left space-y-3 sm:space-y-5 max-w-xl z-10 order-2 lg:order-1 w-full">
          <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
            {slides[2].tag} {/* Array element 2 handles DOD meta tags */}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1951] font-display leading-tight whitespace-pre-line">
            {slides[2].heading}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            {slides[2].description}
          </p>
          <div className="pt-2">
            <Link
              to={slides[2].ctaHref}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold font-display px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md"
            >
              {slides[2].ctaLabel}
            </Link>
          </div>
        </div>
        <div className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 mt-2 lg:mt-0">
          <img 
            src={slides[2].mediaSrc} 
            alt="DOD Machine" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    )}   
    
    {/* ── INDEX 4: Label Print & Apply (Perfect layout mapping with LabelSlide1) ── */}
{current === 4 && (
  <div
    ref={slideContentRef}
    className="relative w-full h-auto min-h-[calc(100vh-4.6rem)] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-5 sm:px-10 md:px-14 lg:px-20 gap-6 sm:gap-8 overflow-hidden"
  >
        <div className="flex flex-col justify-center text-left space-y-3 sm:space-y-5 max-w-xl z-10 order-2 lg:order-1 w-full">
          <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
            {slides[3].tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1951] font-display leading-tight whitespace-pre-line">
            {slides[3].heading}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            {slides[3].description}
          </p>
          <div className="pt-2">
            <Link
              to={slides[3].ctaHref}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold font-display px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md"
            >
              {slides[3].ctaLabel}
            </Link>
          </div>
        </div>
        <div className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 mt-2 lg:mt-0">
       {slides[3].mediaType === "video" ? (
  <video 
    src={slides[3].mediaSrc} 
    autoPlay 
    loop 
    muted 
    playsInline
    className="w-full lg:max-w-[95%] lg:h-[60vh] object-cover drop-shadow-2xl rounded-2xl border border-gray-100"
  />
) : (
  <img 
    src={slides[4].mediaSrc} 
    alt="Labelling Machine" 
    className="w-full h-full object-contain drop-shadow-2xl"
  />
)}
        </div>
      </div>
    )}

         {/* ── INDEX 5: CIJ Technology (Product Images) ── */}
         
 {current === 5 && (
  <div
    ref={slideContentRef}
    className="relative w-full h-auto min-h-[calc(100vh-4.6rem)] flex flex-col lg:grid lg:grid-cols-2 items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 px-5 sm:px-10 md:px-14 lg:px-20 gap-6 sm:gap-8 overflow-hidden"
  >
        <div className="flex flex-col justify-center text-left space-y-3 sm:space-y-5 max-w-xl z-10 order-2 lg:order-1 w-full">
          <span className="inline-block bg-[#F97316] text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-widest w-fit">
            {slides[4].tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1951] font-display leading-tight whitespace-pre-line">
            {slides[4].heading}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            {slides[4].description}
          </p>
          <div className="pt-2">
            <Link
              to={slides[4].ctaHref}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold font-display px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl uppercase tracking-wider text-xs sm:text-sm transition-all inline-block shadow-md"
            >
              {slides[4].ctaLabel}
            </Link>
          </div>
        </div>
        <div className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 mt-2 lg:mt-0">
   <img 
    src={slides[4].mediaSrc} 
    alt="Labelling Machine" 
    className="w-full h-full object-contain drop-shadow-2xl"
  /> 

        </div>
      </div>
    )}

  </motion.div>
</AnimatePresence>

      {/* ── Prev / Next arrows ── */}
      <button
        className="hs-arrow hs-arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="hs-arrow-icon" />
      </button>
      <button
        className="hs-arrow hs-arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="hs-arrow-icon" />
      </button>

{/* ── Dot indicators ── */}
<div className="hs-dots" role="tablist" aria-label="Slide indicators">
  {Array.from({ length: total }).map((_, index) => {
    const isActive = index === current;
    
    // 💡 Yeh check karega ki current slide Hero (index 0) hai ya nahi
    const isHeroActive = current === 0; 

    return (
      <motion.button
        key={index}
        role="tab"
        aria-selected={isActive}
        aria-label={`Go to slide ${index + 1}`}
        className="hs-dot"
        animate={{
          width: isActive ? 22 : 8,
          // 👇 Yahan dhyan se dekho: isse dots har background par chamkenge!
          backgroundColor: isActive 
            ? "#F97316" // Active dot hamesha premium Orange rahega
            : isHeroActive 
              ? "rgba(255, 255, 255, 0.4)" // Hero (Dark) slide par inactive dots light white dikhenge
              : "rgba(30, 25, 81, 0.3)",   // Baki White slides par inactive dots dark blue/grayish dikhenge
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => go(index, index > current ? 1 : -1)}
        style={{
          height: "8px",
          borderRadius: "9999px",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      />
    );
  })}
</div>

      <style>{`
     /* ── Root ── */
.hs-root {
  position: relative;
  min-height: calc(100vh - 4.6rem);
  min-height: calc(100dvh - 4.6rem);
  width: 100%;
  /* Horizontal hidden (needed for the swipe transition),
     vertical VISIBLE — never trap content in an internal scrollbar
     and never clip it. The dynamicMinHeight inline style (set from JS)
     is what keeps the box tall enough on every device. */
  overflow-x: hidden;
  overflow-y: visible;
  user-select: none;
  transition: min-height 0.25s ease;
}

@media (max-width: 1024px) {
  .hs-root {
    min-height: calc(100vh - 4rem);
    min-height: calc(100dvh - 4rem);
  }
}

        /* ── Slide wrapper ── */
        .hs-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }

        /* ── Media (video / image) ── */
        .hs-media {
          position: absolute;
          inset: 0;
        }
        .hs-media-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* Gradient overlay: left side dark for text, right side lighter */
        .hs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(11, 25, 44, 0.88) 0%,
            rgba(11, 25, 44, 0.55) 55%,
            rgba(11, 25, 44, 0.10) 100%
          );
        }

        /* ── Content wrapper ── */
        .hs-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (min-width: 768px) {
          .hs-content { padding: 0 40px; }
        }
        @media (min-width: 1024px) {
          .hs-content { padding: 0 64px; flex-direction: row; align-items: flex-end; }
        }

        /* ── Text block ── */
        .hs-text-block {
          max-width: 540px;
        }

        /* Tag */
        .hs-tag {
          display: inline-block;
          background: #F97316;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 2px;
          margin-bottom: 14px;
        }

        /* Heading */
        .hs-heading {
          font-size: clamp(26px, 5vw, 52px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 12px 0;
          font-family: inherit;
          /* Dotmatrix / stencil feel — matches CIJ brand world */
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }

        /* Subheading */
        .hs-subheading {
          font-size: clamp(13px, 1.5vw, 16px);
          font-weight: 700;
          color: #F97316;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        /* Description */
        .hs-description {
          font-size: clamp(13px, 1.4vw, 15px);
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
          margin: 0 0 22px 0;
          max-width: 460px;
        }

        /* CTA button */
        .hs-cta {
          display: inline-block;
          background: #F97316;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
        }
        .hs-cta:hover {
          background: #ea6407;
          transform: translateY(-2px);
        }

        /* ── Product variant images ── */
        .hs-products {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding-bottom: 8px;
        }
        @media (min-width: 1024px) {
          .hs-products {
            margin-left: auto;
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .hs-product-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 6px;
          padding: 10px;
          min-width: 80px;
          backdrop-filter: blur(6px);
          transition: background 0.2s;
        }
        .hs-product-item:hover {
          background: rgba(249,115,22,0.15);
          border-color: #F97316;
        }

        .hs-product-img {
          width: 64px;
          height: 72px;
          object-fit: contain;
        }
        @media (min-width: 768px) {
          .hs-product-img { width: 80px; height: 90px; }
        }

        .hs-product-label {
          font-size: 11px;
          font-weight: 700;
          color: #F97316;
          letter-spacing: 1px;
          text-align: center;
        }

        /* ── Prev / Next arrows ──
           Visible from tablet (768px) upward — tablets have enough room
           for them, size steps up again at desktop (1024px). */
        .hs-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
        }

        @media (min-width: 768px) {
          .hs-arrow {
            display: flex;
            width: 38px;
            height: 38px;
          }
        }

        @media (min-width: 1024px) {
          .hs-arrow {
            width: 44px;
            height: 44px;
          }
        }

        .hs-arrow:hover {
          background: #F97316;
          border-color: #F97316;
        }
        .hs-arrow-left  { left: 10px; }
        .hs-arrow-right { right: 10px; }

        @media (min-width: 768px) {
          .hs-arrow-left  { left: 16px; }
          .hs-arrow-right { right: 16px; }
        }
        @media (min-width: 1024px) {
          .hs-arrow-left  { left: 20px; }
          .hs-arrow-right { right: 20px; }
        }
        .hs-arrow-icon {
          width: 18px;
          height: 18px;
          color: #fff;
          stroke-width: 2.5;
        }
        @media (min-width: 1024px) {
          .hs-arrow-icon { width: 20px; height: 20px; }
        }

        /* ── Dots ──
           Positioned with a clean, positive bottom offset — no more
           negative-margin clipping trick. Because .hs-root's height is
           now correctly sized (via dynamicMinHeight from JS), this always
           lands right at the true bottom of the slide, on every device. */
        .hs-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (min-width: 640px) {
          .hs-dots {
            bottom: 18px;
            gap: 8px;
          }
        }

        @media (min-width: 1024px) {
          .hs-dots {
            bottom: 24px;
          }
        }

        .hs-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;



