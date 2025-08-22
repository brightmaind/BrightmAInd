import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, TrendingUp, Settings, ChevronDown, Calendar, ArrowLeft, ArrowRight, Check, Zap, Target, Users, BarChart3 } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Websites that Convert",
      summary: "Turn browsers into paying clients with seamless booking flows and upfront deposits.",
      bullets: [
        "Sleek booking systems that capture deposits upfront",
        "Mobile-optimized designs that convert on every device",
        "Treatment galleries that showcase your best work"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Content that Sells Treatments",
      summary: "Scroll-stopping video and creative that make clients want to book now.",
      bullets: [
        "Before/after videos that drive treatment bookings",
        "Social media content that builds trust and desire",
        "Educational posts that position you as the expert"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ads that Bring Clients In",
      summary: "Local targeting campaigns that keep your chairs filled and calendars busy.",
      bullets: [
        "Facebook and Instagram ads targeting your ideal clients",
        "Google Ads for people actively searching for treatments",
        "Retargeting campaigns that bring back interested prospects"
      ]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automation that Cuts No-Shows",
      summary: "Smart reminders + deposits that slash wasted time and revenue loss.",
      bullets: [
        "Automated booking confirmations and reminders",
        "Deposit collection that reduces no-shows by 40%+",
        "Follow-up sequences that book repeat treatments"
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Audit", description: "We analyze your current booking system and identify revenue leaks." },
    { step: "02", title: "Strategy", description: "Create a custom plan to fill your calendar with paying clients." },
    { step: "03", title: "Build", description: "Deploy your new booking system, ads, and automation." },
    { step: "04", title: "Results", description: "Watch your no-shows drop and bookings increase month after month." }
  ];

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
              <Button onClick={handleBookAudit} size="lg" className="text-lg px-8 py-4" aria-label="Book a free growth audit to reduce no-shows and fill your calendar">
                Book a 10-minute audit
              </Button>
              <Button 
                onClick={() => {
                  navigate('/demos/wrinkle-consult');
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4"
              >
                See Demo Funnels
              </Button>
            </div>

            {/* PAS Block */}
          </div>
        </div>
      </section>

      {/* PAS Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-near-black/60 rounded-2xl p-6 border-2 border-red-500">
                <p className="text-off-white/80">Most clinics send cold visitors to a generic "book now" page. No context, no qualification, no commitment—so people bounce.</p>
              </div>
              <div className="bg-near-black/60 rounded-2xl p-6 border-2 border-orange">
                <p className="text-off-white/80">That wastes ad spend, keeps diaries unpredictable, and caps growth on your highest-value treatments.</p>
              </div>
              <div className="bg-near-black/60 rounded-2xl p-6 border-2 border-green-500">
                <p className="text-off-white/80">We route paid traffic to a treatment page that qualifies intent, guides to the right slot, and secures a small deposit—then reminders ensure attendance. You keep your current booking tool. We make it convert.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - One Growth System */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Value Propositions: <span className="text-orange">What You Get</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Treatment-specific funnels that deliver qualified consultations at predictable costs. <Link to="/demos/wrinkle-consult" onClick={() => window.scrollTo(0, 0)} className="text-orange hover:text-orange/80 underline">See the demo funnels</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <CardTitle className="text-2xl">
                          {index === 0 ? "Treatment-specific funnels" :
                           index === 1 ? "Target cost per consultation" :
                           index === 2 ? "Deposits + reminders" :
                           "AOV/LTV lift via bundles"}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-off-white/80">
                        {index === 0 ? "Wrinkle treatment consultation*, lip enhancement, skin boosters" :
                         index === 1 ? "Agreed and reported weekly" :
                         index === 2 ? "To protect attendance" :
                         "Memberships, and rebooking"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-off-white/80">
                            {index === 0 ? "Qualified leads for your highest-value treatments" :
                             index === 1 ? "Weekly reporting on performance metrics" :
                             index === 2 ? "Integrated with your existing booking system" :
                             "Strategies to increase lifetime value"}
                          </span>
                        </div>
                        {index === 1 && (
                          <div className="mt-6 pt-4 border-t border-slate/20">
                            <Link 
                              to="/content-creation" 
                              onClick={() => window.scrollTo(0, 0)}
                              className="text-orange hover:text-orange/80 underline text-sm"
                            >
                              See the demo funnels →
                            </Link>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-off-white/60">
                *Public pages use "wrinkle treatment consultation" to meet UK guidance.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Work With Us Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why Medical Aesthetics Clinics Choose <span className="text-orange">Bright mAInd</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation delay={0}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange mb-4">Specialist Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80 leading-relaxed">
                      We work exclusively with medical aesthetics clinics, so every strategy is tailored to your treatments and client base. No generic solutions—just proven methods that work for your industry.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={100}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange mb-4">Proven Growth System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80 leading-relaxed">
                      Websites, ads, content, and automation all work together as one integrated system that fills calendars and cuts no-shows. Everything connects to maximise your bookings.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange mb-4">Priority Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80 leading-relaxed">
                      We only take on a limited number of clinics at a time. That means you're never lost in a queue—you get our full attention and priority support when you need it.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange mb-4">Priority Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80 leading-relaxed">
                      We deliberately limit how many clinics we work with. That means when you're in, you're not competing for our attention—you're our priority.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            <div className="text-center">
              <p className="text-xl text-off-white/90 max-w-3xl mx-auto leading-relaxed">
                With Bright mAInd, you don't just get a website—you get a growth partner committed to filling your clinic. <Link to="/faqs" onClick={() => window.scrollTo(0, 0)} className="text-orange hover:text-orange/80 underline">Check our pricing and timelines</Link> or <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-orange hover:text-orange/80 underline">book a free growth audit</Link>.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Case Study / Social Proof */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Our <span className="text-orange">Results Guarantee</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                15+ qualified consultations in 60 days at the agreed cost—or we work for free until we hit it.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-orange/10 border border-orange/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold font-rajdhani text-orange mb-4">Pricing Teaser</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    From £1,500/month + £500–£800 ad spend per flagship treatment. Includes funnel build, creatives, tracking, weekly optimisation, and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Process Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                How It <span className="text-orange">Works</span>
              </h2>
              <p className="text-xl text-off-white/80">
                Simple steps to predictable bookings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold font-rajdhani text-off-white mb-4">
                      {index === 0 ? "Plan" :
                       index === 1 ? "Build" :
                       index === 2 ? "Measure" :
                       "Scale"}
                    </h3>
                    <p className="text-off-white/80">
                      {index === 0 ? "Pick 1–3 flagship treatments and set targets" :
                       index === 1 ? "Ads + treatment page + deposit layer (using your system)" :
                       index === 2 ? "Weekly report on cost per consultation, attendance, and revenue per visit" :
                       "Increase budget where cost holds; add memberships and rebooking"}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Do you replace our booking system?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">No. We wrap a high-converting funnel around it and send qualified patients into your existing calendar.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Can you handle deposits and reminders?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Yes. We use your native setup (or Stripe if needed) to protect attendance.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">What do you report each week?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">Cost per consultation, attendance rate, consult→treatment %, average revenue per visit, retention/memberships.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">What if targets aren't hit?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">We keep working for free until we do (see guarantee).</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 text-lg px-8 py-4"
            >
              Book a 10-minute audit
            </Button>
            <p className="text-white/80 mt-6 text-sm max-w-2xl mx-auto">
              We follow ASA/CAP/MHRA guidance. Public assets avoid prescription-only medicine terms. All claims are evidence-based and responsibly presented.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;