import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, Filter, Search } from 'lucide-react';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBckground';
import e1 from "./assets/events/e1.jpg"
import e2 from "./assets/events/e2.jpg"
import e3 from "./assets/events/e3.jpg"
import e4 from "./assets/events/e4.jpg"
import e5 from "./assets/events/e5.jpg"
import e6 from "./assets/events/e6.jpg"
import e7 from "./assets/events/e7.jpg"
import e8 from "./assets/events/e8.jpg"

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [imageIndexes, setImageIndexes] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const eventCategories = [
    'All', 'Technology', 'Welfare'
  ];

  const events = [
    {
      id: 1,
      title: 'Solar Observation Event – World Space Week 2024',
      date: '2024-10-4 ',
      time: '9:00 AM - 5:00 PM',
      location: 'PSIT, Kanpur',
      category: 'Technology',
      description: 'From October 4th to October 10th, 2024, PSIT Vyomnauts Club successfully organized a Solar Observation event as part of World Space Week. During this initiative, students had the opportunity to observe sunspots—dark regions on the Sun’s surface caused by intense magnetic activity. Using specialized solar filters and telescopes, participants safely viewed and analyzed these fascinating celestial features. The event aimed to enhance awareness of solar phenomena and their impact on space weather. This hands-on experience not only sparked curiosity among students but also deepened their understanding of astronomy and solar physics. ',
      images: [e1, e2, e3, e4]
    },
    {
      id: 2,
      title: 'Outreach Event',
      date: '2025-04-22',
      time: '6:00 PM - 9:00 PM',
      location: 'Kanpur, India',
      category: 'Welfare',
      description: 'The PSIT Vyomnauts Club organized a solar observation outreach to spark curiosity in space science among students. The event featured an interactive session on solar science, a special focus on 10th-grade government school students, and a practical solar observation using a telescope with safety filters. Over 150 students and 10 faculty members participated, with four volunteers managing the event. Engaging quizzes and activities enhanced learning. The event successfully raised awareness about sunspots and solar phenomena, receiving positive feedback. Future events may include indoor backups to counter weather disruptions, ensuring a sustained impact on young minds.',
      images: [e5, e6, e7, e8]
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      const newIndexes = {...imageIndexes};
      events.forEach(event => {
        newIndexes[event.id] = newIndexes[event.id] !== undefined 
          ? (newIndexes[event.id] + 1) % event.images.length 
          : 0;
      });
      setImageIndexes(newIndexes);
    }, 3000);

    return () => clearInterval(imageRotationInterval);
  }, [imageIndexes]);

  const filteredEvents = events.filter(event => 
    (selectedCategory === 'All' || event.category === selectedCategory) &&
    (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     event.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-slate-700/40 via-gray-900/50 to-blue-900/60">
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black border-b border-yellow-400">
          <Navbar />
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
          <div className="relative mb-6 mt-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400" size={20} />
            <input
              type="text"
              placeholder="Search events by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gradient-to-br from-black via-gray-900 to-black border-2 border-yellow-400 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-yellow-400 placeholder-yellow-600 transition-all"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category 
                    ? 'bg-amber-500 text-black font-bold' 
                    : 'bg-black text-amber-500 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
          <h2 className="text-3xl font-extrabold mb-8 text-amber-500">
       Our Events
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="space-y-8">
              {filteredEvents.map((event) => (
                <article 
                  key={event.id} 
                  className="w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-all hover:shadow-2xl hover:shadow-yellow-400/20 grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="relative group h-[500px] md:h-full"> {/* Fixed height container */}
                    <img
                      src={event.images[imageIndexes[event.id] || 0]}
                      alt={event.title}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-black text-sm font-bold rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-amber-500 hover:text-yellow-300 transition-colors mb-4">
                        {event.title}
                      </h2>
                      <p className="text-yellow-200 text-base mb-6">
                        {event.description}
                      </p>
                    </div>
                    <div className="space-y-3 text-base text-yellow-200 mb-6">
                      <div className="flex items-center">
                        <Calendar size={20} className="mr-3 text-amber-500" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={20} className="mr-3 text-amber-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={20} className="mr-3 text-amber-500" />
                        {event.location}
                      </div>
                    </div>
                    <button className="w-full px-6 py-4 bg-amber-500 hover:bg-yellow-300 text-black font-bold rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105 hover:shadow-lg">
                      <span>View Event Details</span>
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-amber-500">
              <Filter size={64} className="mx-auto mb-4" />
              <p className="text-xl">No events found. Try adjusting your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default EventsPage;
