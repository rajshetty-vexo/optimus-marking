import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HexagonDecor from "./HexagonDecor";
import optimusLogo from "@/assets/optimus-logo.svg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Hexagonal decorations */}
      <HexagonDecor className="top-20 right-10" size={120} opacity={0.15} delay={0.3} />
      <HexagonDecor className="top-40 right-32" size={60} opacity={0.2} delay={0.5} stroke="hsl(var(--orange))" />
      <HexagonDecor className="bottom-32 left-10" size={90} fill="hsl(var(--orange))" stroke="none" opacity={0.15} delay={0.7} />
      <HexagonDecor className="bottom-20 left-28" size={50} fill="hsl(var(--teal))" stroke="none" opacity={0.2} delay={0.9} />
      <HexagonDecor className="top-1/3 left-1/4" size={40} opacity={0.1} delay={1.1} />
      <HexagonDecor className="bottom-1/4 right-1/4" size={160} opacity={0.06} delay={0.4} />

      {/* Large background hexagon */}
      <div className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="700" height="808" viewBox="0 0 100 115.47" className="opacity-[0.03]">
          <polygon
            points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-orange/10 border border-orange/30 rounded-sm px-4 py-1.5 mb-6">
              <span className="text-primary-foreground text-sm font-display font-semibold tracking-widest uppercase">
                Industrial Marking Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground font-display leading-tight tracking-tight">
              Precision{" "}
              <span className="text-orange">Coding &</span>
              <br />
              <span className="text-orange">Marking</span> Systems
            </h1>

            <p className="mt-6 text-lg text-primary-foreground/60 font-body max-w-xl leading-relaxed">
              Authorized sales and service partner for world-leading industrial coding and marking
              solutions. Serving manufacturers across India with cutting-edge printing technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-light text-accent-foreground px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/20 hover:border-orange text-primary-foreground hover:text-orange px-7 py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-colors"
              >
                Get a Quote
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-primary-foreground/40">
              <div>
                <div className="text-3xl font-display font-bold text-primary-foreground">10+</div>
                <div className="text-xs font-display uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/10" />
              <div>
                <div className="text-3xl font-display font-bold text-primary-foreground">50+</div>
                <div className="text-xs font-display uppercase tracking-wider">Installations</div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/10" />
              <div>
                <div className="text-3xl font-display font-bold text-primary-foreground">24/7</div>
                <div className="text-xs font-display uppercase tracking-wider">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Central hexagon with logo */}
            <div className="relative">
              <div className="w-72 aspect-[0.866] hexagon-clip bg-primary-foreground flex items-center justify-center shadow-hex">
                <img src={optimusLogo} alt="Optimus Marking" draggable={false} className="max-w-[88%] max-h-[72%] w-auto h-auto object-contain select-none" />
              </div>
              {/* Orbiting smaller hexagons */}
              <motion.div
                className="absolute -top-6 -right-8"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-16 aspect-[0.866] hexagon-clip bg-orange/80" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 aspect-[0.866] hexagon-clip bg-teal/60" />
              </motion.div>
              <motion.div
                className="absolute top-4 -left-16"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 aspect-[0.866] hexagon-clip bg-orange/40" />
              </motion.div>
            </div>
          </motion.div>
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
