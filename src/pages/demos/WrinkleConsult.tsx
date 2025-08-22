import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import ScrollAnimation from '../../components/ScrollAnimation';
import SEOHead from '../../components/SEOHead';
import Breadcrumb from '../../components/Breadcrumb';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const WrinkleConsult: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Wrinkle Consultation Funnel — Predictable Bookings | Bright mAInd"
        description="ASA-safe demo funnel that drives wrinkle treatment consultations at a predictable cost."
        canonical="/demos/wrinkle-consult"
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { name: 'Demos', url: '/demos' },
        { name: 'Wrinkle Consultation', url: '/demos/wrinkle-consult' }
      ]} />
      
      {/* Hero Section */}
      <ScrollAnimation>
        <section id="demo-hero" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              <span className="text-orange">Wrinkle treatment consultation</span> funnel (ASA-safe example)
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-12">
              How we turn paid traffic into booked consultations using your existing booking system—at a predictable cost.
            </p>
            
            {/* Demo Video */}
            <div className="relative bg-near-black rounded-2xl p-8 mb-12">
              <div className="aspect-video bg-slate/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  poster="/assets/ads/wrinkle.jpg"
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source src="/assets/ads/wrinkle.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* One-line Flow */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-rajdhani text-off-white mb-8">
                The Flow
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {['Ad', 'This page', 'Pick time (your calendar)', 'Deposit', 'Reminders', 'Attend'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-orange/20 border border-orange/40 rounded-lg px-4 py-2">
                    <span className="text-orange font-medium">{step}</span>
                  </div>
                  {index < 5 && (
                    <ArrowRight className="w-5 h-5 text-off-white/40 mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-center text-off-white/60 text-sm mt-8">
              This demo shows the first steps; live builds connect to your current system.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Benefits */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                "Clear eligibility & realistic expectations",
                "Direct path to the right service/time", 
                "Deposit + reminders to protect attendance"
              ].map((benefit, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardContent className="pt-6">
                      <p className="text-off-white/80">{benefit}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Illustrative Numbers */}
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-6 text-center mb-12">
              <p className="text-off-white/80 text-sm">
                Example: ~£600 ad spend → ~15 bookings ≈ ~£3,000 in month one (repeat visits lift this).
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/audit')} size="lg" id="audit-cta">
                Book a 10-minute audit
              </Button>
              <Button onClick={() => navigate('/pricing')} size="lg" variant="outline">
                See pricing
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Compliance Note */}
      <div className="py-8 bg-near-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-off-white/60 text-xs text-center">
            We follow ASA/CAP/MHRA guidance. Public assets avoid prescription-only medicine terms (e.g., we use "wrinkle treatment consultation"). All claims are evidence-based and responsibly presented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrinkleConsult;