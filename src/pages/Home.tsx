import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Aesthetics Clinic Growth — Predictable Cost, Higher LTV | Bright mAInd"
        description="Treatment-specific funnels that deliver qualified consultations at an agreed cost—using your current booking system. ASA/CAP compliant."
        canonical="/"
      />
      
      {/* Hero Section */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              High-value bookings on demand. <span className="text-orange">Predictable cost. Higher LTV.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              We build treatment-specific funnels that deliver qualified consultations at an agreed cost—using your existing booking system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button onClick={() => navigate('/audit')} size="lg" className="text-lg px-8 py-4" id="audit-cta">
                Book a 10-minute audit
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('demo-funnels');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4"
              >
                See the demo funnels
              </Button>
            </div>

            {/* KPI Pill Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['CAC', 'Show-rate', 'Consult→Treatment %', 'AOV', 'LTV', 'Utilisation %', 'ROAS'].map((kpi) => (
                <div key={kpi} className="bg-near-black/60 rounded-full px-4 py-2 border border-orange/20">
                  <span className="text-orange text-sm font-medium">{kpi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAS Block */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-rajdhani text-off-white mb-8">
                Why most clinic marketing <span className="text-orange">leaks bookings</span>
              </h3>
              
              <div className="space-y-8 text-xl text-off-white/90 leading-relaxed">
                <p>
                  Cold visitors are sent to generic "book now" portals. No context, no qualification, no commitment—so they bounce.
                </p>
                
                <p className="text-red-400">
                  That wastes ad spend, keeps diaries unpredictable, and caps growth.
                </p>
                
                <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8 mt-8">
                  <p className="text-off-white">
                    We route paid traffic to a treatment page that qualifies intent, guides to the right slot, and secures a small deposit—then reminders ensure attendance. You keep your current booking tool. We make it convert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* How it works */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                How it <span className="text-orange">works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Plan", description: "Pick 1–3 flagship treatments & targets" },
                { step: "02", title: "Build", description: "Ads + treatment page + deposit layer (using your system)" },
                { step: "03", title: "Measure", description: "Weekly report on cost per consult, show-rate, conversion to treatment, AOV, utilisation" },
                { step: "04", title: "Scale", description: "Increase budget where cost holds; add bundles/memberships/rebooking" }
              ].map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold font-rajdhani text-off-white mb-4">{step.title}</h3>
                    <p className="text-off-white/80">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Demo Funnels */}
      <ScrollAnimation>
        <section id="demo-funnels" className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Demo <span className="text-orange">Funnels</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Wrinkle treatment consultation", href: "/demos/wrinkle-consult" },
                { title: "Lip enhancement package", href: "/demos/lip-enhancement" },
                { title: "Skin booster series", href: "/demos/skin-booster" }
              ].map((demo, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="h-full card-hover cursor-pointer" onClick={() => navigate(demo.href)}>
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{demo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button variant="outline" className="w-full">
                        View Demo
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Guarantee */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-8">
              Our results <span className="text-orange">guarantee</span>
            </h2>
            <p className="text-xl text-off-white/90 mb-8 leading-relaxed">
              15+ qualified consultations in 60 days at the agreed cost—or we work for free until we hit it.
            </p>
            <p className="text-lg text-off-white/80 mb-8">
              From £1,500/month + ad spend.
            </p>
            <Button onClick={() => navigate('/audit')} size="lg" id="audit-cta">
              Book a 10-minute audit
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Teaser */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-rajdhani text-off-white mb-6">
              Pricing
            </h2>
            <p className="text-xl text-off-white/90 mb-8 leading-relaxed">
              From £1,500/month + £500–£800 ad spend per flagship treatment. Includes funnel build, creatives, tracking, weekly optimisation, and reporting.
            </p>
            <Button onClick={() => navigate('/pricing')} size="lg" variant="outline">
              See pricing
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  question: "Replace our booking system?",
                  answer: "No—We wrap a high-converting funnel around it."
                },
                {
                  question: "Deposits/reminders?",
                  answer: "Yes—Native or Stripe. We protect attendance."
                },
                {
                  question: "What do you report?",
                  answer: "Cost per consult, show-rate, consult→treatment %, AOV, LTV, utilisation, ROAS—weekly."
                },
                {
                  question: "Miss targets?",
                  answer: "We work for free until we hit them."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-near-black/60 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-orange mb-4">{faq.question}</h3>
                  <p className="text-off-white/80">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button onClick={() => navigate('/audit')} size="lg" id="audit-cta">
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
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4"
              >
                See Our Growth System
              </Button>
            </div>

    </div>
  );
};

export default Home;