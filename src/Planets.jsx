import React from 'react';

const Planet = ({ type, size }) => {
  const planetTypes = {
    earth: {
      image: "/api/placeholder/400/400", // Replace with actual Earth image URL
      atmosphere: "inset-0 bg-blue-500/10 rounded-full blur-sm",
      overlay: [
        "w-full h-2 bg-white/10 rotate-45 transform -translate-y-3",
        "w-full h-3 bg-white/5 -rotate-45 transform translate-y-6",
        "w-8 h-8 rounded-full bg-white/10 absolute -top-2 -right-2",
        "w-4 h-4 rounded-full bg-white/10 absolute bottom-1 left-1"
      ]
    },
    mars: {
      image: "/api/placeholder/400/400", // Replace with actual Mars image URL
      atmosphere: "inset-0 bg-red-500/5 rounded-full blur-sm",
      overlay: [
        "w-6 h-6 rounded-full bg-red-900/30 absolute top-1 left-1",
        "w-4 h-4 rounded-full bg-red-950/30 absolute bottom-2 right-2",
        "w-full h-2 bg-red-900/20 rotate-30 transform translate-y-2"
      ]
    },
    gas: {
      image: "/api/placeholder/400/400", // Replace with actual Gas Giant image URL
      atmosphere: "inset-0 bg-purple-500/10 rounded-full blur-md",
      overlay: [
        "w-full h-2 bg-white/20 rotate-12 absolute top-1/4",
        "w-full h-3 bg-white/10 -rotate-12 absolute top-1/2",
        "w-full h-2 bg-white/10 rotate-6 absolute top-3/4"
      ]
    }
  };

  const { image, atmosphere, overlay } = planetTypes[type];

  return (
    <div className={`w-${size} h-${size} rounded-full relative overflow-hidden`} 
         style={{animation: 'pulse-slow 4s infinite ease-in-out'}}>
      {/* Base planet image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={`${type} planet`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      {/* Shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-full" />
      
      {/* Atmosphere effect */}
      <div className={`absolute ${atmosphere}`} />
      
      {/* Additional visual overlays */}
      {overlay.map((className, i) => (
        <div key={i} className={className} />
      ))}
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 rounded-full" />
    </div>
  );
};

export default Planet;