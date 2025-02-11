import React, { useState } from 'react';
import { Star, Award, Globe, Rocket, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import Navbar from './Navbar';
import img from "./assets/Team/arya.jpg";
import img1 from "./assets/Team/riashab .jpg";
import img5 from "./assets/Team/vaishnavi.jpg";
import img6 from "./assets/Team/new-1.jpg";
import img7 from "./assets/Team/sparsh.jpg";
import img8 from "./assets/Team/anushka.jpg";
import img9 from "./assets/Team/shikha.jpg";
import img10 from "./assets/Team/gaurav.jpg";
import img11 from "./assets/Team/lavitra.jpg";
import img12 from "./assets/Team/anshu.jpg";
import img13 from "./assets/Team/22.jpg";
import img14 from "./assets/Team/riya.jpg";
import img15 from "./assets/Team/jitendra.jpg";
import img16 from "./assets/Team/anshuman.jpg";
import img17 from "./assets/Team/img17.jpg"
import img18 from "./assets/Team/img18.jpg"
import img19 from "./assets/Team/img19.jpg"
import img20 from "./assets/Team/img20.jpg"
import img21 from "./assets/Team/img21.jpg"
import img22 from "./assets/Team/adi.jpg"
import img23 from "./assets/Team/rename.jpg"
import VerticalMentorsList from './MentorCarousel';
const SocialIcon = ({ Icon, href }) => (
  href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-zinc-200 hover:text-yellow-400 transition-colors"
    >
      <Icon size={20} />
    </a>
  ) : null
);
const AboutUsPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teams = {
    Technical: {
      name: "Technical Team",
members:      [
        {
          "id": 1,
          "name": "Sparsh Verma ",
          "role": "Propulsion Engineer",
          "description": " Designing and optimizing rockets for efficient space propulsion. ",
          "image": `${img7}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 2,
          "name": "Ritish Katiyar",
          "role": "Design and Simulation Engineer",
          "description": " Develops and tests designs through simulations for accuracy. ",
          "image": `${img1}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 3,
          "name": "Riya Verma ",
          "role": "Radio COMMUNICATION ENGINEER",
          "description": "\"Expert in designing and optimizing radio communication systems, ensuring seamless signal transmission and connectivity. Skilled in antenna design, wireless networks, and electromagnetic wave propagation.\"",
          "image":`${img14}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 4,
          "name": "Lavitra Sahu",
          "role": "Avionics Engineer",
          "description": "\"Specialist in designing and integrating advanced electronic systems for Cansat and rockets. Expertise in navigation, communication, and control systems for enhanced flight performance.\"",
          "image": `${img11}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 5,
          "name": "Gaurav Shahi",
          "role": "AIML Engineer",
          "description": "\"Specializes in integrating AI/ML with aerospace and robotics systems, enabling autonomous navigation, real-time data processing, and intelligent control for rockets, drones, and robotic missions.\"",
          "image": `${img10}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 6,
          "name": "Jeetendra Singh ",
          "role": "AIML Engineer",
          "description": "\"AI/ML engineer with expertise in enhancing aerospace and robotics systems through intelligent automation. Focuses on machine learning-driven navigation, sensor data analysis, and adaptive control for drones, rockets, and robotic missions.\"",
          "image": `${img15}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 7,
          "name": "Anshuman Pathak",
          "role": "AI Researcher ",
          "description": "\"AI/ML engineer with expertise in enhancing aerospace and robotics systems through intelligent automation. Focuses on machine learning-driven navigation, sensor data analysis, and adaptive control for drones, rockets, and robotic missions.\"",
          "image": `${img16}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 8,
          "name": "Anmol Deep Singh ",
          "role": "CAD Engineer",
          "description": " Creates detailed 3D models for design and manufacturing. ",
          "image": `${img13}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 9,
          "name": "Rahul Kumar",
          "role": "On Board Computer Engineer",
          "description": " \"Specialized in designing and optimizing onboard computer systems for aerospace and robotics. Expertise in real-time data processing, autonomous control, and mission-critical computing for rockets, drones, and satellites.\"",
          "image": `${img6}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 10,
          "name": "Arya Mishra",
          "role": "Sensor Subsystem Engineer",
          "description": "\"Expert in developing and integrating advanced sensor subsystems for aerospace and robotics. Specializes in precision data acquisition, signal processing, and real-time environmental sensing for rockets, drones, and autonomous systems.\"",
          "image": `${img}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 11,
          "name": "Vaishnavi Chaurasiya ",
          "role": "Simulation and Descent Control",
          "description": "\"Specialized in simulation and descent control for aerospace systems. Expertise in trajectory optimization, aerodynamics modeling, and autonomous landing algorithms for rockets, drones, and re-entry vehicles.\"",
          "image": `${img5}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        
        {
          "id": 17,
          "name": "Anshu ",
          "role": "GCS Developper",
          "description": "\"Specialized in developing advanced Ground Control Systems (GCS) for drones and aerospace applications. Expertise in real-time data visualization, remote monitoring, and autonomous mission control.\"",
          "image": `${img12}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 18,
          "name": "Yaggya Chopra",
          "role": "GCS Developper",
          "description": "\"Develops and optimizes software for system functionality.\"",
          "image": `${img23}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 20,
          "name": "Aditya Srivastava",
          "role": "Head Developer",
          "description": "\"Designs and maintains the website for online presence.\"",
          "image": `${img22}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 21,
          "name": "Shubham Verma ",
          "role": "Developer",
          "description": "\"Designs and maintains the website for online presence.\"",
          "image": `${img20}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        },
        {
          "id": 22,
          "name": "Tanishq Mishra",
          "role": "Developer",
          "description": "\"Designs and maintains the website for online presence.\"",
          "image": `${img21}`,
          "socialLinks": {
            "linkedin": "",
            "twitter": "",
            "github": ""
          }
        }
      ]
    },
    NonTechnical:{
      name: "Management Team",
      members:      [
              {
                "id": 12,
                "name": "Shikha ",
                "role": "Event manager ",
                "description": "\"Skilled in planning and executing high-impact events with precision and creativity. Expertise in logistics, team coordination, and audience engagement to ensure seamless and memorable experiences.\"",
                "image":`${img9}`,
                "socialLinks": {
                  "linkedin": "",
                  "twitter": "",
                  "github": ""
                }
              },
              {
                "id": 13,
                "name": "Harsh Vishwakarma",
                "role": "Social Media head",
                "description": " Manages online presence and engagement for outreach. ",
                "image": `${img17}`,
                "socialLinks": {
                  "linkedin": "",
                  "twitter": "",
                  "github": ""
                }
              },
              {
                "id": 14,
                "name": "Aman Pandey ",
                "role": "Graphic Designer",
                "description": "\"Creates visual content for branding and communication.\"",
                "image": `${img18}`,
                "socialLinks": {
                  "linkedin": "",
                  "twitter": "",
                  "github": ""
                }
              },
              {
                "id": 15,
                "name": "Harsh Kumar",
                "role": "Graphic Designer",
                "description": "\"Creates visual content for branding and communication.\"",
                "image": `${img19}`,
                "socialLinks": {
                  "linkedin": "",
                  "twitter": "",
                  "github": ""
                }
              },
              {
                "id": 16,
                "name": "Anushka ",
                "role": "Outreach Intern",
                "description": " Ensures safe and controlled descent of the rocket. ",
                "image": `${img8}`,
                "socialLinks": {
                  "linkedin": "",
                  "twitter": "",
                  "github": ""
                }
              },
             
            ]
    }
  };
  
  
  
    return (
      <div className="min-h-screen bg-black text-zinc-100">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Our Mentors
          </h1>
          <VerticalMentorsList />
          
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Our Innovative Team
          </h1>
  
          {Object.entries(teams).map(([teamKey, team]) => (
            <div key={teamKey} className="mb-16">
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-l-4 border-yellow-400 pl-4">
                {team.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {team.members.map((member) => (
                  <div 
                    key={member.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div className="relative aspect-square rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-yellow-400 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b from-black/90 to-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 ${
                        hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <p className="text-xs text-zinc-300 text-center mb-3 line-clamp-4">
                          {member.description}
                        </p>
                        <div className="flex gap-4">
                          <SocialIcon Icon={Linkedin} href={member.socialLinks.linkedin} />
                          <SocialIcon Icon={Twitter} href={member.socialLinks.twitter} />
                          <SocialIcon Icon={Github} href={member.socialLinks.github} />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h3 className="text-sm font-semibold text-zinc-100">{member.name}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
  
          <div className="bg-gradient-to-br from-zinc-900 to-black py-16 mt-16 rounded-xl border border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Rocket size={48} className="mx-auto text-amber-400 mb-4" />,
                    title: "Innovation",
                    description: "Continuously pushing the boundaries of scientific discovery and technological advancement."
                  },
                  {
                    icon: <Globe size={48} className="mx-auto text-yellow-400 mb-4" />,
                    title: "Collaboration",
                    description: "Fostering global partnerships to solve complex challenges and accelerate research."
                  },
                  {
                    icon: <Award size={48} className="mx-auto text-amber-500 mb-4" />,
                    title: "Excellence",
                    description: "Maintaining the highest standards of scientific rigor and ethical research practices."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-zinc-800/50 transition-all border border-zinc-800 hover:border-yellow-400/50">
                    {value.icon}
                    <h3 className="text-xl font-bold text-zinc-100 mb-4">{value.title}</h3>
                    <p className="text-zinc-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUsPage;
