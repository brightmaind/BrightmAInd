import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = 'Get in touch',
  title,
  description,
  primaryLabel = 'Book a demo',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border-soft bg-gradient-to-br from-surface to-deep px-8 md:px-16 py-16 md:py-24">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="relative">
            <div className="eyebrow mb-5">{eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tightest max-w-2xl leading-[1.1]">
              {title}
            </h2>
            {description && (
              <p className="mt-6 text-base md:text-lg text-whisper max-w-xl leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to={primaryHref}>
                <Button size="lg" variant="accent">
                  {primaryLabel}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link to={secondaryHref}>
                  <Button size="lg" variant="outline">
                    {secondaryLabel}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
