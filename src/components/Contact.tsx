import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recaptchaEnabled = import.meta.env.VITE_ENABLE_RECAPTCHA === "true";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    website: "", // Honeypot field (must remain empty)
  });

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

  useEffect(() => {
    if (!recaptchaEnabled || !recaptchaSiteKey) {
      return;
    }

    // Load reCAPTCHA v3 script dynamically in Vite apps.
    const existingScript = document.querySelector(
      'script[src^="https://www.google.com/recaptcha/api.js"]'
    );
    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [recaptchaEnabled, recaptchaSiteKey]);

  const getRecaptchaToken = async () => {
    if (!recaptchaEnabled) {
      return "";
    }
    if (!recaptchaSiteKey) {
      throw new Error("reCAPTCHA site key is not configured.");
    }
    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA failed to load. Please refresh and try again.");
    }

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(recaptchaSiteKey, { action: "contact_form" })
          .then(resolve)
          .catch(() => reject(new Error("Unable to validate reCAPTCHA.")));
      });
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send enquiry.");
      }

      setSubmitMessage("Thanks! Your enquiry has been sent successfully.");
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send enquiry.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-display uppercase tracking-widest text-primary-foreground/50 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
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
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-navy-light/30 border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/* Honeypot field: hidden for users, visible for bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>

            {submitMessage && (
              <p className="text-sm text-emerald-300">{submitMessage}</p>
            )}
            {submitError && (
              <p className="text-sm text-red-300">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange hover:bg-orange-light text-accent-foreground py-3.5 font-display font-semibold tracking-wide text-sm uppercase transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
