import React from 'react';
import { Bot, Target, Settings, TrendingUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot size={48} />,
      title: "AI Automation",
      description: "Streamlining workflows with cutting-edge AI tools to eliminate repetitive tasks and boost productivity across your organization.",
      features: ["Workflow Automation", "AI Chatbots", "Process Optimization", "Smart Integrations"]
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Marketing Strategy",
      description: "Targeted campaigns designed for maximum impact, leveraging data-driven insights to reach your ideal customers effectively.",
      features: ["Campaign Development", "Audience Targeting", "Performance Analytics", "Content Strategy"]
    },
    {
      icon: <Settings size={48} />,
      title: "System Integration",
      description: "Seamlessly connect your business tools and platforms to create a unified, efficient ecosystem that works in harmony.",
      features: ["API Connections", "Data Synchronization", "Platform Integration", "Custom Solutions"]
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
            Comprehensive AI-powered solutions designed to streamline your operations and amplify your marketing impact.
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
              { step: "01", title: "Discovery", description: "Understanding your business goals and current challenges." },
              { step: "02", title: "Strategy", description: "Developing a customized roadmap for your success." },
              { step: "03", title: "Implementation", description: "Executing solutions with precision and expertise." },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring." }
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