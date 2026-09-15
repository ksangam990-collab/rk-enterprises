import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TechShowcase from '../components/home/TechShowcase';
import ProcessTimeline from '../components/home/ProcessTimeline';
import UseCasesSection from '../components/home/UseCasesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CtaBanner from '../components/home/CtaBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Complete CCTV & Security Solutions for Home & Business"
        description="RK ENTERPRISES provides high-definition CCTV cameras, professional installation, DVR/NVR configuration, and responsive local support across India."
      />
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <TechShowcase />
      <ProcessTimeline />
      <UseCasesSection />
      <WhyChooseUs />
      <CtaBanner />
    </div>
  );
}
