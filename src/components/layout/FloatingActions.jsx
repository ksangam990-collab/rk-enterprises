import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../../data/config';

export default function FloatingActions() {
  const defaultWaText = `Hello RK ENTERPRISES, I would like to inquire about CCTV cameras, installation, and latest prices.`;
  const whatsappUrl = getWhatsAppLink(defaultWaText);
  const phoneUrl = getPhoneLink();

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <aside aria-label="Quick contact buttons" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* Call Action Button */}
        <a
          href={phoneUrl}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-security-900/95 hover:bg-security-850 text-white border border-slate-700/80 hover:border-brand-red shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md text-xs"
          aria-label={`Call RK ENTERPRISES at ${BUSINESS_CONFIG.phone}`}
        >
          <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-200">{BUSINESS_CONFIG.phone}</span>
        </a>

        {/* WhatsApp Action Button with Pulsing Wave */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-0.5 text-xs"
          aria-label="Chat on WhatsApp with RK ENTERPRISES"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-60" />
          <MessageSquare className="w-4 h-4 fill-current shrink-0" />
          <span className="font-extrabold tracking-wide">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Lead Generation Bar */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-security-950/95 backdrop-blur-xl border-t border-slate-800 p-2 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={phoneUrl}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-security-900 border border-slate-800 text-white active:bg-security-850"
            aria-label="Call RK ENTERPRISES"
          >
            <Phone className="w-4 h-4 text-brand-red mb-0.5" />
            <span className="text-[11px] font-bold">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-slate-950 font-extrabold active:bg-[#20bd5a]"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
            <span className="text-[11px] font-extrabold">WhatsApp</span>
          </a>

          {/* Get Quote Button */}
          <Link
            to="/quote"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold"
            aria-label="Get a Free Quote"
          >
            <Calculator className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold">Get Quote</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
