import {
  CircuitBoard,
  FileSearch,
  Library,
  ShieldCheck,
  Plug,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import { Button } from '../components/ui/button';

const capabilities = [
  {
    icon: FileSearch,
    title: 'Document Q&A',
    body: 'Point the appliance at your document stores and ask questions against them. Answers are grounded in your own material, with citations back to source.',
  },
  {
    icon: Library,
    title: 'Private knowledge base',
    body: 'Your SOPs, playbooks, audit trails, case files — indexed locally and queryable by your team. Role-based access honoured at retrieval time.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified answers',
    body: 'A dual-model cross-check flags disagreements between answers. Hallucinations are surfaced, not hidden.',
  },
  {
    icon: Plug,
    title: 'Fits your stack',
    body: 'Integrates with file stores, intranets, ticketing, ERP/MES where it makes sense. Authenticates against your identity provider.',
  },
];

const industries = [
  'Manufacturing',
  'Legal',
  'Financial services',
  'Healthcare',
  'Defence',
  'Pharmaceutical',
  'Energy & utilities',
];

const Vault: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Vault — Private on-premise AI for confidential workflows | BrightMaind"
        description="DGX Spark-based AI appliance running large models on your premises. Private document Q&A, verified answers, air-gap compatible. Built for regulated and IP-sensitive industries."
        canonical="/vault"
      />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24 px-6 lg:px-10 border-b border-border/60 relative overflow-hidden bg-ink">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-xs font-mono text-whisper-dim mb-5">
            <Link to="/products" className="hover:text-paper transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 inline mx-1.5 -mt-0.5" />
            <span className="text-paper">Vault</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <CircuitBoard className="w-5 h-5 text-paper" strokeWidth={1.5} />
                <span className="eyebrow">Vault</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Private, on-premise AI for any confidential workflow.
              </h1>
              <p className="mt-6 text-lg text-whisper leading-relaxed max-w-xl">
                Large-model capability, installed in your building. Your documents and your people — never a third party's cloud.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" variant="accent">
                    Book a discovery call
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#capabilities">
                  <Button size="lg" variant="outline">Capabilities</Button>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-xl border border-border-soft bg-ink/80 overflow-hidden aspect-square">
                <img
                  src="/images/vault-hero.png"
                  alt="Vault — DGX Spark-based on-premise AI appliance"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <CircuitBoard className="w-10 h-10 text-whisper mx-auto mb-4" strokeWidth={1.25} />
                    <div className="text-xs font-mono text-whisper-dim uppercase tracking-[0.2em]">
                      vault-hero.png
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between bg-gradient-to-t from-abyss/90 to-transparent">
                  <div>
                    <div className="text-xs font-mono text-whisper-dim">VLT-01</div>
                    <div className="text-sm text-paper font-medium mt-0.5">DGX Spark · on-premise</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-paper/70 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="section-light px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-4">The problem</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Regulated and IP-sensitive businesses can't use cloud AI — and shouldn't have to.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                The most productive use of AI for most operations — plugging it into your real documents, your real process data, your real client work — is exactly the use that is forbidden under cloud terms of service, client agreements, or regulators' rules.
              </p>
              <p>
                Paying a cloud provider to train on your proprietary data is not a feature. It's a liability with a subscription fee attached.
              </p>
              <p className="text-paper">
                Vault puts the same capability inside your building, where your compliance team, your clients, and your legal obligations can all live with it.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-ink border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">How it works</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Hardware, models, and integration — in-building.
              </h2>
            </div>

            <ol className="space-y-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                ['01', 'DGX Spark on your premises', 'The appliance is installed in your server room or comms cabinet. You own the box; it does not phone home.'],
                ['02', 'Large models running locally', 'Frontier-class open-weight models run directly on the appliance. All inference is local.'],
                ['03', 'Connected to your documents and workflows', 'File stores, intranets, line-of-business apps, MES / ERP where it fits. Access rules are honoured.'],
                ['04', 'Air-gap where required', 'For defence, pharma, or any environment that needs it, Vault operates fully air-gapped with no external connectivity.'],
              ].map(([n, title, body]) => (
                <li key={n} className="bg-ink p-8 md:p-10 grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 font-mono text-sm text-whisper-soft">{n}</div>
                  <div className="md:col-span-3">
                    <div className="font-display text-xl font-semibold text-paper">{title}</div>
                  </div>
                  <div className="md:col-span-7 text-whisper text-sm md:text-base leading-relaxed">{body}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section id="capabilities" className="section-light px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <div className="eyebrow mb-4">Capabilities</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                What Vault actually does inside your business.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-8 md:p-10">
                  <Icon className="w-5 h-5 text-charcoal-soft mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
                  <p className="text-sm md:text-base text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-y border-border/60 bg-ink">
          <div className="max-w-6xl mx-auto">
            <div className="eyebrow mb-4">Industry benchmark</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05] mb-12 max-w-3xl">
              What operations teams see with on-premise AI copilots.
            </h2>
            <div className="rounded-xl border border-border-soft bg-gradient-to-br from-surface to-ink p-8 md:p-14">
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-paper tracking-tightest max-w-4xl">
                Manufacturing clients have seen up to <span className="text-paper font-semibold">30% downtime reduction</span> and <span className="text-paper font-semibold">10% OEE improvement</span> with on-premise AI copilot deployments.
              </blockquote>
              <div className="mt-8 pt-8 border-t border-border/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="text-sm text-whisper">
                  Industry benchmark (Georgia-Pacific-class deployment pattern)
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim">
                  Representative figures — not a BrightMaind case study
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="section-light px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-5">
                <div className="eyebrow mb-4">Target industries</div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                  Built for sectors where data doesn't leave.
                </h2>
              </div>
              <div className="md:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
                  {industries.map((name) => (
                    <div key={name} className="bg-ink p-5 text-sm text-paper">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-ink border-t border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="eyebrow mb-4">Pricing</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05] mb-14 max-w-2xl">
              Custom deployment. Honest numbers.
            </h2>

            <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Setup</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">From £10,200</div>
                <div className="text-sm text-whisper mb-6">one-off</div>
                <p className="text-sm text-whisper leading-relaxed">
                  Hardware, model configuration, installation, initial integration and training of your team.
                </p>
              </div>
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Standard</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">From £5,400</div>
                <div className="text-sm text-whisper mb-6">per month</div>
                <p className="text-sm text-whisper leading-relaxed">
                  Ongoing support, updates, model maintenance, monitoring, and integration changes as you grow.
                </p>
              </div>
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Pilot</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">£2,700</div>
                <div className="text-sm text-whisper mb-6">per month</div>
                <p className="text-sm text-whisper leading-relaxed">
                  A reduced pilot rate for early customers willing to work with us on fit and feedback.
                </p>
              </div>
            </div>
            <p className="text-xs text-whisper-dim mt-6">
              Every Vault deployment is scoped to the estate, users, and integrations involved. Final pricing follows a short discovery call.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        title="Find out if Vault fits your estate."
        description="A thirty-minute discovery call to understand your data boundaries, compliance constraints, and the workflows you want inside the appliance."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="See all products"
        secondaryHref="/products"
      />
    </div>
  );
};

export default Vault;
