import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Company = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. Global Navigation Navbar */}
      <Navbar />
      
      {/* 2. Main Page Layout Wrapper */}
      <main className="flex-grow pt-24 font-display overflow-hidden">

        <About />
        

      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default Company;