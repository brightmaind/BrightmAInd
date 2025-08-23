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
              Your clinic should have a <span className="text-orange">full calendar</span>—every week.
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              Most clinics rely on word of mouth and a "book now" button. That leaves chairs empty and growth unpredictable.
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
                The problem with <span className="text-orange">hope-marketing</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                Without a clear system, new clients trickle in randomly. Competitors with better funnels win the steady flow of patients—while you're left guessing where the next booking will come from.
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
                Our system brings clients in, <span className="text-orange">week after week</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed mb-12 text-center">
                We build treatment-specific funnels that:
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Run high-converting ads to qualified local patients
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Drive them through a simple booking + deposit checkout
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Automate confirmations, reminders, follow-ups and rebookings with AI
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-off-white/90 leading-relaxed">
                    Track CAC and conversion so you know your numbers
                  </p>
                </div>
              </div>

              <p className="text-xl text-off-white/90 leading-relaxed text-center">
                <span className="text-green-400 font-semibold">Result:</span> predictable new consultations and consistent revenue growth.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Guarantee Strip */}
      <ScrollAnimation>
        <section className="py-8 bg-near-black border-y border-orange/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg md:text-xl text-off-white font-medium leading-relaxed">
                <strong className="text-orange">Our guarantee:</strong> 15+ qualified consultations in 60 days at the agreed cost—or we work for free until we hit it.
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
                Want to see how many more clients you could be booking each month?
              </p>
              
              <Button 
                onClick={handleBookAudit}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
                aria-label="Book a free growth audit to reduce no-shows and fill your calendar"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a 10-minute audit
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;