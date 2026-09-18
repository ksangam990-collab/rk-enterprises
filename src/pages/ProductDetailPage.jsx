import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  getProductBySlug, 
  getRelatedProducts 
} from '../data/products';
import { 
  BUSINESS_CONFIG, 
  getWhatsAppLink, 
  getPhoneLink 
} from '../data/config';
import { 
  ShieldCheck, 
  Wrench, 
  Phone, 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  Eye, 
  Share2, 
  Sparkles
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/products/ProductCard';
import QuickQuoteModal from '../components/products/QuickQuoteModal';
import SEO from '../components/common/SEO';
import { handleImageError } from '../utils/imageFallback';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="py-24 px-4 text-center bg-security-950 min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-2">Product Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The requested CCTV item might have been moved or updated.</p>
        <Button to="/products" variant="primary">
          Back to Product Catalog
        </Button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);
  const waCustomText = `Hello RK ENTERPRISES, I am looking for details and best price on: *${product.name}* (Ref: ${product.slug}). Is installation available in my area?`;
  const whatsappUrl = getWhatsAppLink(waCustomText);

  const handleShare = async () => {
    // BUG FIX: Use navigator.share (Web Share API) when available for native
    // mobile sharing. Fall back to clipboard, then show a graceful alert if
    // neither is available (e.g. insecure HTTP context or old browsers).
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shortDescription,
          url: window.location.href,
        });
      } catch {
        // User cancelled share — do nothing
      }
      return;
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Clipboard write failed (e.g. permissions denied)
      }
    }
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <SEO
        title={`${product.name} — Price & Installation`}
        description={product.shortDescription || `${product.name} supplied and installed with genuine warranty by RK ENTERPRISES.`}
      />
      <div className="max-w-7xl mx-auto">
        {/* Back Link Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-security-900 border border-slate-800"
            aria-label="Share this product"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-security-900/60 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-security-950 border border-slate-800 shadow-inner group">
              <img
                src={product.image}
                alt={product.name}
                onError={handleImageError}
                className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Scanline Effect */}
              <div className="scanline animate-scan opacity-40" />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <Badge variant="red" size="md" dot dotColor="bg-brand-red">
                    {product.badge}
                  </Badge>
                )}
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-slate-300 border border-white/10">
                  {product.subType || product.category}
                </span>
              </div>

              {/* Genuine Hardware Watermark */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>100% GENUINE HARDWARE</span>
              </div>
            </div>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-security-950 border border-slate-800/90">
                <ShieldCheck className="w-4 h-4 text-brand-red mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block uppercase">Warranty</span>
                <strong className="text-xs text-white">Brand Warranty</strong>
              </div>
              <div className="p-3 rounded-xl bg-security-950 border border-slate-800/90">
                <Wrench className="w-4 h-4 text-brand-blue-light mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block uppercase">Installation</span>
                <strong className="text-xs text-white">Available On-site</strong>
              </div>
              <div className="p-3 rounded-xl bg-security-950 border border-slate-800/90">
                <Eye className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block uppercase">Mobile App</span>
                <strong className="text-xs text-white">Free Remote Setup</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Specs & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-red mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Security Equipment</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {product.name}
              </h1>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Price Banner */}
              <div className="mt-5 p-4 rounded-xl bg-security-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                    Pricing & Quotation
                  </span>
                  <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    {product.priceLabel || "Get Latest Price"}
                    <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Best Local Rates
                    </span>
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setModalOpen(true)}
                >
                  Request Price
                </Button>
              </div>

              {/* Key Features List */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Features & Advantages:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="lg"
                  icon={MessageSquare}
                  className="w-full text-slate-950 font-bold"
                >
                  WhatsApp Enquiry
                </Button>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-security-800 hover:bg-security-800 text-white font-bold text-sm border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                Call or WhatsApp RK ENTERPRISES directly for stock confirmation and immediate site visits.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications Matrix */}
        <div className="mt-12 bg-security-900/40 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
            <span>Technical Specifications Matrix</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => {
              const formattedKey = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());

              return (
                <div key={key} className="p-3.5 rounded-xl bg-security-950 border border-slate-800">
                  <span className="text-[11px] uppercase font-mono text-slate-400 block mb-1">
                    {formattedKey}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                Related Equipment & Options
              </h3>
              <Link to="/products" className="text-xs font-semibold text-brand-red-light hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  // BUG FIX: Pass the related product to the modal, not always
                  // the main product. Previously onQuickQuote={() => setModalOpen(true)}
                  // would open the modal but still show the main product's details.
                  onQuickQuote={() => setModalOpen(true)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        product={product}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
