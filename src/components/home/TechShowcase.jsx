import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, Network, Moon, Smartphone, BellRing, HardDrive, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const technologies = [
  {
    id: 'hd-cctv', icon: Video, title: 'HD CCTV Analog',
    tagline: 'Crystal clear 1080p to 5MP video over standard coaxial cabling',
    summary: 'Traditional CCTV modernized. Transmits zero-latency uncompressed high-definition video over 3+1 copper cables. Extremely cost-effective for homes and retail stores.',
    advantages: [
      'Plug-and-play with zero network bandwidth lag',
      'Cost-effective for budgets requiring 2 to 8 cameras',
      'Long transmission distance without signal drop',
      'Upgradable using your existing coaxial cable runs',
    ],
    idealFor: 'Residences, small grocery stores, cash counters, standalone shops',
  },
  {
    id: 'ip-cctv', icon: Network, title: 'IP Network & PoE',
    tagline: 'Digital 4K surveillance powered through a single Cat6 Ethernet cable',
    summary: 'The pinnacle of modern security. IP cameras digitize video internally and stream up to 4K resolution with Power-over-Ethernet (PoE), eliminating separate power bricks.',
    advantages: [
      'Uncompromised digital 4K (8MP) resolution with sharp digital zoom',
      'Single Cat6 wire for both power and video streaming (PoE)',
      'Built-in AI analytics for human & vehicle detection',
      'Highly scalable across large premises, multiple buildings, and campuses',
    ],
    idealFor: 'Offices, warehouses, factories, schools, hospitals, luxury villas',
  },
  {
    id: 'night-vision', icon: Moon, title: 'Color Night Vision',
    tagline: 'Vivid 24/7 color recording even in zero-light environments',
    summary: 'Overcomes the limitations of grainy black-and-white infrared. Uses an F1.0 super aperture lens and warm supplemental LED lights to capture vivid true colors around the clock.',
    advantages: [
      'Captures suspect clothes, vehicle paint, and hair color accurately at night',
      'No glare or washed-out infrared reflections on vehicle license plates',
      'Warm supplemental light acts as an automatic visual deterrent to trespassers',
      'Superior clarity compared to legacy IR cameras',
    ],
    idealFor: 'Outdoor gates, parking bays, dark alleys, storefronts, perimeter walls',
  },
  {
    id: 'remote-viewing', icon: Smartphone, title: 'Remote Mobile Access',
    tagline: 'Live video and playback anywhere in the world on Android & iPhone',
    summary: 'Never wonder what\'s happening when you are traveling or at work. Secure P2P cloud connectivity lets you open live multi-camera feeds on your phone in under 2 seconds.',
    advantages: [
      'Free official mobile applications with encrypted peer-to-peer connection',
      'Instant multi-camera split screen and digital pinch-to-zoom',
      'Remote search and video clipping for easy sharing via WhatsApp or email',
      'Multi-user accounts for family members or department managers',
    ],
    idealFor: 'Busy business owners, frequent travelers, parents monitoring children',
  },
  {
    id: 'motion-detection', icon: BellRing, title: 'Smart Motion Alerts',
    tagline: 'Real-time phone notifications when movement is detected',
    summary: 'Instead of staring at hours of blank video, smart motion detection triggers automatic push notifications to your phone whenever an intruder enters a designated zone.',
    advantages: [
      'Customizable alert zones to avoid false alarms from moving trees or insects',
      'Automated scheduled arming (e.g. night hours after shop closure)',
      'Saves hard disk space by recording only when activity occurs',
      'Instant screenshot preview delivered to your phone lockscreen',
    ],
    idealFor: 'After-hours shop protection, warehouse entries, home boundary walls',
  },
  {
    id: 'surveillance-storage', icon: HardDrive, title: 'Surveillance Storage',
    tagline: 'Continuous 24/7 video retention with H.265+ smart compression',
    summary: 'Surveillance hard drives are engineered for continuous 24/7 write duty cycles without dropping video frames, backed by H.265+ encoding that doubles your archive days.',
    advantages: [
      'Specialized 24/7 hard drives (WD Purple / Seagate SkyHawk)',
      'H.265+ compression reduces storage consumption by up to 70%',
      'Configurable retention from 7 days up to 60+ days',
      'Automatic overwrite feature ensures recording never stops when disk is full',
    ],
    idealFor: 'All DVR and NVR installations requiring continuous legal evidence logs',
  },
];

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, x: 20, transition: { duration: 0.25 } },
};

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = technologies[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-security-900/50 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Surveillance Technology Explained"
          badgeVariant="blue"
          title="Understanding Modern"
          highlightText="CCTV Standards"
          subtitle="We simplify security technology so you can make informed decisions tailored to your exact property and budget."
        />

        {/* Tab Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            const isSelected = activeTab === idx;
            return (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-security-850 border border-brand-red shadow-lg shadow-brand-red/10 text-white'
                    : 'bg-security-950/70 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-security-900'
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: isSelected ? 0 : 0, scale: isSelected ? 1.1 : 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-brand-red' : 'text-slate-500'}`} />
                </motion.div>
                <span className="text-xs font-bold leading-tight line-clamp-1">{tech.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Technology Deep Dive Box */}
        <div className="bg-security-950 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-security-900 border border-slate-700 text-xs font-mono text-brand-red-light">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>TECHNOLOGY SPECIFICATION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">{current.title}</h3>
                <p className="text-sm sm:text-base font-medium text-brand-blue-light">{current.tagline}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{current.summary}</p>

                <div className="pt-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">Key Technical Advantages:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.advantages.map((adv, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-security-900/90 rounded-xl p-6 border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide border-b border-slate-800 pb-2">
                  Recommended Implementation
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-200 block mb-1">Optimal Applications:</strong>
                  {current.idealFor}
                </p>
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-xs text-slate-400 mb-3">
                    Need help deciding between HD Analog and IP Network cameras for your location?
                  </p>
                  <Link
                    to="/quote"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-security-800 hover:bg-security-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    Consult RK Enterprises Specialists
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
