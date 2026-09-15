import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Phone, MessageSquare, ChevronRight, Eye, CheckCircle2, Radio } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../../data/config';
import { handleImageError } from '../../utils/imageFallback';
import Button from '../ui/Button';

/* ── Animation variants ─────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ── 3D card tilt hook ───────────────────────────────────────── */
function use3DTilt() {
  const cardRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), springConfig);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { cardRef, rotateX, rotateY, onMouseMove, onMouseLeave };
}

export default function HeroSection() {
  const whatsappUrl = getWhatsAppLink("Hello RK ENTERPRISES, I would like to get a quote and schedule a site visit for CCTV installation.");
  const { cardRef, rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt();

  return (
    <section className="relative flex items-center justify-center pt-4 pb-8 lg:pt-6 lg:pb-10 overflow-hidden aurora-bg">
      {/* Background High-Tech Grid */}
      <div className="absolute inset-0 bg-security-grid opacity-30 pointer-events-none" />

      {/* Animated ambient glows */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-brand-red/8 rounded-full blur-[160px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* ── Left Column ────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-7 space-y-4 lg:space-y-4.5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Security Badge */}
            <motion.div variants={fadeUpVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-security-900 border border-slate-700/80 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-[11px] font-mono font-medium tracking-wide text-slate-300 uppercase">
                  Trusted Local CCTV &amp; Security Partner
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold tracking-tight text-white leading-[1.14]"
              variants={fadeUpVariants}
            >
              Complete CCTV &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Security Solutions
              </span>{' '}
              for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
                Home &amp; Business
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={fadeUpVariants}
            >
              <strong className="text-white">RK ENTERPRISES</strong> provides reliable CCTV cameras, high-definition surveillance systems, clean concealed wiring, and prompt on-site support to keep your premises protected 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              variants={fadeUpVariants}
            >
              <Button
                to="/quote"
                variant="primary"
                size="md"
                icon={ChevronRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-lg shadow-brand-red/25 font-bold animate-glow-pulse"
              >
                Get a Free Quote
              </Button>

              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="md"
                icon={MessageSquare}
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </Button>

              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl hover:bg-security-900 border border-transparent hover:border-slate-800 transition-colors"
                aria-label={`Call ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span>Call: <strong className="text-white">{BUSINESS_CONFIG.phone}</strong></span>
              </a>
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div
              className="pt-3.5 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-2 text-left"
              variants={fadeUpVariants}
            >
              {['Free Site Survey', 'Genuine Brand Warranty', 'Fast Local Support'].map((txt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-xs text-slate-300">{txt}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: 3D Tilt Card ─────────────────────── */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 3D Tilt wrapper */}
            <div className="perspective-800 relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="relative rounded-2xl overflow-hidden bg-security-900 border border-slate-700/80 shadow-2xl"
              >
                {/* Camera Image */}
                <div className="relative h-60 sm:h-64 lg:h-[260px] xl:h-[280px] w-full bg-slate-950 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional High-Definition CCTV Surveillance Camera"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={handleImageError}
                  />

                  {/* Scanline */}
                  <div className="scanline animate-scan" />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-security-950 via-black/20 to-transparent" />

                  {/* LIVE badge */}
                  <motion.div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-red-500/40 text-[10px] font-mono text-red-400"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                    <span className="font-bold">LIVE REC • CH-01</span>
                  </motion.div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-slate-300">
                    1080P | 60FPS | IR ON
                  </div>

                  {/* HUD Crosshair */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{ opacity: [0.35, 0.55, 0.35] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-20 h-20 border border-dashed border-white/40 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Bottom Camera Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>SYSTEM SECURE • 24/7 ONLINE</span>
                    </div>
                    <span className="text-emerald-400 font-bold">100% SIGNAL</span>
                  </div>
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="p-3 bg-security-900 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { label: 'Clarity', value: 'Full HD & 4K' },
                    { label: 'Night Vision', value: '24/7 Color' },
                    { label: 'Remote App', value: 'Free Mobile' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2 rounded-lg bg-security-950 border border-slate-800">
                      <span className="block text-slate-400 text-[10px] uppercase">{stat.label}</span>
                      <strong className="text-white font-semibold text-[11px] sm:text-xs">{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge 1 — Direct Warranty */}
              <motion.div
                className="hidden sm:flex absolute top-16 -left-3 lg:-left-5 z-20 p-2 sm:p-2.5 rounded-xl bg-security-900/95 border border-slate-700 shadow-2xl backdrop-blur-md items-center gap-2.5"
                variants={badgeVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.7 }}
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Direct Warranty</h4>
                  <p className="text-[10px] text-slate-400 leading-tight">1-3 Years On Hardware</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 — Smart Phone Alert */}
              <motion.div
                className="hidden sm:flex absolute -top-3.5 -right-2 lg:-right-4 z-20 p-2 sm:p-2.5 rounded-xl bg-security-900/95 border border-slate-700 shadow-2xl backdrop-blur-md items-center gap-2.5"
                variants={badgeVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.9 }}
                style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Smart Phone Alert</h4>
                  <p className="text-[10px] text-slate-400 leading-tight">Instant Motion Notifications</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
