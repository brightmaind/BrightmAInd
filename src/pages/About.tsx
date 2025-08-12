import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About: React.FC = () => {
  const team = [
    {
      name: "Stefan Jess",
      role: "Founder, Automation & Growth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "M. Patel",
      role: "Full-Stack & Integrations", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "A. Nguyen",
      role: "Performance Creative",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      title: "What Works > What's Trendy",
      description: "We choose tools that solve your problems, not whatever's hot on Twitter."
    },
    {
      title: "Results Over Opinions", 
      description: "We let the numbers tell us what's working, not gut feelings."
    },
    {
      title: "You Own Everything",
      description: "Your systems belong to you. We make sure you understand how they work."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              About Me
            </h1>
            <div className="text-xl md:text-2xl text-off-white/80 leading-relaxed space-y-6">
              <p>
                 We started mAInd because we were tired of seeing good businesses struggle with systems that should make their lives easier, not harder.
              </p>
              <p>
                We help founders and small teams grow faster by combining smart marketing with practical automation. No buzzwords, no overcomplicated tech—just solutions that actually work.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Values Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <CardTitle className="text-orange">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-off-white/80">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Who I Work With
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-off-white/80 leading-relaxed mb-8">
                While we handle most projects ourselves, we work with a small network of trusted specialists when needed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-orange mb-2">Development Partner</h3>
                  <p className="text-off-white/70">For complex integrations and custom builds</p>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-orange mb-2">Creative Partner</h3>
                  <p className="text-off-white/70">For high-converting ad creative and design</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default About;