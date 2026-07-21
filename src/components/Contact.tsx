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

  useEffect(() => {
    if (recaptchaEnabled && recaptchaSiteKey) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`);
        if (existingScript) {
          existingScript.remove();
        }
        const badge = document.querySelector(".grecaptcha-badge");
        if (badge) {
          badge.remove();
        }
      };
    }
  }, [recaptchaEnabled, recaptchaSiteKey]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeRecaptcha = (): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!recaptchaEnabled || !recaptchaSiteKey || !window.grecaptcha) {
        resolve(null);
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(recaptchaSiteKey, { action: "submit_contact" })
          .then((token: string) => resolve(token))
          .catch(() => resolve(null));
      });
    });
  };

  // ── 1. PARAMETER SANITIZATION FUNCTION ──
  // HTML characters ko strip aur encode karta hai taaki koi XSS attack ya scripts inject na kar sake
  const sanitizeInput = (text: string): string => {
    if (!text) return "";
    return text
      .trim()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    // ── 2. CLIENT-SIDE RATE LIMITING (localStorage block) ──
    // Stop users from submitting multiple requests within 60 seconds
    const lastSubmission = localStorage.getItem("form_last_submission");
    const now = Date.now();
    
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      const secondsLeft = Math.ceil((60000 - (now - parseInt(lastSubmission))) / 1000);
      setSubmitError(`Too many requests. Please wait ${secondsLeft} seconds before resubmitting.`);
      setIsSubmitting(false);
      return;
    }

    if (formData.website !== "") {
      setIsSubmitting(false);
      return; // Honeypot trigger (silently block bots)
    }

    // Sanitize values before compiling payload
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      email: formData.email.trim().toLowerCase(), // Standards email cleanup
      message: sanitizeInput(formData.message),
    };

    try {
      const token = await executeRecaptcha();
      const payload = {
        ...sanitizedData,
        ...(token && { recaptchaToken: token }),
      };

      // 🚀 METHOD 1: CUSTOM RESEND BACKEND API
       const response = await fetch("/api/contact", { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (response.ok && result.success) {
        setSubmitMessage("Thank you! Your enquiry has been sent successfully.");
        setFormData({ name: "", company: "", email: "", message: "", website: "" });
        localStorage.setItem("form_last_submission", Date.now().toString());
        } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");}


      // This code is Commented for future Works web3forms code

      // const response = await fetch("https://api.web3forms.com/submit", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     access_key: "da99bc0e-0db3-4be9-b006-2580556da87a",
      //     ...payload,
      //     subject: `New Enquiry from ${sanitizedData.name} (${sanitizedData.company})`,
      //     from_name: "Optimus Marking Website",
      //   }),
      // });

      // const result = await response.json();
      // if (result.success) {
      //   setSubmitMessage("Thank you! Your enquiry has been sent successfully.");
      //   setFormData({ name: "", company: "", email: "", message: "", website: "" });
       
      //   localStorage.setItem("form_last_submission", Date.now().toString());
      // } else {
      //   setSubmitError(result.message || "Something went wrong. Please try again.");
      // }
    } catch (error) {
      setSubmitError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[#F97316] text-xs font-bold tracking-widest uppercase inline-block bg-orange/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-[#1E1951]">
                Let's Discuss Your Coding Marking & Labeling Needs
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed font-body">
                Have questions about our products or need authorized service support? Fill out the form or reach out directly to our Pune headquarters.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const isLink = !!item.href;
                const ContentWrapper = isLink ? "a" : "div";

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1E1951]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-display font-semibold text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </h4>
                      {/* @ts-ignore */}
                      <ContentWrapper
                        {...(item.href ? { href: item.href } : {})}
                        className={`text-sm sm:text-base font-body font-medium mt-0.5 block whitespace-pre-line ${
                          item.href ? "text-[#F97316] hover:underline" : "text-slate-800"
                        }`}
                      >
                        {item.value}
                      </ContentWrapper>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: FORM BLOCK */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="text-xs font-display font-semibold text-slate-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-body text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#F97316] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="company" className="text-xs font-display font-semibold text-slate-700 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-body text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#F97316] transition-all"
                    placeholder="Company Pvt Ltd"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-display font-semibold text-slate-700 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-body text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#F97316] transition-all"
                  placeholder="sales@optimusmarking.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-display font-semibold text-slate-700 uppercase tracking-wider">
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-body text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#F97316] transition-all resize-none"
                  placeholder="Tell us about your industrial requirements..."
                />
              </div>

              {/* Honeypot field */}
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
            </div>

            <div className="space-y-4">
              {submitMessage && (
                <p className="text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-lg border border-emerald-200">{submitMessage}</p>
              )}
              {submitError && (
                <p className="text-sm text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-200">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white py-3.5 rounded-xl font-display font-semibold tracking-wide text-sm uppercase shadow-lg transition-all transform active:scale-[0.99] disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;