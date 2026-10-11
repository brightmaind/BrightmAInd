import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Cpu,
  Monitor,
  PackageCheck,
  Cable,
  ClipboardCheck,
  MapPinned,
  Check,
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

const path = '/services/ai-hardware-installation';
const description =
  'Physical installation of AI servers and GPU workstations in Scotland. Hardware preparation, inspection, connectivity, commissioning checks and on-site support for customer-owned equipment.';

const AIHardwareInstallation: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="AI Hardware Installation in Scotland | Bright mAInd"
        description={description}
        canonical={path}
        structuredData={[
          serviceSchema('AI Hardware Installation', description, path),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'AI Hardware Installation', path },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Services / AI Hardware Installation"
        title="AI Hardware Installation Services in Scotland"
        lead={
          <>
            <p>On-site physical installation assistance for AI servers, GPU workstations and supporting computing equipment.</p>
            <p>We work with AI server suppliers, systems integrators and organisations deploying their own hardware, carrying out the hands-on work between delivery and operation.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/34552803/pexels-photo-34552803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'GPU graphics card installed inside a workstation',
        }}
        actions={
          <Link to="/contact?enquiry=installation">
            <Button size="lg" variant="accent">
              Enquire About an Installation
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        }
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="What's involved" title="Hands-On Installation Work.">
              <p>The focus is the physical service: getting equipment correctly placed, connected and checked. Software configuration and AI model deployment remain with the supplier or customer unless separately agreed.</p>
            </SectionIntro>
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Cpu,
                  title: 'AI Server Installation',
                  body: 'Physical installation assistance for rack-mounted and tower AI servers, including racking, rail fitting, power and cable routing to the agreed plan.',
                },
                {
                  icon: Monitor,
                  title: 'GPU Workstation Installation',
                  body: 'Setup of professional GPU workstations at the point of use, including positioning, peripheral connection and approved component fitting.',
                },
                {
                  icon: PackageCheck,
                  title: 'Preparation & Inspection',
                  body: 'Unboxing, visual inspection for transit damage, component and configuration checks against the delivery specification before installation.',
                },
                {
                  icon: Cable,
                  title: 'Connectivity & Initial Setup',
                  body: 'Power and network connection, cable labelling and management, and initial power-on to confirm the system is detected and responsive.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Commissioning Checks',
                  body: 'Hardware health checks, storage and GPU detection, thermal observation under load and a written record of results at handover.',
                },
                {
                  icon: MapPinned,
                  title: 'Regional On-Site Support',
                  body: 'Local attendance across Ayrshire, Glasgow and Central Scotland, with wider Scottish coverage by arrangement.',
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
              <div className="eyebrow mb-4">Customer-owned equipment</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Installing the Hardware You Have Already Sourced.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>We primarily work with equipment supplied by the customer, manufacturer, reseller or IT provider. We do not currently supply hardware as a core service.</p>
              <p>Before any visit, we agree the equipment involved, the site conditions, who is responsible for each task and what will be documented at the end.</p>
              <ul className="space-y-3 pt-2">
                {[
                  'Equipment list and delivery details confirmed in advance',
                  'Site access, power and network readiness reviewed',
                  'Responsibilities agreed between supplier, customer and Bright mAInd',
                  'Results recorded and shared at handover',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-whisper-soft">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-6xl mx-auto">
            <ScopeNote>
              Work is subject to the equipment requirements, technical competence and agreed project scope. Where a manufacturer requires authorised personnel for certain tasks, we will say so and work alongside the appropriate provider.
            </ScopeNote>
            <Link
              to="/services/server-and-workstation-support"
              className="group mt-10 flex items-center justify-between gap-6 rounded-lg border border-border-soft hover:border-accent/60 bg-ink p-6 md:p-8 transition-colors"
            >
              <div>
                <div className="eyebrow mb-2">Related service</div>
                <div className="font-display text-xl font-semibold text-paper">Server &amp; Workstation Support</div>
                <p className="text-sm text-whisper mt-1">Component replacement, diagnostics and health checks after installation.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-whisper group-hover:text-accent flex-shrink-0 transition-colors" />
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Enquire"
        title="Have Equipment That Needs Installing?"
        description="Tell us what the hardware is, where it is going and when it arrives. We'll review the requirements and confirm whether we can help."
        primaryLabel="Enquire About an Installation"
        primaryHref="/contact?enquiry=installation"
      />
    </div>
  );
};

export default AIHardwareInstallation;
