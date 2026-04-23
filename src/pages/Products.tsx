import { Link } from 'react-router-dom';
import { ArrowUpRight, CircuitBoard, Mic, BookHeart, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';

const Products: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Products — BrightMaind"
        description="Vault, Scribe, and Keepwell. On-premise AI hardware appliances for confidentiality-bound industries, plus an on-device wellness app."
        canonical="/products"
      />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 lg:px-10 border-b border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Products</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-paper tracking-tightest leading-[1.05] max-w-4xl">
            A three-tier family, one principle: your data never leaves.
          </h1>
          <p className="mt-8 text-lg text-whisper leading-relaxed max-w-2xl">
            Two on-premise appliances for businesses. One on-device app for people. All three share the same rule — inference happens where the data lives, not in someone else's cloud.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto space-y-8">
          <ScrollAnimation>
            <article className="group relative rounded-xl border border-border-soft hover:border-accent/50 bg-gradient-to-br from-surface to-ink overflow-hidden transition-all">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-7 p-8 md:p-12 lg:p-14">
                  <div className="flex items-center gap-2 mb-6">
                    <CircuitBoard className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    <span className="eyebrow">Tier 01 — Flagship</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05] mb-5">
                    Vault
                  </h2>
                  <p className="text-lg text-whisper-soft leading-relaxed mb-6 max-w-xl">
                    AI appliance running large models on your premises. For any privacy-sensitive industry, built to order, deployed in-building.
                  </p>
                  <p className="text-sm text-whisper leading-relaxed mb-8 max-w-xl">
                    Document Q&amp;A, private knowledge base, verified answers via dual-model cross-check, integration with your existing systems. Air-gap capable where regulation demands it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {['Manufacturing', 'Legal', 'Financial services', 'Healthcare', 'Defence', 'Pharma', 'Energy'].map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 border border-border-soft rounded text-whisper">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/vault"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    Learn more about Vault
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-border/60 flex flex-col bg-ink/60">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-abyss">
                    <img
                      src="/ChatGPT_Image_Apr_23,_2026,_04_33_38_PM.png"
                      alt="Vault AI appliance"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Pricing</div>
                      <div className="font-display text-2xl text-paper leading-tight mb-4">
                        Custom per deployment.
                      </div>
                      <p className="text-sm text-whisper leading-relaxed">
                        Every Vault is scoped to your estate, users, integrations, and compliance boundary. We quote each engagement individually after a short discovery call.
                      </p>
                    </div>
                    <p className="text-xs text-whisper-dim mt-8">No templated tiers. No per-seat padding.</p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollAnimation>

          <ScrollAnimation>
            <article className="group relative rounded-xl border border-border-soft hover:border-accent/50 bg-gradient-to-br from-surface to-ink overflow-hidden transition-all">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-7 p-8 md:p-12 lg:p-14">
                  <div className="flex items-center gap-2 mb-6">
                    <Mic className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    <span className="eyebrow">Tier 02 — Focused</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.05] mb-5">
                    Scribe
                  </h2>
                  <p className="text-lg text-whisper-soft leading-relaxed mb-6 max-w-xl">
                    Private meeting transcription appliance. A searchable corpus of every meeting your firm has ever had — that never leaves your premises.
                  </p>
                  <p className="text-sm text-whisper leading-relaxed mb-8 max-w-xl">
                    Legal-first. Click any word in a transcript to hear the original audio. Configurable retention, consent capture, companion app over your local network.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {['Legal', 'Accountancy', 'Financial advisors', 'Compliance-heavy SMEs'].map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 border border-border-soft rounded text-whisper">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/scribe"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    Learn more about Scribe
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-border/60 flex flex-col bg-ink/60">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-abyss">
                    <img
                      src="/ChatGPT_Image_Apr_23,_2026,_04_39_05_PM.png"
                      alt="Scribe transcription appliance"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Pilot offer</div>
                      <div className="space-y-5">
                        <div>
                          <div className="text-sm text-whisper">Pilot (first 2 months)</div>
                          <div className="font-display text-2xl text-paper">£150 <span className="text-base text-whisper">/month</span></div>
                        </div>
                        <div>
                          <div className="text-sm text-whisper">Thereafter</div>
                          <div className="font-display text-2xl text-paper">£250 <span className="text-base text-whisper">/month</span></div>
                        </div>
                        <div>
                          <div className="text-sm text-whisper">Setup</div>
                          <div className="font-display text-2xl text-paper">£3,000</div>
                          <div className="text-xs text-accent mt-1">Waived for first two Scottish legal firms</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-whisper-dim mt-8">Limited pilot cohort — book a demo to discuss.</p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollAnimation>

          <ScrollAnimation>
            <article className="rounded-xl border border-border/60 bg-ink/40 overflow-hidden">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-8 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-5">
                    <BookHeart className="w-4 h-4 text-whisper" strokeWidth={1.5} />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim">Tier 03 — Consumer</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper tracking-tightest mb-3">
                    Keepwell
                  </h2>
                  <p className="text-sm md:text-base text-whisper leading-relaxed max-w-xl mb-6">
                    An on-device wellness journaling app for Android. The same on-device philosophy as our B2B appliances, made personal: your journal lives on your phone, and nowhere else.
                  </p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    Get it on Google Play
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-border/60 flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-ink to-surface">
                  <img
                    src="/ChatGPT_Image_Apr_23,_2026,_04_45_31_PM.png"
                    alt="Keepwell app on Android — private on-device wellness journaling"
                    className="w-full max-w-[240px] h-auto object-contain rounded-2xl drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </ScrollAnimation>
        </div>
      </section>

      <CTASection
        eyebrow="Discovery"
        title="Not sure which tier fits?"
        description="Tell us about the workflow you want to make private and we'll point you at Vault, Scribe, or a custom build."
        primaryLabel="Talk to us"
        primaryHref="/contact"
      />
    </div>
  );
};

export default Products;
