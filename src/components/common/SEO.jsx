import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../data/config';

const DOMAIN = 'https://rkenterprises-cctv.in';

// BUG FIX: Added typeof document guard so this component is safe
// during SSR (renderToString in entry-server.jsx). Without this,
// calling document.querySelector on the server throws a ReferenceError.
export default function SEO({ title, description }) {
  const location = useLocation();
  const canonicalUrl = `${DOMAIN}${location.pathname}`;

  useEffect(() => {
    // This block only runs in the browser (useEffect never runs server-side)
    if (typeof document === 'undefined') return;

    // ── Page title ────────────────────────────────────────────────
    const fullTitle = title
      ? `${title} | ${BUSINESS_CONFIG.businessName}`
      : `${BUSINESS_CONFIG.businessName} | Complete CCTV & Security Solutions`;

    document.title = fullTitle;

    // ── Meta description ──────────────────────────────────────────
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute('content', description);

    // ── Canonical link (per-route) ────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // ── Open Graph ────────────────────────────────────────────────
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // ── Twitter / X ───────────────────────────────────────────────
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', fullTitle);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc && description) twDesc.setAttribute('content', description);
  }, [title, description, canonicalUrl]);

  return null;
}
