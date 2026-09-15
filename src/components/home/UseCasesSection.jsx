import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { USE_CASES } from '../../data/useCases';
import { handleImageError } from '../../utils/imageFallback';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';

export default function UseCasesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-security-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Security Deployments"
          badgeVariant="blue"
          title="Tailored Surveillance for"
          highlightText="Every Environment"
          subtitle="From single-room retail counters to multi-acre factory compounds, RK ENTERPRISES delivers purpose-configured camera setups."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {USE_CASES.slice(0, 8).map((useCase, idx) => (
            <motion.div
              key={useCase.id}
              className="group relative rounded-2xl overflow-hidden bg-security-950 border border-slate-800 hover:border-brand-red/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.7)' }}
            >
              {/* Background Image */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  loading="lazy"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-security-950 via-security-950/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge variant="red" size="sm">{useCase.badge}</Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-red-light transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {useCase.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">Recommended Setup:</div>
                  <div className="text-xs font-medium text-slate-300 line-clamp-1">{useCase.recommended}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-security-900 via-security-850 to-security-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Have a unique facility or complex layout?</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              We design custom camera schematics for petrol pumps, construction sites, farmhouses, and banquets.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-security-800 hover:bg-security-750 text-white font-semibold text-xs sm:text-sm border border-slate-700 shrink-0 transition-colors"
          >
            <span>Request Custom Layout Plan</span>
            <ArrowRight className="w-4 h-4 text-brand-red" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
