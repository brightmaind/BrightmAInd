import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Server,
  HardDrive,
  Layers,
  Stethoscope,
  Gauge,
  Cpu,
  Activity,
  FileText,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import ScopeNote from '../components/ScopeNote';
import { Button } from '../components/ui/button';
import { breadcrumbSchema, serviceSchema } from '../lib/site';

const path = '/services/server-and-workstation-support';
const description =
  'On-site server and GPU workstation support in Scotland. Component and storage replacement, RAID checks, hardware diagnostics, health monitoring and commissioning documentation.';

const ServerWorkstationSupport: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Server & GPU Workstation Support Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('Server & Workstation Support', description, path),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Server & Workstation Support', path },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Services / Server & Workstation Support"
        title="On-Site Server & Workstation Support"
        lead={
          <>
            <p>Physical setup and maintenance assistance for enterprise servers, storage systems and professional GPU workstations.</p>
            <p>We support suppliers, IT service providers and in-house teams who need reliable hands on-site in Scotland.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Server cabinets with networking equipment and cabling',
        }}
        actions={
          <Link to="/contact?enquiry=support">
            <Button size="lg" variant="accent">
              Request Support
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="Support activities" title="Practical Hardware Support.">
              <p>Typical activities are listed below. The exact scope is agreed for each piece of equipment and site.</p>
            </SectionIntro>
            <FeatureGrid
              columns={4}
              items={[
                {
                  icon: Server,
                  title: 'Server Installation Assistance',
                  body: 'Physical racking, mounting, cabling and power connection alongside the supplier or IT team.',
                },
                {
                  icon: HardDrive,
                  title: 'Storage & Component Replacement',
                  body: 'Approved replacement of drives, memory, power supplies, fans and other field-replaceable parts.',
                },
                {
                  icon: Layers,
                  title: 'RAID Configuration & Checks',
                  body: 'Verifying array status, rebuild progress and drive health, and configuring arrays to the agreed specification.',
                },
                {
                  icon: Stethoscope,
                  title: 'Hardware Diagnostics',
                  body: 'Running built-in diagnostics, reviewing hardware logs and isolating faulty components.',
                },
                {
                  icon: Gauge,
                  title: 'Server Management Interfaces',
                  body: 'Using baseboard management and remote console interfaces to check status, sensors and event logs.',
                },
                {
                  icon: Cpu,
                  title: 'GPU Workstation Hardware',
                  body: 'Physical checks, approved GPU and component installation, and confirming cards are detected and stable.',
                },
                {
                  icon: Activity,
                  title: 'Hardware Health Monitoring',
                  body: 'Checking temperatures, fan behaviour, power readings and error counters during scheduled visits.',
                },
                {
                  icon: FileText,
                  title: 'Commissioning Documentation',
                  body: 'Clear written records of checks completed, results observed and any follow-up actions.',
                },
              ]}
            />
            <ScopeNote>
              We do not claim manufacturer authorisation for any specific brand. Work on equipment under warranty or a service contract follows the manufacturer's or supplier's procedures and is only carried out where they permit it.
            </ScopeNote>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <img
                src="https://images.pexels.com/photos/6704937/pexels-photo-6704937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Close-up of a GPU with metal cooling fans"
                width={940}
                height={627}
                loading="lazy"
                className="w-full h-72 md:h-96 object-cover rounded-xl border border-border-soft"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">Documented work</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Every Visit Ends With a Clear Record.
              </h2>
              <div className="mt-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
                <p>Whether the job is a single drive replacement or a full set of health checks, you receive a written note of what was done, what was found and anything that needs attention.</p>
                <p>For suppliers and IT providers, that record can follow your own reporting format where required.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/services/ai-hardware-installation"
              className="group flex items-center justify-between gap-6 rounded-lg border border-border-soft hover:border-accent/60 bg-ink p-6 md:p-8 transition-colors"
            >
              <div>
                <div className="eyebrow mb-2">Related service</div>
                <div className="font-display text-xl font-semibold text-paper">AI Hardware Installation</div>
                <p className="text-sm text-whisper mt-1">Physical installation and commissioning checks for new AI servers and GPU workstations.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-whisper group-hover:text-accent flex-shrink-0 transition-colors" />
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Enquire"
        title="Need Hands On-Site for Your Hardware?"
        description="Tell us about the equipment, the location and the support required. We'll review it and discuss the next steps."
        primaryLabel="Request Support"
        primaryHref="/contact?enquiry=support"
        secondaryLabel="Partner Information"
        secondaryHref="/partners"
      />
    </div>
  );
};

export default ServerWorkstationSupport;
