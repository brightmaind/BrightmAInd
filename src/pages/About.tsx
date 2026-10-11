import { Link } from 'react-router-dom';
import { ArrowUpRight, Factory, Cog, Code2, Server, FileCheck2, Handshake } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import { Button } from '../components/ui/button';
import { breadcrumbSchema } from '../lib/site';

const About: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="About Bright mAInd | AI Hardware Field Services, Scotland"
        description="Bright mAInd is a Scotland-based technical business focused on installing and supporting physical AI computing infrastructure, founded on a background in manufacturing operations and engineering."
        canonical="/about"
        structuredData={[breadcrumbSchema([{ name: 'About', path: '/about' }])]}
      />

      <PageHeader
        eyebrow="About"
        title="A Scottish Technical Business Focused on AI Hardware"
        lead={
          <>
            <p>Bright mAInd is a Scotland-based business moving into physical AI infrastructure services: installing, commissioning and supporting the hardware that AI systems run on.</p>
            <p>We are a small, focused operation building capability carefully and in partnership with established suppliers.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/5073493/pexels-photo-5073493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Network cables neatly terminated in a server patch panel',
        }}
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Founder background</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Grounded in Operations, Engineering and Technical Systems.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Bright mAInd was founded by someone with thirteen years of experience in industrial manufacturing operations: an environment where equipment has to work, downtime has a cost and problems have to be traced methodically to their cause.</p>
              <p>That operational background is combined with STEM studies focused on mechatronics, and significant hands-on experience with software, automation and technical systems.</p>
              <p className="text-paper">The move into AI hardware services builds on that foundation. It is a new specialism for the business, and we approach it with the care that implies.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="What we bring" title="Practical Competence, Clearly Documented." />
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Factory,
                  title: 'Manufacturing operations',
                  body: 'Thirteen years in industrial environments, working to procedures, safety requirements and production pressure.',
                },
                {
                  icon: Cog,
                  title: 'Mechatronics studies',
                  body: 'STEM study combining mechanical, electrical and control systems: the physical side of technology.',
                },
                {
                  icon: Code2,
                  title: 'Software & automation',
                  body: 'Significant experience with software and automation systems, useful when hardware and system behaviour meet.',
                },
                {
                  icon: Server,
                  title: 'Physical infrastructure focus',
                  body: 'The business concentrates on hardware: installation, commissioning, inspection and maintenance support.',
                },
                {
                  icon: FileCheck2,
                  title: 'Documented work',
                  body: 'Clear scoping before a visit and a written record of what was done and found at the end of it.',
                },
                {
                  icon: Handshake,
                  title: 'Supplier relationships',
                  body: 'We aim to work alongside established suppliers and IT providers, starting with well-defined assignments.',
                },
              ]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">How we operate</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Honest About Scope.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>We take on work we are confident we can complete properly. Where a task needs manufacturer-authorised personnel or specialist support, we say so at the start.</p>
              <p>Our initial service area is Ayrshire, Glasgow and Central Scotland, with wider Scottish coverage by arrangement. Work is carried out at customer sites; our Glasgow address is a registered office and is not open to visitors.</p>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link to="/services">
                  <Button variant="outline">View Services</Button>
                </Link>
                <Link to="/partners">
                  <Button variant="ghost">
                    Partner With Us
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
        title="Planning an AI Hardware Deployment?"
        description="Tell us what you need and where you're operating. We'll discuss the requirements and whether Bright mAInd is a suitable fit."
        primaryLabel="Get in Touch"
      />
    </div>
  );
};

export default About;
