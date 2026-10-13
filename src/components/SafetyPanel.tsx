import { HardHat } from 'lucide-react';

const principles = [
  'Every project begins with a site assessment and the customer\u2019s authorisation before anything is connected.',
  'Electrical, industrial-controls and machinery-safety work is carried out or supervised by appropriately competent specialists.',
  'Connections to production equipment or networks are planned with the customer\u2019s engineering and IT teams, never assumed to be safe by default.',
  'We do not modify production machinery or its safety systems.',
];

const SafetyPanel: React.FC = () => (
  <div className="rounded-xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.04] to-transparent p-8 md:p-10 grid md:grid-cols-12 gap-8">
    <div className="md:col-span-4">
      <div className="w-12 h-12 rounded-lg border border-amber-400/40 bg-amber-400/10 flex items-center justify-center mb-6">
        <HardHat className="w-6 h-6 text-amber-300" strokeWidth={1.5} />
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper tracking-tightest leading-[1.15]">
        Safety and Engineering Responsibility
      </h2>
    </div>
    <ul className="md:col-span-8 space-y-4">
      {principles.map((item) => (
        <li key={item} className="flex items-start gap-3 text-whisper leading-relaxed">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SafetyPanel;
