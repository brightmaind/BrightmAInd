import React from 'react';
import { Bot, Target, Settings, TrendingUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot size={48} />,
      title: "AI Automation",
      description: "We'll automate the repetitive stuff so you can focus on what matters. No more manual data entry, sorting leads, or sending the same emails over and over.",
      features: ["Automatically sort and route your leads", "Smart inbox management and auto-replies", "Clean up your data and create useful reports", "Connect your apps so they work together"]
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Marketing That Actually Works",
      description: "We focus on getting you real customers, not just pretty numbers. Our campaigns are designed to pay for themselves and grow your business.",
      features: ["Design offers and funnels that convert", "Run Google and Facebook ads that pay for themselves", "Test and improve what's working", "Track real results, not vanity metrics"]
    },
    {
      icon: <Settings size={48} />,
      title: "System Integration",
      description: "We make your business tools work together like they should. No more switching between apps or manually copying data around.",
      features: ["Connect your apps with Zapier or Make", "Set up custom connections when needed", "Integrate Stripe, Shopify, HubSpot, and more", "Make sure your data flows where it needs to go"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Our <span className="text-orange">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We help businesses grow by automating the boring stuff and making marketing that actually works.
          </p>
        </div>
      </section>
      </ScrollAnimation>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-lg card-hover max-w-4xl mx-auto">
                <div className="text-orange mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span className="text-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ScrollAnimation>
        <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our <span className="text-orange">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation and measurable results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", description: "We'll look at your current setup and find what's actually slowing you down." },
              { step: "02", title: "Plan", description: "Create a simple roadmap focusing on the changes that'll make the biggest difference." },
              { step: "03", title: "Build", description: "Set up the automations and campaigns, then test everything works properly." },
              { step: "04", title: "Improve", description: "Track what's working, fix what isn't, and scale up the winners." }
            ].map((process, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center">
                <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
};

export default Services;