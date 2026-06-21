import { motion } from "framer-motion";
import { Wrench, Settings, Truck, GraduationCap, HandCoins, Headphones} from "lucide-react";
import optimuslogo from "../assets/optimus-logo.svg"
const services = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description: "Professional installation and setup of all printing marking and labelling equipment at your facility.",
  },
  {
    icon: Settings,
    title: "Annual Maintenance Contracts",
    description: "Preventive maintenance programs to maximize uptime and equipment longevity.",
  },
  {
    icon: Truck,
    title: "Spares & Consumables",
    description: "Genuine spare parts and consumables with pan-India delivery.",
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description: "Comprehensive training programs for your operators to ensure optimal equipment performance.",
  },
  {
    icon: HandCoins,
    title: "Rental and Pay Per Code Options",
    description: "Flexible rental plans and cost-effective pay-per-print models tailored for your production scale.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 expert technical support and remote diagnostics for all your equipment.",
  },
];


interface HexagonCardProps {
  icon?: any;
  title?: string;
  description?: string;
  delay?: number;
  isCenter?: boolean;
}  

const HexagonCard = ({ icon: Icon, title, description, delay = 0, isCenter = false }:HexagonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="hex-wrapper">

      {isCenter ? (
        /* Center: border wrap with white bg */
        <div className="hex-border-wrap">
          <div className="hex-inner hex-center">
            <div className="hex-content">
              <div className="center-content">
                <img src={optimuslogo} alt="Optimus Marking" className="center-logo-img"/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Service cards: no border wrap, just plain hex */
        <div className="hex-inner hex-service">
          <div className="hex-content">
            <div className="service-content">
              {Icon && <Icon className="service-icon" />}
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{description}</p>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-layout">

        {/* LEFT: Text content - desktop only shows here */}
        <motion.div
          className="services-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What Services Do We Offer</span>
          <h2 className="section-title">Holistic Service Approach</h2>
          <p className="section-subtitle">
            From initial consultation to ongoing maintenance, we provide end-to-end support
            for all your industrial printing marking & labeling needs across India.
          </p>
          <div className="pan-india-badge">
            <div className="badge-hex">✓</div>
            <div>
              <div className="badge-title">Pan-India Coverage</div>
              <div className="badge-sub">Service network across all major industrial hubs</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Hexagon flower */}
        <div className="hex-flower">
          <div className="hex-row hex-row-top">
            <HexagonCard {...services[0]} delay={0.1} />
            <HexagonCard {...services[1]} delay={0.2} />
          </div>
          <div className="hex-row hex-row-mid">
            <HexagonCard {...services[2]} delay={0.3} />
            <HexagonCard isCenter={true} delay={0} />
            <HexagonCard {...services[3]} delay={0.4} />
          </div>
          <div className="hex-row hex-row-bot">
            <HexagonCard {...services[4]} delay={0.5} />
            <HexagonCard {...services[5]} delay={0.6} />
          </div>
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 80px 24px;
          background: #f4f4f6;
          overflow: hidden;
        }

        .services-layout {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .services-text {
          flex: 1 1 450px;
          min-width: 320px;
        }

        .section-label {
          color: #FF6B2B;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .section-title {
          margin-top: 12px;
          font-size: clamp(32px, 3.5vw, 42px);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.2;
          white-space: normal;
          max-w: 100%;
        }

        .section-subtitle {
          margin-top: 14px;
          color: #555;
          line-height: 1.7;
          font-size: 14px;
        }

        .pan-india-badge {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .badge-hex {
          width: 48px;
          height: 55px;
          background: #1a1a2e;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF6B2B;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .badge-title {
          font-weight: 700;
          color: #1a1a2e;
          font-size: 14px;
        }

        .badge-sub {
          font-size: 12px;
          color: #777;
          margin-top: 2px;
        }

        .hex-flower {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hex-row {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .hex-row-top {
          margin-bottom: -18px;
          position: relative;
          z-index: 1;
        }

        .hex-row-mid {
          position: relative;
          z-index: 2;
        }

        .hex-row-bot {
          margin-top: -18px;
          position: relative;
          z-index: 1;
        }

        .hex-wrapper {
          width: 200px;
          height: 231px;
          flex-shrink: 0;
        }

        /* ── Service hexagons: no border ── */
        .hex-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hex-service {
          background: #ffffff;
        }

        .hex-service:hover {
          transform: scale(1.04);
          transition: transform 0.3s ease;
        }

        /* ── Center hexagon: navy border + white bg ── */
        .hex-border-wrap {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: #ed691d;
          padding: 1px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hex-center {
          background: #ffffff;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          width: 100%;
          height: 100%;
        }

        .center-logo-img {
          width: 80%;
          height: auto;
          object-fit: contain;
        }

        .hex-content {
          width: 68%;
          text-align: center;
        }

        .service-icon {
          width: 26px;
          height: 26px;
          color: #FF6B2B;
          margin: 0 auto 8px auto;
          display: block;
        }

        .service-title {
          font-size: 11.5px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 6px;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .service-desc {
          font-size: 10px;
          color: #666;
          line-height: 1.5;
        }

        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 900px) {
          .services-layout {
            flex-direction: column;
            gap: 32px;
          }
          .services-text {
            flex: none;
            width: 100%;
            text-align: center;
          }
          .pan-india-badge {
            justify-content: center;
          }
        }

        @media (max-width: 680px) {
          .hex-wrapper { width: 130px; height: 150px; }
          .hex-row { gap: 10px; }
          .hex-row-top { margin-bottom: -12px; }
          .hex-row-bot { margin-top: -12px; }
          .service-icon { width: 18px; height: 18px; margin-bottom: 5px; }
          .service-title { font-size: 8px; }
          .service-desc { font-size: 7px; }
        }

        @media (max-width: 420px) {
          .hex-wrapper { width: 108px; height: 125px; }
          .hex-row { gap: 3px; }
          .hex-row-top { margin-bottom: -16px; }
          .hex-row-bot { margin-top: -16px; }
          .service-title { font-size: 6.5px; }
          .service-desc { font-size: 6px; }
          .service-icon { width: 14px; height: 14px; }
          .hex-content { width: 76%; }
        }
      `}</style>
    </section>
  );
};

export default Services;