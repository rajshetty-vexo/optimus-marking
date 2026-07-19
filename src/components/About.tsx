import { motion } from "framer-motion";

const About = () => {
  // Inline dynamic component to render the custom colored iAIDC brand text
  const IAidcText = () => (
    <span className="font-bold inline-flex">
      <span className="text-[#1E1951]">i</span>
      <span className="text-[#E1251B]">A</span>
      <span className="text-[#1E1951]">IDC</span>
    </span>
  );

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/40 relative overflow-hidden">
      {/* Background Decorative Hexagons */}
      <div className="absolute top-0 right-0 w-64 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── UPPER PART: LANDSCAPE CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center lg:text-left"
        >
          <span className="text-orange text-xs sm:text-sm font-display font-semibold tracking-widest uppercase bg-orange/10 px-3 py-1 rounded">
            About Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1E1951] leading-tight">
            Optimus Marking Systems Private Limited
          </h2>
          
          {/* Main narrative block built for clean responsive UX */}
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
            <p>
              <strong className="text-[#1E1951]">Optimus Marking Systems Private Limited</strong> is a premier Indian technology company based in Pune. We specialize in world-class industrial coding, marking, labeling, and traceability solutions designed to boost manufacturing productivity and operational excellence.
            </p>
            
            <p>
              As a specialized spin-off from the Coding, Marking & Labeling Division of <IAidcText /> Technologies Private Limited, we back our solutions with years of rich industrial application experience and deep customer trust.
            </p>
            
            <p className="font-medium text-[#1E1951] text-base border-l-4 border-orange pl-4 italic bg-muted/60 py-2.5 rounded-r">
              At Optimus, we help manufacturers <strong>Code, Mark, Label, and Identify</strong> every product with absolute precision.
            </p>
            
            <p>
              Through global strategic partnerships with technology leaders like <strong>FAM Printing</strong> and <strong>IMA Phoenix</strong>, alongside the nationwide engineering support of <IAidcText /> Technologies, we maximize uptime, productivity, and long-term value for operations all over India.
            </p>

            {/* Comprehensive Portfolio List with Unified Hexagon Bullets */}
            <div className="pt-3">
              <h3 className="text-base font-bold text-[#1E1951] mb-3 font-display">
                Our Advanced Product Portfolio Includes:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 standard-case text-left list-none pl-0">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Continuous Inkjet (CIJ) Printers</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Thermal Inkjet (TIJ) Printers</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Laser Marking Systems</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Thermal Transfer Overprinters (TTO)</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Label Print & Apply Systems</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Product Labeling Solutions</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm sm:col-span-2">
                  <span className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Integrated Product Identification & Traceability Systems</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-muted-foreground/10 text-left">
              <p className="font-display font-bold text-[#1E1951] text-lg sm:text-xl">
                Need a <span className="text-orange">Solution?</span> Think <span className="text-orange">Optimus</span>
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1E1951] font-display flex flex-wrap gap-2 items-center">
                <span>Code</span> • <span>Mark</span> • <span>Label</span> • <span>Identify</span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/10 grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Block inside Lower Part: Horizontal Checklist Grid */}
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
                <div key={item} className="flex items-center gap-2.5 bg-muted/40 p-2.5 sm:p-3 rounded border border-muted/80 hover:border-orange/30 transition-colors">
                  <div className="w-2.5 h-2.5 hexagon-clip bg-orange flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-display font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── LOWER RIGHT SIDE: HEXAGON LAYOUT ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full flex justify-center items-center py-6 lg:py-2 px-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] h-[220px] sm:h-[260px] flex items-center justify-between mx-auto">
              
              {/* 1. Main Corporate Navy Hexagon */}
              <div className="w-40 sm:w-52 aspect-[0.866] hexagon-clip bg-[#1E1951] flex items-center justify-center shadow-xl z-10">
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl font-display font-bold text-white">10+</div>
                  <div className="text-[8px] sm:text-xs text-white/70 font-display uppercase tracking-widest mt-1 leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>

              {/* Right Side Stack */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between h-full py-2 pointer-events-none lg:pointer-events-auto">
                
                {/* 2. Tech Aesthetic Teal Accent Hexagon */}
                <div className="w-12 sm:w-16 aspect-[0.866] hexagon-clip bg-teal/20 self-end" />
                
                {/* 3. Geographical Identity Hexagon */}
                <div className="w-16 sm:w-24 aspect-[0.866] hexagon-clip bg-orange flex items-center justify-center shadow-lg self-end z-20">
                  <div className="text-center">
                    <div className="text-xs sm:text-base font-display font-bold text-white">IN</div>
                    <div className="text-[7px] sm:text-[9px] text-white/90 font-display uppercase tracking-wider">India</div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;