import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, ChevronRight, Rocket, ChevronLeft, X } from 'lucide-react';
import Navbar from './Navbar';
import img1 from "./assets/blogs/img1.jpg"
import img2 from "./assets/blogs/img2.jpg"
import img3 from "./assets/blogs/img3.jpeg"
const BlogListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedBlog) {
        setSelectedBlog(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedBlog]);

  // Blog data
  const blogs = [
    {
      id: 1,
      title: "The Ultimate Free Energy Generator",
      excerpt: "The solar wind, a constant stream of charged particles from the Sun, offers a sustainable energy source in space. By using solar sails or rotating turbines, we can convert its kinetic energy into electricity, providing a reliable and renewable power solution for satellites and space stations.",
      content: `**The Ultimate Free Energy Generator**  

The Sun, a constant source of immense energy, emits a steady stream of charged particles known as solar wind and intense bursts during events like solar flares. Harnessing this energy offers a groundbreaking opportunity to create a free energy generator in space. Solar wind, consisting of protons and electrons, flows continuously through space, making it a reliable and sustainable source of kinetic energy. By designing innovative systems like solar sails or rotating turbines, we can convert the momentum of these particles into usable electricity.  

### The Use of Solar and Wind Energy: The Path to Renewable Energy  
The Sun emits a lot of electricity, and the elements that go into space constantly reinforce it. The solar wind, a continuous flow of electrons from the Sun, is one of the most fascinating phenomena. About 1.5 million tons of solar particles are ejected from the Sun at nearly 100 miles per second. The Earth's magnetic field protects us by deflecting these particles, but what if we could use them to generate energy? Could solar wind or solar energy be utilized as a free energy generator in space?  

### Solar Storms and Sunlight  
Some solar particles are released more intensely during solar storms, such as during solar radiation bursts or coronal mass ejections (CMEs). These events eject massive amounts of energy into space over a short period. However, unlike the steady solar wind, solar storms are unpredictable, occurring sporadically as bursts or explosions. Due to their irregular nature, solar storms cannot be considered a stable energy source. Additionally, they pose a risk to Earth's electrical infrastructure and satellites, often causing significant damage.  

### Power to Create Free Generators in Space  
1. **Predictability and Consistency:** The solar wind never stops. This makes it a reliable energy source as it continuously flows from the Sun. Engineers can develop electronic systems that function consistently for extended periods. On the other hand, solar storms are inconsistent and often occur without warning, making them unreliable for stable energy generation.  
   
2. **Reduced Damage Potential:** Solar storms release stronger particles than the solar wind, but the solar wind is easier to control. Solar wind particles are less damaging to electrical equipment in orbit. However, solar storms can generate intense electrical surges that affect power grids, satellites, and communication systems on Earth.  
   
3. **Design Practicality:** Capturing solar wind energy does not require complex or heavy equipment. Simple structures like solar sails or rotating turbines can effectively harness this energy.  
   
4. **Sustainability:** Solar wind has the potential to provide an uninterrupted, long-term energy source. As it moves through space continuously, it can be captured to provide consistent power. Solar storms, however, are transient and cannot be reliably harnessed.  

### How Solar Wind Will Power Free Energy Generators in Space  
Imagine a satellite equipped with solar wind energy harvesting systems. Two potential methods could be used:  
   
- **Solar Sails:** Large, thin sheets called solar sails can harness the energy of solar wind particles. These particles propel the sail forward, similar to how wind propels a sailboat.  
- **Rotating Turbines:** Another possible approach involves using rotating turbines positioned in space. The continuous flow of solar wind could spin these turbines, generating electricity efficiently. These turbines are designed to be lightweight and capable of sustained operation.  

### Obstacles and Considerations  
While using solar wind to generate electricity is an exciting idea, several challenges need to be addressed:  

- **Energy Conversion:** Converting the kinetic energy of the solar wind into usable electricity is not a simple task. Engineers must develop highly efficient technologies to capture and convert this energy without excessive energy loss.  
- **Model Costs:** The initial expenses for designing and building solar wind harvesting systems could be high. However, once deployed, these systems can provide vast amounts of free energy for extended periods, making them cost-effective in the long run.  
- **Distance and Efficiency:** The density of the solar wind decreases as it moves through space. Maximizing efficiency will require placing energy-harvesting satellites in optimal locations.  

### Conclusion  
Harnessing solar wind as a free energy source for space applications is a promising concept. Satellites and other space-based facilities could benefit from a regular, reliable, and low-risk energy source. Achieving this goal will require further advancements in design, production, and system integration. However, if successfully implemented, solar wind energy could revolutionize sustainable power generation in space.

`,
      author: "Samridhi",
      date: "2024-12-19",
      readTime: "7 min",
      category: "Renewable Energy, Space Technology, and Astrophysics.",
      image: `${img1}`
    },
    {
      id: 2,
      title: "Exploring the Fermi Paradox: The Quietness of the Cosmos ",
      excerpt: "Explore the enigmatic universe of black holes. From their formation to their impact on space-time, uncover the mysteries that make these celestial objects so fascinating",
      content: `The universe is grand, with an unfathomable number of galaxies, each hosting billions of stars and potentially even more planets. The whim that Earth is the sole cradle of intelligent beings feels more and more improbable.
    
    Up to the present time, even after decades of searching, humanity has not yet found any trace of extraterrestrial civilizations. This baffling notion gave life to the Fermi Paradox, which presents thought-provoking questions about the universe. Even after being so vast and potentially teeming with extraterrestrial life, where is everybody? It was named after the physicist Enrico Fermi.
    
    As we dive into this realm of the unknown, let's explore several key aspects that may assist in explaining the absence of extraterrestrial union.  
    
    ### The Cosmic Size Range  
    Firstly, let’s consider the sheer size of the universe. It is estimated that our Milky Way galaxy alone contains approximately 100 billion stars, many of which have their own planetary systems. All the numbers are supported by telescopes like Kepler. We now confirm that a hefty percentage of these planets lie in their star’s orbit, which is best fit to support liquid water, a key building block of life as we know it. Given the huge number of planets in our universe, statistically, it is suggested that these planets should host intelligent life.  
    
    Moreover, upon the topic of building blocks of life, some of the organic molecules are not just exclusive to Earth itself. They have been found on the Moon, in interstellar clouds, and even on comets like Enceladus and Europa. However, despite our advancement in astronomy and technology, we still have a long path to concluding the discovery of definitive evidence of extraterrestrial beings.  
    
    ### The Zoo Hypothesis  
    Another interesting idea that was proposed is the Zoo Hypothesis, which states that advanced civilizations are just beyond our reach as they are deliberately avoiding contact with us. Just as humans, as zookeepers, try to avoid fidgeting with animals in a habitat, these advanced civilizations may act as silent spectators, quietly watching and potentially studying our behaviors.
    
    These hypotheses raise questions on the ethics of interference—whether advanced civilizations should hinder the underdeveloped or protect those that are in the phase of developing.  
    
    ### Technological Barriers  
    The possibility that our technology is just not up to the mark to catch or recognize the signals of extraterrestrial beings is also a key factor. Our understanding of communication is based on our own experiences and resources available on planet Earth. It is possible that foreign civilizations use completely different forms of communication signals that we cannot fathom.
    
    They might be using technologies so far out of our reach that we are having a hard time coping with them to meet on equal ground.  
    
    ### The Dark Forest Hypothesis  
    The theory popularized by Liu Cixin’s science fiction novel showcases that the universe is quite similar to a dark forest—a dangerous place. Extraterrestrial civilizations may be keeping a low profile due to fear that revealing their presence could invite aggression and destruction from more advanced and hostile civilizations.
    
    In this understanding, silence is the best survival strategy—avoiding great threats, loss of resources, and lives in the universe.  
    
    ### They are Around Us  
    One interesting question that most people need to answer is whether aliens are already amongst us. Some theories suggest that aliens might be observing Earth continuously, blending in, and remaining undetected from our radar.
    
    Even though this idea often travels into the realm of conspiracy theories, it is not entirely impossible. If foreign civilizations have reached the level of technological advancements where they can freely roam around the universe unwatched, then why would they not access the full extent of it?  
    
    ### Conclusion  
    The Fermi Paradox continues to provoke debates and inquiries among scientists, philosophers, and enthusiasts. While the lack of evidence for extraterrestrial life is confusing and a tough nut to crack, it’s still important to consider that the search is still young.
    
    The universe operates on a scale far beyond human comprehension, and our little to no exploration of it may not align with its time, space, and reality. Ultimately, the paradox is as much about humanity as it is about the cosmos. We stand hopeful that one day, we might unravel the mystery of the great science and find our galactic neighbors. Until then, the search continues.`,
      date: "2025-01-14",
      readTime: "10 min",
      category: "Cosmos",
      image: `${img2}`,
      author: "MD.Faiz",
    },
    
    
    {
      id: 3,
      title: "Methane Fuel: The Next Generation of Rocket Propulsion",
      excerpt: "Methane is revolutionizing rocket propulsion, offering high energy efficiency, cleaner combustion, and cost-effectiveness. Unlike traditional fuels like hydrogen and RP-1, methane enables reusable rockets with minimal maintenance and can even be produced on Mars using the Sabatier process. This makes it a game-changer for deep-space exploration and interplanetary colonization.",
      content: `**Methane Fuel: The Next Generation of Rocket Propulsion**

### **Methane Fuel: A Game-Changer for Rockets**
For decades, rocket propulsion has relied on fuels like liquid hydrogen (LH2) and RP-1 (refined kerosene). While these traditional fuels have driven humanity’s remarkable achievements in space exploration, they come with challenges ranging from environmental concerns to operational inefficiencies.

Enter methane (CH4)—the new frontier in rocket fuel. Increasingly favored by companies like SpaceX and Blue Origin, methane is rapidly becoming the propellant of choice for cutting-edge rockets like Starship and New Glenn. But what makes methane so revolutionary? Let’s dive into the science, advantages, and future potential of this transformative fuel.

---

### **Why Methane? Balancing Efficiency and Practicality**
Methane stands out as an exceptional rocket fuel due to its unique combination of high energy efficiency and operational simplicity.

- **High Energy Density**  
  Methane offers an impressive energy-to-weight ratio, enabling rockets to carry a lighter load while maximizing thrust. This translates to better flight performance and the ability to travel greater distances on a single tank of fuel.
  
- **Cryogenic Simplicity**  
  Compared to liquid hydrogen, methane is much easier to store and manage. While hydrogen requires ultra-low temperatures of -253°C and complex storage systems, methane can be maintained at a comparatively warmer -161°C. This simplifies handling and reduces costs significantly.
  
- **Cleaner Combustion**  
  Methane burns more cleanly than kerosene, producing minimal soot and carbon deposits. This is particularly critical for reusable rockets, as cleaner engines require less maintenance between launches, allowing for faster turnaround times.

---

### **Methane’s Environmental Edge**
As the aerospace industry strives for greener practices, methane emerges as a step toward more sustainable space exploration.

- **Lower Soot and Carbon Deposits**  
  Traditional fuels like RP-1 release significant amounts of soot and carbon particles into the atmosphere, which can harm the environment and degrade engine performance. Methane’s cleaner combustion minimizes these emissions, making it a more eco-friendly alternative.
  
- **Reduced Carbon Footprint**  
  While methane is still a hydrocarbon, it generates less CO2 per unit of energy compared to kerosene. This reduces its overall environmental impact, aligning with efforts to create more sustainable launch systems.
  
- **In-Situ Resource Utilization**  
  Methane can be synthesized on other planets, including Mars. By combining carbon dioxide from Mars’ atmosphere with hydrogen extracted from subsurface ice, we can produce methane fuel through the Sabatier process. This capability is a game-changer for interplanetary travel, enabling rockets to refuel in space rather than relying solely on Earth-based resources.

---

### **Advantages Over Traditional Rocket Fuels**
Methane’s characteristics make it the ideal fuel for modern space exploration, especially in the era of reusable rockets.

- **Optimized for Reusability**  
  SpaceX’s Starship, designed for deep space missions and Mars colonization, relies on methane for its clean-burning properties. Because methane reduces engine wear, rockets can be reused more frequently, aligning with the vision of rapid, cost-effective space travel.
  
- **Superior Thrust-to-Weight Ratio**  
  Methane’s high energy density allows rockets to achieve better thrust without adding excessive weight. This balance is crucial for missions that demand both altitude and range with minimal fuel consumption.
  
- **Cost-Effective and Abundant**  
  Methane is relatively inexpensive and widely available, offering an attractive combination of performance and affordability. For commercial space missions, this cost-efficiency is a significant advantage.

---

### **Fueling the Future of Space Exploration**
Methane’s role in space exploration extends far beyond cost savings and technical efficiency—it could be the key to humanity’s interplanetary ambitions. The ability to produce methane fuel directly on Mars makes it an essential component of long-term colonization plans. By reducing reliance on Earth-based supplies, methane supports self-sustaining human habitats and extends the reach of our exploratory efforts.

The Sabatier process, which converts CO2 and hydrogen into methane and water, exemplifies this potential. On Mars, this method could enable rockets to refuel for return journeys or further exploration, transforming how we approach interplanetary missions.

---

### **The Power of Methane: A Summary**
Methane is reshaping the landscape of rocket propulsion, bringing us closer to a sustainable and adventurous era of space exploration. Its advantages include:

- **Enhanced Efficiency:** High energy density and cleaner combustion improve performance while reducing environmental impact.
- **Reusability:** Cleaner-burning properties support rapid rocket reuse, lowering costs and turnaround times.
- **Sustainability:** The ability to synthesize methane on other planets supports interplanetary exploration and colonization.

As methane-powered rockets take to the skies, they are not just propelling spacecraft—they are paving the way for humanity’s future among the stars. With each launch, methane fuel underscores the innovation and determination driving our quest to explore the cosmos sustainably.

`,
      author: "Harsh Vishwakarma",
      date: "2025-01-13",
      readTime: "8 min",
      category: "Rocket Propulsion, Space Exploration, and Sustainable Energy",
      image: `${img3}`,
    }
  ];

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-black text-yellow-400">
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
          <Navbar />
        </header>
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={() => setSelectedBlog(null)}
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300"
            >
              <ChevronLeft size={20} />
              <span>Back to Articles</span>
            </button>
            
            <button 
              onClick={() => setSelectedBlog(null)}
              className="p-2 rounded-full hover:bg-yellow-400/20 text-yellow-400 transition-colors"
              title="Press 'Esc' to exit"
            >
              <X size={24} />
            </button>
          </div>
          
          <article className="space-y-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-semibold rounded-full">
                {selectedBlog.category}
              </span>
              <h1 className="text-4xl font-bold text-yellow-400">{selectedBlog.title}</h1>
              
              <div className="flex items-center space-x-6 text-yellow-100/60">
                <span className="flex items-center space-x-2">
                  <Calendar size={18} className="text-yellow-400" />
                  <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock size={18} className="text-yellow-400" />
                  <span>{selectedBlog.readTime} read</span>
                </span>
              </div>
              
              <div className="border-t border-yellow-400/20 pt-8">
                <div className="prose prose-lg prose-invert prose-yellow">
                  {selectedBlog.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-yellow-100/80 mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
        <Navbar/>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative top-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400/60" size={20} />
          <input
            type="text"
            placeholder="Search cosmic insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-black border border-yellow-400/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-yellow-400 placeholder-yellow-400/50 transition-all"
          />
          {searchTerm && (
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-yellow-400/60">
              {filteredBlogs.length} results
            </span>
          )}
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-extrabold mb-8 text-yellow-400">
          Latest Scientific Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-black rounded-2xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover filter brightness-75"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-yellow-100/60 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-yellow-100/60">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-2 text-yellow-400" />
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-2 text-yellow-400" />
                      {blog.readTime}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedBlog(blog)}
                    className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium group"
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 text-yellow-400/60">
            <Rocket size={64} className="mx-auto mb-4 text-yellow-400" />
            <p className="text-xl">No cosmic insights found. Try a different search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogListingPage;