import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import WebDesign from './pages/WebDesign';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;