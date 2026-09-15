import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Shield, Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../../data/config';
import Button from '../ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile menu during render if route has changed
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Installation', path: '/installation' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-security-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40'
            : 'bg-security-950/80 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        {/* Top Emergency / Contact Alert Ribbon */}
        <div className="hidden sm:block bg-security-900 border-b border-slate-800/60 text-xs text-slate-300 py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span>Local CCTV Surveillance & Security Specialist</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Residential & Commercial Site Surveys</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                aria-label={`Call ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>Call: <strong className="text-white font-semibold">{BUSINESS_CONFIG.phone}</strong></span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={getWhatsAppLink("Hello RK ENTERPRISES, I would like to enquire about CCTV cameras.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                aria-label="WhatsApp enquiry"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="RK ENTERPRISES Home">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-security-800 via-security-900 to-black border border-slate-700/80 flex items-center justify-center shadow-lg group-hover:border-brand-red/50 transition-colors">
                <Shield className="w-6 h-6 text-brand-red transition-transform group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-red" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-sans">
                    RK <span className="text-brand-red">ENTERPRISES</span>
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                  CCTV & Security Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-security-850 border border-slate-700/70 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-security-850/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                to="/quote"
                variant="primary"
                size="sm"
                icon={ChevronRight}
                iconPosition="right"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getPhoneLink()}
                className="p-2 rounded-lg bg-security-850 border border-slate-800 text-brand-red hover:text-white"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-security-850 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated mobile backdrop + drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="lg:hidden fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Slide-down Drawer */}
            <motion.div
              key="drawer"
              className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[113px] z-30 bg-security-950/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-5 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-security-850 text-brand-red-light border border-slate-700 font-semibold'
                            : 'text-slate-200 hover:bg-security-900 hover:text-white'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                >
                  <Link
                    to="/quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-semibold bg-brand-red/10 text-brand-red-light border border-brand-red/30 flex items-center justify-between mt-2"
                  >
                    <span>Request Free Quote</span>
                    <ChevronRight className="w-4 h-4 text-brand-red" />
                  </Link>
                </motion.div>
              </nav>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <a
                  href={getPhoneLink()}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-security-850 border border-slate-700 text-white font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call: {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500">
                {BUSINESS_CONFIG.businessHours.weekdays}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
