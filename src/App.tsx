import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClinicGrowth from './pages/ClinicGrowth';
import AIAutomation from './pages/AIAutomation';
import Contact from './pages/Contact';
import BusinessSites from './pages/BusinessSites';
import Services from './pages/Services';
import ContentCreation from './pages/ContentCreation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet-growth-pro" element={<ClinicGrowth />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-sites" element={<BusinessSites />} />
          <Route path="/services" element={<Services />} />
          <Route path="/content-creation" element={<ContentCreation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;