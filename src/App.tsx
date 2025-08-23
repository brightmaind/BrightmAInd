import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BusinessSites from './pages/BusinessSites';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-sites" element={<BusinessSites />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;