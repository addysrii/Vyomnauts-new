// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ChevronRight, ChevronLeft, X, Expand } from 'lucide-react';
// // import Navbar from './Navbar';
// // import img from "./assets/trishul.jpeg"
// // import demo1 from "./assets/tutorial1.mp4"
// // import demo2 from "./assets/roket.mkv"
// // import img1 from  "./assets/s2.jpeg"
// // import img2 from "./assets/vaman.jpeg"

// // const ProjectsSlider = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [showCarousel, setShowCarousel] = useState(false);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 768);
// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const handleEscape = (e) => {
// //       if (e.key === 'Escape' && showCarousel) {
// //         setShowCarousel(false);
// //         setCurrentImageIndex(0);
// //       }
// //     };
// //     window.addEventListener('keydown', handleEscape);
// //     return () => window.removeEventListener('keydown', handleEscape);
// //   }, [showCarousel]);
// //   const projects = [{
// //     year: '2023',
// //     title: 'CanSat 2023-24',
// //     description: "The CANSAT India competition is a nationally recognized event organized by the Astronautical Society of India (ASI), designed to challenge student teams to design, build, and launch miniaturized satellites known as CANSATs. These small devices, roughly the size of a soft drink can, simulate real satellite missions by performing tasks like data collection, telemetry transmission, and recovery. The competition provides hands-on experience in aerospace engineering, programming, and electronics, mirroring the challenges faced in real-world space missions. In the 2023-24 edition, our team, PSIT Cosmonauts, proudly participated with our CANSAT named Abhay Charan. After months of hard work, we successfully completed the mission requirements and earned national recognition by securing 7th place across India. This remarkable achievement demonstrated our team's technical expertise, innovation, and teamwork, placing our institution on the map in the aerospace community. Our efforts were recognized by Dr. S. Somanath, the Director of ISRO, who praised the skill and ingenuity behind Abhay Charan. His commendation, along with our performance, has motivated us to continue pushing boundaries in aerospace technology, preparing us for future competitions like the NASA CANSAT. This milestone is a proud moment for our team and the PSIT community.",
// //     status: 'Completed',
// //     metrics: {
// //       altitude: '1000m',
// //       duration: '45min',
// //       dataPoints: '2.5K'
// //     },
// //     video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4`,
// //     images: [img1, img1, img1]
// //   },
// //   {
// //     year: '2024',
// //     title: 'CanSat 2024-25',
// //     description: "The CANSAT India competition 2024-25 is an eagerly awaited event, and PSIT Vyomnauts are ready to take on the challenge with renewed enthusiasm and innovation. Building on the success of our previous CANSAT, Abhay Charan, which secured 7th place nationwide, we have carefully analyzed our learnings to return stronger than ever. This year, we proudly present Rohini Sat, a refined and advanced model engineered to meet the rigorous demands of the competition. Our experience from the 2023-24 challenge has honed our expertise in aerospace engineering, electronics, and programming, allowing us to integrate several key technical improvements. With these advancements, we are confident that Rohini Sat will surpass the performance of its predecessor. The recognition we received from Dr. S. Somanath, Director of ISRO, for our previous project has further fueled our ambition. With a clear vision, meticulous preparation, and an even more ambitious mission, we are determined to make a significant impact in this year's competition. Our goal is not just to compete but to excel, pushing the boundaries of student-driven aerospace innovation. 🚀 Stay tuned as we embark on this journey to redefine possibilities in CANSAT technology!",
// //     briefDescription: 'The recognition we received from Dr. S. Somanath, Director of ISRO, for our last project has fueled our determination to excel further. With a clear vision, advanced preparation, and a more ambitious mission, we are aiming for even greater success in the 2024-25 competition, setting our sights on making a significant mark in the world of aerospace engineering.',
// //     status: 'Ongoing',
// //     video: demo1,
// //     images: [img1, img1, img1]
// //   },
// //   {
// //     year: '2024',
// //     title: 'Rocketry 2024-2025',
// //     description: 'Advanced telemetry system development with real-time data transmission and environmental monitoring capabilities.',
// //     briefDescription: 'Next-generation CanSat featuring enhanced sensors, improved telemetry, and advanced recovery systems.',
// //     status: 'In Development',
// //     video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687215/cansat_showcase12345_fc2v5r.mp4`,
// //     images: [img, img, img]
// //   }
// // ];
// //   // {
// //   //   year: '2024',
// //   //   title: 'Vaman',
// //   //   description: 'As part of our space club, PSIT Vyomnauts, we are thrilled to embark on an exciting project todevelop Vaman, our version of the renowned Cheetah Robot. Inspired by the pioneering workdone by MIT, Vaman is designed to exhibit agility, speed, and dynamic movements akin to a realcheetah, making it a formidable engineering and robotics challenge. Through this project, we aimto create a cutting-edge robotic marvel that stands as a unique innovation from our college.',
// //   //   briefDescription: 'By developing Vaman as a college project, we seek to enhance our institution’s reputation in robotics and motivate future students to dream big and undertake ambitious technologicalprojects. This bold initiative represents our leap into the world of advanced robotics, setting a benchmark for innovation and excellence.',
// //   //   status: 'In Development',
// //   //   metrics: {
// //   //     altitude: '1200m',
// //   //     duration: '60min',
// //   //     dataPoints: '5K'
// //   //   },
// //   //   video : `${demo1}`,
// //   //   images: [
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //   ]
// //   // },
// //   // {
// //   //   year: '2024',
// //   //   title: 'HoverCraft',
// //   //   description: 'As part of our space club, PSIT Vyomnauts, we are embarking on an exciting project to developa hovercraft, named Airavat. This innovative vehicle is designed to glide smoothly oversurfaces, powered by air cushion technology, making it a versatile engineering and robotics challenge. Inspired by the advancements in hovercraft design, we aim to create our own uniqueversion, showcasing the ingenuity and technical expertise of our college.',
// //   //   briefDescription: 'By developing Airavat as a college project, we aim to elevate our institution reputation ininnovative engineering and inspire future students to undertake bold and ambitious technological initiatives. It’s a pioneering step that signifies our entry into the realm of advanced hovercraft technology.',
// //   //   metrics: {
// //   //     // altitude: '1200m',
// //   //     // duration: '60min',
// //   //     // dataPoints: '5K'
// //   //   },
// //   //   video : `${demo1}`,
// //   //   images: [
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //   ]
// //   // },
// //   // {
// //   //   year: '2025',
// //   //   title: 'ISRO Robotics Challenge – URSC 2025',
// //   //   description: 'PSIT Vyomnauts is thrilled to participate in the ISRO Robotics Challenge - URSC 2025,hosted by the U R Rao Satellite Centre (URSC), ISRO. This competition invites teams fromacross the nation to develop innovative robotic solutions tailored for space exploration andsatellite missions. As a passionate group of aspiring space scientists and engineers, we are proudto represent our institution in this prestigious event.',
// //   //   briefDescription: 'By participating in the ISRO Robotics Challenge, PSIT Vyomnauts aims to make a meaningfulimpact while gaining invaluable experience and exposure in the field of space robotics. We are excited to collaborate, innovate, and strive for excellence as we work towards making our markin this groundbreaking competition.',
// //   //   metrics: {
// //   //     // altitude: '1200m',
// //   //     // duration: '60min',
// //   //     // dataPoints: '5K'
// //   //   },
// //   //   video : `${demo1}`,
// //   //   images: [
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //    `${img2}`,
// //   //   ]
// //   // },
  

