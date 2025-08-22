import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import DemoNavigation from '../../components/DemoNavigation';
import { Button } from '../../components/ui/button';

const SkinBooster: React.FC = () => {
  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Skin Booster Demo Funnel | Bright mAInd"
        description="Demo funnel for skin booster consultations with deposit collection and automated reminders."
        canonical="/demos/skin-booster"
      />
      
      {/* Demo Navigation */}
      <DemoNavigation />
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
            Skin-booster demo funnel
          </h1>
          <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-12">
            We deliver deposit-paid consultations at an agreed CAC using your existing booking system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookAudit}
              id="cta-audit" 
              data-cta="audit"
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Book Free Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            id="demo-hero" 
            data-track="DemoView" 
            data-treatment="skin-booster"
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              muted
              autoPlay
              loop
              playsInline
              poster="/assets/posters/skin-booster.jpg"
              className="w-full h-auto"
            >
              <source src="/assets/video/skin-booster.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-lg text-off-white/80">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange rounded-full mt-3 flex-shrink-0"></div>
              <span>Target CAC agreed + weekly reporting</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange rounded-full mt-3 flex-shrink-0"></div>
              <span>Deposits + reminders to protect show-rate</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange rounded-full mt-3 flex-shrink-0"></div>
              <span>Lift AOV/LTV with bundles, memberships, rebooking</span>
            </div>
          </div>
          <p className="text-sm text-off-white/60 mt-6">
            Public copy uses 'wrinkle treatment consultation' to meet UK guidance.
          </p>
        </div>
      </section>

      {/* Flow Bar */}
      <section id="flow" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-off-white/60 text-sm">
            Ad → This page → Pick time (your calendar) → Deposit → Reminders → Attend
          </p>
        </div>
      </section>

      {/* ROI Example */}
      <section id="roi" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-near-black/60 rounded-lg p-6 text-center border border-slate/20">
            <p className="text-lg text-off-white/90 mb-2">
              ~£600 ads → ~15 consults ≈ ~£3k Mo1*
            </p>
            <p className="text-xs text-off-white/60">
              *Illustrative demo figures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookAudit}
              id="cta-audit" 
              data-cta="audit"
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Book Free Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section id="compliance" className="py-8 px-4 sm:px-6 lg:px-8 bg-near-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-off-white/60">
            ASA/CAP/MHRA-safe. No POM terms. Evidence-based, responsible presentation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SkinBooster;