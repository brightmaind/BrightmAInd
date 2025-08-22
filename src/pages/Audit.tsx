import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Audit: React.FC = () => {
  const benefits = [
    "A treatment funnel outline for your clinic",
    "A target cost-per-consult and budget range", 
    "A launch plan you can start in 7–10 days"
  ];

  const handleBookAudit = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/10min-audit',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Book your 10-minute growth audit</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/10min-audit', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Book a 10-Minute Audit | Bright mAInd"
        description="Get your treatment funnel outline, target cost-per-consult, and launch plan in just 10 minutes."
        canonical="/audit"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Audit', url: '/audit' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Get your <span className="text-orange">10-minute growth audit</span>
            </h1>
          </div>
        </section>
      </ScrollAnimation>

      {/* What You Get */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-rajdhani text-off-white mb-8">
                What you get
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80">{benefit}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Scheduler */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center flex items-center justify-center space-x-2">
                    <Clock className="w-6 h-6 text-orange" />
                    <span>Book Your Audit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <button
                    onClick={handleBookAudit}
                    className="w-full bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors flex items-center justify-center space-x-2"
                    id="audit-cta"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Select Your Time</span>
                  </button>
                  
                  <div className="mt-6 space-y-2 text-sm text-off-white/70">
                    <p>ASA/CAP aligned. No obligation.</p>
                    <p>Get your growth plan in just 10 minutes.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Audit;