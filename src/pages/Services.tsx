import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Camera, Target, Calendar } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';

const Services = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Other%20Services%20Consultation',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how our services can help grow your business</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Other%20Services%20Consultation', '_blank');
    }
  };

  const services = [
    {
      title: 'Smart Websites',
      icon: Globe,
      description: 'Custom, mobile-friendly websites built around your business goals. Every element is designed to convert visitors into customers with smart booking flows and optimized user experience.',
      features: [
        'Conversion-focused design',
        'Mobile-responsive layouts',
        'Smart booking systems',
        'SEO optimization'
      ]
    },
    {
      title: 'Content Creation',
      icon: Camera,
      description: 'High-impact videos, visuals, and campaigns designed to stop the scroll and win clients. Premium content that builds trust and drives bookings across all platforms.',
      features: [
        'Video ads that convert',
        'Brand storytelling',
        'Social media packages',
        'High-end visuals'
      ]
    },
    {
      title: 'Marketing Systems',
      icon: Target,
      description: 'Complete marketing systems that attract qualified leads and convert them into paying customers. From targeted ads to automated follow-ups, we handle the entire customer journey.',
      features: [
        'Targeted advertising',
        'Lead generation',
        'Customer journey mapping',
        'Performance tracking'
      ]
    }
  ];

  return (
    <div className="pt-36 bg-charcoal text-off-white">
      <SEOHead 
        title="Other Services | Websites, Content & Marketing | Bright mAInd"
        description="Smart websites, content creation, and marketing systems to help your business grow. Professional services designed to convert visitors into customers."
        canonical="/other-services"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Other Services', url: '/other-services' }]} />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani gradient-text-primary leading-tight mb-8">
              Other <span className="gradient-text-orange">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              Complete business growth solutions: websites that convert, content that engages, and marketing that delivers results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleBookCall}
                size="lg" 
                className="text-xl px-12 py-6"
                aria-label="Book a consultation for our services"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Consultation
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6"
                aria-label="Send us a message"
              >
                Send us a message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-6 lg:min-w-[300px]">
                        <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-orange" />
                        </div>
                        <h3 className="text-3xl font-bold font-rajdhani gradient-text-primary">
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Description and Features */}
                      <div className="flex-1">
                        <p className="text-lg text-off-white/90 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-off-white/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-8">
                Ready to grow your business with our complete service suite?
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                From websites to content to marketing—we handle it all so you can focus on what you do best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleBookCall}
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
                  aria-label="Book a consultation to discuss our services"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Book a Consultation
                </Button>
                
                <Button 
                  onClick={() => navigate('/contact')}
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange text-xl px-12 py-6"
                  aria-label="Send us a message"
                >
                  Send us a message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Services;