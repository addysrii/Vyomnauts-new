// import React from 'react';
// import { useState} from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import img1 from "./assets/space1.jpg";
// import img2 from "./assets/space2.jpg";
// import img3 from "./assets/space3.jpg";
// import pimg1 from "./assets/s2.jpg";
// import pimg2 from "./assets/trishul.jpeg";
// import pimg3 from "./assets/vaman.jpeg";
// import img4 from "./assets/s.jpeg";
// import e4 from "./assets/events/e4.jpg";
// import e5 from "./assets/events/e5.jpg";
// import Navbar from './Navbar';
// import Description from './Description';
// import Preloader from './Preloader';
// import useFirstVisit from './useFirstVist';
// const LandingPage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { scrollY } = useScroll();
//   const isFirstVisit = useFirstVisit();
//   // Parallax effects for each section
//   const achievementsY = useTransform(scrollY, [0, 500], [0, -50]);
//   const projectsY = useTransform(scrollY, [500, 1000], [0, -50]);
//   const eventsY = useTransform(scrollY, [1000, 1500], [0, -50]);

//   const projects = [
//     { 
//       title: "CanSat 2023-24", 
//       description: "The CANSAT India competition challenges student teams to design and launch miniaturized satellites, providing hands-on experience in aerospace engineering.",
//       image: pimg1
//     },
//     { 
//       title: "Project Trishul", 
//       description: "India's first-ever rocket competition, where our team showcases innovative design and engineering excellence in rocketry.",
//       image: pimg2
//     }
//   ];

//   const events = [
//     { 
//       title: "Solar Observation", 
//       date: "Sept 2024", 
//       description: "Join us for an exciting solar observation session using specialized equipment.",
//       image: e4
//     },
//     { 
//       title: "Space Education Outreach", 
//       date: "August 2024", 
//       description: "Inspiring the next generation of space enthusiasts through interactive workshops.",
//       image: e5
//     }
//   ];

//   return (
//     <>
//       {isFirstVisit && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      
//       <AnimatePresence>
//         {(!isLoading || !isFirstVisit) && (
//           <motion.div 
//             className="relative min-h-screen overflow-x-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Animated Background */}
//             <div className="fixed inset-0 w-full h-screen">
//               <div 
//                 className="absolute inset-0 w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(https://res.cloudinary.com/dnnl72vrp/image/upload/v1738686682/space2_yl8bj8.jpg)`,
//                   opacity: 0.3,
//                   zIndex: 1
//                 }}
//               />
//               <AnimatePresence mode='wait'>
//                 <motion.div 
//                   key={img2}
//                   className="absolute inset-0 w-full h-full bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${img2})`,
//                     zIndex: 2
//                   }}
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     scale: [1, 1.7, 1],
//                   }}
//                   exit={{ 
//                     opacity: 0,
//                     transition: { duration: 1 }
//                   }}
//                   transition={{
//                     opacity: { duration: 1 },
//                     scale: {
//                       duration: 20,
//                       ease: "linear",
//                       repeat: 0,
//                     }
//                   }}
//                 />
//               </AnimatePresence>
//             </div>

//             {/* Content */}
//             <div className="relative z-10">
//               <Navbar />
//               <Description />

//               {/* Projects Section */}
//               <motion.section 
//                 style={{ y: projectsY }}
//                 className="min-h-screen px-8 py-16"
//               >
//                 <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Projects</h2>
//                 <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//                   {projects.map((project, index) => (
//                     <motion.div
//                       key={project.title}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.2 }}
//                       className="group bg-slate-950/60 backdrop-blur-md rounded-xl overflow-hidden"
//                     >
//                       <div className="aspect-video overflow-hidden">
//                         <img 
//                           src={project.image} 
//                           alt={project.title}
//                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                         />
//                       </div>
//                       <div className="p-8">
//                         <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
//                         <p className="text-gray-300 leading-relaxed">{project.description}</p>
//                         <Link to ="/projects">
//                         <motion.button 
//                           whileHover={{ scale: 1.05 }}
//                           className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
//                         >
//                           Learn More
//                         </motion.button>
//                         </Link>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.section>

//               {/* Events Section */}
//               <motion.section 
//                 style={{ y: eventsY }}
//                 className="min-h-screen px-8 py-16"
//               >
//                 <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Events</h2>
//                 <div className="space-y-8 max-w-6xl mx-auto">
//                   {events.map((event, index) => (
//                     <motion.div
//                       key={event.title}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.2 }}
//                       className="bg-slate-950/60 backdrop-blur-md rounded-xl overflow-hidden"
//                     >
//                       <div className="flex flex-col md:flex-row">
//                         <div className="md:w-1/3">
//                           <img 
//                             src={event.image} 
//                             alt={event.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="md:w-2/3 p-8">
//                           <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
//                           <p className="text-purple-400 mb-4">{event.date}</p>
//                           <p className="text-gray-300 leading-relaxed">{event.description}</p>
//                           <Link to={"/events"}>
//                           <motion.button 
//                             whileHover={{ scale: 1.05 }}
//                             className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
//                           >
//                            Explore More
//                           </motion.button>
//                           </Link>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.section>

//               {/* Footer */}
//               <footer className="relative z-10 bg-black/20 backdrop-blur-lg text-white py-12">
//                 <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//                     <p className="text-gray-300">info@psitvyomnauts.com</p>
//                     <p className="text-gray-300">+91 123 456 7890</p>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                     <div className="flex space-x-6">
//                       {['Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
//                         <motion.a
//                           key={platform}
//                           href="#"
//                           whileHover={{ scale: 1.1 }}
//                           className="text-gray-300 hover:text-purple-400 transition-colors"
//                         >
//                           {platform}
//                         </motion.a>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Location</h3>
//                     <p className="text-gray-300">PSIT Campus</p>
//                     <p className="text-gray-300">Kanpur, Uttar Pradesh</p>
//                   </div>
//                 </div>
//               </footer>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default LandingPage;
// import React, { useState, useEffect } from 'react';
// import { 
//   Rocket, 
//   ChevronDown, 
//   Users, 
//   Calendar, 
//   Star,
//   Satellite,
//   Telescope,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react';
// import Navbar from './Navbar';
// import earthi from "./assets/planets/download.jpeg";
// import suni from "./assets/planets/sun.jpeg";
// import marsi from "./assets/planets/mars.jpeg";
// import gasi from "./assets/planets/gas.jpeg";
// import mooni from "./assets/planets/moon.jpeg";
// import Description from './Description';
// import img from "./assets/trishul.jpeg"
// import Footer from './Footer';

// // Stars Background Component
// const StarsBackground = () => {
//   return (
//     <div className="fixed inset-0 pointer-events-none">
//       {[...Array(100)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-yellow-300"
//           style={{
//             width: Math.random() * 2 + 1 + 'px',
//             height: Math.random() * 2 + 1 + 'px',
//             top: Math.random() * 100 + '%',
//             left: Math.random() * 100 + '%',
//             animation: `goldTwinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
//             opacity: Math.random() * 0.7 + 0.3
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Planet Component
// const Planet = ({ type, size }) => {
//   const planetTypes = {
//     earth: { image: earthi },
//     mars: { image: marsi },
//     gas: { image: gasi },
//     moon: { image: mooni }
//   };

//   const { image } = planetTypes[type] || planetTypes.earth;

//   return (
//     <div className={`w-${size} h-${size} rounded-full relative`}>
//       <img 
//         src={image} 
//         alt={`${type} planet`}
//         className="w-full h-full object-cover rounded-full"
//         style={{ animation: 'pulse-slow 4s infinite ease-in-out' }}
//       />
//     </div>
//   );
// };

// // Celestial Body Component
// const CelestialBody = ({ type, size, orbitRadius, speed, delay }) => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation(prev => (prev + 1) % 360);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   const orbitStyle = {
//     position: 'absolute',
//     width: `${orbitRadius * 2}px`,
//     height: `${orbitRadius * 2}px`,
//     borderRadius: '50%',
//     top: '50%',
//     left: '50%',
//     transform: `translate(-50%, -50%) rotate(${rotation * speed + delay}deg)`,
//   };

//   const bodyStyle = {
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//   };

//   return (
//     <div style={orbitStyle} className="pointer-events-none">
//       <div style={bodyStyle} className="relative">
//         <div className="absolute -inset-8 bg-yellow-500/5 blur-xl rounded-full" 
//              style={{ animation: 'goldPulse 4s infinite ease-in-out' }} />
//         <Planet type={type} size={size} />
//       </div>
//       <div className="absolute inset-0 rounded-full border border-yellow-500/10" />
//     </div>
//   );
// };

// // Project Countdown Component
// const ProjectCountdown = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   const projects = [
//     {
//       name: "Rocketry India 2025",
//       description: "Experience our next-generation Rocket 'Trishul' designed to launch on 18th April 2025",
//       date: new Date(2025, 3, 18 ),
//       image: `${img}`
//     },
    
//     {
//       name: "Lunar Base Alpha",
//       description: "First permanent human settlement on the Moon",
//       date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
//       image: "/api/placeholder/400/300"
//     },
//     {
//       name: "Deep Space Telescope",
//       description: "Revolutionary telescope to explore distant galaxies",
//       date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
//       image: "/api/placeholder/400/300"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = projects[currentProject].date.getTime() - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [currentProject]);

//   return (
//     <div className="w-full max-w-9xl mx-auto mt-24 mb-20">
//       <div className="bg-black/90 rounded-3xl p-12 border border-yellow-500/20 backdrop-blur-sm">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl font-bold text-yellow-400 mb-4">
//                 {projects[currentProject].name}
//               </h3>
//               <p className="text-lg text-yellow-100/80">
//                 {projects[currentProject].description}
//               </p>
//             </div>
            
//             <div className="grid grid-cols-4 gap-6">
//               {Object.entries(timeLeft).map(([unit, value]) => (
//                 <div 
//                   key={unit} 
//                   className="bg-black/50 rounded-xl p-4 text-center transform hover:scale-105 transition-transform border border-yellow-500/30"
//                 >
//                   <div className="text-3xl font-bold text-yellow-400">
//                     {value}
//                   </div>
//                   <div className="text-sm text-yellow-100/70 capitalize">
//                     {unit}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="relative group">
//             <img 
//               src={projects[currentProject].image} 
//               alt={projects[currentProject].name}
//               className="rounded-xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const SpaceClubLanding = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 text-gray-200 overflow-hidden">
//       <StarsBackground />
      
//       {/* Solar System */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, opacity: 0.7 }}>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/20 to-transparent" />
        
//         {/* Sun */}
//         <div className="fixed top-1/2 left-1/2 w-24 h-24 -mt-12 -ml-12 rounded-full" 
//              style={{ animation: 'pulse-slow 4s infinite ease-in-out' }}>
//           <img src={suni} alt="Sun" className="rounded-full w-full h-full object-cover" />
//         </div>

//         {/* Orbiting Bodies */}
//         <CelestialBody type="moon" size={12} orbitRadius={150} speed={0.3} delay={180} />
//         <CelestialBody type="earth" size={12} orbitRadius={250} speed={0.2} delay={0} />
//         <CelestialBody type="mars" size={12} orbitRadius={350} speed={0.15} delay={120} />
//         <CelestialBody type="gas" size={12} orbitRadius={450} speed={0.1} delay={240} />
//       </div>

//       <Navbar />

//       <div className="min-h-screen flex flex-col items-center justify-center relative z-10 mt-20">
//         <div 
//           className="text-center px-6 max-w-full mx-auto"
//           style={{
//             transform: `translateY(${scrollPosition * 0.5}px)`,
//             animation: 'fade-in 1s ease-out forwards'
//           }}
//         >
//           <div className="w-full relative z-10">
//             <Description />
//           </div>
          
//           <div className="mt-60">
//             <ProjectCountdown />
//           </div>
//         </div>

//         <div className="absolute bottom-10 w-full text-center" 
//              style={{ animation: 'bounce 1s infinite' }}>
//           <ChevronDown className="mx-auto h-8 w-8 text-cyan-400" />
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-6 py-20 relative z-10">
//   <div className="grid md:grid-cols-3 gap-12">
//     {[
//       { icon: Telescope, title: 'Observation', text: 'Access to advanced telescopes and imaging equipment' },
//       { icon: Star, title: 'Research', text: 'Participate in real astronomical research projects' },
//       { icon: Satellite, title: 'Technology', text: 'Learn about space technology and satellite systems' }
//     ].map((feature, index) => (
//       <div
//         key={feature.title}
//         className="text-center transform hover:scale-105 transition-transform p-6 rounded-lg 
//           bg-black border border-[#FFD700]/20 
//           hover:border-[#FFD700]/40 backdrop-blur-sm"
//       >
//         <feature.icon className="h-12 w-12 mx-auto mb-4 text-[#FFD700]" />
//         <h3 className="text-xl font-bold mb-2 text-[#FFD700]">{feature.title}</h3>
//         <p className="text-gray-300">{feature.text}</p>
//       </div>
//     ))}
//   </div>
  
// </div>
// <div className='mt-8 -px-6'>
//     <Footer/>
//   </div>

//       <style jsx>{`
//         @keyframes orbit {
//           from { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
//           to { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(0.98); }
//         }

//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes goldTwinkle {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.3; }
//         }

//         @keyframes goldPulse {
//           0%, 100% { opacity: 0.5; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(0.95); }
//         }

//         @keyframes goldShine {
//           0%, 100% { filter: brightness(1); }
//           50% { filter: brightness(1.2); }
//         }

//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SpaceClubLanding;
// SpaceClubLanding.jsx
import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  ChevronDown, 
  Star, 
  Satellite, 
  Telescope 
} from 'lucide-react';
import img1 from "./assets/trishul2.png";
import img from "./assets/trishul-1.png";
import Navbar from './Navbar';
import VerticalSpaceCards from './Description';
import Footer from './Footer';

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

// Stars Background Component
const StarsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15
      });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.15);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-orange-900/10 to-black 
                   opacity-90 transition-all duration-1000"
        style={{ 
          transform: `translateY(${scrollPosition * 0.2}px)`,
          opacity: 1 - (scrollPosition * 0.0005)
        }}
      />

      {/* Animated Particle Layers */}
      <div 
        className="absolute inset-0 transition-transform duration-200"
        style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
      >
        {[...Array(100)].map((_, i) => {
          const colors = [
            'rgba(255, 255, 255, 0.8)',  // White
            'rgba(255, 200, 0, 0.8)',    // Yellow
            'rgba(255, 140, 0, 0.8)',    // Orange
            'rgba(255, 165, 0, 0.8)'     // Golden
          ];
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: colors[Math.floor(Math.random() * colors.length)],
                animation: `particleFloat ${Math.random() * 10 + 5}s infinite ease-in-out ${Math.random() * 5}s`,
                boxShadow: '0 0 8px currentColor'
              }}
            />
          );
        })}
      </div>

      {/* Cosmic Dust Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-300"
        style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
      >
        {[...Array(50)].map((_, i) => {
          const colors = [
            'rgba(255, 200, 0, 0.6)',    // Yellow
            'rgba(255, 140, 0, 0.6)',    // Orange
            'rgba(255, 255, 255, 0.6)',  // White
            'rgba(255, 165, 0, 0.6)'     // Golden
          ];
          return (
            <div
              key={`dust-${i}`}
              className="absolute"
              style={{
                width: '3px',
                height: '3px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: colors[Math.floor(Math.random() * colors.length)],
                animation: `cosmicDust ${Math.random() * 15 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
                boxShadow: '0 0 12px currentColor'
              }}
            />
          );
        })}
      </div>

      {/* Energy Wave Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-radial from-yellow-500/20 via-orange-500/10 to-transparent" 
          style={{ 
            animation: 'energyWave 20s infinite',
            transform: `translate(${-mousePosition.x * 0.1}px, ${-mousePosition.y * 0.1}px)`
          }} 
        />
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ Icon, title, text }) => (
  <div className="relative group">
    <div className="absolute -inset-1  bg-gradient-to-t from-blue-900/30 to-slate-400/10
                    rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-700" />
    <div className="relative p-8 rounded-xl bg-gradient-to-t from-blue-900/30 to-slate-400/10 border-2 border-yellow-500/50 
                    hover:border-orange-400/80 transition-all duration-500
                    transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.3)]">
      <Icon className="h-12 w-12 mb-6 text-green-500" />
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 
                     bg-clip-text text-transparent">{title}</h3>
      <p className="text-white/90">{text}</p>
    </div>
  </div>
);

// Project Countdown Component
const ProjectCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const projects = [
    {
      name: "Rocketry India 2025",
      description: "Experience our next-generation Rocket 'Trishul' designed to launch on 18th April 2025",
      date: new Date(2025, 3, 18),
      image: img
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = projects[0].date.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className=" bg-gradient-to-r from-slate-700/40 via-gray-900/50 border-2 border-yellow-500/50 rounded-3xl p-4 sm:p-8 lg:p-12 backdrop-blur-lg
                    shadow-[0_0_50px_rgba(255,165,0,0.15)] hover:shadow-[0_0_70px_rgba(255,165,0,0.25)]
                    transition-all duration-500">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300
                            bg-clip-text text-transparent mb-2 sm:mb-4">
                {projects[0].name}
              </h3>
              <p className="text-base sm:text-lg text-white/90">
                {projects[0].description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-black/90 border-2 border-yellow-500/50 rounded-xl p-3 sm:p-6 text-center
                            transform hover:scale-105 transition-all duration-300
                            hover:border-orange-400/80 hover:shadow-[0_0_30px_rgba(255,165,0,0.2)]"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/90 capitalize mt-1 sm:mt-2">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group mt-6 md:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/50 to-orange-500/50 
                          rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
            <img
              src={projects[0].image}
              alt={projects[0].name}
              className="relative rounded-xl w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover
                        transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const SpaceClubLanding = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-700/40 via-gray-900/50 to-blue-900/60 text-white overflow-hidden">
      <StarsBackground />
      <Navbar />
      <VerticalSpaceCards/>
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 mt-20">
        <div className="text-center px-6 max-w-6xl mx-auto space-y-24">
          <ProjectCountdown />
        </div>

        <div className="absolute bottom-10 w-full text-center animate-bounce">
          <ChevronDown className="mx-auto h-8 w-8 text-yellow-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { Icon: Telescope, title: 'Observation', text: 'Access to advanced telescopes and imaging equipment for deep space observation' },
            { Icon: Star, title: 'Research', text: 'Participate in groundbreaking astronomical research projects and discoveries' },
            { Icon: Satellite, title: 'Technology', text: 'Learn about cutting-edge space technology and satellite systems' }
          ].map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <Footer/>
      
      <style jsx global>{`
        @keyframes particleFloat {
          0%, 100% { 
            opacity: 0.4; 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            opacity: 0.8;
            transform: translate(10px, -10px) rotate(90deg);
          }
          50% { 
            opacity: 0.2;
            transform: translate(-5px, 15px) rotate(180deg);
          }
          75% { 
            opacity: 0.6;
            transform: translate(-15px, -5px) rotate(270deg);
          }
        }

        @keyframes cosmicDust {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.5) rotate(180deg);
            }
        }

        @keyframes energyWave {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.1) rotate(5deg); 
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.9);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 165, 0, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 165, 0, 0.5);
        }

        ::selection {
          background: rgba(255, 165, 0, 0.2);
          color: #fff;
        }

        body {
          background-color: black;
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          text-shadow: 0 0 8px rgba(255, 165, 0, 0.5);
        }

        .link-underline {
          position: relative;
        }

        .link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #ffd700, #ff8c00);
          transition: width 0.3s ease;
        }

        .link-underline: {
          position: relative;
        }

        .link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #9370db, #4b0082);
          transition: width 0.3s ease;
        }

        .link-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default SpaceClubLanding;

// Additional utility components you might need:

// Loading Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-yellow-500/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin border-t-transparent"></div>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center p-8 rounded-lg border-2 border-yellow-500/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Something went wrong</h2>
            <p className="text-yellow-100/80 mb-6">Please try refreshing the page</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 
                       border border-yellow-500/50 rounded-lg transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage in your app:
// import { BrowserRouter as Router } from 'react-router-dom';

// const App = () => (
//   <ErrorBoundary>
//     <Router>
//       <SpaceClubLanding />
//     </Router>
//   </ErrorBoundary>
// );

// export default App;
// import React from 'react';
// import { ExternalLink } from 'lucide-react';
// import VerticalSpaceCards from './Description';

// const SpaceDiscovery = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-full h-full">
//           {/* Animated circles */}
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full opacity-20"
//               style={{
//                 width: `${300 + i * 200}px`,
//                 height: `${300 + i * 200}px`,
//                 border: '2px solid rgba(255, 200, 0, 0.1)',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 animation: `orbit ${15 + i * 5}s linear infinite`
//               }}
//             />
//           ))}
          
