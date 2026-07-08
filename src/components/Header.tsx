import { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Company Profile' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'offices', label: 'Global Offices' },
    { id: 'research', label: 'Research & ESG' },
    { id: 'careers', label: 'Careers' },
    { id: 'media', label: 'Media' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <div
          id="brand-logo-container"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-950/20 group-hover:border-gold-400 group-hover:bg-gold-900/10 transition-all duration-300">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-400 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Sleek S curve */}
              <path d="M8.5 8.5c1-1.5 2.5-2.5 4.5-2.5s4 1.5 4 3.5c0 3-6 3.5-6 6.5 0 2 1.5 3.5 4 3.5s4-1.5 4.5-2.5" />
              {/* Accent dot as spark */}
              <circle cx="17.5" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-display font-semibold tracking-[0.25em] text-white group-hover:text-gold-300 transition-colors duration-300">
              SPARK
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase">
              CAPITAL
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-xs font-medium tracking-wider text-zinc-300 hover:text-white transition-colors py-1 cursor-pointer"
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-cta-contact"
            onClick={() => handleNavClick('contact')}
            className={`text-xs font-mono font-medium tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'bg-gold-500 text-black border-gold-500'
                : 'bg-transparent text-white border-white/10 hover:border-gold-400/50 hover:text-gold-300'
            }`}
          >
            Institutional Access
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-medium tracking-wide py-1 border-l-2 pl-3 transition-all ${
                    activeTab === item.id
                      ? 'text-gold-400 border-gold-500 bg-gold-950/10'
                      : 'text-zinc-400 border-transparent hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-white/5 my-2" />
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full text-center text-xs font-mono font-medium tracking-wider bg-gold-500 text-black py-3 rounded-full hover:bg-gold-400 transition-colors cursor-pointer"
              >
                Institutional Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
