import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../data/config';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'New Installation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    const text = `*New Contact Message - RK ENTERPRISES*
• Name: ${formData.name}
• Mobile: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Inquiry Type: ${formData.inquiryType}
• Message: ${formData.message}`;

    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <h1 className="sr-only">Contact RK ENTERPRISES — CCTV Sales, Installation &amp; Support in Delhi NCR</h1>
      <SEO
        title="Contact RK ENTERPRISES — CCTV Sales & Support"
        description="Call, WhatsApp, or message RK ENTERPRISES for fast CCTV installation quotes, repair visits, and security consultations in New Delhi and NCR."
      />
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionHeading
          badgeText="Contact & Support"
          badgeVariant="red"
          title="Connect with"
          highlightText="RK ENTERPRISES"
          subtitle="Get in touch for product enquiries, on-site property surveys, installation bookings, or maintenance support."
        />

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-security-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Direct Phone</h3>
              <p className="text-xs text-slate-400">Speak directly with our installation technicians.</p>
              <p className="text-base font-bold text-white pt-1">{BUSINESS_CONFIG.phone}</p>
            </div>
            <div className="pt-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red-light hover:underline"
              >
                <span>Call Now</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-security-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-emerald-400 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">WhatsApp Chat</h3>
              <p className="text-xs text-slate-400">Fast replies, price lists, and location sharing.</p>
              <p className="text-base font-bold text-emerald-400 pt-1">{BUSINESS_CONFIG.whatsapp}</p>
            </div>
            <div className="pt-4">
              <a
                href={getWhatsAppLink("Hello RK ENTERPRISES, I would like to enquire about CCTV solutions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-security-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue-light flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Email Inquiry</h3>
              <p className="text-xs text-slate-400">For corporate RFPs, tenders, and official orders.</p>
              <p className="text-xs font-semibold text-white pt-1 truncate">{BUSINESS_CONFIG.email}</p>
            </div>
            <div className="pt-4">
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-light hover:underline"
              >
                <span>Send Email</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-6 rounded-2xl bg-security-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Operating Hours</h3>
              <p className="text-xs text-slate-400">{BUSINESS_CONFIG.businessHours.weekdays}</p>
              <p className="text-xs text-amber-400/90 pt-1">{BUSINESS_CONFIG.businessHours.sunday}</p>
            </div>
            <div className="pt-4 text-[11px] text-slate-500">
              Emergency assistance available for active setups
            </div>
          </div>
        </div>

        {/* Contact Form & Location Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-security-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-xl font-bold text-white">Send an Online Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                We typically respond within 1-2 hours during operational business timings.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Formatted & Opened</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Your enquiry has been formatted and forwarded. We look forward to securing your premises.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-security-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-security-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-security-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-inquiry-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      id="contact-inquiry-type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-security-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-brand-red"
                    >
                      <option value="New CCTV Installation">New CCTV Installation</option>
                      <option value="Repair / Troubleshooting">Repair / Video Loss Troubleshooting</option>
                      <option value="System Upgrade (Analog to HD/IP)">System Upgrade</option>
                      <option value="Remote Mobile App Setup">Remote Mobile App Setup</option>
                      <option value="Bulk Hardware Purchase">Equipment Supply / Bulk Purchase</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your property location, camera count, or any specific issue you are experiencing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-security-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Direct handoff to WhatsApp / Phone
                  </span>
                  <Button type="submit" variant="primary" size="md" icon={Send}>
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Physical Address & Google Map Embed */}
          <div className="lg:col-span-5 bg-security-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span>Visit Our Office / Workshop</span>
              </div>

              <div className="p-4 rounded-xl bg-security-950 border border-slate-850 space-y-2 text-xs sm:text-sm text-slate-300">
                <strong className="text-white block text-sm">{BUSINESS_CONFIG.businessName}</strong>
                <p className="leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
                <p className="text-slate-400">
                  {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}, India
                </p>
              </div>

              {/* Map Placeholder / Embed Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-56 bg-slate-950">
                <iframe
                  title="RK ENTERPRISES Location Map"
                  src={BUSINESS_CONFIG.googleMapsEmbed}
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[85%]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-security-850 hover:bg-security-800 border border-slate-700 text-xs font-semibold text-brand-blue-light transition-colors"
              >
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
