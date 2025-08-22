import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Target, BarChart3, Users, Bot, Calendar, ArrowRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// Calendly integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Services: React.FC = () => {
  const navigate = useNavigate();

  const servicesSchema = [
    {
      serviceType: "Aesthetics Clinic Landing Pages",
      areaServed: "Scotland",
      description: "Booking-focused landing pages with deposits and reminders to increase show-up rate."
    },
    {
      serviceType: "Targeted Ads for Aesthetics Clinics", 
      areaServed: "Scotland",
      description: "Local campaigns that drive high-intent bookings."
    },
    {
      serviceType: "Automation to Cut No-Shows",
      areaServed: "Scotland", 
      description: "Automated deposits + reminders integrated with booking."
    }
  ];

  const growthSystem = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Websites that Convert",
      description: "Sleek booking flows with upfront deposits, designed to maximise bookings and reduce no-shows.",
      features: [
        "Seamless online booking with deposit collection",
        "Mobile-optimized designs that convert on every device",
        "Treatment galleries showcasing your best work",
        "Fast-loading pages that keep potential clients engaged",
        "Already have a website? We create standalone booking-focused landing pages that work alongside your site—built to convert browsers into paying clients with deposits and reminders"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Content that Sells",
      description: "Video and creative content that makes treatments irresistible and drives bookings.",
      features: [
        "Before/after videos that showcase real results",
        "Social media content that builds trust and desire",
        "Educational posts positioning you as the expert",
        "Scroll-stopping creative that converts browsers to bookers"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Ads that Attract Clients",
      description: "Targeted local campaigns designed to keep your calendars full with ideal clients.",
      features: [
        "Facebook and Instagram ads targeting your ideal demographic",
        "Google Ads for people actively searching for treatments",
        "Local targeting to fill chairs in your area",
        "Retargeting campaigns that bring back interested prospects"
      ]
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Automation that Cuts No-Shows",
      description: "Smart reminders and deposit systems that protect your revenue and reduce wasted time.",
      features: [
        "Automated booking confirmations and reminders",
        "Deposit collection that reduces no-shows by 40%+",
        "Follow-up sequences for repeat bookings",
        "AI chatbots that answer questions and capture leads 24/7"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current setup and identify the biggest opportunities to fill your calendar and reduce no-shows."
    },
    {
      step: "02", 
      title: "Build",
      description: "We create your complete growth system—website, ads, content, and automation—all working together seamlessly."
    },
    {
      step: "03",
      title: "Growth",
      description: "Watch your bookings increase and no-shows drop as your new system runs on autopilot, filling your clinic consistently."
    }
  ];

  const handleBookConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=Growth%20System%20Enquiry',
        parentElement: document.body
      });
      
      setTimeout(() => {
        const popup = document.querySelector('.calendly-popup');
        if (popup && !popup.querySelector('.calendly-text-overlay')) {
          const textOverlay = document.createElement('div');
          textOverlay.className = 'calendly-text-overlay';
          textOverlay.innerHTML = '<span>Let\'s discuss how our Growth System can fill your clinic\'s calendar</span>';
          popup.appendChild(textOverlay);
        }
      }, 100);
    } else {
      window.open('https://calendly.com/enquiries-brightmaind/30min?a1=Growth%20System%20Enquiry', '_blank');
    }
  };

  return (
    <div className="pt-20 bg-charcoal text-off-white">
      <SEOHead 
        title="Aesthetics Clinic Growth System | Bright mAInd"
        description="One system for clinics: landing pages, ads, content, automation to cut no-shows and fill calendars."
        canonical="/services"
        services={servicesSchema}
      />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ name: 'Services', url: '/services' }]} />
      
      {/* Header Section */}
      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani text-off-white mb-8">
              Stop losing revenue to <span className="text-orange">empty slots and no-shows</span>
            </h1>
            <div className="space-y-6 text-xl md:text-2xl text-off-white/80 leading-relaxed mb-8">
              <p>
                <strong className="text-red-400">Problem:</strong> Your current booking system sends visitors to a generic page with no qualification or commitment.
              </p>
              <p>
                <strong className="text-red-400">Result:</strong> High bounce rates, unpredictable calendars, and 30-40% no-show rates eating into your profits.
              </p>
              <p>
                <strong className="text-green-400">Solution:</strong> Treatment-specific funnels that qualify prospects, secure deposits, and deliver 15+ consultations monthly at a predictable cost.
              </p>
            </div>
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-6 mb-8">
              <p className="text-lg text-off-white/90 mb-2">
                <strong>What You Get:</strong>
              </p>
              <p className="text-off-white/80">
                Funnel build · 3 creatives/month · tracking setup · weekly optimisation & reporting
              </p>
              <p className="text-sm text-off-white/70 mt-2">
                From £1,500/month + £500–£800 ad spend per flagship treatment
              </p>
            </div>
            <p className="text-lg text-orange mb-8">
              <strong>Our Guarantee:</strong> 15+ qualified consultations in 60 days at the agreed cost—or we work for free until we hit it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookConsultation} size="lg">
                Book a 10-minute audit
              </Button>
              <Button 
                onClick={() => {
                  navigate('/faqs');
                  window.scrollTo(0, 0);
                }}
                size="lg" 
                variant="outline"
              >
                See the demo funnels
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Growth System Components */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {growthSystem.map((component, index) => (
                <ScrollAnimation key={index} delay={index * 150}>
                  <Card className="max-w-5xl mx-auto">
                    <CardHeader>
                      <div className="flex items-start space-x-6">
                        <div className="text-orange flex-shrink-0">
                          {component.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-4">{component.title}</CardTitle>
                          <CardDescription className="text-lg text-off-white/80 leading-relaxed">
                            {component.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {component.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-off-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {index === 1 && (
                        <div className="mt-6 pt-4 border-t border-slate/20">
                          <Link 
                            to="/content-creation" 
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-orange hover:text-orange/80 underline"
                          >
                            Explore our video reels and social media content creation services →
                          </Link>
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                How We Transform <span className="text-orange">Medical Aesthetics Clinics</span>
              </h2>
              <p className="text-xl text-off-white/80">
                From audit to growth, we handle everything
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <p className="text-off-white/80">{step.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Promise */}
      <ScrollAnimation>
        <section className="py-24 bg-near-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold font-rajdhani text-orange mb-6">
                What You Can Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">40%+</div>
                  <p className="text-off-white/80">Reduction in no-shows</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">15+</div>
                  <p className="text-off-white/80">Extra bookings per month</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-off-white mb-2">60</div>
                  <p className="text-off-white/80">Days to see results</p>
                </div>
              </div>
              <p className="text-off-white/80">
                Results based on our work with medical aesthetics clinics across Scotland.
              </p>
              <div className="mt-6">
                <Link 
                  to="/faqs" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-orange hover:text-orange/80 underline"
                >
                  See detailed pricing and timeline information →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-24 bg-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-8">
              Ready to Fill Your Calendar?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a free growth audit and see exactly how many more bookings your clinic could be getting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookConsultation}
                size="lg" 
                variant="secondary"
                className="bg-white text-orange hover:bg-white/90"
              >
                Book Free Growth Audit
              </Button>
              <Button 
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }}
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

export default Services;