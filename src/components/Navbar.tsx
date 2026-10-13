import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { SITE, serviceLinks } from '../lib/site';

const navigation = [
  { name: 'Home', href: '/' },
  ...serviceLinks,
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-ink/90 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center group -my-6" aria-label={`${SITE.name} home`}>
            <img src={SITE.logo} alt={`${SITE.name} logo`} className="h-44 md:h-56 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `relative text-sm py-2 transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-accent after:transition-transform after:duration-300 ${
                    isActive ? 'text-paper after:scale-x-100' : 'text-whisper hover:text-paper after:scale-x-0'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button variant="outline" size="sm">Discuss Your Project</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-whisper hover:text-paper transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-border/60">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-sm ${
                      isActive ? 'text-paper bg-surface/80' : 'text-whisper hover:text-paper hover:bg-surface/50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-3">
                <Button variant="outline" size="sm" className="w-full">Discuss Your Project</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
