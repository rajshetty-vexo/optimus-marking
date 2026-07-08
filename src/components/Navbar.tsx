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
      { label: "DOD",   href: "/labelling-range", isScroll: true, hashId: "dod" },
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
  { label: "Company", href: "/company",  isScroll: true,  hashId: "about"   },
  { label: "Contact", href: "/contact",  isScroll: true,  hashId: "contact" },
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

          {/* ── DESKTOP NAVIGATION LINKS MATRIX ─────────────────────────────────── */}
          <div className="hidden xl:flex items-stretch gap-8 h-full">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative group flex items-center h-full">
                    <button
                      onClick={() => handleNavLinkClick(link)}
                      className={`flex items-center gap-1 text-sm font-medium font-display tracking-wider uppercase h-full bg-transparent outline-none transition-colors border-b-2 border-transparent cursor-pointer ${
                        isActive(link) ? "text-orange font-semibold" : "text-[#1E1951] hover:text-orange"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>

                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-3xl py-4 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col gap-1">
                      {link.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavLinkClick(sub)}
                          className="block w-full text-center px-4 py-2 text-sm font-medium font-body text-[#1E1951]/80 hover:text-orange hover:bg-orange/5 whitespace-pre-line leading-snug bg-transparent outline-none transition-all cursor-pointer"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.label} className="flex items-center h-full">
                  <button
                    onClick={() => handleNavLinkClick(link)}
                    className={`text-sm font-medium font-display tracking-wider uppercase h-full bg-transparent outline-none transition-colors border-b-2 border-transparent cursor-pointer flex items-center ${
                      isActive(link) ? "text-orange border-orange font-semibold" : "text-[#1E1951] hover:text-orange"
                    }`}
                  >
                    {link.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Desktop Call button ─────────────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:+919503729925"
              className="group flex items-center gap-2 text-[#1E1951] border-[3px] border-[#1E1951] hover:bg-[rgb(237,105,29)] hover:text-white hover:border-[rgb(237,105,29)] px-4 py-2.5 rounded-3xl text-sm font-semibold font-display tracking-wide transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Phone className="w-4 h-4 translate-x-0.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-125" />
              Call Now
            </a>
          </div>

          {/* ── Tablet/Mobile toggle ───────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1 outline-none xl:hidden"
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
            className="bg-white border-t border-border overflow-hidden"
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