import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Server,
  ClipboardCheck,
  Settings2,
  Search,
  FileText,
  MapPinned,
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
import { Button } from '../components/ui/button';
import { SITE, breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/field-services';
const description =
  'IT infrastructure installation and field services in Scotland. Server installation, rack-mounted equipment, hardware commissioning and on-site support for IT providers and integrators.';

const partnerTypes = [
  'IT service providers and MSPs',
  'Industrial systems integrators',
  'Infrastructure and engineering contractors',
  'Hardware deployment providers',
];

const workingPrinciples = [
  'Scope, responsibilities and site requirements agreed before any visit',
  'Work carried out to your procedures and documentation standards',
  'Clear written records of what was done and found',
  'Honest about limits: if a task needs authorised personnel, we say so',
];

const FieldServices: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="IT Infrastructure Field Services Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('IT Infrastructure & Field Services', description, path),
          breadcrumbSchema([{ name: 'Field Services', path }]),
        ]}
      />

      <PageHeader
        eyebrow="Field Services"
        title="IT Infrastructure & Field Services — Scotland"
        lead={
          <>
            <p>Bright mAInd is expanding its technical field-service capabilities to support enterprise hardware deployment, infrastructure installation and maintenance projects across Scotland.</p>
            <p>We welcome conversations with established IT service providers, systems integrators and infrastructure contractors seeking additional local delivery capacity.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Rack-mounted enterprise server units installed in a server rack',
        }}
        actions={
          <>
            <Link to="/contact?enquiry=subcontracting">
              <Button size="lg" variant="accent">
                Discuss a Subcontracting Opportunity
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact?enquiry=installation">
              <Button size="lg" variant="outline">Installation Enquiry</Button>
            </Link>
          </>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Areas of focus" title="Hands-On Infrastructure Work." />
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Server,
                  title: 'Server & rack installation',
                  body: 'Physical installation of server hardware and rack-mounted equipment, including racking, rails, power and cable routing to the agreed plan.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Inspection & commissioning',
                  body: 'Unboxing and inspection for transit damage, checks against the delivery specification and initial power-on verification.',
                },
                {
                  icon: Settings2,
                  title: 'Basic server configuration',
                  body: 'Initial setup tasks as specified by the supplier or customer, such as firmware settings, storage arrays and network details.',
                },
                {
                  icon: Search,
                  title: 'Technical troubleshooting',
                  body: 'Methodical diagnosis of hardware and connectivity faults: observe, isolate, verify and record.',
                },
                {
                  icon: FileText,
                  title: 'Infrastructure documentation',
                  body: 'Cable labelling, equipment records, photographs and handover notes to your required format.',
                },
                {
                  icon: MapPinned,
                  title: 'On-site engineering support',
                  body: `Local attendance across ${SITE.serviceArea}, with wider Scottish coverage by arrangement.`,
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Current capabilities" title="Precise About What We Can Deliver." />
            <CapabilityStatus
              groups={[
                {
                  tone: 'available',
                  label: 'Available now',
                  description: 'Work we can take on today, subject to an agreed scope.',
                  items: [
                    'Hardware unboxing, inspection and preparation',
                    'Rack-and-stack and physical server installation',
                    'Basic server configuration to a provided specification',
                    'Technical troubleshooting and diagnostics',
                    'Installation documentation and handover records',
                  ],
                },
                {
                  tone: 'partner',
                  label: 'Requires a specialist or accreditation',
                  description: 'Delivered alongside the appropriate provider, or not undertaken.',
                  items: [
                    'Manufacturer-authorised repairs and warranty work',
                    'Electrical installation work',
                    'Vendor-certified installation or configuration tasks',
                  ],
                },
                {
                  tone: 'developing',
                  label: 'In development',
                  description: 'Capabilities the business is actively building.',
                  items: [
                    'Commissioning for larger, multi-rack deployments',
                    'Planned maintenance support arrangements',
                    'Enterprise and AI infrastructure training',
                  ],
                },
              ]}
            />
            <ScopeNote>
              Bright mAInd does not currently hold manufacturer-authorised repair status or vendor partner accreditation (including NVIDIA or Dell), and does not offer 24/7 engineering cover. We are a small, developing business and take on work we are confident we can complete properly.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section id="partnerships" className="scroll-mt-28 px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">Partnerships</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Subcontracting &amp; Partnership Enquiries
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>If you deliver infrastructure projects to customers in Scotland and need reliable local capacity, we'd like to hear from you.</p>
                <p>We are happy to start with well-defined, appropriately scoped assignments and build from there.</p>
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {partnerTypes.map((type) => (
                  <li key={type} className="rounded-md border border-border-soft bg-ink px-4 py-3 text-sm text-whisper-soft">
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 rounded-xl border border-accent/30 bg-gradient-to-br from-surface to-deep p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              <div className="relative">
                <h3 className="font-display text-xl font-semibold text-paper mb-6">How we work with partners</h3>
                <ul className="space-y-4">
                  {workingPrinciples.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-whisper-soft leading-relaxed">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact?enquiry=subcontracting" className="mt-10 inline-block">
                  <Button variant="accent">
                    Discuss a Subcontracting Opportunity
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Get in touch"
        title="Need local delivery capacity in Scotland?"
        description="Tell us about the project, the equipment and the location. We'll discuss the requirements and whether Bright mAInd is an appropriate fit."
        primaryLabel="Discuss a Subcontracting Opportunity"
        primaryHref="/contact?enquiry=subcontracting"
        secondaryLabel="Installation Enquiry"
        secondaryHref="/contact?enquiry=installation"
      />
    </div>
  );
};

export default FieldServices;
