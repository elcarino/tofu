import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2">
            <img src="https://i.ibb.co.com/xqbyRV7V/Chat-GPT-Image-Jun-21-2026-07-36-23-PM.png" alt="TOFU Logo" className="h-8 w-auto mix-blend-screen" />
            <span className="text-glow-blue-200">TOFU</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-text-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button href="/contact" className="!px-5 !py-2 !text-sm">Get Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-heading p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-white/5 glass-panel !rounded-none !border-x-0 !shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path ? 'bg-white/5 text-white' : 'text-text-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button href="/contact" className="w-full">Get Free Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
