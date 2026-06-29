import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Counter from "./ui/Counter";
import optimusLogo from "@/assets/optimus-logo.svg";


type ShowcaseItem = {
  type: "logo" | "image";
  src: string;
};

const Hero = () => {
  const items: ShowcaseItem[] = [
    { type: "logo", src: optimusLogo },
    { type: "image", src: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676977/marking1_svtad9.jpg" },
    { type: "image", src: 'https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676976/marking2_xdkjxm.jpg' },
    { type: "image", src: 'https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676978/marking3_swcewh.jpg' },
    { type: "image", src: 'https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676977/marking4_rt6m6v.jpg' },
    { type: "image", src: 'https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782676977/marking5_xqqvnf.jpg' },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  // Calculate exactly which items should be in the 3 visible slots
  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="https://res.cloudinary.com/dsxnp5rjt/video/upload/q_auto/f_auto/v1781785789/Hero_Section_Visual_y6tcx4.mp4" />
      </video>

      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Large background hexagon */}
      <div className="absolute top-1/3  lg:top-1/2 lg:left-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="hexagon-clip w-[300px] sm:w-[500px] lg:w-[700px] aspect-[0.866] bg-orange"
          style={{ opacity: 0.065 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-w-0">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* BADGE: Adjusted PC spacing (lg:mb-6) to match space below heading */}
            <div className="relative inline-block p-[1px] rounded-md overflow-hidden mt-2 sm:mt-1 mb-4 sm:mb-3 ">
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(90deg, rgb(255, 94, 0), black,  rgb(0, 119, 255),black,rgb(255, 94, 0))",
                  backgroundSize: "200% 100%",
                }}
              />
              <div className="relative bg-black/60 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 rounded-md">
                <span className="text-primary-foreground text-[11.5px] min-[375px]:text-[11px] sm:text-sm lg:text-[0.98rem] font-display font-bold tracking-wider sm:tracking-widest whitespace-nowrap">
                  Precision Coding, Marking & Labeling Systems
                </span>
              </div>
            </div>

            {/* HEADING */}
            <h1
              className="text-[2.6rem] sm:text-5xl lg:text-[4.3rem] font-bold text-primary-foreground font-display max-w-full leading-[1.05] sm:leading-[1.15] break-words tracking-tight"
              style={{
                color: "#1E1951",
                textShadow: "0 0px 3px rgb(255, 255, 255)",
              }}
            >
              Need a <motion.span className="text-orange">Solution?</motion.span>
              <br /> 
              <motion.span className="whitespace-nowrap">
                Think <span className="text-orange">Optimus</span> 
              </motion.span>{" "}
            </h1>

            {/* TAGLINE: Adjusted PC spacing (lg:mt-6) for uniform "common space" */}
            <div className="mt-3 sm:mt-2 lg:mt-4 text-[#1E1951] font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[11.5px] sm:text-xs lg:text-[0.9rem] uppercase">
              CODE • MARK • LABEL • VERIFY
            </div>

            {/* PARAGRAPH: Adjusted PC spacing (lg:mt-6) to match the above spacing perfectly */}
            <p className="mt-3 sm:mt-4 lg:mt-6 text-[0.9rem] sm:text-base lg:text-[1.2rem] lg:leading-[1.45] text-[#1E1951] font-body max-w-xl sm:max-w-xl leading-[1.6] break-words">
              Trusted Partner for Industrial Coding, Marking & Labeling Solutions
              with PAN India Service & Support.
            </p>

            <div className="mt-4 sm:mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="group relative overflow-hidden inline-flex items-center gap-2 text-accent-foreground px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-colors rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-0 bg-orange z-0" />
                <span className="absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-orange-500 via-[rgb(252,120,59)] to-orange-600 transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative z-10">Explore Products</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 group-hover:text-bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[#1E1951] hover:border-orange text-[#1E1951] hover:text-orange px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase rounded-3xl hover:scale-110 transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>

            <motion.div
              className="mt-7 sm:mt-8 mb-3 flex items-start gap-4 lg:gap-8 text-primary-foreground/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <Counter to={10} suffix="+" />
                <div className="text-xs font-display uppercase tracking-wider text-[#1E1951]">
                  Years of Combined <br /> Experience
                </div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/10" />

              <div>
                <Counter to={14} suffix="+" />
                <div className="text-xs font-display uppercase tracking-wider text-[#1E1951]">
                  <span className="block lg:hidden">
                    Branch Offices
                    <br />
                    <span className="whitespace-nowrap">PAN India</span>
                    <br />
                    Coverage
                  </span>
                  <span className="hidden lg:block">
                    <span className="whitespace-nowrap">Branch Offices</span>
                    <br />
                    PAN India Coverage
                  </span>
                </div>
              </div>

              <div className="w-px h-10 bg-primary-foreground/10" />
              <div>
                <div className="font-display font-bold text-[#1E1951] leading-none">
                  <span className="block sm:inline text-3xl">
                    <Counter to={24} />
                    <span className="text-3xl md:text-3xl lg:text-4xl">/7</span>
                  </span>
                  <span className="block text-sm md:text-3xl lg:text-4xl -mt-2 sm:mt-0 sm:inline sm:ml-2">
                    Support
                  </span>
                </div>
                <div className="text-xs font-display uppercase tracking-wider text-[#1E1951] mt-0 sm:mt-1">
                  <span className="sm:hidden">
                    Online & Offline
                    <br />
                    PAN India
                  </span>
                  <span className="hidden sm:block">
                    Online & Offline
                    <br />
                    Across India
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ===================== PRODUCT SHOWCASE ===================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-[600px] h-[600px] translate-x-6">
              
              {/* DEDICATED INVISIBLE HOVER CATCHER (DESKTOP) */}
              <div 
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div 
                  className="hexagon-clip pointer-events-auto"
                  style={{ width: 360, height: 410 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => {
                    setIndex((prev) => (prev + 1) % items.length);
                    setIsPaused(false);
                  }}
                />
              </div>

              {/* Orange Breathing Background (Mathematically Centered) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ zIndex: 0 }}
                animate={{ scale: [1.015, 1.04, 1.015] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="hexagon-clip "
                  style={{ width: 365, height: 420, backgroundColor: "#1e1951" }}
                />
              </motion.div>

              {/* Dynamic Flow Rendering */}
              <AnimatePresence>
                {items.map((item, i) => {
                  if (i !== prevIndex && i !== index && i !== nextIndex) return null;

                  let variant = "hiddenEnter";
                  if (i === prevIndex) variant = "bottomRight";
                  if (i === index) variant = "center";
                  if (i === nextIndex) variant = "topRight";

                  const isSide = variant === "topRight" || variant === "bottomRight";

                  return (
                    <motion.div
                      key={i}
                      // Keep images strictly visual so they never interfere with the mouse
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      variants={{
                        hiddenEnter: { x: 250, y: -250, scale: 0.2, opacity: 0.5, zIndex: 5, filter: "blur(8px)" },
                        topRight: { x: 215, y: -210, scale: 0.35, opacity: 0.85, zIndex: 10, filter: "blur(8px)" },
                        center: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 20, filter: "blur(0)" },
                        bottomRight: { x: 215, y: 210, scale: 0.35, opacity: 0.85, zIndex: 10, filter: "blur(8px)" },
                        hiddenExit: { x: 250, y: 250, scale: 0.2, opacity: 0.1, zIndex: 5, filter: "blur(8px)" },
                      }}
                      initial="hiddenEnter"
                      animate={variant}
                      exit="hiddenExit"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >

                      <motion.div
                        className="hexagon-clip shadow-2xl flex items-center justify-center pointer-events-none"
                        style={{ width: 360, height: 410 }}
                        animate={{
                          backgroundColor: isSide ? "#1E1951" : "rgba(255, 255, 255, 0)",
                          padding: isSide ? "10px" : "0px"
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <div
                          className="hexagon-clip w-full h-full overflow-hidden bg-white shadow-2xl"
                        >
                          {item.type === "logo" ? (
                            <div className="h-full w-full flex flex-col items-center justify-center px-6 text-center bg-white">
                              <img src={optimusLogo} alt="" className="max-w-full max-h-[40%]" />
                              <p className="mt-2 text-[15px] font-bold text-orange-500">
                                Need a Solution? Think OPTIMUS
                              </p>
                              <p className="text-[10px] font-semibold tracking-widest text-[#1E1951]">
                                CODE • MARK • LABEL • VERIFY
                              </p>
                            </div>
                          ) : (
                            <img src={item.src} alt="" className="w-full h-full object-cover" />
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ============= MOBILE PRODUCT SHOWCASE ============= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex lg:hidden justify-center items-center relative w-full mb-5 right-4 bottom-4"
          >
            <div className="relative w-[270px] h-[270px]">

              {/* DEDICATED INVISIBLE HOVER CATCHER (MOBILE) */}
              <div 
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div 
                  className="hexagon-clip pointer-events-auto"
                  style={{ width: 160, height: 185 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => {
                    setIndex((prev) => (prev + 1) % items.length);
                    setIsPaused(false);
                  }}
                />
              </div>

              {/* Orange Breathing Background (Mathematically Centered) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ zIndex: 0 }}
                animate={{ scale: [1.015, 1.045, 1.015] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="hexagon-clip"
                  style={{ width: 165, height: 190, backgroundColor: "#1e1951" }}
                />
              </motion.div>

              {/* Dynamic Flow Rendering */}
              <AnimatePresence>
                {items.map((item, i) => {
                  if (i !== prevIndex && i !== index && i !== nextIndex) return null;

                  let variant = "hiddenEnter";
                  if (i === prevIndex) variant = "bottomRight";
                  if (i === index) variant = "center";
                  if (i === nextIndex) variant = "topRight";

                  const isSide = variant === "topRight" || variant === "bottomRight";

                  return (
                    <motion.div
                      key={`mobile-${i}`}
                      // Keep images strictly visual so they never interfere with the mouse
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      variants={{
                        hiddenEnter: { x: 110, y: -110, scale: 0.2, opacity: 0.5, zIndex: 5, filter: "blur(8px)" },
                        topRight: { x: 95, y: -95, scale: 0.35, opacity: 0.85, zIndex: 10, filter: "blur(8px)" },
                        center: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 20, filter: "blur(0)" },
                        bottomRight: { x: 95, y: 95, scale: 0.35, opacity: 0.85, zIndex: 10, filter: "blur(8px)" },
                        hiddenExit: { x: 110, y: 110, scale: 0.2, opacity: 0.1, zIndex: 5, filter: "blur(8px)" },
                      }}
                      initial="hiddenEnter"
                      animate={variant}
                      exit="hiddenExit"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="hexagon-clip shadow-2xl flex items-center justify-center pointer-events-none"
                        style={{ width: 160, height: 185 }}
                        animate={{
                          backgroundColor: isSide ? "#1E1951" : "rgba(255, 255, 255, 0)",
                          padding: isSide ? "5px" : "0px",
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <div className="hexagon-clip w-full h-full overflow-hidden bg-white shadow-2xl">
                          {item.type === "logo" ? (
                            <div className="h-full w-full flex flex-col items-center justify-center px-2 text-center bg-white">
                              <img src={optimusLogo} alt="" className="max-w-full max-h-[38%]" />
                              <p className="mt-1 text-[7px] font-bold text-orange-500">
                                Need a Solution? Think OPTIMUS
                              </p>
                              <p className="mt-0.5 text-[5px] font-semibold tracking-widest text-[#1E1951]">
                                CODE • MARK • LABEL • VERIFY
                              </p>
                            </div>
                          ) : (
                            <img src={item.src} alt="" className="w-full h-full object-cover" />
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
          {/* =========== END MOBILE PRODUCT SHOWCASE =========== */}

        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;