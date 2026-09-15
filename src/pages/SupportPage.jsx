import React from 'react';
import { 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  AlertTriangle 
} from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneLink, getWhatsAppLink } from '../data/config';
import { FAQS } from '../data/faqs';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function SupportPage() {
  const commonIssues = [
    {
      issue: "Camera Feed Showing 'No Video' or Black Screen",
      likelyCause: "Power supply (SMPS) channel tripped, loose BNC connector, or severed cable.",
      solution: "Check if the camera's IR red LEDs glow in the dark when you cup your hands over the lens. If unlit, the power adapter or connector needs replacement. Contact us for a quick service visit."
    },
    {
      issue: "Mobile App Showing 'Offline' or 'Connecting Failed'",
      likelyCause: "The DVR/NVR is disconnected from your home or shop broadband router.",
      solution: "Verify that the Ethernet cable from the DVR to your Wi-Fi router is securely clicked into place and the LAN LEDs on the DVR are blinking. Restart your Wi-Fi router once."
    },
    {
      issue: "DVR Making Continuous Beeping Sounds",
      likelyCause: "Hard disk error, recording full, IP address conflict, or video signal lost.",
      solution: "A continuous beep is usually the DVR warning you that the hard disk is failing or has stopped recording. Do not ignore this. Call us to test hard drive health immediately."
    },
    {
      issue: "Night Vision Grainy, Dark, or Hazy",
      likelyCause: "Dust, spiderwebs on glass dome, or lens reflection against a nearby wall.",
      solution: "Gently wipe the outer glass with a clean microfiber cloth. Ensure the camera is angled slightly away from close white walls that cause infrared glare."
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <h1 className="sr-only">CCTV Support, Troubleshooting &amp; After-Sales Assistance — RK ENTERPRISES</h1>
      <SEO
        title="Customer Support & CCTV Troubleshooting"
        description="Quick diagnostics for CCTV video loss, offline mobile apps, and DVR beeps. Contact RK ENTERPRISES for technician support and warranty assistance."
      />
      {/* FAQPage structured data for Google rich results & AI answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          badgeText="Customer Support & Helpdesk"
          badgeVariant="blue"
          title="After-Sales Assistance &"
          highlightText="System Maintenance"
          subtitle="We stand behind our work. Find instant troubleshooting answers or request an on-site technician visit for quick repair."
        />

        {/* Direct Helpdesk Ribbon */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-security-900 via-security-850 to-security-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need an On-Site Technician Today?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Operating hours: {BUSINESS_CONFIG.businessHours.weekdays}. Direct phone and WhatsApp support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>

            <Button
              href={getWhatsAppLink("Hello RK ENTERPRISES, I am facing an issue with my CCTV system and need support.")}
              variant="whatsapp"
              size="md"
              icon={MessageSquare}
            >
              WhatsApp Support
            </Button>
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Common CCTV Issues & Quick Diagnostics</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Check these straightforward steps before scheduling a service visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((item, idx) => (
              <div
                key={idx}
                className="bg-security-900/70 border border-slate-800 rounded-2xl p-6 space-y-3"
              >
                <h4 className="text-base font-bold text-white flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-2" />
                  <span>{item.issue}</span>
                </h4>

                <div className="text-xs text-slate-400">
                  <strong className="text-slate-300">Common Reason: </strong>
                  {item.likelyCause}
                </div>

                <div className="pt-2 text-xs text-slate-300 bg-security-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-emerald-400 block mb-1">Recommended Action:</strong>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-blue-light" />
              <span>Frequently Asked Questions</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-security-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-2.5"
              >
                <h4 className="text-sm font-bold text-white">
                  {faq.question}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
