import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Search, Lightbulb, Code, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Diagnose",
      description: "We map your funnel and find the levers.",
      icon: <Search className="w-8 h-8" />,
      details: "We'll dig into how your business actually works, find what's slowing you down, and spot the biggest opportunities."
    },
    {
      step: "02", 
      title: "Design",
      description: "Create the simplest solution that gets you the biggest win.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: "We design simple, focused solutions that give you the biggest bang for your buck without unnecessary complexity."
    },
    {
      step: "03",
      title: "Build", 
      description: "Build reliable systems you can actually use and understand.",
      icon: <Code className="w-8 h-8" />,
      details: "We build systems that work reliably, scale with your business, and come with clear documentation so you're never left in the dark."
    },
    {
      step: "04",
      title: "Scale",
      description: "Test, improve, and multiply your results.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: "We help you test what's working, improve what isn't, and scale up the winners to multiply your results."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Our <span className="text-orange">Process</span>
            </h1>
            <p className="text-xl text-off-white/80">
              A proven methodology that ensures successful implementation and measurable results for every project.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Process Steps */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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

      {/* Timeline Visualization */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Timeline
              </h2>
              <p className="text-xl text-off-white/80">
                From initial consultation to scaled results
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange/30 hidden lg:block"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <ScrollAnimation key={index} delay={index * 150}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16`}>
                      <div className="flex-1 lg:text-right">
                        <Card className={index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-4">
                              <span className="text-orange">{step.step}</span>
                              {step.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-off-white/80">{step.details}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="w-4 h-4 bg-orange rounded-full relative z-10 hidden lg:block"></div>
                      
                      <div className="flex-1"></div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Process;