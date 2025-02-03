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
      title: 'Spoting The Sun',
      date: '2024-09-15 - Current',
      time: '9:00 AM - 5:00 PM',
      location: 'PSIT, Kanpur',
      category: 'Technology',
      description: 'Students and teachers spoted some exciting spots on sun with the help of our unique glasses',
      images: [
        `${e1}`,
        `${e2}`,
        `${e3}`,
        `${e4}`
      ]
    },
    {
      id: 2,
      title: 'Outreach Event',
      date: '2025-04-22',
      time: '6:00 PM - 9:00 PM',
      location: 'Kanpur, India',
      category: 'Welfare',
      description: 'Lightening the fire of space in the young students',
      images: [
        `${e5}`,
        `${e6}`,
        `${e7}`,
        `${e8}`
      ]
    },
    // {
    //   id: 3,
    //   title: 'AI & Machine Learning Workshop',
    //   date: '2025-05-10',
    //   time: '10:00 AM - 4:00 PM',
    //   location: 'Hyderabad, India',
    //   category: 'Workshop',
    //   description: 'Hands-on learning for AI enthusiasts and professionals.',
    //   images: [
    //     '/images/ai-workshop-1.jpg',
    //     '/images/ai-workshop-2.jpg',
    //     '/images/ai-workshop-3.jpg',
    //     '/images/ai-workshop-4.jpg',
    //     '/images/ai-workshop-5.jpg'
    //   ]
    // },
    // {
    //   id: 4,
    //   title: 'Digital Transformation Conference',
    //   date: '2025-06-05',
    //   time: '8:30 AM - 6:30 PM',
    //   location: 'Delhi, India',
    //   category: 'Conference',
    //   description: 'Insights into digital strategies and emerging technologies.',
    //   images: [
    //     '/images/digital-conf-1.jpg',
    //     '/images/digital-conf-2.jpg',
    //     '/images/digital-conf-3.jpg',
    //     '/images/digital-conf-4.jpg',
    //     '/images/digital-conf-5.jpg'
    //   ]
    // }
  ];

  // Mouse movement tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Image rotation effect
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

  // Filter events based on search and category
  const filteredEvents = events.filter(event => 
    (selectedCategory === 'All' || event.category === selectedCategory) &&
    (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     event.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md shadow-lg">
          <Navbar />
        </header>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
          <div className="relative mb-6 mt-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800/70 text-gray-400 hover:bg-gray-700 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Upcoming Events
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="space-y-8">
              {filteredEvents.map((event) => (
                <article 
                  key={event.id} 
                  className="w-full bg-gray-800/70 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 grid grid-cols-1 md:grid-cols-2 backdrop-blur-sm"
                >
                  <div className="relative group">
                    <img
                      src={event.images[imageIndexes[event.id] || 0]}
                      alt={event.title}
                      className="w-full h-96 object-cover filter brightness-75 transition-all duration-300 group-hover:brightness-90"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-900/70 text-blue-300 text-sm font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition-colors mb-4">
                        {event.title}
                      </h2>
                      <p className="text-gray-400 text-base mb-6">
                        {event.description}
                      </p>
                    </div>
                    <div className="space-y-3 text-base text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar size={20} className="mr-3 text-blue-400" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={20} className="mr-3 text-green-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={20} className="mr-3 text-red-400" />
                        {event.location}
                      </div>
                    </div>
                    <button className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105 hover:shadow-lg">
                      <span>View Event Details</span>
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <Filter size={64} className="mx-auto mb-4 text-blue-500" />
              <p className="text-xl">No events found. Try adjusting your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default EventsPage;