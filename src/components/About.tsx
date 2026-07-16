import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
      {/* Background Decorative Hexagons */}
      <div className="absolute top-0 right-0 w-64 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── UPPER PART: FULL-WIDTH LANDSCAPE CONTENT ── */}
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
          
          {/* Main narrative block built for wide landscape readability */}
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg text-justify lg:text-left">
            <p>
              <strong className="text-[#1E1951]">Optimus Marking Systems Private Limited</strong> is an Indian technology company 
              headquartered in Pune—the city of engineering, technology, and innovation. Established with 
              a vision to deliver world-class product identification solutions, Optimus specializes in 
              industrial coding, marking, labeling, and traceability technologies that help manufacturers 
              improve productivity, quality, and operational excellence.
            </p>
            
            <p>
              Optimus Marking Systems is a specialized spin-off from the <strong>Coding, Marking & Labeling 
              Division of iAIDC Technologies Private Limited</strong>. Built on years of industrial experience, 
              application expertise, and customer trust, the company was established with a focused mission 
              to provide advanced product identification solutions tailored to the evolving needs of modern manufacturing.
            </p>
            
            <p className="font-medium text-foreground text-lg border-l-4 border-orange pl-4 italic bg-muted/30 py-3 rounded-r">
              At Optimus, we help manufacturers <strong>Code, Mark, Label, and Identify</strong> every product with precision and confidence.
            </p>
            
            <p>
              From applying production codes and variable data to laser marking, product labeling, print-and-apply 
              systems, and fully integrated traceability solutions, our technologies enable businesses to 
              improve efficiency, ensure regulatory compliance, strengthen brand protection, and achieve complete 
              product traceability throughout the manufacturing process.
            </p>
            
            <p>
              We believe every product has a story, and every code, mark, and label is an essential part of 
              that story. From the production line to the point of consumption, effective product identification 
              empowers manufacturers to optimize operations, protect their brands, maintain customer confidence, 
              and meet increasingly stringent global quality standards.
            </p>

            {/* Comprehensive Portfolio List with Unified Hexagon Bullets */}
            <div className="pt-2">
              <h3 className="text-lg font-bold text-foreground mb-4 font-display">
                Our comprehensive portfolio includes:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left list-none pl-0">
                <li className="flex items-center gap-3">
                  {/* Matching Hexagon Bullet Design using identical global hexagon-clip class */}
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Continuous Inkjet (CIJ) Printers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Thermal Inkjet (TIJ) Printers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Laser Marking Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Thermal Transfer Overprinters (TTO)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Label Print & Apply Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Product Labeling Solutions</span>
                </li>
                <li className="flex items-center gap-3 md:col-span-2">
                  <span className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span>Integrated Product Identification & Traceability Systems</span>
                </li>
              </ul>
            </div>
            
            <p className="pt-2">
              Through strategic partnerships with globally recognized technology leaders, including <strong>FAM 
              Printing</strong> and <strong>IMA Phoenix</strong>, we bring proven, world-class technologies to 
              manufacturers across India. Supported by the extensive engineering expertise and nationwide service 
              capabilities of <strong>iAIDC Technologies</strong>, together with experienced global technology 
              professionals and industry partners, we deliver solutions that maximize uptime, productivity, 
              consistency, and long-term value.
            </p>
            
            <p>
              Our approach extends beyond supplying equipment. We work closely with customers to understand 
              their manufacturing challenges, recommend the right technologies, and provide comprehensive 
              application support, technical service, and lifecycle assistance that deliver measurable business outcomes.
            </p>
            
            <p>
              Driven by innovation, reliability, responsiveness, and long-term customer relationships, our 
              vision is to become India's most trusted partner for coding, marking, labeling, and product 
              identification solutions—helping manufacturers build smarter, more efficient, and globally 
              competitive operations.
            </p>

            <div className="pt-6 border-t border-muted-foreground/10 text-left">
              <p className="font-display font-bold text-[#1E1951] text-xl sm:text-2xl">
                Need a <span className="text-orange">Solution?</span> Think <span className="text-orange">Optimus </span>
              </p>
              <p className="mt-3 text-sm sm:text-base font-bold tracking-widest uppercase text-[#1E1951] font-display flex flex-wrap gap-2 items-center">
                <span>Code</span> • <span>Mark</span> • <span>Label</span> • <span>Identify</span>
              </p>
            </div>
          </div>
        </motion.div>


        <div className="mt-16 pt-12 border-t border-muted-foreground/10 grid lg:grid-cols-12 gap-12 items-end max-w-5xl mx-auto">
          
          {/* Left Block inside Lower Part: Horizontal Checklist Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Authorized Service",
                "Genuine Spares",
                "Trained Engineers",
                "Pan-India Network",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-muted/30 p-3 rounded border border-muted/50 hover:border-orange/30 transition-colors">
                  <div className="w-3 h-3 hexagon-clip bg-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base font-display font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── LOWER RIGHT SIDE: PERFECT RESPONSIVE MULTI-HEXAGON LAYOUT ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full flex justify-center items-center py-12 lg:py-4 px-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-between mx-auto">
              
              {/* 1. Main Corporate Navy Hexagon */}
              <div className="w-48 sm:w-64 aspect-[0.866] hexagon-clip bg-navy flex items-center justify-center shadow-xl z-10">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-display font-bold text-primary-foreground">10+</div>
                  <div className="text-[9px] sm:text-xs text-primary-foreground/70 font-display uppercase tracking-widest mt-1 sm:mt-1.5 leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>

              {/* Right Side Stack */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between h-full py-2 pointer-events-none lg:pointer-events-auto">
                
                {/* 2. Tech Aesthetic Teal Accent Hexagon */}
                <div className="w-14 sm:w-20 aspect-[0.866] hexagon-clip bg-teal/20 self-end" />
                
                {/* 3. Geographical Identity Hexagon */}
                <div className="w-20 sm:w-28 aspect-[0.866] hexagon-clip bg-orange flex items-center justify-center shadow-lg self-end z-20 transform translate-x-2 lg:translate-x-0">
                  <div className="text-center">
                    <div className="text-xs sm:text-lg font-display font-bold text-accent-foreground">IN</div>
                    <div className="text-[8px] sm:text-[9px] text-accent-foreground/80 font-display uppercase tracking-wider">India</div>
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