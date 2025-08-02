import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  const { scrollY } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ripple-zone">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-orange-50/30 to-pink-50/50"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, #FFD700, #FF6B6B, #4BC9FF)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bangers mb-4">
            <span className="text-gradient-quadrant">STEP INTO</span>
          </h1>
          <h1 className="text-7xl md:text-9xl font-bangers mb-8">
            <span className="text-gray-700">THE </span>
            <span className="glitch-text text-gradient-neon">FUTURE</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-jersey">
          Discover exclusive superhero-themed sneakers featuring Marvel, DC, Avengers, 
          and Indian heritage designs. Limited edition drops that make you a legend.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="px-12 py-4 rounded-full text-xl font-bold text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 neon-glow font-jersey"
            style={{ background: 'linear-gradient(45deg, #FFD700, #FF6B6B)' }}
          >
            EXPLORE COLLECTION
          </button>
          <button 
            className="px-12 py-4 glass-effect rounded-full text-xl font-bold text-gray-700 hover:scale-110 transition-all duration-300 font-jersey"
            style={{ borderColor: '#4BC9FF' }}
          >
            WATCH TRAILER
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, #FFD700, #4BC9FF)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;