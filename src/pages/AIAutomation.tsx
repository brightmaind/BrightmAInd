import { useNavigate } from 'react-router-dom';
import { Calendar, ShieldCheck, WifiOff, Server, Bot, ClipboardList, BookOpen, Wrench, HardHat, ArrowRight, Lock, CloudOff, Cpu, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui/button';

declare global {
  interface Window {
    Calendly: any;
  }
}

const AIAutomation = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
      return;
    }
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-brightmaind/30min?a1=BrightBox%20Consultation',
        parentElement: document.body
      });
    } else {
      navigate('/contact');
      window.scrollTo(0, 0);
    }
  };

  const painPoints = [
    {
      icon: ShieldCheck,
      title: 'Data Security Risks',
      description: 'Cloud AI tools require sending sensitive production data, IP, and SOPs off-site to third-party servers.'
    },
    {
      icon: WifiOff,
      title: 'Connectivity Issues',
      description: 'Factory floors have limited or no internet. Cloud tools fail exactly when your team needs them most.'
    },
    {
      icon: Bot,
      title: 'Generic Responses',
      description: "Off-the-shelf AI doesn't understand your specific processes, terminology, or documentation."
    }
  ];

  const benefits = [
    {
      icon: Server,
      title: 'On-Premise',
      description: 'A physical appliance that sits on your network. No cloud dependency, no external servers.'
    },
    {
      icon: Lock,
      title: 'Air-Gapped',
      description: 'Completely isolated from the internet. Your data never leaves your building. Ever.'
    },
    {
      icon: Cpu,
      title: 'Custom-Trained',
      description: 'Built on YOUR documentation, SOPs, and processes. It speaks your language from day one.'
    },
    {
      icon: CloudOff,
      title: 'Always Available',
      description: 'Works offline, 24/7, with no subscription to external services. Zero downtime from outages.'
    }
  ];

  const useCases = [
    {
      icon: ClipboardList,
      title: 'Shift Handover Assistance',
      description: 'Consistent, accurate handovers every time. No more lost information between shifts.'
    },
    {
      icon: BookOpen,
      title: 'SOP & Procedure Lookup',
      description: 'Instant access to any procedure or specification, in plain language your team understands.'
    },
    {
      icon: HardHat,
      title: 'Training Support',
      description: 'New operators get answers immediately. Reduce training time and improve confidence on the floor.'
    },
    {
      icon: Wrench,
      title: 'Maintenance Troubleshooting',
      description: 'Diagnose issues faster with AI that knows your equipment history and maintenance records.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Protocol Queries',
      description: 'Immediate, accurate answers to safety questions. No searching through binders or shared drives.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Audit',
      description: 'We audit your documentation, SOPs, and processes to understand how your operation runs.'
    },
    {
      number: '02',
      title: 'Build & Train',
      description: 'We build and train your custom BrightBox on your specific data, terminology, and workflows.'
    },
    {
      number: '03',
      title: 'Install',
      description: 'We install the appliance on-site, connected to your internal network. No internet required.'
    },
    {
      number: '04',
      title: 'Support 24/7',
      description: 'Your team gets instant AI support around the clock. We handle updates and maintenance.'
    }
  ];

  return (
    <div className="bg-charcoal text-off-white">
      <SEOHead
        title="On-Premise AI for Manufacturing | BrightMaind"
        description="BrightBox - custom-built, air-gapped AI appliances for factories and manufacturing. Your data never leaves your building. On-premise AI trained on your processes."
        canonical="/"
      />

      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient relative overflow-hidden z-10" style={{ clipPath: 'inset(100px 0 0 0)' }}>
        <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 border border-off-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border border-orange rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-off-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 border border-orange rounded-lg rotate-12"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 border border-off-white/50 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-5 py-2 mb-8">
              <Server className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium text-orange tracking-wide">On-Premise AI Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-rajdhani text-off-white leading-tight mb-8">
              AI That Lives On Your{' '}
              <span className="hero-gradient-text-orange">Factory Floor</span>
            </h1>

            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
              BrightBox — custom-built, air-gapped AI assistants trained on your processes.{' '}
              <span className="text-off-white font-medium">Your data never leaves your building.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="text-xl px-12 py-6"
                aria-label="Book a consultation"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Consultation
              </Button>

              <Button
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6"
                aria-label="See how BrightBox works"
              >
                See How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Why Cloud AI <span className="text-orange">Doesn't Work</span> for Manufacturing
              </h2>
              <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
                Generic cloud tools weren't built for the factory floor. Here's why they fall short.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-orange/10 border border-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-orange" />
                    </div>
                    <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-3">{point.title}</h3>
                    <p className="text-off-white/70 leading-relaxed max-w-sm mx-auto">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-near-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Introducing <span className="text-orange">BrightBox</span>
              </h2>
              <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
                A physical AI appliance that plugs into your network. No cloud. No external APIs. No data leaving your facility.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange/10 border border-slate/20">
                <img
                  src="/brightbox-product.png"
                  alt="BrightBox AI - on-premise AI appliance for manufacturing"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate/20 backdrop-blur-sm border border-slate/30 rounded-2xl p-8 hover:border-orange/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold font-rajdhani text-off-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-off-white/70 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                Built for the <span className="text-orange">Factory Floor</span>
              </h2>
              <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
                BrightBox handles the real challenges your team faces every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate/10 border border-slate/20 rounded-2xl p-8 hover:border-orange/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-rajdhani text-off-white mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-off-white/70 leading-relaxed text-sm">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-near-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
                How It <span className="text-orange">Works</span>
              </h2>
              <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
                From first conversation to 24/7 AI support in four straightforward steps.
              </p>
            </div>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold font-rajdhani text-lg">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-16 bg-orange/20"></div>
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-2xl font-bold font-rajdhani text-off-white mb-2">{step.title}</h3>
                    <p className="text-off-white/70 leading-relaxed max-w-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate/20 border border-slate/30 rounded-3xl p-10 md:p-16 text-center">
              <div className="w-16 h-16 bg-orange/10 border border-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lock className="w-8 h-8 text-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-rajdhani text-off-white mb-6">
                What Happens on Your Floor,{' '}
                <span className="text-orange">Stays on Your Floor</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-off-white/80">No cloud connections</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-off-white/80">No external APIs</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-off-white/80">No data transmission</span>
                </div>
              </div>
              <p className="text-off-white/60 leading-relaxed max-w-2xl mx-auto">
                BrightBox operates entirely within your facility. Your proprietary data, processes, and IP
                stay exactly where they belong — with you. No exceptions.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-off-white mb-6">
              Ready to See BrightBox <span className="text-orange">in Action?</span>
            </h2>
            <p className="text-xl text-off-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
              Book a consultation and we'll walk you through how BrightBox would work in your facility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="text-xl px-12 py-6"
                aria-label="Book a consultation"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book a Consultation
              </Button>

              <Button
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6"
                aria-label="Send us a message"
              >
                Send Us a Message
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-12 bg-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Your data. Your network. Your AI.
            </h3>
            <Button
              onClick={handleBookConsultation}
              size="lg"
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 text-xl px-12 py-6"
              aria-label="Get started with BrightBox"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default AIAutomation;
