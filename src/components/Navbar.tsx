import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import optimusLogo from "@/assets/optimus-logo.svg";


const navLinks = [
  { label: "Home", href: "/", isScroll: true, hashId: "home" },
  {
    label: "Products",
    href: "/labelling-range",
    isScroll: false,
    hashId: "/labelling-range",
    dropdown: [
      { label: "CIJ",   href: "/labelling-range", isScroll: true, hashId: "cij" },
      { label: "Laser", href: "/labelling-range", isScroll: true, hashId: "laser" },
      { label: "TIJ",   href: "/labelling-range", isScroll: true, hashId: "tij" },
      { label: "Label", href: "/labelling-range", isScroll: true, hashId: "label" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    isScroll: false,
    dropdown: [
      { label: "Annual Maintenance\nContracts", href: "/services#amc",      isScroll: true, hashId: "amc" },
      { label: "Ad-hoc Visits",                href: "/services#ad-hoc",    isScroll: true, hashId: "ad-hoc" },
      { label: "FlexiPay",                     href: "/services#flexipay",  isScroll: true, hashId: "flexipay" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    isScroll: false,
    dropdown: [
      { label: "Standard Solution",   href: "/solutions#standard-solution",   isScroll: true, hashId: "standard-solution" },
      { label: "Integrated Solution", href: "/solutions#integrated-solution", isScroll: true, hashId: "integrated-solution"},
    ],
  },
  { label: "Company", href: "/",  isScroll: true,  hashId: "about"   },
  { label: "Contact", href: "/",  isScroll: true,  hashId: "contact" },
];

// ── Type ─────────────────────────────────────────────────────────────────────
type NavLink = {
  label: string;
  href: string;
  isScroll: boolean;
  hashId?: string;
  dropdown?: NavLink[];
};

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location  = useLocation();
  const navigate  = useNavigate();

  // Navigate logic
const handleNavLinkClick = (link: any) => {
    setIsOpen(false); 
    if (link.isScroll && link.hashId) {
    
      const isSamePage = 
        location.pathname === link.href || 
        (link.href === "/" && location.pathname === "/");

      if (isSamePage) {
      
        const element = document.getElementById(link.hashId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        
        navigate(link.href);
                setTimeout(() => {
          const element = document.getElementById(link.hashId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    } else {
  
      navigate(link.href);
    }
  };
  // ── Active link check ────────────────────────────────────────────────────
  const isActive = (link: NavLink) =>
    (link.isScroll  && location.pathname === "/" && location.hash === `#${link.hashId}`) ||
    (!link.isScroll && location.pathname === link.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-white/20 shadow-lg rounded-b-2xl overflow-visible backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.6rem]">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={optimusLogo}
              alt="Optimus Marking"
              title="Optimus marking"
              draggable={false}
              className="h-10 md:h-12 w-auto select-none transition-all duration-300 hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.9)]"
            />
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative flex items-center h-full cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Trigger button */}
                    <button
                      onClick={() => handleNavLinkClick(link)}
                      className={`flex items-center gap-1 text-sm font-medium font-display tracking-wider uppercase py-6 bg-transparent outline-none transition-colors
                        ${isActive(link) ? "text-orange font-semibold" : "text-[#1E1951] hover:text-orange"}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`
                            absolute top-[calc(100%-10px)] pt-4 pb-2 z-50
                            bg-white ring-1 ring-white/10 rounded-3xl shadow-2xl
                            border border-gray-200 border-t-white overflow-hidden
                            ${link.label === "Services" || link.label === "Solutions"
                              ? "-left-[65px] w-[220px]"
                              : "-left-[35px] w-40"}
                          `}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" />
                          <div className="relative flex flex-col items-center gap-1 px-4 text-center">
                            {link.dropdown.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() => handleNavLinkClick(sub)}
                                className="w-full text-[#1E1951] hover:text-orange py-1.5 text-sm whitespace-pre-line leading-tight bg-transparent outline-none transition-colors"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Plain link
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavLinkClick(link)}
                  className={`text-sm font-medium font-display tracking-wider uppercase bg-transparent outline-none transition-colors border-b-2 border-transparent pb-1 cursor-pointer
                    ${isActive(link)
                      ? "text-orange border-orange font-semibold"
                      : "text-[#1E1951] hover:text-orange hover:border-orange/30"}`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* ── Desktop Call button ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919503729925"
              className="group flex items-center gap-2 text-[#1E1951] border-[3px] border-[#1E1951]
                hover:bg-[rgb(237,105,29)] hover:text-white hover:border-[rgb(237,105,29)]
                px-4 py-2.5 rounded-3xl text-sm font-semibold font-display tracking-wide
                transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Phone className="w-4 h-4 translate-x-0.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-125" />
              Call Now
            </a>
          </div>

          {/* ── Mobile toggle ───────────────────────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-1 outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => handleNavLinkClick(link)}
                    className="flex items-center w-full text-left text-[#1E1951] hover:text-orange transition-colors font-display tracking-wider uppercase text-sm py-2 font-medium bg-transparent outline-none"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </button>

                  {/* Mobile sub-links */}
                  {link.dropdown && (
                    <div className="pl-4 border-l border-gray-100 ml-1 space-y-1">
                      {link.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavLinkClick(sub)}
                          className="block w-full text-left text-[#1E1951]/90 hover:text-orange text-sm py-1.5 whitespace-pre-line leading-snug bg-transparent outline-none transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="tel:+919503729925"
                className="group flex items-center gap-2 justify-center text-[#1E1951] border-[3px] border-[#1E1951]
                  hover:bg-[rgb(237,105,29)] hover:text-white hover:border-[rgb(237,105,29)]
                  px-4 py-2.5 mt-4 rounded-3xl text-sm font-semibold font-display tracking-wide
                  transition-all duration-300"
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