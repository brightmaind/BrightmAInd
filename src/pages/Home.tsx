import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, TrendingUp, Settings, ChevronDown, Calendar, ArrowLeft, ArrowRight, Check, Zap, Target, Users, BarChart3 } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
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
      {/* Hero Section */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              Empty Slots and No-Shows Are <span className="text-orange">Costing Your Clinic Thousands</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              We help medical aesthetics clinics fill calendars with smart marketing and AI automation—without the complexity. Most clinics lose 20% of bookings to no-shows. We fix that with sleek websites, targeted ads, and automated deposits + reminders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button onClick={handleBookAudit} size="lg" className="text-lg px-8 py-4">
                Book a Free Growth Audit
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
                Our Complete <span className="text-orange">Growth System</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Everything you need to fill your calendar, reduce no-shows, and grow your aesthetics clinic
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
                Why Clinics Choose <span className="text-orange">Bright mAInd</span>
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
                      Websites, ads, content, and automation all work together as one integrated system that fills calendars and cuts no-shows. Everything connects to maximize your bookings.
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
                With Bright mAInd, you don't just get a website—you get a growth partner committed to filling your clinic.
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
                How a Local Aesthetics Clinic Cut No-Shows by <span className="text-orange">40%</span> and Added <span className="text-orange">15+ New Bookings</span> a Month
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