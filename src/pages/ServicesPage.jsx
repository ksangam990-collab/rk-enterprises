import React from 'react';
import { 
  Camera, 
  Settings, 
  Wrench, 
  TrendingUp, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../data/config';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function ServicesPage() {
  const iconMap = {
    Camera,
    Settings,
    Wrench,
    TrendingUp,
    Smartphone,
    ShieldCheck
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <SEO
        title="CCTV Installation, Repair, Maintenance & Upgrades"
        description="Comprehensive surveillance services by RK ENTERPRISES: CCTV installation, DVR/NVR configuration, camera upgrades, remote mobile viewing, and free site surveys."
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Our Services"
          badgeVariant="red"
          title="Professional CCTV Services by"
          highlightText="RK ENTERPRISES"
          subtitle="From precision installation to emergency repairs, mobile viewing configuration, and system upgrades, we provide comprehensive surveillance support for homes and businesses."
        />

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Camera;
            const waServiceText = `Hello RK ENTERPRISES, I would like to inquire about your service: *${service.title}*. Please let me know the process and visit schedule.`;
            const waUrl = getWhatsAppLink(waServiceText);

            return (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col justify-between bg-security-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 hover:border-brand-red/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <Badge variant="blue" size="sm">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-brand-blue-light mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Scope of Work & Deliverables:
                    </h4>
                    {service.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Ideal for & CTAs */}
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-200">Recommended for: </strong>
                    {service.idealFor}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      to="/quote"
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Book This Service
                    </Button>

                    <Button
                      href={waUrl}
                      variant="whatsapp"
                      size="sm"
                      icon={MessageSquare}
                    >
                      Enquire on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency & Maintenance Support Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-security-900 via-security-850 to-security-900 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <Badge variant="red" size="sm" dot dotColor="bg-brand-red">
              On-Site Emergency Assistance
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              CCTV System Down or Video Not Recording?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don't leave your premises unprotected. Call our local team immediately for fast diagnostic checkups, SMPS power supply replacement, and connector repairs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm shadow-xl shadow-brand-red/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technician: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
