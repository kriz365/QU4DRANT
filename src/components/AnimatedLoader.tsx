import React, { useState, useEffect } from 'react';

interface AnimatedLoaderProps {
  onComplete: () => void;
}

const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowText(true);
          setTimeout(() => onComplete(), 2000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (count >= 50) {
      setShowText(true);
    }
  }, [count]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
      {/* Counter at top-left */}
      <div className="absolute top-8 left-8 text-4xl font-bold text-gradient-quadrant font-jersey">
        {count.toString().padStart(3, '0')}
      </div>

      {/* Main text animation */}
      {showText && (
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-bangers mb-4">
            <span className="slide-up inline-block text-gradient-quadrant" style={{ animationDelay: '0.1s' }}>
              QU4DRANT
            </span>
          </div>
          <div className="text-4xl md:text-5xl font-jersey">
            <span className="slide-up inline-block text-gray-700" style={{ animationDelay: '0.3s' }}>
              SNEAKER
            </span>
            <span 
              className="glitch-text text-gradient-neon ml-4 inline-block" 
              style={{ animationDelay: '0.5s' }}
            >
              ZONE
            </span>
          </div>
        </div>
      )}

      {/* Loading bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-100 ease-out rounded-full"
          style={{ 
            width: `${count}%`,
            background: 'linear-gradient(90deg, #FFD700, #FF6B6B, #B388EB, #4BC9FF, #B5FF59)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedLoader;