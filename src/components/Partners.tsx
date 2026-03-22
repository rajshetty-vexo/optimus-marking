import { motion } from "framer-motion";

const channelPartners = [
  {
    name: "FAM SRL",
    description: "Italian precision printers for industrial applications. Optimus Marking is the official channel partner in India.",
  },
  {
    name: "IMA Labelling",
    description: "World-class labelling systems for every industry. Optimus Marking is the official channel partner in India.",
  },
];

const brandsWeService = [
  {
    name: "Domino Printing Sciences",
    description: "Sales and service support for Domino's industrial inkjet, laser, and thermal transfer printers.",
  },
  {
    name: "Videojet Technologies",
    description: "Comprehensive service and spares for Videojet coding and marking equipment.",
  },
  {
    name: "Markem-Imaje",
    description: "Expert maintenance and support for Markem-Imaje marking and coding solutions.",
  },
  {
    name: "Control Print",
    description: "Authorized service provider for Control Print's range of industrial printers.",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative hexagons */}
      <div className="absolute top-10 right-20 w-32 h-32 hexagon-clip bg-orange/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-20 h-20 hexagon-clip bg-teal/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
            Our Brands
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground">
            Trusted Brand Partners
          </h2>
          <p className="mt-4 text-primary-foreground/50 max-w-2xl mx-auto">
            We represent the world's leading industrial coding and marking brands,
            providing authorized sales and service support across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 border transition-all duration-300 hover:-translate-y-1 ${
                partner.highlight
                  ? "border-orange/40 bg-orange/5"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
              }`}
            >
              {partner.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-orange text-accent-foreground text-[10px] font-display font-bold tracking-widest uppercase px-2.5 py-1">
                    Channel Partner
                  </span>
                </div>
              )}

              <div className="w-10 h-10 hexagon-clip bg-orange/20 flex items-center justify-center mb-5">
                <span className="text-orange font-display font-bold text-sm">
                  {partner.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                {partner.name}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