// //   const closeCarousel = () => {
// //     setShowCarousel(false);
// //     setCurrentImageIndex(0);
// //   };

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev + 1) % projects.length);
// //   };

// //   const previousImage = () => {
// //     setCurrentImageIndex((prev) => 
// //       prev === 0 ? projects[currentIndex].images.length - 1 : prev - 1
// //     );
// //   };

// //   const nextImage = () => {
// //     setCurrentImageIndex((prev) => 
// //       prev === projects[currentIndex].images.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   const years = [...new Set(projects.map((project) => project.year))];

// //   const ImageCarousel = () => (
// //     <motion.div 
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
// //     >
// //       <button onClick={closeCarousel} className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
// //         <X className="w-6 h-6" />
// //       </button>
      
// //       <div className="relative z-10 px-4" onClick={(e) => e.stopPropagation()}>
// //         <button onClick={previousImage} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
// //           <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
// //         </button>

// //         <img
// //           src={projects[currentIndex].images[currentImageIndex]}
// //           alt={`${projects[currentIndex].title} - Image ${currentImageIndex + 1}`}
// //           className="max-h-[80vh] max-w-[90vw] md:max-w-[80vw] object-contain"
// //         />

// //         <button onClick={nextImage} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
// //           <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
// //         </button>
// //       </div>
// //     </motion.div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-[#0A0F1C] text-white relative pt-8">
// //     <AnimatePresence>
// //       {showCarousel && <ImageCarousel />}
// //     </AnimatePresence>
    
