import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Megaphone, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Marketing: React.FC = () => {
  const marketingServices = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Paid Advertising",
      description: "We create and manage ad campaigns that actually pay for themselves. No vanity metrics—just real customers and measurable ROI.",
      features: [
        "Google Ads that target people actively searching for your services",
        "Facebook and Instagram ads that reach your ideal customers",
        "Landing pages designed to convert visitors into customers",
        "A/B testing to improve performance continuously"
      ],
      example: "For example, a local service business could go from spending £2,000/month on ads with poor results to generating £15,000 in new revenue monthly with a £3,000 ad spend through better targeting and landing page optimization."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Journey Optimization",
      description: "We map out how customers find and buy from you, then optimize every step to increase conversions and reduce drop-offs.",
      features: [
        "Analyze where potential customers are getting stuck or leaving",
        "Create compelling offers that motivate people to buy",
        "Design email sequences that nurture leads into customers",
        "Set up systems to win back customers who didn't buy initially"
      ],
      example: "By optimizing a business's checkout process and adding abandoned cart emails, we could help increase their conversion rate from 2.1% to 4.8%, potentially doubling revenue without spending more on ads."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Performance Tracking",
      description: "We track what actually matters—revenue, customer acquisition cost, and lifetime value. You'll know exactly what's working and what isn't.",
      features: [
        "Set up proper tracking for all your marketing channels",
        "Create dashboards that show real business impact",
        "Identify your most profitable customer sources",
        "Regular reporting with actionable insights and recommendations"
      ],
      example: "We might discover that a business's best customers come from LinkedIn, not Google Ads. By shifting budget to LinkedIn campaigns, we could help reduce their customer acquisition cost by 40%."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictable Growth",
      description: "Know exactly how much you need to spend to get the customers you want. No more guessing or hoping."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Better ROI",
      description: "Every pound spent on marketing should return more than it costs. We make sure it does."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Clear Messaging",
      description: "Your ideal customers will understand exactly what you offer and why they should choose you."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Marketing Audit",
      description: "We'll review your current marketing efforts and identify the biggest opportunities for improvement."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a focused plan that targets your ideal customers with the right message at the right time."
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "Set up and launch your campaigns with proper tracking and optimization systems in place."
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously test and improve performance, then scale up what's working best."
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
          textOverlay.innerHTML = '<span>Let\'s discuss how to grow your business with marketing that actually works</span>';
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
              Growth <span className="text-orange">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed mb-8">
              Marketing that actually gets you customers. We focus on real results—more leads, more sales, and better ROI from every pound you spend.
            </p>
            <Button onClick={handleBookConsultation} size="lg">
              Discuss Your Marketing Goals
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
                How We <span className="text-orange">Grow</span> Your Business
              </h2>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                We don't do marketing for the sake of marketing. Everything we do is designed to get you more customers.
              </p>
            </div>

            <div className="space-y-16">
              {marketingServices.map((service, index) => (
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
                          <h4 className="text-lg font-semibold text-orange mb-4">What We Do:</h4>
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
                          <h4 className="text-lg font-semibold text-orange mb-4">How This Could Help:</h4>
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
                Why Choose Our <span className="text-orange">Approach?</span>
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
                From strategy to scaling, we handle everything
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

      {/* Guarantee Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold font-rajdhani text-orange mb-6">
                Our Performance Promise
              </h3>
              <p className="text-xl text-off-white/90 leading-relaxed mb-6">
                We're so confident in our approach that we track everything and show you exactly how your marketing investment is performing. 
                If we're not delivering measurable results within 90 days, we'll work for free until we do.
              </p>
              <p className="text-off-white/80">
                No long-term contracts. No hidden fees. Just results you can measure.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create a marketing strategy that actually gets you customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookConsultation}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                Book Free Strategy Call
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

export default Marketing;