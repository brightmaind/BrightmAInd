import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface RelatedServiceProps {
  title: string;
  body: string;
  href: string;
}

const RelatedService: React.FC<RelatedServiceProps> = ({ title, body, href }) => (
  <Link
    to={href}
    className="group flex items-center justify-between gap-6 rounded-lg border border-border-soft hover:border-accent/60 bg-ink p-6 md:p-8 transition-colors"
  >
    <div>
      <div className="eyebrow mb-2">Related</div>
      <div className="font-display text-xl font-semibold text-paper">{title}</div>
      <p className="text-sm text-whisper mt-1">{body}</p>
    </div>
    <ArrowUpRight className="w-5 h-5 text-whisper group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 transition-all" />
  </Link>
);

export default RelatedService;
