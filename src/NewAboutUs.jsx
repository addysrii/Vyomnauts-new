import React, { useState } from 'react';
import { Star, Award, Globe, Rocket, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import Navbar from './Navbar';
import MentorCarousel from './MentorCarousel';
import img from "./assets/Team/arya.jpg"
import img1 from "./assets/Team/riashab .jpg"
import img5 from "./assets/Team/vaishnavi.jpg"
import img6 from "./assets/Team/new-1.jpg"
import img7 from "./assets/Team/sparsh.jpg"
import img8 from "./assets/Team/anushka.jpg"
import img9 from "./assets/Team/shikha.jpg"
import img10 from "./assets/Team/gaurav.jpg"
import img11 from "./assets/Team/lavitra.jpg"
import img12 from "./assets/Team/anshu.jpg"
import img13 from "./assets/Team/arjita.jpg"
import img14 from "./assets/Team/riya.jpg"
import img15 from "./assets/Team/jitendra.jpg"
import img16 from "./assets/Team/anshuman.jpg"
import VerticalMentorsList from './MentorCarousel';

const AboutUsPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);


  const teams = {
    leadership: {
      name: "Leadership Team",
      members: [
        {
          id: 1,
          name: "Arya Mishra",
          role: "President, Vyomnauts Club",
          image: `${img}`,
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/arya-mishra-43307525a?utm_",
            twitter: "https://twitter.com/elena_research",
            github: "https://github.com/aryasmishra"
          }
        },
        {
          id: 2,
          name: "Vaishnavi Singh",
          role: "Vice-President, Vyomnauts Club",
          image: `${img5}`,
          socialLinks: { linkedin: "https://linkedin.com" }
        }
      ]
    },
    canSat: {
      name:"Team CanSat",
            members: [
              {id:1,  name: "Ritish Katiyar",
                role: "Project Lead",
                image: `${img1}`,
                socialLinks: { linkedin: "https://linkedin.com" }},
              { id:1, name: "Arya Mishra", role: "Sensor Subsytem Engineer", image: `${img}`,socialLinks: { linkedin: "https://linkedin.com" } },
              { id:3, name: "Rahul Kumar", role: "Communication Engineer", image: `${img6}`,socialLinks: { linkedin: "https://linkedin.com" } },
              { id:2, name: "Sparsh Verma", role: "Flight Control Engineer", image: `${img7}`,socialLinks: { linkedin: "https://linkedin.com" } },
              { id:4, name: "Yaggya", role: "Ground Control Software Head", image: `${img8}`,socialLinks: { linkedin: "https://linkedin.com" } },
              { id:5, name: "Shikha", role: "on-board Computer Engineer", image: `${img9}`,socialLinks: { linkedin: "https://linkedin.com" } },
              { id:6, name: "Anushka", role: "Descent Control Engineer", image: `${img8}`,socialLinks: { linkedin: "https://linkedin.com" } }
            
      ]
    },
    // Add other teams similarly
  };

  const SocialIcon = ({ Icon, href }) => (
    href ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        <Icon size={20} />
      </a>
    ) : null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
     <Navbar/>
     {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Our Innovative Team
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          A diverse collective of scientists, researchers, and innovators dedicated to pushing the boundaries of human knowledge through collaborative and cutting-edge research.
        </p>
      </div>

      {/* Mentors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
          Our Mentors
        </h2>
        <VerticalMentorsList />
      </div>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(teams).map(([teamKey, team]) => (
          <div key={teamKey} className="mb-16">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
              {team.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {team.members.map((member) => (
                <div 
                  key={member.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover filter brightness-75 group-hover:brightness-50 transition-all duration-300"
                    />
                    
                    <div className={`absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-4 text-center transition-all duration-300 ${
                      hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-300 mb-3">{member.role}</p>
                      <div className="flex space-x-3">
                        <SocialIcon Icon={Linkedin} href={member.socialLinks.linkedin} />
                        <SocialIcon Icon={Twitter} href={member.socialLinks.twitter} />
                        <SocialIcon Icon={Instagram} href={member.socialLinks.instagram} />
                        <SocialIcon Icon={Github} href={member.socialLinks.github} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={48} className="mx-auto text-blue-500 mb-4" />,
                title: "Innovation",
                description: "Continuously pushing the boundaries of scientific discovery and technological advancement."
              },
              {
                icon: <Globe size={48} className="mx-auto text-green-500 mb-4" />,
                title: "Collaboration",
                description: "Fostering global partnerships to solve complex challenges and accelerate research."
              },
              {
                icon: <Award size={48} className="mx-auto text-purple-500 mb-4" />,
                title: "Excellence",
                description: "Maintaining the highest standards of scientific rigor and ethical research practices."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors">
                {value.icon}
                <h3 className="text-xl font-bold text-gray-100 mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;