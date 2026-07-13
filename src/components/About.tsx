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
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight">
            Optimus Marking Systems Private Limited
          </h2>
          
          {/* Main narrative block built for wide landscape readability */}
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg text-justify lg:text-left">
            <p>
              <strong>Optimus Marking Systems Private Limited</strong> is an Indian corporate company 
              headquartered in Pune, India—the city of technology and innovation. Founded with a vision 
              to deliver world-class product identification solutions, Optimus serves manufacturers across 
              diverse industries with reliable, innovative, and customer-focused technologies.
            </p>
            
            <p className="font-medium text-foreground text-lg border-l-4 border-orange pl-4 italic bg-muted/30 py-2 rounded-r">
              At Optimus Marking Systems, we help manufacturers print, mark, label, and identify products with confidence.
            </p>
            
            <p>
              Whether it's applying production codes, marking packaging, labeling products, or implementing 
              complete identification systems, we deliver reliable solutions that help manufacturers improve 
              efficiency, maintain quality, and meet evolving industry requirements.
            </p>
            
            <p>
              We believe that every product has a story to tell, and every mark, code, and label plays a vital 
              role in communicating that story. From the production floor to the point of consumption, effective 
              product identification helps businesses protect their brands, inform their customers, and optimize 
              their operations.
            </p>
            
            <p>
              Our portfolio includes industrial coding and marking systems, labeling solutions, print-and-apply 
              systems, and product identification technologies designed to meet the needs of modern manufacturing environments.
            </p>
            
            <p>
              Through our strategic partnerships with industry-leading organizations including <strong>FAM Printing</strong> and 
              <strong> IMA Phoenix</strong>, we bring world-class technologies and expertise to manufacturers across India, 
              enabling them to achieve greater productivity, consistency, and operational excellence.
            </p>
            
            <p>
              At Optimus, we value innovation, reliability, responsiveness, and long-term customer relationships. 
              We listen carefully, understand challenges, and provide practical solutions that deliver measurable results.
            </p>
            
            <p>
              As we continue to grow, our vision is to become India's preferred partner for product identification solutions, 
              helping manufacturers build smarter, more efficient, and more competitive operations.
            </p>

         
            <div className="pt-6 border-t border-muted-foreground/10 text-left">
              <p className="font-display font-bold text-[#1E1951] text-xl sm:text-2xl">
                Need a <span className="text-orange">Solution?</span> Think <span className="text-orange">Optimus </span>
              </p>
              <p className="mt-3 text-sm sm:text-base font-bold tracking-widest uppercase text-black font-display flex flex-wrap gap-2 items-center">
                <span>Print</span> • <span>Mark</span> • <span>Label</span> • <span>Identify</span>
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
            {/* 🛠️ Main responsive container: Iska max-width mobile par manage kiya taaki width squeeze na ho */}
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-between mx-auto">
              
              {/* 1. Main Corporate Navy Hexagon (Mobile par iska size scale down kiya taaki space bache) */}
              <div className="w-48 sm:w-64 aspect-[0.866] hexagon-clip bg-navy flex items-center justify-center shadow-xl z-10">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-display font-bold text-primary-foreground">10+</div>
                  <div className="text-[9px] sm:text-xs text-primary-foreground/70 font-display uppercase tracking-widest mt-1 sm:mt-1.5 leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>

              {/* Right Side Stack: Ekdum right edge par constant distance maintain karega */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between h-full py-2 pointer-events-none lg:pointer-events-auto">
                
                {/* 2. Tech Aesthetic Teal Accent Hexagon (Mobile par size balanced kiya) */}
                <div className="w-14 sm:w-20 aspect-[0.866] hexagon-clip bg-teal/20 self-end" />
                
                {/* 3. Geographical Identity Hexagon (Mobile par size dynamic aur position shift thoda right ki) */}
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