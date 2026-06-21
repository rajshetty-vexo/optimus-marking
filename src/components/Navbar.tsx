import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // 🎯 Link, useLocation aur useNavigate import kiya
import optimusLogo from "@/assets/optimus-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🎯 NavLinks list: Products link ab direct route path `/labelling-range` pr le jayega!
  const navLinks = [
    { label: "Home", href: "/", isScroll: true, hashId: "home" },
    { label: "Products", href: "/labelling-range", isScroll: false }, // 🎯 Yeh direct naye page pr jayega
    { label: "Services", href: "/", isScroll: true, hashId: "services" },
    { label: "About", href: "/", isScroll: true, hashId: "about" },
    { label: "Contact", href: "/", isScroll: true, hashId: "contact" },
  ];

  // 🎯 Click handler jo handle karega ki kab scroll karna hai aur kab page change karna hai
  const handleNavLinkClick = (link: typeof navLinks[0]) => {
    setIsOpen(false); // Mobile menu close karne ke liye

    if (link.isScroll) {
      if (location.pathname === "/") {
        // Agar pehle se Home page par hain, toh smoothly scroll karo
        const element = document.getElementById(link.hashId || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Agar kisi aur page par hain (like product detail), toh pehle Home page pr bhejo hash ke sath
        navigate(`/#${link.hashId}`);
      }
    } else {
      // Products link ke liye direct navigate karo naye page par
      navigate(link.href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Clicks back to home root */}
          <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={optimusLogo}
              alt="Optimus Marking"
              title="Optimus marking"
              draggable={false}
              className="h-10 md:h-12 w-auto select-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavLinkClick(link)}
                className={`text-foreground/70 hover:text-orange transition-colors font-display tracking-wider uppercase text-sm font-medium border-b-2 border-transparent hover:border-orange/30 pb-1 cursor-pointer bg-transparent outline-none ${
                  (link.isScroll && location.pathname === "/" && location.hash === `#${link.hashId}`) || 
                  (!link.isScroll && location.pathname === link.href)
                    ? "text-orange border-orange font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+919503729925"
              className="flex items-center gap-2 bg-orange text-accent-foreground px-5 py-2.5 rounded-sm text-sm font-semibold font-display hover:bg-navy hover:text-white transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-1 outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavLinkClick(link)}
                  className="block w-full text-left text-foreground/70 hover:text-orange transition-colors font-display tracking-wider uppercase text-sm py-2 font-medium bg-transparent outline-none"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+919503729925"
                className="flex items-center gap-2 bg-orange text-accent-foreground px-4 py-2.5 rounded-sm text-sm font-semibold font-display w-fit"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;