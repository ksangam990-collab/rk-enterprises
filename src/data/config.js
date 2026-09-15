/**
 * Centralized Business Configuration for RK ENTERPRISES
 * 
 * Replace placeholder values below with your actual business credentials.
 * All phone, WhatsApp, location, email, and social links are derived from this file.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  businessName: "RK ENTERPRISES",
  tagline: "Complete CCTV & Security Solutions for Homes & Businesses",
  shortDesc: "Trusted local CCTV camera seller, surveillance installer, and security solutions provider in India.",
  establishedNote: "Serving local communities with dependable surveillance installations and fast after-sales support.",

  // Contact Information (Replace placeholders when available)
  phone: "+91 98765 43210", // [ADD PHONE NUMBER]
  rawPhone: "919876543210",
  altPhone: "+91 91234 56789",
  whatsapp: "+91 98765 43210", // [ADD WHATSAPP NUMBER]
  rawWhatsapp: "919876543210", // Digits only with country code
  email: "contact@rkenterprises-cctv.in", // [ADD EMAIL]

  // Physical Location & Operational Area
  address: "Shop No. 12, Commercial Complex, Main Market Road", // [ADD FULL ADDRESS]
  city: "New Delhi", // [ADD CITY]
  state: "Delhi", // [ADD STATE]
  pincode: "110001", // [ADD PINCODE]
  serviceAreas: [
    "Residential Colonies",
    "Commercial Hubs",
    "Industrial Areas",
    "Local Markets & Shopping Complexes",
    "Nearby Towns & Suburbs"
  ],
  
  // Maps & Geolocation
  googleMapsUrl: "https://maps.google.com/?q=RK+ENTERPRISES+CCTV+Security+Solutions", // [ADD GOOGLE MAPS URL]
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11488143924!2d77.2167!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzQxLjMiTiA3N8KwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",

  // Business Operational Hours
  businessHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM", // [ADD BUSINESS HOURS]
    sunday: "Sunday: 10:00 AM – 4:00 PM (Emergency Support Available)",
    emergencySupport: "24/7 Phone & WhatsApp Assistance for Existing Installations"
  },

  // Trust Highlights & Factual Statistics (No unsupported claims)
  trustHighlights: [
    {
      title: "100% Genuine Products",
      desc: "Direct brand warranty on all cameras, DVRs & NVRs from top manufacturers."
    },
    {
      title: "Neat & Certified Wiring",
      desc: "Clean concealed and conduit casing wiring by experienced technicians."
    },
    {
      title: "Quick Local Response",
      desc: "Prompt on-site visit, rapid inspection, and same-day/next-day turnaround."
    },
    {
      title: "Free Property Survey",
      desc: "Zero-commitment site consultation to recommend the most optimal camera placements."
    }
  ],

  // Social & Web Links
  socialLinks: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#"
  }
};

/**
 * Generate a WhatsApp chat URL with sanitized digits and an encoded message
 */
export const getWhatsAppLink = (customMessage = "") => {
  const cleanNumber = (BUSINESS_CONFIG.rawWhatsapp || '').replace(/[^0-9]/g, '');
  const defaultText = `Hello RK ENTERPRISES, I am interested in CCTV security solutions for my property. Please share details and pricing.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${cleanNumber}?text=${text}`;
};

/**
 * Generate a standardized click-to-call tel: URI
 */
export const getPhoneLink = () => {
  const cleanDigits = (BUSINESS_CONFIG.rawPhone || BUSINESS_CONFIG.phone || '').replace(/[^0-9+]/g, '');
  const formatted = cleanDigits.startsWith('+') ? cleanDigits : `+${cleanDigits}`;
  return `tel:${formatted}`;
};
