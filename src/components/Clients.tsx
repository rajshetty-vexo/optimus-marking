import { motion } from "framer-motion";

import mahindraLogo from "../assets/clients-logo/mahindra.png";
// import videoconLogo from "../assets/clients-logo/videocon.png";
import pipeLogo from "../assets/clients-logo/pipe_logo.png";
import firstcryLogo from "../assets/clients-logo/firstcry.png";
import mercedesLogo from "../assets/clients-logo/mercedes-benz.png";
import tataLogo from "../assets/clients-logo/tata.png";
import seilerLogo from "../assets/clients-logo/seiler.png";
import grofersLogo from "../assets/clients-logo/grofers.png";
import bakerLogo from "../assets/clients-logo/baker.png";
import armacellLogo from "../assets/clients-logo/armacell.png";
import ferreroLogo from "../assets/clients-logo/ferrero.png";
import honeywellLogo from "../assets/clients-logo/honeywell.png";
import pricolLogo from "../assets/clients-logo/pricol.png";
import hyosungLogo from "../assets/clients-logo/hyosung.png";
import ufiLogo from "../assets/clients-logo/ufi_filters.png";
import wurthLogo from "../assets/clients-logo/wurth.png";
import tbkLogo from "../assets/clients-logo/tbk.png";
import brandenburgLogo from "../assets/clients-logo/brandenburg.png";
import schaefflerLogo from "../assets/clients-logo/schaeffler.png";
import bobstLogo from "../assets/clients-logo/bobst.png";
// import hirschvogelLogo from "../assets/clients-logo/hirschvogel.png";
import elWeighLogo from "../assets/clients-logo/el_weigh.png";
import swarovskiLogo from "../assets/clients-logo/swarovski.png";

const rowOne = [
  { name: "Mahindra", logo: mahindraLogo },
  // { name: "Videocon d2h", logo: videoconLogo, xl: true },
  { name: "Future Pipe Industries", logo: pipeLogo },
  { name: "FirstCry", logo: firstcryLogo },
  { name: "Mercedes-Benz", logo: mercedesLogo, xl: true },
  { name: "Tata Technologies", logo: tataLogo },
  { name: "Seiler Garepa", logo: seilerLogo },
  { name: "Grofers", logo: grofersLogo, large: true },
  { name: "Baker", logo: bakerLogo, xl: true },
  { name: "Armacell", logo: armacellLogo },
  { name: "Ferrero", logo: ferreroLogo, xl: true },
  { name: "Honeywell", logo: honeywellLogo, xl: true },
];

const rowTwo = [
  { name: "Pricol", logo: pricolLogo },
  { name: "Hyosung", logo: hyosungLogo },
  { name: "UFI Filters", logo: ufiLogo },
  { name: "Würth", logo: wurthLogo, large: true },
  { name: "TBK", logo: tbkLogo, large: true },
  { name: "Brandenburg", logo: brandenburgLogo, large: true },
  { name: "Schaeffler", logo: schaefflerLogo, large: true },
  { name: "Bobst", logo: bobstLogo, large: true },
  // { name: "Hirschvogel", logo: hirschvogelLogo, large: true },
  { name: "El-Weigh", logo: elWeighLogo },
  { name: "Swarovski", logo: swarovskiLogo },
];

