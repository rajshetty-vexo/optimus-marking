import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
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
    className="relative w-full h-full pt-20 sm:pt-20 lg:pt-24 overflow-hidden flex items-center"
  >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src="https://res.cloudinary.com/rjfewkks/video/upload/v1783089525/Nozzle-Sealing_02_xjatre.mp4" />
      </video>

      {/* Dot texture overlay */}
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      /> */}

      {/* Large background hexagon */}
      <div className="absolute top-1/3  lg:top-1/2 lg:left-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="hexagon-clip w-[300px] sm:w-[500px] lg:w-[700px] aspect-[0.866] bg-orange"
          style={{ opacity: 0.0 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-0 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-w-0">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* BADGE: Adjusted PC spacing (lg:mb-6) to match space below heading */}
            <div className="relative inline-block p-[1px] rounded-md overflow-hidden mt-0 sm:mt-1 mb-4 sm:mb-3 ">
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
              CODE • MARK • LABEL • IDENTIFY
            </div>

            {/* PARAGRAPH: Adjusted PC spacing (lg:mt-6) to match the above spacing perfectly */}
            <p className="mt-3 sm:mt-4 lg:mt-6 text-[0.9rem] sm:text-base lg:text-[1.2rem] lg:leading-[1.45] text-[#1E1951] font-body max-w-xl sm:max-w-xl leading-[1.6] break-words">
              Trusted Partner for Industrial Coding, Marking & Labeling Solutions
              with PAN India Service & Support.
            </p>

            <div className="mt-4 sm:mt-8 flex flex-wrap gap-4">
              <Link
                to="/product-range"
                className="group relative overflow-hidden inline-flex items-center gap-2 text-accent-foreground px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-transform duration-300 rounded-3xl hover:scale-105"
              >
                <span className="absolute inset-0 bg-orange z-0" />
                <span className="absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-orange-500 via-[rgb(252,120,59)] to-orange-600 transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative z-10">Explore Products</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 group-hover:text-bold" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#1E1951] hover:border-orange text-[#1E1951] hover:text-orange px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase rounded-3xl hover:scale-110 transition-all duration-300"
              >
                Get a Quote
              </Link>
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
                <Counter to={500} suffix="+" />
                <div className="text-xs font-display uppercase tracking-wider text-[#1E1951]">
                  <span className="block lg:hidden">
                    Active Coustomer
                    {/* <br />
                    <span className="whitespace-nowrap">PAN India</span>
                    <br />
                    Coverage */}
                  </span>
                  <span className="hidden lg:block">
                    <span className="whitespace-nowrap">Active Coustomer</span>
                    {/* <br />
                    PAN India Coverage */}
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

  

        </div>
      </div>
    </section>
  );
};

export default Hero;