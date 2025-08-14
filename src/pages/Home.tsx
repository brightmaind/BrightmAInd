import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, TrendingUp, Settings, ChevronDown, Calendar, ArrowLeft, ArrowRight, Check, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const webDesignPlans = [
    {
      name: "Starter",
      subtitle: "Single page",
      monthlyToOwnership: "£131",
      continuousMonthly: "£83",
      outright: "£840",
      monthlyCredit: "18",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Single-page website",
        "1 custom logo at onboarding",
        "24/7 emergency support",
        "3 change credits per month (45 min)",
        "Hosting & security included"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Growth",
      subtitle: "Multi-page (up to 5 pages)",
      monthlyToOwnership: "£275",
      continuousMonthly: "£203",
      outright: "£1,560",
      monthlyCredit: "28",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Multi-page website (up to 5 pages)",
        "1 marketing graphic each month",
        "24/7 emergency support",
        "8 change credits per month (2 hours)",
        "Hosting & security included"
      ],
      gradient: "from-orange to-red-500",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "Multi-page (up to 10 pages)",
      monthlyToOwnership: "£479",
      continuousMonthly: "£359",
      outright: "£2,400",
      monthlyCredit: "28",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Multi-page website (up to 10 pages)",
        "2 marketing graphics each month",
        "Priority response",
        "14 change credits per month (3.5 hours)",
        "Hosting & security included"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      summary: "We'll automate the repetitive stuff so you can focus on what matters.",
      bullets: [
        "Automatically sort and route your leads",
        "Smart inbox management and auto-replies", 
        "Clean up your data and create useful reports"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing That Actually Works",
      summary: "We focus on getting you real customers, not just pretty numbers.",
      bullets: [
        "Design offers and funnels that convert",
        "Run Google and Facebook ads that pay for themselves",
        "Test and improve what's working"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Systems Integration",
      summary: "We make your business tools work together like they should.",
      bullets: [
        "Connect your apps with Zapier or Make",
        "Set up custom connections when needed",
        "Integrate Stripe, Shopify, HubSpot, and more"
      ]
    }
  ];
  const clients = [
    "FintechCo", "RetailFlow", "DocuHealth", "Orbit SaaS", "NorthBank"
  ];

  const processSteps = [
    { step: "01", title: "Discover", description: "We'll understand your business goals and design requirements." },
    { step: "02", title: "Design", description: "Create a website that converts visitors into customers." },
    { step: "03", title: "Build", description: "Develop your site with hosting, security, and updates included." },
    { step: "04", title: "Support", description: "Ongoing maintenance, updates, and optional marketing services." }
  ];

  const handleBookConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min',
        parentElement: document.body
      });
      
      // Add custom text overlay after popup opens
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Please select a convenient time for your consultation call</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      // Fallback to direct link if Calendly widget isn't loaded
      window.open('https://calendly.com/enquiries-brightmaind/30min', '_blank');
    }
  };

  const handleWebDesignBooking = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min',
        parentElement: document.body
      });
      
      // Add custom text overlay for web design bookings
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>We\'re excited to work with you! Schedule your call and we\'ll get you set up. No payment required until your website is complete.</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      // Fallback to direct link if Calendly widget isn't loaded
      window.open('https://calendly.com/enquiries-brightmaind/30min', '_blank');
    }
  };

  const nextPlan = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPlan((prev) => (prev + 1) % webDesignPlans.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevPlan = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPlan((prev) => (prev - 1 + webDesignPlans.length) % webDesignPlans.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPlan = (index) => {
    if (isTransitioning || index === currentPlan) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPlan(index);
      setIsTransitioning(false);
    }, 150);
  };

  const goToWebDesign = () => {
    navigate('/web-design');
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Hero Section */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Logo first, Desktop: Content first */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white leading-tight">
                Professional websites on a simple monthly plan
              </h1>
              
              <p className="text-lg text-off-white/80 leading-relaxed max-w-2xl">
                Get a professional website with hosting, security, updates, and ongoing support included. No surprises, no hidden costs.
              </p>
              
              {/* Guarantee Section */}
              <div className="bg-orange/10 border border-orange/20 rounded-2xl p-6 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <h3 className="text-xl font-bold font-rajdhani text-orange">
                    100% Risk-Free Guarantee
                  </h3>
                </div>
                <p className="text-off-white/90 leading-relaxed">
                  You won't pay a penny until your website is complete, deployed, and you're completely happy with it. 
                  We only get paid when you love your new website.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={goToWebDesign} size="lg">
                  View Web Design Plans
                </Button>
                <Button onClick={handleBookConsultation} size="lg" variant="outline">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>

            {/* Mobile: Logo first, Desktop: Logo second */}
            <div className="hidden lg:flex justify-end order-2">
             <div className="w-104 h-104 lg:w-125 lg:h-125 flex flex-col items-center space-y-2">
                <img 
                  src="/assets_task_01k2dvrpkbfntr573hm1h0p81k_1754959602_img_0.webp" 
                  alt="Bright mAInd Marketing Logo" 
                 className="w-full h-3/4 object-contain rounded-2xl"
                />
               <div className="text-center">
                 <h2 className="text-4xl lg:text-5xl font-bold font-rajdhani brand-text brand-text-glow mb-2">
                   Bright m<span className="text-orange">AI</span>nd
                 </h2>
                 <p className="tech-subtitle text-sm tracking-widest">Marketing</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                We Also Help With <span className="text-orange">Business Growth</span>
              </h2>
              <p className="text-xl text-off-white/80">
                Beyond websites, we help businesses work smarter and grow faster
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScrollAnimation delay={0}>
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">AI Automation</CardTitle>
                    </div>
                    <CardDescription className="text-lg text-off-white/80">
                      Stop doing the same tasks over and over. We'll automate the repetitive stuff so you can focus on what actually grows your business.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">AI phone and chat agents that handle customer conversations 24/7</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">Automatically sort leads and send follow-up sequences</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">Connect your business tools so they work together seamlessly</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => navigate('/automation')}
                      variant="outline" 
                      className="w-full"
                    >
                      Learn About Automation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Growth Marketing</CardTitle>
                    </div>
                    <CardDescription className="text-lg text-off-white/80">
                      Marketing that actually gets you customers. We focus on real results—more leads, more sales, and better ROI from every pound you spend.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">Google and Facebook ads that actually pay for themselves</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">Optimize your customer journey to increase conversions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-off-white/80">Track what matters—revenue, not just vanity metrics</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => navigate('/marketing')}
                      variant="outline" 
                      className="w-full"
                    >
                      Learn About Marketing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Web Design Pricing Carousel */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Web Design <span className="text-orange">Plans</span>
              </h2>
              <p className="text-xl text-off-white/80">
                Choose the payment option that works best for you
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 gap-1 h-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="bg-orange/20 rounded-sm"></div>
                  ))}
                </div>
              </div>

              {/* Carousel Content */}
              <div className="relative bg-near-black/80 backdrop-blur-sm rounded-2xl p-8 border border-slate/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPlan}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3
                    }}
                  >
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${webDesignPlans[currentPlan].gradient}`}>
                          <div className="text-white">
                            {webDesignPlans[currentPlan].icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold font-rajdhani text-off-white mb-2">
                        {webDesignPlans[currentPlan].name}
                        {webDesignPlans[currentPlan].popular && (
                          <span className="ml-3 text-sm bg-orange text-white px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </h3>
                      <p className="text-off-white/70 text-lg">
                        {webDesignPlans[currentPlan].subtitle}
                      </p>
                    </div>

                    {/* Pricing Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-slate/20 rounded-lg p-4 text-center">
                        <div className="text-sm text-off-white/60 mb-1">Monthly to Ownership</div>
                        <div className="text-2xl font-bold text-orange">
                          {webDesignPlans[currentPlan].monthlyToOwnership}
                          <span className="text-sm text-off-white/60">/mo</span>
                        </div>
                        <div className="text-xs text-off-white/50">12 months</div>
                      </div>
                      <div className="bg-slate/20 rounded-lg p-4 text-center">
                        <div className="text-sm text-off-white/60 mb-1">Continuous Monthly</div>
                        <div className="text-2xl font-bold text-blue-400">
                          {webDesignPlans[currentPlan].continuousMonthly}
                          <span className="text-sm text-off-white/60">/mo</span>
                        </div>
                        <div className="text-xs text-off-white/50">+£{webDesignPlans[currentPlan].monthlyCredit}/mo credit</div>
                      </div>
                      <div className="bg-slate/20 rounded-lg p-4 text-center">
                        <div className="text-sm text-off-white/60 mb-1">Buy Outright</div>
                        <div className="text-2xl font-bold text-green-400">
                          {webDesignPlans[currentPlan].outright}
                        </div>
                        <div className="text-xs text-off-white/50">One-time payment</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {webDesignPlans[currentPlan].features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                          <span className="text-off-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevPlan}
                    className="p-3 rounded-full bg-slate/20 hover:bg-slate/40 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-off-white" />
                  </button>

                  <div className="flex space-x-2">
                    {webDesignPlans.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPlan(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentPlan ? 'bg-orange' : 'bg-slate/40'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPlan}
                    className="p-3 rounded-full bg-slate/20 hover:bg-slate/40 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-off-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button onClick={goToWebDesign} size="lg">
                View All Plans & Pricing
              </Button>
            <p className="text-sm text-off-white/60 mt-4">
              All prices are VAT inclusive. No hidden fees.
            </p>
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
                How We Build Your <span className="text-orange">Website</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                From initial consultation to ongoing support, we handle everything so you can focus on your business.
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

            {/* Marketing Services Note */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <div className="bg-near-black/60 rounded-2xl p-8 border border-slate/20">
                <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-4">
                  Need Marketing Too?
                </h3>
                <p className="text-off-white/80 leading-relaxed mb-6">
                  Our AI automation and growth marketing services are available at discounted rates for website clients. 
                  We also work with businesses who have existing websites but want to supercharge their marketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/automation'}
                    variant="outline"
                  >
                    View Automation Services
                  </Button>
                  <Button 
                    onClick={handleBookConsultation}
                    variant="ghost"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Discuss Your Needs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Footer */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to get your professional website?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={goToWebDesign}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                View Web Design Plans
              </Button>
              <Button 
                onClick={handleBookConsultation} 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;