import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-off-white border-t border-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/bright-maind-logo-main.png"
                alt="BrightMaind — on-premise AI and air-gapped AI solutions for UK industry"
                width="120"
                height="120"
                className="h-20 w-auto object-contain rounded-lg"
                loading="lazy"
              />
            </div>
            <p className="text-off-white/70 mb-6 max-w-md">
              Custom-built, air-gapped AI appliances for UK industry. BrightBox sits on your network, trained on your processes. Your data never leaves your building.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange" />
                <a
                  href="mailto:enquiries@brightmaind.com"
                  className="text-off-white/80 hover:text-orange transition-colors"
                >
                  enquiries@brightmaind.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-rajdhani mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">BrightBox On-Premise AI</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <p className="text-off-white/70 text-sm leading-relaxed">
              On-Premise AI for Industry | Mon-Fri 9-5 |
              <a
                href="mailto:enquiries@brightmaind.com"
                className="text-orange hover:text-orange/80 transition-colors ml-1"
              >
                enquiries@brightmaind.com
              </a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white/60 text-sm">
              &copy; {new Date().getFullYear()} BrightMaind. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-off-white/60 hover:text-orange text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-off-white/60 hover:text-orange text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
