import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, ServerCog, Cpu, Lock, Network, Fingerprint, HardDrive, Settings, Headphones as HeadphonesIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import { Button } from '../components/ui/button';

const Solutions: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Solutions — Custom Private AI Deployments | BrightMaind"
        description="BrightMaind designs and deploys custom-built, on-premise AI hardware systems for privacy-conscious businesses. Every system is tailored to your industry, your workflows, and your security requirements."
        canonical="/solutions"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 lg:px-10 border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Custom deployments</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-paper tracking-tightest leading-[1.05] max-w-4xl">
            AI systems built entirely around your business.
          </h1>
          <p className="mt-8 text-lg text-whisper leading-relaxed max-w-2xl">
            No two deployments are the same. We work closely with your team to understand what you need, then design, build, and install a private AI system that fits your operations, your environment, and your compliance requirements.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button size="lg" variant="accent">
                Start a conversation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">What you get</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                A complete, private AI deployment.
              </h2>
              <p className="mt-6 text-whisper text-base md:text-lg leading-relaxed">
                Every engagement delivers a fully operational system — not a proof of concept.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                {
                  icon: Cpu,
                  title: 'Purpose-built hardware',
                  body: 'Designed and assembled to match your workload. The right processing power, the right storage, the right form factor for your environment.',
                },
                {
                  icon: Lock,
                  title: 'Private AI models',
                  body: 'Models selected and configured for your industry and use cases. They run locally on your hardware — no cloud, no third-party access.',
                },
                {
                  icon: Network,
                  title: 'Infrastructure integration',
                  body: 'Connected to your existing systems, authenticated against your identity provider, and configured for your network architecture.',
                },
                {
                  icon: Shield,
                  title: 'Air-gap capable',
                  body: 'For regulated or sensitive environments, the system operates without any internet connection. Complete physical isolation from external networks.',
                },
                {
                  icon: Fingerprint,
                  title: 'Your data, your control',
                  body: 'Every document, every query, every result stays on hardware you own. No telemetry, no usage tracking, no data leaving the premises.',
                },
                {
                  icon: HeadphonesIcon,
                  title: 'Ongoing partnership',
                  body: 'Deployment is the beginning, not the end. We provide continued support, updates, and refinements as your needs evolve.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-8 md:p-10">
                  <Icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* How It Works */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">How it works</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                A straightforward path from first conversation to live system.
              </h2>
            </div>

            <div className="space-y-px">
              {[
                {
                  step: '01',
                  icon: Settings,
                  title: 'Discovery & scoping',
                  body: 'We spend time understanding your business, your industry regulations, your existing infrastructure, and the specific problems you want AI to solve. No jargon, no sales pitch — just an honest conversation about what will and will not work.',
                },
                {
                  step: '02',
                  icon: Cpu,
                  title: 'System design',
                  body: 'Based on what we learn, we design a system that fits. Hardware specifications, model selection, integration points, and security architecture — all documented and agreed before anything is built.',
                },
                {
                  step: '03',
                  icon: HardDrive,
                  title: 'Build & testing',
                  body: 'We assemble and rigorously test the system before it reaches your site. When it arrives, it works. No prototyping on your premises.',
                },
                {
                  step: '04',
                  icon: ServerCog,
                  title: 'On-site deployment',
                  body: 'We install the system in your facility, connect it to your infrastructure, and work with your team to ensure everything is running smoothly before we leave.',
                },
                {
                  step: '05',
                  icon: HeadphonesIcon,
                  title: 'Support & evolution',
                  body: 'Your needs will change, and the system will evolve with them. We provide ongoing support and work with you to expand capabilities as your organisation grows.',
                },
              ].map(({ step, icon: Icon, title, body }) => (
                <div
                  key={step}
                  className="bg-ink border border-border/60 rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  <div className="flex items-start gap-4 md:w-64 flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="text-xs font-mono text-whisper-dim tracking-widest block mb-1">{step}</span>
                      <h3 className="font-display text-xl font-semibold text-paper">{title}</h3>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why BrightMaind */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Why BrightMaind</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Built by people who understand operational reality.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                We are not a consultancy that hands you a report and leaves. We design, build, and deploy working AI systems — and we stand behind them with ongoing support.
              </p>
              <p>
                Our background is in real operations, not research labs. That means systems that are robust, practical, and built to survive the reality of busy organisations with limited IT bandwidth.
              </p>
              <p className="text-paper">
                Every system we build is unique to the business it serves. There is no catalogue, no tier list, no one-size-fits-all appliance. Just a system designed specifically for you.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Ready to start?"
        title="Tell us what you need to keep private."
        description="Every engagement starts with a conversation. We'll discuss your requirements, your constraints, and whether a custom AI deployment is the right fit for your business."
        primaryLabel="Book a consultation"
        primaryHref="/contact"
      />
    </div>
  );
};

export default Solutions;
