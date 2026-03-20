import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingContactWidget />
    </div>
  );
};

export default Index;
