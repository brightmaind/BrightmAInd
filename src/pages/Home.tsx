import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowDown,
  Activity,
  Cpu,
  Server,
  PauseCircle,
  Gauge,
  ClipboardList,
  PenLine,
  Repeat,
  Lock,
  HelpCircle,
  MapPinned,
  Check,
  Handshake,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import SectionIntro from '../components/SectionIntro';
import ScopeNote from '../components/ScopeNote';
import EvolutionPath from '../components/EvolutionPath';
import { Button } from '../components/ui/button';
import { SITE } from '../lib/site';

const principles = [
  ['Enterprise IT infrastructure', 'Installation, commissioning and field support.'],
  ['AI computing infrastructure', 'Developing capability in GPU and high-density hardware.'],
  ['Industrial edge AI', 'Data, monitoring and local AI for manufacturing.'],
];

const problems = [
  { icon: PauseCircle, text: 'Unexplained production stoppages' },
  { icon: Gauge, text: 'Limited visibility into equipment utilisation' },
  { icon: ClipboardList, text: 'Incomplete production records' },
  { icon: PenLine, text: 'Manual collection of operational information' },
  { icon: Repeat, text: 'Difficulty identifying recurring problems' },
  { icon: Lock, text: 'Valuable machine data remaining inaccessible' },
  { icon: HelpCircle, text: 'Uncertainty about where AI could provide value' },
];

const services = [
  {
    icon: Server,
    tag: 'Primary service',
    title: 'IT Infrastructure & Field Services',
    body: 'Hands-on infrastructure installation, commissioning and technical field support for businesses and technology providers operating across Scotland.',
    points: ['Enterprise server installation', 'Rack-and-stack and commissioning', 'Hardware maintenance and troubleshooting', 'Field services and subcontracting'],
    cta: 'Explore Field Services',
    href: '/field-services',
  },
  {
    icon: Cpu,
    tag: 'Developing capability',
    title: 'AI Infrastructure Services',
    body: 'Installation and commissioning support for the physical hardware behind AI computing, built on enterprise infrastructure fundamentals.',
    points: ['GPU server installation', 'AI hardware commissioning', 'High-density deployments', 'Data-centre installation support'],
    cta: 'Explore AI Infrastructure',
    href: '/ai-infrastructure',
  },
  {
    icon: Activity,
    tag: 'Specialism',
    title: 'Industrial Edge AI',
    body: 'Helping manufacturers capture, process and use operational data from existing equipment, with AI added only where it earns its place.',
    points: ['Machine monitoring and production data', 'Edge computing and local AI inference', 'Sensor, gateway and camera integration', 'AI-ready factory infrastructure'],
    cta: 'Explore Industrial Edge AI',
    href: '/edge-ai',
  },
];

