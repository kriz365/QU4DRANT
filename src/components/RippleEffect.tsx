import React, { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let rippleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Check if cursor is over background/empty areas
      const target = e.target as HTMLElement;
      const isBackgroundArea = target.tagName === 'BODY' || 
                              target.classList.contains('ripple-zone') ||
                              target.classList.contains('bg-black') ||
                              target.tagName === 'SECTION' ||
                              target.tagName === 'DIV' && !target.closest('button, a, img, .glass-effect');

      if (isBackgroundArea) {
        // Throttle ripple creation more smoothly
        if (ripples.length < 2) {
          const newRipple: Ripple = {
            id: rippleId++,
            x: e.clientX,
            y: e.clientY,
          };

          setRipples(prev => [...prev, newRipple]);

          // Remove ripple after silk-like animation completes
          setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
          }, 1200);
        }
      }
    };

    // Smoother throttling for silk-like effect
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        handleMouseMove(e);
        throttleTimer = null;
      }, 200); // Slower, more elegant timing
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [ripples.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="silk-ripple-effect"
          style={{
            left: ripple.x - 75,
            top: ripple.y - 75,
            width: 150,
            height: 150,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;