/**
 * Safe Image Fallback Utilities for RK ENTERPRISES
 * 
 * Provides an inline dark-themed SVG placeholder in case any external
 * photography link is offline, blocked by firewall, or fails to resolve.
 */

export const FALLBACK_CAMERA_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%" fill="none">
  <rect width="800" height="600" fill="#080c16"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.6"/>
    </pattern>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0b1120" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grid)"/>
  <circle cx="400" cy="270" r="160" fill="url(#grad)" stroke="#1e293b" stroke-width="2"/>
  <circle cx="400" cy="270" r="110" fill="#0b1120" stroke="#ef4444" stroke-width="3"/>
  <circle cx="400" cy="270" r="50" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="385" cy="255" r="14" fill="#ffffff" opacity="0.4"/>
  <circle cx="400" cy="270" r="22" fill="#ef4444"/>
  <circle cx="400" cy="270" r="7" fill="#ffffff"/>
  
  <!-- HUD elements -->
  <path d="M 280 270 L 320 270" stroke="#ef4444" stroke-width="2"/>
  <path d="M 480 270 L 520 270" stroke="#ef4444" stroke-width="2"/>
  <path d="M 400 150 L 400 190" stroke="#ef4444" stroke-width="2"/>
  <path d="M 400 350 L 400 390" stroke="#ef4444" stroke-width="2"/>
  
  <text x="400" y="470" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle" letter-spacing="3">RK ENTERPRISES</text>
  <text x="400" y="505" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="500" text-anchor="middle" letter-spacing="2">CCTV &amp; SURVEILLANCE SOLUTIONS</text>
</svg>
`)}`;

export const handleImageError = (e) => {
  if (e.target && e.target.src !== FALLBACK_CAMERA_IMAGE) {
    e.target.onerror = null;
    e.target.src = FALLBACK_CAMERA_IMAGE;
  }
};
