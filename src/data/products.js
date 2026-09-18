/**
 * Centralized Products Catalog for RK ENTERPRISES
 * 
 * Includes CCTV Cameras, Recording & Storage, and Accessories.
 * Prices use "Get Latest Price" as requested, avoiding fake pricing.
 */

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "cctv-cameras", name: "CCTV Cameras" },
  { id: "recording-storage", name: "Recording & Storage" },
  { id: "accessories", name: "Accessories & Cabling" },
];

export const CAMERA_SUBTYPES = [
  "All Types",
  "Dome Camera",
  "Bullet Camera",
  "IP Camera",
  "Wi-Fi Camera",
  "PTZ Camera",
  "Color Night Vision",
  "Outdoor Camera",
  "Indoor Camera"
];

export const PRODUCTS = [
  // --- CCTV CAMERAS ---
  {
    id: "dome-cam-2mp-full-hd",
    slug: "dome-camera-2mp-full-hd",
    name: "2MP Full HD Indoor Dome Security Camera",
    category: "cctv-cameras",
    subType: "Dome Camera",
    badge: "Popular for Homes & Shops",
    shortDescription: "Compact high-definition dome camera designed for ceiling installations in retail shops, offices, and homes.",
    fullDescription: "The 2MP Full HD Dome Camera provides crystal-clear 1080p surveillance in a tamper-resistant dome housing. Featuring advanced IR night vision up to 20 meters, smart motion sensing, and a discreet profile, it is the ideal choice for indoor monitoring above cash counters, reception areas, and living rooms.",
    features: [
      "1080p Full HD (1920 x 1080) high-clarity sensor",
      "Smart IR Night Vision up to 20m with auto-cut filter",
      "Wide-angle 2.8mm / 3.6mm fixed lens for maximum room coverage",
      "Discreet vandal-resistant compact dome casing",
      "Digital Wide Dynamic Range (DWDR) for balanced lighting",
      "Compatible with all standard HD-TVI, AHD, CVI, and CVBS DVRs"
    ],
    specifications: {
      resolution: "2.0 Megapixel (1080p Full HD)",
      nightVision: "Infrared Night Vision up to 20m (Auto IR-Cut)",
      lens: "3.6mm M12 Lens (approx. 82° viewing angle)",
      usage: "Indoor / Covered Porch",
      connectivity: "BNC Video Output (Coaxial Cable 3+1)",
      powerSupply: "12V DC ± 10%",
      warranty: "1 to 2 Years Manufacturer Warranty",
      installation: "Professional On-site Installation Available"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bullet-cam-5mp-outdoor",
    slug: "bullet-camera-5mp-outdoor-weatherproof",
    name: "5MP Ultra HD Weatherproof Bullet Camera",
    category: "cctv-cameras",
    subType: "Bullet Camera",
    badge: "Best Seller Outdoor",
    shortDescription: "Rugged metal bullet camera with IP67 weatherproof housing and long-distance night vision for gates and perimeters.",
    fullDescription: "Engineered for harsh outdoor weather conditions including heavy rain, dust, and intense sunlight, this 5MP bullet camera captures high-resolution video enabling clear vehicle number plate and face identification. Equipped with EXIR array LEDs providing visible illumination up to 30 meters.",
    features: [
      "5 Megapixel Ultra HD resolution for fine detailing",
      "IP67 Weatherproof solid metal alloy body",
      "EXIR 2.0 advanced night vision up to 30 meters",
      "Long-distance transmission over coaxial cable",
      "Smart motion detection with false alarm reduction",
      "Adjustable 3-axis bracket for flexible wall/pole mounting"
    ],
    specifications: {
      resolution: "5.0 Megapixel Ultra HD (2560 x 1944)",
      nightVision: "EXIR Infrared up to 30 meters in 0 Lux darkness",
      lens: "3.6mm or 6.0mm focal length options",
      usage: "Outdoor & Indoor (IP67 Rated Weatherproof)",
      connectivity: "BNC High-Definition Coaxial",
      powerSupply: "12V DC, Max 4.2W",
      warranty: "2 Years Brand Warranty",
      installation: "Wall & Ceiling Pole Installation Supported"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "colorvu-night-vision-camera",
    slug: "full-color-night-vision-security-camera",
    name: "24/7 Full Color Night Vision Surveillance Camera",
    category: "cctv-cameras",
    subType: "Color Night Vision",
    badge: "24/7 Color Technology",
    shortDescription: "Captures vivid full-color video even in pitch-black darkness with built-in warm auxiliary lighting.",
    fullDescription: "Say goodbye to grainy black-and-white night footage. This camera uses an advanced F1.0 super-aperture lens and ultra-sensitive sensor to reproduce accurate daytime-like colors 24 hours a day. Essential for identifying suspect clothing colors, vehicle colors, and accurate evidence.",
    features: [
      "24/7 Full-Color imaging with zero monochrome fallback",
      "F1.0 super aperture captures 4x more light than standard lenses",
      "Soft warm auxiliary lighting up to 20m for pitch-black scenarios",
      "True 120 dB WDR technology for clear imaging against strong backlight",
      "Durable weatherproof construction for exterior installation",
      "Audio over coaxial support with built-in high-fidelity microphone"
    ],
    specifications: {
      resolution: "2MP / 3MP / 5MP Full HD Sensor Variants",
      nightVision: "Full Color Night Vision with Warm LED Supplement (20m)",
      lens: "2.8mm / 3.6mm Large Aperture F1.0",
      usage: "Outdoor & Indoor (IP67 Grade)",
      connectivity: "HD Analog / Coaxial with Audio-over-Coax",
      powerSupply: "12V DC",
      warranty: "2 Years Comprehensive Brand Warranty",
      installation: "Complete Wiring & DVR Setup Available"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ip-poe-4k-camera",
    slug: "ip-poe-4k-network-security-camera",
    name: "4K Ultra HD PoE IP Network Security Camera",
    category: "cctv-cameras",
    subType: "IP Camera",
    badge: "High-End Commercial",
    shortDescription: "Enterprise-grade digital network camera powered by single Ethernet cable (PoE) with smart AI human & vehicle detection.",
    fullDescription: "Designed for modern commercial buildings, factories, hospitals, and high-end residences. IP PoE technology transmits both high-bandwidth 4K video data and electric power over a single Cat6 Ethernet cable, eliminating separate power adapters and guaranteeing zero analog signal degradation.",
    features: [
      "True 4K (8 Megapixel) resolution (3840 x 2160 pixels)",
      "Power over Ethernet (PoE 802.3af) for clean single-cable setup",
      "Smart AI motion classification: Human & Vehicle filtering",
      "H.265+ high-efficiency video compression saves up to 75% storage",
      "Built-in MicroSD card slot up to 256GB for edge backup",
      "ONVIF compliant for seamless integration with third-party NVRs"
    ],
    specifications: {
      resolution: "8MP 4K Ultra HD (3840 x 2160 at 20fps)",
      nightVision: "Smart IR matrix up to 40 meters",
      lens: "4mm Fixed Iris / Optional Varifocal Motorized Lens",
      usage: "Indoor & Outdoor (IP67, IK10 Vandal-Resistant)",
      connectivity: "RJ-45 10/100M self-adaptive Ethernet port (PoE)",
      powerSupply: "PoE (802.3af) or 12V DC",
      warranty: "2 to 3 Years Brand Warranty",
      installation: "Network Cabling, Patching & NVR Configuration by RK Enterprises"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wifi-smart-ptz-indoor-camera",
    slug: "smart-wifi-360-degree-pan-tilt-camera",
    name: "Smart 360° Wi-Fi Pan-Tilt Camera with 2-Way Audio",
    category: "cctv-cameras",
    subType: "Wi-Fi Camera",
    badge: "Home & Baby Monitoring",
    shortDescription: "Standalone wireless camera with 360-degree remote smartphone control, two-way intercom, and instant mobile alerts.",
    fullDescription: "An all-in-one wireless surveillance solution ideal for apartments, elderly care, baby monitoring, and small grocery shops. Connects directly to your home or shop Wi-Fi network without requiring a DVR box. Allows you to talk to visitors or family through your smartphone app from anywhere in the world.",
    features: [
      "Full 360° horizontal rotation and 90° vertical tilt control",
      "Crystal clear 2-Way audio talk with noise-canceling mic & speaker",
      "Instant push notifications on your Android or iPhone",
      "Supports MicroSD card recording up to 256GB with cloud backup option",
      "Human motion tracking that automatically follows movement",
      "Privacy shutter mode to disable lens when you are at home"
    ],
    specifications: {
      resolution: "3MP / 2K Super HD",
      nightVision: "Infrared Night Vision up to 10 meters",
      lens: "Wide Angle 3.6mm lens with 360° pan coverage",
      usage: "Indoor Desktop, Wall, or Ceiling Mount",
      connectivity: "Wi-Fi 2.4GHz IEEE 802.11 b/g/n",
      powerSupply: "5V Micro USB / Type-C Adapter",
      warranty: "1 Year Replacement Warranty",
      installation: "Quick 10-Minute Setup (Assistance Provided)"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ptz-optical-zoom-speed-dome",
    slug: "outdoor-ptz-speed-dome-optical-zoom-camera",
    name: "High-Speed Outdoor PTZ Camera with 25x Optical Zoom",
    category: "cctv-cameras",
    subType: "PTZ Camera",
    badge: "Industrial & Perimeter",
    shortDescription: "Professional heavy-duty pan-tilt-zoom camera with powerful 25x optical zoom and 100m laser night vision for factories and open yards.",
    fullDescription: "Built for massive spaces such as manufacturing factories, warehouse loading bays, educational campuses, and farmhouses. Allows the operator to remotely pan 360° continuously, tilt 90°, and optically zoom in on license plates and faces over 100 meters away without any pixelation.",
    features: [
      "Continuous 360° endless pan and 90° auto-flip tilt",
      "25x Optical Zoom + 16x Digital Zoom mechanism",
      "Laser IR illumination reach up to 100+ meters in darkness",
      "Preset patrol tours and auto-tracking capabilities",
      "Industrial IP66 weatherproof housing with lightning protection",
      "Supports joystick controller and mobile app PTZ steering"
    ],
    specifications: {
      resolution: "4MP / 5MP Full HD 60fps",
      nightVision: "Smart High-Power Laser IR up to 100m",
      lens: "4.8mm to 120mm Motorized Optical Zoom",
      usage: "Outdoor Commercial, Industrial & Campus Grounds",
      connectivity: "IP Network PoE+ / RS485 / BNC options",
      powerSupply: "12V DC / 24V AC / PoE+ (802.3at)",
      warranty: "2 Years Brand Warranty",
      installation: "Heavy-Duty Pole/Corner Mount Setup by RK Enterprises"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=800&q=80",
  },

  // --- RECORDING & STORAGE ---
  {
    id: "hd-dvr-8-channel",
    slug: "8-channel-full-hd-dvr-recorder",
    name: "8-Channel H.265+ Smart HD DVR Video Recorder",
    category: "recording-storage",
    subType: "DVR",
    badge: "Standard System Core",
    shortDescription: "High-performance 8-channel digital video recorder with HDMI/VGA output and free mobile app for remote live view.",
    fullDescription: "The backbone of reliable analog and HD CCTV setups. Connect up to 8 security cameras simultaneously with smooth real-time playback. Powered by H.265+ video encoding to double your recording days on standard hard drives, and bundled with seamless smartphone streaming on Android and iOS.",
    features: [
      "Supports 8 HD cameras (TVI/AHD/CVI/CVBS) + 2 additional IP cameras",
      "H.265+ video compression extends hard disk storage capacity",
      "Full HD 1080p and 4K HDMI video output for monitors and TVs",
      "Smart motion detection alerts pushed directly to your phone",
      "1 SATA interface supporting up to 10TB surveillance hard drives",
      "Easy backup via USB pen drive or external hard drive"
    ],
    specifications: {
      channels: "8 Video Channels + 1 Audio Channel",
      videoOutput: "1x HDMI (up to 4K), 1x VGA (1080p)",
      compression: "H.265+ / H.265 / H.264+ / H.264",
      storageInterface: "1 SATA port (supports up to 10TB HDD)",
      remoteAccess: "Dedicated Free Mobile App (Android / iOS) & PC CMS",
      powerSupply: "12V DC 2A Power Adapter Included",
      warranty: "2 Years Manufacturer Warranty",
      installation: "Complete Configuration, Port Setup & App Pairing Included"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nvr-16-channel-4k-poe",
    slug: "16-channel-4k-poe-network-video-recorder",
    name: "16-Channel 4K Ultra HD PoE NVR Network Recorder",
    category: "recording-storage",
    subType: "NVR",
    badge: "Commercial Grade",
    shortDescription: "Enterprise 16-channel NVR with built-in PoE ports, dual SATA bays, and advanced AI face and vehicle analytics.",
    fullDescription: "Engineered for medium to large installations including schools, hospitals, housing complexes, and office buildings. Features 16 dedicated plug-and-play PoE network ports, allowing IP cameras to connect directly without requiring external power switches. Dual hard drive bays ensure weeks of continuous archive retention.",
    features: [
      "16 Independent PoE network interfaces for plug-and-play IP camera link",
      "Up to 8MP/12MP 4K live view, recording and synchronized playback",
      "2 SATA interfaces supporting dual hard drives up to 20TB total",
      "Supports AI perimeter defense and smart search by person or vehicle",
      "Dual streaming for smooth remote viewing over mobile networks",
      "Rack-mountable heavy-duty metal chassis"
    ],
    specifications: {
      channels: "16 IP Camera Channels",
      poePorts: "16x RJ-45 10/100 Mbps PoE interfaces",
      bandwidth: "160 Mbps Incoming / 160 Mbps Outgoing bandwidth",
      storageInterface: "2 SATA Interfaces (Up to 10TB capacity per disk)",
      displayOutput: "1x 4K HDMI, 1x VGA independent display",
      warranty: "2 Years Brand Warranty",
      installation: "Rack Installation, IP Addressing & Remote App Setup"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "surveillance-hard-drive-2tb-4tb",
    slug: "24-7-surveillance-hard-drive-storage",
    name: "Surveillance Dedicated Hard Disk Drive (1TB / 2TB / 4TB)",
    category: "recording-storage",
    subType: "Hard Disk",
    badge: "24/7 Heavy Duty",
    shortDescription: "Specialized 24/7 surveillance-rated hard drives engineered to prevent frame loss and endure continuous video recording.",
    fullDescription: "Never use standard desktop computer hard drives for CCTV systems. Surveillance-grade drives (such as WD Purple and Seagate SkyHawk) are engineered specifically to withstand continuous write workloads at elevated temperatures, ensuring that critical security evidence is never lost due to disk failure.",
    features: [
      "Tuned for write-intensive, low bit-rate, high stream-count workloads",
      "AllFrame / ImagePerfect firmware minimizes video frame dropping",
      "Engineered for 24x7 operational reliability (1 Million Hours MTBF)",
      "Low power consumption and reduced thermal heat generation",
      "Available capacities: 1TB, 2TB, 4TB, and 6TB options",
      "3-Year direct manufacturer replacement warranty"
    ],
    specifications: {
      capacity: "1TB / 2TB / 4TB / 6TB Options",
      formFactor: "3.5-inch Internal SATA 6 Gb/s",
      workloadRating: "Up to 180 TB/year workload rating",
      cache: "64MB to 256MB High-Speed Cache",
      compatibility: "Tested with all major DVR and NVR brands",
      warranty: "3 Years Official Brand Warranty",
      installation: "Pre-installed and formatted inside your DVR/NVR"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
  },

  // --- ACCESSORIES ---
  {
    id: "cctv-3plus1-coaxial-cable",
    slug: "copper-cctv-3plus1-cable-roll",
    name: "Pure Copper 3+1 Heavy-Duty CCTV Coaxial Cable (90m / 180m)",
    category: "accessories",
    subType: "CCTV Cable",
    badge: "Pure Copper Conductor",
    shortDescription: "High-grade shielded video coaxial cable with 3 integrated insulated power wires for crystal-clear distortion-free video.",
    fullDescription: "High quality cabling is the foundation of clear CCTV video without ghosting, hum bars, or signal attenuation. Our 3+1 pure copper cables are flame retardant, weather-shielded, and ensure smooth power delivery over long runs up to 100+ meters.",
    features: [
      "Solid pure electrolytic copper center conductor",
      "High braid density aluminum/copper alloy shielding against RF interference",
      "3 color-coded power and audio cores bundled in a durable outer PVC jacket",
      "Weather-resistant, rodent-resistant, and flame-retardant outer sheath",
      "Available in standard 90-meter and 180-meter bundle drums"
    ],
    specifications: {
      conductor: "Solid Pure Copper (BC)",
      composition: "1 Coaxial Core + 3 Stranded Power Wires",
      shielding: "Bonded Aluminum Foil + Braid Shielding",
      length: "90 Meters / 180 Meters Drum Roll",
      warranty: "Quality Tested Against Breakage & Signal Drop",
      installation: "Concealed Pipe or Casing-Caping Routing Available"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smps-power-supply-8ch",
    slug: "centralized-8-channel-cctv-smps-power-supply",
    name: "8-Channel Centralized CCTV SMPS Power Supply (12V 10A)",
    category: "accessories",
    subType: "SMPS",
    badge: "Surge Protected",
    shortDescription: "Centralized regulated power supply with individual PTC fuse protection and surge protection for up to 8 cameras.",
    fullDescription: "Eliminate messy multi-plug setups with a centralized, lockable metal-cased SMPS. Protects expensive security cameras against voltage spikes, lightning surges, short circuits, and overload conditions commonly experienced in Indian electrical grids.",
    features: [
      "Regulated 12V DC output with adjustable voltage pot (11.5V - 13.5V)",
      "Individual auto-resetting PTC fuse protection on each channel",
      "Built-in EMI filter reduces video interference and noise bars",
      "Sturdy ventilated metal enclosure with key lock mechanism",
      "LED indicators for incoming AC power and outgoing channel status"
    ],
    specifications: {
      channels: "8 Output Channels",
      outputVoltage: "12V DC, Total current 10 Amps",
      inputVoltage: "180V - 260V AC 50Hz",
      protection: "Overvoltage, Short Circuit & Overload Auto-Recovery",
      enclosure: "Perforated Metal Wall-Mount Box",
      warranty: "1 Year Replacement Warranty"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "industrial-poe-switch-8port",
    slug: "8-port-gigabit-poe-network-switch",
    name: "8-Port Fast/Gigabit PoE Switch for IP Cameras",
    category: "accessories",
    subType: "PoE Switch",
    badge: "For IP Camera Systems",
    shortDescription: "High-efficiency Power-over-Ethernet switch delivering continuous power and high-speed data up to 250 meters in CCTV mode.",
    fullDescription: "Connect and power your IP cameras with zero fuss. This PoE switch features extend mode which transmits video and power over Cat6 cable up to 250 meters, perfect for perimeter cameras placed far from the main control room.",
    features: [
      "8x 10/100 Mbps PoE Ports + 2x Gigabit Uplink Ports",
      "Supports IEEE 802.3af/at with up to 30W per port (120W total budget)",
      "One-click CCTV/Extend mode extends transmission up to 250 meters",
      "Port isolation (VLAN) to prevent broadcast storms and optimize stream traffic",
      "Lightning & surge protection up to 6KV on all Ethernet ports"
    ],
    specifications: {
      ports: "8 PoE Ports + 2 Uplink Ethernet Ports",
      standard: "IEEE 802.3af / IEEE 802.3at",
      powerBudget: "120 Watts Total PoE Power",
      casing: "Compact Metal Desktop/Wall-mount Housing",
      warranty: "2 Years Brand Warranty",
      installation: "Configured by RK Enterprises for Your IP Setup"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "surveillance-monitor-led-22inch",
    slug: "dedicated-cctv-surveillance-monitor",
    name: "21.5-inch / 24-inch Full HD Dedicated Surveillance Monitor",
    category: "accessories",
    subType: "CCTV Monitor",
    badge: "Continuous 24/7 Display",
    shortDescription: "Anti-glare wide-viewing LED monitor built for continuous 24/7 live CCTV monitoring without image burn-in.",
    fullDescription: "Unlike standard computer monitors, surveillance-grade monitors are engineered to display static multi-camera split grids 24 hours a day without image retention or backlight degradation. Includes both HDMI and VGA inputs for seamless connection to any DVR or NVR.",
    features: [
      "1080p Full HD (1920x1080) crystal clear display",
      "Wide 178° viewing angle for clear visibility from any position in the room",
      "Dual HDMI & VGA video input ports",
      "VESA wall-mount compatible with desktop tilt stand included",
      "Flicker-free backlight and low blue-light eye protection",
      "Built-in stereo audio speakers for cameras with microphone input"
    ],
    specifications: {
      screenSize: "21.5 inch / 23.8 inch Options",
      resolution: "1920 x 1080 at 60Hz/75Hz",
      aspectRatio: "16:9 Wide Screen",
      inputs: "1x HDMI, 1x VGA, 1x Audio In",
      mounting: "Standard VESA 75x75mm or 100x100mm",
      warranty: "3 Years Brand Warranty",
      installation: "Wall Mount Bracket & Cable Hookup Available"
    },
    priceLabel: "Get Latest Price",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
  }
];

export const getProductBySlug = (slug) => {
  if (!slug) return null;
  const normalized = String(slug).trim().toLowerCase().replace(/\/+$/, '');
  return PRODUCTS.find(p => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized);
};

export const getRelatedProducts = (currentProductId, category, limit = 3) => {
  return PRODUCTS.filter(p => p.id !== currentProductId && p.category === category).slice(0, limit);
};
