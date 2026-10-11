import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, type LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  points?: string[];
  href?: string;
}

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ items, columns = 2 }) => (
  <div className={`grid ${columnClasses[columns]} gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden`}>
    {items.map(({ icon: Icon, title, body, points, href }) => {
      const content = (
        <>
          <div className="flex items-start justify-between mb-6">
            <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
            {href && (
              <ArrowUpRight className="w-4 h-4 text-whisper group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            )}
          </div>
          <h3 className="font-display text-xl font-semibold text-paper mb-3">{title}</h3>
          <p className="text-sm text-whisper leading-relaxed">{body}</p>
          {points && (
            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-whisper-soft">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      );

      return href ? (
        <Link key={title} to={href} className="group bg-ink p-8 md:p-10 hover:bg-surface transition-colors">
          {content}
        </Link>
      ) : (
        <div key={title} className="bg-ink p-8 md:p-10">
          {content}
        </div>
      );
    })}
  </div>
);

export default FeatureGrid;
