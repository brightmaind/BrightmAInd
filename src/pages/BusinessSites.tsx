import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Globe, Target, TrendingUp, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';

const BusinessSites = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Business%20Website%20Consultation',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how to create a website that wins clients for your business</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Business%20Website%20Consultation', '_blank');
    }
  };

  return (
    <div className="pt-32 bg-charcoal text-off-white">
      <SEOHead 
        title="Business Websites That Win Clients | Bright mAInd"
        description="We design clean, conversion-focused sites and simple marketing systems so you start strong. Book a call today."
        canonical="/business-sites"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Smart Websites', url: '/business-sites' }]} />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              Websites that <span className="text-orange">win clients</span> for new businesses
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              We design clean, conversion-focused sites and simple marketing systems so you start strong.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookCall}
              size="lg" 
              className="text-xl px-12 py-6"
              aria-label="Book a call to discuss your business website needs"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book a Call
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

      {/* Why It Matters Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                Why it matters
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                Starting a business is hard enough without wasting money on a website that just looks pretty. You need something that gets you seen, brings in enquiries, and helps you grow from day one.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What You Get Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                What you get
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-off-white mb-3">Custom, mobile-friendly website</h3>
                    <p className="text-lg text-off-white/90 leading-relaxed">
                      Built around your business goals, not just pretty pictures. Every element is designed to convert visitors into customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-off-white mb-3">Smart booking/contact flows</h3>
                    <p className="text-lg text-off-white/90 leading-relaxed">
                      That capture leads instead of losing them. We make it easy for customers to reach you and book your services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-off-white mb-3">Simple ad + content packages</h3>
                    <p className="text-lg text-off-white/90 leading-relaxed">
                      To get you noticed quickly. We don't just build your site—we help you get found by the right customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Closing + CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-12">
                Want a site that gets your business off the ground? Book a call today and we'll show you how to turn clicks into clients.
              </p>
              
              <Button 
                onClick={handleBookCall}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
                aria-label="Book a call to turn clicks into clients"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Call
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange text-xl px-12 py-6 ml-4"
                aria-label="Send us a message"
              >
                Send us a message
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default BusinessSites;