// //     <div className="absolute inset-0">
// //       <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-transparent opacity-40" />
// //     </div>

// //     <Navbar />

// //       {/* Timeline - Hidden on mobile, shown as dropdown */}
// //       {!isMobile ? (
// //         <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 hidden md:block">
// //           <div className="flex flex-col gap-8 relative">
// //             <div className="w-px h-full bg-slate-800 absolute left-0"></div>
// //             {years.map((year) => (
// //               <div key={year} className={`pl-8 relative cursor-pointer ${
// //                 projects[currentIndex].year === year ? 'text-blue-400' : 'text-slate-600'
// //               }`}>
// //                 <div className={`absolute left-0 w-2 h-2 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${
// //                   projects[currentIndex].year === year ? 'bg-blue-400 ring-2 ring-blue-400/20' : 'bg-slate-800'
// //                 }`} onClick={() => setCurrentIndex(projects.findIndex((project) => project.year === year))} />
// //                 {year}
// //               </div>
// //             ))}
// //           </div>
// //           <button onClick={nextSlide} className="mt-8 w-12 h-12 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center hover:bg-slate-700 transition-colors duration-300">
// //             <ChevronRight className="w-6 h-6" />
// //           </button>
// //         </div>
// //       ) : (
// //         <select 
// //           value={currentIndex}
// //           onChange={(e) => setCurrentIndex(Number(e.target.value))}
// //           className="mx-4 mt-4 bg-slate-800 text-white px-4 py-2 rounded-lg w-full md:hidden"
// //         >
// //           {projects.map((project, index) => (
// //             <option key={index} value={index}>
// //               {project.year} - {project.title}
// //             </option>
// //           ))}
// //         </select>
// //       )}

// //       {/* Project Content */}
// //       <div className="md:ml-48 px-4 md:px-0 relative mt-8 md:mt-0 right-8">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentIndex}
// //             initial={{ opacity: 0, x: 100 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -100 }}
// //             className="flex flex-col gap-8"
// //           >
// //             <div className="mt-4 md:mt-12">
// //               <div className="flex items-center gap-4 mb-4">
// //                 <span className={`px-3 py-1 text-sm rounded-full ${
// //                   projects[currentIndex].status === 'Completed' ? 'bg-green-500/20 text-green-400' :
// //                   projects[currentIndex].status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
// //                   'bg-slate-500/20 text-slate-400'
// //                 }`}>
// //                   {projects[currentIndex].status}
// //                 </span>
// //               </div>
// //               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-100">
// //                 {projects[currentIndex].title}
// //               </h1>
// //             </div>

// //             {/* Video/Image Section - Full Width */}
// //             <div className="relative w-full h-[250px] md:h-[600px] ">
// //               <video
// //                 src={projects[currentIndex].video}
// //                 controls
// //                 autoPlay
// //                 muted
// //                 loop
// //                 className="w-full h-full object-cover rounded-lg"
// //               />
// //               <button
// //                 onClick={() => setShowCarousel(true)}
// //                 className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
// //               >
// //                 <Expand className="w-4 h-4" />
// //                 <span className="hidden md:inline">Explore More</span>
// //               </button>
// //             </div>

