import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Shield,
  ServerCog,
  Scale,
  Factory,
  Stethoscope,
  Landmark,
  Calculator,
  HardHat,
  CircuitBoard,
  Lock,
  Network,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import { Button } from '../components/ui/button';

const industries = [
  { icon: Scale, name: 'Legal' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Calculator, name: 'Accountancy' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: Landmark, name: 'Financial services' },
  { icon: HardHat, name: 'Industrial operations' },
];

const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="BrightMaind — Private, on-premise AI for confidential industries"
        description="BrightMaind builds on-premise AI appliances for businesses that handle confidential information. Your data never leaves your premises. UK-based."
        canonical="/"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BrightMaind',
            url: 'https://www.brightmaind.com',
            description:
              'BrightMaind builds privacy-first, on-premise AI hardware appliances for legal, manufacturing, healthcare, finance and other confidentiality-bound industries.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Office 1481, 3 Fitzroy Place, 1/1, Sauchiehall Street',
              addressLocality: 'Glasgow Central',
              postalCode: 'G3 7RH',
              addressRegion: 'Scotland',
              addressCountry: 'GB',
            },
            email: 'enquiries@brightmaind.com',
          },
        ]}
      />

      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Private AI, on your premises</div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-7xl font-semibold text-paper tracking-tightest max-w-4xl">
            AI for industries that can not send data to the cloud.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-whisper leading-relaxed max-w-2xl">
            BrightMaind builds dedicated, on-premise AI appliances for legal, manufacturing, healthcare, finance and other confidentiality-bound industries. Your documents, your clients, your IP — the data never leaves the building.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/products">
              <Button size="lg" variant="accent">
                See the products
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-border/60 pt-10">
            {[
              ['Air-gap capable', 'No external dependencies'],
              ['On-premise hardware', 'Installed on-site'],
              ['UK built', 'Supported from Scotland'],
              ['No data egress', 'Nothing leaves the premises'],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="text-sm text-paper font-medium">{title}</div>
                <div className="text-xs text-whisper-dim mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-4">The problem</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Cloud AI is a non-starter for confidential work.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                A solicitor cannot send privileged correspondence to a third-party model. A manufacturer cannot feed SOPs and process IP into a tool that trains on its inputs. A clinician cannot paste patient records into a chat window. A financial adviser cannot hand regulated client data to an opaque cloud API.
              </p>
              <p>
                So these teams either avoid AI altogether and watch others pull ahead — or they quietly use tools they should not, and carry the risk.
              </p>
              <p className="text-paper">
                Neither is acceptable. The answer is not a better policy document. The answer is AI that physically cannot leak, because it never leaves the building.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">The approach</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Dedicated hardware. No tenants. No egress.
              </h2>
              <p className="mt-6 text-whisper text-base md:text-lg leading-relaxed">
                BrightMaind ships purpose-built AI appliances that live on your network. Models run locally. Documents stay local. Where required, the system runs fully air-gapped.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                {
                  icon: ServerCog,
                  title: 'On-premise hardware',
                  body: 'The appliance sits in your server room or comms cabinet. Nothing phones home.',
                },
                {
                  icon: Shield,
                  title: 'Air-gap compatible',
                  body: 'For regulated or defence-adjacent work, the appliance runs without any internet connection at all. Inference is local.',
                },
                {
                  icon: Network,
                  title: 'Connects to your systems',
                  body: 'Document stores, meeting capture, internal apps — integrated over your LAN, authenticated against your identity provider.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-8 md:p-10">
                  <Icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <div className="eyebrow mb-4">Who we serve</div>
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                  Built for industries that take confidentiality seriously.
                </h2>
              </div>
              <p className="text-sm text-whisper max-w-sm">
                Regulated professions, IP-heavy operations, client-privileged work. If your data cannot leave the building, BrightMaind is built for you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {industries.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="bg-ink p-6 md:p-8 flex flex-col items-start gap-4 hover:bg-surface transition-colors"
                >
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <div className="text-sm text-paper font-medium">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Founder</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1] mb-6">
                Thirteen years on the floor before we built the box.
              </h2>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-whisper-dim">
                <span className="px-2.5 py-1 border border-border-soft rounded">UK</span>
                <span className="px-2.5 py-1 border border-border-soft rounded">Scotland</span>
                <span className="px-2.5 py-1 border border-border-soft rounded">Operations-first</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                BrightMaind was founded by an engineer with thirteen years on a manufacturing floor. The products are built with that operational reality in mind — designed to survive bad signal, strict retention policies, and sceptical end users.
              </p>
              
              <p className="text-paper">
                BrightMaind is built for real operational environments.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-16 border-t border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Link
              to="/vault"
              className="group relative rounded-lg border border-border-soft hover:border-accent/60 bg-ink p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <CircuitBoard className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <ArrowUpRight className="w-4 h-4 text-whisper group-hover:text-accent transition-colors" />
              </div>
              <div className="eyebrow mb-2">Vault</div>
              <h3 className="font-display text-2xl font-semibold text-paper mb-3">
                Private large-model AI for your entire operation.
              </h3>
              <p className="text-sm text-whisper leading-relaxed">
                A local AI appliance running large models on your premises. Document Q&amp;A, private knowledge, verified answers.
              </p>
            </Link>
            <Link
              to="/scribe"
              className="group relative rounded-lg border border-border-soft hover:border-accent/60 bg-ink p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <Lock className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <ArrowUpRight className="w-4 h-4 text-whisper group-hover:text-accent transition-colors" />
              </div>
              <div className="eyebrow mb-2">Scribe</div>
              <h3 className="font-display text-2xl font-semibold text-paper mb-3">
                Every meeting your firm has ever had, searchable — and still on-site.
              </h3>
              <p className="text-sm text-whisper leading-relaxed">
                Private transcription appliance for legal and professional services. Searchable corpus, click-to-audio, compliance-ready.
              </p>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        eyebrow="Next step"
        title="See how private AI fits inside your firm."
        description="Thirty minutes. No slideware. We'll talk through your constraints, the workflows you want to automate, and whether Vault or Scribe is the right fit."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="Explore the products"
        secondaryHref="/products"
      />
    </div>
  );
};

export default Home;
