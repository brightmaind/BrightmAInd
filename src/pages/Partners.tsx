import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Truck,
  Store,
  Users,
  Workflow,
  HardHat,
  Check,
  MapPinned,
  FileCheck2,
  Handshake,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import ScopeNote from '../components/ScopeNote';
import { Button } from '../components/ui/button';
import { breadcrumbSchema } from '../lib/site';

const partnerTypes = [
  { icon: Truck, title: 'AI Hardware Vendors', body: 'Local installation and follow-up visits for systems shipped to Scottish customers.' },
  { icon: Store, title: 'Infrastructure Resellers', body: 'On-site delivery support, setup and commissioning checks for equipment you supply.' },
  { icon: Users, title: 'Managed Service Providers', body: 'Additional field capacity for physical tasks at client sites in Scotland.' },
  { icon: Workflow, title: 'Systems Integrators', body: 'Hands-on assistance with the physical side of integration and deployment projects.' },
  { icon: HardHat, title: 'Field-Service Contractors', body: 'Regional cover for assignments in Ayrshire, Glasgow and Central Scotland.' },
];

const opportunities = [
  'Installation assistance',
  'Supervised field assignments',
  'Equipment inspection',
  'Hardware preparation',
  'Physical deployment support',
  'Commissioning checks',
  'Approved hardware replacement',
  'Scheduled site visits',
];

const commitments = [
  { icon: Handshake, title: 'Your procedures', body: 'Work follows your processes, documentation standards and site rules.' },
  { icon: FileCheck2, title: 'Documented results', body: 'Every assignment ends with a clear written record of work completed.' },
  { icon: MapPinned, title: 'Local presence', body: 'Based in Scotland, focused on Ayrshire, Glasgow and Central Scotland.' },
];

const enquiryLink = '/contact?enquiry=partnership';

const Partners: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI Infrastructure Field Service Partners | Bright mAInd"
        description="Regional field support in Scotland for AI hardware vendors, resellers, MSPs and systems integrators. Installation assistance, commissioning checks and approved hardware replacement."
        canonical="/partners"
        structuredData={[breadcrumbSchema([{ name: 'Partners', path: '/partners' }])]}
      />

      <PageHeader
        eyebrow="Partners"
        title="Your On-Site Hardware Partner in Scotland"
        lead={
          <>
            <p className="text-paper text-xl md:text-2xl font-display leading-snug">Extend Your Field Coverage into Scotland.</p>
            <p>Bright mAInd is building specialist capability in physical AI infrastructure installation and maintenance.</p>
            <p>We are seeking partnerships with established hardware suppliers, integrators and field-service providers requiring reliable regional support.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/37605911/pexels-photo-37605911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'IT technician working at a computer inside a server room',
        }}
        actions={
          <Link to={enquiryLink}>
            <Button size="lg" variant="accent">
              Enquire About Field Support
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Who this is for" title="Built for Companies Delivering Hardware to Scottish Sites.">
              <p>Our focus is the hands-on work involved in deploying and maintaining computing equipment at customer premises.</p>
            </SectionIntro>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {partnerTypes.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-7 hover:bg-surface transition-colors">
                  <Icon className="w-5 h-5 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-paper mb-2">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Partnership opportunities</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Work We Can Take On for You.
              </h2>
              <p className="mt-6 text-whisper text-base md:text-lg leading-relaxed">
                Services are agreed according to experience, equipment requirements and project scope. We would rather start with well-defined assignments and expand as trust is established.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-3">
                {opportunities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border-soft bg-ink px-5 py-4 text-sm text-paper hover:border-accent/50 transition-colors"
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ScopeNote>
                Supervised assignments, working alongside your engineers or under your remote direction, are welcome as a way of establishing working practices on your equipment.
              </ScopeNote>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="How we work with partners" title="Straightforward, Documented Field Work." />
            <div className="grid md:grid-cols-3 gap-6">
              {commitments.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-lg border border-border-soft bg-ink p-8">
                  <Icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Link to="/services/ai-hardware-installation" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-soft transition-colors">
                AI Hardware Installation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/services/server-and-workstation-support" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-soft transition-colors">
                Server &amp; Workstation Support <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Field support enquiries"
        title="Need Regional Hardware Support in Scotland?"
        description="Tell us about the equipment you deliver, where your customers are and the type of assistance you need. We'll discuss whether there is a suitable fit."
        primaryLabel="Enquire About Field Support"
        primaryHref={enquiryLink}
      />
    </div>
  );
};

export default Partners;
