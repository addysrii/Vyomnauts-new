// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Landing';
import TeamPage from './AboutUs';
import ProjectSlider from './BackgroundSlider';
import BlogListingPage from './Blogs';
import EventsPage from './OurEvent';
import AboutUsPage from './NewAboutUs'
import AdminLogin from './AdminDashboars';
import AdminPublishing from './AdminDash';
import { JoinUsPage } from './JoinUs';
const App = () => {
  return (
    <>
    <div className='position-absolute'>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectSlider />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/join" element={<JoinUsPage />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/admindash" element={<AdminPublishing />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
