import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Sliders,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getPhoneLink } from '../data/config';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Home / Villa',
    cameraCount: '4 Cameras',
    cameraType: 'Full HD Dome & Bullet (Standard)',
    storageRequirement: '15 Days Recording (1TB - 2TB)',
    installationRequired: 'Yes, Full Installation & Setup',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const propertyOptions = [
    'Home / Villa',
    'Independent Shop / Showroom',
    'Office / Commercial Space',
    'Apartment / Housing Society',
    'School / Educational Institute',
    'Warehouse / Godown',
    'Factory / Industrial Plant',
    'Hospital / Clinic',
    'Other Commercial Building'
  ];

  const cameraCountOptions = [
    '1 to 2 Cameras (Compact)',
    '4 Cameras (Standard Home/Shop)',
    '8 Cameras (Medium Commercial/Villa)',
    '16 Cameras (Large Building)',
    '16+ Cameras (Enterprise/Factory)'
  ];

  const cameraTypeOptions = [
    'Full HD Dome & Bullet (Standard 1080p)',
    '5MP Ultra HD Weatherproof',
    '24/7 Full Color Night Vision (ColorVu)',
    '4K IP Network (PoE Enterprise)',
    'Smart 360° Wireless Wi-Fi Cameras',
    'Need Recommendation Based on Visit'
  ];

  const storageOptions = [
    '7 to 10 Days Recording',
    '15 to 20 Days Recording (Recommended)',
    '30+ Days Continuous Recording',
    'Motion Detection Recording Only'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile or WhatsApp number.');
      return;
    }

    const summaryText = `*CCTV Quote & Site Visit Request - RK ENTERPRISES*
━━━━━━━━━━━━━━━━━━━━
• Customer Name: ${formData.name}
• Mobile Number: ${formData.phone}
• Email: ${formData.email || 'Not provided'}
• Property Type: ${formData.propertyType}
• Camera Count: ${formData.cameraCount}
• Preferred Camera: ${formData.cameraType}
• Storage Retention: ${formData.storageRequirement}
• Installation Needed: ${formData.installationRequired}
• Area / Location: ${formData.location || 'Local'}
• Additional Notes: ${formData.message || 'Please send estimated quote and schedule a free site survey.'}
━━━━━━━━━━━━━━━━━━━━`;

    setGeneratedMessage(summaryText);
    setSubmitted(true);

    // Open WhatsApp with prefilled formatted inquiry
    const waUrl = getWhatsAppLink(summaryText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <h1 className="sr-only">Get a Free CCTV Installation Quote &amp; Site Survey — RK ENTERPRISES</h1>
      <SEO
        title="Get a CCTV Installation Quote & Site Survey"
        description="Configure your property type and camera requirements to receive a fast, customized quote and schedule a free on-site survey with RK ENTERPRISES."
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Instant Quote Request"
          badgeVariant="red"
          title="Get a Customized CCTV"
          highlightText="Cost Estimate"
          subtitle="Fill out your requirements below to receive a transparent price estimate and schedule a free, no-obligation on-site property survey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-8 bg-security-900/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-white">
                    Quote Request Ready!
                  </h3>
                  <p className="text-sm text-slate-300">
                    Your customized CCTV enquiry for <strong>{formData.cameraCount}</strong> ({formData.propertyType}) has been generated.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-security-950 border border-slate-800 text-left font-mono text-xs text-slate-300 max-w-lg mx-auto whitespace-pre-line">
                  {generatedMessage}
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    href={getWhatsAppLink(generatedMessage)}
                    variant="whatsapp"
                    size="lg"
                    icon={MessageSquare}
                  >
                    Open in WhatsApp Now
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Specifications
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-brand-red" />
                    <span>Property & Camera Specifications</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select your requirements to help our technicians prepare an accurate estimate.
                  </p>
                </div>

                {/* Grid 1: Property & Cameras */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-property-type" className="block text-xs font-semibold text-slate-300 mb-2">
                      Property Type *
                    </label>
                    <select
                      id="quote-property-type"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    >
                      {propertyOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-camera-count" className="block text-xs font-semibold text-slate-300 mb-2">
                      Number of Cameras Required *
                    </label>
                    <select
                      id="quote-camera-count"
                      name="cameraCount"
                      value={formData.cameraCount}
                      onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                      className="w-full px-4 py-3 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    >
                      {cameraCountOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Grid 2: Camera Type & Storage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-camera-type" className="block text-xs font-semibold text-slate-300 mb-2">
                      Preferred Camera Technology
                    </label>
                    <select
                      id="quote-camera-type"
                      name="cameraType"
                      value={formData.cameraType}
                      onChange={(e) => setFormData({ ...formData, cameraType: e.target.value })}
                      className="w-full px-4 py-3 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    >
                      {cameraTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-storage-requirement" className="block text-xs font-semibold text-slate-300 mb-2">
                      Recording Retention (Storage)
                    </label>
                    <select
                      id="quote-storage-requirement"
                      name="storageRequirement"
                      value={formData.storageRequirement}
                      onChange={(e) => setFormData({ ...formData, storageRequirement: e.target.value })}
                      className="w-full px-4 py-3 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    >
                      {storageOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Installation Preference */}
                <div>
                  <span className="block text-xs font-semibold text-slate-300 mb-2">
                    Installation Required?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Yes, Full Installation & Setup',
                      'No, Equipment Supply Only',
                      'Need On-site Survey First'
                    ].map((opt) => {
                      const radioId = `quote-install-${opt.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
                      return (
                        <label
                          key={opt}
                          htmlFor={radioId}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            formData.installationRequired === opt
                              ? 'bg-brand-red/10 border-brand-red text-white'
                              : 'bg-security-950 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <input
                            id={radioId}
                            type="radio"
                            name="installationRequired"
                            checked={formData.installationRequired === opt}
                            onChange={() => setFormData({ ...formData, installationRequired: opt })}
                            className="text-brand-red focus:ring-brand-red"
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <h3 className="text-sm font-bold text-white mb-4">
                    Your Contact & Location Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="quote-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="e.g. Amit Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="e.g. yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-location" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Property Location / Area
                      </label>
                      <input
                        id="quote-location"
                        name="location"
                        type="text"
                        placeholder="e.g. Sector 14, Main Market, or Landmark"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Specific Requirements or Message (Optional)
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={3}
                      placeholder="Mention any special needs (e.g. night vision color cameras near entrance, wire concealment, remote view on 2 phones)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    🔒 Zero spam. We send your estimate directly via WhatsApp or phone.
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full sm:w-auto shadow-xl shadow-brand-red/25"
                  >
                    Request a Quote & Site Survey
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Estimated Package Blueprint & Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Blueprint Overview */}
            <div className="bg-security-900/90 rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-white font-bold text-base">
                <Sliders className="w-4 h-4 text-brand-red" />
                <span>Typical System Configuration</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="text-slate-400">Selected Setup:</span>
                  <strong className="text-white">{formData.cameraCount}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="text-slate-400">Recorder Unit:</span>
                  <strong className="text-white">Compatible 4CH / 8CH / 16CH DVR/NVR</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="text-slate-400">Surveillance HDD:</span>
                  <strong className="text-white">{formData.storageRequirement.split('(')[0]}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="text-slate-400">Power Supply:</span>
                  <strong className="text-white">Centralized SMPS with Surge Protection</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="text-slate-400">Mobile Setup:</span>
                  <strong className="text-emerald-400">Included Free (Android & iOS)</strong>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-security-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                💡 <strong className="text-slate-200">RK Enterprises Promise:</strong> Our technician inspects your premises in person to calculate exact wire measurements, ensuring you never pay for unnecessary materials.
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="bg-gradient-to-br from-security-900 to-security-950 rounded-3xl border border-slate-800 p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Prefer to Discuss on Phone?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skip the form and talk directly to an installation specialist at RK ENTERPRISES:
              </p>

              <div className="space-y-2">
                <a
                  href={getPhoneLink()}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-security-800 border border-slate-700 text-white font-bold text-sm hover:border-brand-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call: {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={getWhatsAppLink("Hello RK ENTERPRISES, I need an immediate price estimate for a CCTV camera system.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-slate-950 font-extrabold text-sm hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Fast WhatsApp Quote</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
