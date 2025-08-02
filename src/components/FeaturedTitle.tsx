import React, { useState, useEffect, useRef } from 'react';

interface FeaturedTitleProps {
  title: string;
  subtitle?: string;
}

const FeaturedTitle: React.FC<FeaturedTitleProps> = ({ title, subtitle }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate letters one by one
          const interval = setInterval(() => {
            setVisibleLetters(prev => {
              if (prev >= title.length) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, [title.length, isVisible]);

  return (
    <div ref={titleRef} className="text-center py-20 ripple-zone">
      <div className="relative">
        {subtitle && (
          <p className="text-xl text-gray-400 mb-4 fade-in-up">
            {subtitle}
          </p>
        )}
        
        <h2 className="text-8xl md:text-9xl font-bangers relative">
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-500 ${
                index < visibleLetters
                  ? 'opacity-100 transform translate-y-0 text-gradient-quadrant letter-reveal'
                  : 'opacity-0 transform translate-y-8 text-white'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                textShadow: index < visibleLetters ? '0 0 20px currentColor' : 'none'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h2>
        
        {/* Previous letters fade effect */}
        <div className="absolute inset-0 pointer-events-none">
          {title.split('').map((letter, index) => (
            index < visibleLetters - 3 && (
              <span
                key={`fade-${index}`}
                className="absolute text-8xl md:text-9xl font-bangers text-white/20 transition-all duration-1000"
                style={{
                  left: `${(index / title.length) * 100}%`,
                  transform: 'translateY(-20px)',
                }}
              >
                {letter}
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTitle;