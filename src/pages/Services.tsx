import React, { useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

const serviceData = [
  {
    id: "amc",
    title: "Annual Maintenance Contracts",
    desc: "Regular & Comprehensive maintenance ensures peak performance for your coding equipment. Our structured programs include scheduled preventative visits and full coverage to eliminate unexpected production downtime entirely.",
    img: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782630563/InShot_20260628_123647517_zxypea.jpg"
  },
  {
    id: "ad-hoc",
    title: "Ad hoc Visit",
    desc: "Ad hoc visits provide rapid, on-demand support for your marking machines. Our expert engineers are ready to resolve sudden technical faults quickly, ensuring your manufacturing schedule stays on track.",
    img: "https://res.cloudinary.com/dsxnp5rjt/image/upload/a_hflip/v1782630565/InShot_20260628_123453881_vpkvq6.jpg"
  },
  {
    id: "flexipay",
    title: "FlexiPay",
    desc: "Rental machines offer the ultimate financial flexibility. Access our premium industrial marking and coding technology through scalable rental plans, avoiding heavy upfront investment while adapting to your seasonal demands.",
    img: "https://res.cloudinary.com/dsxnp5rjt/image/upload/v1782636307/InShot_20260628_123800603_reyqnj.jpg"
  },
];

const Services = () => {
  const location = useLocation(); 
 
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      
      
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350); // 350ms delay perfectly with animations 

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
    <div className="pt-32 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1951] uppercase tracking-wider font-display">Our Services</h1>
          <div className="w-24 h-1.5 bg-[#ED691D] mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Professional support and flexible financial solutions designed to keep your production lines running efficiently with zero downtime.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-24">
          {serviceData.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id} 
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
                    loading='lazy'
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

export default Services;