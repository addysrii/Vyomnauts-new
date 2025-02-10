import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = 'http://your-api-url/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [blogs, setBlogPosts] = useState([]);

  const initialEventData = {
    title: '',
    description: '',
  Date: '',
    image:''
  };

  const initialProjectData = {
    title: '',
    description: '',
    startDate: '',
    status: '',
    technologies: '',
    image: null,
    githubLink: ''
  };

  const initialAchievementData = {
    title: '',
    description: '',
    date: '',
    category: '',
    image: null
  };

  const initialBlogData = {
    title: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    image: null
  };

  const [eventData, setEventData] = useState(initialEventData);
  const [projectData, setProjectData] = useState(initialProjectData);
  const [achievementData, setAchievementData] = useState(initialAchievementData);
  const [blogData, setBlogData] = useState(initialBlogData);

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (type) => {
    setLoadingData(true);
    try {
      const endpoint = `/${type}`;
      const { data } = await axiosInstance.get(endpoint);
      
      switch(type) {
        case 'events':
          setEvents(data);
          break;
        case 'projects':
          setProjects(data);
          break;
        case 'achievements':
          setAchievements(data);
          break;
        case 'blog':
          setBlogPosts(data);
          break;
        default:
          break;
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error fetching data');
    } finally {
      setLoadingData(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      await axiosInstance.delete(`/${type}/${id}`);
      fetchData(type);
      setMessage(`${type} deleted successfully!`);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error deleting item');
    }
  };

  const handleSubmit = async (type, data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      await axiosInstance.post(`/${type}`, formData);
      setMessage(`${type} created successfully!`);
      fetchData(type);
      
      switch(type) {
        case 'events':
          setEventData(initialEventData);
          break;
        case 'projects':
          setProjectData(initialProjectData);
          break;
        case 'achievements':
          setAchievementData(initialAchievementData);
          break;
        case 'blog':
          setBlogData(initialBlogData);
          break;
        default:
          break;
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to create content');
    } finally {
      setLoading(false);
    }
  };

  const renderFormField = (label, type, value, onChange, required = true) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
          value={value}
          onChange={onChange}
          required={required}
          disabled={loading}
        />
      ) : (
        <input
          type={type}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
          required={required}
          disabled={loading}
        />
      )}
    </div>
  );

  const renderDataTable = (data, type) => (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {type === 'events' ? item.startDate : item.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDelete(type, item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loadingData && (
        <div className="text-center py-4">Loading...</div>
      )}
      {!loadingData && data.length === 0 && (
        <div className="text-center py-4 text-gray-500">No items found</div>
      )}
    </div>
  );

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-medium rounded-t-lg ${
        activeTab === tab
          ? 'bg-white border-t border-x border-gray-200 text-blue-600'
          : 'bg-gray-50 text-gray-600 hover:text-gray-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Content Management Dashboard
          </h1>
        </div>

        {message && (
          <div className={`p-4 mb-4 ${
            message.includes('success')
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}
        
        <div className="border-b border-gray-200">
          <div className="flex">
            <TabButton tab="events" label="Events" />
            <TabButton tab="projects" label="Projects" />
            <TabButton tab="achievements" label="Achievements" />
            <TabButton tab="blog" label="Blog" />
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'events' && (
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit('events', eventData);
              }} className="space-y-4">
                {renderFormField('Title', 'text', eventData.title, 
                  (e) => setEventData({...eventData, title: e.target.value}))}
                {renderFormField('Description', 'textarea', eventData.description,
                  (e) => setEventData({...eventData, description: e.target.value}))}
                {renderFormField('Date', 'date', eventData.Date,
                  (e) => setEventData({...eventData, seats: e.target.value}))}
                {renderFormField('Image', 'file', '',
                  (e) => setEventData({...eventData, image: e.target.files[0]}))}
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Event'}
                </button>
              </form>
              {renderDataTable(events, 'events')}
            </>
          )}

          {activeTab === 'projects' && (
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit('projects', projectData);
              }} className="space-y-4">
                {renderFormField('Title', 'text', projectData.title,
                  (e) => setProjectData({...projectData, title: e.target.value}))}
                {renderFormField('Description', 'textarea', projectData.description,
                  (e) => setProjectData({...projectData, description: e.target.value}))}
                {renderFormField('Start Date', 'date', projectData.startDate,
                  (e) => setProjectData({...projectData, startDate: e.target.value}))}
                {renderFormField('Status', 'text', projectData.status,
                  (e) => setProjectData({...projectData, status: e.target.value}))}
                {renderFormField('Technologies', 'text', projectData.technologies,
                  (e) => setProjectData({...projectData, technologies: e.target.value}))}
                {renderFormField('GitHub Link', 'url', projectData.githubLink,
                  (e) => setProjectData({...projectData, githubLink: e.target.value}))}
                {renderFormField('Image', 'file', '',
                  (e) => setProjectData({...projectData, image: e.target.files[0]}))}
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Project'}
                </button>
              </form>
              {renderDataTable(projects, 'projects')}
            </>
          )}

          {activeTab === 'achievements' && (
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit('achievements', achievementData);
              }} className="space-y-4">
                {renderFormField('Title', 'text', achievementData.title,
                  (e) => setAchievementData({...achievementData, title: e.target.value}))}
                {renderFormField('Description', 'textarea', achievementData.description,
                  (e) => setAchievementData({...achievementData, description: e.target.value}))}
                {renderFormField('Date', 'date', achievementData.date,
                  (e) => setAchievementData({...achievementData, date: e.target.value}))}
                {renderFormField('Category', 'text', achievementData.category,
                  (e) => setAchievementData({...achievementData, category: e.target.value}))}
                {renderFormField('Image', 'file', '',
                  (e) => setAchievementData({...achievementData, image: e.target.files[0]}))}
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Achievement'}
                </button>
              </form>
              {renderDataTable(achievements, 'achievements')}
            </>
          )}

          {activeTab === 'blog' && (
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit('blog', blogData);
              }} className="space-y-4">
                {renderFormField('Title', 'text', blogData.title,
                  (e) => setBlogData({...blogData, title: e.target.value}))}
                {renderFormField('Content', 'textarea', blogData.content,
                  (e) => setBlogData({...blogData, content: e.target.value}))}
                {renderFormField('Author', 'text', blogData.author,
                  (e) => setBlogData({...blogData, author: e.target.value}))}
                {renderFormField('Category', 'text', blogData.category,
                  (e) => setBlogData({...blogData, category: e.target.value}))}
                {renderFormField('Tags (comma-separated)', 'text', blogData.tags,
                  (e) => setBlogData({...blogData, tags: e.target.value}))}
                {renderFormField('Image', 'file', '',
                  (e) => setBlogData({...blogData, image: e.target.files[0]}))}
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  disabled={loading}
                >
               {loading ? 'Creating...' : 'Create Blog Post'}
                </button>
              </form>
              {renderDataTable(blogs, 'blog')}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;