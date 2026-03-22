import { motion } from "framer-motion";
import { Printer, Zap, Shield, Settings } from "lucide-react";

const products = [
  {
    name: "Continuous Inkjet (CIJ)",
    description: "High-speed, non-contact printing for date codes, batch numbers, and barcodes on virtually any surface.",
    icon: Printer,
  },
  {
    name: "Thermal Inkjet (TIJ)",
    description: "Clean, high-resolution printing ideal for pharmaceutical, food, and beverage packaging applications.",
    icon: Zap,
  },
  {
    name: "Laser Marking",
    description: "Permanent, high-contrast marks with zero consumables. Perfect for traceability and anti-counterfeiting.",
    icon: Shield,
  },
  {
    name: "Thermal Transfer Overprinting",
    description: "Crisp, high-resolution codes on flexible films and labels for food and cosmetic packaging.",
    icon: Settings,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border hover:border-orange/40 p-8 transition-all duration-300 hover:shadow-hex"
            >
              {/* Hex accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-4 -right-4 w-16 h-16 hexagon-clip bg-orange/10" />
              </div>

              <div className="w-12 h-12 hexagon-clip bg-navy flex items-center justify-center mb-6">
                <product.icon className="w-5 h-5 text-primary-foreground" />
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
