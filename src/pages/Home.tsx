import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Shield,
  ServerCog,
  Scale,
  Factory,
  Stethoscope,
  Landmark,
  Calculator,
  HardHat,
  Network,
  Lock,
  Cpu,
  Eye,
  Wrench,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import { Button } from '../components/ui/button';

const industries = [
  { icon: Scale, name: 'Legal' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Calculator, name: 'Accountancy' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: Landmark, name: 'Financial services' },
  { icon: HardHat, name: 'Defence & industrial' },
];

const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="BrightMaind — Custom-built private AI systems for your premises"
        description="BrightMaind designs and builds custom on-premise AI hardware for privacy-conscious businesses. Your data never leaves the building. UK-based."
        canonical="/"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BrightMaind',
            url: 'https://www.brightmaind.com',
            description:
              'BrightMaind designs and deploys custom-built, private AI hardware systems for privacy-conscious businesses across legal, manufacturing, healthcare, finance and defence.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Office 1481, 3 Fitzroy Place, 1/1, Sauchiehall Street',
              addressLocality: 'Glasgow Central',
              postalCode: 'G3 7RH',
              addressRegion: 'Scotland',
              addressCountry: 'GB',
            },
            email: 'enquiries@brightmaind.com',
          },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Custom-built AI, on your premises</div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-7xl font-semibold text-paper tracking-tightest max-w-4xl">
            Private AI systems, built to your specification.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-whisper leading-relaxed max-w-2xl">
            BrightMaind designs and deploys bespoke AI hardware for businesses that refuse to compromise on data privacy. Every system is built around your workflows, installed on your premises, and stays entirely under your control.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/solutions">
              <Button size="lg" variant="accent">
                How it works
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Book a consultation
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-border/60 pt-10">
            {[
              ['Custom hardware', 'Purpose-built for your needs'],
              ['On-premise deployment', 'Installed in your facility'],
              ['UK designed & built', 'Supported from Scotland'],
              ['Total data privacy', 'Nothing leaves the building'],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="text-sm text-paper font-medium">{title}</div>
                <div className="text-xs text-whisper-dim mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-4">The problem</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Cloud AI is a non-starter for confidential work.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                A solicitor cannot send privileged correspondence to a third-party model. A manufacturer cannot feed proprietary processes into a tool that trains on its inputs. A clinician cannot paste patient records into a chat window. A financial adviser cannot hand regulated client data to an opaque cloud API.
              </p>
              <p>
                So these organisations either avoid AI altogether and watch competitors pull ahead — or they quietly use tools they should not, and carry the risk.
              </p>
              <p className="text-paper">
                Neither is acceptable. The answer is not a better policy document. The answer is AI that physically cannot leak, because it never leaves your building.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What We Do */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">What we do</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Bespoke AI hardware, designed around your business.
              </h2>
              <p className="mt-6 text-whisper text-base md:text-lg leading-relaxed">
                Every deployment is different. We work with you to understand your workflows, your constraints, and your environment — then design, build, and install a system that fits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                {
                  icon: Wrench,
                  title: 'Custom-built systems',
                  body: 'No off-the-shelf boxes. Every system is designed and assembled to match your specific use case, scale, and security requirements.',
                },
                {
                  icon: Shield,
                  title: 'Complete data sovereignty',
                  body: 'Your data stays on hardware you own, in a room you control. Air-gap capable where regulations demand it.',
                },
                {
                  icon: Network,
                  title: 'Integrated with your workflows',
                  body: 'Connected to your existing infrastructure over your own network. Authenticated, monitored, and managed on your terms.',
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

      {/* How We Work */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">Our process</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                From conversation to deployment.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                {
                  step: '01',
                  icon: Eye,
                  title: 'Discovery',
                  body: 'We learn your industry, your constraints, and the workflows you want AI to handle — then define what the system needs to do.',
                },
                {
                  step: '02',
                  icon: Cpu,
                  title: 'Design & build',
                  body: 'We design and assemble your system to the exact specification. Hardware, models, and integrations — all tailored to your requirements.',
                },
                {
                  step: '03',
                  icon: ServerCog,
                  title: 'Deployment',
                  body: 'We install the system on your premises, connect it to your infrastructure, and ensure everything runs as expected.',
                },
                {
                  step: '04',
                  icon: Lock,
                  title: 'Ongoing support',
                  body: 'We maintain and update your system remotely or on-site. Your data stays private throughout — nothing leaves your control.',
                },
              ].map(({ step, icon: Icon, title, body }) => (
                <div key={step} className="bg-ink p-8 md:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    <span className="text-xs font-mono text-whisper-dim tracking-widest">{step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Industries */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <div className="eyebrow mb-4">Who we serve</div>
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                  Built for industries where privacy is not optional.
                </h2>
              </div>
              <p className="text-sm text-whisper max-w-sm">
                Regulated professions, IP-heavy operations, client-privileged work. If your data cannot leave the building, we build systems for you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {industries.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="bg-ink p-6 md:p-8 flex flex-col items-start gap-4 hover:bg-surface transition-colors"
                >
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <div className="text-sm text-paper font-medium">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Founder */}
      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Founder</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1] mb-6">
                Thirteen years on the floor before we started building.
              </h2>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-whisper-dim">
                <span className="px-2.5 py-1 border border-border-soft rounded">UK</span>
                <span className="px-2.5 py-1 border border-border-soft rounded">Scotland</span>
                <span className="px-2.5 py-1 border border-border-soft rounded">Operations-first</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                BrightMaind was founded by an engineer with thirteen years in manufacturing operations. Every system we build carries that operational reality — designed to survive challenging environments, strict compliance requirements, and sceptical end users.
              </p>
              <p className="text-paper">
                We build for real operational environments, not demo rooms.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Next step"
        title="Let's design the right system for your business."
        description="Thirty minutes. No slideware. We'll talk through your constraints, the workflows you need AI for, and what a custom deployment looks like for your organisation."
        primaryLabel="Book a consultation"
        primaryHref="/contact"
        secondaryLabel="Learn more"
        secondaryHref="/solutions"
      />
    </div>
  );
};

export default Home;