const steps = [
  {
    title: 'Understand',
    body: 'We start with your environment, existing systems and the outcome you need, whether that is a server deployment, a hardware fault or an operational challenge on the factory floor.',
  },
  {
    title: 'Assess',
    body: 'We review site conditions, access, technical constraints and integration requirements. Where required, we coordinate with your IT team and appropriately qualified electrical or controls specialists.',
  },
  {
    title: 'Deliver',
    body: 'We carry out clearly scoped work with careful documentation, focused on safe installation, reliable operation and minimal disruption. New industrial projects can begin with a limited pilot.',
  },
  {
    title: 'Support',
    body: 'We confirm the result, hand over clear records and identify any justified next steps. Ongoing support can be discussed to suit the system and your requirements.',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI & IT Infrastructure Engineering Scotland | Bright mAInd"
        description="Bright mAInd is a Scotland-based infrastructure engineering business focused on enterprise IT, AI computing infrastructure and industrial edge AI."
        canonical="/"
      />

      <section className="relative pt-36 pb-24 md:pt-48 md:pb-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">AI &amp; IT Infrastructure Engineering | Scotland</div>
            <h1 className="font-display text-[2.75rem] leading-[1.05] md:text-6xl lg:text-[4.5rem] font-semibold text-paper tracking-tightest">
              Infrastructure for the next generation of computing.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-whisper-soft leading-relaxed max-w-2xl">
              Bright mAInd is a Scotland-based infrastructure engineering business focused on enterprise IT, AI computing and industrial edge technology. We combine technical systems expertise with firsthand manufacturing experience to help businesses deploy and develop reliable infrastructure.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button size="lg" variant="accent">
                  Discuss Your Infrastructure Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline">
                  Explore Our Services
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative rounded-xl overflow-hidden border border-border-soft">
              <img
                src="https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Server cabinets with networking equipment and cabling in a data centre"
                width={940}
                height={627}
                className="w-full h-72 md:h-[26rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.18em] text-mist">
                <span className="flex items-center gap-2">
                  <MapPinned className="w-3.5 h-3.5 text-accent" />
                  Ayrshire, Glasgow &amp; Central Belt
                </span>
                <span className="text-whisper-dim normal-case tracking-normal font-sans">Illustrative image</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-y-8 gap-x-10 border-t border-border/60 pt-10">
          {principles.map(([title, desc], index) => (
            <div key={title} className="flex gap-4">
              <span className="text-xs font-mono text-accent tracking-widest pt-0.5">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <div className="text-sm text-paper font-medium">{title}</div>
                <div className="text-sm text-whisper-dim mt-1">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ScrollAnimation>
        <section id="services" className="scroll-mt-28 px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Our services" title="Three Areas of Infrastructure Engineering.">
              <p>Installing, integrating and maintaining the infrastructure behind modern computing and industrial AI, from the server rack to the factory floor.</p>
            </SectionIntro>
            <div className="grid lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, tag, title, body, points, cta, href }, index) => (
                <Link
                  key={title}
                  to={href}
                  className={`group relative flex flex-col rounded-xl border p-8 md:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? 'border-accent/40 bg-gradient-to-br from-surface to-deep hover:border-accent/80'
                      : 'border-border-soft bg-ink hover:border-accent/50'
                  }`}
                >
                  {index === 0 && <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />}
                  <div className="relative flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-lg border border-accent/40 bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className={`text-xs font-mono uppercase tracking-[0.18em] ${index === 0 ? 'text-accent' : 'text-whisper-dim'}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="relative font-display text-2xl font-semibold text-paper mb-3 leading-tight">{title}</h3>
                  <p className="relative text-sm text-whisper leading-relaxed">{body}</p>
                  <ul className="relative mt-6 space-y-2.5 flex-1">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-whisper-soft">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm text-accent">
                    {cta}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-16 md:py-20">
          <div className="relative max-w-6xl mx-auto rounded-2xl border border-accent/30 bg-gradient-to-br from-surface to-ink p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Handshake className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="eyebrow">Subcontracting &amp; partnerships</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-tight">
                  Need local engineering capacity in Scotland?
                </h2>
                <p className="mt-4 text-whisper leading-relaxed">
                  We welcome enquiries from IT service providers, managed service providers, hardware vendors, systems integrators, deployment contractors and AI infrastructure providers that need reliable on-site delivery across {SITE.serviceArea}.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <Link to="/contact?enquiry=subcontracting">
                  <Button size="lg" variant="accent" className="w-full">
                    Subcontracting Enquiry
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/field-services#partnerships">
                  <Button size="lg" variant="outline" className="w-full">
                    How We Work With Partners
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">Our specialism: Industrial edge AI</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Your machinery produces value. Is its data doing the same?
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>Many established manufacturing facilities have equipment capable of providing more operational information than is currently being captured or used.</p>
                <p>Reliable machines can run for decades. What often changes is how much a business needs to know about them: when they stop, why they stop, and how well they are being used.</p>
              </div>
              <img
                src="https://images.pexels.com/photos/32529354/pexels-photo-32529354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Operator buttons on an industrial machine control panel"
                width={940}
                height={627}
                loading="lazy"
                className="mt-10 w-full h-56 md:h-64 object-cover rounded-xl border border-border-soft"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm text-whisper-dim mb-5">Situations that may sound familiar:</p>
              <ul className="divide-y divide-border/60 border-y border-border/60">
                {problems.map(({ icon: Icon, text }) => (
                  <li key={text} className="group flex items-center gap-4 py-4 transition-colors">
                    <Icon className="w-5 h-5 text-whisper-dim group-hover:text-accent transition-colors flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-whisper-soft group-hover:text-paper transition-colors">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-display text-xl md:text-2xl text-paper leading-snug border-l-2 border-accent pl-6">
                You shouldn't need to replace reliable machinery to start benefiting from modern data technology.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="The industrial journey" title="From existing machinery to intelligent operations.">
              <p>A practical progression, taken one justified step at a time. Not every factory needs every stage. For many, reliable monitoring alone delivers the answers they need.</p>
            </SectionIntro>
            <div className="rounded-2xl border border-border-soft bg-gradient-to-b from-surface/60 to-ink p-8 md:p-12">
              <EvolutionPath />
            </div>
            <Link to="/edge-ai" className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-soft transition-colors">
              Explore Industrial Edge AI
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="How we work" title="Careful Engineering. Clear Scope." />
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {steps.map(({ title, body }, index) => (
                <li key={title} className="bg-ink p-7 md:p-8 hover:bg-surface transition-colors">
                  <div className="font-mono text-3xl text-accent/80 mb-6">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
            <ScopeNote>
              This is our intended approach to project delivery. Every enquiry is assessed individually, and we will always be clear about what falls within our scope and where a specialist or accredited provider is required.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/32845671/pexels-photo-32845671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Engineer in safety gear inspecting industrial machinery"
                width={940}
                height={627}
                loading="lazy"
                className="w-full h-72 md:h-[30rem] object-cover rounded-xl border border-border-soft"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="eyebrow mb-4">Why Bright mAInd</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Technical systems expertise, grounded in 13 years on the factory floor.
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>Bright mAInd was founded on the belief that infrastructure should be installed carefully, documented clearly and built to solve real operational problems.</p>
                <p>The business is built on 13 years of firsthand manufacturing experience, much of it in the paper industry. That means understanding production environments: equipment stoppages, operational pressure, and the importance of reliability and minimal disruption.</p>
                <p>Combined with a background in computing, software development and automation, and ongoing training in enterprise infrastructure and AI computing, that experience shapes how we work across IT infrastructure, AI hardware and industrial edge technology.</p>
              </div>
              <p className="mt-8 font-display text-xl md:text-2xl text-paper">Manufacturing knowledge meets modern computing.</p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-soft transition-colors">
                About Bright mAInd
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Next step"
        title="Let's talk about your infrastructure project."
        description="Whether you need on-site installation capacity, support with AI hardware, or want to explore data and edge AI on the factory floor, tell us what you're working on and we'll discuss what's practical."
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
        secondaryLabel="About Bright mAInd"
        secondaryHref="/about"
      />
    </div>
  );
};

export default Home;
