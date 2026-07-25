import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cctv-camera-system",
    slug: "cctv-camera-system",
    title: "CCTV Cameras System",
    shortDescription:
      "Leading Hikvision, CP-Plus, Dahua, and Prama Hikvision CCTV Camera dealers & high-definition surveillance installation.",
    fullDescription:
      "We provide premium CCTV surveillance solutions including IP cameras, HD analog cameras, NVR/DVR setups, remote mobile monitoring, and night-vision security systems for commercial, industrial, and residential properties.",
    iconName: "ShieldCheck",
    image: "/images/services/CCTV/Dome Style Camera.png",
    features: [
      "HD & 4K IP Camera Surveillance",
      "Night Vision & Thermal Detection",
      "Remote Mobile App & Cloud Monitoring",
      "NVR & Multi-Channel Storage Integration",
    ],
    benefits: [
      "24/7 continuous perimeter protection",
      "Deterrence of unauthorized intrusions",
      "Real-time alerts & mobile playback",
    ],
    subCategories: [
      {
        id: "box-camera",
        name: "Box Camera",
        image: "/images/services/CCTV/Box Camera.png",
        description: "High-resolution traditional box CCTV camera for customized lens configurations.",
      },
      {
        id: "bullet-style-camera",
        name: "Bullet Style Camera",
        image: "/images/services/CCTV/Bullet Style Camera.png",
        description: "Long-range weatherproof bullet camera ideal for perimeter surveillance.",
      },
      {
        id: "dome-style-camera",
        name: "Dome Style Camera",
        image: "/images/services/CCTV/Dome Style Camera.png",
        description: "Discreet indoor/outdoor vandal-resistant dome surveillance camera.",
      },
      {
        id: "hidden-camera",
        name: "Hidden Camera",
        image: "/images/services/CCTV/Hidden Camera.png",
        description: "Covert surveillance camera engineered for covert security monitoring.",
      },
      {
        id: "hidden-covert-camera",
        name: "Hidden Covert Camera",
        image: "/images/services/CCTV/Hidden Covert Camera.png",
        description: "Pinhole lens hidden camera system for discreet evidence recording.",
      },
      {
        id: "infrared-camera",
        name: "Infrared Camera",
        image: "/images/services/CCTV/Infrared Camera.png",
        description: "Night vision infrared camera for 24/7 zero-light surveillance.",
      },
      {
        id: "network-camera",
        name: "Network Camera",
        image: "/images/services/CCTV/Network Camera.png",
        description: "High-bandwidth IP network camera with cloud recording and remote access.",
      },
      {
        id: "outdoor-camera",
        name: "Outdoor Camera",
        image: "/images/services/CCTV/Outdoor Camera.png",
        description: "IP67 weather-rated outdoor surveillance camera for extreme climates.",
      },
      {
        id: "professional-box-camera",
        name: "Professional Box Camera",
        image: "/images/services/CCTV/Professional Box Camera.png",
        description: "Enterprise grade box camera for traffic and industrial plant monitoring.",
      },
      {
        id: "ptz-camera",
        name: "PTZ Camera",
        image: "/images/services/CCTV/PTZ Camera.png",
        description: "Pan-Tilt-Zoom optical zoom camera with 360-degree continuous rotation.",
      },
      {
        id: "p-t-z-camera",
        name: "P-T-Z Camera (Speed Dome)",
        image: "/images/services/CCTV/P-T-Z Camera.png",
        description: "High-speed optical PTZ camera with auto-tracking smart AI.",
      },
      {
        id: "wireless-camera",
        name: "Wireless Camera",
        image: "/images/services/CCTV/Wireless Camera.png",
        description: "Wi-Fi enabled security camera with hassle-free wireless installation.",
      },
    ],
  },
  {
    id: "biometric-time-attendance",
    slug: "biometric-time-attendance",
    title: "Biometric Time Attendance System",
    shortDescription:
      "eSSL, Biomax, Matrix, and ZKTeco Biometric Time Attendance and Access Control Systems.",
    fullDescription:
      "Advanced fingerprint, facial recognition, and RFID card access control systems integrated with automated payroll and workforce management software.",
    iconName: "Users",
    image: "/images/services/Bio-Metric Attandance Sys/FA1 Attendance System.png",
    features: [
      "Fingerprint & AI Face Recognition",
      "RFID Card & PIN Access Control",
      "Payroll & Attendance Software Integration",
      "Door Interlock & Electromagnetic Locks",
    ],
    benefits: [
      "Elimination of proxy attendance",
      "Streamlined workforce management",
      "Restricted unauthorized door access",
    ],
    subCategories: [
      {
        id: "fa1-attendance-system",
        name: "FA1 Attendance System",
        image: "/images/services/Bio-Metric Attandance Sys/FA1 Attendance System.png",
        description: "High-speed facial recognition and fingerprint time attendance terminal.",
      },
      {
        id: "fa2-multi-biometric-face-card",
        name: "Multi-Biometric Face & Card Identification Terminal FA2",
        image: "/images/services/Bio-Metric Attandance Sys/Multi-Biometric-Face-and-Card-Identification-Terminal-FA2-.avif",
        description: "Dual face and RFID card verification access control terminal.",
      },
      {
        id: "zk-3000t-c-biometric-terminal",
        name: "ZK 3000T-C Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK 3000T-C Bio-metric Terminal.png",
        description: "Enterprise fingerprint & RFID access control terminal with battery backup.",
      },
      {
        id: "zk-gt100-biometric-terminal",
        name: "ZK GT100 Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK GT100 Bio-metric Terminal.png",
        description: "Compact attendance system with cloud server sync and mobile app logging.",
      },
      {
        id: "zk-gt200-biometric-terminal",
        name: "ZK GT200 Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK GT200 Bio-metric Terminal.png",
        description: "Advanced TFT screen biometric terminal for high-volume workforce entry.",
      },
      {
        id: "zk-qclear-tc-biometric-terminal",
        name: "ZK QCLEAR-TC Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK QClEAR-TC Bio-metric Terminal.png",
        description: "High-definition color display biometric attendance terminal.",
      },
      {
        id: "zk-tft500-biometric-terminal",
        name: "ZK TFT500 Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK TFT500 Bio-metric Terminal.png",
        description: "Multi-factor authentication system with built-in thermal sensor support.",
      },
      {
        id: "zk-tft900-biometric-terminal",
        name: "ZK TFT900 Biometric Terminal",
        image: "/images/services/Bio-Metric Attandance Sys/ZK TFT900 Bio-metric Terminal.png",
        description: "Premium large screen biometric access control & time tracking system.",
      },
    ],
  },
  {
    id: "epabx-phone-systems",
    slug: "epabx-phone-systems",
    title: "EPABX Phone Systems",
    shortDescription:
      "Matrix, NEC, Avaya, Crystal EPABX and Intercom Phone Systems for offices and multi-story towers.",
    fullDescription:
      "Seamless intra-office and intercom communication solutions featuring analog, digital, and IP-PBX systems for efficient business communication.",
    iconName: "PhoneCall",
    image: "/images/services/EPABX/EPABX System.jpg",
    features: [
      "IP-PBX & Hybrid Intercom Systems",
      "Multi-Extension Corporate Calling",
      "Automated Interactive Voice Response (IVR)",
      "VoIP & SIP Trunk Connectivity",
    ],
    benefits: [
      "Zero internal calling costs",
      "Enhanced business communication efficiency",
      "Scalable extension capacity for growing firms",
    ],
    subCategories: [
      {
        id: "epabx-systems",
        name: "EPABX Intercom Systems",
        image: "/images/services/EPABX/EPABX System.jpg",
        description: "Turnkey multi-line EPABX and IP intercom exchange systems.",
      },
    ],
  },
  {
    id: "video-door-phone",
    slug: "video-door-phone",
    title: "Video Door Phone System",
    shortDescription:
      "Hikvision, CP-Plus, Dahua, and Prama Video Door Phone Systems for luxury apartments and gated villas.",
    fullDescription:
      "High-definition video intercom systems allowing occupants to visually verify visitors before granting door or gate access remotely.",
    iconName: "Box",
    image: "/images/services/Video-Door/CP Plus VDP Colour Video Door Camera.png",
    features: [
      "HD Touchscreen Indoor Monitors",
      "Vandal-Proof Outdoor Cameras",
      "Mobile App Remote Unlocking",
      "Night Vision & Visitor Snapshot Memory",
    ],
    benefits: [
      "Visual visitor verification before access",
      "Enhanced residential & apartment safety",
      "Remote lock release from smartphone",
    ],
    subCategories: [
      {
        id: "cp-plus-vdp",
        name: "CP Plus VDP Colour Video Door Camera",
        image: "/images/services/Video-Door/CP Plus VDP Colour Video Door Camera.png",
        description: "HD color display video door camera kit with night vision LED support.",
      },
      {
        id: "google-nest-doorbell",
        name: "Google Nest Doorbell",
        image: "/images/services/Video-Door/Google Nest Doorbell.png",
        description: "Smart HD Wi-Fi video doorbell with intelligent package & visitor alerts.",
      },
      {
        id: "hikvision-ds-kis602",
        name: "Hikvision DS-KIS602 Modular IP Video Intercom Kit",
        image: "/images/services/Video-Door/Hikvision DS-KIS602 modular IP Video Intercom Kit (Video-Door).png",
        description: "Modular IP video door phone system with 7-inch indoor touchscreen.",
      },
      {
        id: "panasonic-vl-sa70sx",
        name: "Panasonic VL-SA70SX Video Door Phone",
        image: "/images/services/Video-Door/Panasonic VL-SA70SX Video Door Phone .png",
        description: "7-inch color LCD video intercom system with electric lock release.",
      },
      {
        id: "qubo-smart-wifi-2k",
        name: "Qubo Smart Wifi Video Doorbell Pro 2K",
        image: "/images/services/Video-Door/Qubo Smart Wifi Video Doorbell Pro 2k.png",
        description: "2K ultra-HD smart doorbell with AI person detection and two-way talk.",
      },
      {
        id: "qubo-smart-wifi-pro",
        name: "Qubo Smart Wifi Video Doorbell Pro",
        image: "/images/services/Video-Door/Qubo Smart Wifi Video Doorbell Pro.png",
        description: "Full HD smart video doorbell with cloud storage and instant chime.",
      },
      {
        id: "ring-video-doorbell-pro-2",
        name: "Ring Video Doorbell Pro 2",
        image: "/images/services/Video-Door/Ring Video Doorbell  Pro 2.png",
        description: "3D Motion Detection video doorbell with Head-to-Toe HD video view.",
      },
      {
        id: "wipro-smart-wifi-pro",
        name: "Wipro Smart Wifi Video Doorbell Pro",
        image: "/images/services/Video-Door/Wipro Smart Wifi Video Doorbell Pro .png",
        description: "Smart Wi-Fi video doorbell with night vision and mobile app access.",
      },
    ],
  },
  {
    id: "video-conferencing-systems",
    slug: "video-conferencing-systems",
    title: "Video Conferencing Systems",
    shortDescription:
      "Peoplelink, Cisco, Polycom, Logitech, and Grandstream Video Conferencing Systems for boardroom setups.",
    fullDescription:
      "Turnkey conference room AV solutions featuring PTZ cameras, omnidirectional microphone pods, interactive displays, and multi-party conferencing integration.",
    iconName: "Layers",
    image: "/images/services/Video Conferencing Sys/Logitech Rally Bar Plus System Video Conference.png",
    features: [
      "Ultra-HD 4K PTZ Camera Systems",
      "Beamforming Acoustic Microphones",
      "Wireless Presentation & Screen Sharing",
      "Zoom & Microsoft Teams Boardroom Kits",
    ],
    benefits: [
      "Seamless hybrid meeting collaboration",
      "Crystal clear audio and 4K video clarity",
      "Elimination of executive travel expenses",
    ],
    subCategories: [
      {
        id: "cisco-webex-desk-pro",
        name: "Cisco Webex Desk Pro Video Conference",
        image: "/images/services/Video Conferencing Sys/Cisco Webex Desk Pro Video Conference.png",
        description: "Premium 27-inch 4K touchscreen desktop video conferencing workstation.",
      },
      {
        id: "jabra-panacast-50",
        name: "Jabra Panacast 50 Huddle Room Kit",
        image: "/images/services/Video Conferencing Sys/Jabra Panacast 50 huddle Room Kit Video Conferencing Sys.png",
        description: "180-degree Panoramic 4K Video Bar with intelligent beamforming mic array.",
      },
      {
        id: "logitech-rally-bar-plus",
        name: "Logitech Rally Bar Plus System Video Conference",
        image: "/images/services/Video Conferencing Sys/Logitech Rally Bar Plus System Video Conference.png",
        description: "All-in-one dual-camera video bar system for medium and large conference rooms.",
      },
      {
        id: "poly-studio-x50",
        name: "Poly Studio X50 All-in-one Video Conference",
        image: "/images/services/Video Conferencing Sys/Poly Studio X50 All-in-one Video Conference.png",
        description: "Radically simple video bar supporting native cloud video services.",
      },
      {
        id: "video-conferencing-system-generic",
        name: "Video Conferencing System Kit",
        image: "/images/services/Video Conferencing Sys/Video Conferencing System.jpg",
        description: "Complete boardroom AV setup with PTZ optical zoom camera & expansion mics.",
      },
    ],
  },
  {
    id: "boom-barrier-gate",
    slug: "boom-barrier-gate",
    title: "Boom Barrier Gate",
    shortDescription:
      "eSSL, Biomax, Matrix, and ZKTeco Automatic Boom Barrier Gate Systems for toll plazas & commercial parking.",
    fullDescription:
      "High-speed automatic vehicle barriers with RFID long-range tags, Fastag integration, and automatic number plate recognition (ANPR).",
    iconName: "TrendingUp",
    image: "/images/services/Boom Barrier/Compact Push Button Control Boom Barrier .png",
    features: [
      "High-Speed Motorized Boom Arms (1.5s - 6s)",
      "Long-Range RFID Vehicle Reader",
      "ANPR License Plate Camera Integration",
      "Loop Detector Safety Sensors",
    ],
    benefits: [
      "Automated vehicle entry & exit logging",
      "Prevention of unauthorized parking access",
      "Fast traffic throughput during peak hours",
    ],
    subCategories: [
      {
        id: "compact-push-button-boom-barrier",
        name: "Compact Push Button Control Boom Barrier",
        image: "/images/services/Boom Barrier/Compact Push Button Control Boom Barrier .png",
        description: "Reliable manual and push-button controlled automatic vehicle barrier arm.",
      },
      {
        id: "led-scrolling-boom-barrier",
        name: "LED Scrolling Boom-Barrier Display",
        image: "/images/services/Boom Barrier/LED Scrolling Boom-Barrier Display .png",
        description: "Automated barrier with integrated LED message scrolling display screen.",
      },
      {
        id: "network-control-logging-boom-barrier",
        name: "Network Control & Logging Boom Barrier",
        image: "/images/services/Boom Barrier/Network Control & Logging Boom Barrier.png",
        description: "IP-networked barrier connected to central toll & security management server.",
      },
      {
        id: "solar-powered-boom-barrier",
        name: "Solar Powered Boom Barrier",
        image: "/images/services/Boom Barrier/Solar Powered Boom Barrier.png",
        description: "Eco-friendly solar powered vehicle barrier for remote highways & plazas.",
      },
      {
        id: "updated-display-card-opening-boom-barrier",
        name: "Updated Display & Card Opening Boom Barrier",
        image: "/images/services/Boom Barrier/Updated Display & Card Opening Boom Barrier.png",
        description: "RFID card swipe barrier system with real-time digital status screen.",
      },
    ],
  },
  {
    id: "intrusion-alarm-system",
    slug: "intrusion-alarm-system",
    title: "Intrusion Alarm System",
    shortDescription:
      "Hikvision, CP-Plus, Dahua, and Prama Intrusion Alarm Systems with motion sensors & auto-dialers.",
    fullDescription:
      "Smart security alarm systems utilizing PIR motion detectors, door magnetic contacts, glass break sensors, and GSM auto-dialers to alert property owners instantly.",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=800&auto=format&fit=crop",
    features: [
      "PIR Motion & Infrared Beam Sensors",
      "Door & Window Magnetic Contacts",
      "GSM Auto-Dialer & Instant SMS Notifications",
      "Loud Outdoor Siren & Strobe Lights",
    ],
    benefits: [
      "Immediate alert during break-in attempts",
      "Protection for warehouses & jewelry showrooms",
      "Remote arming/disarming via mobile phone",
    ],
  },
  {
    id: "fire-alarm-systems",
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    shortDescription:
      "Conventional & Addressable Fire Alarm Systems for industrial, commercial & residential purposes.",
    fullDescription:
      "Fire protection and smoke detection systems backed by highly qualified technicians dedicated in their effort to produce top quality fire fighting products.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    features: [
      "Addressable & Conventional Smoke Detectors",
      "Heat Sensors & Manual Call Points (MCP)",
      "Fire Alarm Control Panel (FACP) Integration",
      "Public Address & Evacuation Hooter System",
    ],
    benefits: [
      "Early smoke & fire hazard detection",
      "Compliance with Fire NOC regulatory standards",
      "Safeguards lives and industrial machinery",
    ],
  },
  {
    id: "indoor-outdoor-led-video-wall",
    slug: "indoor-outdoor-led-video-wall",
    title: "Indoor & Outdoor LED Video Wall",
    shortDescription:
      "Robust and rugged Outdoor & Indoor LED Videowalls delivering bright, high-impact visuals saving energy with GreenTech™.",
    fullDescription:
      "High-brightness, weather-resistant LED video displays for advertising, command centers, auditoriums, and retail digital signage.",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    features: [
      "Seamless Fine-Pixel Pitch Indoor LED Panels",
      "High-Brightness Weatherproof Outdoor Screens",
      "Multi-Input Video Wall Processor & Controllers",
      "Energy-Efficient GreenTech™ Power Supplies",
    ],
    benefits: [
      "High-visibility visual presentation & branding",
      "Continuous 24/7 operation reliability",
      "Custom screen dimensions and curved displays",
    ],
  },
];
