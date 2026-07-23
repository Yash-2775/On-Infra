import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "civil-engineering",
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortDescription:
      "End-to-end civil engineering solutions for commercial, industrial, and infrastructure developments.",
    fullDescription:
      "Our civil engineering department specializes in structural integrity, foundation design, and site preparation. We execute projects adhering strictly to national building codes and safety regulations while maintaining optimal cost efficiency.",
    iconName: "HardHat",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    features: [
      "Structural Foundation Analysis",
      "Reinforced Concrete & Steel Design",
      "Site Grading & Soil Stabilization",
      "Material Compliance & Testing Supervision",
    ],
    benefits: [
      "Maximum durability & seismic resilience",
      "Regulatory & municipal approval compliance",
      "Optimized material usage reducing cost overruns",
    ],
  },
  {
    id: "electrical-engineering",
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    shortDescription:
      "Comprehensive power distribution, wiring, and high-voltage grid solutions.",
    fullDescription:
      "We design and implement robust electrical layouts, sub-station connections, industrial electrification, and backup power grids engineered for safe and uninterrupted operations.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    features: [
      "High & Low Voltage Power Distribution",
      "Industrial Load & Transformer Calculations",
      "Lighting & Surge Protection Systems",
      "Energy Efficiency Audits",
    ],
    benefits: [
      "Enhanced operational safety standards",
      "Lower energy consumption costs",
      "Scalable infrastructure for future power expansion",
    ],
  },
  {
    id: "3d-modelling",
    slug: "3d-modelling",
    title: "3D Modelling & BIM",
    shortDescription:
      "Advanced 3D structural modeling, Building Information Modeling (BIM), and spatial visualization.",
    fullDescription:
      "Visualize structural and utility layouts before breaking ground. Our 3D BIM models prevent spatial clashes and facilitate seamless cross-disciplinary coordination.",
    iconName: "Box",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    features: [
      "3D Architectural & Structural CAD Modeling",
      "BIM Clash Detection & Resolution",
      "3D Photorealistic Rendering",
      "Virtual Project Walkthroughs",
    ],
    benefits: [
      "Early detection of design conflicts",
      "Accurate material estimation",
      "Clear visual reference for stakeholders & contractors",
    ],
  },
  {
    id: "structural-design",
    slug: "structural-design",
    title: "Structural Design",
    shortDescription:
      "Precision structural calculations and framework design for maximum resilience.",
    fullDescription:
      "Our structural engineers utilize advanced finite element analysis to design load-bearing frameworks capable of enduring heavy loads and environmental stress.",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    features: [
      "Load Bearing & Deflection Analysis",
      "Seismic & Wind Load Engineering",
      "Retrofitting & Retro-analysis of Existing Structures",
      "Steel & Concrete Structural Detailing",
    ],
    benefits: [
      "Guaranteed structural longevity",
      "Compliance with IS codes and safety standards",
      "Optimized structural member sizing",
    ],
  },
  {
    id: "infrastructure-planning",
    slug: "infrastructure-planning",
    title: "Infrastructure Planning",
    shortDescription:
      "Strategic layout planning for roads, drainage, utilities, and township development.",
    fullDescription:
      "We deliver sustainable urban and industrial infrastructure plans, combining land use optimization, storm water drainage, and utility networks.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    features: [
      "Roadway & Transportation Network Planning",
      "Storm Water & Sewerage System Layouts",
      "Utility Routing (Water, Electrical, Telecom)",
      "Environmental Impact Assessment Support",
    ],
    benefits: [
      "Streamlined regional connectivity",
      "Long-term flood prevention and drainage control",
      "Sustainable civic & industrial growth",
    ],
  },
  {
    id: "industrial-consultancy",
    slug: "industrial-consultancy",
    title: "Industrial Consultancy",
    shortDescription:
      "Expert technical advice for industrial plant design, equipment layout, and safety management.",
    fullDescription:
      "From manufacturing facility setup to warehouse optimization, our industrial consultancy services guide clients through every phase of plant engineering.",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    features: [
      "Factory Workflow & Layout Engineering",
      "Heavy Machinery Foundation Specs",
      "Industrial Hazard & Safety Compliance",
      "Process Optimization & Expansion Feasibility",
    ],
    benefits: [
      "Maximized manufacturing throughput",
      "Reduced operational risk and hazards",
      "Tailored advice for heavy machinery integration",
    ],
  },
  {
    id: "site-supervision",
    slug: "site-supervision",
    title: "Site Supervision",
    shortDescription:
      "On-site technical oversight, quality control, and contractor execution monitoring.",
    fullDescription:
      "Our site engineers maintain a strict physical presence on-site to ensure drawings are implemented flawlessly, materials meet specs, and timelines are honored.",
    iconName: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    features: [
      "Daily Construction Supervision",
      "Quality Assurance & Material Inspections",
      "Workforce & Contractor Coordination",
      "Daily Progress Logging & Milestone Verification",
    ],
    benefits: [
      "Zero compromise on build quality",
      "Prevention of costly site errors and rework",
      "Transparent reporting to project owners",
    ],
  },
  {
    id: "survey",
    slug: "survey",
    title: "Land & Site Survey",
    shortDescription:
      "Topographical, boundary, and contour surveys using modern laser instruments.",
    fullDescription:
      "Precise site measurements form the bedrock of any construction project. We provide high-precision land survey maps and contour data.",
    iconName: "MapPin",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=800&auto=format&fit=crop",
    features: [
      "Topographical Land Mapping",
      "Boundary & Cadastral Verification",
      "Contour & Elevation Elevation Plots",
      "GPS & Total Station Precision Surveys",
    ],
    benefits: [
      "Accurate boundary definitions",
      "Elimination of land dispute ambiguities",
      "Reliable baseline data for architects and civil engineers",
    ],
  },
  {
    id: "engineering-drawings",
    slug: "engineering-drawings",
    title: "Engineering Drawings",
    shortDescription:
      "Detailed 2D CAD drafting, structural blueprints, and MEP schematics.",
    fullDescription:
      "We prepare thorough engineering blueprints including architectural layouts, structural rebar schedules, and mechanical/electrical/plumbing (MEP) schematics.",
    iconName: "FileText",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    features: [
      "2D Architectural & Structural AutoCAD Drawings",
      "MEP Blueprint Preparation",
      "As-Built Documentation",
      "Municipal Approval Submission Drawings",
    ],
    benefits: [
      "Clear blueprints for construction crews",
      "Fast municipal sanction approval",
      "Standardized documentation for facility management",
    ],
  },
  {
    id: "project-execution",
    slug: "project-execution",
    title: "Project Execution",
    shortDescription:
      "Turnkey project management and execution from site preparation to final handover.",
    fullDescription:
      "We take full accountability for delivering civil and infrastructure projects on time, managing procurement, scheduling, contractor control, and final commissioning.",
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=800&auto=format&fit=crop",
    features: [
      "Turnkey Project Delivery",
      "Timeline & Resource Scheduling",
      "Vendor & Subcontractor Management",
      "Final Commissioning & Handover Verification",
    ],
    benefits: [
      "Single point of responsibility for site execution",
      "Strict adherence to project budgets & milestones",
      "Seamless transition from blueprint to finished structure",
    ],
  },
];
