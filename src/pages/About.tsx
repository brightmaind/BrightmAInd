import { Link } from 'react-router-dom';
import { ArrowUpRight, Factory, GraduationCap, Code2, BookOpen, Scale, FileCheck2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import SectionIntro from '../components/SectionIntro';
import FeatureGrid from '../components/FeatureGrid';
import { Button } from '../components/ui/button';
import { SITE, breadcrumbSchema } from '../lib/site';

const About: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="About Bright mAInd | Industrial Technology Built on Factory Experience"
        description="Bright mAInd is a Scottish industrial technology business built on 13 years of manufacturing experience, combined with computing, software development and automation."
        canonical="/about"
        structuredData={[breadcrumbSchema([{ name: 'About', path: '/about' }])]}
      />

      <PageHeader
        eyebrow="About"
        title="Manufacturing Knowledge Meets Modern Computing."
        lead={
          <>
            <p>Bright mAInd was founded on the belief that industrial technology should solve real operational problems.</p>
            <p>We are a Scottish business helping manufacturers make better use of existing equipment, while developing the infrastructure needed for future AI applications.</p>
          </>
        }
        image={{
          src: 'https://images.pexels.com/photos/32845696/pexels-photo-32845696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Factory worker in protective gear operating industrial machinery',
        }}
      />

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Our background</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                13 years on the factory floor. A different perspective on industrial technology.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Bright mAInd is built on 13 years of hands-on experience in manufacturing operations, particularly within the paper industry. That experience brings a practical understanding of production environments: equipment stoppages, operational pressure, and why reliability and minimal disruption matter.</p>
              <p>It is combined with a technical foundation that includes an HNC in Computing, along with experience developing software, AI automation systems and technical integrations.</p>
              <p>Professional development is ongoing in enterprise IT infrastructure and NVIDIA AI technologies, alongside work to build the physical hardware installation and industrial integration capabilities the business needs.</p>
              <p className="text-paper">The result is an approach shaped by the realities of the factory, not just the technology.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <SectionIntro eyebrow="What we bring" title="Practical Experience, Applied Carefully." />
            <FeatureGrid
              columns={3}
              items={[
                {
                  icon: Factory,
                  title: 'Factory-floor experience',
                  body: '13 years in manufacturing operations, working with production pressure, procedures and the cost of downtime.',
                },
                {
                  icon: GraduationCap,
                  title: 'HNC in Computing',
                  body: 'A formal grounding in computing that underpins the software and infrastructure side of the business.',
                },
                {
                  icon: Code2,
                  title: 'Software & automation',
                  body: 'Experience developing software, AI automation systems and integrations between technical systems.',
                },
                {
                  icon: BookOpen,
                  title: 'Ongoing development',
                  body: 'Continuing professional development in enterprise IT infrastructure and NVIDIA AI technologies.',
                },
                {
                  icon: Scale,
                  title: 'Engineering judgement',
                  body: 'Recommending the simplest solution that works, whether that is monitoring, automation or, where justified, AI.',
                },
                {
                  icon: FileCheck2,
                  title: 'Honest scoping',
                  body: 'Clear agreement on what will be delivered, and plain words when something needs a specialist.',
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
              <div className="eyebrow mb-4">Where we're going</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Serious Ambition, Stated Honestly.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>Our long-term aim is to become a leading Scottish provider of industrial AI infrastructure installation, integration and maintenance, helping manufacturers modernise existing equipment without necessarily replacing expensive machinery.</p>
              <p>We are developing this specialisation step by step. Our services pages set out clearly what is available now, what is offered as a pilot and what is still being built.</p>
              <p>We work across {SITE.serviceArea}, with wider Scottish coverage by arrangement. Our Glasgow address is a registered office and is not open to visitors.</p>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link to="/industrial-solutions">
                  <Button variant="outline">Industrial Solutions</Button>
                </Link>
                <Link to="/field-services">
                  <Button variant="ghost">
                    Field Services
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
        title="Let's discuss what you're working on."
        description="Whether it's a factory challenge or an infrastructure project, tell us about it. We'll discuss the requirements and whether Bright mAInd is an appropriate fit."
        primaryLabel="Get in Touch"
      />
    </div>
  );
};

export default About;
