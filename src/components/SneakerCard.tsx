import React, { useState } from 'react';

interface SneakerCardProps {
  image: string;
  title: string;
  price: string;
  category: 'marvel' | 'dc' | 'avengers' | 'indian';
  isSpecial?: boolean;
  splashImage?: string;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ 
  image, 
  title, 
  price, 
  category, 
  isSpecial = false,
  splashImage 
}) => {
  const [showSplash, setShowSplash] = useState(false);

  const categoryColors = {
    marvel: 'bg-red-600',
    dc: 'bg-blue-600',
    avengers: 'bg-purple-600',
    indian: 'bg-yellow-500',
  };

  const handleMouseEnter = () => {
    if (isSpecial) {
      setShowSplash(true);
      setTimeout(() => setShowSplash(false), 800);
    }
  };

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      {/* Main Card */}
      <div className="glass-effect rounded-2xl p-6 hover-scale transition-all duration-500 group-hover:shadow-2xl border border-red-600/30">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[category]} text-white`}>
            {category.toUpperCase()}
          </div>
          
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Card Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient-quadrant transition-all duration-300">
            {title}
          </h3>
          <p className="text-2xl font-black text-gradient-quadrant">
            {price}
          </p>
        </div>
      </div>

      {/* Water Splash Effect */}
      {isSpecial && showSplash && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="splash-effect top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          {splashImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-0 animate-pulse"
              style={{ backgroundImage: `url(${splashImage})` }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SneakerCard;