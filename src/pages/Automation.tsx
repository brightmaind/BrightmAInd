import React from 'react';
import { Bot, Zap, Database, MessageSquare, Clock, TrendingUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Automation: React.FC = () => {
  const automationServices = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Lead Management",
      description: "Stop manually sorting through leads and inquiries. We'll set up smart systems that automatically qualify, route, and respond to potential customers.",
      features: [
        "Automatically score and prioritize leads based on your criteria",
        "Route inquiries to the right team member instantly",
        "Send personalized follow-up sequences without lifting a finger",
        "Track lead sources and conversion rates automatically"
      ],
      example: "When someone fills out your contact form, they're automatically added to your CRM, scored based on their responses, and receive a personalized email sequence while your sales team gets notified about high-priority leads."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data & Reporting",
      description: "Turn your messy data into clear insights. We'll clean up your information and create reports that actually help you make decisions.",
      features: [
        "Clean and organize customer data across all your systems",
        "Generate weekly/monthly reports automatically",
        "Track key metrics that matter to your business",
        "Spot trends and opportunities you might miss manually"
      ],
      example: "Instead of spending hours in spreadsheets, you'll get a weekly email with your key metrics, customer insights, and actionable recommendations based on your data."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Workflow Automation",
      description: "Connect your business tools so they work together seamlessly. No more copying data between apps or missing important tasks.",
      features: [
        "Connect your favorite apps (CRM, email, calendar, accounting)",
        "Automate repetitive tasks like data entry and file organization",
        "Set up smart notifications for important events",
        "Create approval workflows for your team"
      ],
      example: "When a customer makes a purchase, their information automatically flows to your CRM, accounting software, and fulfillment system while triggering a personalized thank-you sequence."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Reclaim hours every week by automating repetitive tasks. Focus on growing your business instead of managing it."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Reduce Errors",
      description: "Eliminate human mistakes in data entry, follow-ups, and routine processes. Your systems work consistently every time."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Scale Efficiently",
      description: "Handle more customers and inquiries without hiring more staff. Your automated systems grow with your business."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit Your Current Setup",
      description: "We'll review your existing tools and processes to identify the biggest time-wasters and bottlenecks."
    },
    {
      step: "02", 
      title: "Design Your Automation",
      description: "Create a custom plan that connects your tools and automates your most important workflows."
    },
    {
      step: "03",
      title: "Build & Test",
      description: "Set up your automations and test everything thoroughly to ensure they work perfectly."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Track performance and make improvements to ensure your automations keep delivering results."
    }
  ];

  const handleBookConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how automation can transform your business operations</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              AI <span className="text-orange">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-8">
              Stop doing the same tasks over and over. We'll automate the repetitive stuff so you can focus on what actually grows your business.
            </p>
            <Button onClick={handleBookConsultation} size="lg">
              Discuss Your Automation Needs
            </Button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                What We <span className="text-orange">Automate</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                We focus on the tasks that eat up your time but don't require your expertise.
              </p>
            </div>

            <div className="space-y-16">
              {automationServices.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 150}>
                  <Card className="max-w-5xl mx-auto">
                    <CardHeader>
                      <div className="flex items-start space-x-6">
                        <div className="text-orange flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                          <CardDescription className="text-lg text-off-white/80 leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-orange mb-4">What We Set Up:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-off-white/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate/20 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-orange mb-4">Real Example:</h4>
                          <p className="text-off-white/80 leading-relaxed italic">
                            {service.example}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why <span className="text-orange">Automate?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="text-orange mb-4 flex justify-center">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80">{benefit.description}</p>
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
                Our <span className="text-orange">Process</span>
              </h2>
              <p className="text-xl text-off-white/80">
                From audit to optimization, we handle everything
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's identify the biggest time-wasters in your business and automate them away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookConsultation}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                Book Free Consultation
              </Button>
              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange"
              >
                Ask Questions
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Automation;