import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials"

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
      <HeroSlider />
      <Products />
      <Services />
      <Clients />
      <Testimonials/>
      <Footer />
     
    </div>
  );
};

export default Index;
