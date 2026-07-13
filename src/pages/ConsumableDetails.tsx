import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { consumablesData } from "@/data/consumablesData"; 

const ConsumableDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentCategory = consumablesData.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-xl font-bold text-gray-700">Category Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-[#F97316] text-sm underline">Go Back</button>
      </div>
    );
  }

  // Heading duplication track karne ke liye temporary variables
  let lastSection = "";
  let lastSubSection = "";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow py-28 px-4 max-w-7xl mx-auto w-full">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-xs font-bold text-[#F97316] uppercase tracking-wider hover:underline flex items-center gap-1"
        >
          ← Back to Portfolio
        </button>

        {/* ── 🌅 LAYER 1: PREMIUM TOP BANNER (Only shows if topDescription exists) ── */}
        {currentCategory.topDescription && (
          <div className="w-full bg-[#1E1951] text-white p-8 sm:p-12 rounded-3xl mb-10 shadow-lg relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl">
              <span className="text-[#F97316] font-display font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded">
                Industrial Solutions
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight mt-4 mb-4">
                {currentCategory.title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify max-w-3xl border-l-2 border-[#F97316] pl-4">
                {currentCategory.topDescription}
              </p>
            </div>
          </div>
        )}

        {/* Main Content White Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
          {/* Agar upar banner nahi hai tabhi yeh default title dikhega */}
          {!currentCategory.topDescription && (
            <>
              <span className="text-[#F97316] font-bold text-xs uppercase tracking-widest block">
                Consumable Inventory Portfolio
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E1951] uppercase mt-2 mb-10 border-b border-gray-100 pb-4">
                {currentCategory.title} Range
              </h1>
            </>
          )}

          <div className="space-y-12">
            {currentCategory.variants.map((variant, index) => {
              
              // ── 🏷️ NEW HIERARCHY ENGINE ──
              let showMainSection = false;
              if (variant.section && variant.section !== lastSection) {
                showMainSection = true;
                lastSection = variant.section;
                lastSubSection = ""; // Reset sub-section tracker on new main section
              }

              let showSubSection = false;
              if (variant.subSection && variant.subSection !== lastSubSection) {
                showSubSection = true;
                lastSubSection = variant.subSection;
              }

              const technicalSpecs = [
                { label: "Available Colors", value: variant.colors },
                { label: "Chemical Base", value: variant.chemicalBase },
                { label: "Colorant Type", value: variant.colorant },
                { label: "Industrial Applications", value: variant.application },
                { label: "Hardware Suitability", value: variant.suitableWith },
              ].filter(spec => spec.value && spec.value.trim() !== "");

              return (
                <div key={index} className="w-full">
                  
                  {/* ── Badi Main Heading (e.g., LABEL RANGE, RIBBON RANGE) ── */}
                  {showMainSection && (
                    <div className="w-full mt-12 mb-6 pt-6 border-t border-gray-100 first:border-0 first:mt-0">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1E1951] uppercase tracking-wider bg-slate-100 px-5 py-2.5 rounded-xl inline-block border-l-4 border-[#F97316]">
                        {variant.section}
                      </h3>
                    </div>
                  )}

                  {showSubSection && (
                    <div className="w-full mt-4 mb-6 pl-4">
                      <h4 className="text-base sm:text-lg font-bold text-[#F97316] uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                        {variant.subSection}
                      </h4>
                    </div>
                  )}

                  {/* Standard Grid Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-dashed border-gray-200 pb-12 last:border-0 last:pb-0">
           {/* Left Side: Product Image Display Grid */}
<div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-200/60 min-h-[350px] shadow-inner relative group overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
  
  {/* ⚡ UPDATED: Andar ka container responsive bada kiya hai taaki image mast aur badi dikhe */}
  <div className="w-full max-w-[320px] h-[250px] sm:h-[280px] bg-white border border-gray-100 shadow-md flex items-center justify-center rounded-2xl p-6 transition-transform duration-300 group-hover:scale-105">
    <img 
      src={variant.image} 
      alt={variant.title} 
      className="max-w-full max-h-full object-contain mix-blend-multiply"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  </div>
  
  {/* Safe Description Check */}
  {variant.description && (
    <p className="text-gray-400 text-xs text-center max-w-sm mt-6 font-medium italic">
      {variant.description}
    </p>
  )}
</div>
                    
                    {/* Right Side: Specifications with Hexagon Bullets */}
                    <div className="space-y-6">
                      <h2 className="text-xl font-extrabold text-[#1E1951] font-display tracking-tight border-l-4 border-[#F97316] pl-3">
                        {variant.title}
                      </h2>
                      
                      <div className="space-y-4 pt-2">
                        {technicalSpecs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-start gap-3 animate-fadeIn">
                            <div 
                              className="mt-1 flex-shrink-0 w-3 h-3 bg-[#F97316]" 
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            />
                            <p className="text-gray-700 text-sm leading-relaxed">
                              <strong className="text-[#1E1951] font-semibold">{spec.label}: </strong> 
                              {spec.label === "Hardware Suitability" ? (
                                <span className="text-orange-600 font-medium">{spec.value}</span>
                              ) : (
                                spec.value
                              )}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Contact Us Button */}
                      <div className="pt-4">
                        <button
                          onClick={() => navigate("/contact")}
                          className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-[#F97316] hover:bg-[#F97316]/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                        >
                          Contact Us
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsumableDetails;