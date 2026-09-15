import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getPhoneLink } from '../../data/config';
import { handleImageError } from '../../utils/imageFallback';
import Button from '../ui/Button';

export default function QuickQuoteModal({ product, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    installationRequired: 'Yes',
    quantity: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle escape key & background scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Phone validation (minimum 10 digits)
    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Build pre-filled WhatsApp message with user's specific inputs
    const text = `*New Product Price Enquiry - RK ENTERPRISES*
• Product: ${product.name}
• Ref ID: ${product.id}
• Customer Name: ${formData.name || 'Interested Customer'}
• Contact Phone: ${formData.phone}
• Quantity Needed: ${formData.quantity}
• Installation Needed: ${formData.installationRequired}
• Note: ${formData.message || 'Please provide the best price quote and delivery/installation time.'}`;

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hello RK ENTERPRISES, I would like to inquire about the latest price for: *${product.name}* (ID: ${product.id}). Please share details.`;
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-security-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-security-850">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <h3 id="modal-title" className="text-base font-semibold text-white">
              Get Latest Price Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">WhatsApp Enquiry Generated!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Your enquiry for <span className="font-semibold text-white">{product.name}</span> has been formatted and opened in WhatsApp. Our team will reply shortly.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Close
                </Button>
                <Button variant="whatsapp" size="sm" onClick={handleDirectWhatsApp}>
                  Reopen WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Product mini summary */}
              <div className="flex items-center gap-4 p-3 mb-5 rounded-xl bg-security-950 border border-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={handleImageError}
                  className="w-16 h-16 object-cover rounded-lg border border-slate-800 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase font-medium text-brand-red tracking-wider">
                    {product.subType || product.category}
                  </p>
                  <h4 className="text-sm font-semibold text-white truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Official Warranty • Professional Fitting by RK Enterprises
                  </p>
                </div>
              </div>

              {/* Fast 1-Click WhatsApp option */}
              <div className="mb-5">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Instant WhatsApp Price Enquiry (1-Click)
                </button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-security-900 px-3 text-slate-500 font-medium">Or Send Custom Requirements</span>
                  </div>
                </div>
              </div>

              {/* Error announcement */}
              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-security-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="w-full px-3 py-2 bg-security-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-quantity" className="block text-xs font-medium text-slate-300 mb-1">
                      Quantity Needed
                    </label>
                    <select
                      id="modal-quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2 bg-security-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-brand-red"
                    >
                      <option value="1">1 Unit</option>
                      <option value="2-4">2 - 4 Units</option>
                      <option value="5-8">5 - 8 Units</option>
                      <option value="8+ Bulk">8+ (Bulk / Commercial)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="modal-installation" className="block text-xs font-medium text-slate-300 mb-1">
                      Installation Required?
                    </label>
                    <select
                      id="modal-installation"
                      name="installationRequired"
                      value={formData.installationRequired}
                      onChange={(e) => setFormData({ ...formData, installationRequired: e.target.value })}
                      className="w-full px-3 py-2 bg-security-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-brand-red"
                    >
                      <option value="Yes">Yes, need installation</option>
                      <option value="No, only equipment">No, supply only</option>
                      <option value="Need Site Visit First">Need Site Visit First</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-medium text-slate-300 mb-1">
                    Location / Message (Optional)
                  </label>
                  <input
                    id="modal-message"
                    name="message"
                    type="text"
                    placeholder="Your area, colony, or specific queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-security-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red" />
                    <span>Call: {BUSINESS_CONFIG.phone}</span>
                  </a>
                  <Button type="submit" variant="primary" size="sm" icon={Send}>
                    Send Enquiry
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
