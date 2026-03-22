import { motion } from "framer-motion";
import { Wrench, Truck, GraduationCap, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description: "Professional installation and setup of all coding and marking equipment at your facility.",
  },
  {
    icon: HeadphonesIcon,
    title: "Annual Maintenance Contracts",
    description: "Preventive maintenance programs to maximize uptime and equipment longevity.",
  },
  {
    icon: Truck,
    title: "Spares & Consumables",
    description: "Genuine spare parts and consumables for all major brands with pan-India delivery.",
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description: "Comprehensive training programs for your operators to ensure optimal equipment performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              Complete Service Solutions
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
              From initial consultation to ongoing maintenance, we provide end-to-end support
              for all your industrial coding and marking needs across India.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-16 hexagon-clip bg-navy flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">✓</span>
              </div>
              <div>
                <div className="font-display font-bold text-foreground">Pan-India Coverage</div>
                <div className="text-sm text-muted-foreground">Service network across all major industrial hubs</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 border border-border hover:border-orange/30 transition-all duration-300 hover:shadow-hex group"
              >
                <service.icon className="w-8 h-8 text-orange mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
