import React from 'react';

const AnimatedBackground = ({ mousePosition }) => {
  // Generate stars
  const generateStars = (count) => {
    return [...Array(count)].map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }));
  };

  const stars = generateStars(200);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Space Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-[#0a192f] to-[#112240] opacity-90"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }}
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-70 animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}

      {/* Planetary Elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl animate-planet-1"
        style={{
          transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-900 rounded-full opacity-15 blur-3xl animate-planet-2"
        style={{
          transform: `translate(${mousePosition.x / 70}px, ${mousePosition.y / 70}px)`
        }}
      />

      {/* Nebula-like Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 mix-blend-overlay opacity-30"
      />
    </div>
  );
};

export default AnimatedBackground;