import { Link } from 'react-router-dom';
import { Mail, MapPin, Building2 } from 'lucide-react';
import { SITE, serviceLinks } from '../lib/site';

const linkClass = 'text-whisper hover:text-paper transition-colors';

const Footer: React.FC = () => {
  return (
    <footer className="bg-abyss border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center -ml-4 -my-6 mb-1" aria-label={`${SITE.name} home`}>
              <img src={SITE.logo} alt={`${SITE.name} logo`} loading="lazy" className="h-52 w-auto object-contain" />
            </Link>
            <p className="text-sm text-whisper leading-relaxed max-w-sm">
              Industrial data infrastructure, machine monitoring and practical edge AI for Scottish manufacturers, with IT infrastructure field services across Scotland.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Services</h2>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className={linkClass}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Company</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/field-services#partnerships" className={linkClass}>Subcontracting</Link></li>
              <li><Link to="/about" className={linkClass}>About</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <Mail className="w-3.5 h-3.5" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-whisper">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Based in Scotland, working across {SITE.serviceArea}. Wider Scotland by arrangement.</span>
              </li>
              <li className="flex items-start gap-2 text-whisper-dim">
                <Building2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Registered office (not open to visitors): {SITE.registeredOffice}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-whisper-dim">
            &copy; {new Date().getFullYear()} {SITE.legalName}. Registered in Scotland.
          </p>
          <p className="text-xs text-whisper-dim font-mono tracking-wider">
            INDUSTRIAL AI INFRASTRUCTURE &amp; EDGE COMPUTING | SCOTLAND
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
