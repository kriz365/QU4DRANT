import React, { useState, useEffect } from 'react';

const AnimatedCharacters: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const characters = [
    {
      id: 'spiderman',
      emoji: '🕷️',
      size: 'text-6xl',
      position: { top: '10%', left: '5%' },
      animation: 'bounce',
      delay: '0s'
    },
    {
      id: 'batman',
      emoji: '🦇',
      size: 'text-5xl',
      position: { top: '20%', right: '10%' },
      animation: 'swing',
      delay: '1s'
    },
    {
      id: 'ironman',
      emoji: '🤖',
      size: 'text-7xl',
      position: { top: '60%', left: '8%' },
      animation: 'glow',
      delay: '2s'
    },
    {
      id: 'flash',
      emoji: '⚡',
      size: 'text-4xl',
      position: { top: '40%', right: '5%' },
      animation: 'flash',
      delay: '0.5s'
    },
    {
      id: 'shield',
      emoji: '🛡️',
      size: 'text-6xl',
      position: { bottom: '20%', left: '15%' },
      animation: 'rotate',
      delay: '1.5s'
    },
    {
      id: 'fire',
      emoji: '🔥',
      size: 'text-5xl',
      position: { bottom: '30%', right: '20%' },
      animation: 'flicker',
      delay: '0.8s'
    }
  ];

  const stickers = [
    { emoji: '💥', top: '15%', left: '20%', size: 'text-4xl', rotation: '15deg' },
    { emoji: '⭐', top: '25%', right: '25%', size: 'text-3xl', rotation: '-20deg' },
    { emoji: '💫', bottom: '40%', left: '30%', size: 'text-5xl', rotation: '45deg' },
    { emoji: '🌟', top: '70%', right: '15%', size: 'text-4xl', rotation: '-30deg' },
    { emoji: '✨', top: '50%', left: '70%', size: 'text-3xl', rotation: '60deg' },
    { emoji: '🎯', bottom: '60%', right: '40%', size: 'text-4xl', rotation: '90deg' }
  ];

  return (
    <>
      {/* Animated Characters */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {characters.map((char) => (
          <div
            key={char.id}
            className={`absolute ${char.size} character-${char.animation}`}
            style={{
              ...char.position,
              animationDelay: char.delay,
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
            }}
          >
            {char.emoji}
          </div>
        ))}
      </div>

      {/* Static Stickers with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {stickers.map((sticker, index) => (
          <div
            key={index}
            className={`absolute ${sticker.size} opacity-60 hover:opacity-100 transition-opacity duration-300`}
            style={{
              top: sticker.top,
              left: sticker.left,
              right: sticker.right,
              bottom: sticker.bottom,
              transform: `rotate(${sticker.rotation}) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              filter: 'drop-shadow(0 0 8px rgba(255, 107, 107, 0.4))'
            }}
          >
            {sticker.emoji}
          </div>
        ))}
      </div>

      {/* Floating Mascot */}
      <div className="fixed bottom-10 right-10 z-20 pointer-events-none">
        <div className="mascot-float">
          <div className="text-8xl filter drop-shadow-lg">
            🦸‍♂️
          </div>
          <div className="absolute -top-2 -right-2 text-2xl animate-pulse">
            ✨
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCharacters;