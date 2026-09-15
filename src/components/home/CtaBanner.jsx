import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../../data/config';
import Button from '../ui/Button';

export default function CtaBanner() {
  const whatsappUrl = getWhatsAppLink("Hello RK ENTERPRISES, I would like to schedule a free site survey for CCTV installation.");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-security-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-security-900 via-security-850 to-security-950 border border-slate-700/80 p-8 sm:p-12 lg:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated grid & glow overlays */}
          <div className="absolute inset-0 bg-security-grid opacity-20 pointer-events-none" />
          <motion.div
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-red/12 rounded-full blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -left-10 top-0 w-64 h-64 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red-light text-xs font-mono"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <span>FREE ON-SITE PROPERTY SURVEY</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Ready to Secure Your Home or Business Premises?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              {"Don't leave your property's safety to guesswork. Get in touch with "}
              <strong>RK ENTERPRISES</strong>
              {" today for an honest, expert assessment, clear camera recommendations, and an itemized cost estimate."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <Button
                to="/quote"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-xl shadow-brand-red/25 animate-glow-pulse"
              >
                Request Free Quote &amp; Survey
              </Button>

              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                icon={MessageSquare}
              >
                Chat on WhatsApp
              </Button>

              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors"
                aria-label={`Direct Call ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Directly: <strong className="text-white">{BUSINESS_CONFIG.phone}</strong></span>
              </a>
            </motion.div>

            {/* Trust checklist */}
            <motion.div
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.42 }}
            >
              {['Zero Obligation Consultation', 'Prompt Local Visit', 'Full Demonstration on Mobile'].map((txt) => (
                <div key={txt} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{txt}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
