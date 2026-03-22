import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted relative overflow-hidden">
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
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your production line with the right coding solution?
            Reach out to our team for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, label: "Email", value: "info@optimusmarking.com", href: "mailto:info@optimusmarking.com" },
              { icon: MapPin, label: "Address", value: "Mumbai, Maharashtra, India" },
              { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-card p-5 border border-border">
                <div className="w-10 h-10 hexagon-clip bg-navy flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-display font-semibold text-foreground hover:text-orange transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-display font-semibold text-foreground">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-background border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-background border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors resize-none"
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
