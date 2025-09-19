import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-near-black text-off-white border-t border-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <picture>
                <source srcSet="/bright-maind-logo.webp" type="image/webp" />
                <img 
                  src="/bright-maind-logo.jpg" 
                  alt="Bright mAInd Marketing - Aesthetics Clinic Marketing Scotland"
                  loading="lazy"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-lg object-contain"
                />
              </picture>
              <h3 className="text-3xl font-bold font-rajdhani">
                <span className="brand-text brand-text-glow">
                  Bright m<span className="text-orange">AI</span>nd
                </span>
              </h3>
            </div>
            <p className="text-off-white/70 mb-6 max-w-md">
              We help businesses grow with smart marketing, AI automation, high-converting websites, and content that drives results.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-rajdhani mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">AI Automation</Link></li>
              <li><Link to="/other-services" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Other Services</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate/20 mt-12 pt-8">
          {/* NAP-lite Trust Line */}
          <div className="text-center mb-6">
            <p className="text-off-white/70 text-sm leading-relaxed">
              Ayrshire's AI Experts | Mon–Fri 9–5 | 
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
              © 2025 Bright mAInd. All rights reserved.
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