import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Cable, 
  HardDrive, 
  Smartphone,
  Eye
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function InstallationPage() {
  const installationStandards = [
    {
      icon: Cable,
      title: "1. Clean & Weatherproof Cabling",
      points: [
        "Use 100% solid copper 3+1 coaxial or Cat6 Ethernet cables to prevent signal loss.",
        "Outdoor connections enclosed in sealed IP66 waterproof camera junction boxes.",
        "Neat wall routing using heavy-duty PVC casing-capping or concealed conduit pipes.",
        "Zero loose or sagging cables exposed to weather, pests, or vandalism."
      ]
    },
    {
      icon: Eye,
      title: "2. Precision Camera Angle & Height Positioning",
      points: [
        "Optimal mounting height between 8.5 to 11 feet to balance broad field-of-view with face recognition.",
        "Direct alignment over cash drawers, billing counters, and entrance gates.",
        "Avoid pointing directly into strong sunlight or streetlights to prevent lens glare.",
        "Thorough testing of night vision LEDs to ensure zero IR reflection on adjacent walls."
      ]
    },
    {
      icon: HardDrive,
      title: "3. Centralized Power & DVR Rack Setup",
      points: [
        "Installation of lockable DVR racks to prevent physical tampering or theft of the recorder.",
        "Centralized SMPS power supplies with individual channel fuse protection against surges.",
        "Integration with inverter or UPS lines for 24/7 uninterrupted recording during load shedding.",
        "Clean HDMI/VGA connection to dedicated security monitors or living room TVs."
      ]
    },
    {
      icon: Smartphone,
      title: "4. Network Hardening & Mobile App Pairing",
      points: [
        "Configuration of secure, non-default administrative passwords on DVR/NVR.",
        "Encrypted P2P cloud activation for low-latency smartphone streaming on Android & iOS.",
        "Fine-tuning motion detection zones to eliminate false alarms from passing vehicles.",
        "Hands-on demonstration showing how to zoom, rewind, and export evidence clips."
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <h1 className="sr-only">Professional CCTV Installation Standards in Delhi NCR — RK ENTERPRISES</h1>
      <SEO
        title="Installation Standards & Workmanship"
        description="Discover RK ENTERPRISES strict CCTV installation standards: 100% copper cabling, weatherproof junction boxes, conduit casing, and zero blind spots."
      />
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          badgeText="Workmanship Standards"
          badgeVariant="red"
          title="The RK ENTERPRISES"
          highlightText="Installation Standard"
          subtitle="Why our installations last longer: high-grade copper cables, weather-tight junction boxes, neat conduit casing, and zero shortcuts."
        />

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {installationStandards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div
                key={idx}
                className="bg-security-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-brand-red/30 transition-all shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{std.title}</h3>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {std.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Common Installation Mistakes We Avoid */}
        <div className="p-8 rounded-3xl bg-security-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase">
            <AlertCircle className="w-4 h-4" />
            <span>Customer Advisory</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Common Mistakes by Cheap Installers (And How We Protect You)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-security-950 border border-slate-850 space-y-2">
              <strong className="text-brand-red block font-semibold">1. Using Copper-Clad Aluminum (CCA) Cables</strong>
              <p className="text-slate-400 leading-relaxed">
                Cheap CCA cables corrode rapidly and cause signal ghosting within months. We exclusively use pure electrolytic copper cables with high braid shielding.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-security-950 border border-slate-850 space-y-2">
              <strong className="text-brand-red block font-semibold">2. Exposed Joints Without Weather Boxes</strong>
              <p className="text-slate-400 leading-relaxed">
                Taping connectors without waterproof boxes causes rain water ingress, leading to short circuits and burnt DVR channels. Every outdoor camera gets a sealed junction box.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-security-950 border border-slate-850 space-y-2">
              <strong className="text-brand-red block font-semibold">3. Standard Desktop Hard Drives</strong>
              <p className="text-slate-400 leading-relaxed">
                Installing ordinary desktop HDDs leads to disk crashes under continuous 24/7 writes. We only supply dedicated surveillance hard drives (WD Purple/SkyHawk).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Want Quality Installation for Your Property?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Book our certified CCTV technician for a professional site assessment and guaranteed clean wiring.
          </p>
          <div className="pt-2 flex justify-center">
            <Button to="/quote" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Book Certified Installation
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
