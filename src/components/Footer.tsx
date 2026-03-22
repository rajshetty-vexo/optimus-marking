import optimusLogo from "@/assets/optimus-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-orange/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src={optimusLogo} alt="Optimus Marking" className="h-10 w-auto mb-3" />
            <p className="text-primary-foreground/40 text-sm">
              Industrial Coding & Marking Solutions
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["Products", "Services", "Partners", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/50 hover:text-orange text-sm font-display tracking-wider uppercase transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-primary-foreground/30 text-sm md:text-right">
            <a href="https://www.optimusmarking.com" className="hover:text-orange transition-colors">
              www.optimusmarking.com
            </a>
            <div className="mt-1">© {new Date().getFullYear()} Optimus Marking Systems Pvt Ltd</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
