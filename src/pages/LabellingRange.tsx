import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// 1. Updated import from labellingCategories to labellingData
import { labellingData } from "../data/labellingData";

const LabellingRange = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-20 font-display mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">Optimus Portfolio</span>
          <h1 className="text-4xl font-bold text-navy mt-2 uppercase">LABELING Product Range</h1>
          <div className="w-24 h-1 bg-orange mx-auto mb-16 mt-4"></div>

          {/* 2. Changed loop variable to map over labellingData */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labellingData.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between items-center shadow-sm hover:shadow-hex hover:border-orange/40 transition-all duration-300"
              >
                <div className="w-40 h-40 flex items-center justify-center bg-muted/50 rounded-lg p-4 mb-6">
                  {/* 3. Updated alt attribute from cat.name to cat.title */}
                  <img src={cat.image} alt={cat.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </div>
                {/* 4. Updated heading from cat.name to cat.title */}
                <h3 className="text-xl font-bold text-foreground text-center mb-6 uppercase tracking-wide">{cat.title}</h3>
                <Link
                  to={`/labelling/${cat.id}`}
                  className="w-full text-center bg-[#0B192C] hover:bg-[#F97316] text-white font-semibold py-3 rounded-md transition duration-200 uppercase text-xs tracking-wider"
                >
                  Discover More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabellingRange;