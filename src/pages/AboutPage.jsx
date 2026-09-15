import React from 'react';
import { Shield, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../data/config';
import { handleImageError } from '../utils/imageFallback';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function AboutPage() {
  const values = [
    {
      title: "Authentic Hardware Only",
      desc: "We strictly avoid counterfeit or unbranded clone cameras. Every unit installed by RK ENTERPRISES comes with a verifiable manufacturer serial number and brand warranty."
    },
    {
      title: "Clean Installation Standards",
      desc: "We treat your home or business with care. Cabling is routed neatly using conduit pipes or casing-capping, avoiding unsightly hanging wires and vulnerable connections."
    },
    {
      title: "No-Pressure Consultations",
      desc: "We recommend cameras based on your physical space and real vulnerabilities, not what earns the highest markup. If 4 cameras suffice, we will never push for 8."
    },
    {
      title: "Responsive Local Support",
      desc: "As a local business, we are accountable to our neighborhood. When you encounter a system issue or need a video backup, our technicians are just a phone call away."
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <SEO
        title="About Us — Trusted CCTV & Security Specialists"
        description="Learn how RK ENTERPRISES delivers dependable CCTV surveillance, authentic brand equipment, and neat wiring for homes and commercial establishments."
      />
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <SectionHeading
          badgeText="About RK ENTERPRISES"
          badgeVariant="red"
          title="Your Trusted Local Partner in"
          highlightText="CCTV & Security Solutions"
          subtitle="Helping homes, retailers, schools, and commercial establishments protect what matters most with dependable, high-definition surveillance."
        />

        {/* Narrative & Mission Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-security-900/60 rounded-3xl border border-slate-800 p-6 sm:p-12 shadow-2xl">
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Committed to Practical, Reliable Property Security
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>RK ENTERPRISES</strong> was established to provide local property owners with dependable CCTV camera systems, honest technical guidance, and meticulous installation. In a market often saturated with low-grade unbranded equipment and hasty wiring jobs, we take pride in delivering professional installations that stand the test of time.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you are securing a private residence, keeping a watchful eye over a busy retail counter, or deploying comprehensive multi-channel coverage across a warehouse or educational campus, our focus remains unchanged: optimal camera placement, clear resolution, and fast after-sales assistance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/quote" variant="primary" size="md">
                Schedule a Site Visit
              </Button>
              <Button href={getWhatsAppLink()} variant="whatsapp" size="md" icon={MessageSquare}>
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-security-950 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                alt="RK ENTERPRISES CCTV Security Installation"
                onError={handleImageError}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-security-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-slate-700/80 text-xs">
                <div className="flex items-center gap-2 text-brand-red font-mono font-bold mb-1">
                  <Shield className="w-4 h-4" />
                  <span>RK ENTERPRISES COMMITMENT</span>
                </div>
                <p className="text-slate-300">
                  Residential & Commercial Surveillance Solutions in India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach & Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The Principles That Guide Our Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every surveillance installation is backed by four core standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-security-900/60 border border-slate-800/80 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Support Direct Contact Card */}
        <div className="p-8 rounded-3xl bg-security-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Have questions or need consultation?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak directly with our security specialists today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-security-850 hover:bg-security-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
