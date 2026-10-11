import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Server, ClipboardCheck, MapPinned } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import ScopeNote from '../components/ScopeNote';
import { Button } from '../components/ui/button';
import { breadcrumbSchema } from '../lib/site';

const Services: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI Hardware & Server Field Services in Scotland | Bright mAInd"
        description="Physical installation, commissioning checks and on-site support for AI servers, GPU workstations and enterprise computing hardware across Ayrshire, Glasgow and Central Scotland."
        canonical="/services"
        structuredData={[breadcrumbSchema([{ name: 'Services', path: '/services' }])]}
      />

      <PageHeader
        eyebrow="Services"
        title="Physical Infrastructure Services for AI Hardware"
        lead={
          <>
            <p>Bright mAInd provides the hands-on work involved in getting AI computing equipment installed, checked and supported at customer premises.</p>
            <p>We work on equipment supplied by customers, manufacturers, resellers and IT providers, with every engagement scoped before work begins.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Tower servers standing in a server room',
        }}
        actions={
          <Link to="/contact">
            <Button size="lg" variant="accent">
              Discuss a Project
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Core services" title="Two Primary Service Areas.">
              <p>Most work falls into one of two areas. Each has its own page with the detail of what is typically included.</p>
            </SectionIntro>
            <FeatureGrid
              columns={2}
              items={[
                {
                  icon: Cpu,
                  title: 'AI Hardware Installation',
                  body: 'Physical installation assistance for AI servers, GPU workstations and supporting equipment, from preparation and inspection through to connectivity and commissioning checks.',
                  href: '/services/ai-hardware-installation',
                },
                {
                  icon: Server,
                  title: 'Server & Workstation Support',
                  body: 'On-site assistance with enterprise servers, storage and professional workstations, including component replacement, diagnostics and health checks.',
                  href: '/services/server-and-workstation-support',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Across every engagement" title="Commissioning and Field Support." />
            <FeatureGrid
              columns={2}
              items={[
                {
                  icon: ClipboardCheck,
                  title: 'Commissioning & Testing',
                  body: 'Structured checks to confirm equipment is installed correctly and operating as expected, with results recorded at handover.',
                  points: ['Hardware health checks', 'Connectivity and storage verification', 'Thermal monitoring', 'Documented handover'],
                },
                {
                  icon: MapPinned,
                  title: 'On-Site Field Services',
                  body: 'Regional technical assistance for businesses and infrastructure providers that need someone physically on-site.',
                  points: ['Scheduled site visits', 'Equipment inspections', 'Approved hardware replacements', 'Troubleshooting'],
                },
              ]}
            />
            <ScopeNote>
              Specific work is subject to equipment requirements, technical competence and the agreed project scope. Initial service area: Ayrshire, Glasgow and Central Scotland, with wider Scottish coverage by arrangement.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Supplier or integrator?"
        title="Looking for Regional Field Support?"
        description="If you deliver hardware to customers in Scotland and need local installation capacity, see how we work with partners."
        primaryLabel="Discuss a Project"
        secondaryLabel="Partner Information"
        secondaryHref="/partners"
      />
    </div>
  );
};

export default Services;