// //             {/* Description Section - Full Width */}
// //             <div className="w-full bg-slate-800/30 rounded-lg p-4 md:p-6 ">
// //               <h3 className="text-xl font-semibold mb-4 text-slate-200">Project Overview</h3>
// //               <p className="text-slate-400 mb-6 leading-relaxed">
// //                 {projects[currentIndex].description}
// //               </p>
// //               <div className="border-t border-slate-700 pt-6">
// //                 {projects[currentIndex].briefDescription && (
// //                   <>
// //                     <h4 className="text-lg font-medium mb-3 text-slate-300">Key Features</h4>
// //                     <p className="text-slate-400 leading-relaxed">
// //                       {projects[currentIndex].briefDescription}
// //                     </p>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectsSlider;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRight, ChevronLeft, X, Expand, Youtube, FileImage, Newspaper } from 'lucide-react';
// import Navbar from './Navbar';
// import img from "./assets/trishul.jpeg";
// import demo1 from "./assets/tutorial1.mp4";
// import demo2 from "./assets/roket.mkv";
// import img1 from "./assets/s2.jpeg";
// import img2 from "./assets/vaman.jpeg";

// const ProjectsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showCarousel, setShowCarousel] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape' && showCarousel) {
//         setShowCarousel(false);
//         setCurrentImageIndex(0);
//       }
//     };
//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, [showCarousel]);

//   const projects = [{
//     year: '2023',
//     title: 'CanSat 2023-24',
//     description: "PSIT Vyomnauts, as PSIT Cosmonauts, successfully designed, launched, and soft-landed Abhaycharan at IN-SPACe CanSat 2024, organized by the Astronautical Society of India and IN-SPACe in collaboration with ISRO. Competing against 84 top colleges, including IIT Bombay, IIT Madras, and BITS Pilani, we qualified all five rounds and launched in the presence of ISRO Chairman Shri S. Somanath, securing a top rank.",
//     status: 'Completed',
//     // metrics: {
//     //   altitude: '1000m',
//     //   duration: '45min',
//     //   dataPoints: '2.5K'
//     // },
//     mediaLinks: [
//       { title: "PSIT COSMONAUTS lead the way at National Student CanSat India Competition", source: "Bilkul Online News", date: "Dec 2023", url: "#" },
//       { title: "Dr. S. Somanath Commends Project", source: "ISRO Blog", date: "Jan 2024", url: "#" }
//     ],
//     cadModels: [
//       { title: "CanSat Assembly", thumbnail: img1, url: "#" },
//       { title: "Deployment Mechanism", thumbnail: img1, url: "#" }
//     ],
//     youtubeLinks: [
//       { title: "Project Overview", url: "https://youtube.com/watch?v=example1" },
//       { title: "Launch Day", url: "https://youtube.com/watch?v=example2" }
//     ],
//     video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4`,
//     images: [img1, img1, img1]
//   },
//   {
//     year: '2024',
//     title: 'CanSat 2024-25',
//     description: "The CANSAT India competition 2024-25 is an eagerly awaited event, and PSIT Vyomnauts are ready to take on the challenge with renewed enthusiasm and innovation. Building on the success of our previous CANSAT, Abhay Charan, which secured 7th place nationwide, we have carefully analyzed our learnings to return stronger than ever. This year, we proudly present Rohini Sat, a refined and advanced model engineered to meet the rigorous demands of the competition. Our experience from the 2023-24 challenge has honed our expertise in aerospace engineering, electronics, and programming, allowing us to integrate several key technical improvements. With these advancements, we are confident that Rohini Sat will surpass the performance of its predecessor. The recognition we received from Dr. S. Somanath, Director of ISRO, for our previous project has further fueled our ambition. With a clear vision, meticulous preparation, and an even more ambitious mission, we are determined to make a significant impact in this year's competition. Our goal is not just to compete but to excel, pushing the boundaries of student-driven aerospace innovation. 🚀 Stay tuned as we embark on this journey to redefine possibilities in CANSAT technology!",
//     status: 'Ongoing',
//     mediaLinks: [
//       { title: "Next Generation CanSat Announcement", source: "Tech Chronicle", date: "Feb 2024", url: "#" }
//     ],
//     cadModels: [
//       { title: "Rohini Sat Design", thumbnail: img1, url: "#" }
//     ],
//     youtubeLinks: [
//       { title: "Project Announcement", url: "https://youtube.com/watch?v=example3" }
//     ],
//     video: demo1,
//     images: [img1, img1, img1]
//   },
//   {
//     year: '2024',
//     title: 'Rocketry 2024-2025',
//     description: 'Advanced telemetry system development with real-time data transmission and environmental monitoring capabilities.',
//     status: 'In Development',
//     mediaLinks: [
//       { title: "Innovation in Student Rocketry", source: "Tech News", date: "Jan 2024", url: "#" }
//     ],
//     cadModels: [
//       { title: "Rocket Design", thumbnail: img, url: "#" }
//     ],
//     youtubeLinks: [
//       { title: "Project Introduction", url: "https://youtube.com/watch?v=example4" }
//     ],
//     video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687215/cansat_showcase12345_fc2v5r.mp4`,
//     images: [img, img, img]
//   }];

