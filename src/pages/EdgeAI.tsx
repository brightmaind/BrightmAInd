import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Power,
  Hash,
  Timer,
  BarChart3,
  LayoutDashboard,
  Database,
  Cpu,
  Router,
  Camera,
  BrainCircuit,
  HardDrive,
  Factory,
  Check,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import CapabilityStatus from '../components/CapabilityStatus';
import SafetyPanel from '../components/SafetyPanel';
import RelatedService from '../components/RelatedService';
import { Button } from '../components/ui/button';
import { breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/edge-ai';
const description =
  'Industrial edge AI for Scottish manufacturers: machine monitoring, production data collection, sensor and gateway integration, industrial cameras, local AI inference and AI-ready factory infrastructure.';

const sectors = [
  'Paper manufacturing',
  'Packaging',
  'General manufacturing',
  'Production and processing facilities',
  'Factories operating older machinery',
];

const problems = [
  'Unexplained production stoppages and recurring faults',
  'Limited visibility into equipment utilisation',
  'Incomplete or manually collected production records',
  'Valuable machine data remaining inaccessible',
  'Uncertainty about where AI could provide real value',
];

const IndustrialEdgeAI: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Industrial Edge AI & Machine Monitoring Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('Industrial Edge AI', description, path),
          breadcrumbSchema([{ name: 'Industrial Edge AI', path }]),
        ]}
      />

      <PageHeader
        eyebrow="Industrial Edge AI | Our specialism"
        title="Industrial Edge AI & Data Infrastructure"
        lead={
          <>
            <p>Helping manufacturers capture, process and use operational information from existing equipment, with computing located close to where the data is created.</p>
            <p>This is where our manufacturing background sets us apart: practical visibility into how your machines are running, and the infrastructure foundations for AI where it is justified.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/34194580/pexels-photo-34194580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Industrial machine control panel with a digital display and safety controls',
        }}
        actions={
          <Link to="/contact?enquiry=edge">
            <Button size="lg" variant="accent">
              Discuss an Industrial Project
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Who this is for</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Built Around Established Factories.
              </h2>
              <p className="mt-6 text-whisper leading-relaxed">
                For factory owners, production, operations, maintenance and engineering managers who want better information from the equipment they already have.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-1 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
                {sectors.map((sector) => (
                  <li key={sector} className="bg-ink px-5 py-4 flex items-center gap-3 text-whisper-soft hover:bg-surface hover:text-paper transition-colors">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">Problems it addresses</div>
              <ul className="divide-y divide-border/60 border-y border-border/60">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-4 py-4 text-whisper-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    {problem}
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
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Industrial data" title="Turning Machine Activity into Useful Information.">
              <p>The right starting point depends on your equipment and what you need to know. These are the kinds of applications we can explore with you.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Power,
                  title: 'Machine monitoring',
                  body: 'A dependable record of when each machine is running, idle or stopped: often the simplest and most valuable first step.',
                },
                {
                  icon: Hash,
                  title: 'Production data collection',
                  body: 'Automatic counts of output or cycles, reducing reliance on manual tallies and end-of-shift estimates.',
                },
                {
                  icon: Timer,
                  title: 'Downtime analysis',
                  body: 'Understanding how often stoppages occur, how long they last and which ones keep coming back.',
                },
                {
                  icon: BarChart3,
                  title: 'Manufacturing analytics',
                  body: 'A clearer view of utilisation and performance across shifts, days and weeks, built on data you can trust.',
                },
                {
                  icon: LayoutDashboard,
                  title: 'Operational dashboards',
                  body: 'Clear, focused displays for production and maintenance teams, designed around the decisions they actually make.',
                },
                {
                  icon: Database,
                  title: 'Industrial data infrastructure',
                  body: 'Collecting production history over time and connecting machine data with the systems you already use.',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Edge computing & AI" title="Computing Where the Data Is Created.">
              <p>Processing on site can reduce dependence on internet connections, keep response times short and give you more control over where your production data is held. Hardware is sized for what is actually needed.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Cpu,
                  title: 'Edge computing',
                  body: 'Compact industrial computers located near the equipment they serve, filtering and analysing data on site.',
                },
                {
                  icon: Router,
                  title: 'Sensor & gateway integration',
                  body: 'Connecting sensors and industrial gateways so readings from different machines arrive in one usable place.',
                },
                {
                  icon: Camera,
                  title: 'Industrial camera systems',
                  body: 'Bringing camera feeds alongside machine data, as a foundation for visual monitoring and future inspection.',
                },
                {
                  icon: BrainCircuit,
                  title: 'Local AI inference',
                  body: 'Hardware capable of running AI models on site, introduced when the data and business case support it.',
                },
                {
                  icon: HardDrive,
                  title: 'On-premises data storage',
                  body: 'Keeping production records on your own premises, with backup and retention planned from the start.',
                },
                {
                  icon: Factory,
                  title: 'AI-ready factory infrastructure',
                  body: 'Planning the computing, connectivity and data foundations a site needs before AI applications are considered.',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="eyebrow mb-4">Engineering judgement</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Not Every Factory Needs AI.
              </h2>
              <div className="mt-6 space-y-5 text-whisper leading-relaxed">
                <p>Sometimes straightforward monitoring, a reliable data connection or conventional automation is the correct solution. We would rather recommend the simple option that works than sell technology you don't need.</p>
                <p>Where appropriate, we start with a limited, clearly scoped pilot on a single machine or line, so the value can be judged on real results.</p>
                <p className="text-paper">Good data comes first. AI only makes sense once the information behind it is reliable.</p>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-4">Security</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Secure by Design, Not by Promise.
              </h2>
              <div className="mt-6 space-y-5 text-whisper leading-relaxed">
                <p>Processing data locally gives you more control, but no system is immune to risk. Security comes from careful design and ongoing attention.</p>
                <p>We plan edge systems with appropriate safeguards: separating them from critical control networks where possible, limiting access, keeping software maintained and agreeing with your IT team how data is stored and who can reach it.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Where we are today" title="Clear About What We Offer Now.">
              <p>Bright mAInd is developing this specialism. Here's how our capabilities currently stand.</p>
            </SectionIntro>
            <CapabilityStatus
              groups={[
                {
                  tone: 'available',
                  label: 'Available now',
                  description: 'Work we can discuss and scope today.',
                  items: [
                    'Feasibility and requirements discussions',
                    'Software development and technical integrations',
                    'Setup of edge computers and local servers',
                  ],
                },
                {
                  tone: 'developing',
                  label: 'Pilot & exploratory',
                  description: 'Offered as limited, clearly scoped pilot projects.',
                  items: [
                    'Machine monitoring and production data collection',
                    'Sensor, gateway and camera data integration',
                    'Local AI inference trials',
                  ],
                },
                {
                  tone: 'future',
                  label: 'Longer term',
                  description: 'Capabilities the business is working towards.',
                  items: [
                    'Camera-based inspection',
                    'Industrial networking',
                    'AI model deployment and infrastructure maintenance',
                  ],
                },
              ]}
            />
            <p className="mt-8 text-sm text-whisper-dim leading-relaxed max-w-3xl">
              Bright mAInd is not an NVIDIA partner or manufacturer-authorised installer. The business is undertaking ongoing professional development in enterprise IT infrastructure and NVIDIA AI technologies.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto space-y-10">
            <SafetyPanel />
            <RelatedService
              title="AI Infrastructure Services"
              body="Installation and commissioning support for GPU servers and high-density AI computing hardware."
              href="/ai-infrastructure"
            />
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Start the conversation"
        title="Want better visibility of your machines?"
        description="Tell us about your equipment, the data you have and what you'd like to understand. We'll discuss what's practical, including whether monitoring, automation or AI is the right fit."
        primaryLabel="Discuss an Industrial Project"
        primaryHref="/contact?enquiry=edge"
      />
    </div>
  );
};

export default IndustrialEdgeAI;
