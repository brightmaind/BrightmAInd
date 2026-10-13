import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Cpu,
  ClipboardCheck,
  Layers,
  Building,
  Wrench,
  CircuitBoard,
  Users,
  AlertCircle,
  Check,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import CapabilityStatus from '../components/CapabilityStatus';
import ScopeNote from '../components/ScopeNote';
import RelatedService from '../components/RelatedService';
import { Button } from '../components/ui/button';
import { breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/ai-infrastructure';
const description =
  'AI infrastructure services in Scotland: GPU server installation, AI hardware commissioning, high-density deployments and data-centre installation support. A developing capability built on enterprise IT fundamentals.';

const audiences = [
  'AI infrastructure providers needing local installation support in Scotland',
  'Data-centre and colocation operators adding GPU capacity',
  'IT providers delivering AI hardware to their customers',
  'Businesses installing on-premises AI or GPU servers',
];

const challenges = [
  'GPU hardware arriving on site with no local engineer to install it',
  'Heavier, higher-density equipment demanding careful physical handling',
  'Commissioning checks that need methodical, well-documented execution',
  'Ongoing maintenance needs for AI hardware outside major cities',
];

const AIInfrastructure: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI Infrastructure & GPU Server Installation Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('AI Infrastructure Services', description, path),
          breadcrumbSchema([{ name: 'AI Infrastructure', path }]),
        ]}
      />

      <PageHeader
        eyebrow="AI Infrastructure | Developing capability"
        title="AI Infrastructure Services"
        lead={
          <>
            <p>Installation, commissioning and maintenance support for the physical hardware behind AI computing, built on the same careful enterprise infrastructure practices as our field services.</p>
            <p>This is a capability Bright mAInd is actively developing. We are open about where it stands today and welcome early conversations.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Illuminated high-density server racks in a data centre',
        }}
        actions={
          <Link to="/contact?enquiry=ai">
            <Button size="lg" variant="accent">
              Discuss AI Infrastructure
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border-soft bg-ink p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <h2 className="font-display text-2xl font-semibold text-paper">Who it's for</h2>
              </div>
              <ul className="space-y-3">
                {audiences.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-whisper-soft leading-relaxed">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border-soft bg-ink p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <h2 className="font-display text-2xl font-semibold text-paper">Problems it addresses</h2>
              </div>
              <ul className="space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-whisper-soft leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Capabilities" title="The Physical Layer of AI Computing.">
              <p>AI workloads depend on hardware that is installed, connected and commissioned correctly. These are the areas we are building towards.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Cpu,
                  title: 'GPU server installation',
                  body: 'Physical installation of GPU-equipped servers, including racking, rails, power and cable routing to the agreed plan.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'AI hardware commissioning',
                  body: 'Inspection, verification against specification, power-on checks and documented handover for AI computing hardware.',
                },
                {
                  icon: Layers,
                  title: 'High-density deployments',
                  body: 'Careful handling and installation of heavier, power-dense equipment, coordinated with site power and cooling requirements.',
                },
                {
                  icon: Building,
                  title: 'Data-centre installation support',
                  body: 'Additional on-site hands for installation projects in Scottish data centres and server rooms, working to site procedures.',
                },
                {
                  icon: Wrench,
                  title: 'AI infrastructure maintenance',
                  body: 'Routine checks, component replacement and fault-finding for AI hardware, outside manufacturer-authorised repair work.',
                },
                {
                  icon: CircuitBoard,
                  title: 'NVIDIA-based deployments',
                  body: 'Supporting the installation of NVIDIA-based systems as part of a provider\'s or customer\'s project, informed by ongoing NVIDIA training.',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Where we are today" title="Honest About Where This Stands.">
              <p>AI infrastructure is a developing capability for Bright mAInd. Here's how it currently stands.</p>
            </SectionIntro>
            <CapabilityStatus
              groups={[
                {
                  tone: 'available',
                  label: 'Available now',
                  description: 'Enterprise skills that transfer directly to AI hardware.',
                  items: [
                    'Physical server installation and rack-and-stack',
                    'Hardware inspection and power-on checks',
                    'Installation documentation and handover records',
                  ],
                },
                {
                  tone: 'developing',
                  label: 'In development',
                  description: 'Capabilities being built through training and early projects.',
                  items: [
                    'GPU server commissioning',
                    'High-density and multi-rack deployments',
                    'AI infrastructure maintenance',
                  ],
                },
                {
                  tone: 'partner',
                  label: 'Requires a specialist or accreditation',
                  description: 'Delivered alongside the appropriate provider, or not undertaken.',
                  items: [
                    'Vendor-certified installation or configuration',
                    'Manufacturer-authorised repairs and warranty work',
                    'Electrical, power and cooling installation',
                  ],
                },
              ]}
            />
            <ScopeNote>
              Bright mAInd is not an NVIDIA partner, does not hold vendor accreditation and has not yet completed large-scale GPU or AI data-centre deployments. The business is undertaking ongoing professional development in enterprise IT infrastructure and NVIDIA AI technologies.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <section className="px-6 lg:px-10 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <RelatedService
            title="IT Infrastructure & Field Services"
            body="Enterprise server installation, commissioning, maintenance and subcontracting across Scotland."
            href="/field-services"
          />
          <RelatedService
            title="Industrial Edge AI"
            body="Machine monitoring, edge computing and local AI for manufacturing environments."
            href="/edge-ai"
          />
        </div>
      </section>

      <CTASection
        eyebrow="Start the conversation"
        title="Planning an AI hardware deployment in Scotland?"
        description="Tell us about the hardware, the site and the timescale. We'll be clear about what we can support today and where another provider may be the better fit."
        primaryLabel="Discuss AI Infrastructure"
        primaryHref="/contact?enquiry=ai"
        secondaryLabel="Subcontracting Enquiry"
        secondaryHref="/contact?enquiry=subcontracting"
      />
    </div>
  );
};

export default AIInfrastructure;
