import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { labellingData } from "../data/labellingData";
import { HashLink } from 'react-router-hash-link'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LabellingCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = labellingData.find((c) => c.id === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) return <div className="text-center py-20 font-display">Category Not Found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-16 mt-16 max-w-7xl mx-auto px-6 w-full font-display">
        <HashLink smooth to="/#products" className="text-orange font-semibold hover:underline text-base mb-6 inline-block">
          &larr; Back to Products
        </HashLink>
        
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white mb-12 shadow-hex relative overflow-hidden">
          <p className="text-orange text-xs font-bold uppercase tracking-widest mb-2">{category.subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">{category.title}</h1>
          <p className="text-white/80 text-base max-w-3xl leading-relaxed">{category.description}</p>
        </div>

        <h2 className="text-2xl font-bold text-navy uppercase tracking-wider mb-8">Machines Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.machines.map((machine) => (
            <div key={machine.id} className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-orange/50 transition-all duration-300 shadow-sm hover:shadow-hex group">
              <div>

                {/* 📐 Image Viewer Box */}
                <div className="w-full h-52 sm:h-56 bg-white border border-border/60 rounded-lg flex items-center justify-center p-2 mb-6 overflow-hidden transition-all duration-300 group-hover:border-orange/20 relative">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{machine.name}</h3>

                {/* 📄 Description: render limited content with HTML bold tags parsing */}
                <p 
                  className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: machine.description }}
                />

              </div>

              <Link 
                to={`/labelling/product/${machine.id}`}
                className="text-center bg-navy hover:bg-orange text-white font-bold py-3 rounded-md transition duration-200 uppercase text-xs tracking-wider shadow-sm"
              >
                View Machine
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabellingCategory;