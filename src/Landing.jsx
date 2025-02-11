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
import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  ChevronDown, 
  Star, 
  Satellite, 
  Telescope 
} from 'lucide-react';
import Navbar from './Navbar';
import VerticalSpaceCards from './Description';
import Footer from './Footer';
import img from "./assets/trishul2.png"

const StarsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Parallax Star Layers */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full bg-yellow-200"
            style={{
              width: '1px',
              height: '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkleSmall ${Math.random() * 3 + 2}s infinite ease-in-out`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          />
        ))}
      </div>

      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute"
            style={{
              width: '2px',
              height: '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(255, ${220 + Math.random() * 35}, 100, ${Math.random() * 0.8 + 0.2})`,
              animation: `twinkleMedium ${Math.random() * 4 + 3}s infinite ease-in-out`,
              boxShadow: '0 0 4px rgba(255, 215, 0, 0.5)'
            }}
          />
        ))}
      </div>

      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` }}
      >
        {[...Array(25)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute"
            style={{
              width: '3px',
              height: '3px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(255, ${200 + Math.random() * 55}, 0, ${Math.random() * 0.8 + 0.2})`,
              animation: `twinkleLarge ${Math.random() * 5 + 4}s infinite ease-in-out`,
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-yellow-200"
          style={{
            top: `${Math.random() * 50}%`,
            left: '-10px',
            animation: `shootingStar ${Math.random() * 10 + 10}s infinite linear ${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ Icon, title, text }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-300 
                    rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
    <div className="relative p-8 rounded-xl bg-black border-2 border-yellow-500/30 
                    hover:border-yellow-500/50 transition-all duration-300
                    transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
      <Icon className="h-12 w-12 mb-6 text-yellow-400" />
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 
                     bg-clip-text text-transparent">{title}</h3>
      <p className="text-yellow-100/80">{text}</p>
    </div>
  </div>
);



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
    description: "Experience our next-generation Rocket 'Trishul' set to launch on 18th April 2025",
     date: new Date(2025, 3, 18 ),
      image: `${img}`
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
      <div className="bg-black border-2 border-yellow-500/30 rounded-3xl p-4 sm:p-8 lg:p-12 backdrop-blur-lg
                    shadow-[0_0_50px_rgba(255,215,0,0.1)] hover:shadow-[0_0_70px_rgba(255,215,0,0.2)]
                    transition-all duration-500">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500
                            bg-clip-text text-transparent mb-2 sm:mb-4">
                {projects[0].name}
              </h3>
              <p className="text-base sm:text-lg text-yellow-100/90">
                {projects[0].description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-black border-2 border-yellow-500/30 rounded-xl p-3 sm:p-6 text-center
                            transform hover:scale-105 transition-all duration-300
                            hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-yellow-200/80 capitalize mt-1 sm:mt-2">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group mt-6 md:mt-0">
            <div className="absolute -inset-1 bg-black 
                          rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <img
              src={projects[0].image}
              alt={projects[0].name}
              className="relative rounded-xl w-full h-[400px] sm:h-[550px] lg:h-[650px] 
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
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden">
      <StarsBackground />
<Navbar/>
<div className='mt-8'>
<VerticalSpaceCards/>
</div>
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 mt-10">
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
        @keyframes twinkleSmall {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }

        @keyframes twinkleMedium {
          0%, 100% { opacity: 1; transform: scale(1.2); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }

        @keyframes twinkleLarge {
          0%, 100% { opacity: 1; transform: scale(1.4); box-shadow: 0 0 10px rgba(255, 215, 0, 0.8); }
          50% { opacity: 0.5; transform: scale(1); box-shadow: 0 0 5px rgba(255, 215, 0, 0.4); }
        }

        @keyframes shootingStar {
          0% { 
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% { 
            transform: translateX(200vw) translateY(200vh) rotate(45deg);
            opacity: 0;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
        }
      `}</style>
    </div>
  );
};

export default SpaceClubLanding;
