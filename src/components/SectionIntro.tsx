import type { ReactNode } from 'react';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ eyebrow, title, children, className = 'mb-14' }) => (
  <div className={`max-w-2xl ${className}`}>
    <div className="eyebrow mb-4">{eyebrow}</div>
    <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest leading-[1.1]">
      {title}
    </h2>
    {children && <div className="mt-6 text-whisper text-base md:text-lg leading-relaxed space-y-4">{children}</div>}
  </div>
);

export default SectionIntro;
