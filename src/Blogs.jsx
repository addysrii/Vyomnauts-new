import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, ChevronRight, Rocket, Star, ChevronLeft, BookOpen } from 'lucide-react';
import Navbar from './Navbar';

const BlogListingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Featured blog data
  const featuredBlogs = [
    {
      id: 1,
      title: "James Webb Telescope's Groundbreaking Discoveries",
      excerpt: "Unveiling the mysteries of the early universe with the most powerful space telescope ever built.",
      author: "Dr. Emily Richards",
      date: "2025-01-16",
      readTime: "12 min",
      category: "Deep Space",
      image: "https://assets.science.nasa.gov/dynamicimage/assets/science/hpd/solar-physics/Lovelyloops_SDO.jpg"
    },
    {
      id: 2,
      title: "The Race to Europa: Searching for Alien Life",
      excerpt: "How Jupiter's icy moon might hold the key to discovering extraterrestrial life in our solar system.",
      author: "Prof. Michael Wong",
      date: "2025-01-15",
      readTime: "15 min",
      category: "Astrobiology",
      image: "https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=1536,1199"
    },
    {
      id: 3,
      title: "Dark Matter: The Invisible Force Shaping Our Universe",
      excerpt: "New research sheds light on the mysterious substance that makes up 85% of the universe's mass.",
      author: "Dr. Lisa Kumar",
      date: "2025-01-14",
      readTime: "10 min",
      category: "Cosmology",
      image: "https://www.nasa.gov/wp-content/uploads/2025/01/51276996483-8a47cff873-k.jpg?resize=1024,683"
    }
  ];

  // Regular blog data
  const blogs = [
    {
      id: 1,
      title: "The Search for Exoplanets: New Discoveries",
      excerpt: "Recent telescopic observations have revealed fascinating new exoplanets in the habitable zone of distant star systems. Learn about these potential Earth-like worlds.",
      author: "Dr. Sarah Martinez",
      date: "2025-01-15",
      readTime: "7 min",
      category: "Astronomy",
      image: "https://assets.science.nasa.gov/dynamicimage/assets/science/hpd/solar-physics/Lovelyloops_SDO.jpg"
    },
    {
      id: 2,
      title: "Understanding Black Holes: A Beginner's Guide",
      excerpt: "Dive into the mysterious world of black holes. From their formation to their mind-bending effects on space and time, discover what makes these cosmic objects so fascinating.",
      author: "Prof. James Chen",
      date: "2025-01-14",
      readTime: "10 min",
      category: "Astrophysics",
      image: "https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=1536,1199"
    },
    {
      id: 3,
      title: "Mars Colonization: Progress and Challenges",
      excerpt: "As we edge closer to establishing human presence on Mars, explore the current technological advances and obstacles we face in making multi-planetary life a reality.",
      author: "Alex Thompson",
      date: "2025-01-13",
      readTime: "8 min",
      category: "Space Exploration",
      image: "https://www.nasa.gov/wp-content/uploads/2025/01/51276996483-8a47cff873-k.jpg?resize=1024,683"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  };

  // Search functionality
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md shadow-lg">
        <Navbar/>
      </header>
      
      {/* Featured Blog Carousel */}
      <div className="relative bg-gray-800/50 py-12 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mt-12">
            Featured Discoveries
          </h2>
          
          <div className="relative w-full h-[500px]">
            {featuredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover filter brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="space-y-4 max-w-3xl">
                      <span className="px-4 py-2 bg-blue-900/70 text-blue-300 text-sm font-semibold rounded-full inline-block">
                        {blog.category}
                      </span>
                      <h3 className="text-4xl font-bold text-white drop-shadow-lg">{blog.title}</h3>
                      <p className="text-gray-300 text-lg">{blog.excerpt}</p>
                      <div className="flex items-center space-x-6 text-gray-300">
                        <span className="flex items-center space-x-2">
                          <Calendar size={18} className="text-blue-400" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Clock size={18} className="text-green-400" />
                          <span>{blog.readTime} read</span>
                        </span>
                      </div>
                      <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 hover:shadow-lg">
                        <BookOpen size={20} />
                        <span>Read Full Article</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredBlogs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search cosmic insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
          />
          {searchTerm && (
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
              {filteredBlogs.length} results
            </span>
          )}
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Latest Scientific Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover filter brightness-75"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-900/70 text-blue-300 text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-400 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-400" />
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-2 text-green-400" />
                      {blog.readTime}
                    </span>
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium group">
                    Read More
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <Rocket size={64} className="mx-auto mb-4 text-blue-500" />
            <p className="text-xl">No cosmic insights found. Try a different search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogListingPage;