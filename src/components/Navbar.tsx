import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { SITE, serviceLinks } from '../lib/site';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', children: serviceLinks },
  { name: 'Partners', href: '/partners' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${isActive ? 'text-paper' : 'text-whisper hover:text-paper'}`;

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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const servicesActive = location.pathname.startsWith('/services');

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

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group/services">
                  <NavLink
                    to={item.href}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                      servicesActive ? 'text-paper' : 'text-whisper hover:text-paper'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180" />
                  </NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 opacity-0 invisible -translate-y-1 group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0 group-focus-within/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0">
                    <div className="w-72 rounded-lg border border-border-soft bg-deep/95 backdrop-blur-md p-2 shadow-2xl shadow-abyss/60">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            `block px-4 py-3 rounded-md text-sm transition-colors ${
                              isActive ? 'text-accent bg-surface/60' : 'text-whisper hover:text-paper hover:bg-surface'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.name} to={item.href} end={item.href === '/'} className={linkClass}>
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button variant="outline" size="sm">Discuss a Project</Button>
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
                <div key={item.name}>
                  <NavLink
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
                  {item.children && (
                    <div className="ml-3 pl-3 border-l border-border-soft flex flex-col">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            `px-3 py-2.5 rounded-md text-sm ${
                              isActive ? 'text-accent' : 'text-whisper-dim hover:text-paper'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="mt-3">
                <Button variant="outline" size="sm" className="w-full">Discuss a Project</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
