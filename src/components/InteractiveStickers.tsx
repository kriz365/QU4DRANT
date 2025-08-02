import React, { useState, useEffect } from 'react';

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  isVisible: boolean;
}

const InteractiveStickers: React.FC = () => {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [stickerCount, setStickerCount] = useState(0);

  const stickerEmojis = ['💥', '⭐', '🔥', '⚡', '💫', '🌟', '✨', '🎯', '🚀', '💎', '🏆', '🎪'];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only add stickers on background areas
      const target = e.target as HTMLElement;
      const isBackgroundArea = target.tagName === 'BODY' || 
                              target.classList.contains('ripple-zone') ||
                              target.tagName === 'SECTION' ||
                              target.tagName === 'DIV' && !target.closest('button, a, img, .glass-effect');

      if (isBackgroundArea && stickers.length < 8) {
        const newSticker: Sticker = {
          id: `sticker-${stickerCount}`,
          emoji: stickerEmojis[Math.floor(Math.random() * stickerEmojis.length)],
          x: e.clientX,
          y: e.clientY,
          scale: 0.8 + Math.random() * 0.4,
          rotation: Math.random() * 360,
          isVisible: true
        };

        setStickers(prev => [...prev, newSticker]);
        setStickerCount(prev => prev + 1);

        // Remove sticker after 5 seconds
        setTimeout(() => {
          setStickers(prev => prev.filter(s => s.id !== newSticker.id));
        }, 5000);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [stickers.length, stickerCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-15">
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className="absolute text-4xl sticker-pop"
          style={{
            left: sticker.x - 20,
            top: sticker.y - 20,
            transform: `scale(${sticker.scale}) rotate(${sticker.rotation}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))'
          }}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  );
};

export default InteractiveStickers;