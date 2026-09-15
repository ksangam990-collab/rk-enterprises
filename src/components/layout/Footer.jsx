import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-security-950 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Subtle background security grid */}
      <div className="absolute inset-0 bg-security-grid opacity-30 pointer-events-none" />

      {/* Trust & Guarantee Banner */}
      <div className="relative border-b border-slate-850 bg-security-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CONFIG.trustHighlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-security-950/50 border border-slate-800/80">
              <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-security-800 to-black border border-slate-700 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white">
                  RK <span className="text-brand-red">ENTERPRISES</span>
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                  CCTV & Security Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              RK ENTERPRISES is a dedicated local provider of high-definition CCTV surveillance, smart security cameras, biometric access, and complete wiring installations for homes, commercial shops, educational institutions, and industrial premises.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-security-900 border border-slate-800 text-xs font-semibold text-white hover:border-brand-red transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-emerald-300 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">CCTV Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/installation" className="text-slate-400 hover:text-white transition-colors">Installation Standards</Link>
              </li>
              <li>
                <Link to="/quote" className="text-slate-400 hover:text-white transition-colors">Request Free Quote</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Camera Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-2.5">
              Equipment
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">HD Dome Cameras</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Weatherproof Bullet Cameras</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">4K IP Network Cameras</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">360° Wi-Fi Smart Cameras</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Full Color Night Vision</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">DVR & NVR Recorders</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Surveillance Hard Disks</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-2.5">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white truncate">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px] text-slate-400">
                  <div>{BUSINESS_CONFIG.businessHours.weekdays}</div>
                  <div>{BUSINESS_CONFIG.businessHours.sunday}</div>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-blue-light hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <strong>{BUSINESS_CONFIG.businessName}</strong>. All rights reserved. Professional CCTV & Security Solutions.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/support" className="hover:text-slate-300 transition-colors">
              Customer Support
            </Link>
            <Link to="/installation" className="hover:text-slate-300 transition-colors">
              Installation Guidelines
            </Link>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
