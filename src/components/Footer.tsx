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
              <img 
                src="/assets_task_01k2dvrpkbfntr573hm1h0p81k_1754959602_img_0.webp" 
                alt="Bright mAInd Marketing" 
                className="w-14 h-14 rounded-lg object-contain"
              />
              <h3 className="text-3xl font-bold font-rajdhani">
                <span className="brand-text brand-text-glow">
                  Bright m<span className="text-orange">AI</span>nd
                </span>
              </h3>
            </div>
            <p className="text-off-white/70 mb-6 max-w-md">
              We help medical aesthetics clinics fill calendars with smart marketing and AI automation—without the complexity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange" />
                <span className="text-off-white/80">enquiries@brightmaind.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-rajdhani mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/automation" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Automation</Link></li>
              <li><Link to="/marketing" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Marketing</Link></li>
              <li><Link to="/process" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Process</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">About</Link></li>
              <li><Link to="/faqs" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">FAQs</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-rajdhani mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/web-design" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Web Design</Link></li>
              <li><Link to="/marketing" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">Growth Marketing</Link></li>
              <li><Link to="/automation" onClick={() => window.scrollTo(0, 0)} className="text-off-white/70 hover:text-orange transition-colors">AI Automation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white/60 text-sm">
              © 2025 Bright mAInd Marketing. All rights reserved.
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