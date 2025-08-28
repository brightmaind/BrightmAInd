import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClinicGrowth from './pages/ClinicGrowth';
import Contact from './pages/Contact';
import BusinessSites from './pages/BusinessSites';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinic-growth" element={<ClinicGrowth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-sites" element={<BusinessSites />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-automation" element={<Services />} />
          <Route path="/content-creation" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;