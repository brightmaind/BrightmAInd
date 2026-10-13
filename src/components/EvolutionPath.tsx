import { Plug, Database, LineChart, Wrench, Sparkles } from 'lucide-react';

const stages = [
  { icon: Plug, title: 'Connect', body: 'Identify and securely access useful machine data.' },
  { icon: Database, title: 'Collect', body: 'Gather and organise reliable operational information.' },
  { icon: LineChart, title: 'Understand', body: 'Use dashboards and analysis to reveal performance patterns.' },
  { icon: Wrench, title: 'Improve', body: 'Address identified problems through operational improvements and automation.' },
  { icon: Sparkles, title: 'Advance', body: 'Introduce suitable AI applications when the data and business case justify them.' },
];

const EvolutionPath: React.FC = () => (
  <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-0">
    <div
      aria-hidden="true"
      className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-accent/10 via-accent/60 to-accent/10"
    />
    <div
      aria-hidden="true"
      className="lg:hidden absolute top-8 bottom-8 left-8 w-px bg-gradient-to-b from-accent/10 via-accent/60 to-accent/10"
    />
    {stages.map(({ icon: Icon, title, body }, index) => (
      <li key={title} className="group relative flex gap-6 lg:flex-col lg:items-center lg:text-center lg:px-4">
        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border border-accent/40 bg-ink flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_0_6px_rgba(125,211,252,0.08)]">
          <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
        </div>
        <div className="pt-2 lg:pt-6">
          <div className="text-xs font-mono text-whisper-dim tracking-widest mb-2">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="font-display text-xl font-semibold text-paper mb-2">{title}</h3>
          <p className="text-sm text-whisper leading-relaxed max-w-xs">{body}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default EvolutionPath;