//           {/* Stars */}
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={`star-${i}`}
//               className="absolute rounded-full bg-yellow-200"
//               style={{
//                 width: Math.random() * 3 + 'px',
//                 height: Math.random() * 3 + 'px',
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
  
// </div>
// <div className='mt-8 -px-6'>
//     <Footer/>
//   </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Navigation */}
//         <nav className="flex items-center justify-between mb-16">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10">
//               <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400">
//                 <path
//                   fill="currentColor"
//                   d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex space-x-8">
//             <NavLink href="#home">Home</NavLink>
//             <NavLink href="#service">Service</NavLink>
//             <NavLink href="#team">Team</NavLink>
//             <NavLink href="#blog">Blog</NavLink>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"> */}
//           {/* <div>
//             <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
//               Discover
//               <br />
//               Deep Space
//             </h1>
//             <p className="text-gray-300 mb-8 text-lg">
//               A human mission to Moon has been the subject
//               <br />
//               of science since early 1940's
//             </p>
//             <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
//               Join Now
//             </button>
//           </div> */}
//           <VerticalSpaceCards/>
//         {/* </div> */}

//         {/* Planet Cards */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-yellow-300 mb-8">Visit Our Solar System</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <PlanetCard name="Venus" color="from-yellow-600" />
//             <PlanetCard name="Mars" color="from-red-600" />
//             <PlanetCard name="Sun" color="from-yellow-400" />
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes orbit {
//           from {
//             transform: translate(-50%, -50%) rotate(0deg);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(360deg);
//           }
//         }

//         @keyframes twinkle {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.2;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const NavLink = ({ href, children }) => (
//   <a
//     href={href}
//     className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
//   >
//     {children}
//   </a>
// );

// const PlanetCard = ({ name, color }) => (
//   <div className="relative group overflow-hidden rounded-2xl">
//     <div className={`bg-gradient-to-b ${color} to-black h-48 w-full transition-transform duration-300 group-hover:scale-105`}>
//       <div className="p-6 flex justify-between items-start h-full">
//         <span className="text-xl font-semibold text-white">{name}</span>
//         <ExternalLink className="text-white opacity-75 group-hover:opacity-100 transition-opacity" />
//       </div>
//     </div>
//   </div>
// );

// export default SpaceDiscovery;

// import React, { useEffect, useRef, useState } from 'react';
// import img from "./assets/current/image.jpg"
// import img1 from "./assets/current/rocket.jpg"
// import img2 from "./assets/current/spacev1.jpg"
// import img3 from "./assets/current/mountain2.png"
// import img4 from "./assets/current/mountain3.png"
// import img5 from "./assets/current/sky.jpg"
// const ParallaxScroll = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const headerRef = useRef(null);
//   const sectionRef = useRef(null);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const translateStyle = (speed) => ({
//     transform: `translateY(${scrollPosition * speed}px)`
//   });

//   return (
//     <div className="font-['Poppins'] overflow-x-hidden">
//       {/* Header Section */}
//       <header ref={headerRef} className="w-full h-screen relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/5 z-20"></div>
        
//         {/* Navigation */}
//         <nav className="absolute top-0 left-0 w-full py-4 z-30 bg-gradient-to-b from-black/5 to-transparent">
//           <div className="max-w-[70rem] px-8 mx-auto flex justify-between items-center">
//             <h3 className="text-white text-lg uppercase tracking-[2px] font-semibold">
//               Brand<span className="font-light">Name</span>
//             </h3>
//             <div className="w-6 h-6 cursor-pointer flex items-center justify-end">
//               <div className="relative w-5 h-[3px] bg-white rounded">
//                 <div className="absolute right-0 w-6 h-[3px] bg-white rounded -translate-y-2"></div>
//                 <div className="absolute right-0 w-6 h-[3px] bg-white rounded translate-y-2"></div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Parallax Elements */}
//         <h1 
//           className="absolute z-30 w-full text-center text-5xl md:text-6xl font-semibold text-white top-1/2 -translate-y-1/2"
//           style={translateStyle(0.1)}
//         >
//           Discover.
//         </h1>

//         <img 
//           src={img1}
//           alt="Person"
//           className="absolute -bottom-[100px] -left-[70px] w-[650px] z-20"
//           style={translateStyle(-0.25)}
//         />
        
//         <img 
//           src={img2}
//           alt="Mountain 1"
//           className="absolute -bottom-[100px] right-0 w-[1500px] z-[19]"
//           style={translateStyle(-0.2)}
//         />
        
//         <img 
//           src={img3}
//           alt="Mountain 2"
//           className="absolute -bottom-[100px] left-0 w-[1100px] z-[18]"
//           style={translateStyle(0.4)}
//         />
        
//         <img 
//           src={img4}
//           alt="Mountain 3"
//           className="absolute bottom-[150px] right-0 w-[900px] z-[17]"
//           style={translateStyle(0.3)}
//         />
        
//         <img 
//           src={img5}
//           alt="Sky"
//           className="absolute bottom-[250px] right-0 w-[2100px]"
//           style={translateStyle(0.5)}
//         />
//       </header>

//       {/* Content Section */}
//       <section ref={sectionRef} className="w-full bg-[#151515] relative">
//         <div className="absolute bottom-full h-[300px] w-full left-0 z-20 bg-gradient-to-t from-[#151515] to-transparent"
//              style={{ height: `${scrollPosition * 0.5 + 300}px` }}></div>
        
//         <div className="max-w-[70rem] mx-auto p-12 grid md:grid-cols-2 gap-8 items-center min-h-screen">
//           <div className="text-white space-y-4 transform -translate-y-12 opacity-0 transition-opacity duration-500"
//                style={{ opacity: scrollPosition / 800 }}>
//             <h3 className="text-2xl font-semibold relative pb-2">
//               About
//               <div className="absolute bottom-0 left-0 h-[3px] bg-white transition-all duration-300"
//                    style={{ width: `${(scrollPosition / 800) * 30}%` }}></div>
//             </h3>
//             <p className="text-base md:text-lg">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, 
//               a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, 
//               doloribus odio consectetur consequuntur soluta quasi nobis!
//             </p>
//           </div>

//           <div className="transform translate-y-12 opacity-0 transition-opacity duration-500"
//                style={{ opacity: scrollPosition / 800 }}>
//             <img 
//               src={img}
//               alt="Content"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ParallaxScroll;
