import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  actions?: ReactNode;
  image?: { src: string; alt: string };
}

const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, lead, actions, image }) => (
  <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 lg:px-10 border-b border-border/60 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
      <div className={image ? 'lg:col-span-7' : 'lg:col-span-10'}>
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-paper tracking-tightest leading-[1.08]">
          {title}
        </h1>
        <div className="mt-8 text-lg text-whisper leading-relaxed max-w-2xl space-y-4">{lead}</div>
        {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
      </div>
      {image && (
        <div className="lg:col-span-5">
          <figure className="relative rounded-xl overflow-hidden border border-border-soft">
            <img
              src={image.src}
              alt={image.alt}
              width={940}
              height={627}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
          </figure>
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
