import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Cpu,
  Workflow,
  HardDrive,
  Camera,
  BrainCircuit,
  ShieldCheck,
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
  'Industrial edge computing and AI infrastructure for Scottish manufacturers. Local data processing, on-premises storage, sensor and camera integration and AI inference hardware.';

const EdgeAI: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Industrial Edge Computing & AI Infrastructure Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('Edge Computing & AI Infrastructure', description, path),
          breadcrumbSchema([{ name: 'Edge AI', path }]),
        ]}
      />

      <PageHeader
        eyebrow="Edge AI"
        title="Edge Computing & AI Infrastructure"
        lead={
          <>
            <p>Developing secure, locally operated computing infrastructure to process industrial data close to where it is generated.</p>
            <p>Processing on site can reduce dependence on internet connections, keep response times short and give you more control over where your production data is held.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Ethernet cables connected to a network switch',
        }}
        actions={
          <Link to="/contact?enquiry=edge">
            <Button size="lg" variant="accent">
              Discuss an Edge Project
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Potential applications" title="Computing Where the Data Is Created.">
              <p>Each system is designed around the problem, the site and the data involved, with hardware sized for what is actually needed.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Cpu,
                  title: 'Industrial edge computers',
                  body: 'Compact computers suited to factory environments, located near the equipment they serve.',
                },
                {
                  icon: Workflow,
                  title: 'Local data processing',
                  body: 'Filtering, organising and analysing machine data on site rather than sending everything elsewhere.',
                },
                {
                  icon: HardDrive,
                  title: 'On-premises data storage',
                  body: 'Keeping production records on your own premises, with backup and retention planned from the start.',
                },
                {
                  icon: Camera,
                  title: 'Sensor & camera integration',
                  body: 'Bringing sensor readings and camera feeds into one place where they can be used together.',
                },
                {
                  icon: BrainCircuit,
                  title: 'AI inference infrastructure',
                  body: 'Hardware capable of running AI models locally, introduced when the data and business case support it.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure integration',
                  body: 'Monitoring software and connections planned with your IT team, with appropriate access controls and network separation.',
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
              <div className="eyebrow mb-4">Security</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Secure by Design, Not by Promise.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Processing data locally gives you more control, but no system is immune to risk. Security comes from careful design and ongoing attention.</p>
              <p>We plan edge systems with appropriate safeguards: separating them from critical control networks where possible, limiting access, keeping software maintained and agreeing with your IT team how data is stored and who can reach it.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Where we are today" title="Clear About What We Offer Now.">
              <p>Bright mAInd is developing this specialisation. Here's how our capabilities currently stand.</p>
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
                    'Machine data collection on edge hardware',
                    'Sensor and camera data integration',
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
              title="Industrial Data & Machine Monitoring"
              body="Start with reliable machine data: running status, production counts and downtime."
              href="/industrial-solutions"
            />
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Start the conversation"
        title="Considering an edge computing project?"
        description="Tell us what data you're working with and what you want to achieve. We'll discuss the options and whether local processing is the right approach."
        primaryLabel="Discuss an Edge Project"
        primaryHref="/contact?enquiry=edge"
      />
    </div>
  );
};

export default EdgeAI;
