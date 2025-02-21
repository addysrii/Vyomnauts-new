import React from 'react';
import { Rocket, Shield, Cpu, Radio, Users, Star } from 'lucide-react';

const VerticalSpaceCards = () => {
  return (
    <div className="relative w-full min-h-screen py-20 px-4">
      {/* Animated stars background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-pulse" style={{top: '10%', left: '20%'}}/>
        <div className="absolute w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{top: '30%', left: '80%'}}/>
        <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-pulse" style={{top: '70%', left: '40%'}}/>
        <div className="absolute w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{top: '50%', left: '90%'}}/> */}
      {/* </div> */}

      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-amber-500">
              PSIT Vyomnauts
            </h2>
            <div className="h-1 bg-amber-400 rounded-full mt-2" />
          </div>
          <p className="text-xl text-amber-400 max-w-3xl mx-auto leading-relaxed">
            PSIT Vyomnauts Club is a hub for space enthusiasts, fostering innovation in aerospace, defense, robotics, and space science education through hands-on projects, research, and national and international competitions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Domains Card - Spans 2 columns */}
          <div className="lg:col-span-2 group">
            <div className="h-full bg-gradient-to-t from-blue-900/10 to-slate-400/10 border-2 border-yellow-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:border-yellow-500">
              <div className="relative">
                <h2 className="text-3xl font-bold text-amber-500 mb-8 flex items-center gap-3">
                  <Rocket className="w-8 h-8" />
                  Our Domains
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Rocket className="w-8 h-8" />,
                      title: "Aerospace",
                      desc: "Rockets, CubeSats, UAVs, and propulsion systems."
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Defense",
                      desc: "Surveillance, navigation, and advanced strategic technologies."
                    },
                    {
                      icon: <Cpu className="w-8 h-8" />,
                      title: "Robotics",
                      desc: "AI-driven drones, autonomous systems, and industrial robotics."
                    },
                    {
                      icon: <Radio className="w-8 h-8" />,
                      title: "Space Science & Education",
                      desc: "Workshops, research, and awareness programs."
                    }
                  ].map((domain, i) => (
                    <div key={i} className="group/item hover:bg-yellow-500/10 p-4 rounded-xl transition-all duration-300">
                      <div className="text-blue-600 mb-3 group-hover/item:scale-110 transition-transform duration-300">
                        {domain.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">{domain.title}</h3>
                      <p className="text-white/70">{domain.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div className="group">
            <div className="h-full bg-gradient-to-t from-blue-900/30 to-slate-400/10 border-2 border-yellow-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:border-yellow-500">
              <h2 className="text-3xl font-bold text-amber-500 mb-8 flex items-center gap-3">
                <Star className="w-8 h-8" />
                Why Choose Us?
              </h2>
              <ul className="space-y-6">
                {[
                  { icon: <Users className="w-6 h-6" />, text: "Mentorship from industry experts and academicians." },
                  { icon: <Rocket className="w-6 h-6" />, text: "Hands-on experience in real-world space and defense projects." },
                  { icon: <Star className="w-6 h-6" />, text: "Opportunities to participate in top competitions." },
                  { icon: <Cpu className="w-6 h-6" />, text: "Strong focus on innovation and research." },
                  { icon: <Shield className="w-6 h-6" />, text: "Contribution to India's space ecosystem." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group/item hover:bg-yellow-500/10 p-3 rounded-xl transition-all duration-300">
                    <span className="text-blue-600 group-hover/item:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSpaceCards;
