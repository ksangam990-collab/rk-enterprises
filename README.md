# RK ENTERPRISES — CCTV & Security Solutions Website

A complete, modern, production-grade website for **RK ENTERPRISES**, a premier CCTV camera seller and security solutions provider in India. Built with React 19, Vite, Tailwind CSS, Lucide Icons, and Framer Motion.

---

## 🚀 Quick Start Guide

### 1. Installation
In the project directory, install all required dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Launch the local development server with instant hot module reloading:
```bash
npm run dev
```
Open your browser and navigate to the displayed localhost URL (e.g. `http://localhost:5173`).

### 3. Production Build
Generate an optimized production build in the `/dist` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## ⚙️ How to Customize Business Details

All business details, phone numbers, WhatsApp links, and physical addresses are centralized in a single configuration file:

📁 **`src/data/config.js`**

Open this file to update:
```javascript
export const BUSINESS_CONFIG = {
  businessName: "RK ENTERPRISES",
  phone: "+91 98765 43210",       // Replace with actual phone number
  rawPhone: "919876543210",       // Digits only with country code
  whatsapp: "+91 98765 43210",    // Replace with WhatsApp number
  rawWhatsapp: "919876543210",    // Digits only
  email: "contact@rkenterprises-cctv.in",
  address: "Shop No. 12, Commercial Complex, Main Market Road",
  city: "New Delhi",
  state: "Delhi",
  pincode: "110001",
  googleMapsUrl: "https://maps.google.com/?q=...",
  businessHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 4:00 PM"
  }
};
```
*Note: Any change made to `src/data/config.js` will automatically reflect across the entire website, including the header, footer, contact page, WhatsApp message templates, and floating lead buttons.*

---

## 📦 How to Add or Edit CCTV Products

Products are managed in:

📁 **`src/data/products.js`**

Each product item contains:
- `id`: Unique identifier
- `slug`: URL slug (e.g. `5mp-outdoor-bullet-camera`)
- `name`: Product title
- `category`: `cctv-cameras` | `recording-storage` | `accessories`
- `subType`: `Dome Camera`, `Bullet Camera`, `IP Camera`, `Wi-Fi Camera`, `PTZ Camera`, etc.
- `badge`: Highlight tag (e.g. `Popular`, `Best Seller`, `Color Night Vision`)
- `features`: Array of key bullet points
- `specifications`: Technical specs matrix (Resolution, Night vision range, Lens, Usage, Connectivity, Warranty)
- `priceLabel`: Kept as `"Get Latest Price"` to avoid fake pricing
- `image`: URL or local asset path

---

## 🛠️ Architecture & Website Structure

- **Home (`/`)**: High-impact hero with CCTV HUD scan animations, trust pillars, featured products, CCTV technology explainer, 4-step process timeline, use case sectors, differentiators, and free site survey CTA.
- **Products Catalog (`/products`)**: Real-time keyword search, category switching, subtype filters, and instant WhatsApp price quotation modal.
- **Product Details (`/products/:slug`)**: High-resolution gallery preview, detailed specifications matrix, night vision & resolution badges, 1-click WhatsApp inquiry, and related products.
- **Services (`/services`)**: Installation, DVR/NVR configuration, repair & maintenance (AMC), surveillance upgrades, mobile viewing setup, and on-site consultation.
- **Quote Calculator (`/quote`)**: Interactive system builder (camera count, property type, storage days, cabling preference) with instant WhatsApp specification generation and form fallback.
- **About Us (`/about`)**: Authentic local business story, workmanship principles, and service commitment.
- **Contact Us (`/contact`)**: Direct phone, WhatsApp, email, business hours, interactive inquiry form, and Google Maps embed.
- **Installation Standards (`/installation`)**: Workmanship standards, cable shielding, junction boxes, and camera angle guidelines.
- **Customer Support (`/support`)**: Quick troubleshooting guide for video loss, blurry lenses, beeping DVRs, and warranty information.
- **Privacy Policy (`/privacy-policy`)**: Customer confidentiality terms and zero-retention camera footage policy.

---

## 📱 Mobile First & Lead Generation Features

- **Floating WhatsApp Button** with pulse wave and pre-filled product inquiries.
- **Floating Call Now Button** with one-tap dialing.
- **Sticky Mobile Bottom Navigation Bar**: `Call Now` | `WhatsApp` | `Get Quote`.
- Accessible semantic HTML5 and ARIA labels.
- Structured JSON-LD metadata for Google LocalBusiness SEO ranking.
