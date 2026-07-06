import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. Global Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 font-display overflow-hidden">

        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;