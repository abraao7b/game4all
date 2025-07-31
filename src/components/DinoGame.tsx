
import React, { useEffect, useRef, useState } from 'react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DinoGame: React.FC<{ onScore: (score: number) => void }> = ({ onScore }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('dinoHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game variables
    let animationFrameId: number;
    let gameSpeed = 6;
    let gravity = 0.5;
    let jumpForce = 12;
    let currentScore = 0;

    // Dino properties
    const dino: GameObject & { velocity: number, jumping: boolean } = {
      x: 50,
      y: canvas.height - 60,
      width: 40,
      height: 60,
      velocity: 0,
      jumping: false
    };

    // Cactus array
    const cacti: GameObject[] = [];
    let cactusTimer = 0;
    const cactusInterval = 50; // Frames between cactus spawns

    // Ground
    const ground = {
      y: canvas.height - 20
    };

    // Game loop
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw ground
      ctx.fillStyle = '#555555';
      ctx.fillRect(0, ground.y, canvas.width, 20);

      // Update dino
      if (dino.jumping) {
        dino.velocity += gravity;
        dino.y += dino.velocity;
        
        if (dino.y > canvas.height - 60) {
          dino.y = canvas.height - 60;
          dino.jumping = false;
          dino.velocity = 0;
        }
      }

      // Draw dino
      ctx.fillStyle = '#999999';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Cactus generation
      cactusTimer++;
      if (cactusTimer > cactusInterval) {
        cactusTimer = 0;
        if (Math.random() < 0.5) { // 50% chance to spawn cactus
          cacti.push({
            x: canvas.width,
            y: canvas.height - 50,
            width: 20,
            height: 50
          });
        }
      }

      // Update and draw cacti
      for (let i = 0; i < cacti.length; i++) {
        const cactus = cacti[i];
        cactus.x -= gameSpeed;
        
        // Remove if off screen
        if (cactus.x + cactus.width < 0) {
          cacti.splice(i, 1);
          i--;
          continue;
        }
        
        // Draw cactus
        ctx.fillStyle = '#55AA55';
        ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
        
        // Check collision
        if (
          dino.x < cactus.x + cactus.width &&
          dino.x + dino.width > cactus.x &&
          dino.y < cactus.y + cactus.height &&
          dino.y + dino.height > cactus.y
        ) {
          // Game over
          onScore(currentScore);
          if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem('dinoHighScore', currentScore.toString());
          }
          setGameOver(true);
          setGameStarted(false);
          cancelAnimationFrame(animationFrameId);
          return;
        }
      }
      
      // Update score
      currentScore++;
      if (currentScore % 100 === 0) {
        gameSpeed += 0.1; // Speed up game over time
      }
      setScore(currentScore);
      
      // Display score
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px "Quicksand", sans-serif';
      ctx.fillText(`Score: ${currentScore}`, canvas.width - 200, 30);
      ctx.fillText(`High: ${Math.max(highScore, currentScore)}`, canvas.width - 200, 60);
      
      // Continue animation
      animationFrameId = requestAnimationFrame(update);
    };

    // Jump handler
    const handleJump = () => {
      if (!dino.jumping) {
        dino.jumping = true;
        dino.velocity = -jumpForce;
      }
    };

    // Key press handler
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJump();
      }
    };

    // Click handler
    const clickHandler = () => {
      handleJump();
    };

    // Add event listeners
    window.addEventListener('keydown', keyDownHandler);
    canvas.addEventListener('click', clickHandler);

    // Start animation
    animationFrameId = requestAnimationFrame(update);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      canvas.removeEventListener('click', clickHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameStarted, onScore, highScore]);

  const handleStart = () => {
    if (!gameStarted) {
      setGameOver(false);
      setScore(0);
      setGameStarted(true);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {!gameStarted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p className="text-game4all-purple font-arcade text-xl mb-4">
            {gameOver ? "GAME OVER" : "DINO GAME"}
          </p>
          {gameOver && <p className="text-white font-arcade mb-4">Score: {score}</p>}
          <p className="text-yellow-400 font-arcade text-sm mb-6">HIGH SCORE: {highScore}</p>
          <button 
            onClick={handleStart}
            className="bg-game4all-purple hover:bg-game4all-blue text-white font-arcade py-2 px-6 rounded-md arcade-btn"
          >
            {gameOver ? "TRY AGAIN" : "START GAME"}
          </button>
          <p className="text-white font-arcade text-xs mt-4">
            PRESS SPACE OR CLICK TO JUMP
          </p>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={300}
        className={`w-full h-full ${!gameStarted ? 'opacity-40' : ''}`}
      ></canvas>
    </div>
  );
};

export default DinoGame;
