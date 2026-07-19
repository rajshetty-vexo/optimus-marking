import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import optimusLogo from "@/assets/optimus-logo.svg";

// ── Nav Data ────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "/", hashId: "home" },
  {
    label: "Products",
    href: "/product-range",
    dropdown: [
      { label: "TIJ",                        href: "/product-range", hashId: "tij" },
      { label: "Laser",                       href: "/product-range", hashId: "laser" },
      { label: "DOD",                         href: "/product-range", hashId: "dod" },
      { label: "Labelling & Print and Apply", href: "/product-range", hashId: "label" },
      { label: "Consumables",                 href: "/product-range", hashId: "consumables" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Annual Maintenance Contracts", href: "/services", hashId: "amc" },
      { label: "Ad-hoc Visits",               href: "/services", hashId: "ad-hoc" },
      { label: "FlexiPay",                    href: "/services", hashId: "flexipay" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Standard Solution",   href: "/solutions", hashId: "standard-solution" },
      { label: "Integrated Solution", href: "/solutions", hashId: "integrated-solution" },
    ],
  },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

// ── Types ───────────────────────────────────────────────────────────────────
type SubLink = { label: string; href: string; hashId?: string };
type NavItem = { label: string; href: string; hashId?: string; dropdown?: SubLink[] };

// ── Component ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [accordion,  setAccordion]    = useState<string | null>(null);
  const location  = useLocation();
  const navigate  = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setAccordion(null);
  }, [location.pathname]);

  // ── Navigation handler ───────────────────────────────────────────────────
  const go = (href: string, hashId?: string) => {
    setMobileOpen(false);
    setAccordion(null);

    const samePage = location.pathname === href || (href === "/" && location.pathname === "/");

    if (hashId) {
      if (samePage) {
        document.getElementById(hashId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(href);
        setTimeout(() => {
          document.getElementById(hashId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 350);
      }
    } else {
      navigate(href);
    }
  };

  const isActive = (item: NavItem) => location.pathname === item.href;

  // ── Shared dot style for active indicator ────────────────────────────────
  const desktopBtn = (active: boolean) =>
    `relative flex items-center gap-1 h-full text-[11px] font-bold font-display tracking-widest uppercase transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer
    ${active ? "text-orange" : "text-[#1E1951] hover:text-orange"}`;

  return (
    <div className="fixed top-4 inset-x-0 z-[99999] flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">

      {/* ── Capsule nav shell ─────────────────────────────────────────────── */}
      <nav
        className="w-full max-w-7xl pointer-events-auto bg-white border border-gray-100/80
          shadow-[0_8px_32px_rgba(30,25,81,0.12)] transition-[border-radius] duration-300"
        style={{ borderRadius: mobileOpen ? "24px" : "50px",    overflow: mobileOpen ? "hidden" : "visible" }}
      >

        {/* ── Top bar ────────────────────────────────────────────────────── */}
        <div className="px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.6rem]">

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-shrink-0">
              <img src={optimusLogo} alt="Optimus Marking" draggable={false}
                className="h-9 md:h-10 w-auto select-none" />
            </Link>

            {/* ── Desktop links ─────────────────────────────────────────── */}
            <div className="hidden xl:flex items-stretch h-full gap-7">
              {navLinks.map((item) =>
                item.dropdown ? (
                  // Dropdown item
                  <div key={item.label} className="relative group flex items-center h-full">
                    <button onClick={() => go(item.href)} className={desktopBtn(isActive(item))}>
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                 {/* Dropdown panel */}
<div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2
  bg-white border border-gray-100 rounded-2xl py-2 min-w-[210px]
  shadow-[0_12px_32px_rgba(30,25,81,0.14)]
  opacity-0 invisible translate-y-1
  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
  transition-all duration-200 ease-out z-50 flex flex-col">
  {item.dropdown.map((sub) => (
    <button key={sub.label} onClick={() => go(sub.href, sub.hashId)}
      className="w-full text-center px-5 py-2.5 text-[13px] font-semibold text-[#1E1951]/75
        hover:text-orange hover:bg-orange/5 transition-colors duration-150
        bg-transparent border-none outline-none cursor-pointer">
      {sub.label}
    </button>
  ))}
</div>
                  </div>
                ) : (
                  // Plain link
                  <div key={item.label} className="flex items-center h-full">
                    <button onClick={() => go(item.href, item.hashId)} className={desktopBtn(isActive(item))}>
                      {item.label}
                      {isActive(item) && (
                        <span className="absolute bottom-4 left-0 right-0 h-[2px] bg-orange rounded-full" />
                      )}
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Call Now — desktop */}
            <a href="tel:+919503729925"
              className="hidden xl:flex items-center gap-2 bg-[#1E1951] hover:bg-orange
                text-white text-[11px] font-bold font-display tracking-widest uppercase
                px-5 py-2.5 rounded-full transition-colors duration-250
                shadow-[0_4px_14px_rgba(30,25,81,0.18)]">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            {/* Hamburger — mobile */}
            <button onClick={() => { setMobileOpen(!mobileOpen); setAccordion(null); }}
              className="xl:hidden p-2 text-[#1E1951] hover:bg-gray-100 rounded-full transition-colors outline-none">
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              {/* <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.span key="x"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <X className="w-6 h-6" />
                    </motion.span>
                  : <motion.span key="menu"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <Menu className="w-6 h-6" />
                    </motion.span>
                }
              </AnimatePresence> */}
            </button>

          </div>
        </div>

        {/* ── Mobile drawer ─────────────────────────────────────────────── */}
        <AnimatePresence initial={false}>
   {mobileOpen && (
 <motion.div
  ref={drawerRef}
  key="drawer"
  initial={{ height: 0 }}
  animate={{ height: "auto" }}
  exit={{ height: 0 }}
  transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
  className="border-t border-gray-100 overflow-hidden rounded-b-[24px]"
>

              <div className="px-5 pt-3 pb-5 space-y-0.5 max-h-[76vh] overflow-y-auto">

                {navLinks.map((item) => (
                  <div key={item.label} className="border-b border-gray-100/70 last:border-none">

                    {/* Row button */}
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          setAccordion(accordion === item.label ? null : item.label);
                        } else {
                          go(item.href, item.hashId);
                        }
                      }}
                      className="flex items-center justify-between w-full py-3 text-left
                        text-[11px] font-bold font-display tracking-widest uppercase
                        text-[#1E1951] hover:text-orange transition-colors duration-150
                        bg-transparent border-none outline-none cursor-pointer">
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <motion.span
                          animate={{ rotate: accordion === item.label ? 180 : 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}>
                          <ChevronDown className="w-4 h-4 text-[#1E1951]/50" />
                        </motion.span>
                      )}
                    </button>

                    {/* Accordion sub-links */}
                    <AnimatePresence initial={false}>
                      {item.dropdown && accordion === item.label && (
                        <motion.div
                          key="sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden">
                          <div className="ml-1 pl-4 border-l-2 border-orange/25 mb-3 mt-0.5 flex flex-col gap-0.5">
                            {item.dropdown.map((sub) => (
                              <button key={sub.label}
                                onClick={() => go(sub.href, sub.hashId)}
                                className="w-full text-left py-2 text-[12px] font-semibold
                                  text-[#1E1951]/65 hover:text-orange transition-colors duration-150
                                  bg-transparent border-none outline-none cursor-pointer">
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                ))}

                {/* Call Now — mobile */}
                <a href="tel:+919503729925"
                  className="flex items-center justify-center gap-2 mt-4 w-full
                    bg-[#1E1951] hover:bg-orange text-white
                    text-[11px] font-bold font-display tracking-widest uppercase
                    py-3 rounded-full transition-colors duration-250 shadow-md">
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