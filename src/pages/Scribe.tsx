import {
  Search,
  Rewind,
  Clock,
  ShieldCheck,
  Calendar,
  Smartphone,
  Mic,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';
import { Button } from '../components/ui/button';

const features = [
  {
    icon: Search,
    title: 'Searchable meeting corpus',
    body: 'Every meeting your firm has ever captured, indexed. Find the moment a position changed, a deadline was set, or a warranty was agreed.',
  },
  {
    icon: Rewind,
    title: 'Click-to-audio',
    body: 'Click any word in a transcript and hear the original recording at that point. Verify nuance, tone, and intent — not just the words.',
  },
  {
    icon: Clock,
    title: 'Async transcription',
    body: 'Drop a recording in, carry on with your day. Transcription runs on the appliance, not a cloud service.',
  },
  {
    icon: ShieldCheck,
    title: 'Consent & compliance capture',
    body: 'Configurable consent prompts and audit trails for the way your profession records.',
  },
  {
    icon: Calendar,
    title: 'Configurable retention',
    body: 'Set retention windows per client, matter, or meeting type. The appliance enforces them.',
  },
  {
    icon: Smartphone,
    title: 'Companion app on your LAN',
    body: 'A companion app for phones and laptops that speaks to the appliance over your local network. No external services.',
  },
];

const Scribe: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Scribe — Private meeting transcription appliance | BrightMaind"
        description="A private, on-premise knowledge base of every meeting your firm has ever had. Searchable transcripts, click-to-audio, compliance-ready. For legal, accountancy, and financial services."
        canonical="/scribe"
      />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24 px-6 lg:px-10 border-b border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-xs font-mono text-whisper-dim mb-5">
            <Link to="/products" className="hover:text-paper transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 inline mx-1.5 -mt-0.5" />
            <span className="text-paper">Scribe</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <Mic className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <span className="eyebrow">Scribe</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-paper tracking-tightest leading-[1.05]">
                A private knowledge base of every meeting your firm has ever had.
              </h1>
              <p className="mt-6 text-lg text-whisper leading-relaxed max-w-xl">
                Captured on-site, transcribed on-site, searched on-site. Never leaves your premises.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" variant="accent">Book a demo</Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline">How it works</Button>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-xl border border-border-soft bg-ink/80 overflow-hidden aspect-[4/5] md:aspect-[4/5]">
                <img
                  src="/images/scribe-hero.png"
                  alt="Scribe — private on-premise meeting transcription appliance"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Mic className="w-10 h-10 text-accent/60 mx-auto mb-4" strokeWidth={1.25} />
                    <div className="text-xs font-mono text-whisper-dim uppercase tracking-[0.2em]">
                      scribe-hero.png
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between bg-gradient-to-t from-abyss/90 to-transparent">
                  <div>
                    <div className="text-xs font-mono text-whisper-dim">SCR-01</div>
                    <div className="text-sm text-paper font-medium mt-0.5">On-premise transcription</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-b border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-4">The problem</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Your firm's best knowledge is trapped in meetings no one can find.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-whisper text-base md:text-lg leading-relaxed">
              <p>
                Meeting notes are the single biggest source of lost institutional knowledge in professional services. The senior who remembers is the senior who leaves. The detail a junior needed sat in a call last June that nobody can produce.
              </p>
              <p>
                The obvious solution — cloud transcription — is the wrong tool for privileged work. Sending client calls, case strategy, or financial advisory discussions to a third-party model is a compliance problem and a confidentiality problem, regardless of what the terms of service promise.
              </p>
              <p className="text-paper">
                Scribe keeps the knowledge, without creating the risk.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section id="how-it-works" className="px-6 lg:px-10 py-24 md:py-32 bg-deep/40 border-b border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="eyebrow mb-4">How it works</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Four stages, all inside your building.
              </h2>
            </div>

            <ol className="space-y-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {[
                ['01', 'Capture', 'The appliance captures audio from meetings — in-person, over your phone system, or uploaded from existing recordings.'],
                ['02', 'Transcribe', 'Transcription runs on the appliance itself. No audio, no transcript, no metadata is sent outside your network.'],
                ['03', 'Index', 'Transcripts become a searchable corpus — linked to matters, clients, or meeting types however you organise.'],
                ['04', 'Retrieve', 'Your team searches from a companion app over your LAN. Click any word to jump back to the original audio.'],
              ].map(([n, title, body]) => (
                <li key={n} className="bg-ink p-8 md:p-10 grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 font-mono text-sm text-accent">{n}</div>
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
        <section className="px-6 lg:px-10 py-24 md:py-32 border-b border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <div className="eyebrow mb-4">Capabilities</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05]">
                Built for the way professional services actually work.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-ink p-8">
                  <Icon className="w-5 h-5 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-paper mb-2">{title}</h3>
                  <p className="text-sm text-whisper leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-6 lg:px-10 py-24 md:py-32 border-b border-border/60">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">Who it's for</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tightest leading-[1.1]">
                Confidentiality-bound firms that still want the benefits of AI.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4">
              {[
                ['Legal', 'Solicitors, barristers, and compliance-heavy SME practices. Client privilege is protected because the data physically cannot leave.'],
                ['Accountancy', 'Client calls, advisory meetings, audit conversations — searchable, retained exactly as long as you need.'],
                ['Financial advisors', 'Regulated client discussions captured and indexed without sending a syllable to a third-party cloud.'],
              ].map(([title, body]) => (
                <div key={title} className="border border-border-soft rounded-lg p-6 bg-ink">
                  <div className="font-display text-lg font-semibold text-paper mb-1.5">{title}</div>
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
            <div className="eyebrow mb-4">Pilot offer</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05] mb-6 max-w-2xl">
              A limited pilot cohort, on honest terms.
            </h2>
            <p className="text-lg text-whisper-soft leading-relaxed max-w-2xl mb-14">
              First two Scottish legal firms: setup cost waived in exchange for a testimonial. Limited pilot cohort — book a demo to discuss.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden">
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">Pilot — first 2 months</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">£150</div>
                <div className="text-sm text-whisper mb-6">per month</div>
                <p className="text-sm text-whisper leading-relaxed">
                  Fixed pilot rate for your first two months on the appliance.
                </p>
              </div>
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Thereafter</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">£250</div>
                <div className="text-sm text-whisper mb-6">per month</div>
                <p className="text-sm text-whisper leading-relaxed">
                  Standard monthly service after the pilot period.
                </p>
              </div>
              <div className="bg-ink p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Setup</div>
                <div className="font-display text-4xl font-semibold text-paper mb-1">£3,000</div>
                <div className="text-sm text-accent mb-6">Waived for first three Scottish legal firms</div>
                <p className="text-sm text-whisper leading-relaxed">
                  In exchange for a testimonial. Limited slots.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <CTASection
        title="Ready to see Scribe on your own recordings?"
        description="Bring a meeting. We'll run it on the appliance with you in the room and you can decide from there."
        primaryLabel="Book a demo"
        primaryHref="/contact"
        secondaryLabel="See all products"
        secondaryHref="/products"
      />
    </div>
  );
};

export default Scribe;
