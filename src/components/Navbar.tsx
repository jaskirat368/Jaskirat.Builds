import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500',
        scrolled ? 'pt-4' : 'pt-6 md:pt-8'
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-3 mx-auto rounded-full transition-all duration-300 group',
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-zinc-950/90 backdrop-blur-sm border border-white/5 shadow-2xl'
        )}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

        <Link to="/" className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2 z-50">
          <span>JASKIRAT<span className="text-blue-500">.</span>BUILDS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors rounded-full',
                  isActive ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Book Strategy Call
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <button
          className="lg:hidden relative z-50 p-2 text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/20 transition-colors shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 left-4 right-4 bg-zinc-950/98 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-6 flex flex-col gap-2 lg:hidden overflow-hidden"
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'block px-4 py-3 text-lg font-medium rounded-2xl transition-all',
                      isActive ? 'bg-white text-zinc-950 shadow-lg' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
              >
                Book Strategy Call
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
