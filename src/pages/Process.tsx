import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Search, Lightbulb, Code, TrendingUp, Monitor, Target, Bot, MessageSquare, Database, Zap } from 'lucide-react';

const Process: React.FC = () => {
  const webDesignSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We learn about your business and what you need your website to do.",
      icon: <Search className="w-8 h-8" />,
      details: "We'll understand your goals, target audience, and requirements. No technical jargon—just a conversation about what you need."
    },
    {
      step: "02", 
      title: "Design",
      description: "We create a website design that represents your brand and converts visitors.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: "Clean, professional designs that work on all devices. We focus on making it easy for visitors to become customers."
    },
    {
      step: "03",
      title: "Build", 
      description: "We build your website with hosting, security, and backups included.",
      icon: <Code className="w-8 h-8" />,
      details: "Fast, secure websites that you don't have to worry about. Everything is handled—hosting, updates, security, and backups."
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing updates, maintenance, and changes as your business grows.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: "Monthly change credits for updates, 24/7 emergency support, and ongoing maintenance. Your website grows with your business."
    }
  ];

  const marketingSteps = [
    {
      step: "01",
      title: "Audit",
      description: "We look at your current marketing and find what's holding you back.",
      icon: <Search className="w-8 h-8" />,
      details: "We'll review your current setup—ads, website, processes—and identify the biggest opportunities for improvement."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "We create a plan focused on getting you more customers.",
      icon: <Target className="w-8 h-8" />,
      details: "Simple, focused strategies that target your ideal customers. We prioritize the changes that will make the biggest difference first."
    },
    {
      step: "03",
      title: "Implementation", 
      description: "We set up the campaigns, automations, and systems.",
      icon: <Code className="w-8 h-8" />,
      details: "We build and test everything—ad campaigns, email sequences, automations. You'll know exactly how everything works."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We track results and improve what's working.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: "Regular reporting and improvements. We double down on what's working and fix or remove what isn't."
    }
  ];

  const automationSteps = [
    {
      step: "01",
      title: "Look at What You're Doing",
      description: "We'll see what tasks eat up your time and where things get stuck.",
      icon: <Search className="w-8 h-8" />,
      details: "No fancy audits—just a conversation about what's driving you crazy and taking too long each day."
    },
    {
      step: "02", 
      title: "Design Your Solution",
      description: "We'll map out exactly what to automate and how it'll work.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: "Simple plans that make sense. We'll show you exactly what will happen when someone calls, emails, or visits your site."
    },
    {
      step: "03",
      title: "Build & Connect", 
      description: "We set up your AI agents and connect all your tools.",
      icon: <Code className="w-8 h-8" />,
      details: "Your phone agent, chat bot, and automated workflows get built and tested. Everything connects to your existing tools."
    },
    {
      step: "04",
      title: "Test & Improve",
      description: "We make sure everything works perfectly and keeps getting better.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: "We'll monitor how it's working and make tweaks. Your AI agents get smarter over time."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              How We <span className="text-orange">Work</span>
            </h1>
            <p className="text-xl text-off-white/80">
              Straightforward processes for both web design and marketing services.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Web Design Process */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Monitor className="w-12 h-12 text-orange mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white">
                  Web Design Process
                </h2>
              </div>
              <p className="text-xl text-off-white/80">
                From initial consultation to ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {webDesignSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                        {step.step}
                      </div>
                      <div className="text-orange mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/70 text-sm">{step.details}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Marketing Process */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-orange mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white">
                  Marketing Process
                </h2>
              </div>
              <p className="text-xl text-off-white/80">
                From audit to optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketingSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                        {step.step}
                      </div>
                      <div className="text-orange mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/70 text-sm">{step.details}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Automation Process */}
      <ScrollAnimation>
        <section className="py-24 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Bot className="w-12 h-12 text-orange mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white">
                  Automation Process
                </h2>
              </div>
              <p className="text-xl text-off-white/80">
                How we automate your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {automationSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-rajdhani mx-auto mb-4">
                        {step.step}
                      </div>
                      <div className="text-orange mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/70 text-sm">{step.details}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Our Approach */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why Choose Our Approach?
              </h2>
              <p className="text-xl text-off-white/80">
                Clear processes, no surprises, measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-orange">Transparent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">You'll always know what we're doing and why. No black boxes or mysterious processes.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={100}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-orange">Practical</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">We focus on solutions that actually work for your business, not what's trendy or complicated.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-orange">Results-Focused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-off-white/80">Everything we do is measured against real business outcomes—more customers, more revenue, less hassle.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Process;