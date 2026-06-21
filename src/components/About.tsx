import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 aspect-[0.866] hexagon-clip bg-muted pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Hexagonal image mosaic */}
            <div className="relative flex items-center justify-center py-10">
              <div className="w-56 aspect-[0.866] hexagon-clip bg-navy flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-primary-foreground">10+</div>
                  <div className="text-xs text-primary-foreground/60 font-display uppercase tracking-widest mt-1">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 aspect-[0.866] hexagon-clip bg-orange flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-accent-foreground">IN</div>
                  <div className="text-[8px] text-accent-foreground/80 font-display uppercase">India</div>
                </div>
              </div>
              <div className="absolute -top-4 right-8 w-16 aspect-[0.866] hexagon-clip bg-teal/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground">
              Optimus Marking Systems Private Limited
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Optimus Marking Systems Private Limited is a trusted name in the Indian industrial coding
              and marking industry. We specialize in the sales, service, and support of industrial
              printing and labelling solutions for manufacturers across a wide range of sectors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of trained engineers ensures seamless installation, preventive maintenance,
              breakdown support, and long-term performance optimization across India.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Authorized Service",
                "Genuine Spares",
                "Trained Engineers",
                "Pan-India Network",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 hexagon-clip bg-orange flex-shrink-0" />
                  <span className="text-sm font-display font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
