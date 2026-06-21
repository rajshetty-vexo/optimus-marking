import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
const { hash } = useLocation(); 

  useEffect(() => {
    if (hash) {
     
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
       
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]); 




  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
