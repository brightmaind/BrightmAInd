import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About: React.FC = () => {
  const values = [
    {
      title: "Exclusive Focus",
      description: "We work only with medical aesthetics clinics. Every strategy is tailored to your treatments and client base."
    },
    {
      title: "Proven System", 
      description: "Our Growth System fills calendars and cuts no-shows. It's not theory—it's what works for clinics like yours."
    },
    {
      title: "Priority Guarantee",
      description: "We deliberately limit how many clinics we work with. That means when you're in, you're not competing for our attention—you're our priority."
    }
  ];

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              About Us
            </h1>
            <div className="text-xl md:text-2xl text-off-white/80 leading-relaxed space-y-6">
              <p>
                We're growth specialists who help medical aesthetics clinics in Scotland fill their calendars and cut no-shows.
              </p>
              <p>
                Our Growth System combines smart marketing with AI automation to solve the two biggest problems clinics face: empty slots and revenue lost to no-shows.
              </p>
              <p>
                We don't work with everyone. We focus exclusively on medical aesthetics clinics because that's where we deliver the best results.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Us Section */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why Clinics Choose Us
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

      {/* Our Approach Section */}
      <ScrollAnimation>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Our Approach
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-near-black/60 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-orange mb-4">What We Do</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    We build complete Growth Systems: sleek websites with booking flows, targeted ads that attract ideal clients, 
                    content that sells treatments, and automation that cuts no-shows. Everything works together to fill your calendar.
                  </p>
                </div>
                
                <div className="bg-near-black/60 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-orange mb-4">How We're Different</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    We only work with medical aesthetics clinics. That means every strategy, every piece of content, 
                    every automation is designed specifically for your industry. No generic solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Guarantee Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Our Priority Guarantee
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We deliberately limit the number of clinics we work with at any time. This means you're never lost in a queue—
              you get our full attention and priority support when you need it.
            </p>
            <p className="text-lg text-white/80">
              When we take on your clinic, we're committed to filling your calendar and cutting your no-shows. That's our promise.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default About;