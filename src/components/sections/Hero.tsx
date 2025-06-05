
import { Button } from '@/components/ui/button';
import { Gamepad } from 'lucide-react';
import DinoGame from '@/components/DinoGame';
import { useState } from 'react';

const Hero = () => {
  const [lastScore, setLastScore] = useState(0);

  const handleScore = (score: number) => {
    setLastScore(score);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient - softer version */}
      <div className="absolute inset-0 bg-gradient-to-br from-game4all-dark via-game4all-dark/80 to-black z-0"></div>
      
      {/* Retro grid overlay - subtle version */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTUsMTM1LDI0NSwwLjA3KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              <span className="font-arcade text-game4all-purple block mb-2">Game4All</span>
              <span className="font-sans font-bold text-white">Diversão Garantida em Qualquer Evento!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-sans leading-relaxed">
              Fliperamas retrô, Jukebox e Karaokê exclusivos para alugar em festas, eventos e encontros. Uma experiência única para todas as idades!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-game4all-purple hover:bg-game4all-blue text-white font-sans py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all hover:shadow-[0_0_20px_rgba(51,195,240,0.6)]"
              >
                <Gamepad className="mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-game4all-blue text-game4all-blue hover:bg-game4all-blue/10 font-sans py-3 px-8 rounded-xl"
              >
                Ver Equipamentos
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            {/* Realistic Arcade Cabinet */}
            <div className="relative arcade-cabinet">
              {/* Cabinet outer frame */}
              <div className="w-80 md:w-96 bg-game4all-dark rounded-t-xl pt-5 pb-10 px-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border-t-4 border-x-4 border-[#333] relative">
                {/* Cabinet logo/marquee */}
                <div className="absolute -top-12 left-0 w-full h-12 bg-black/80 rounded-t-lg border-2 border-[#333] overflow-hidden flex items-center justify-center">
                  <div className="bg-black/80 w-full h-full absolute">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
                  </div>
                  <h3 className="font-arcade text-xl text-game4all-purple animate-pulse z-10">
                    GAME<span className="text-game4all-blue">4</span><span className="text-game4all-pink">ALL</span>
                  </h3>
                </div>
                
                {/* Screen frame */}
                <div className="bg-black border-8 border-[#222] rounded-md shadow-inner mx-auto mb-4 relative overflow-hidden">
                  {/* Screen glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  
                  {/* Game screen */}
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
                    {/* Scanlines effect */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHdpZHRoPSIyIiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+PC9zdmc+')] opacity-20 pointer-events-none z-10"></div>
                    
                    {/* Horizontal scan line animation */}
                    <div className="absolute h-[1px] w-full bg-white/10 left-0 top-0 animate-scan z-10"></div>
                    
                    {/* Game content */}
                    <div className="relative z-0 h-full">
                      <DinoGame onScore={handleScore} />
                    </div>
                    
                    {/* CRT flicker */}
                    <div className="absolute inset-0 bg-white opacity-0 animate-[flicker_10s_ease-in-out_infinite] z-20 pointer-events-none"></div>
                    
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20"></div>
                  </div>
                </div>
                
                {/* Control panel */}
                <div className="bg-[#222] p-4 rounded-md border-2 border-[#333] mx-auto flex flex-col items-center">
                  {/* Score display */}
                  <div className="w-full bg-black/80 border border-gray-800 rounded mb-3 p-2 flex justify-between px-4">
                    <p className="text-game4all-blue font-arcade text-xs">SCORE:</p>
                    <p className="text-game4all-pink font-arcade text-xs">{lastScore}</p>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex justify-between w-full">
                    {/* Left side - joystick */}
                    <div className="relative w-16 h-16">
                      <div className="absolute w-14 h-14 bg-gray-800 rounded-full border-2 border-gray-700"></div>
                      <div className="absolute w-4 h-12 bg-black left-[22px] top-[2px] rounded-t-md"></div>
                      <div className="absolute w-10 h-10 bg-red-600 rounded-full left-[12px] top-[-5px] border-2 border-gray-900 shadow-lg"></div>
                    </div>
                    
                    {/* Right side - buttons */}
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 border-4 border-gray-800 shadow-lg"></div>
                      <div className="w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Small decoration lights */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-game4all-blue animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-game4all-pink animate-pulse delay-300"></div>
                  <div className="w-2 h-2 rounded-full bg-game4all-purple animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Cabinet base/stand */}
              <div className="w-72 md:w-80 h-5 bg-[#222] mx-auto rounded-b-lg border-x-4 border-b-4 border-[#333]"></div>
              
              {/* Floor shadow */}
              <div className="absolute -bottom-6 left-1/2 w-56 h-4 bg-black/30 blur-xl rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="friendly-card w-full sm:w-64">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-game4all-purple/20 flex items-center justify-center">
                <Gamepad className="w-6 h-6 text-game4all-purple" />
              </div>
              <h3 className="font-sans font-bold text-white text-lg mb-2">Jogos Clássicos</h3>
              <p className="text-gray-300 font-sans text-sm">Os melhores títulos dos anos 80 e 90 em máquinas modernas</p>
            </div>
          </div>
          
          <div className="friendly-card w-full sm:w-64">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-game4all-blue/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33C3F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="font-sans font-bold text-white text-lg mb-2">Fácil Instalação</h3>
              <p className="text-gray-300 font-sans text-sm">Entrega e montagem no local do evento incluídos</p>
            </div>
          </div>
          
          <div className="friendly-card w-full sm:w-64">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-game4all-pink/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D946EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="font-sans font-bold text-white text-lg mb-2">Para Todas Idades</h3>
              <p className="text-gray-300 font-sans text-sm">Diversão garantida para crianças, adultos e idosos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
