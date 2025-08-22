import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Target, BarChart3, Users, Bot } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

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

      {/* Hero Section */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              Fill Your Aesthetics Clinic Calendar. <span className="text-orange">Cut No-Shows by 40%.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              We build booking-focused websites, run targeted ads, and create automated systems that keep your calendar full and your clients showing up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button onClick={handleBookAudit} size="lg" className="text-lg px-8 py-4" id="audit-cta">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Growth Audit
              </Button>
              <Button 
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4"
              >
                See Our Growth System
              </Button>
            </div>

            {/* Problem Agitation */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-near-black/60 rounded-2xl p-6 border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 mb-2">20%</div>
                  <p className="text-off-white/80">Average no-show rate draining your revenue</p>
                </div>
                <div className="bg-near-black/60 rounded-2xl p-6 border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 mb-2">£200+</div>
                  <p className="text-off-white/80">Lost per empty slot that could have been filled</p>
                </div>
                <div className="bg-near-black/60 rounded-2xl p-6 border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 mb-2">Hours</div>
                  <p className="text-off-white/80">Wasted each week chasing bookings and confirmations</p>
                </div>
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
                Aesthetics Clinic Marketing: <span className="text-orange">Complete Growth System</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Everything you need to fill your calendar, reduce no-shows, and grow your aesthetics clinic. <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-orange hover:text-orange/80 underline">Learn more about our complete growth system</Link>.
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
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-off-white/80">
                        {service.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-off-white/80">{bullet}</span>
                          </div>
                        ))}
                        {index === 1 && (
                          <div className="mt-6 pt-4 border-t border-slate/20">
                            <Link 
                              to="/content-creation" 
                              onClick={() => window.scrollTo(0, 0)}
                              className="text-orange hover:text-orange/80 underline text-sm"
                            >
                              See examples of our video reels and social media content →
                            </Link>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
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
                How Our Booking-Focused Landing Pages Helped a Scotland Clinic <span className="text-orange">Cut No-Shows by 40%</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Problem */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold font-rajdhani text-red-400 mb-4">The Problem</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Clinic had a website, but no booking integration. No-shows were draining revenue and wasting valuable appointment slots every week.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold font-rajdhani text-orange mb-4">Our Solution</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    We built a sleek deposit-based booking system, created engaging video ads, and ran targeted local campaigns to attract ideal clients.
                  </p>
                </div>

                {/* Results */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold font-rajdhani text-green-400 mb-4">The Results</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Within 60 days, no-shows dropped by 40%, and the clinic gained 15+ extra bookings per month—on autopilot.
                  </p>
                </div>
              </div>

              {/* Visual Results */}
              <div className="bg-near-black/60 rounded-2xl p-8 border border-slate/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                    <p className="text-off-white/80">Reduction in no-shows</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange mb-2">15+</div>
                    <p className="text-off-white/80">Extra bookings per month</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">60</div>
                    <p className="text-off-white/80">Days to see results</p>
                  </div>
                </div>
              </div>
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
                How We <span className="text-orange">Transform</span> Your Clinic
              </h2>
              <p className="text-xl text-off-white/80">
                From audit to results, we handle everything so you can focus on your clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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

      {/* Final CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Want results like this?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Book a Free Growth Audit today and see how many more bookings your clinic could be getting.
            </p>
            <Button 
              onClick={handleBookAudit}
              size="lg" 
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 text-lg px-8 py-4"
            >
              Book Free Audit
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              No obligation. See exactly how we'd grow your clinic in 30 minutes.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;