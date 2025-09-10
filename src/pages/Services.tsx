import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Bot, Globe, Camera } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Clinic Growth',
      icon: Target,
      href: '/pet-growth-pro',
      description: 'Predictable patient acquisition'
    },
    {
      title: 'AI Automation',
      icon: Bot,
      href: '/ai-automation', 
      description: 'Smart systems that work for you'
    },
    {
      title: 'Smart Websites',
      icon: Globe,
      href: '/smart-websites',
      description: 'Sites that convert visitors to clients'
    },
    {
      title: 'Content Creation',
      icon: Camera,
      href: '/content-creation',
      description: 'Content that builds trust and drives bookings'
    }
  ];

  const handleServiceClick = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Services | Bright mAInd Marketing"
        description="Clinic Growth, AI Automation, Smart Websites, and Content Creation services for medical aesthetics practices."
        canonical="/services"
      />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleServiceClick(service.href)}
                  className="group relative bg-charcoal hover:bg-orange text-off-white hover:text-charcoal p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange/30 min-h-[280px] flex flex-col items-center justify-center text-center"
                >
                  {/* Icon */}
                  <div className="mb-6 p-4 bg-orange/10 group-hover:bg-charcoal/10 rounded-full transition-colors duration-300">
                    <IconComponent className="w-12 h-12 text-orange group-hover:text-charcoal transition-colors duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl font-bold font-rajdhani mb-4 transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-off-white/80 group-hover:text-charcoal/80 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;