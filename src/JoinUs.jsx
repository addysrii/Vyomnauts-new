import React, { useState, useEffect } from 'react';
import { Rocket, Star, Users, Download } from 'lucide-react';
import Navbar from './Navbar';

export const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    year: '', 
    branch: '', 
    message: ''
  });
  const [submissions, setSubmissions] = useState([]);
  const [submitStatus, setSubmitStatus] = useState('');

  const yearOptions = ["First Year", "Second Year", "Third Year", "Fourth Year"];
  const branchOptions = ["CSE", "CS-AIML", "CS-AI", "CS-DS", "AIDS", "CS-IOT",'IOT',"ECE",];

  // Load existing submissions on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('vyomnauts-submissions');
    if (savedSubmissions) {
      try {
        setSubmissions(JSON.parse(savedSubmissions));
      } catch (error) {
        console.error("Error parsing submissions:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.year || !formData.branch || !formData.message) {
      setSubmitStatus('Please fill out all fields.');
      return;
    }

    // Create a new submission with timestamp
    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    // Update submissions array
    const updatedSubmissions = [...submissions, newSubmission];
    
    try {
      // Save to local storage
      localStorage.setItem('vyomnauts-submissions', JSON.stringify(updatedSubmissions));
      
      // Update state
      setSubmissions(updatedSubmissions);
      
      // Reset form and show success message
      setFormData({
        name: '', 
        email: '', 
        year: '', 
        branch: '', 
        message: ''
      });
      setSubmitStatus('Application submitted successfully!');

      // Optional: Export to downloadable JSON file
      downloadSubmissions(updatedSubmissions);
    } catch (error) {
      console.error("Error saving submissions:", error);
      setSubmitStatus('Failed to save application. Please try again.');
    }
  };

  // Function to download submissions as JSON
  const downloadSubmissions = (data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `vyomnauts-submissions-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to view current submissions
  const ViewSubmissionsModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#FFD700] text-black p-3 rounded-full shadow-lg hover:bg-[#FFD790] transition-colors"
        >
          <Download size={24} />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-4xl max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#FFD700]">Submissions</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#FFD700]"
                >
                  Close
                </button>
              </div>
              
              {submissions.length === 0 ? (
                <p className="text-gray-400">No submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div 
                      key={submission.id} 
                      className="bg-black p-4 rounded-lg border border-[#FFD700]/20"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        <p><strong>Name:</strong> {submission.name}</p>
                        <p><strong>Email:</strong> {submission.email}</p>
                        <p><strong>Year:</strong> {submission.year}</p>
                        <p><strong>Branch:</strong> {submission.branch}</p>
                      </div>
                      <p className="mt-2"><strong>Message:</strong> {submission.message}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Submitted: {new Date(submission.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => downloadSubmissions(submissions)}
                  className="bg-[#FFD700] text-black px-4 py-2 rounded-lg hover:bg-[#FFD790] transition-colors"
                >
                  Download JSON
                </button>
                <button 
                  onClick={() => {
                    localStorage.removeItem('vyomnauts-submissions');
                    setSubmissions([]);
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear All Submissions
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-amber-500">
          Join Vyomnauts Club
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          Embark on an exciting journey into space science and technology. Join our community of passionate students exploring the frontiers of space.
        </p>
      </div>

      {/* Why Join Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Rocket className="text-amber-500" size={32} />,
              title: "Hands-on Experience",
              description: "Work on real space projects including CanSat competitions and research initiatives"
            },
            {
              icon: <Users className="text-amber-500" size={32} />,
              title: "Community",
              description: "Connect with like-minded peers and industry mentors passionate about space"
            },
            {
              icon: <Star className="text-amber-500" size={32} />,
              title: "Growth",
              description: "Develop technical skills, leadership abilities, and professional networks"
            }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/40 
              hover:bg-[#2A2A2A] transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-amber-500 mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#FFD700]/20">
          <h3 className="text-2xl font-bold mb-6 text-amber-400 ">Membership Application</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Year of Study</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                  focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
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
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                  focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                rows="4"
                placeholder="Tell us about your interests in space technology and what you hope to achieve as a club member..."
              />
            </div>
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.includes('successfully') 
                  ? 'bg-green-600/20 text-green-400' 
                  : 'bg-red-600/20 text-red-400'
              }`}>
                {submitStatus}
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-amber-500 text-black 
              font-medium hover:bg-[#FFD790] transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Submissions Modal */}
      <ViewSubmissionsModal />
    </div>
  );
};

export default JoinUsPage;
