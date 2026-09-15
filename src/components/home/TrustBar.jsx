import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Clock, Building2 } from 'lucide-react';

const pillars = [
  { icon: Wrench,     title: 'Professional Installation',    subtitle: 'Neat casing, concealed wiring & zero blind spot alignment' },
  { icon: ShieldCheck,title: 'Genuine Quality Hardware',     subtitle: 'Authentic cameras, DVRs & surveillance hard drives' },
  { icon: Clock,      title: 'Fast Local Support',           subtitle: 'Prompt on-site visits and responsive troubleshooting' },
  { icon: Building2,  title: 'Residential & Commercial',     subtitle: 'Custom solutions from 2 cameras to 64+ camera systems' },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 border-y border-slate-800/80 bg-security-900/90 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-security-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors card-shimmer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-tight">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
