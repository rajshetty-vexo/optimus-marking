import { useParams, Link } from "react-router-dom";
import { labellingData } from "../data/labellingData"; // Data file ka exact import path
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LabellingProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  let currentModel: any = null;
  let parentCategory: any = null;

  // Data matrix loop se nested machine find karna (Case-insensitive)
  if (productId) {
    for (const cat of labellingData) {
      const found = cat.machines.find(
        (m) => m.id.trim().toLowerCase() === productId.trim().toLowerCase()
      );
      if (found) {
        currentModel = found;
        parentCategory = cat;
        break;
      }
    }
  }

  // Error State: Agar machine nahi milti
  if (!currentModel) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6 mt-16 font-sans">
          <h2 className="text-2xl font-bold text-[#0B192C] mb-4 uppercase tracking-wider">
            Machine Profile Not Found
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-sm">
            The machine code <span className="font-bold text-red-500">"{productId || 'empty'}"</span> is missing.
          </p>
          <Link to="/" className="bg-[#0B192C] text-white font-semibold py-2.5 px-6 rounded transition-colors hover:bg-[#F97316]">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 1. Hero Section with Background Image Option */}
      <section 
        className="relative bg-gray-900 py-24 mt-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(11, 25, 44, 0.40), rgba(11, 25, 44, 0.65)), url(${currentModel.image})` 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-6">
            {currentModel.name}
          </h1>
          
          {/* Watch Video Option with Optimus Button Theme */}
          {currentModel.videoUrl && (
            <div className="flex justify-center mt-4">
              <a 
                href="#machine-video" 
                className="bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-10 py-3.5 border border-white/20 rounded-sm shadow-md hover:bg-orange-light transition-all duration-300 ease-in-out"
              >
                Watch Video
              </a>
            </div>
          )}
        </div>
        
        {/* Subtle decorative grid/mesh overlay layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 w-full py-12">
        
        {/* Breadcrumb Navigator - Back to category list link */}
        <Link 
          to={`/labelling/${parentCategory.id}`} 
          className="text-[#0B192C] font-bold hover:text-[#F97316] transition-colors text-sm uppercase tracking-wider mb-8 inline-block"
        >
          &larr; Back to {parentCategory.title} Portfolio
        </Link>

        {/* ✨ IMPROVED: Premium 2-Column Corporate Layout for Description Only */}
        <section className="my-12 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 p-6 sm:p-10 shadow-sm rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side Highlight Label Content */}
            <div className="lg:col-span-4 border-l-4 border-[#F97316] pl-5 space-y-2">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#F97316] block">
                Technical Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B192C] uppercase tracking-tight leading-tight">
                Product <br />
                Specifications
              </h2>
            </div>

            {/* Right Side Left-Aligned Beautiful Description */}
            <div className="lg:col-span-8">
              <div 
                className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left space-y-3 font-normal"
                dangerouslySetInnerHTML={{ __html: currentModel.description }}
              />
            </div>

          </div>
        </section>

        {/* Central Product Showcase Image - ABSOLUTELY UNTOUCHED */}
        <section className="flex justify-center items-center my-12 bg-white p-4 max-w-xl mx-auto">
          <img 
            src={currentModel.image} 
            alt={currentModel.name} 
            className="max-h-[380px] w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </section>

        {/* Application Scheme Layout Block - ABSOLUTELY UNTOUCHED
        {currentModel.scheme && (
          <section className="my-16 border border-gray-200 rounded-none p-8 max-w-md mx-auto bg-white text-center shadow-sm">
            <h3 className="text-xs font-bold text-[#0B192C] uppercase tracking-widest mb-6 border-b pb-3 border-gray-100">
              Application Scheme Design
            </h3>
            
            <div className="flex justify-center items-center gap-6 pt-2">
              {currentModel.scheme.split(",").map((side: string, idx: number) => (
                <div key={idx} className="flex flex-col items-center space-y-3">
                  {/* Square Graphic Indicator box */}
                  {/* <div className="w-14 h-14 border border-gray-300 bg-gray-50 flex items-center justify-center relative shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                    <div className="absolute inset-1 border border-dashed border-gray-200"></div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                    {side.trim()}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )} */} 

