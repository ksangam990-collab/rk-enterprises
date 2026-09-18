import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';
import { handleImageError } from '../../utils/imageFallback';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function ProductCard({ product, onQuickQuote }) {
  const waEnquiryText = `Hello RK ENTERPRISES, I am interested in: *${product.name}* (Ref: ${product.slug}). Please share the latest price and installation details.`;
  const whatsappUrl = getWhatsAppLink(waEnquiryText);

  return (
    <motion.article
      className="group relative flex flex-col bg-security-900/90 rounded-2xl border border-slate-800/80 hover:border-brand-red/40 transition-all duration-300 overflow-hidden shadow-lg"
      whileHover={{
        y: -8,
        boxShadow: '0 28px 56px -12px rgba(0,0,0,0.7), 0 0 24px -6px rgba(239,68,68,0.15)',
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      whileTap={{
        y: -4,
        boxShadow: '0 14px 28px -8px rgba(0,0,0,0.6), 0 0 16px -4px rgba(239,68,68,0.18)',
        scale: 0.99,
        transition: { duration: 0.15, ease: 'easeOut' },
      }}
    >
      {/* Top Image Container */}
      <div className="relative w-full h-52 bg-security-950 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-security-900 via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <Badge variant="red" size="sm" dot dotColor="bg-brand-red">
              {product.badge}
            </Badge>
          )}
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-slate-300 border border-white/10">
            {product.subType || product.category}
          </span>
        </div>

        {/* Live Status Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] text-emerald-400 font-mono border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>IN STOCK</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-brand-red-light transition-colors line-clamp-1">
            <Link to={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Features */}
          <ul className="mt-4 space-y-1.5">
            {product.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Action Area */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Pricing</span>
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                {product.priceLabel || 'Get Latest Price'}
                <span className="text-[10px] font-normal text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Best Rate
                </span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => onQuickQuote && onQuickQuote(product)}
              className="text-xs font-semibold text-brand-blue-light hover:text-white underline underline-offset-4 decoration-brand-blue/50"
            >
              Quick Quote
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              to={`/products/${product.slug}`}
              variant="outline"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full"
            >
              Details
            </Button>

            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="sm"
              icon={MessageSquare}
              className="w-full text-slate-950 font-bold"
              ariaLabel={`Enquire on WhatsApp about ${product.name}`}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
