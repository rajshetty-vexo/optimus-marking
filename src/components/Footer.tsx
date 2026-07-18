import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Mail, Globe, Instagram, X, Phone, MapPin } from "lucide-react"; // ⚡ Added Phone and MapPin here
import optimusLogo from "@/assets/optimus-logo-white.png";
import iaidcLogo from "@/assets/Logo/iaidc-logo.jpeg"; 

const Footer = () => {
  return (
    <footer className="bg-[#1E1951] text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid Structure - Centered on mobile, Left-aligned on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/10 pb-12 text-center sm:text-left">
          
          {/* ── COLUMN 1: NOW CONTACT INFORMATION (INTERCHANGED) ── */}
<div className="flex flex-col items-center sm:items-start space-y-4">
  <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-1 font-display">
    Contact Us
  </h3>
  
  <div className="space-y-5 text-sm text-white/70 w-full flex flex-col">
    {/* Phone Row */}
    <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-2 sm:gap-3 group">
      <Phone size={16} className="shrink-0 text-white/50 sm:mt-0.5 group-hover:text-orange-500 transition-colors" />
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-white/40 text-[11px] uppercase tracking-wider leading-none mb-1">Phone</span>
        <a href="tel:+919503729925" className="text-white/90 hover:text-orange-500 transition-colors font-medium">
          +91 95037 29925
        </a>
      </div>
    </div>

    {/* Email Row */}
    <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-2 sm:gap-3 group">
      <Mail size={16} className="shrink-0 text-white/50 sm:mt-0.5 group-hover:text-orange-500 transition-colors" />
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-white/40 text-[11px] uppercase tracking-wider leading-none mb-1">Email</span>
        <a href="mailto:sales@optimusmarking.com" className="text-white/90 hover:text-orange-500 transition-colors">
          sales@optimusmarking.com
        </a>
      </div>
    </div>

    {/* Address/Location Row */}
    <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-2 sm:gap-3 group">
      <MapPin size={16} className="shrink-0 text-white/50 sm:mt-1 group-hover:text-orange-500 transition-colors" />
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-white/40 text-[11px] uppercase tracking-wider leading-none mb-1">Address</span>
        <p className="text-white/90 leading-relaxed text-xs sm:text-sm">
          Optimus Marking Systems Pvt Ltd<br />
          2, Vitthal Park, Manjari BK,<br />
          Pune-412307
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ── COLUMN 2: PRODUCTS RANGE (UNTOUCHED) ── */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/product-range#tij" className="hover:text-orange-500 transition-colors block">TIJ Technology</Link></li>
              <li><Link to="/product-range#laser" className="hover:text-orange-500 transition-colors block">Laser Systems</Link></li>
              <li><Link to="/product-range#dod" className="hover:text-orange-500 transition-colors block">DOD Technology</Link></li>
              <li><Link to="/product-range#label" className="hover:text-orange-500 transition-colors block">Labelling & Print and Apply</Link></li>
              <li><Link to="/product-range#consumables" className="hover:text-orange-500 transition-colors block">Consumables Range</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 3: SERVICES (UNTOUCHED) ── */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/services#amc" className="hover:text-orange-500 transition-colors block">Annual Maintenance Contracts</Link></li>
              <li><Link to="/services#ad-hoc" className="hover:text-orange-500 transition-colors block">Ad-hoc Visits</Link></li>
              <li><Link to="/services#flexipay" className="hover:text-orange-500 transition-colors block">FlexiPay Plans</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 4: SOLUTIONS & COMPANY (UNTOUCHED) ── */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4 font-display">
                Solutions
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><Link to="/solutions#standard-solution" className="hover:text-orange-500 transition-colors block">Standard Solution</Link></li>
                <li><Link to="/solutions#integrated-solution" className="hover:text-orange-500 transition-colors block">Integrated Solution</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-3 font-display">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><Link to="/company#about" className="hover:text-orange-500 transition-colors block">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* ── COLUMN 5: NOW BRAND LOGO & PARENT RELATION (INTERCHANGED) ── */}
          <div className="flex flex-col items-center sm:items-start justify-between space-y-8 lg:space-y-0">
            <div className="flex flex-col items-center sm:items-start">
              <Link to="/" className="block focus:outline-none" onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                <img
                  src={optimusLogo}
                  alt="Optimus Marking"
                  title="Optimus Marking Systems"
                  draggable={false}
                  className="h-14 w-auto object-contain mb-4 select-none rounded-md"
                />
              </Link>
              <p className="text-white/60 text-xs tracking-wide uppercase font-medium max-w-[250px]">
                Industrial Coding Marking & Labeling Solutions
              </p>
            </div>

            {/* "Part of iAIDC" - Nicely shifted & formatted */}
            <div className="pt-4 lg:pt-6 border-t border-white/5 w-full flex flex-col items-center sm:items-start">
              <span className="text-white/40 text-xs block font-display tracking-wider uppercase mb-2">
                Part of
              </span>
              <img
                src={iaidcLogo}
                alt="iAIDC Technologies"
                title="iAIDC Technologies Private Limited"
                draggable={false}
                className="h-12 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity select-none rounded-md bg-white px-3 py-1.5"
              />
            </div>
          </div>

        </div>

        {/* ── LOWER FOOTER BAR: COPYRIGHT & TRADEMARK DISCLAIMERS (UNTOUCHED) ── */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-between items-center text-xs text-white/40">
          
          <div className="max-w-2xl text-center sm:text-left leading-relaxed">
            <div>© {new Date().getFullYear()} Optimus Marking Systems Pvt Ltd. All rights reserved.</div>
            <p className="mt-1 text-white/30 text-[10px]">
              Disclaimer: All third-party product names, logos, machinery images, and trademarks referenced herein 
              remain the intellectual property of their respective owners and strategic global technology partners.
            </p>
          </div>

          {/* Social Platforms Block */}
          <div className="flex items-center gap-5 justify-center">
              <a href="tel:+919503729925" className="hover:text-white transition-colors p-1" aria-label="Phone">
              <Phone size={18} />
            </a>
            <a href="https://www.linkedin.com/company/optimus-marking-systems-private-limited/" className="hover:text-white transition-colors p-1" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com/@optimusmarkingsystem?si=s8ybXWP8lnB8ErLj" className="hover:text-white transition-colors p-1" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://www.instagram.com/optimusmarking/" className="hover:text-white transition-colors p-1" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/optimusmarking" className="hover:text-white transition-colors p-1" aria-label="X">
              <X size={18} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;