import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Power,
  Hash,
  Timer,
  Gauge,
  LayoutDashboard,
  Database,
  Check,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import SafetyPanel from '../components/SafetyPanel';
import RelatedService from '../components/RelatedService';
import { Button } from '../components/ui/button';
import { breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/industrial-solutions';
const description =
  'Machine monitoring and industrial data collection for Scottish manufacturers. Running/stopped monitoring, production counting, downtime analysis and dashboards for existing equipment.';

const sectors = [
  'Paper manufacturing',
  'Packaging',
  'General manufacturing',
  'Production and processing facilities',
  'Factories operating older machinery',
];

const IndustrialSolutions: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Machine Monitoring & Industrial Data Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('Industrial Data & Machine Monitoring', description, path),
          breadcrumbSchema([{ name: 'Industrial Solutions', path }]),
        ]}
      />

      <PageHeader
        eyebrow="Industrial Solutions"
        title="Industrial Data & Machine Monitoring"
        lead={
          <>
            <p>Helping manufacturers explore ways to capture, organise and use operational information from existing equipment.</p>
            <p>This is Bright mAInd's primary service direction: practical visibility into how your machines are running, without replacing equipment that already does its job.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/34194580/pexels-photo-34194580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Industrial machine control panel with a digital display and safety controls',
        }}
        actions={
          <Link to="/contact?enquiry=monitoring">
            <Button size="lg" variant="accent">
              Discuss Machine Monitoring
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Potential applications" title="Turning Machine Activity into Useful Information.">
              <p>The right starting point depends on your equipment and what you need to know. These are the kinds of applications we can explore with you.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Power,
                  title: 'Running/stopped monitoring',
                  body: 'A dependable record of when each machine is running, idle or stopped: often the simplest and most valuable first step.',
                },
                {
                  icon: Hash,
                  title: 'Production counting',
                  body: 'Automatic counts of output or cycles, reducing reliance on manual tallies and end-of-shift estimates.',
                },
                {
                  icon: Timer,
                  title: 'Downtime analysis',
                  body: 'Understanding how often stoppages occur, how long they last and which ones keep coming back.',
                },
                {
                  icon: Gauge,
                  title: 'Equipment utilisation',
                  body: 'A clearer view of how much productive time each machine delivers across shifts, days and weeks.',
                },
                {
                  icon: LayoutDashboard,
                  title: 'Operational dashboards',
                  body: 'Clear, focused displays for production and maintenance teams, designed around the decisions they actually make.',
                },
                {
                  icon: Database,
                  title: 'Historical data & integration',
                  body: 'Collecting production history over time and connecting machine data with the systems you already use.',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Who this is for</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Built Around Established Factories.
              </h2>
              <p className="mt-6 text-whisper leading-relaxed">
                For factory owners, production, operations, maintenance and engineering managers who want better information from the equipment they already have.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
                {sectors.map((sector) => (
                  <li key={sector} className="bg-ink px-6 py-5 flex items-center gap-3 text-whisper-soft hover:bg-surface hover:text-paper transition-colors">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Engineering judgement</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Not Every Factory Needs AI.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Sometimes straightforward monitoring, a reliable data connection or conventional automation is the correct solution. We would rather recommend the simple option that works than sell technology you don't need.</p>
              <p>Where it is appropriate, we start with a limited, clearly scoped pilot on a single machine or line, so the value can be judged on real results before anything is extended.</p>
              <p className="text-paper">Good data comes first. AI only makes sense once the information behind it is reliable.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto space-y-10">
            <SafetyPanel />
            <RelatedService
              title="Edge Computing & AI Infrastructure"
              body="Local computing to process machine data on site, and the foundations for AI where it is justified."
              href="/edge-ai"
            />
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Start the conversation"
        title="Want better visibility of your machines?"
        description="Tell us about your equipment and what you'd like to understand about it. We'll discuss what's practical and whether Bright mAInd is the right fit."
        primaryLabel="Discuss Machine Monitoring"
        primaryHref="/contact?enquiry=monitoring"
      />
    </div>
  );
};

export default IndustrialSolutions;
