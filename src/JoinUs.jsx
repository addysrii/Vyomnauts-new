import React, { useState } from 'react';
import { Rocket, Star, Users, Mail } from 'lucide-react';
import Navbar from './Navbar';

// Join Us Page Component
export const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    branch: '',
    message: ''
  });

  const yearOptions = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year"
  ];

  const branchOptions = [
    "Computer Science",
    "Electronics & Communication",
    "Mechanical",
    "Electrical",
    "Civil",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Join Vyomnauts Club
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          Embark on an exciting journey into space science and technology. Join our community of passionate students exploring the frontiers of space.
        </p>
      </div>

      {/* Why Join Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8 text-center">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Rocket className="text-blue-500" size={32} />,
              title: "Hands-on Experience",
              description: "Work on real space projects including CanSat competitions and research initiatives"
            },
            {
              icon: <Users className="text-purple-500" size={32} />,
              title: "Community",
              description: "Connect with like-minded peers and industry mentors passionate about space"
            },
            {
              icon: <Star className="text-yellow-500" size={32} />,
              title: "Growth",
              description: "Develop technical skills, leadership abilities, and professional networks"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Membership Application</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Year of Study</label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Branch</label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select branch</option>
                  {branchOptions.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Why do you want to join Vyomnauts?</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Tell us about your interests in space technology and what you hope to achieve as a club member..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const SponsorsPage = () => {
  const sponsorTiers = {
    platinum: {
      name: "Platinum Sponsors",
      sponsors: [
        { name: "TechCorp Global", logo: "/api/placeholder/200/100", description: "Leading technology solutions provider" },
        { name: "Space Industries", logo: "/api/placeholder/200/100", description: "Advanced space technology manufacturer" }
      ]
    },
    gold: {
      name: "Gold Sponsors",
      sponsors: [
        { name: "InnovateX", logo: "/api/placeholder/200/100", description: "Innovation and research partner" },
        { name: "AeroTech", logo: "/api/placeholder/200/100", description: "Aerospace technology specialist" }
      ]
    },
    silver: {
      name: "Silver Sponsors",
      sponsors: [
        { name: "DataSys", logo: "/api/placeholder/200/100", description: "Data systems and analytics" },
        { name: "RocketLabs", logo: "/api/placeholder/200/100", description: "Propulsion technology provider" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Our Sponsors
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          We're proud to partner with industry leaders who share our vision for advancing space research and technology.
        </p>
      </div>

      {/* Sponsors Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(sponsorTiers).map(([tier, { name, sponsors }]) => (
          <div key={tier} className="mb-16">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
              {name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-20 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Become a Sponsor Section */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Support the next generation of space research and innovation. Partner with us to make a lasting impact in the field of space technology.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#contact"
              className="py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#packages"
              className="py-3 px-6 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;