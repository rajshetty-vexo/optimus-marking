import { motion } from "framer-motion";

const products = [
  {
    name: "Continuous Inkjet printing (CIJ)",
    description: "Continuous Inkjet printing for high-speed, non-contact coding on production lines.",
    short: "CIJ",
  },
  {
    name: "Thermal Inkjet printing (TIJ)",
    description: "Thermal Inkjet printing with clean, high-resolution output for cartons and labels.",
    short: "TIJ",
  },
  {
    name: "Thermal Transfer Overprinting (TTO)",
    description: "Thermal Transfer Overprinting for sharp, durable codes on flexible films and pouches.",
    short: "TTO",
  },
  {
    name: "Laser Marking System (LMS)",
    description: "Laser Marking System for accurate variable data and batch traceability with permanent marking.",
    short: "LMS",
  },
  {
    name: "Label Print and Apply (LPA)",
    description: "Automated print-and-apply labeling for fast, precise product and case labelling.",
    short: "LPA",
  },
  {
    name: "High Resolution Case Coding (Hi-res)",
    description: "High-resolution case coding for clear text, logos, and barcodes on corrugated boxes.",
    short: "Hi-Res",
  },
  {
    name: "Large Character Printer (LCP)",
    description: "Drop on Demand technology for large character printing and rugged industrial environments.",
    short: "LCP",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle hex pattern in background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hex-pattern" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="28,0 56,16.66 56,50 28,66.66 0,50 0,16.66" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
            Our Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
            Coding & Marking Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive industrial printing solutions to meet every manufacturing need,
            from high-speed production lines to specialty applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card border border-border hover:border-orange/40 p-8 transition-all duration-300 hover:shadow-hex ${
                index < 4 ? "lg:col-span-3" : ""
              } ${
                index === 4 ? "lg:col-span-3 lg:col-start-2" : ""
              } ${
                index === 5 ? "lg:col-span-3 lg:col-start-5" : ""
              } ${
                index === 6 ? "lg:col-span-3 lg:col-start-8" : ""
              }`}
            >
              {/* Hex accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-4 -right-4 w-16 h-16 hexagon-clip bg-orange/10" />
              </div>

              <div className="w-12 aspect-[0.866] hexagon-clip bg-navy flex items-center justify-center mb-6">
                <span className="text-primary-foreground text-[10px] font-display font-bold tracking-wider uppercase">
                  {product.short}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
