
import React from 'react';

const ArcadeOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* CRT Screen effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-game4all-dark via-black to-game4all-dark opacity-70"></div>
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImJsYWNrIiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+PC9zdmc+')] opacity-30"></div>
      
      {/* Arcade cabinet frame with rounded corners and more defined border */}
      <div className="absolute inset-0 border-[32px] sm:border-[48px] md:border-[64px] border-game4all-dark rounded-lg pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
        {/* Cabinet details - top control lights */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-8 md:gap-16">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-game4all-purple animate-pulse"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-game4all-blue animate-pulse delay-300"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-game4all-pink animate-pulse delay-700"></div>
        </div>
        
        {/* Left side controls */}
        <div className="hidden md:block absolute -left-16 top-1/3 w-8 h-24 bg-game4all-dark rounded-l-lg shadow-lg">
          <div className="w-6 h-6 rounded-full bg-game4all-purple m-1"></div>
          <div className="w-6 h-6 rounded-full bg-game4all-blue m-1"></div>
        </div>
        
        {/* Right side controls */}
        <div className="hidden md:block absolute -right-16 top-1/3 w-8 h-24 bg-game4all-dark rounded-r-lg shadow-lg">
          <div className="w-6 h-6 rounded-full bg-game4all-pink m-1"></div>
          <div className="w-6 h-6 rounded-full bg-game4all-purple m-1"></div>
        </div>
        
        {/* Bottom controls */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-6">
          <div className="w-8 h-8 rounded-full bg-red-600 border-4 border-gray-800 shadow-lg"></div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 border-4 border-gray-800 shadow-lg"></div>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-game4all-purple rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-game4all-blue rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-game4all-blue rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-game4all-purple rounded-br-lg"></div>
        
        {/* Screen glow */}
        <div className="absolute inset-4 md:inset-8 bg-gradient-to-b from-game4all-purple/10 via-transparent to-game4all-blue/10 rounded-lg opacity-30 animate-pulse"></div>
      </div>
      
      {/* CRT flicker effect */}
      <div className="absolute inset-0 bg-white opacity-0 animate-[flicker_10s_ease-in-out_infinite]"></div>
      
      {/* Horizontal scan line - animated */}
      <div className="absolute h-[2px] w-full bg-white/10 left-0 top-0 animate-scan"></div>
    </div>
  );
};

export default ArcadeOverlay;
