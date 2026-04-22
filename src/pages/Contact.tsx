import { useState } from 'react';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (response.ok) setIsSubmitted(true);
      else throw new Error('Form submission failed');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEOHead
        title="Contact — BrightMaind"
        description="Talk to BrightMaind about on-premise AI for your organisation. Based near Ayr, Scotland. UK and Europe."
        canonical="/contact"
      />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 lg:px-10 border-b border-border-soft">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-paper tracking-tightest leading-[1.05] max-w-4xl">
            Tell us what you need to keep on-site.
          </h1>
          <p className="mt-8 text-lg text-whisper leading-relaxed max-w-2xl">
            Short form, short reply. We'll come back within one working day — usually sooner.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Email</div>
              <a
                href="mailto:enquiries@brightmaind.com"
                className="inline-flex items-center gap-2.5 text-paper hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                enquiries@brightmaind.com
              </a>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Location</div>
              <div className="inline-flex items-center gap-2.5 text-paper">
                <MapPin className="w-4 h-4" />
                Near Ayr, Scotland
              </div>
              <p className="text-sm text-whisper mt-2 max-w-sm leading-relaxed">
                BrightMaind Ltd is a Scotland-registered company. We work with clients across the UK and Europe.
              </p>
            </div>

            <div className="pt-6 border-t border-border-soft">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">What to expect</div>
              <ul className="space-y-3 text-sm text-whisper">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>A reply within one working day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>A 30-minute discovery call, no slideware</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>A clear recommendation: Vault, Scribe, or neither — honestly</span>
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border-soft bg-ink p-6 md:p-10">
              {!isSubmitted ? (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>

                  <Field label="Company / organisation" name="company" />

                  <div>
                    <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-2">
                      Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full bg-abyss border border-border-soft rounded-md px-4 py-3 text-paper focus:border-accent focus:outline-none transition-colors"
                    >
                      <option>Vault — on-premise AI appliance</option>
                      <option>Scribe — private meeting transcription</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-2">
                      What are you trying to keep on-site?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-abyss border border-border-soft rounded-md px-4 py-3 text-paper placeholder:text-whisper-dim focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="A sentence or two on your industry, the workflow you'd like to automate, and any regulatory or confidentiality constraints."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-paper text-ink hover:bg-mist transition-colors px-6 py-3 rounded-md font-medium disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending…' : 'Send message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center">
                  <div className="inline-flex w-12 h-12 rounded-full border border-accent/40 bg-accent/10 items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-paper mb-3">Message received.</h2>
                  <p className="text-whisper text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. We'll be in touch within one working day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, name, type = 'text', required }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-2">
      {label}{required && <span className="text-accent"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-abyss border border-border-soft rounded-md px-4 py-3 text-paper placeholder:text-whisper-dim focus:border-accent focus:outline-none transition-colors"
    />
  </div>
);

export default Contact;
