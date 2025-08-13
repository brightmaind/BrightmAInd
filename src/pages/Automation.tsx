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
      icon: <Bot className="w-12 h-12" />,
      title: "AI Voice & Chat Agents",
      description: "Deploy intelligent agents that handle customer conversations 24/7. They can answer questions, book appointments, qualify leads, and provide support—just like your best team member.",
      features: [
        "AI phone agents that handle inbound calls and make outbound calls",
        "Website chat agents that engage visitors and capture leads",
        "WhatsApp and SMS agents for customer support and follow-ups",
        "Appointment booking agents that sync with your calendar"
      ],
      example: "A dental practice uses our AI phone agent to handle appointment bookings. It answers calls 24/7, checks availability, books appointments, sends confirmations, and even handles rescheduling—reducing missed calls by 90% and freeing up front desk staff.",
      useCases: [
        "Restaurants: Take reservations and answer menu questions",
        "Service businesses: Book appointments and provide quotes",
        "E-commerce: Handle customer support and order inquiries",
        "Real estate: Qualify leads and schedule property viewings",
        "Healthcare: Manage appointments and answer basic questions"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Lead Management & CRM",
      description: "Stop manually sorting through leads and inquiries. We'll set up smart systems that automatically qualify, route, and respond to potential customers.",
      features: [
        "Automatically score and prioritize leads based on your criteria",
        "Route inquiries to the right team member instantly",
        "Send personalized follow-up sequences without lifting a finger",
        "Track lead sources and conversion rates automatically"
      ],
      example: "When someone fills out your contact form, they're automatically added to your CRM, scored based on their responses, and receive a personalized email sequence while your sales team gets notified about high-priority leads.",
      useCases: [
        "Automatically qualify leads from multiple sources",
        "Send different follow-up sequences based on lead type",
        "Alert sales team about hot prospects instantly",
        "Track which marketing channels bring the best leads"
      ]
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
      example: "Instead of spending hours in spreadsheets, you'll get a weekly email with your key metrics, customer insights, and actionable recommendations based on your data.",
      useCases: [
        "Automatically generate monthly business reports",
        "Track customer lifetime value and churn rates",
        "Monitor inventory levels and reorder points",
        "Analyze sales performance across different channels"
      ]
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
      example: "When a customer makes a purchase, their information automatically flows to your CRM, accounting software, and fulfillment system while triggering a personalized thank-you sequence.",
      useCases: [
        "Sync customer data between all your business tools",
        "Automate invoice generation and payment reminders",
        "Create approval workflows for expenses or content",
        "Automatically backup important files to cloud storage"
      ]
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
                      
                      {/* Use Cases */}
                      {service.useCases && (
                        <div className="mt-6 bg-charcoal/40 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-orange mb-4">Common Use Cases:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.useCases.map((useCase, useCaseIndex) => (
                              <div key={useCaseIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-off-white/70 text-sm">{useCase}</span>
                              </div>
                            ))}
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

      {/* AI Agents Deep Dive */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                AI Agents That Actually <span className="text-orange">Work</span>
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                Our AI agents don't just follow scripts—they understand context, handle complex conversations, and get smarter over time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollAnimation delay={0}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Voice Agents</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      AI phone agents that sound natural and handle complex conversations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange mb-2">What They Can Do:</h4>
                        <ul className="space-y-2 text-off-white/80">
                          <li>• Answer inbound calls and make outbound calls</li>
                          <li>• Book appointments and check availability</li>
                          <li>• Qualify leads and gather information</li>
                          <li>• Handle customer support inquiries</li>
                          <li>• Transfer complex calls to human agents</li>
                        </ul>
                      </div>
                      <div className="bg-slate/20 rounded-lg p-4">
                        <h4 className="font-semibold text-orange mb-2">Perfect For:</h4>
                        <p className="text-off-white/80 text-sm">
                          Businesses that get lots of phone calls but don't want to miss opportunities outside business hours or when staff are busy.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Chat Agents</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      Smart chat agents for your website, WhatsApp, and social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange mb-2">What They Can Do:</h4>
                        <ul className="space-y-2 text-off-white/80">
                          <li>• Engage website visitors and capture leads</li>
                          <li>• Answer frequently asked questions</li>
                          <li>• Guide customers through your services</li>
                          <li>• Handle WhatsApp and social media messages</li>
                          <li>• Escalate to humans when needed</li>
                        </ul>
                      </div>
                      <div className="bg-slate/20 rounded-lg p-4">
                        <h4 className="font-semibold text-orange mb-2">Perfect For:</h4>
                        <p className="text-off-white/80 text-sm">
                          Websites with lots of visitors, businesses that get messages on multiple platforms, or companies that want to capture more leads.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            {/* Industry Examples */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold font-rajdhani text-off-white mb-8 text-center">
                Industry Examples
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollAnimation delay={0}>
                  <div className="bg-near-black rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-orange mb-3">Healthcare</h4>
                    <p className="text-off-white/80 text-sm mb-3">
                      AI agents handle appointment bookings, answer basic health questions, and manage prescription refill requests.
                    </p>
                    <div className="text-xs text-off-white/60">
                      Result: 70% reduction in admin calls, better patient experience
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation delay={100}>
                  <div className="bg-near-black rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-orange mb-3">E-commerce</h4>
                    <p className="text-off-white/80 text-sm mb-3">
                      Chat agents help customers find products, track orders, and handle returns while capturing abandoned cart leads.
                    </p>
                    <div className="text-xs text-off-white/60">
                      Result: 25% increase in conversions, 50% faster support response
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation delay={200}>
                  <div className="bg-near-black rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-orange mb-3">Professional Services</h4>
                    <p className="text-off-white/80 text-sm mb-3">
                      Voice agents qualify leads, book consultations, and provide service information while you focus on client work.
                    </p>
                    <div className="text-xs text-off-white/60">
                      Result: 3x more qualified leads, zero missed opportunities
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
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