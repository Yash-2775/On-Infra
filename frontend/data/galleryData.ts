export interface ClientBrand {
  id: string;
  name: string;
  shortName: string;
  logoImage?: string;
  highlighted?: boolean;
}

export interface GalleryProject {
  id: string;
  clientId: string;
  title: string;
  companyName: string;
  category: string;
  description: string;
  image: string;
}

export const CLIENTS_LIST: ClientBrand[] = [
  {
    id: "godrej-woods",
    name: "Godrej Woods Karjat",
    shortName: "GODREJ WOODS",
    logoImage: "/images/clients/godrej.jpg",
    highlighted: true,
  },
  {
    id: "hitech-radiators",
    name: "Hi-Tech Radiators PVT.LTD",
    shortName: "HI-TECH RADIATORS",
    logoImage: "/images/clients/Hi-tech.jpeg",
    highlighted: true,
  },
  {
    id: "neoliv",
    name: "Neoliv",
    shortName: "NEOLIV",
    logoImage: "/images/clients/neoliv.png",
    highlighted: true,
  },
  {
    id: "monteria-village",
    name: "Monteria Village",
    shortName: "MONTERIA VILLAGE",
    logoImage: "/images/clients/monteria.png",
    highlighted: true,
  },
  {
    id: "hilton",
    name: "Hilton",
    shortName: "HILTON",
    logoImage: "/images/clients/Hilton.jpeg",
    highlighted: true,
  },
  {
    id: "a1-fence",
    name: "A-1 Fence",
    shortName: "A-1 FENCE",
    logoImage: "/images/clients/A-1 Fence.jpeg",
    highlighted: true,
  },
  {
    id: "cipla",
    name: "Cipla",
    shortName: "CIPLA",
    logoImage: "/images/clients/Cipla.jpeg",
    highlighted: true,
  },
  {
    id: "dreamstate-llp",
    name: "DreamStat LLP",
    shortName: "DREAMSTAT LLP",
    logoImage: "/images/clients/DreamState LLP.jpeg",
    highlighted: true,
  },
  // { id: "alta-labs", name: "Alta Laboratories Ltd", shortName: "ALTA LABS", highlighted: false },
  // { id: "amns-india", name: "AM/NS India", shortName: "AM/NS INDIA", highlighted: false },
  // { id: "colt-cables", name: "Colt Cables Limited", shortName: "COLT CABLES", highlighted: false },
  // { id: "east-coast", name: "East Coast Constructions Limited", shortName: "EAST COAST CONSTRUCTIONS", highlighted: false },
  // { id: "grindwell-norton", name: "Grindwell - Norton", shortName: "GRINDWELL NORTON", highlighted: false },
  // { id: "hr-johnson", name: "H & R. Johnson (I.) Limited", shortName: "H & R JOHNSON", highlighted: false },
  // { id: "indo-rama", name: "Indo Rama Cements Ltd", shortName: "INDO RAMA CEMENTS", highlighted: false },
  // { id: "ispat-ind", name: "Ispat Industries Limited", shortName: "ISPAT INDUSTRIES", highlighted: false },
  // { id: "jindal-steel", name: "Jindal Stainless Steelway", shortName: "JINDAL STAINLESS", highlighted: false },
  // { id: "khopoli-mc", name: "Khopoli Municipal Council", shortName: "KHOPOLI MUNICIPAL", highlighted: false },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "godrej-boom-barrier",
    clientId: "godrej-woods",
    title: "Boom Barrier",
    companyName: "Godrej Woods Karjat",
    category: "eSSL Automatic Boom Barrier System",
    description:
      "In Godrej Woodside estate Khalapur. Total 5 Boom Barrier's of Essl has been installed. With 3 ways for uplift & Downlift 1. Push-Down button, 2. REFD card Reader 3. Manual Way.",
    image: "/images/clients/godrej/BoomBarier.jpeg",
  },
  {
    id: "godrej-bullet-cctv",
    clientId: "godrej-woods",
    title: "CCTV - CP-Plus Bullet Camera's",
    companyName: "Godrej Woods Karjat",
    category: "CP-Plus Perimeter Surveillance",
    description:
      "On Godrej Woodside estate Khalapur. Total 16 Bullet Camera's are installed in Godrej Woodside estate Khalapur.",
    image: "/images/clients/godrej/CCTV -Bullet Camera.jpeg",
  },
  {
    id: "godrej-dome-cctv",
    clientId: "godrej-woods",
    title: "CCTV - CP Plus Dome Camera's",
    companyName: "Godrej Woods Karjat",
    category: "CP-Plus Indoor Surveillance",
    description:
      "On Godrej Woodside estate Khalapur. Total 4 Dome Camera's are installed in Godrej Woodside estate Khalapur.",
    image: "/images/clients/godrej/CCTV -Dome Camera.jpeg",
  },
  // {
  //   id: "proj-cipla",
  //   clientId: "cipla",
  //   title: "Fire Safety & Cleanroom Security",
  //   companyName: "Cipla",
  //   category: "Fire Safety & Cleanroom Security",
  //   description:
  //     "Integrated addressable smoke detection fire alarm systems, cleanroom biometric access control, and IP surveillance cameras.",
  //   image: "/images/clients/Cipla.jpeg",
  // },
  // {
  //   id: "proj-hilton",
  //   clientId: "hilton",
  //   title: "Luxury Intercom & EPABX System",
  //   companyName: "Hilton",
  //   category: "Luxury Intercom & EPABX System",
  //   description:
  //     "Installed multi-extension IP-PBX intercom calling exchange, video door phone units, and 24/7 security monitoring.",
  //   image: "/images/clients/Hilton.jpeg",
  // },
  // {
  //   id: "proj-hitech",
  //   clientId: "hitech-radiators",
  //   title: "Industrial Power Grid & Access Control",
  //   companyName: "Hi-Tech Radiators PVT.LTD",
  //   category: "Industrial Power Grid & Access Control",
  //   description:
  //     "Engineered high-voltage industrial electrification, transformer load distribution, and ZKTeco biometric attendance terminals.",
  //   image: "/images/clients/Hi-tech.jpeg",
  // },
  // {
  //   id: "proj-neoliv",
  //   clientId: "neoliv",
  //   title: "3D BIM Structural Modelling",
  //   companyName: "Neoliv",
  //   category: "3D BIM Structural Modelling",
  //   description:
  //     "Delivered photorealistic 3D BIM structural modeling, CAD clash detection, and municipal sanction blueprint preparation.",
  //   image: "/images/clients/neoliv.png",
  // },
  // {
  //   id: "proj-monteria",
  //   clientId: "monteria-village",
  //   title: "Outdoor LED Videowall & Intrusion Alarm",
  //   companyName: "Monteria Village",
  //   category: "Outdoor LED Videowall & Intrusion Alarm",
  //   description:
  //     "Installed weather-proof GreenTech™ outdoor LED video display walls and PIR perimeter intrusion beam alarm systems.",
  //   image: "/images/clients/monteria.png",
  // },
  // {
  //   id: "proj-a1fence",
  //   clientId: "a1-fence",
  //   title: "Automatic Boom Barriers & Gate Automation",
  //   companyName: "A-1 Fence",
  //   category: "Automatic Boom Barriers & Gate Automation",
  //   description:
  //     "Deployed high-speed motorized boom barrier gates with ANPR license plate cameras and long-range RFID readers.",
  //   image: "/images/clients/A-1 Fence.jpeg",
  // },
  // {
  //   id: "proj-dreamstat",
  //   clientId: "dreamstate-llp",
  //   title: "Corporate Biometrics & Network Intercom",
  //   companyName: "DreamStat LLP",
  //   category: "Corporate Biometrics & Network Intercom",
  //   description:
  //     "Configured multi-factor face & fingerprint biometric time attendance systems integrated with corporate payroll software.",
  //   image: "/images/clients/DreamState LLP.jpeg",
  // },
];