const LaurelBranch = ({ flip = false }: { flip?: boolean }) => {
  if (flip) {
    return (
      <svg
        className="w-auto h-[84px] md:h-[164px]"
        viewBox="0 0 72 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path d="M28.4218 139.219C32.2443 141.272 42.0132 143.257 50.5088 134.776C44.5627 131.582 31.8207 128 28.4218 139.219Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M31.9201 128.495C27.6785 127.581 18.8971 123.018 17.7044 112.074C24.3024 113.495 36.3828 118.77 31.9201 128.495Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M37.7137 107.953C33.3758 108.047 23.7682 105.302 20.0415 93.5693C26.7894 93.4227 39.7709 96.0942 37.7137 107.953Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M36.553 115.896C40.6912 117.201 50.6591 117.331 57.4245 107.414C50.9872 105.385 37.8008 104.24 36.553 115.896Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M40.6585 93.6066C43.5232 94.0073 50.0608 93.2074 53.2932 86.8026C48.8369 86.1794 40.0711 86.6677 40.6585 93.6066Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M40.847 82.5548C40.7316 79.7041 38.7402 73.5027 31.6981 71.5034C31.8776 75.9379 33.9587 84.3566 40.847 82.5548Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M41.9822 71.5596C44.8165 71.2322 50.8523 68.7846 52.3216 61.6131C47.9127 62.1224 39.6725 64.8247 41.9822 71.5596Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M40.1556 58.3518C39.6642 55.5413 36.8705 49.6577 29.6258 48.607C30.3901 52.9789 33.566 61.0485 40.1556 58.3518Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M39.2794 47.6023C42.1093 47.965 48.5563 47.0382 51.7045 40.4293C47.3023 39.8651 38.6543 40.5098 39.2794 47.6023Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M36.4576 31.4265C34.7803 29.1185 29.6835 25.0633 22.7151 27.306C25.3243 30.8962 31.7256 36.7466 36.4576 31.4265Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M13.1483 158.573C29.0992 145.626 55.2132 98.3617 32.0615 12.874" stroke="#979797" strokeWidth="2.40589" strokeLinecap="round"/>
          <path d="M36.7045 28.3919C39.3888 27.4251 44.705 23.6621 44.4955 16.3447C40.3199 17.8486 32.9159 22.3636 36.7045 28.3919Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
          <path d="M32.3759 13.7268C29.6617 13.6789 23.7337 11.1309 21.7347 1.32204C25.9568 1.39653 33.9959 3.98177 32.3759 13.7268Z" fill="#979797" stroke="#979797" strokeWidth="1.20295" strokeLinecap="round"/>
        </g>
      </svg>
    );
  }

  return (
    <svg
      className="w-auto h-[88px] md:h-[168px]"
      viewBox="0 0 77 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path d="M46.9868 142.48C43.1248 144.665 33.1818 146.914 24.3059 138.433C30.3134 135.035 43.2601 131.086 46.9868 142.48Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M43.1713 131.595C47.4874 130.566 56.3629 125.703 57.3368 114.487C50.623 116.089 38.3905 121.753 43.1713 131.595Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M36.7869 110.723C41.224 110.722 50.985 107.7 54.532 95.6214C47.6298 95.623 34.4177 98.6455 36.7869 110.723Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M38.1502 118.819C33.9486 120.245 23.7606 120.601 16.6214 110.614C23.1572 108.395 36.613 106.93 38.1502 118.819Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M33.4558 96.1212C30.5359 96.595 23.8341 95.9239 20.3857 89.4483C24.9277 88.7112 33.9006 89.0138 33.4558 96.1212Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M33.0137 84.826C33.0678 81.9089 34.9646 75.5241 42.1194 73.3221C42.0354 77.8599 40.0966 86.5136 33.0137 84.826Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M31.6051 73.6114C28.7001 73.3402 22.4743 70.9732 20.8113 63.6742C25.3302 64.096 33.8155 66.6739 31.6051 73.6114Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M33.1769 60.0663C33.6162 57.1819 36.3405 51.1039 43.7237 49.8672C43.0404 54.3541 39.9745 62.6755 33.1769 60.0663Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M33.8323 49.0572C30.9472 49.4916 24.3351 48.6886 20.9682 42.0025C25.4562 41.3269 34.3123 41.792 33.8323 49.0572Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M36.3539 32.4555C38.017 30.0582 43.1369 25.7979 50.3116 27.9345C47.7245 31.6635 41.3111 37.7884 36.3539 32.4555Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M63.038 161.925C46.4397 149.046 18.681 101.31 40.4331 13.3896" stroke="#979797" strokeWidth="2.46033" strokeLinecap="round"/>
        <path d="M36.0334 29.3588C33.2673 28.4306 27.7477 24.7026 27.7978 17.2167C32.1006 18.6607 39.7715 23.1106 36.0334 29.3588Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
        <path d="M40.1298 14.2683C42.9036 14.1584 48.9072 11.4204 50.7309 1.34715C46.416 1.51802 38.255 4.34146 40.1298 14.2683Z" fill="#979797" stroke="#979797" strokeWidth="1.23016" strokeLinecap="round"/>
      </g>
    </svg>
  );
};

const LogoRow = ({
  clients,
  direction = "left",
  speed = 35,
}: {
  clients: { name: string; logo: string; xl?: boolean; large?: boolean }[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const doubled = [...clients, ...clients];
  const animName = direction === "left" ? "scroll-left" : "scroll-right";
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div
        className="flex items-center gap-10 lg:gap-16 group cursor-pointer"
        style={{ animation: `${animName} ${speed}s linear infinite`, width: "max-content" }}
      >
        {doubled.map((client, index) => (
          <div key={`${client.name}-${index}`} className="flex items-center justify-center flex-shrink-0">
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className={`w-auto object-contain select-none pointer-events-none ${
                client.xl ? "h-16 lg:h-28 max-w-[160px] lg:max-w-[220px]"
                : client.large ? "h-12 lg:h-20 max-w-[160px] lg:max-w-[220px]"
                : "h-12 lg:h-20 max-w-[100px] lg:max-w-[160px]"
              }`}
              title={client.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="py-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
            Trusted by
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-[#1E1951]">
            Our Valuable Clients
          </h2>
        </motion.div>
      </div>

      {/* Carousel with laurel leaves flanking */}
      <div className="flex items-center w-full">

        {/* Left Laurel */}
        <div className="flex-shrink-0 pl-2 lg:pl-48">
          <LaurelBranch />
        </div>

        {/* Logo Rows */}
        <div className="flex-1 min-w-0">
          <LogoRow clients={rowOne} direction="left" speed={35} />
          <div className="mt-2 lg:mt-4">
            <LogoRow clients={rowTwo} direction="right" speed={35} />
          </div>
        </div>

        {/* Right Laurel */}
        <div className="flex-shrink-0 pr-2 lg:pr-48">
          <LaurelBranch flip />
        </div>

      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .group:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;