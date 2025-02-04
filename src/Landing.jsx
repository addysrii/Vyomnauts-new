import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import img1 from "./assets/space1.jpg";
import img2 from "./assets/space2.jpg";
import img3 from "./assets/space3.jpg";
import pimg1 from "./assets/s2.jpg";
import pimg2 from "./assets/trishul.jpeg";
import pimg3 from "./assets/vaman.jpeg";
import img4 from "./assets/s.jpeg";
import e4 from "./assets/events/e4.jpg";
import e5 from "./assets/events/e5.jpg";
import Navbar from './Navbar';
import Description from './Description';
import Preloader from './Preloader';
import useFirstVisit from './useFirstVist';
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const isFirstVisit = useFirstVisit();
  // Parallax effects for each section
  const achievementsY = useTransform(scrollY, [0, 500], [0, -50]);
  const projectsY = useTransform(scrollY, [500, 1000], [0, -50]);
  const eventsY = useTransform(scrollY, [1000, 1500], [0, -50]);

  const projects = [
    { 
      title: "CanSat 2023-24", 
      description: "The CANSAT India competition challenges student teams to design and launch miniaturized satellites, providing hands-on experience in aerospace engineering.",
      image: pimg1
    },
    { 
      title: "Project Trishul", 
      description: "India's first-ever rocket competition, where our team showcases innovative design and engineering excellence in rocketry.",
      image: pimg2
    }
  ];

  const events = [
    { 
      title: "Solar Observation", 
      date: "Sept 2024", 
      description: "Join us for an exciting solar observation session using specialized equipment.",
      image: e4
    },
    { 
      title: "Space Education Outreach", 
      date: "August 2024", 
      description: "Inspiring the next generation of space enthusiasts through interactive workshops.",
      image: e5
    }
  ];

  return (
    <>
      {isFirstVisit && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      
      <AnimatePresence>
        {(!isLoading || !isFirstVisit) && (
          <motion.div 
            className="relative min-h-screen overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Background */}
            <div className="fixed inset-0 w-full h-screen">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnnl72vrp/image/upload/v1738686682/space2_yl8bj8.jpg)`,
                  opacity: 0.3,
                  zIndex: 1
                }}
              />
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={img2}
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img2})`,
                    zIndex: 2
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.7, 1],
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 1 }
                  }}
                  transition={{
                    opacity: { duration: 1 },
                    scale: {
                      duration: 20,
                      ease: "linear",
                      repeat: 0,
                    }
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <Description />

              {/* Projects Section */}
              <motion.section 
                style={{ y: projectsY }}
                className="min-h-screen px-8 py-16"
              >
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Projects</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group bg-slate-950/60 backdrop-blur-md rounded-xl overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                        <Link to ="/projects">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                        >
                          Learn More
                        </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Events Section */}
              <motion.section 
                style={{ y: eventsY }}
                className="min-h-screen px-8 py-16"
              >
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Events</h2>
                <div className="space-y-8 max-w-6xl mx-auto">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-slate-950/60 backdrop-blur-md rounded-xl overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-8">
                          <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-purple-400 mb-4">{event.date}</p>
                          <p className="text-gray-300 leading-relaxed">{event.description}</p>
                          <Link to={"/events"}>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                          >
                           Explore More
                          </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Footer */}
              <footer className="relative z-10 bg-black/20 backdrop-blur-lg text-white py-12">
                <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300">info@psitvyomnauts.com</p>
                    <p className="text-gray-300">+91 123 456 7890</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-6">
                      {['Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                        <motion.a
                          key={platform}
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          {platform}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <p className="text-gray-300">PSIT Campus</p>
                    <p className="text-gray-300">Kanpur, Uttar Pradesh</p>
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingPage;