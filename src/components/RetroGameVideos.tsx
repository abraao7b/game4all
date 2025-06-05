
import { useEffect, useRef } from 'react';

const RetroGameVideos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createVideoElement = (src: string, delay: number) => {
      setTimeout(() => {
        if (!containerRef.current) return;
        
        const video = document.createElement('video');
        video.src = src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('crossorigin', 'anonymous');
        
        // Apply styles for the floating effect
        video.style.position = 'absolute';
        video.style.width = `${Math.random() * 20 + 15}%`; // Random size between 15-35%
        video.style.opacity = '0.4'; // Increased opacity to make videos more visible
        video.style.filter = 'grayscale(40%) brightness(70%)'; // Less grayscale for better visibility
        video.style.borderRadius = '8px'; // Rounded corners
        video.style.boxShadow = '0 0 20px rgba(155, 135, 245, 0.5)'; // Enhanced glow effect
        
        // Random position
        video.style.left = `${Math.random() * 80}%`;
        video.style.top = `${Math.random() * 80}%`;
        video.style.zIndex = '1';
        
        // Add floating animation with randomized animation durations
        const animationDuration = Math.random() * 20 + 40; // 40-60s (slower, more gentle floating)
        video.style.animation = `float ${animationDuration}s ease-in-out infinite`;
        
        // Handle loading errors
        video.addEventListener('error', (e) => {
          console.error('Video error:', e);
          // Try to remove problematic video
          video.remove();
        });
        
        // Make sure video is playing
        video.play().catch(err => {
          console.error('Video play error:', err);
        });
        
        // Add to container
        containerRef.current.appendChild(video);
        
        // Apply pixelated rendering for retro feel
        video.classList.add('pixelated');
      }, delay);
    };
    
    // Updated video sources with more space/shooter games
    const videoSources = [
      // Classic arcade games
      'https://ia600809.us.archive.org/7/items/arcade_mk/arcade_mk.mp4', // Mortal Kombat
      'https://ia800908.us.archive.org/20/items/StreetFigherII1991GameplayPreview/Street%20Fighter%20II%20%281991%29%20-%20Gameplay%20Preview.mp4', // Street Fighter
      'https://ia601308.us.archive.org/10/items/arcade_pacman/arcade_pacman.mp4', // Pacman
      'https://ia800200.us.archive.org/29/items/arcade_dkong/arcade_dkong.mp4', // Donkey Kong
      
      // Space shooters and retro games
      'https://ia800208.us.archive.org/26/items/arcade_1942/arcade_1942.mp4', // 1942
      'https://ia801305.us.archive.org/5/items/arcade_galaga/arcade_galaga.mp4', // Galaga
      'https://ia801309.us.archive.org/33/items/arcade_galaxian/arcade_galaxian.mp4', // Galaxian
      'https://ia801302.us.archive.org/33/items/arcade_invaders/arcade_invaders.mp4', // Space Invaders
      'https://ia600205.us.archive.org/12/items/arcade_defender/arcade_defender.mp4', // Defender
      'https://ia801301.us.archive.org/8/items/arcade_arkanoid/arcade_arkanoid.mp4', // Arkanoid
      'https://ia801401.us.archive.org/5/items/arcade_atetris/arcade_atetris.mp4', // Tetris
    ];
    
    // Create videos with staggered timing
    videoSources.forEach((src, index) => {
      createVideoElement(src, index * 800); // Stagger by 0.8 seconds each
    });
    
    return () => {
      // Clean up videos when component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(26,31,44,0.9) 100%)'
      }}
    />
  );
};

export default RetroGameVideos;
