import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Target, BarChart3, Users, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  const handleBookAudit = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Medical%20Aesthetics%20Growth%20Audit',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how to fill your calendar and cut no-shows for your aesthetics clinic</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Medical%20Aesthetics%20Growth%20Audit', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Aesthetics Clinic Marketing & Automation | Bright mAInd"
        description="We fill medical aesthetics clinic calendars across Scotland with booking-focused landing pages, targeted ads, and automated deposits + reminders. Book a free growth audit."
        canonical="/"
      />
      
      {/* Hero Section - Attention / Problem */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              Most clinic websites are just <span className="text-orange">brochures</span>. They don't fill calendars.
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              That means empty slots, wasted ad spend, and staff chasing no-shows instead of serving patients.
            </p>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                The cost of an <span className="text-orange">empty chair</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed mb-12 text-center">
                Every missed consultation is lost revenue. Most clinics lose hundreds each week from:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-near-black/60 rounded-2xl p-8 border border-red-500/30">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-off-white/80 leading-relaxed">
                    "Book now" links that dump people in confusing portals
                  </p>
                </div>

                <div className="bg-near-black/60 rounded-2xl p-8 border border-red-500/30">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-off-white/80 leading-relaxed">
                    No deposits or reminders → high no-show rates
                  </p>
                </div>

                <div className="bg-near-black/60 rounded-2xl p-8 border border-red-500/30">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-off-white/80 leading-relaxed">
                    Ads that drive clicks but not confirmed appointments
                  </p>
                </div>
              </div>

              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                Left alone, these leaks keep eating into growth.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solution Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
                One system that <span className="text-orange">fixes it</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed mb-12 text-center">
                We build treatment-specific booking funnels that:
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Run ads to qualified local patients
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Send them straight to a simple calendar + deposit checkout
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Automate confirmations and reminders so they actually show
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Report CAC, show-rate, and consult→treatment % weekly
                  </p>
                </div>
              </div>

              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                It means predictable bookings, higher AOV/LTV, and full utilisation of your staff.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Call to Action Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-12">
                See how this works for your clinic in a free 10-minute audit.
              </p>
              
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
                aria-label="Book a free growth audit to reduce no-shows and fill your calendar"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Audit
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;