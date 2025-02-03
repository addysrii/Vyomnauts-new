import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Book, Globe } from 'lucide-react';
import img2 from "./assets/Team/manish.jpg"
import img3 from "./assets/Team/raghavendra.jpg"
import img4 from "./assets/Team/sandeep.jpg"



const VerticalMentorsList = () => {
  const mentors = [
    {
      id: 1,
      name: "Dr. Raghvendra Singh",
      title: "Dean Academics",
      expertise: "Astrophysics & Space Exploration",
      background: "Raghvendra Sir, our brilliant mentor at PSIT Vyomnauts, is molding our space research and innovation path with their brilliant guidance and tremendous support. Such expertise and visionary leadership motivate them to transcend, excel in contests, and lead meaningful contributions for aerospace advancements-cultivating curiosities about teamwork and the scientific approach among the youth, as well",
      achievements: [
        "1. Pioneering Research in Electronics and Communication",
        "2. Shaping Academic Excellence",
        "3. Guiding Space and Technology Initiatives",
        "4. Commitment to Innovation",
        "5. Fostering a Research-Oriented Environment"
      ],
      image: `${img3}`,
      researchFocus: [
        "Space Communication Technologies",
        "Aerospace Embedded Systems"
      ]
    },
    {
      id: 2,
      name: "Dr Manish Kumar",
      title: "Research & Innovation Director",
      expertise: "Quantum Computing & Artificial Intelligence",
      background: "Manish Sir is our devoted mentor at PSIT Vyomnauts who is really crucial for the development of our space research activities. His guidance, technical know-how, and encouragement make us innovative, a winner in competitions, and push the frontiers of aerospace in pursuit of a culture of learning, teamwork, and scientific excellence. ",
      achievements: [
      " AI-Integrated Circuit Design",  
"Mentored Innovation in Space Technologies " ,
"Industry Collaborations & Patents",
      ],
      image: `${img2}`,
      researchFocus: [
        " Low Power VLSI and AI Integration – Design of low power VLSI circuits integrated with AI algorithms for intelligent, high performance systems in the field of embedded and space applications.",
        "Analog Circuit Innovations for Space and Biomedical Applications – Precise analog electronics development for high-performance sensors used in space applications and state-of-the-art biomedical devices with respect to reliability and efficiency."
      ]
    },
    {
      id: 3,
      name: "Sandeep Kumar Khare",
      title: "  Club Ambassador",
      expertise: "Extraterrestrial Life & Planetary Sciences",
      background: "Sandeep Sir is a guiding force to our space journey, bringing in unmatched energy and dedication to each project. They inspire us, being our torchbearer, and motivate us to reach new heights by pushing boundaries of innovation and excellence. His commitment and enthusiasm guide us through every challenge as he motivates us to greatness in the space exploration field. Their mentorship is truly the cornerstone of our success. ",
      achievements: [
      "Leadership in Space Projects",  
"Inspiring Innovation in Aerospace" ,  
"Key Role in National Space Competitions"  ,
"Partners with leading Institutions" ,
"Mentorship in Space Education "
      ],
      image: `${img4}`,
      researchFocus: [
       " Advanced Aerospace Systems .",
       "Innovative Space Education & Mentorship "
      ]
    }
  ];

  return (
    <div className="bg-gray-900 py-8 rounded-xl">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Mentor Image */}
                <div className="sm:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="sm:w-2/3 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                      {mentor.name}
                    </h2>
                    <h3 className="text-lg text-gray-300">{mentor.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {mentor.background}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                        <Award className="mr-2 text-blue-500" size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        {mentor.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                        <Book className="mr-2 text-green-500" size={16} />
                        Research Focus
                      </h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        {mentor.researchFocus.map((focus, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-green-500">•</span>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMentorsList;