import { motion } from "framer-motion";

// ── APNE LOGO IMAGES YAHA IMPORT KAR LENA ──
import fam_logo from "../assets/Logo/fam_logo.png";
import IMA_logo from "../assets/Logo/IMA logo.png";

const About = () => {
  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

// ── 1. iAIDC Text Link ──
  const IAidcText = () => (
    <motion.a 
      href="https://iaidctech.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline font-bold group cursor-pointer whitespace-nowrap mr-1.4" 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[#1E1951]">i</span>
      <span className="text-[#E1251B]">A</span>
      <span className="text-[#1E1951]">IDC</span>
      <span className="text-orange text-[8px] font-normal opacity-0 group-hover:opacity-100 transition-opacity absolute ml-0.5 -translate-y-[1px]">↗</span>
    </motion.a>
  )

  // ── 2. FAM Interactive Logo Link ──
  const FamLogoText = () => (
    <motion.a 
      href="https://www.fam-printing.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-1 group cursor-pointer" 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <img 
        src={fam_logo} 
        alt="FAM Logo" 
        className="h-6 sm:h-6.5 w-auto object-contain translate-y-[7px]"
      />
      <span className="font-bold text-sm sm:text-base tracking-tight whitespace-nowrap">
        <span className="text-orange">Favata</span>{" "}
        <span className="text-[#1E1951] group-hover:text-orange transition-colors">
          Advanced Marking S.r.l
        </span>
      </span>
     <span className="text-orange text-[8px] opacity-0 group-hover:opacity-100 transition-opacity absolute ml-0.5 -translate-y-[2px]">↗</span>
    </motion.a>
  );

  // ── 3. IMA LABELING Interactive Logo Link ──
  const ImaLabelingText = () => (
    <motion.a 
      href="https://www.imalabeling.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-1 group cursor-pointer" // Yahan se mx-1 hata diya
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <img 
        src={IMA_logo} 
        alt="IMA Labeling Logo" 
        className="h-2.5 w-auto object-contain translate-y-[0px]"
      />
      <span className="font-bold text-[#1E1951] group-hover:text-orange transition-colors text-sm sm:text-base tracking-tight whitespace-nowrap">
        Phoenix Italia S.r.l
      </span>
      <span className="text-orange text-[8px] opacity-0 group-hover:opacity-100 transition-opacity absolute ml-0.5 -translate-y-[7px]">↗</span>
    </motion.a>
  );

  return (
    <section id="about" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-muted/40 relative overflow-hidden">
      {/* Background Decorative Hexagons */}
      <div className="absolute top-0 right-0 w-64 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── UPPER PART: LANDSCAPE CONTENT ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center lg:text-left"
        >
          <motion.span 
            variants={itemVariants}
            className="text-orange text-xs sm:text-sm font-display font-semibold tracking-widest uppercase bg-orange/10 px-3 py-1 rounded inline-block"
          >
            About Us
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1E1951] leading-tight"
          >
            Optimus Marking Systems Private Limited
          </motion.h2>
          
          {/* Main narrative block built for clean responsive UX */}
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
            <motion.p variants={itemVariants}>
              <strong className="text-[#1E1951]">Optimus Marking Systems Private Limited</strong> is a premier Indian technology company headquartered in Pune. We specialize in world-class industrial coding, marking, labeling, and traceability solutions designed to boost manufacturing productivity and operational excellence.
            </motion.p>
            
       <motion.p variants={itemVariants} className="leading-relaxed text-left text-muted-foreground text-sm sm:text-base">
              As a specialized spin-off from the Coding, Marking & Labeling Division of{" "}
              <IAidcText />{" "}
              Technologies Private Limited, we back our solutions with years of rich industrial application experience and deep customer trust.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="font-medium text-[#1E1951] text-base border-l-4 border-orange pl-4 italic bg-muted/60 py-2.5 rounded-r"
            >
              At Optimus Marking, we help manufacturers <strong>Code, Mark, Label, and Identify</strong> every product with absolute precision.
            </motion.p>

            <motion.p variants={itemVariants} className="leading-relaxed text-left text-muted-foreground text-sm sm:text-base">
              Through global strategic partnerships with technology leaders like{" "}
              <FamLogoText />{" "}
              and{" "}
              <ImaLabelingText />{" "}
              alongside the nationwide engineering support of{" "}
              <IAidcText />{" "}
              Technologies, we maximize uptime, productivity, and long-term value for operations all over India.
            </motion.p>

            {/* Comprehensive Portfolio List */}
            <motion.div variants={itemVariants} className="pt-3">
              <h3 className="text-base font-bold text-[#1E1951] mb-3 font-display">
                Our Advanced Product Portfolio Includes:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 standard-case text-left list-none pl-0">
                {[
                  "Continuous Inkjet (CIJ) Printers",
                  "Thermal Inkjet (TIJ) Printers",
                  "Laser Marking Systems",
                  "Thermal Transfer Overprinters (TTO)",
                  "Label Print & Apply Systems",
                  "Product Labeling Solutions"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-2.5 text-xs sm:text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
                <motion.li 
                  className="flex items-center gap-2.5 text-xs sm:text-sm sm:col-span-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Integrated Product Identification & Traceability Systems</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-muted-foreground/10 text-left">
              <p className="font-display font-bold text-[#1E1951] text-lg sm:text-xl">
                Need a <span className="text-orange">Solution?</span> Think <span className="text-orange">Optimus</span>
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1E1951] font-display flex flex-wrap gap-2 items-center">
                <span>Code</span> • <span>Mark</span> • <span>Label</span> • <span>Identify</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Lower Grid Block */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/10 grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                "Authorized Service",
                "Genuine Spares",
                "Trained Engineers",
                "Pan-India Network",
              ].map((item) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-2.5 bg-muted/40 p-2.5 sm:p-3 rounded border border-muted/80 hover:border-orange/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                >
                  <div className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-display font-semibold text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hexagon Layout Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full flex justify-center items-center py-6 lg:py-2 px-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] h-[220px] sm:h-[260px] flex items-center justify-between mx-auto">
              
              <motion.div 
                className="w-40 sm:w-52 aspect-[0.866] hexagon-clip bg-[#1E1951] flex items-center justify-center shadow-xl z-10"
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl font-display font-bold text-white">10+</div>
                  <div className="text-[8px] sm:text-xs text-white/70 font-display uppercase tracking-widest mt-1 leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </motion.div>

              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between h-full py-2 pointer-events-none lg:pointer-events-auto">
                <motion.div 
                  className="w-12 sm:w-16 aspect-[0.866] hexagon-clip bg-teal/20 self-end"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="w-16 sm:w-24 aspect-[0.866] hexagon-clip bg-orange flex items-center justify-center shadow-lg self-end z-20"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="text-center">
                    <div className="text-xs sm:text-base font-display font-bold text-white">IN</div>
                    <div className="text-[7px] sm:text-[9px] text-white/90 font-display uppercase tracking-wider">India</div>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;