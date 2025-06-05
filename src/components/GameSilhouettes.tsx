
import { useEffect, useRef } from 'react';

const GameSilhouettes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create silhouette shapes
    const silhouettes = [
      // Pac-Man
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0.25 * Math.PI, 1.75 * Math.PI);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();
      },
      // Space Invader
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const pixelSize = size / 8;
        const invaderPattern = [
          [0,0,1,0,0,0,1,0,0],
          [0,0,0,1,0,1,0,0,0],
          [0,0,1,1,1,1,1,0,0],
          [0,1,1,0,1,0,1,1,0],
          [1,1,1,1,1,1,1,1,1],
          [1,0,1,1,1,1,1,0,1],
          [1,0,1,0,0,0,1,0,1],
          [0,0,0,1,0,1,0,0,0]
        ];
        
        ctx.fillStyle = 'rgba(155, 135, 245, 0.1)';
        
        for (let i = 0; i < invaderPattern.length; i++) {
          for (let j = 0; j < invaderPattern[i].length; j++) {
            if (invaderPattern[i][j] === 1) {
              ctx.fillRect(
                x - (4.5 * pixelSize) + j * pixelSize,
                y - (4 * pixelSize) + i * pixelSize,
                pixelSize,
                pixelSize
              );
            }
          }
        }
      },
      // Tetris L shape
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const blockSize = size / 2;
        ctx.fillRect(x - blockSize, y - blockSize, blockSize, blockSize * 3);
        ctx.fillRect(x, y + blockSize, blockSize, blockSize);
      },
      // Mario pipe
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const width = size * 0.7;
        const height = size * 1.5;
        const topWidth = width * 1.2;
        const topHeight = height * 0.2;
        
        // Pipe stem
        ctx.fillRect(x - width/2, y - height/2, width, height);
        
        // Pipe top
        ctx.fillRect(x - topWidth/2, y - height/2, topWidth, topHeight);
      },
      // Mushroom
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        // Top half - cap
        ctx.beginPath();
        ctx.arc(x, y - size/4, size/2, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        
        // Bottom half - stem
        ctx.fillRect(x - size/6, y - size/4, size/3, size/2);
      }
    ];
    
    // Create animated silhouette objects
    const gameObjects = Array.from({ length: 20 }, (_, i) => {
      const silhouetteIndex = Math.floor(Math.random() * silhouettes.length);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 30 + 20,
        draw: silhouettes[silhouetteIndex],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      };
    });
    
    // Animation loop
    const animate = () => {
      // Clear with a slight opacity to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update each silhouette
      gameObjects.forEach(obj => {
        ctx.fillStyle = 'rgba(155, 135, 245, 0.08)';
        
        // Move the silhouette
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.rotation += obj.rotationSpeed;
        
        // Wrap around screen edges
        if (obj.x < -50) obj.x = canvas.width + 50;
        if (obj.x > canvas.width + 50) obj.x = -50;
        if (obj.y < -50) obj.y = canvas.height + 50;
        if (obj.y > canvas.height + 50) obj.y = -50;
        
        // Draw the silhouette with rotation
        ctx.save();
        ctx.translate(obj.x, obj.y);
        ctx.rotate(obj.rotation);
        obj.draw(ctx, 0, 0, obj.size);
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40"
    />
  );
};

export default GameSilhouettes;
