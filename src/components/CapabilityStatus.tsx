import { CheckCircle2, FlaskConical, Handshake, Clock } from 'lucide-react';

const tones = {
  available: { icon: CheckCircle2, colour: 'text-emerald-300', border: 'border-emerald-400/30' },
  developing: { icon: FlaskConical, colour: 'text-accent', border: 'border-accent/30' },
  partner: { icon: Handshake, colour: 'text-amber-300', border: 'border-amber-400/30' },
  future: { icon: Clock, colour: 'text-whisper-soft', border: 'border-border-soft' },
};

export interface CapabilityGroup {
  tone: keyof typeof tones;
  label: string;
  description: string;
  items: string[];
}

const CapabilityStatus: React.FC<{ groups: CapabilityGroup[] }> = ({ groups }) => (
  <div className={`grid gap-6 ${groups.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
    {groups.map(({ tone, label, description, items }) => {
      const { icon: Icon, colour, border } = tones[tone];
      return (
        <div key={label} className={`rounded-xl border ${border} bg-ink p-7 md:p-8`}>
          <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] ${colour}`}>
            <Icon className="w-4 h-4" strokeWidth={1.75} />
            {label}
          </div>
          <p className="mt-4 text-sm text-whisper leading-relaxed">{description}</p>
          <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-whisper-soft">
                <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${colour}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

export default CapabilityStatus;
