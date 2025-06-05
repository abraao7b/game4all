
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
  // Add startup animations and sounds
  useEffect(() => {
    // Add CSS class to body for global arcade styling
    document.body.classList.add('arcade-theme');
    
    // Optional: Play arcade startup sound
    const playStartupSound = () => {
      try {
        const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');
        audio.volume = 0.2;
        audio.play();
      } catch (e) {
        console.log('Audio autoplay blocked');
      }
    };
    
    // Try to play sound on user interaction
    const handleFirstInteraction = () => {
      playStartupSound();
      document.removeEventListener('click', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      document.body.classList.remove('arcade-theme');
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-game4all-dark to-black text-white relative">
      {/* SVG Filters for CRT effects - reduced intensity */}
      <svg className="hidden">
        <filter id="pixelate-5">
          <feFlood x="4" y="4" height="2" width="2"/>
          <feComposite width="10" height="10"/>
          <feTile result="a"/>
          <feComposite in="SourceGraphic" in2="a" operator="in"/>
          <feMorphology operator="dilate" radius="3"/>
        </filter>
      </svg>
      
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
