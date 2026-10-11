import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Cpu,
  Server,
  ClipboardCheck,
  MapPinned,
  Truck,
  Users,
  Workflow,
  Building2,
  MessageSquare,
  Search,
  Wrench,
  FileCheck2,
  LifeBuoy,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid, { type Feature } from '../components/FeatureGrid';
import ScopeNote from '../components/ScopeNote';
import { Button } from '../components/ui/button';
import { SITE } from '../lib/site';

const services: Feature[] = [
  {
    icon: Cpu,
    title: 'AI Hardware Installation',
    body: 'On-site installation assistance for GPU workstations, AI servers and supporting computing equipment.',
    points: [
      'Equipment preparation',
      'Physical installation',
      'Approved component installation',
      'Connectivity checks and initial hardware verification',
    ],
    href: '/services/ai-hardware-installation',
  },
  {
    icon: Server,
    title: 'Server & Workstation Support',
    body: 'Physical setup and maintenance assistance for enterprise servers, storage systems and professional workstations.',
    points: [
      'Hardware inspection and component replacement',
      'Storage configuration',
      'System diagnostics',
      'Manufacturer-supported maintenance procedures',
    ],
    href: '/services/server-and-workstation-support',
  },
  {
    icon: ClipboardCheck,
    title: 'Commissioning & Testing',
    body: 'Structured hardware commissioning checks to verify that equipment is installed correctly and operating as expected.',
    points: [
      'Hardware health checks',
      'Connectivity testing and storage verification',
      'Thermal monitoring',
      'Documented handover procedures',
    ],
  },
  {
    icon: MapPinned,
    title: 'On-Site Field Services',
    body: 'Regional technical assistance for businesses and infrastructure providers requiring physical support.',
    points: [
      'Scheduled site visits',
      'Equipment inspections',
      'Approved hardware replacements',
      'Troubleshooting',
    ],
  },
];

const primaryAudiences = [
  {
    icon: Truck,
    title: 'AI Hardware Suppliers',
    body: 'Regional installation and field-service assistance for suppliers deploying equipment to Scottish customers.',
  },
  {
    icon: Users,
    title: 'IT Service Providers',
    body: 'Additional on-site technical capacity for MSPs and established infrastructure support companies.',
  },
];

const secondaryAudiences = [
  {
    icon: Workflow,
    title: 'Systems Integrators',
    body: 'Physical installation assistance and hardware support for infrastructure integration projects.',
  },
  {
    icon: Building2,
    title: 'Businesses & Organisations',
    body: 'On-site assistance for companies investing in their own AI computing equipment.',
  },
];

const steps = [
  { icon: MessageSquare, title: 'Discuss', body: 'Tell us about the equipment, location, installation requirements and intended scope of work.' },
  { icon: Search, title: 'Assess', body: 'We review the hardware requirements, site conditions, technical responsibilities and any specialist support needed.' },
  { icon: Wrench, title: 'Install', body: 'Agreed physical installation and commissioning activities are completed on-site.' },
  { icon: FileCheck2, title: 'Verify', body: 'Equipment is checked against the agreed requirements and relevant results are documented.' },
  { icon: LifeBuoy, title: 'Support', body: 'Where agreed, follow-up visits, maintenance and hardware support can be arranged.' },
];

