import { Info } from 'lucide-react';

const ScopeNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-8 flex items-start gap-3 text-sm text-whisper-dim leading-relaxed max-w-3xl">
    <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-whisper" strokeWidth={1.5} />
    <span>{children}</span>
  </p>
);

export default ScopeNote;
