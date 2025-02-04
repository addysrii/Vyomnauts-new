import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Expand } from 'lucide-react';
import Navbar from './Navbar';
import img from "./assets/trishul.jpeg"
import demo1 from "./assets/tutorial1.mp4"
import demo2 from "./assets/roket.mkv"
import img1 from  "./assets/s2.jpeg"
import img2 from "./assets/vaman.jpeg"

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle escape key press
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

  const projects = [
    {
      year: '2023',
      title: 'CanSat 2023-24',
      description: 'Cansat a small devices, roughly the size of asoft drink can, simulate real satellite missions by performing tasks like data collection, telemetrytransmission, and recovery.',
      briefDescription: 'In the 2023-24 edition, our team, PSIT Cosmonauts, proudly participated with our CANSATnamed Abhay Charan. After months of hard work, we successfully completed the mission requirements and earned national recognition by securing 7th place across India. Thisremarkable achievement demonstrated our teams technical expertise, innovation, and teamwork,placing our institution on the map in the aerospace community.',
      status: 'Completed',
      metrics: {
        altitude: '1000m',
        duration: '45min',
        dataPoints: '2.5K'
      },
      video : `url(https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4)`,
      images: [
        `${img1}`,
        `${img1}`,
      `${img1}`,
      ]
    },
    {
      year: '2024',
      title: 'CanSat 2024-25',
      description: 'The CANSAT India competition for 2024-25 is a highly anticipated event, and our team, PSIT Vyomnauts, is ready to participate with full enthusiasm and preparation. After last years success with our CANSAT, Abhay Charan, which secured 7th place nationwide, we have taken our learnings to heart and are returning stronger than ever. This year, we proudly present our new CANSAT, Rohini Sat, a refined and advanced model designed to meet the rigorous challenges of the competition.',
      briefDescription: 'The recognition we received from Dr. S. Somanath, Director of ISRO, for our last project has fueled our determination to excel further. With a clear vision, advanced preparation, and a more ambitious mission, we are aiming for even greater success in the 2024-25 competition, setting our sights on making a significant mark in the world of aerospace engineering.',
      status: 'Ongoing',
      video : demo1,
      images: [
        `${img1}`,
        `${img1}`,
      `${img1}`,
      ]
    },
    {
      year: '2024',
      title: 'Rocketry 2024-2025',
      description: 'Advanced telemetry system development with real-time data transmission and environmental monitoring capabilities.',
      briefDescription: 'Next-generation CanSat featuring enhanced sensors, improved telemetry, and advanced recovery systems.',
      status: 'In Development',

      video : `url(https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687215/cansat_showcase12345_fc2v5r.mp4)`,
      images: [
        `${img}`,
        `${img}`,
      `${img}`,
      ]
    },
    // {
    //   year: '2024',
    //   title: 'Vaman',
    //   description: 'As part of our space club, PSIT Vyomnauts, we are thrilled to embark on an exciting project todevelop Vaman, our version of the renowned Cheetah Robot. Inspired by the pioneering workdone by MIT, Vaman is designed to exhibit agility, speed, and dynamic movements akin to a realcheetah, making it a formidable engineering and robotics challenge. Through this project, we aimto create a cutting-edge robotic marvel that stands as a unique innovation from our college.',
    //   briefDescription: 'By developing Vaman as a college project, we seek to enhance our institution’s reputation in robotics and motivate future students to dream big and undertake ambitious technologicalprojects. This bold initiative represents our leap into the world of advanced robotics, setting a benchmark for innovation and excellence.',
    //   status: 'In Development',
    //   metrics: {
    //     altitude: '1200m',
    //     duration: '60min',
    //     dataPoints: '5K'
    //   },
    //   video : `${demo1}`,
    //   images: [
    //    `${img2}`,
    //    `${img2}`,
    //    `${img2}`,
    //   ]
    // },
    // {
    //   year: '2024',
    //   title: 'HoverCraft',
    //   description: 'As part of our space club, PSIT Vyomnauts, we are embarking on an exciting project to developa hovercraft, named Airavat. This innovative vehicle is designed to glide smoothly oversurfaces, powered by air cushion technology, making it a versatile engineering and robotics challenge. Inspired by the advancements in hovercraft design, we aim to create our own uniqueversion, showcasing the ingenuity and technical expertise of our college.',
    //   briefDescription: 'By developing Airavat as a college project, we aim to elevate our institution reputation ininnovative engineering and inspire future students to undertake bold and ambitious technological initiatives. It’s a pioneering step that signifies our entry into the realm of advanced hovercraft technology.',
    //   metrics: {
    //     // altitude: '1200m',
    //     // duration: '60min',
    //     // dataPoints: '5K'
    //   },
    //   video : `${demo1}`,
    //   images: [
    //    `${img2}`,
    //    `${img2}`,
    //    `${img2}`,
    //   ]
    // },
    // {
    //   year: '2025',
    //   title: 'ISRO Robotics Challenge – URSC 2025',
    //   description: 'PSIT Vyomnauts is thrilled to participate in the ISRO Robotics Challenge - URSC 2025,hosted by the U R Rao Satellite Centre (URSC), ISRO. This competition invites teams fromacross the nation to develop innovative robotic solutions tailored for space exploration andsatellite missions. As a passionate group of aspiring space scientists and engineers, we are proudto represent our institution in this prestigious event.',
    //   briefDescription: 'By participating in the ISRO Robotics Challenge, PSIT Vyomnauts aims to make a meaningfulimpact while gaining invaluable experience and exposure in the field of space robotics. We are excited to collaborate, innovate, and strive for excellence as we work towards making our markin this groundbreaking competition.',
    //   metrics: {
    //     // altitude: '1200m',
    //     // duration: '60min',
    //     // dataPoints: '5K'
    //   },
    //   video : `${demo1}`,
    //   images: [
    //    `${img2}`,
    //    `${img2}`,
    //    `${img2}`,
    //   ]
    // },
  ];

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

  const years = [...new Set(projects.map((project) => project.year))];

  const ImageCarousel = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    >
      <button 
        onClick={closeCarousel}
        className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={closeCarousel}
      />
      
      <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="relative">
          <img
            src={projects[currentIndex].images[currentImageIndex]}
            alt={`${projects[currentIndex].title} - Image ${currentImageIndex + 1}`}
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
            {currentImageIndex + 1} / {projects[currentIndex].images.length}
          </div>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative pt-8">
      <AnimatePresence>
        {showCarousel && <ImageCarousel />}
      </AnimatePresence>
      
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-transparent opacity-40" />
      </div>

      <Navbar />

      {/* Mission Timeline */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-8 relative">
          <div className="w-px h-full bg-slate-800 absolute left-0"></div>
          {years.map((year) => (
            <div
              key={year}
              className={`pl-8 relative cursor-pointer ${
                projects[currentIndex].year === year 
                  ? 'text-blue-400' 
                  : 'text-slate-600'
              }`}
            >
              <div
                className={`absolute left-0 w-2 h-2 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  projects[currentIndex].year === year
                    ? 'bg-blue-400 ring-2 ring-blue-400/20'
                    : 'bg-slate-800'
                }`}
                onClick={() => setCurrentIndex(projects.findIndex((project) => project.year === year))}
              />
              {year}
              {projects[currentIndex].year === year && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-400"
                >
                  ▶
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="mt-8 w-12 h-12 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Project Content */}
      <div className="ml-48 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex flex-col gap-8"
          >
            <div className="mt-12">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  projects[currentIndex].status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400'
                    : projects[currentIndex].status === 'In Development'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-slate-500/20 text-slate-400'
                }`}>
                  {projects[currentIndex].status}
                </span>
              </div>
              <h1 className="text-7xl font-bold tracking-tight text-slate-100">
                {projects[currentIndex].title}
              </h1>
            </div>

            <div className="flex gap-8">
              {/* Image with Explore More button */}
              <div className="relative w-[600px] h-[400px] flex-shrink-0">
                <video
                  src={projects[currentIndex].video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setShowCarousel(true)}
                  className="absolute bottom-[350px] right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  <Expand className="w-4 h-4" />
                  Explore More
                </button>
              </div>

              {/* Project Details */}
              <div className="flex-1 bg-slate-800/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-200">Project Overview</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {projects[currentIndex].description}
                </p>
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-medium mb-3 text-slate-300">Key Features</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {projects[currentIndex].briefDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsSlider;