//   const TabButton = ({ icon: Icon, label, tabName }) => (
//     <button
//       onClick={() => setActiveTab(tabName)}
//       className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//         activeTab === tabName 
//           ? 'bg-[#FFD700]/10 text-[#FFD700]' 
//           : 'text-gray-400 hover:text-[#FFD700]/80'
//       }`}
//     >
//       <Icon className="w-4 h-4" />
//       <span>{label}</span>
//     </button>
//   );

//   const ContentSection = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="space-y-6">
//             <p className="text-gray-300 leading-relaxed">
//               {projects[currentIndex].description}
//             </p>
//             {projects[currentIndex].metrics && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                 {Object.entries(projects[currentIndex].metrics).map(([key, value]) => (
//                   <div key={key} className="bg-black/30 p-4 rounded-lg border border-[#FFD700]/20">
//                     <h4 className="text-[#FFD700] font-medium mb-1 capitalize">{key}</h4>
//                     <p className="text-gray-300">{value}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         );
//       case 'media':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {projects[currentIndex].mediaLinks.map((item, index) => (
//               <div key={index} className="bg-black/30 p-4 rounded-lg border border-[#FFD700]/20">
//                 <h4 className="text-[#FFD700] font-medium mb-2">{item.title}</h4>
//                 <p className="text-gray-400 text-sm">{item.source}</p>
//                 <p className="text-gray-500 text-sm mb-2">{item.date}</p>
//                 <a href={item.url} className="text-[#FFD700]/80 text-sm hover:text-[#FFD700] mt-2 inline-block">
//                   Read More →
//                 </a>
//               </div>
//             ))}
//           </div>
//         );
//       case 'cad':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {projects[currentIndex].cadModels.map((model, index) => (
//               <div key={index} className="bg-black/30 rounded-lg overflow-hidden">
//                 <img src={model.thumbnail} alt={model.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h4 className="text-[#FFD700] font-medium mb-2">{model.title}</h4>
//                   <a href={model.url} className="text-[#FFD700]/80 text-sm hover:text-[#FFD700]">
//                     View Model →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'youtube':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {projects[currentIndex].youtubeLinks.map((video, index) => (
//               <div key={index} className="bg-black/30 p-4 rounded-lg border border-[#FFD700]/20">
//                 <div className="flex items-center gap-3">
//                   <Youtube className="w-8 h-8 text-red-500" />
//                   <div>
//                     <h4 className="text-[#FFD700] font-medium">{video.title}</h4>
//                     <a href={video.url} className="text-gray-400 text-sm hover:text-[#FFD700]">
//                       Watch Video →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const closeCarousel = () => {
//     setShowCarousel(false);
//     setCurrentImageIndex(0);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const previousImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? projects[currentIndex].images.length - 1 : prev - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === projects[currentIndex].images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const ImageCarousel = () => (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//     >
//       <button onClick={closeCarousel} className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
//         <X className="w-6 h-6" />
//       </button>
      
//       <div className="relative z-10 px-4" onClick={(e) => e.stopPropagation()}>
//         <button onClick={previousImage} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
//           <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
//         </button>

//         <img
//           src={projects[currentIndex].images[currentImageIndex]}
//           alt={`${projects[currentIndex].title} - Image ${currentImageIndex + 1}`}
//           className="max-h-[80vh] max-w-[90vw] md:max-w-[80vw] object-contain"
//         />

