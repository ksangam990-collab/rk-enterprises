import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, Sliders, Users, FileText, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const differentiators = [
  { icon: ShieldCheck, title: 'Quality CCTV Products',          desc: 'We exclusively source genuine security equipment from reputable brands, complete with verified serial numbers and direct brand warranties.' },
  { icon: Wrench,      title: 'Professional Installation',      desc: 'No loose hanging cables or sloppy drill holes. We maintain strict cabling aesthetics using proper conduit pipes, casing-capping, and weatherproof junction boxes.' },
  { icon: Clock,       title: 'Local Customer Support',         desc: "Because we operate locally, you don't wait weeks for an offshore helpline. A quick call or WhatsApp message brings on-site assistance directly to your door." },
  { icon: Sliders,     title: 'Customized Security Solutions',  desc: "We don't force one-size-fits-all bundles. We match camera focal lengths, sensor resolutions, and storage days to your physical premises and budget." },
  { icon: Users,       title: 'Residential & Commercial Expertise', desc: 'Proven track record delivering discrete 2-camera home systems up to heavy-duty 64-camera networked factory & apartment complexes.' },
  { icon: FileText,    title: 'Transparent Enquiry Process',    desc: 'Clear, itemized quotes outlining hardware, cabling, power supplies, and installation charges with zero hidden surprises or surprise bills.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-security-950 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badgeText="Why Choose Us"
          badgeVariant="red"
          title="The RK ENTERPRISES"
          highlightText="Service Commitment"
          subtitle="Honest pricing, verified brand hardware, neat wiring, and reliable local support. Here is why local homeowners and businesses choose to work with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-security-900/70 border border-slate-800/90 hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between card-shimmer"
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.6), 0 0 20px -8px rgba(239,68,68,0.15)' }}
              >
                <div>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-security-850 border border-slate-750 text-brand-red flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Verified Service Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
