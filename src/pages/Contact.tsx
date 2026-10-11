import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Send, Check, AlertTriangle, Building2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE, breadcrumbSchema } from '../lib/site';

const enquiryTypes = {
  installation: 'AI Hardware Installation',
  support: 'Server / Workstation Support',
  partnership: 'Field Service Partnership',
  maintenance: 'Hardware Maintenance',
  general: 'General Enquiry',
} as const;

type EnquiryKey = keyof typeof enquiryTypes;

const isEnquiryKey = (value: string | null): value is EnquiryKey =>
  value !== null && value in enquiryTypes;

type Status = 'idle' | 'submitting' | 'sent' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('enquiry');
  const defaultEnquiry = enquiryTypes[isEnquiryKey(requested) ? requested : 'general'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <SEOHead
        title="Contact | AI Hardware Installation Enquiries | Bright mAInd"
        description="Discuss AI server, GPU workstation or enterprise hardware installation and support in Ayrshire, Glasgow and Central Scotland. Email enquiries@brightmaind.com."
        canonical="/contact"
        structuredData={[breadcrumbSchema([{ name: 'Contact', path: '/contact' }])]}
      />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 lg:px-10 border-b border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-6">Contact</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-paper tracking-tightest leading-[1.08] max-w-4xl">
            Discuss Your Hardware Installation Requirements.
          </h1>
          <div className="mt-8 text-lg text-whisper leading-relaxed max-w-2xl space-y-4">
            <p>Tell us what equipment you need installed or supported, where the work is located and the type of assistance required.</p>
            <p>We'll review the enquiry and discuss the next steps.</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Email</h2>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 text-paper hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {SITE.email}
              </a>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Service area</h2>
              <div className="flex items-start gap-2.5 text-paper">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SITE.serviceArea}</span>
              </div>
              <p className="text-sm text-whisper mt-2 max-w-sm leading-relaxed">
                Wider Scottish coverage by arrangement. All work is carried out at the customer's site.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Registered office</h2>
              <div className="flex items-start gap-2.5 text-whisper">
                <Building2 className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SITE.registeredOffice}</span>
              </div>
              <p className="text-sm text-whisper-dim mt-2 max-w-sm leading-relaxed">
                {SITE.legalName} is registered in Scotland. This is a registered office address and is not open to visitors.
              </p>
            </div>

            <div className="pt-6 border-t border-border/60">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-3">Helpful to include</h2>
              <ul className="space-y-3 text-sm text-whisper">
                {[
                  'Equipment type, make and quantity',
                  'Site location and access arrangements',
                  'Expected delivery or installation date',
                  'Who supplied the hardware and who owns it',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border-soft bg-ink p-6 md:p-10">
              {status !== 'sent' ? (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Name" name="name" autoComplete="name" required />
                    <Field label="Email" name="email" type="email" autoComplete="email" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Company / organisation" name="company" autoComplete="organization" />
                    <Field label="Location of work" name="location" placeholder="e.g. Kilmarnock, Glasgow" />
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelClass}>Enquiry type</label>
                    <select
                      key={defaultEnquiry}
                      id="interest"
                      name="interest"
                      defaultValue={defaultEnquiry}
                      className={inputClass}
                    >
                      {Object.values(enquiryTypes).map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Equipment and assistance required<span className="text-accent"> *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="What hardware is involved, what needs doing, and any timing or site constraints."
                    />
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="flex items-start gap-3 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                      <span>
                        Your message could not be sent. Please try again, or email us directly at{' '}
                        <a href={`mailto:${SITE.email}`} className="underline hover:text-paper">{SITE.email}</a>.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-paper text-ink hover:bg-mist transition-colors px-6 py-3 rounded-md font-medium disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center" role="status">
                  <div className="inline-flex w-12 h-12 rounded-full border border-accent/40 bg-accent/10 items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-paper mb-3">Enquiry received.</h2>
                  <p className="text-whisper text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. We'll review the details and be in touch to discuss the next steps.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    Send another enquiry
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

const labelClass = 'block text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-2';
const inputClass =
  'w-full bg-abyss border border-border-soft rounded-md px-4 py-3 text-paper placeholder:text-whisper-dim focus:border-accent focus:outline-none transition-colors';

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

const Field: React.FC<FieldProps> = ({ label, name, type = 'text', required, autoComplete, placeholder }) => (
  <div>
    <label htmlFor={name} className={labelClass}>
      {label}{required && <span className="text-accent"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

export default Contact;
