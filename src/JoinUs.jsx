import React, { useState, useEffect } from 'react';
import { Rocket, Star, Users, FileSpreadsheet, Lock } from 'lucide-react';
import Navbar from './Navbar';
import * as XLSX from 'xlsx';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const yearOptions = ["First Year", "Second Year", "Third Year", "Fourth Year"];
  const branchOptions = ["CSE", "CS-AIML", "CS-AI", "CS-DS", "CS-IOT", "IT","ECE"];

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

    setIsSubmitting(true);
    
    // Create a new submission with timestamp
    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    // Add to local submissions array (for user's own records)
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('vyomnauts-submissions', JSON.stringify(updatedSubmissions));
    
    // SEND TO GOOGLE SHEETS via Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrYCzqGIZHf1p8sGh8pOYPiHyqOZGGprubj1bHGg9HTg4JE7lkkxBYtbLRptoJtvU5/exec';
    
    // Show loading status
    setSubmitStatus('Submitting application...');
    
    // Format data for Google Sheets
    const formDataForSheet = new FormData();
    formDataForSheet.append('name', formData.name);
    formDataForSheet.append('email', formData.email);
    formDataForSheet.append('year', formData.year);
    formDataForSheet.append('branch', formData.branch);
    formDataForSheet.append('message', formData.message);
    formDataForSheet.append('timestamp', new Date().toLocaleString());
    
    // Send data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: formDataForSheet })
      .then(response => {
        if (response.ok) {
          // Reset form and show success message
          setFormData({
            name: '', 
            email: '', 
            year: '', 
            branch: '', 
            message: ''
          });
          setSubmitStatus('Application submitted successfully!');
          
          // Still create local Excel file for the user
          exportToExcel([newSubmission], true);
        } else {
          throw new Error('Server responded with an error');
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setSubmitStatus('Your application was saved locally, but we couldn\'t send it to our database. Please contact us if this persists.');
        // Still provide Excel to user even if server submission fails
        exportToExcel([newSubmission], true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Function to export submissions to Excel
  const exportToExcel = (data, isSingleSubmission = false) => {
    // Format data for Excel export
    const worksheetData = data.map(item => ({
      ID: item.id,
      Name: item.name,
      Email: item.email,
      Year: item.year,
      Branch: item.branch,
      Message: item.message,
      Timestamp: new Date(item.timestamp).toLocaleString()
    }));
    
    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    
    // Add some styling to the headers
    const headerStyle = {
      font: { bold: true },
      fill: { fgColor: { rgb: "FFD700" } }
    };
    
    // Apply column widths for better readability
    const colWidths = [
      { wch: 10 },   // ID
      { wch: 25 },   // Name
      { wch: 30 },   // Email
      { wch: 15 },   // Year
      { wch: 25 },   // Branch
      { wch: 50 },   // Message
      { wch: 20 }    // Timestamp
    ];
    worksheet['!cols'] = colWidths;
    
    // Generate Excel file and trigger download
    const filename = isSingleSubmission 
      ? `vyomnauts-application-${data[0].name.replace(/\s+/g, '-')}.xlsx`
      : `vyomnauts-all-submissions-${new Date().toISOString().split('T')[0]}.xlsx`;
    
    XLSX.writeFile(workbook, filename);
  };

  // Admin Panel Component
  const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    
    // Simple admin password - in a real app, use proper authentication
    const ADMIN_PASSWORD = 'vyomAdmin2025';
    
    const handleLogin = (e) => {
      e.preventDefault();
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password');
      }
    };
    
    const handleLogout = () => {
      setIsAuthenticated(false);
      setPassword('');
    };
    
    return (
      <>
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#FFD700] text-black p-3 rounded-full shadow-lg hover:bg-[#FFD790] transition-colors"
          title="Admin Access"
        >
          <Lock size={24} />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-4xl max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#FFD700]">Admin Panel</h2>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    if (isAuthenticated) handleLogout();
                  }}
                  className="text-white hover:text-[#FFD700]"
                >
                  Close
                </button>
              </div>
              
              {!isAuthenticated ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Admin Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                      placeholder="Enter admin password"
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="text-xs text-gray-400 mb-4">
                    <p>Note: For complete submission data, please check the Google Sheet.</p>
                    <p>The data shown here is only from this browser and may not include all submissions.</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-lg bg-amber-500 text-black 
                    font-medium hover:bg-[#FFD790] transition-colors"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-amber-400">Local Applications Dashboard</h3>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => exportToExcel(submissions)}
                          className="bg-[#FFD700] text-black px-4 py-2 rounded-lg hover:bg-[#FFD790] transition-colors flex items-center"
                          disabled={submissions.length === 0}
                        >
                          <FileSpreadsheet size={18} className="mr-2" />
                          Export Local to Excel
                        </button>
                        <button 
                          onClick={handleLogout}
                          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-black/50 p-3 rounded-lg text-amber-300 flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">{submissions.length}</span>
                        <span>{submissions.length === 1 ? 'application' : 'applications'} stored locally</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <p>For complete submission data, please access the Google Sheet directly.</p>
                        <a 
                          href="https://docs.google.com/spreadsheets/d/1ZngtyFDs5SzYVguViYGZ9hSIW2Pqzrgjt4ejjGyjQbM/edit?usp=sharing" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:underline"
                        >
                          Open Google Sheet
                        </a>
                      </div>
                    </div>
                  </div>
              
                  {submissions.length === 0 ? (
                    <p className="text-gray-400">No applications stored locally.</p>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {submissions.map((submission) => (
                          <div 
                            key={submission.id} 
                            className="bg-black p-4 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all"
                          >
                            <h4 className="font-bold text-white truncate">{submission.name}</h4>
                            <p className="text-amber-300 text-sm mb-2">{submission.email}</p>
                            <div className="flex space-x-2 mb-2">
                              <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{submission.year}</span>
                              <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{submission.branch}</span>
                            </div>
                            <p className="text-sm text-gray-300 line-clamp-3 mb-2">{submission.message}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(submission.timestamp).toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end">
                        <button 
                          onClick={() => {
                            if (window.confirm('⚠️ WARNING: Are you sure you want to clear local submissions? This only affects data in this browser.')) {
                              localStorage.removeItem('vyomnauts-submissions');
                              setSubmissions([]);
                            }
                          }}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                          disabled={submissions.length === 0}
                        >
                          Clear Local Submissions
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
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
                  focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                >
                  <option value="" className='bg-blue-800 text-black'>Select year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year} className="bg-blue-800 text-black">
                      {year}
                    </option>
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
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black border-gray-700 text-white 
                  focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                >
                  <option value="" className='bg-blue-900 text-white'>Select branch</option>
                  {branchOptions.map((branch) => (
                    <option key={branch} value={branch} className="bg-blue-900 text-white">
                      {branch}
                    </option>
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
                  : submitStatus.includes('Submitting')
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'bg-red-600/20 text-red-400'
              }`}>
                {submitStatus}
              </div>
            )}
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg bg-amber-500 text-black 
              font-medium hover:bg-[#FFD790] transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>

      {/* Admin Panel */}
      <AdminPanel />
    </div>
  );
};

export default JoinUsPage;