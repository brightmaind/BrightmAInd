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
  ['Start with real problems', 'Operational challenges first, technology second.'],
  ['Build reliable data foundations', 'Collect production data you can trust.'],
  ['Add AI where it earns its place', 'Only when the benefit can be measured.'],
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
    icon: Activity,
    tag: 'Primary focus',
    title: 'Industrial Data & Machine Monitoring',
    body: 'Helping manufacturers explore ways to capture, organise and use operational information from existing equipment.',
    points: ['Machine running/stopped monitoring', 'Production counting', 'Downtime analysis', 'Operational dashboards'],
    cta: 'Explore Machine Monitoring',
    href: '/industrial-solutions',
  },
  {
    icon: Cpu,
    tag: 'Infrastructure',
    title: 'Edge Computing & AI Infrastructure',
    body: 'Secure, locally operated computing infrastructure to process industrial data close to where it is generated.',
    points: ['Industrial edge computers', 'Local data processing and storage', 'Sensor and camera data integration', 'AI inference infrastructure'],
    cta: 'Explore Edge Infrastructure',
    href: '/edge-ai',
  },
  {
    icon: Server,
    tag: 'For IT providers',
    title: 'IT Infrastructure & Field Services',
    body: 'Infrastructure installation and technical field support for businesses and established technology providers operating across Scotland.',
    points: ['Enterprise server installation', 'Rack-and-stack support', 'Hardware commissioning', 'Infrastructure diagnostics'],
    cta: 'Field Services & Partnerships',
    href: '/field-services',
  },
];

const steps = [
  {
    title: 'Understand',
    body: 'We begin by understanding the manufacturing process, existing equipment and operational challenge, identifying what needs improving before proposing technology.',
  },
  {
    title: 'Assess',
    body: 'We investigate available data sources, integration options, technical restrictions and potential value. Where required, we coordinate with appropriately qualified electrical or industrial-controls specialists.',
  },
  {
    title: 'Implement',
    body: 'We develop a clearly scoped solution, beginning with a limited pilot where appropriate, focused on safe integration, reliable data collection and measurable results.',
  },
  {
    title: 'Improve',
    body: 'We evaluate the results and identify justified opportunities for additional monitoring, automation or AI. Ongoing support can be discussed to suit the system and your requirements.',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Industrial AI Infrastructure & Edge Computing Scotland | Bright mAInd"
        description="Bright mAInd helps Scottish manufacturers explore industrial data collection, machine monitoring, edge computing and practical AI integration."
        canonical="/"
      />

      <section className="relative pt-36 pb-24 md:pt-48 md:pb-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Industrial AI Infrastructure | Scotland</div>
            <h1 className="font-display text-[2.75rem] leading-[1.05] md:text-6xl lg:text-[4.5rem] font-semibold text-paper tracking-tightest">
              Make your factory ready for AI.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-whisper-soft leading-relaxed max-w-2xl">
              Modernise existing machinery with smarter data collection, industrial computing and practical AI technology. Bright mAInd helps Scottish manufacturers understand equipment performance, improve operational visibility and build the foundations for intelligent automation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact?enquiry=monitoring">
                <Button size="lg" variant="accent">
                  Discuss Your Factory
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
                src="https://images.pexels.com/photos/30990853/pexels-photo-30990853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Interior of a working factory with rows of production machinery"
                width={940}
                height={627}
                className="w-full h-72 md:h-[26rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.18em] text-mist">
                <span className="flex items-center gap-2">
                  <MapPinned className="w-3.5 h-3.5 text-accent" />
                  Scottish manufacturing
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
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">The opportunity</div>
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
        <section id="services" className="scroll-mt-28 px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Our solutions" title="Three Ways We Help.">
              <p>Manufacturing is our primary focus. Infrastructure field services support IT providers and contractors that need local delivery capacity in Scotland.</p>
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
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="The journey" title="From existing machinery to intelligent operations.">
              <p>A practical progression, taken one justified step at a time. Not every factory needs every stage. For many, reliable monitoring alone delivers the answers they need.</p>
            </SectionIntro>
            <div className="rounded-2xl border border-border-soft bg-gradient-to-b from-surface/60 to-ink p-8 md:p-12">
              <EvolutionPath />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="How we work" title="Problem First. Technology Second." />
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
              This is our intended approach to project delivery. Every enquiry is assessed individually, and sometimes the right answer is straightforward monitoring or conventional automation rather than AI.
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
                13 years on the factory floor. A different perspective on industrial technology.
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>Bright mAInd was founded on the belief that industrial technology should solve real operational problems.</p>
                <p>The business is built on 13 years of first-hand manufacturing experience, much of it in the paper industry. That means understanding the practical challenges of production environments: equipment stoppages, operational pressure, and the importance of reliability and minimal disruption.</p>
                <p>Combined with a background in computing, software development and automation, that experience shapes how we approach industrial technology: helping manufacturers make better use of existing equipment while developing the infrastructure needed for future AI applications.</p>
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

      <ScrollAnimation>
        <section className="px-6 lg:px-10 pb-8">
          <div className="max-w-6xl mx-auto rounded-xl border border-border-soft bg-ink p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">For IT providers &amp; integrators</div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper tracking-tightest leading-tight">
                Need field engineering capacity in Scotland?
              </h2>
              <p className="mt-3 text-whisper leading-relaxed">
                We welcome conversations with IT service providers, systems integrators and infrastructure contractors seeking additional local delivery capacity across {SITE.serviceArea}.
              </p>
            </div>
            <Link to="/field-services" className="flex-shrink-0">
              <Button size="lg" variant="outline">
                Field Services &amp; Partnerships
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Next step"
        title="Let's talk about your factory."
        description="Tell us about your equipment and the operational challenge you're facing. We'll discuss what's practical, including whether monitoring, automation or AI is the right fit, before any technology is proposed."
        primaryLabel="Discuss Your Factory"
        primaryHref="/contact?enquiry=monitoring"
        secondaryLabel="About Bright mAInd"
        secondaryHref="/about"
      />
    </div>
  );
};

export default Home;
