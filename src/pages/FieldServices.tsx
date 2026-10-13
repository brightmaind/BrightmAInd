import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Server,
  ClipboardCheck,
  Settings2,
  Search,
  Wrench,
  MapPinned,
  Check,
  Users,
  AlertCircle,
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
import { SITE, breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/field-services';
const description =
  'IT infrastructure installation, commissioning, hardware maintenance and field services across Ayrshire, Glasgow and the Central Belt. Local subcontracting capacity for IT providers and integrators.';

const audiences = [
  'Businesses installing or upgrading on-site server infrastructure',
  'IT teams that need extra hands for a deployment or refresh',
  'Technology providers delivering projects to customers in Scotland',
  'Organisations needing methodical hardware fault-finding on site',
];

const challenges = [
  'No local engineer available for a Scottish site visit',
  'Deployments delayed waiting for installation capacity',
  'Hardware delivered but not yet inspected, racked or commissioned',
  'Intermittent hardware faults that need careful on-site diagnosis',
  'Installations left without clear records or handover notes',
];

const partnerTypes = [
  'IT service providers',
  'Managed service providers',
  'Enterprise hardware vendors',
  'Systems integrators',
  'Infrastructure deployment contractors',
  'AI infrastructure providers',
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
            <p>Our primary service. Bright mAInd provides hands-on infrastructure installation, commissioning, maintenance and technical field support across Ayrshire, Glasgow and the Central Belt, with wider Scottish coverage by arrangement.</p>
            <p>We welcome conversations with technology providers seeking dependable local delivery capacity in Scotland.</p>
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
                <h2 className="font-display text-2xl font-semibold text-paper">Problems it solves</h2>
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
            <SectionIntro eyebrow="Capabilities" title="Hands-On Infrastructure Work." />
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
                  body: 'Unboxing and inspection for transit damage, checks against the delivery specification, power-on verification and clear handover records.',
                },
                {
                  icon: Settings2,
                  title: 'Server configuration',
                  body: 'Initial setup tasks as specified by the supplier or customer, such as firmware settings, storage arrays and network details.',
                },
                {
                  icon: Search,
                  title: 'Troubleshooting & diagnostics',
                  body: 'Methodical diagnosis of hardware and connectivity faults: observe, isolate, verify and record.',
                },
                {
                  icon: Wrench,
                  title: 'Hardware maintenance',
                  body: 'Component replacement, health checks and routine maintenance tasks to the supplier or customer procedure, outside manufacturer-authorised repair work.',
                },
                {
                  icon: MapPinned,
                  title: 'Field services & subcontracting',
                  body: `On-site attendance across ${SITE.serviceArea} on behalf of IT providers and contractors, with wider Scottish coverage by arrangement.`,
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
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
                    'Server configuration to a provided specification',
                    'Technical troubleshooting and diagnostics',
                    'Routine hardware maintenance and component replacement',
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
        <section id="partnerships" className="scroll-mt-28 px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">Partnerships</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Subcontracting &amp; Partnership Enquiries
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>If you deliver infrastructure projects to customers in Scotland and need reliable local capacity, we'd like to hear from you. We welcome enquiries from:</p>
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {partnerTypes.map((type) => (
                  <li key={type} className="rounded-md border border-border-soft bg-ink px-4 py-3 text-sm text-whisper-soft">
                    {type}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-whisper leading-relaxed">
                Based in Scotland and focused on Ayrshire, Glasgow and the Central Belt, we are keen to build long-term local partnerships, starting with well-defined, appropriately scoped assignments.
              </p>
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

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <RelatedService
            title="AI Infrastructure Services"
            body="Installation and commissioning support for GPU servers and high-density AI computing hardware, a capability we are actively developing."
            href="/ai-infrastructure"
          />
        </div>
      </section>

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
