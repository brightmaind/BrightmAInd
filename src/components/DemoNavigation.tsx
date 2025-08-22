import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const DemoNavigation: React.FC = () => {
  const location = useLocation();
  
  const demos = [
    { 
      path: '/demos/wrinkle-consult', 
      name: 'Wrinkle Consult',
      shortName: 'Wrinkle'
    },
    { 
      path: '/demos/lip-enhancement', 
      name: 'Lip Enhancement',
      shortName: 'Lip'
    },
    { 
      path: '/demos/skin-booster', 
      name: 'Skin Booster',
      shortName: 'Skin'
    }
  ];

  const currentIndex = demos.findIndex(demo => demo.path === location.pathname);
  const previousDemo = currentIndex > 0 ? demos[currentIndex - 1] : demos[demos.length - 1];
  const nextDemo = currentIndex < demos.length - 1 ? demos[currentIndex + 1] : demos[0];

  return (
    <div className="bg-near-black/80 border-b border-slate/20 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Demo Navigation Pills */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          <span className="text-off-white/60 text-sm mr-4">Demo Funnels:</span>
          {demos.map((demo) => (
            <Link
              key={demo.path}
              to={demo.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === demo.path
                  ? 'bg-orange text-white'
                  : 'bg-slate/30 text-off-white/80 hover:bg-slate/50 hover:text-orange'
              }`}
            >
              {demo.shortName}
            </Link>
          ))}
        </div>

        {/* Previous/Next Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to={previousDemo.path}
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2 text-off-white/70 hover:text-orange transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Previous: {previousDemo.name}</span>
          </Link>

          <div className="text-center">
            <p className="text-off-white/60 text-xs">
              {currentIndex + 1} of {demos.length}
            </p>
          </div>

          <Link
            to={nextDemo.path}
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2 text-off-white/70 hover:text-orange transition-colors group"
          >
            <span className="text-sm">Next: {nextDemo.name}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoNavigation;