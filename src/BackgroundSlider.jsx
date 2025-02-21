import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Expand, Youtube } from 'lucide-react';
import Navbar from './Navbar';
import img from "./assets/projectmedia/bilkulreport.png";

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

  const projects = [{
    title: 'CanSat 2023-24',
    description: "PSIT Vyomnauts, as PSIT Cosmonauts, successfully designed, launched, and soft-landed Abhaycharan at IN-SPACe CanSat 2024, organized by the Astronautical Society of India and IN-SPACe in collaboration with ISRO. Competing against 84 top colleges, including IIT Bombay, IIT Madras, and BITS Pilani, we qualified all five rounds and launched in the presence of ISRO Chairman Shri S. Somanath, securing a top rank.",
    status: 'Completed',
    mediaLinks: [
      { 
        title: "PSIT COSMONAUTS lead the way at National Student CanSat India Competition", 
        source: "Bilkul Online News", 
        date: "Dec 2023", 
        url: "https://bilkulonline.com/2024/04/19/psit-cosmonauts-lead-the-way-at-national-student-cansat-india-competition/?amp=1",
        image: img
      },
    ],
    youtubeLinks: [
      { title: "Project Achievement", url: "https://youtu.be/o-clHa2XTLk?si=xZO2vwdK75DAqti6" },
      { title: "Recognition by DD gujrati", url: "https://www.youtube.com/live/AUc1juXQ5n0?si=38cB3ZWCywiZj-aP" },
    ],
    video: `https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4`,
  },
  {
    title: 'CanSat 2024-25',
    description: "PSIT Vyomnauts is thrilled to participate in IN-SPACe CanSat 2024-25, a competition that fuels our passion for aerospace innovation. This year, we continue our journey with Rohini Sat, a milestone from our past successes. With unwavering determination, we have successfully qualified the Preliminary Design Review (PDR) and are now preparing for the Critical Design Review (CDR), aiming to set new benchmarks in CanSat design and space exploration.",
    status: 'Ongoing',
    mediaLinks: [],
    youtubeLinks: [],
    video: "https://res.cloudinary.com/dnnl72vrp/video/upload/v1738687190/atomic2_fncio3.mp4",
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="space-y-12">
            {/* Project Header and Main Content */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Video Section */}
              {project.video && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <video
                    src={project.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Description Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    project.status === 'Completed' ? 'bg-[#FFD700]/20 text-[#FFD700]' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-300">
                    {project.title}
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Coverage Section - Media and YouTube side by side */}
            {(project.mediaLinks.length > 0 || project.youtubeLinks.length > 0) && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Media Coverage */}
                {project.mediaLinks.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-300">Media Coverage</h3>
                    <div className="space-y-6">
                      {project.mediaLinks.map((item, idx) => (
                        <div key={idx} className="bg-black/30 rounded-lg overflow-hidden border border-[#FFD700]/20">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover" 
                          />
                          <div className="p-6">
                            <h4 className="text-blue-300 font-medium text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.source}</p>
                            <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                            <a 
                              href={item.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#FFD700]/80 hover:text-[#FFD700] inline-flex items-center gap-2"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* YouTube Videos */}
                {project.youtubeLinks.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-300">Video Coverage</h3>
                    <div className="space-y-6">
                      {project.youtubeLinks.map((video, idx) => (
                        <div key={idx} className="bg-black/30 p-6 rounded-lg border border-[#FFD700]/20">
                          <div className="flex items-center gap-4">
                            <Youtube className="w-8 h-8 text-red-500" />
                            <div>
                              <h4 className="text-blue-300 font-medium text-lg mb-2">{video.title}</h4>
                              <a 
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFD700]/80 hover:text-[#FFD700] inline-flex items-center gap-2"
                              >
                                Watch Video
                                <ChevronRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlider;