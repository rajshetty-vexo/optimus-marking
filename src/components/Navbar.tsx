import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import optimusLogo from "@/assets/optimus-logo.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex-shrink-0">
            <img src={optimusLogo} alt="Optimus Marking" className="h-10 md:h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-orange transition-colors text-sm font-medium font-display tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-orange hover:bg-orange-light text-accent-foreground px-5 py-2.5 rounded-sm text-sm font-semibold font-display tracking-wide transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-primary-foreground/80 hover:text-orange transition-colors font-display tracking-wider uppercase text-sm py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-orange text-accent-foreground px-4 py-2.5 rounded-sm text-sm font-semibold font-display w-fit"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
