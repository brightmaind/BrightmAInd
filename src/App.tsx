import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Audit from './pages/Audit';
import WrinkleConsult from './pages/demos/WrinkleConsult';
import LipEnhancement from './pages/demos/LipEnhancement';
import SkinBooster from './pages/demos/SkinBooster';
import Compliance from './pages/Compliance';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/demos/wrinkle-consult" element={<WrinkleConsult />} />
          <Route path="/demos/lip-enhancement" element={<LipEnhancement />} />
          <Route path="/demos/skin-booster" element={<SkinBooster />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;