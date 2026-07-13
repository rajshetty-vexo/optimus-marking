import { motion } from "framer-motion";
import mahindraLogo from "/src/assets/client-logo/mahindra.png";
import videoconLogo from "/src/assets/client-logo/videocon.png";
import pipeLogo from "/src/assets/client-logo/pipe_logo.png";
import firstcryLogo from "/src/assets/client-logo/firstcry.png";
import mercedesLogo from "/src/assets/client-logo/mercedes-benz.png";
import tataLogo from "/src/assets/client-logo/tata.png";
import seilerLogo from "/src/assets/client-logo/seiler.png";
import grofersLogo from "/src/assets/client-logo/grofers.png";
import bakerLogo from "/src/assets/client-logo/baker.png";
import armacellLogo from "/src/assets/client-logo/armacell.png";
import ferreroLogo from "/src/assets/client-logo/ferrero.png";
import honeywellLogo from "/src/assets/client-logo/honeywell.png";

const clients = [
  { name: "Mahindra", logo: mahindraLogo },
  { name: "Videocon d2h", logo: videoconLogo, xl: true },
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

const Clients = () => {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 aspect-[0.866] hexagon-clip bg-muted/40 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
            Our Valuable Clients
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Shading gradients */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* ⚡ FIXED ANIMATION WRAPPER: Group hover lagaya hai aur standard raw syntax fix kiya hai */}
        <div
          className="flex items-center gap-16 group cursor-pointer"
          style={{
            animation: "scroll-logos 30s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`w-auto object-contain select-none pointer-events-none ${
                  client.xl ? "h-28 max-w-[220px]" : client.large ? "h-20 max-w-[220px]" : "h-20 max-w-[160px]"
                }`}
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ⚡ Perfectly native injection selectors without layout spaces */}
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Jab user div par hover karega ya click block trigger karega tab state pause hogi */
        .group:hover, .group:active {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;