import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Web Design', href: '/web-design' },
    { name: 'Automation', href: '/automation' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=General%20Consultation',
        parentElement: document.body
      });
      
      // Add custom text overlay after popup opens
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Please select a convenient time for your consultation call</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      // Fallback to direct link if Calendly widget isn't loaded
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=General%20Consultation', '_blank');
    }
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 navbar-blur border-b border-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets_task_01k2dvrpkbfntr573hm1h0p81k_1754959602_img_0.webp" 
              alt="Bright mAInd Marketing" 
             className="w-14 h-14 rounded-lg object-contain"
            />
            <span className="text-3xl font-bold font-rajdhani text-off-white">
              <span className="brand-text brand-text-glow">
                Bright m<span className="text-orange">AI</span>nd
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 focus-visible ${
                  location.pathname === item.href
                    ? 'text-orange'
                    : 'text-off-white hover:text-orange'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button onClick={handleBookConsultation} size="sm" className="ml-4">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-off-white hover:text-orange transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-slate/20 mt-4 pt-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-orange'
                      : 'text-off-white hover:text-orange'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button onClick={handleBookConsultation} size="sm" className="mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;