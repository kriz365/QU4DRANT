import React, { useState } from 'react';
import { X, ArrowRight, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: 'MARVEL COLLECTION', color: 'from-red-400 to-red-600' },
    { name: 'DC UNIVERSE', color: 'from-blue-400 to-blue-600' },
    { name: 'AVENGERS SERIES', color: 'from-purple-400 to-purple-600' },
    { name: 'INDIAN HERITAGE', color: 'from-yellow-400 to-yellow-600' },
    { name: 'LIMITED EDITION', color: 'from-green-400 to-green-600' },
    { name: 'CONTACT US', color: 'from-cyan-400 to-cyan-600' },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 p-4 glass-effect rounded-full hover:scale-110 transition-all duration-300 border-2 border-yellow-400"
        style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* QU4DRANT Logo */}
      <div className="fixed top-8 left-8 z-40">
        <h1 className="text-2xl font-bangers text-gradient-quadrant">
          QU4DRANT
        </h1>
      </div>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 z-50 transition-all duration-700 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/90 via-orange-50/90 to-pink-50/90 backdrop-blur-xl" />
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-4 glass-effect rounded-full hover:scale-110 transition-all duration-300 border-2 border-coral-400"
          style={{ backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Items */}
        <div className="relative h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="relative overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-6xl md:text-8xl font-bangers transition-all duration-500 ${
                isOpen ? 'fade-in-up' : ''
              } ${
                hoveredItem === item.name 
                  ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent transform translate-y-0` 
                  : 'text-gray-700 transform translate-y-4'
              }`}>
                {item.name}
              </div>
              
              {/* Arrow that appears on hover */}
              <ArrowRight className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 transition-all duration-300 ${
                hoveredItem === item.name ? 'opacity-100 translate-x-0 text-yellow-500' : 'opacity-0 translate-x-8'
              }`} />
              
              {/* Background color change on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 transition-all duration-300 rounded-2xl ${
                hoveredItem === item.name ? 'scale-110' : 'scale-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;