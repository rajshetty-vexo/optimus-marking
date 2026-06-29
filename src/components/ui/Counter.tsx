import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({ from = 0, to, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        // ADDED: Safety check to prevent the "white screen of death" crash
        if (ref.current) {
          ref.current.textContent = Math.floor(value) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, suffix]);

  return (
    <span
      ref={ref}
      className="text-3xl md:text-3xl lg:text-4xl font-display font-bold text-[#1E1951]"
    >
      {from}
    </span>
  );
};

export default Counter;