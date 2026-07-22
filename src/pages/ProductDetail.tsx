import { useParams, Link ,useNavigate} from "react-router-dom";
// import { useState} from "react";
import { labelingData, thermalInkjetData,dodPrintingData } from "../data/productData"; 
import ApplicationScheme from "@/components/ApplicationScheme";
import BrochureModal from "@/components/BrochureModal";

import { useEffect,useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

let currentModel: any = null;
  let parentCategory: any = null;

  const allCategories = [...labelingData, ...thermalInkjetData, ...dodPrintingData];

  // 🔄 SMART PRODUCT SEARCHING MATRIX (TypeScript Red Lines Fixed!)
  if (productId) {
    for (const item of allCategories) {
      
      const cat = item as any;

      
      if (cat.machines && cat.machines.length > 0) {
        const found = cat.machines.find(
          (m: any) => m.id.trim().toLowerCase() === productId.trim().toLowerCase()
        );
        if (found) {
          currentModel = found;
          parentCategory = cat;
          break;
        }
      } 
      // 2. If machine category are not then navigate to productdetail range 
      else if (cat.id.trim().toLowerCase() === productId.trim().toLowerCase()) {
        currentModel = {
          id: cat.id,
          name: cat.title, 
          description: cat.description,
          image: cat.image,
          scheme: cat.scheme || "Top side, Lateral side",
          features: cat.features || [],
          videoUrl: cat.videoUrl || "",
          specifications: cat.specifications || [],
          benefits: cat.benefits || [],
          applications: cat.applications || []
        };
        parentCategory = cat;
        break;
      }
    }
  }

  const galleryList = currentModel?.images && currentModel.images.length > 0
    ? currentModel.images
    : currentModel?.image
      ? [currentModel.image]
      : [];

  // Update selected image whenever currentModel changes
  useEffect(() => {
    if (currentModel?.image) {
      setSelectedImage(currentModel.image);
    }
  }, [productId, currentModel?.image]);
  // ─────────────────────────────────────────────────────────────────────────────

  if (!currentModel) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Not Found View */}
      </div>
    );
  }
  if (!currentModel) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6 mt-16 font-sans">
          <h2 className="text-2xl font-bold text-[#0B192C] mb-4 uppercase tracking-wider">
            Product Not Found
          </h2>
          <Link to="/product-range" className="text-xs font-bold uppercase tracking-widest text-[#F97316] hover:underline">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

 // 🛡️ SAFE DATA TYPES HANDLING FOR RENDER LOOPS
  const specsList = Array.isArray(currentModel.specifications) ? currentModel.specifications : [];
  const benefitsList = Array.isArray(currentModel.benefits) ? currentModel.benefits : [];
  const appsList = Array.isArray(currentModel.applications) ? currentModel.applications : [];

  // 🔄 SMART BREADCRUMB DYNAMIC ROUTING
    const isDirectProduct = !parentCategory?.machines || parentCategory.machines.length === 0;
  
  
  const safeCategoryId = parentCategory?.id || productId || "";
  const safeCategoryTitle = parentCategory?.title || "Products";

  const backLinkPath = isDirectProduct ? "/product-range" : `/product-category/${safeCategoryId}`;
  const backLinkLabel = isDirectProduct ? "Products" : `${safeCategoryTitle} Products`;

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      {/* 1. EXACT ORIGINAL HERO SECTION WITH BG IMAGE */}
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
          
          {currentModel.videoUrl && (
            <div className="flex justify-center mt-4">
              <a 
                href="#machine-video" 
                className="bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-10 py-3.5 border border-white/20 rounded-sm shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out"
              >
                Watch Video
              </a>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 w-full py-12">

<button 
  onClick={() => navigate(-1)} 
  className="text-[#0B192C] font-bold hover:text-[#F97316] transition-colors text-sm uppercase tracking-wider mb-8 inline-block bg-transparent border-none cursor-pointer"
>
  &larr; Back to {backLinkLabel}
</button>


<section className="my-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
{/* Left Column (5/12 Cols): Fixed Standard Box + Gallery */}
<div className="lg:col-span-5 w-full flex flex-col items-center gap-4">
  
  {/* 🔒 FIXED STANDARD IMAGE FRAME */}
  <div className="w-full h-[380px] sm:h-[450px] lg:h-[480px] bg-gray-50/60 rounded-2xl p-6 sm:p-8 border-2 border-[#F97316]/60 shadow-xs flex items-center justify-center overflow-hidden">
    <img 
      src={selectedImage || currentModel.image} 
      loading="lazy"
      alt={currentModel.name} 
      className="w-full h-full object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 hover:scale-[1.03]"
    />
  </div>

  {/* Dynamic Thumbnails Strip */}
  {galleryList.length > 1 && (
    <div className="flex items-center justify-center gap-3 w-full overflow-x-auto py-2 px-1">
      {galleryList.map((imgUrl: string, idx: number) => {
        const isActive = (selectedImage || currentModel.image) === imgUrl;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedImage(imgUrl)}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border-2 p-1.5 transition-all duration-200 shrink-0 cursor-pointer overflow-hidden ${
              isActive 
                ? "border-[#F97316] shadow-md scale-105" 
                : "border-gray-200 hover:border-gray-300 opacity-75 hover:opacity-100"
            }`}
          >
            <img 
              src={imgUrl} 
              alt={`${currentModel.name} view ${idx + 1}`} 
              className="w-full h-full object-contain mix-blend-multiply"
              onError={(e) => {
                // Safe fallback in case image URL is broken
                (e.target as HTMLImageElement).src = currentModel.image;
              }}
            />
          </button>
        );
      })}
    </div>
  )}
</div>
          {/* Right Column (7/12 Cols): Heading context details layout side-by-side */}
          <div className="lg:col-span-7 flex flex-col pt-2">
            <span className="text-[#F97316] text-xs font-extrabold uppercase tracking-[0.2em] mb-3 block">
              {parentCategory?.subtitle || "LABEL PRINT AND APPLY APPLICATORS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] uppercase tracking-tight leading-none mb-4">
              {currentModel.name}
            </h2>
            <div className="w-16 h-1 bg-[#F97316] mb-8 rounded-full" />
            
            {/* Render details and paragraphs */}
            <div 
              className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left space-y-4 font-normal"
              dangerouslySetInnerHTML={{ __html: currentModel.description }}
            />
          </div>

        </section>

        <ApplicationScheme scheme={currentModel.scheme} />

        {/* COMPACT LOWER ROW: SIDE-BY-SIDE VIDEO & FEATURES */}
        <section id="machine-video" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-16 mb-16 scroll-mt-24">
          
          {/* Left Side Video Frame Container */}
          <div className="lg:col-span-5 w-full">
            {currentModel.videoUrl ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={currentModel.videoUrl}
                  title={currentModel.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="w-full bg-gray-50 rounded-lg aspect-video flex items-center justify-center border border-gray-200 text-gray-400 text-xs uppercase font-bold tracking-widest">
                Video Coming Soon
              </div>
            )}
          </div>

          {/* Right Side Bullet Features List with Navy to Orange Download Button */}
          <div className="lg:col-span-7 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0B192C] uppercase tracking-wide mb-6">
                Main Features
              </h3>
              
              {currentModel.features && currentModel.features.length > 0 && (
                <div className="space-y-4 mb-8">
                  {currentModel.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3.5 text-sm">
                      <div 
                        className="w-2.5 h-2.5 bg-[#F97316] mt-1.5 shrink-0"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                      />
                      <span 
                        className="leading-relaxed font-medium text-gray-800"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Download Action Button Link Wrapper (Navy Blue -> Hover Orange) */}
            <div className="pt-2">
              <button 
                onClick={() => setIsBrochureModalOpen(true) }
                className="inline-flex items-center gap-3 bg-[#0B192C] hover:bg-[#F97316] text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded transition-all duration-300 shadow-sm active:scale-95 group"
              >
                <svg className="w-4 h-4 text-white transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>

        </section>

        {/* ORIGINAL FOOTER HELP BANNER SYSTEM */}
        {/* <section className="mt-20 bg-[#1E1951] text-white p-10 text-center relative overflow-hidden -mx-6 sm:-mx-12 md:mx-0 md:rounded-lg">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2 relative z-10">Let us help you!</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto relative z-10">
            Our experts are ready to help you find the most efficient solution for your label application needs.
          </p>
          <button className="bg-[#0B192C] border-2 border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 transition-all duration-300 hover:bg-[#F97316] hover:border-[#F97316] relative z-10 rounded-sm">
            Contact Us
          </button>
        </section> */}

      </main>
       <BrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        productName={currentModel?.name || ""}
        brochureUrl={currentModel?.brochureUrl || "#"}
      />
      <Footer />
    </div>
  );
};

export default ProductDetail;