import { motion } from "framer-motion";
import { useEffect } from "react";
import optimusLogo from "@/assets/optimus-logo.svg";

type Props = {
    onComplete: () => void;
};

export default function OpeningAnimation({ onComplete }: Props) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">
            <motion.div
                initial={{
                    y: -400,
                    scale: 0.3,
                    rotateY: 0,
                }}
                animate={{
                    y: 0,
                    scale: [0.3, 1.15, 1],
                    rotateY: 1440,
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {/* shadow wrapper */}
                <div className='scale-[0.9] lg:scale-[1.05]'
                    style={{
                        filter: " drop-shadow(0px 10px 15px rgba(0,0,0,0.45))",
                    }}
                >
                    {/* hex coin */}
                    <div
                        style={{
                            width: 180, // Increased slightly to fit the text beautifully
                            height: 210,
                            backgroundColor: "#ffffff",
                            clipPath:
                                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                        className="flex flex-col items-center justify-center px-4 text-center"
                    >
                        <img
                            src={optimusLogo}
                            alt="Optimus Logo"
                            className="w-[130px] mb-2"
                        />
                        {/* <p className="text-[7px] font-bold text-[#ff8000] leading-tight">
                            Need a Solution?  Think OPTIMUS
                        </p>
                        <p className="mt-[1.5px] text-[5px] font-semibold tracking-widest text-[#1E1951]">
                            CODE • MARK • LABEL • VERIFY
                        </p> */}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}