{/* 📐 REMASTERED COMPACT 3D VIEW: Reduced Height Isometric Box Layout */}
    {/* Embed Video Block Player - ABSOLUTELY UNTOUCHED */}
        {currentModel.videoUrl && (
          <section id="machine-video" className="my-16 max-w-3xl mx-auto scroll-mt-24">
            <div className="w-full aspect-video overflow-hidden shadow-lg border border-gray-200 bg-black">
              <iframe 
                className="w-full h-full" 
                src={currentModel.videoUrl} 
                title={currentModel.name} 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}
        
{/* 📐 REMASTERED CODE: Solid Navy Blue 3D Cube with Sharp Orange Borders */}
{currentModel.scheme && (
  <section className="my-16 max-w-4xl mx-auto bg-gradient-to-br from-gray-50/70 to-white border border-gray-200/60 rounded-lg p-10 shadow-sm relative overflow-hidden text-center">
    
    {/* Branded Section Header */}
    <div className="border-b border-gray-100 pb-4 mb-8">
      <h3 className="text-xs font-black text-[#0B192C] uppercase tracking-widest inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-[#F97316]">
        Application Scheme Design
      </h3>
    </div>
    
    {/* 🔶 Technical 3D Isometric View Container - 3 Column Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 max-w-3xl mx-auto">
      {currentModel.scheme.split(",").map((side: string, idx: number) => {
        const sideName = side.trim().toLowerCase();
        
        // Custom check for new combination strings
        const isTopSelected = sideName.includes("top");
        const isLateralSelected = sideName.includes("lateral");
        const isFrontSelected = sideName.includes("front");
        const isBottomSelected = sideName.includes("bottom");

        return (
          <div key={idx} className="flex flex-col items-center gap-6 group">
            
            {/* 🧊 Solid Navy Blue 3D Cube Container with Orange Outlines */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center relative">
              
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                {/* 1. TOP FACE PANEL (Navy Filled / White Highlighted with Orange Stroke) */}
                <path 
                  d="M50 15L88 34L50 53L12 34L50 15Z" 
                  fill={isTopSelected ? "#FFFFFF" : "#1E2A38"} 
                  stroke="#F97316" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
                
                {/* 2. LEFT SIDE PANEL (Navy Filled / White Highlighted with Orange Stroke) */}
                <path 
                  d="M12 34V72L50 91V53L12 34Z" 
                  fill={(isLateralSelected || isFrontSelected) ? "#F5F5F5" : "#0B192C"} 
                  stroke="#F97316" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
                
                {/* 3. RIGHT SIDE PANEL (Navy Filled / White Highlighted with Orange Stroke) */}
                <path 
                  d="M50 53V91L88 72V34L50 53Z" 
                  fill={isLateralSelected ? "#FFFFFF" : "#111E2E"} 
                  stroke="#F97316" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />

                {/* 4. BOTTOM SIDE MARKING OVERLAY */}
                {isBottomSelected && (
                  <path 
                    d="M20 74L50 88L80 74L50 60L20 74Z" 
                    fill="#FFFFFF" 
                    stroke="#F97316" 
                    strokeWidth="1.5" 
                  />
                )}

                {/* 5. BRANDED ORANGE DOT MARKERS */}
                {/* Top view or Front & Top combination gets top dot */}
                {isTopSelected && (
                  <circle cx="50" cy="34" r="3.5" fill="#F97316" />
                )}
                
                {/* Bottom view gets bottom dot */}
                {isBottomSelected && (
                  <circle cx="50" cy="74" r="3.5" fill="#F97316" />
                )}
                
                {/* Front side only logic for markers */}
                {isFrontSelected && !isLateralSelected && (
                  <circle cx="31" cy="62" r="3.5" fill="#F97316" />
                )}

                {/* Lateral view or Front & Lateral combination gets side dots */}
                {isLateralSelected && (
                  <>
                    <circle cx="31" cy="62" r="3.5" fill="#F97316" />
                    <circle cx="69" cy="62" r="3.5" fill="#F97316" />
                  </>
                )}
              </svg>

            </div>
            
            {/* Technical Navy Labeling text, clean caps */}
            <span className="text-[12px] font-extrabold text-[#0B192C] uppercase tracking-wide px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
              {side.trim()}
            </span>

          </div>
        );
      })}
    </div>

    {/* Subtle background industrial mesh pattern overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B192C08_1px,transparent_1px),linear-gradient(to_bottom,#0B192C08_1px,transparent_1px)] bg-[size:16px_16px] -z-10"></div>
  </section>
)}
      {/* Features Grid System with Orange Hexagon Bullets and HTML Fix - ABSOLUTELY UNTOUCHED */}
        {currentModel.features && currentModel.features.length > 0 && (
          <section className="my-16 bg-gray-50 border border-gray-200 p-8 sm:p-12">
            <h3 className="text-2xl font-extrabold text-[#0B192C] text-center uppercase tracking-wide mb-8">
              Main Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 max-w-4xl mx-auto">
              {currentModel.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 py-1 text-sm text-gray-700">
                  
                  {/* 🔶 Perfect Custom CSS Orange Hexagon Shape Bullet */}
                  <div 
                    className="w-2.5 h-2.5 bg-[#F97316] mt-1.5 shrink-0"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />

                  {/* 📄 Features text rendering with bold tags support */}
                  <span 
                    className="leading-normal font-medium text-gray-800"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Help CTA Banner (Optimus Theme Applied) - ABSOLUTELY UNTOUCHED */}
        <section className="mt-20 bg-[#0B192C] text-white p-10 text-center relative overflow-hidden -mx-6 sm:-mx-12 md:mx-0 md:rounded-lg">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2 relative z-10">Let us help you!</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto relative z-10">
            Our experts are ready to help you find the most efficient solution for your label application needs.
          </p>
          <button className="bg-[#0B192C] border-2 border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-none relative z-10 hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-300 ease-in-out shadow-sm">
            Contact Us
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default LabellingProductDetail;