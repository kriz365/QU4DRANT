import React from 'react';

const InfiniteMarquee: React.FC = () => {
  const trendingSneakers = [
    {
      image: 'https://i.etsystatic.com/27159050/r/il/d1172d/3015750274/il_1588xN.3015750274_nypx.jpg',
      name: 'Spider-Man Web Slinger',
      price: '$299'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.C6Kt0jxxPEGNL10LXO4WdgHaFO?w=268&h=189&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Batman Dark Knight',
      price: '$349'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.FYXeBj5SfOmWIgp_arRKLAHaEL?w=327&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Iron Man Reactor',
      price: '$399'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.40tJKUGz4fPEuHNjwu-dXQHaHY?w=167&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Captain America Shield',
      price: '$329'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.iVeUJ44SQ5FhYAfdDbPsgQHaHa?w=182&h=182&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Wonder Woman Lasso',
      price: '$359'
    },
    {
      image: 'data:image/webp;base64,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',
      name: 'Hanuman Power',
      price: '$279'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.dtY1qot0pli5U2aQHALLtwHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Krishna Divine',
      price: '$309'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.hrZU4oR8_JetMSovvz_rJQHaHa?w=210&h=210&c=7&r=0&o=7&pid=1.7&rm=3',
      name: 'Thor Thunder',
      price: '$379'
    },
  ];

  // Duplicate the array for seamless loop
  const duplicatedSneakers = [...trendingSneakers, ...trendingSneakers];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-r from-red-900/20 to-blue-900/20 ripple-zone">
      <div className="mb-12">
        <h2 className="text-6xl font-bangers text-center text-gradient-quadrant">
          TRENDING NOW
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex space-x-8 marquee">
          {duplicatedSneakers.map((sneaker, index) => (
            <div
              key={`${sneaker.name}-${index}`}
              className="flex-shrink-0 w-80 glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group border border-red-600/30"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={sneaker.image}
                  alt={sneaker.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-quadrant transition-all duration-300">
                  {sneaker.name}
                </h3>
                <p className="text-2xl font-black text-gradient-quadrant">
                  {sneaker.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default InfiniteMarquee;