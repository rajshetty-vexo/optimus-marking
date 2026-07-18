import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  brochureUrl: string;
}

const BrochureModal = ({ isOpen, onClose, productName, brochureUrl }: BrochureModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // stored for future WhatsApp use — not sent via WhatsApp yet (see api/brochure.ts TODO)
    company: "",
    website: "", // honeypot
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ── INPUT SANITIZATION FUNCTION ──
  // Safely escapes special HTML characters to prevent script injection (XSS attacks)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);
    setIsSubmitting(true);

    // ── CLIENT-SIDE RATE LIMITING ──
    // Limit submission rate to once every 60 seconds to prevent abuse/spamming
    const lastSubmission = localStorage.getItem("brochure_last_submission");
    const now = Date.now();

    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      const secondsLeft = Math.ceil((60000 - (now - parseInt(lastSubmission))) / 1000);
      setSubmitError(`Too many download attempts. Please wait ${secondsLeft} seconds before trying again.`);
      setIsSubmitting(false);
      return;
    }

    if (formData.website !== "") {
      setIsSubmitting(false);
      return; // Silent block for honeypot bot triggers
    }

    // Apply sanitization to text variables while keeping standard email formats clean
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: formData.email.trim().toLowerCase(),
      company: sanitizeInput(formData.company),
      phone: sanitizeInput(formData.phone),
      website: formData.website,
    };

    try {
      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...sanitizedData,
          productName,
          brochureUrl,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send brochure.");
      }

      setSubmitMessage(
        "Brochure sent to your email! Please check your inbox. (Note: if email is not found, check your spam folder.)"
      );
      setFormData({ name: "", email: "", phone: "", company: "", website: "" });

      // Save submission time stamp on success
      localStorage.setItem("brochure_last_submission", Date.now().toString());
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send brochure.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitMessage(null);
    setSubmitError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#0B192C] mb-1">
              Connect with Optimus Marking
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Submit the form below to download the {productName} brochure
            </p>

            {submitMessage ? (
              <div className="py-6 text-center">
                <p className="text-sm text-emerald-600 leading-relaxed mb-4">
                  {submitMessage}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  For more details, contact us at{" "}
                  <a href="tel:+9195037 29925" className="text-[#F97316] font-medium">
                    95037 29925
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:sales@optimusmarking.com"
                    className="text-[#F97316] font-medium"
                  >
                    sales@optimusmarking.com
                  </a>
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 bg-[#0B192C] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F97316] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />

                {/*
                  TODO (future, optional): "Send brochure on WhatsApp" field.
                  Currently HIDDEN from the form because WhatsApp Business API
                  is a paid service and not yet integrated. To enable later:
                  1. Uncomment this checkbox + phone input
                  2. Implement sendViaWhatsAppAPI() in api/brochure.ts

                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="wantsWhatsapp" />
                    I want this brochure on WhatsApp too
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="WhatsApp Number"
                    className="w-full border-b border-gray-300 py-2.5 text-sm ..."
                  />
                */}

                {/* Honeypot field: hidden for users, visible for bots */}
                <div className="hidden" aria-hidden="true">
                  <input
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-500">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B192C] hover:bg-[#F97316] text-white py-3 text-xs font-bold uppercase tracking-widest rounded transition-colors mt-2"
                >
                  {isSubmitting ? "Sending..." : "Submit and Download Brochure"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;