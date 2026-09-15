import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <SEO
        title="Privacy Policy & Data Security"
        description="RK ENTERPRISES customer data protection and private video footage confidentiality policy."
      />
      <div className="max-w-4xl mx-auto space-y-10">
        <SectionHeading
          badgeText="Customer Privacy & Data Protection"
          badgeVariant="blue"
          title="Privacy Policy for"
          highlightText="RK ENTERPRISES"
          subtitle="How we handle your contact details, premises information, and camera credentials with absolute confidentiality."
        />

        <div className="bg-security-900/60 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8 text-sm text-slate-300 leading-relaxed">
          
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-red" />
              <span>1. Zero Access to Your Private Video Footage</span>
            </h3>
            <p>
              At <strong>{BUSINESS_CONFIG.businessName}</strong>, we respect your confidentiality. Our technicians assist in setting up your DVR, NVR, and mobile applications, but we do not store, retain, or have ongoing access to your live or recorded camera video streams.
            </p>
            <p>
              Once your system is installed and password-protected, the master administrative password is handed over exclusively to you. We encourage all clients to update default passwords upon handover.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-red" />
              <span>2. Information We Collect</span>
            </h3>
            <p>
              When you request a quote, schedule a site survey, or purchase equipment, we only collect the minimum necessary details required to deliver our service:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>Full Name and contact telephone / WhatsApp number</li>
              <li>Installation address / property location for technician dispatch</li>
              <li>Optional email address for itemized quotations and warranty invoices</li>
              <li>Hardware model serial numbers for manufacturer warranty records</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-red" />
              <span>3. How We Use Your Information</span>
            </h3>
            <p>
              Your contact information is strictly utilized for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>Communicating price estimates, site visit schedules, and quotation details</li>
              <li>Coordinating technician dispatch and installation timelines</li>
              <li>Facilitating official warranty claims with hardware manufacturers</li>
              <li>Providing requested after-sales maintenance support</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or lease your personal information to third-party telemarketers or external advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-red" />
              <span>4. Contacting Us Regarding Your Privacy</span>
            </h3>
            <p>
              If you have any questions regarding this Privacy Policy or wish to have your contact details updated in our service records, please reach out to us at:
            </p>
            <div className="p-4 rounded-xl bg-security-950 border border-slate-800 text-xs space-y-1 text-slate-400">
              <strong className="text-white block text-sm">{BUSINESS_CONFIG.businessName}</strong>
              <p>Email: {BUSINESS_CONFIG.email}</p>
              <p>Phone: {BUSINESS_CONFIG.phone}</p>
              <p>Address: {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
