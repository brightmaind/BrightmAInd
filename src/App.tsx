import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FieldServices from './pages/FieldServices';
import AIInfrastructure from './pages/AIInfrastructure';
import EdgeAI from './pages/EdgeAI';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ink font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/field-services" element={<FieldServices />} />
            <Route path="/ai-infrastructure" element={<AIInfrastructure />} />
            <Route path="/edge-ai" element={<EdgeAI />} />
            <Route path="/industrial-solutions" element={<Navigate to="/edge-ai" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/services/*" element={<Navigate to="/field-services" replace />} />
            <Route path="/partners" element={<Navigate to="/field-services" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
