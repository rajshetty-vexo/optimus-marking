import React, { useEffect } from 'react'; // Imported useEffect for handling intersection/scroll events
import { Link, useLocation } from 'react-router-dom'; // Imported useLocation to monitor incoming URL hashes
import { motion } from 'framer-motion';
import Footer from "@/components/Footer"; // Footer component for consistent page layout

const solutionData = [
  {
    id: "standard-solution",
    title: "Standard Solution",
    desc: "Plug-and-play standalone marking systems. Quick to install, intuitive to operate, and perfectly suited for standard conveyor lines requiring immediate reliability.",
    img: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782635090/InShot_20260628_135215410_k86p77.jpg"
  },
  {
    id: "integrated-solution",
    title: "Integrated Solution",
    desc: "Custom-engineered setups for complex manufacturing. We seamlessly sync our hardware with your existing ERP systems and automated lines for real-time, variable data printing.",
    img: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782635245/copy_of_inshot_20260628_135313860_bnbk8t.jpg"
  },
];

const Solutions = () => {
  const location = useLocation(); // Hook to capture incoming hashes like #standard-solution

  // 🎯 FIXED CROSS-PAGE SCROLL LOGIC: Waits for framer-motion mount layout stabilization before executing scroll
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      
      // ⏱️ Delay added to ensure page layout and animations are loaded properly before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350); // 350ms delay perfectly syncs with Framer Motion entry transitions

      return () => clearTimeout(timer);
    } else {
      // Default behavior if no hash is provided: scroll to absolute top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
    <div className="pt-32 pb-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header - Animates up on initial page load */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1951] uppercase tracking-wider font-display">Our Solutions</h1>
          <div className="w-24 h-1.5 bg-[#ED691D] mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            From plug-and-play setups to fully integrated automated lines, we engineer marking solutions that fit your exact manufacturing workflow.
          </p>
        </motion.div>

        {/* Solutions List */}
        <div className="space-y-24">
          {solutionData.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id} // Anchor identifier synchronized with Navbar definitions
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 scroll-mt-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-[#1E1951]">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                <Link
                  to="/contact"
                  className="inline-block mt-4 text-[#1E1951] border-[2px] border-[#1E1951] hover:bg-[#ED691D] hover:text-white hover:border-[#ED691D] px-4 py-2 rounded-full font-bold uppercase tracking-wide transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      <Footer/> 
      </>
    
  );
};

export default Solutions;