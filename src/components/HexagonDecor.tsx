import { motion } from "framer-motion";

interface HexagonDecorProps {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  delay?: number;
  floating?: boolean;
}

const HexagonDecor = ({
  className = "",
  size = 100,
  fill = "none",
  stroke = "hsl(var(--orange))",
  strokeWidth = 2,
  opacity = 0.3,
  delay = 0,
  floating = false,
}: HexagonDecorProps) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 1, scale: 0.8 }}
      animate={
        floating
          ? {
            opacity,
            scale: [1, 1.08, 1],
            y: [0, -5, 0],
          }
          : {
            opacity,
            scale: 1,
          }
      }
      transition={
        floating
          ? {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }
          : {
            duration: 1.2,
            delay,
            ease: "easeOut",
          }
      }
    >
      <svg width={size} height={size * 1.1547} viewBox="0 0 100 115.47">
        <polygon
          points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  );
};

export default HexagonDecor;