//         <button onClick={nextImage} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
//           <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
//         </button>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white relative pt-16 pb-16">
//       <AnimatePresence>
//         {showCarousel && <ImageCarousel />}
//       </AnimatePresence>
      
//       <div className="absolute inset-0">
//         <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] to-black opacity-40" />
//       </div>

//       <Navbar />

//       {!isMobile ? (
//         <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 hidden md:block">
//           <div className="flex flex-col gap-8 relative">
//             <div className="w-px h-full bg-[#FFD700]/20 absolute left-0"></div>
//             {[...new Set(projects.map(p => p.year))].map((year) => (
//               <div key={year} className={`pl-8 relative cursor-pointer ${
//                 projects[currentIndex].year === year ? 'text-[#FFD700]' : 'text-gray-600'
//               }`}>
//                 <div className={`absolute left-0 w-2 h-2 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${
//                   projects[currentIndex].year === year ? 'bg-[#FFD700] ring-2 ring-[#FFD700]/20' : 'bg-gray-800'
//                 }`} onClick={() => setCurrentIndex(projects.findIndex(p => p.year === year))} />
//                 {year}
//               </div>
//             ))}
//           </div>
//           <button onClick={nextSlide} className="mt-8 w-12 h-12 rounded-full bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors duration-300">
//           <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       ) : (
//         <select 
//           value={currentIndex}
//           onChange={(e) => setCurrentIndex(Number(e.target.value))}
//           className="mx-4 mt-4 bg-black border border-[#FFD700]/20 text-white px-4 py-2 rounded-lg w-full md:hidden"
//         >
//           {projects.map((project, index) => (
//             <option key={index} value={index}>
//               {project.year} - {project.title}
//             </option>
//           ))}
//         </select>
//       )}

//       <div className="md:ml-48 px-4 md:px-0 relative mt-8 md:mt-0 right-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             className="space-y-8"
//           >
//             <div className="space-y-4">
//               <span className={`px-3 py-1 text-sm rounded-full ${
//                 projects[currentIndex].status === 'Completed' ? 'bg-[#FFD700]/20 text-[#FFD700]' :
//                 projects[currentIndex].status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
//                 'bg-slate-500/20 text-slate-400'
//               }`}>
//                 {projects[currentIndex].status}
//               </span>
//               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#FFD700]">
//                 {projects[currentIndex].title}
//               </h1>
//             </div>

//             <div className="relative w-full h-[250px] md:h-[600px]">
//               <video
//                 src={projects[currentIndex].video}
//                 controls
//                 autoPlay
//                 muted
//                 loop
//                 className="w-full h-full object-cover rounded-lg border border-[#FFD700]/20"
//               />
//               <button
//                 onClick={() => setShowCarousel(true)}
//                 className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
//               >
//                 <Expand className="w-4 h-4" />
//                 <span className="hidden md:inline">View Gallery</span>
//               </button>
//             </div>

//             <div className="border-b border-[#FFD700]/20">
//               <div className="flex gap-4 -mb-px overflow-x-auto pb-2 md:pb-0">
//                 <TabButton icon={FileImage} label="Overview" tabName="overview" />
//                 <TabButton icon={Newspaper} label="Media Coverage" tabName="media" />
//                 <TabButton icon={FileImage} label="CAD Models" tabName="cad" />
//                 <TabButton icon={Youtube} label="YouTube" tabName="youtube" />
//               </div>
//             </div>

