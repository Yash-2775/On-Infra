export interface ClientBrand {
  id: string;
  name: string;
  shortName: string;
  highlighted?: boolean;
}

export interface GalleryProject {
  id: string;
  companyName: string;
  category: string;
  description: string;
  image: string;
}

export const CLIENTS_LIST: ClientBrand[] = [
  { id: "alta-labs", name: "Alta Laboratories Ltd", shortName: "ALTA LABS", highlighted: true },
  { id: "amns-india", name: "AM/NS India", shortName: "AM/NS INDIA", highlighted: true },
  { id: "colt-cables", name: "Colt Cables Limited", shortName: "COLT CABLES", highlighted: false },
  { id: "east-coast", name: "East Coast Constructions Limited", shortName: "EAST COAST CONSTRUCTIONS", highlighted: false },
  { id: "grindwell-norton", name: "Grindwell - Norton", shortName: "GRINDWELL NORTON", highlighted: false },
  { id: "hr-johnson", name: "H & R. Johnson (I.) Limited", shortName: "H & R JOHNSON", highlighted: true },
  { id: "indo-rama", name: "Indo Rama Cements Ltd", shortName: "INDO RAMA CEMENTS", highlighted: false },
  { id: "ispat-ind", name: "Ispat Industries Limited", shortName: "ISPAT INDUSTRIES", highlighted: false },
  { id: "jindal-steel", name: "Jindal Stainless Steelway", shortName: "JINDAL STAINLESS", highlighted: true },
  { id: "khopoli-mc", name: "Khopoli Municipal Council", shortName: "KHOPOLI MUNICIPAL", highlighted: false },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    companyName: "Alta Laboratories Ltd",
    category: "Civil Engineering & Structural Foundation",
    description:
      "Executed industrial foundation analysis, soil stabilization, and reinforced concrete structure supervision for production facilities.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-2",
    companyName: "AM/NS India",
    category: "4K CCTV & Biometric Surveillance",
    description:
      "Installed multi-channel IP CCTV cameras, ANPR automatic boom barriers, and biometric attendance systems across industrial entry gates.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-3",
    companyName: "Colt Cables Limited",
    category: "High-Voltage Power Distribution",
    description:
      "Designed and implemented high-voltage substation layouts, industrial cable distribution, and emergency backup grid connections.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-4",
    companyName: "Jindal Stainless Steelway",
    category: "3D BIM Modelling & Blueprints",
    description:
      "Delivered photorealistic 3D BIM structural modeling, CAD clash detection, and municipal approval blueprint drafting.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-5",
    companyName: "East Coast Constructions Limited",
    category: "Turnkey Site Supervision & Land Survey",
    description:
      "Conducted topographical laser land surveys, contour plotting, and physical site engineering oversight.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-6",
    companyName: "Khopoli Municipal Council",
    category: "LED Video Wall & Command Center",
    description:
      "Installed high-brightness outdoor LED video displays and command center AV equipment featuring GreenTech™ energy optimization.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
  },
];
