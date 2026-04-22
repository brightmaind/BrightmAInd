import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-abyss border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center mb-5" aria-label="BrightMaind home">
              <img
                src="/ChatGPT_Image_Apr_22,_2026,_03_41_23_PM.png"
                alt="BrightMaind"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-whisper leading-relaxed max-w-sm">
              On-premise AI appliances for businesses that handle confidential information. No cloud. No compromise.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/vault" className="text-whisper hover:text-paper transition-colors">Vault</Link></li>
              <li><Link to="/scribe" className="text-whisper hover:text-paper transition-colors">Scribe</Link></li>
              <li><Link to="/products" className="text-whisper hover:text-paper transition-colors">All products</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-whisper-dim mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:enquiries@brightmaind.com" className="inline-flex items-center gap-2 text-whisper hover:text-paper transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  enquiries@brightmaind.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-whisper">
                <MapPin className="w-3.5 h-3.5" />
                Near Ayr, Scotland, United Kingdom
              </li>
              <li><Link to="/contact" className="text-whisper hover:text-paper transition-colors">Get in touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-whisper-dim">
            &copy; {new Date().getFullYear()} BrightMaind Ltd. Registered in Scotland.
          </p>
          <p className="text-xs text-whisper-dim font-mono tracking-wider">
            PRIVATE AI, ON YOUR PREMISES.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