//             <div className="bg-black/30 rounded-lg p-6 border border-[#FFD700]/20">
//               <ContentSection />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ProjectsSlider;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Expand, Youtube } from 'lucide-react';
import Navbar from './Navbar';
import img from "./assets/projectmedia/bilkulreport.png"
const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showCarousel) {
        setShowCarousel(false);
        setCurrentImageIndex(0);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showCarousel]);

  const projects = [{
    year: '2023',
    title: 'CanSat 2023-24',
    description: "PSIT Vyomnauts, as PSIT Cosmonauts, successfully designed, launched, and soft-landed Abhaycharan at IN-SPACe CanSat 2024, organized by the Astronautical Society of India and IN-SPACe in collaboration with ISRO. Competing against 84 top colleges, including IIT Bombay, IIT Madras, and BITS Pilani, we qualified all five rounds and launched in the presence of ISRO Chairman Shri S. Somanath, securing a top rank.",
    status: 'Completed',
    mediaLinks: [
      { title: "PSIT COSMONAUTS lead the way at National Student CanSat India Competition", source: "Bilkul Online News", date: "Dec 2023", url: "https://bilkulonline.com/2024/04/19/psit-cosmonauts-lead-the-way-at-national-student-cansat-india-competition/?amp=1",
        image:`${img}`
       },
    ],
    cadModels: [
      { title: "CanSat Assembly", thumbnail: "/api/placeholder/400/300", url: "#" },
      { title: "Deployment Mechanism", thumbnail: "/api/placeholder/400/300", url: "#" }
    ],
    youtubeLinks: [
      { title: "Project Achievement", url: "https://youtu.be/o-clHa2XTLk?si=xZO2vwdK75DAqti6" },
      { title: "Recognition by  DD gujrati", url: "https://www.youtube.com/live/AUc1juXQ5n0?si=38cB3ZWCywiZj-aP" },
      
    ],
    video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4`,
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"]
  },
  {
    year: '2024',
    title: 'CanSat 2024-25',
    description: "PSIT Vyomnauts is thrilled to participate in IN-SPACe CanSat 2024-25, a competition that fuels our passion for aerospace innovation. This year, we continue our journey with Rohini Sat, a milestone from our past successes. With unwavering determination, we have successfully qualified the Preliminary Design Review (PDR) and are now preparing for the Critical Design Review (CDR), aiming to set new benchmarks in CanSat design and space exploration.",
    status: 'Ongoing',
    mediaLinks: [
      // { title: "Next Generation CanSat Announcement", source: "Tech Chronicle", date: "Feb 2024", url: "#" }
    ],
    cadModels: [
      // { title: "Rohini Sat Design", thumbnail: "/api/placeholder/400/300", url: "#" }
    ],
    youtubeLinks: [
      // { title: "Project Announcement", url: "https://youtube.com/watch?v=example3" }
    ],
    video: "",
    images: []
  },
{
    year: '2024',
    title: 'CanSat 2024-25',
    description: "PSIT Vyomnauts is thrilled to participate in IN-SPACe CanSat 2024-25, a competition that fuels our passion for aerospace innovation. This year, we continue our journey with Rohini Sat, a milestone from our past successes. With unwavering determination, we have successfully qualified the Preliminary Design Review (PDR) and are now preparing for the Critical Design Review (CDR), aiming to set new benchmarks in CanSat design and space exploration.",
    status: 'Ongoing',
    mediaLinks: [
      // { title: "Next Generation CanSat Announcement", source: "Tech Chronicle", date: "Feb 2024", url: "#" }
    ],
    cadModels: [
      // { title: "Rohini Sat Design", thumbnail: "/api/placeholder/400/300", url: "#" }
    ],
    youtubeLinks: [
      // { title: "Project Announcement", url: "https://youtube.com/watch?v=example3" }
    ],
    video: "",
    images: []
  },
];

  const SectionTitle = ({ title }) => (
    <h3 className="text-2xl font-bold text-[#FFD700] mb-6">{title}</h3>
  );

  const closeCarousel = () => {
    setShowCarousel(false);
    setCurrentImageIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projects[currentIndex].images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === projects[currentIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const ImageCarousel = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    >
      <button onClick={closeCarousel} className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
        <X className="w-6 h-6" />
      </button>
      
      <div className="relative z-10 px-4">
        <button onClick={previousImage} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <img
          src={projects[currentIndex].images[currentImageIndex]}
          alt={`${projects[currentIndex].title} - Image ${currentImageIndex + 1}`}
          className="max-h-[80vh] max-w-[90vw] md:max-w-[80vw] object-contain"
        />

        <button onClick={nextImage} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatePresence>
        {showCarousel && <ImageCarousel />}
      </AnimatePresence>
      
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] to-black opacity-10" />
      </div>

      <Navbar />

      <div className="flex">
        {/* Timeline */}
        {!isMobile && (
          <div className="w-48 fixed left-4 md:left-16 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex flex-col gap-8 relative">
              <div className="w-px h-full bg-[#FFD700]/20 absolute left-0"></div>
              {[...new Set(projects.map(p => p.year))].map((year) => (
                <div key={year} className={`pl-8 relative cursor-pointer ${
                  projects[currentIndex].year === year ? 'text-[#FFD700]' : 'text-gray-600'
                }`}>
                  <div className={`absolute left-0 w-2 h-2 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    projects[currentIndex].year === year ? 'bg-[#FFD700] ring-2 ring-[#FFD700]/20' : 'bg-gray-800'
                  }`} onClick={() => setCurrentIndex(projects.findIndex(p => p.year === year))} />
                  {year}
                </div>
              ))}
            </div>
            <button onClick={nextSlide} className="mt-8 w-12 h-12 rounded-full bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors duration-300 z-40">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 md:ml-48 px-4 md:px-8 py-16">
          {isMobile && (
            <select 
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
              className="mb-8 bg-black border border-[#FFD700]/20 text-white px-4 py-2 rounded-lg w-full"
            >
              {projects.map((project, index) => (
                <option key={index} value={index}>
                  {project.year} - {project.title}
                </option>
              ))}
            </select>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="space-y-8"
            >
              {/* Project Header */}
              <div className="space-y-4">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  projects[currentIndex].status === 'Completed' ? 'bg-[#FFD700]/20 text-[#FFD700]' :
                  projects[currentIndex].status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  {projects[currentIndex].status}
                </span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#FFD700]">
                  {projects[currentIndex].title}
                </h1>
              </div>

              {/* Project Overview */}
              <div className="bg-black/30 rounded-lg p-6 border border-[#FFD700]/20">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Project Video */}
              <div className="relative w-full h-[250px] md:h-[600px] z-10">
  <video
    src={projects[currentIndex].video}
    controls
    autoPlay
    muted
    loop
    className="w-full h-full object-cover rounded-lg border border-[#FFD700]/20"
  />
  <button
    onClick={() => setShowCarousel(true)}
    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors z-20"
  >
    <Expand className="w-4 h-4" />
    <span className="hidden md:inline">View Gallery</span>
  </button>
</div>

{/* Media Coverage */}
<div className={`grid ${projects[currentIndex].mediaLinks.length === 1 
  ? 'grid-cols-1' 
  : 'grid-cols-1 md:grid-cols-2'} gap-6 relative z-30`}>
  {projects[currentIndex].mediaLinks.map((item, index) => (
    <div key={index} className="bg-black/30 rounded-lg overflow-hidden border border-[#FFD700]/20">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h4 className="text-[#FFD700] font-medium text-lg mb-2">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.source}</p>
        <p className="text-gray-500 text-sm mb-4">{item.date}</p>
        <a 
          href={item.url} 
          className="relative z-40 text-[#FFD700]/80 hover:text-[#FFD700] inline-flex items-center gap-2"
        >
          Read More
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  ))}
</div>
              {/* CAD Models */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects[currentIndex].cadModels.map((model, index) => (
                  <div key={index} className="bg-black/30 rounded-lg overflow-hidden border border-[#FFD700]/20">
                    <img src={model.thumbnail} alt={model.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h4 className="text-[#FFD700] font-medium text-lg mb-4">{model.title}</h4>
                      <a href={model.url} className="text-[#FFD700]/80 hover:text-[#FFD700] inline-flex items-center gap-2">
                        View Model
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* YouTube Videos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-30">
  {projects[currentIndex].youtubeLinks.map((video, index) => (
    <div key={index} className="bg-black/30 p-6 rounded-lg border border-[#FFD700]/20">
      <div className="flex items-center gap-4">
        <Youtube className="w-8 h-8 text-red-500" />
        <div>
          <h4 className="text-[#FFD700] font-medium text-lg mb-2">{video.title}</h4>
          <a 
            href={video.url} 
            className="relative z-40 text-[#FFD700]/80 hover:text-[#FFD700] inline-flex items-center gap-2"
          >
            Watch Video
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;