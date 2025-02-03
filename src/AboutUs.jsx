import React, { useState, useEffect } from 'react';
import { Users, Rocket } from 'lucide-react';
import img from "./assets/Team/arya.jpg"
import img1 from "./assets/Team/riashab .jpg"
import img2 from "./assets/Team/manish.jpg"
import img3 from "./assets/Team/raghavendra.jpg"
import img4 from "./assets/Team/sandeep.jpg"
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
const TeamPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coreTeam.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const ProfileImage = ({ src, alt, className }) => (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
  const getGridColumns = (memberCount) => {
    if (memberCount <= 2) return 'grid-cols-1';
    if (memberCount <= 4) return 'grid-cols-2';
    if (memberCount <= 6) return 'grid-cols-3';
    return 'grid-cols-3'; 
  };

  const mentors = [
    {
      name: "Dr. Raghvendra Singh",
      role: "Director of Academics",
      expertise: "Planetary Science",
      image: `${img3}`
    },
    {
      name: "Dr. Manish ",
      role: "Space Engineering Expert",
      expertise: "Rocket Propulsion",
      image: `${img2}`
    },
    {
      name: " Sandeep Khare",
      role: "Astrophysicist",
      expertise: "Dark Matter Research",
      image: `${img4}`
    }
  ];

  const coreTeam = [
    {
      name: "Arya Mishra",
      role: "Club President",
      bio: "Leading space initiatives since 2022",
      image: `${img}`
    },
    {
      name: "Vaishnavi",
      role: "Vice President",
      bio: "Specialized in mission planning",
      image: `${img5}`
    },
    {
      name: "Riya Verma",
      role: "Event Coordinator",
      bio: "Organizing space education events",
      image: `${img14}`
    }
  ];

  const projectTeams = [
    {
      name: "Cansat 2023-2024",
      lead: {
        name: "Ritish Katiyar",
        role: "Project Lead",
        bio: "Expert in satellite systems and orbital mechanics",
        image: `${img1}`
      },
      members: [
        {  name: "Arya Mishra", role: "Sensor Subsytem Engineer", image: `${img}` },
        { name: "Rahul Kumar", role: "Communication Engineer", image: `${img6}` },
        { name: "Sparsh Verma", role: "Flight Control Engineer", image: `${img7}` },
        { name: "Yaggya", role: "Ground Control Software Head", image: `${img8}` },
        { name: "Shikha", role: "on-board Computer Engineer", image: `${img9}` },
        { name: "Anushka", role: "Descent Control Engineer", image: `${img8}` }
      ]
    },
    {
      name: "Rocketry 2024-2025",
      lead: {
        name: "Sparsh Verma",
        role: "Project Lead",
        bio: "Specialized in sustainable habitat design",
        image: `${img7}`
      },
      members: [
        { name: "Gaurav Shahi", role: "Sensor Subsytem Engineer", image: `${img10}` },
        { name: "Lavitra Sahu", role: "Structure Design", image: `${img11}` },
        { name: "Ritish Katiyar", role: "Resource Management", image: `${img1}` },
        { name: "Vaishnavi Chaurasia", role: "Life Support Systems", image: `${img5}` },
        { name: "Anshu Gupta", role: "Life Support Systems", image: `${img12}` },
        { name: "Arjita Sahu", role: "Life Support Systems", image: `${img13}` },
        { name: "Riya Verma", role: "Life Support Systems", image: `${img14}`},
      
        
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800  text-white">
      {/* Mentors Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Users className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Our Mentors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="bg-zinc-900 rounded-xl p-6">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center">{mentor.name}</h3>
                <p className="text-blue-400 text-center">{mentor.role}</p>
                <p className="text-gray-400 text-center mt-2">{mentor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Core Team Carousel */}
      <section className="relative bg-slate-800">
        <div className="h-[600px] relative overflow-hidden rounded-2xl mx-5 z-10 ">
          <div className="flex h-full">
            {/* Image Container - 75% width */}
            <div className="w-[75%] relative">
              <div className="absolute inset-0">
                <img
                  src={coreTeam[currentSlide].image}
                  alt={coreTeam[currentSlide].name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black" />
              </div>
            </div>

            {/* Content Container - 25% width */}
            <div className="w-[25%] relative bg-zinc-900 flex items-center">
              <div className="px-8">
                <p className="text-gray-400 text-sm mb-2">Core team</p>
                <h2 className="text-4xl font-light mb-4">{coreTeam[currentSlide].name}</h2>
                <p className="text-xl text-gray-400 mb-6">{coreTeam[currentSlide].role}</p>
                <p className="text-gray-300 mb-8">{coreTeam[currentSlide].bio}</p>
                <button className="bg-zinc-800 text-white px-6 py-3 rounded-full text-sm w-32 hover:bg-zinc-700">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {coreTeam.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

        
      {/* Project Teams */}
      <section className="py-16 px-4 md:px-8">
        {projectTeams.map((project) => (
          <div key={project.name} className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              {project.name} Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Lead */}
              <div className="bg-zinc-900 rounded-3xl p-6">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.lead.image}
                    alt={project.lead.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-light">{project.lead.name}</h3>
                <p className="text-gray-400 mt-2">{project.lead.role}</p>
                <p className="text-gray-500 mt-4">{project.lead.bio}</p>
                <button className="mt-4 bg-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-zinc-700">
                  LinkedIn
                </button>
              </div>

              {/* Team Members Grid with Dynamic Sizing */}
              <div className="bg-zinc-900 rounded-3xl p-6">
                <p className="text-gray-400 text-sm mb-6">
                  Team members ({project.members.length})
                </p>
                <div className={`grid ${getGridColumns(project.members.length)} gap-6`}>
                  {project.members.map((member) => (
                    <div key={member.name} className="space-y-3">
                      <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <img
                          src={member.image || "/api/placeholder/200/200"}
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-light">{member.name}</h3>
                      <p className="text-gray-400 text-sm">{member.role}</p>
                      <button 
                        className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-zinc-700 transition-colors duration-200"
                        onClick={() => window.open(member.linkedin, '_blank')}
                      >
                        LinkedIn
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamPage;