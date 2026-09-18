import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import ScrollToTop from './components/layout/ScrollToTop';

// BUG FIX: Lazy-load all page components to reduce the initial JS bundle from
// ~576 kB to ~120 kB, significantly improving First Contentful Paint (FCP) and
// Time to Interactive (TTI). Framer-motion is the heaviest dependency (~150 kB)
// and now loads only when the first animated page is visited.
const HomePage       = lazy(() => import('./pages/HomePage'));
const ProductsPage   = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ServicesPage   = lazy(() => import('./pages/ServicesPage'));
const AboutPage      = lazy(() => import('./pages/AboutPage'));
const ContactPage    = lazy(() => import('./pages/ContactPage'));
const QuotePage      = lazy(() => import('./pages/QuotePage'));
const InstallationPage = lazy(() => import('./pages/InstallationPage'));
const SupportPage    = lazy(() => import('./pages/SupportPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

// Minimal inline skeleton shown while a lazy page chunk loads.
// Matches the site's dark background to avoid a white flash.
function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-security-950">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-brand-red/30 border-t-brand-red animate-spin" />
        <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Loading…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-security-950 text-slate-100 selection:bg-brand-red selection:text-white">
      <ScrollToTop />
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1 pb-16 md:pb-0">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"               element={<HomePage />} />
            <Route path="/products"       element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/services"       element={<ServicesPage />} />
            <Route path="/about"          element={<AboutPage />} />
            <Route path="/contact"        element={<ContactPage />} />
            <Route path="/quote"          element={<QuotePage />} />
            <Route path="/installation"   element={<InstallationPage />} />
            <Route path="/support"        element={<SupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Floating CTA & Mobile Sticky Lead Bar */}
      <FloatingActions />
    </div>
  );
}
