import React, { useState } from 'react';
import { Bot, TrendingUp, Settings, ChevronDown, Calendar, ArrowLeft, ArrowRight, Check, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(0);

  const webDesignPlans = [
    {
      name: "Starter",
      subtitle: "Single page",
      monthlyToOwnership: "£109",
      continuousMonthly: "£69",
      outright: "£700",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Single-page website",
        "1 custom logo at onboarding",
        "24/7 emergency support",
        "Up to 3 hours of changes each month",
        "Hosting & security included"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Growth",
      subtitle: "Multi-page (up to 5 pages)",
      monthlyToOwnership: "£229",
      continuousMonthly: "£149",
      outright: "£1,300",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Multi-page website (up to 5 pages)",
        "1 marketing graphic each month",
        "24/7 emergency support",
        "Up to 8 hours of changes each month",
        "Hosting & security included"
      ],
      gradient: "from-orange to-red-500",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "Multi-page (up to 10 pages)",
      monthlyToOwnership: "£399",
      continuousMonthly: "£259",
      outright: "£2,000",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Multi-page website (up to 10 pages)",
        "2 marketing graphics each month",
        "Priority response",
        "Up to 20 hours of changes each month",
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
    { step: "01", title: "Diagnose", description: "We'll map out your customer journey and find what's holding you back." },
    { step: "02", title: "Design", description: "Create the simplest solution that gets you the biggest win." },
    { step: "03", title: "Build", description: "Build reliable systems you can actually use and understand." },
    { step: "04", title: "Scale", description: "Test, improve, and multiply your results." }
  ];

  const handleBookConsultation = () => {
    // TODO: Open Calendly modal
    console.log('Opening Calendly modal...');
  };

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % webDesignPlans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + webDesignPlans.length) % webDesignPlans.length);
  };

  const goToWebDesign = () => {
    window.location.href = '/web-design';
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Hero Section */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white leading-tight">
                Professional websites on a simple monthly plan
              </h1>
              
              <p className="text-xl text-off-white/80 leading-relaxed max-w-2xl">
                Get a professional website with hosting, security, updates, and ongoing support included. No surprises, no hidden costs.
              </p>
              
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

            {/* Right: Logo */}
            <div className="flex justify-center lg:justify-end">
             <div className="w-125 h-125 lg:w-150 lg:h-150 flex flex-col items-center space-y-2">
                <img 
                  src="/assets_task_01k2dvrpkbfntr573hm1h0p81k_1754959602_img_0.webp" 
                  alt="Bright mAInd Marketing Logo" 
                 className="w-full h-3/4 object-contain rounded-2xl"
                />
               <div className="text-center">
                 <h2 className="text-5xl lg:text-6xl font-bold font-rajdhani brand-text brand-text-glow mb-3">
                   Bright m<span className="text-orange">AI</span>nd
                 </h2>
                 <p className="tech-subtitle text-base tracking-widest">Marketing</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <ScrollAnimation>
        <section className="py-16 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg font-medium text-off-white/60 mb-8">
              Trusted by founders who move fast
            </h2>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Services
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="text-orange mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {service.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <button
                        onClick={() => setExpandedService(expandedService === index ? null : index)}
                        className="flex items-center text-orange hover:text-orange/80 transition-colors mb-4"
                      >
                        <span className="mr-2">See details</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            expandedService === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedService === index && (
                        <div className="space-y-2 animate-fade-in">
                          {service.bullets.map((bullet, bulletIndex) => (
                            <div key={bulletIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div className="mb-6 space-y-3">
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-white/80">Monthly to Ownership</span>
                              <span className="text-lg font-bold text-white">{plan.monthlyToOwnership}/mo</span>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-white/80">Continuous Monthly</span>
                              <span className="text-lg font-bold text-white">{plan.continuousMonthly}/mo</span>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-white/80">Buy Outright</span>
                              <span className="text-lg font-bold text-white">{plan.outright}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
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
                Process
              </h2>
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