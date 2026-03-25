import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactItems = [
    { label: "Phone", value: "+91 95037 29925", href: "tel:+919503729925", icon: Phone },
    { label: "Email", value: "sales@optimusmarking.com", href: "mailto:sales@optimusmarking.com", icon: Mail },
    { label: "Address", value: "Optimus Marking Systems Pvt Ltd\n2, Vitthal Park, Manjari BK, Pune-412307", icon: MapPin },
    { label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", icon: Clock },
  ];

  const strengths = [
    {
      title: "Application Engineering",
      description:
        "Selection support based on substrate, speed, code size, and production environment.",
      badge: "Core Strength",
      short: "AE",
    },
    {
      title: "After-Sales Support",
      description:
        "Installation, preventive maintenance, and responsive technical assistance across India.",
      badge: "Core Strength",
      short: "AS",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-10 right-20 w-32 aspect-[0.866] hexagon-clip bg-orange/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-20 aspect-[0.866] hexagon-clip bg-teal/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground">
            Let's Build Your Ideal Marking Setup
          </h2>
          <p className="mt-4 text-primary-foreground/50 max-w-2xl mx-auto">
            Ready to optimize your production line with the right coding solution?
            Reach out for a quick consultation and application recommendation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 border border-orange/40 bg-orange/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-orange text-accent-foreground text-[10px] font-display font-bold tracking-widest uppercase px-2.5 py-1">
                  {item.badge}
                </span>
              </div>

              <div className="w-10 aspect-[0.866] hexagon-clip bg-orange/20 flex items-center justify-center mb-5">
                <span className="text-orange font-display font-bold text-xs tracking-wider">
                  {item.short}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="relative p-6 border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 aspect-[0.866] hexagon-clip bg-navy-light flex items-center justify-center mb-4">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-display font-semibold text-primary-foreground hover:text-orange transition-colors whitespace-pre-line">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-display font-semibold text-primary-foreground whitespace-pre-line">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-navy-light/30 border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-navy-light/30 border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-navy-light/30 border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange transition-colors"
                placeholder="sales@optimusmarking.com"
              />
            </div>
            <div>
              <label className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-2 block">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-navy-light/30 border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange hover:bg-orange-light text-accent-foreground py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-colors"
            >
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
