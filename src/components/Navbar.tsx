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
      { label: "TIJ",   href: "/labelling-range", isScroll: true, hashId: "tij" },
      { label: "Laser", href: "/labelling-range", isScroll: true, hashId: "laser" },
      { label: "DOD",   href: "/labelling-range", isScroll: true, hashId: "dod" },
      { label: "Labelling & Print and apply", href: "/labelling-range", isScroll: true, hashId: "label" },
      { label: "Consumables", href: "/labelling-range", isScroll: true, hashId: "consumables" },
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

type NavLink = {
  label: string;
  href: string;
  isScroll: boolean;
  hashId?: string;
  dropdown?: NavLink[];
};

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

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

  const isActive = (link: NavLink) =>
    (link.isScroll  && location.pathname === "/" && location.hash === `#${link.hashId}`) ||
    (!link.isScroll && location.pathname === link.href);

  return (
    /* 🛠️ FIXED MAIN CONTAINER: Z-index system and placement forced to top */
    <div className="fixed top-4 left-0 right-0 z-[99999] w-full flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none isolate">
      {/* 🛠️ DYNAMIC RADIUS: Jab menu open hoga tab rounded-3xl ho jayega taaki corners scale down ho sakein */}
      <nav className={`w-full max-w-7xl bg-white shadow-[0_10px_35px_rgba(30,25,81,0.15)] border border-gray-100/80 overflow-visible pointer-events-auto transition-all duration-300 ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}>
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.8rem]">

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
                className="h-9 md:h-11 w-auto select-none transition-all duration-300"
              />
            </Link>
{/* ── DESKTOP NAVIGATION LINKS MATRIX ─────────────────────────────────── */}
<div className="hidden xl:flex items-stretch gap-8 h-full">
  {navLinks.map((link) => {
    if (link.dropdown) {
      return (
        /* 🛠️ FIX: 'relative' div ensure karega ki dropdown isi text ke center ke hisab se position ho */
        <div key={link.label} className="relative group flex items-center h-full">
          <button
            onClick={() => handleNavLinkClick(link)}
            className={`flex items-center gap-1 text-xs font-bold font-display tracking-wider uppercase h-full bg-transparent outline-none transition-colors border-b-2 border-transparent cursor-pointer ${
              isActive(link) ? "text-orange" : "text-[#1E1951] hover:text-orange"
            }`}
          >
            {link.label}
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>

          {/* 🛠️ ULTRA FIX: top-[100%] left-1/2 -translate-x-1/2 se dropdown box ekdum bichmai (center) aayega */}
          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-white shadow-[0_15px_35px_rgba(30,25,81,0.15)] border border-gray-100 rounded-2xl py-3 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col gap-0.5">
            {link.dropdown.map((sub) => (
              <button
                key={sub.label}
                onClick={() => handleNavLinkClick(sub)}
                /* 🛠️ FIX: 'text-center' se text box ke bilkul center mein dikhega */
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold font-body text-[#1E1951]/80 hover:text-orange hover:bg-orange/5 whitespace-pre-line leading-snug bg-transparent outline-none transition-all cursor-pointer"
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
          className={`text-xs font-bold font-display tracking-wider uppercase h-full bg-transparent outline-none transition-colors border-b-2 border-transparent cursor-pointer flex items-center ${
            isActive(link) ? "text-orange border-orange" : "text-[#1E1951] hover:text-orange"
          }`}
        >
          {link.label}
        </button>
      </div>
    );
  })}
</div>

            {/* Call Now Desktop */}
            <div className="hidden xl:flex items-center">
              <a
                href="tel:+919503729925"
                className="group flex items-center gap-2 text-white bg-[#1E1951] hover:bg-orange px-5 py-2.5 rounded-full text-xs font-bold font-display tracking-wider uppercase transition-all duration-300 shadow-[0_4px_12px_rgba(30,25,81,0.2)]"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>

            {/* ── Mobile Hamburger Trigger ───────────────────────────────────────────── */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1951] p-2 outline-none xl:hidden hover:bg-gray-100 rounded-full transition-colors relative z-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER CONTAINER FIX ────────────────────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-white border-t border-gray-100 overflow-hidden rounded-b-3xl"
            >
              {/* Added responsive scrolling container just in case links exceed smaller mobile viewports */}
              <div className="px-6 py-5 space-y-2 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-gray-50/50 pb-1 last:border-none">
                    <button
                      onClick={() => handleNavLinkClick(link)}
                      className="flex items-center justify-between w-full text-left text-[#1E1951] hover:text-orange transition-colors font-display font-bold tracking-wider uppercase text-xs py-2.5 bg-transparent outline-none"
                    >
                      <span>{link.label}</span>
                      {link.dropdown && <ChevronDown className="w-3.5 h-3.5 text-[#1E1951]/60" />}
                    </button>

                    {/* Mobile Dropdown Sublinks */}
                    {link.dropdown && (
                      <div className="pl-4 border-l-2 border-gray-100 ml-1 mb-2 mt-1 space-y-2">
                        {link.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNavLinkClick(sub)}
                            className="block w-full text-left text-[#1E1951]/80 hover:text-orange text-xs py-1 whitespace-pre-line leading-tight bg-transparent outline-none transition-colors font-semibold"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Call Now Mobile Pill */}
                <a
                  href="tel:+919503729925"
                  className="group flex items-center gap-2 justify-center text-white bg-[#1E1951] hover:bg-orange
                    px-4 py-3 mt-4 rounded-full text-xs font-bold font-display tracking-wider uppercase
                    transition-all duration-300 shadow-md w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;