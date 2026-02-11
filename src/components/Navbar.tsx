import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';

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
    { name: 'BrightBox', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookConsultation = () => {
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
      return;
    }
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=BrightBox%20Consultation',
        parentElement: document.body
      });
    } else {
      navigate('/contact');
      window.scrollTo(0, 0);
    }
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black navbar-blur border-b border-slate/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/Untitled design (1).png"
              alt="BrightMaind - On-Premise AI Solutions for Manufacturing"
              width="200"
              height="200"
              className="h-24 w-auto object-cover object-center rounded-lg scale-150 lg:scale-[1.75]"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <React.Fragment key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 focus-visible ${
                    location.pathname === item.href
                      ? 'text-orange'
                      : 'text-off-white hover:text-orange'
                  }`}
                >
                  {item.name}
                </button>
                {index < navigation.length - 1 && (
                  <span className="text-off-white/40 text-sm">|</span>
                )}
              </React.Fragment>
            ))}

            <Button
              onClick={handleBookConsultation}
              size="sm"
              className="ml-4"
              aria-label="Book a consultation"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-off-white hover:text-orange transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-slate/20 mt-4 pt-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block text-sm font-medium transition-all duration-300 hover:scale-105 focus-visible px-4 py-2 rounded-full ${
                    location.pathname === item.href
                      ? 'bg-orange/20 text-orange border border-orange/30'
                      : 'bg-slate/20 text-off-white hover:text-orange hover:bg-slate/30 border border-slate/30'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={handleBookConsultation}
                size="sm"
                className="mt-4"
                aria-label="Book a consultation"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