const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI Hardware Installation & Field Services Scotland | Bright mAInd"
        description="On-site AI hardware installation and field support across Scotland. GPU workstations, enterprise servers, commissioning and maintenance assistance."
        canonical="/"
      />

      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">AI Hardware Installation &amp; Field Services | Scotland</div>
            <h1 className="font-display text-[2.5rem] leading-[1.05] md:text-6xl lg:text-[4.25rem] font-semibold text-paper tracking-tightest">
              AI Hardware Installation &amp; On-Site Support
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-whisper-soft leading-snug max-w-2xl">
              Physical installation, commissioning and maintenance support for AI servers, GPU workstations and enterprise computing infrastructure.
            </p>
            <div className="mt-6 space-y-4 text-base md:text-lg text-whisper leading-relaxed max-w-2xl">
              <p>Bright mAInd provides hands-on infrastructure support for businesses deploying AI hardware across Scotland.</p>
              <p>We work with hardware suppliers, IT service providers and organisations that need reliable local assistance installing, configuring and maintaining their equipment.</p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button size="lg" variant="accent">
                  Discuss a Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button size="lg" variant="outline">Become a Partner</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative rounded-xl overflow-hidden border border-border-soft">
              <img
                src="https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Rack-mounted enterprise server units installed in a server rack"
                width={940}
                height={627}
                className="w-full h-72 md:h-[26rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-mist">
                <MapPinned className="w-3.5 h-3.5 text-accent" />
                {SITE.serviceArea}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-border/60 pt-10">
          {[
            ['AI servers', 'Physical installation assistance'],
            ['GPU workstations', 'Setup, upgrades and checks'],
            ['Commissioning', 'Documented testing and handover'],
            ['Field support', 'Scheduled visits and maintenance'],
          ].map(([title, desc]) => (
            <div key={title}>
              <div className="text-sm text-paper font-medium">{title}</div>
              <div className="text-xs text-whisper-dim mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">The physical side of AI</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                AI Still Needs Physical Infrastructure.
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>AI software is advancing rapidly, but the hardware behind it still needs to be delivered, installed, connected, commissioned and maintained.</p>
                <p>From individual GPU workstations to enterprise servers, successful deployment depends on the physical infrastructure being installed correctly and tested thoroughly.</p>
                <p className="text-paper">Bright mAInd focuses on that essential physical layer. We help bridge the gap between hardware delivery and operational deployment.</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src="https://images.pexels.com/photos/19226354/pexels-photo-19226354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Technician fitting a hardware module into a server rack"
                width={940}
                height={627}
                loading="lazy"
                className="w-full h-72 md:h-[28rem] object-cover rounded-xl border border-border-soft"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Our services" title="Physical AI Infrastructure Services" />
            <FeatureGrid items={services} columns={2} />
            <ScopeNote>
              Specific work is subject to equipment requirements, technical competence and the agreed project scope. We will tell you plainly if a task needs manufacturer-authorised or specialist support.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Who we work with" title="Supporting the Companies Deploying AI Infrastructure.">
              <p>Bright mAInd works with organisations that supply, deploy or operate physical computing infrastructure.</p>
            </SectionIntro>

            <div className="grid md:grid-cols-2 gap-6">
              {primaryAudiences.map(({ icon: Icon, title, body }) => (
                <Link
                  key={title}
                  to="/partners"
                  className="group relative rounded-xl border border-accent/30 bg-gradient-to-br from-surface to-deep p-8 md:p-10 hover:border-accent/70 transition-colors overflow-hidden"
                >
                  <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-lg border border-accent/40 bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-accent">Partner focus</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper mb-3">{title}</h3>
                    <p className="text-whisper leading-relaxed">{body}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">
                      Partnership details
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {secondaryAudiences.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-8 flex gap-5">
                  <Icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-paper mb-2">{title}</h3>
                    <p className="text-sm text-whisper leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="How we work" title="A Practical Approach to Hardware Deployment." />
            <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {steps.map(({ icon: Icon, title, body }, index) => (
                <li key={title} className="bg-ink p-7 md:p-8 hover:bg-surface transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    <span className="text-xs font-mono text-whisper-dim tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-paper mb-2">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
            <ScopeNote>
              The services available depend on the class of equipment involved. Each enquiry is assessed individually before any work is agreed.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Why Bright mAInd?</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Built Around Real-World Technical Work.
              </h2>
              <Link to="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-soft transition-colors">
                About Bright mAInd
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Bright mAInd was founded in Scotland with a background spanning industrial manufacturing operations, engineering studies and practical technology systems.</p>
              <p>Our approach is grounded in the realities of physical equipment, operational reliability and technical problem-solving.</p>
              <p>We are building a focused field-services business specialising in the installation and support of AI computing infrastructure.</p>
              <p className="text-paper">We believe dependable deployment requires more than software knowledge — it requires practical understanding of the hardware, its operating environment and the responsibility involved in maintaining it.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">Partner with us</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Need Field Engineering Support in Scotland?
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>Are you an AI hardware supplier, IT service provider or infrastructure integrator delivering equipment to customers in Scotland?</p>
                <p>Bright mAInd is developing regional installation and hardware support partnerships.</p>
                <p>We welcome enquiries about appropriately scoped subcontracting opportunities, supervised deployments, hardware servicing and local field support.</p>
              </div>
              <div className="mt-10">
                <Link to="/partners">
                  <Button size="lg" variant="outline">
                    Discuss a Partnership
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Network cables connected to a switch in a server rack"
                width={940}
                height={627}
                loading="lazy"
                className="w-full h-72 md:h-96 object-cover rounded-xl border border-border-soft"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Next step"
        title="Planning an AI Hardware Deployment?"
        description="Whether you're supplying equipment to a customer or installing infrastructure at your own premises, tell us what you need and where you're operating. We'll discuss the requirements and determine whether Bright mAInd is a suitable fit."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </div>
  );
};

export default Home;
