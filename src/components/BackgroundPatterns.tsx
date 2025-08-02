import React from 'react';

const BackgroundPatterns: React.FC = () => {
  return (
    <>
      {/* Comic Book Dots Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="comic-dots-pattern w-full h-full"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-1">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute geometric-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-8 h-8 opacity-30"
              style={{
                background: `linear-gradient(45deg, 
                  ${['#FFD700', '#FF6B6B', '#B388EB', '#4BC9FF', '#B5FF59'][Math.floor(Math.random() * 5)]}, 
                  ${['#FFD700', '#FF6B6B', '#B388EB', '#4BC9FF', '#B5FF59'][Math.floor(Math.random() * 5)]})`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Silhouettes */}
      <div className="fixed inset-0 pointer-events-none z-2 opacity-10">
        <div className="absolute top-20 left-10 text-9xl hero-silhouette">
          🦸‍♂️
        </div>
        <div className="absolute bottom-20 right-20 text-8xl hero-silhouette" style={{ animationDelay: '2s' }}>
          🦸‍♀️
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl hero-silhouette" style={{ animationDelay: '4s' }}>
          🚀
        </div>
      </div>

      {/* Comic Speech Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-3">
        <div className="absolute top-32 right-32 speech-bubble">
          <div className="bg-white/80 rounded-2xl px-4 py-2 text-sm font-bold text-gray-800 border-2 border-yellow-400">
            POW! 💥
          </div>
        </div>
        <div className="absolute bottom-40 left-20 speech-bubble" style={{ animationDelay: '3s' }}>
          <div className="bg-white/80 rounded-2xl px-4 py-2 text-sm font-bold text-gray-800 border-2 border-red-400">
            BOOM! 🔥
          </div>
        </div>
        <div className="absolute top-1/2 right-10 speech-bubble" style={{ animationDelay: '6s' }}>
          <div className="bg-white/80 rounded-2xl px-4 py-2 text-sm font-bold text-gray-800 border-2 border-blue-400">
            ZAP! ⚡
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundPatterns;