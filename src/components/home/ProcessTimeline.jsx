import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Wrench, Headphones, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const steps = [
  {
    step: '01', icon: PhoneCall, title: 'Contact Us',
    desc: 'Reach out via Phone, WhatsApp, or our online quote form. Share your property type, rough camera requirement, and preferred timeline.',
    deliverable: 'Instant quote estimate & visit scheduling',
  },
  {
    step: '02', icon: MapPin, title: 'Site Assessment',
    desc: 'Our CCTV technician visits your location to analyze lighting, measure cable distances, identify blind spots, and propose optimal camera positions.',
    deliverable: 'Zero-obligation customized security blueprint',
  },
  {
    step: '03', icon: Wrench, title: 'Professional Installation',
    desc: 'Clean concealed or casing wiring, solid camera mounting, DVR/NVR network configuration, and mobile app pairing for live remote viewing.',
    deliverable: '100% operational system with full demo',
  },
  {
    step: '04', icon: Headphones, title: 'Ongoing Local Support',
    desc: 'Enjoy complete peace of mind with prompt on-site assistance, warranty claims, periodic maintenance checkups, and easy future upgrades.',
    deliverable: 'Direct support contact with our team',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-security-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Simple 4-Step Process"
          badgeVariant="red"
          title="How We Secure"
          highlightText="Your Property"
          subtitle="From initial consultation to clean installation and after-sales support, we make getting CCTV surveillance seamless and hassle-free."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-red/30 via-slate-700 to-brand-blue/30 -translate-y-12 pointer-events-none z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="relative z-10 flex flex-col bg-security-900/80 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all group card-shimmer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.6)' }}
              >
                {/* Step number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-security-950 border border-slate-700 text-brand-red flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(239,68,68,0.5)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-brand-red/60 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 flex-1">{item.desc}</p>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-1">Outcome</span>
                  <span className="text-xs font-semibold text-slate-200">{item.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button to="/quote" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
            Start Step 01 — Book a Site Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
