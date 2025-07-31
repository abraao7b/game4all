
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ArcadeOverlay from "@/components/ArcadeOverlay";
import GameSilhouettes from "@/components/GameSilhouettes";
import RetroGameVideos from "@/components/RetroGameVideos";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.body.classList.add('arcade-theme');
    return () => document.body.classList.remove('arcade-theme');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-game4all-dark to-black text-white relative">
      
      {/* Logo background */}
      <div className="logo-background"></div>
      
      {/* Retro game videos background with improved visibility */}
      <RetroGameVideos />
      
      {/* Game silhouettes background animation - reduced intensity */}
      <div className="opacity-15">
        <GameSilhouettes />
      </div>
      
      {/* Main content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
