/**
 * prerender.mjs — Static HTML pre-renderer for RK ENTERPRISES
 *
 * Run after `vite build` and `vite build --ssr`:
 *   node prerender.mjs
 *
 * For each route it:
 *   1. Renders the React app to HTML string via StaticRouter
 *   2. Injects the rendered HTML + per-route meta tags into dist/index.html
 *   3. Writes dist/[route]/index.html
 *
 * Result: Every page has real HTML content visible to social crawlers
 * (WhatsApp, Facebook) and AI bots (GPTBot, PerplexityBot, ClaudeBot).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const DOMAIN = 'https://rkenterprises-cctv.in';
const BIZ = 'RK ENTERPRISES';

// Per-route meta data — title, description, canonical
const routes = [
  {
    url: '/',
    title: `${BIZ} | Complete CCTV & Security Solutions`,
    description: 'RK ENTERPRISES provides professional CCTV cameras, HD & IP surveillance systems, concealed wiring installation, and prompt repair services for homes, shops, offices, and businesses in Delhi NCR. Free on-site survey.',
  },
  {
    url: '/products',
    title: `CCTV Cameras, DVRs & Security Equipment | ${BIZ}`,
    description: 'Browse genuine CCTV cameras, 24/7 color night vision, IP PoE cameras, Wi-Fi 360° cameras, DVRs, and surveillance hard drives at RK ENTERPRISES, Delhi NCR.',
  },
  {
    url: '/services',
    title: `CCTV Installation, Repair & Maintenance Services | ${BIZ}`,
    description: 'Comprehensive surveillance services by RK ENTERPRISES: CCTV installation, DVR/NVR configuration, camera upgrades, remote mobile viewing, and free site surveys in Delhi NCR.',
  },
  {
    url: '/installation',
    title: `Professional CCTV Installation Standards | ${BIZ}`,
    description: 'Discover RK ENTERPRISES strict CCTV installation standards: 100% copper cabling, weatherproof junction boxes, conduit casing, and zero blind spots in Delhi NCR.',
  },
  {
    url: '/quote',
    title: `Get a Free CCTV Quote & Site Survey | ${BIZ}`,
    description: 'Configure your property type and camera requirements to receive a fast, customized quote and schedule a free on-site survey with RK ENTERPRISES in Delhi NCR.',
  },
  {
    url: '/support',
    title: `Customer Support & CCTV Troubleshooting | ${BIZ}`,
    description: 'Quick diagnostics for CCTV video loss, offline mobile apps, and DVR beeps. Contact RK ENTERPRISES for technician support and warranty assistance in Delhi NCR.',
  },
  {
    url: '/about',
    title: `About RK ENTERPRISES | Trusted CCTV Specialists Delhi NCR`,
    description: 'Learn how RK ENTERPRISES delivers dependable CCTV surveillance, authentic brand equipment, and neat wiring for homes and commercial establishments in Delhi NCR.',
  },
  {
    url: '/contact',
    title: `Contact RK ENTERPRISES | CCTV Sales & Support Delhi NCR`,
    description: 'Call, WhatsApp, or message RK ENTERPRISES for fast CCTV installation quotes, repair visits, and security consultations in New Delhi and NCR.',
  },
  {
    url: '/privacy-policy',
    title: `Privacy Policy | ${BIZ}`,
    description: 'RK ENTERPRISES customer data protection and private video footage confidentiality policy.',
  },
];

async function prerender() {
  // Load the SSR build output
  const { render } = await import('./dist/server/entry-server.js');

  // Read the client HTML template
  const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');

  for (const route of routes) {
    const canonical = `${DOMAIN}${route.url}`;

    // Render app to HTML string
    let appHtml = '';
    try {
      const result = render(route.url);
      appHtml = result.html;
    } catch (err) {
      console.warn(`  ⚠ Render error for ${route.url}:`, err.message);
    }

    // Inject rendered app HTML into the root div
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Inject per-route canonical tag
    html = html.replace(
      '<!-- canonical and og:url are set dynamically per route by SEO.jsx -->',
      `<link rel="canonical" href="${canonical}" />`
    );

    // Update og:url
    html = html.replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${canonical}$2`
    );

    // Update title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`
    );

    // Update meta description
    html = html.replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${route.description}$2`
    );

    // Update og:title
    html = html.replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${route.title}$2`
    );

    // Update og:description
    html = html.replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${route.description}$2`
    );

    // Update twitter:title
    html = html.replace(
      /(<meta property="twitter:title" content=")[^"]*(")/,
      `$1${route.title}$2`
    );

    // Update twitter:description
    html = html.replace(
      /(<meta property="twitter:description" content=")[^"]*(")/,
      `$1${route.description}$2`
    );

    // Write to dist/client/[route]/index.html
    const outDir = route.url === '/'
      ? toAbsolute('dist/client')
      : toAbsolute(`dist/client${route.url}`);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, html);
    console.log(`  ✓ pre-rendered: ${route.url} → ${path.relative(__dirname, outFile)}`);
  }

  console.log('\n🚀 Pre-rendering complete. Social crawlers and AI bots will now see real HTML content.');
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
