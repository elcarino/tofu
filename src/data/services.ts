import { Code, Smartphone, PenTool, Layout, TrendingUp, Box, Layers } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: "website-development",
    icon: Layout,
    title: "Website Development",
    shortDesc: "Fast, scalable websites built around your business goals.",
    intro: "Your website is often the first conversation a customer has with your business. TOFU designs and builds websites that load fast, look sharp on every device, and are structured to turn visitors into leads — not just digital brochures.",
    offerings: [
      "Landing Pages — focused, conversion-driven single pages for campaigns and launches",
      "Business Websites — full multi-page sites that represent your brand professionally",
      "eCommerce Stores — secure, scalable online stores built to sell",
      "Custom Web Applications — tailored tools built around your exact workflow",
      "Booking & Management Systems — scheduling, reservations, and operations in one place",
      "Membership Platforms — gated content, subscriptions, and member dashboards"
    ],
    process: [
      "Discovery & Requirements",
      "UI/UX Design",
      "Development",
      "Testing & Quality Assurance",
      "Delivery & Ongoing Support"
    ],
    cta: "Have a website project in mind? Let's talk through it."
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform apps for Android & iOS.",
    intro: "From idea to app-store launch, TOFU builds mobile apps that are fast, intuitive, and built to scale — whether you need a simple Android app or a complex cross-platform product.",
    offerings: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "Custom Business Applications"
    ],
    process: [
      "Discovery & Requirements",
      "UI/UX Design",
      "Development",
      "Testing & Quality Assurance",
      "Delivery & Ongoing Support"
    ],
    cta: "Ready to build your app? Let's discuss your idea."
  },
  {
    id: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    shortDesc: "Interfaces people enjoy using and trust.",
    intro: "Good design isn't decoration — it's how users decide whether to trust and stay with your product. TOFU designs interfaces that are clear, usable, and built around real user behavior.",
    offerings: [
      "Website UI Design",
      "Mobile App UI Design",
      "SaaS Dashboard Design",
      "Wireframing & Prototyping",
      "User Experience Optimization"
    ],
    process: [
      "Discovery & User Research",
      "Wireframing",
      "Visual Design",
      "Prototyping & Usability Testing",
      "Handoff & Developer Support"
    ],
    cta: "Want an interface your users actually enjoy? Let's design it together."
  },
  {
    id: "graphic-design",
    icon: Code, // Placeholder icon
    title: "Graphic Design",
    shortDesc: "Brand identity that makes you memorable.",
    intro: "Your brand needs to look consistent and credible everywhere it appears. TOFU creates visual identities and marketing assets that make businesses instantly recognizable.",
    offerings: [
      "Logo Design",
      "Brand Identity Design",
      "Social Media Creatives",
      "Business Cards",
      "Brochures & Flyers",
      "Marketing Materials"
    ],
    process: [
      "Brand Discovery",
      "Concept & Moodboard",
      "Design Development",
      "Revisions",
      "Final Delivery & Source Files"
    ],
    cta: "Need a brand identity that stands out? Let's build it."
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing & Local Solutions",
    shortDesc: "Get found, get reviewed, get chosen.",
    intro: "Being good at what you do isn't enough if customers can't find you. TOFU helps local and online businesses get discovered, get trusted, and get chosen — especially on Google.",
    offerings: [
      "Google Business Profile Optimization",
      "Google Business Profile Reinstatement & Suspension Recovery",
      "Local SEO Services",
      "Online Reputation Management"
    ],
    process: [
      "Audit & Analysis",
      "Strategy Development",
      "Implementation",
      "Monitoring & Optimization",
      "Reporting & Growth Planning"
    ],
    cta: "Want more local customers to find you first? Let's fix that."
  },
  {
    id: "architecture-3d",
    icon: Box,
    title: "Architecture & 3D Visualization",
    shortDesc: "Bring spaces to life before they're built.",
    intro: "TOFU helps architects, developers, and homeowners see a space before it's built — through precise drafting and photorealistic visualization.",
    offerings: [
      "AutoCAD Drafting",
      "2D Floor Plans",
      "Architectural Design",
      "Interior Design Concepts",
      "Exterior Design Concepts",
      "3D Modeling",
      "Photorealistic 3D Rendering",
      "Walkthrough Animation",
      "Landscape Design Visualization"
    ],
    process: [
      "Requirement & Site Analysis",
      "Concept Design",
      "2D/3D Development",
      "Client Review & Revisions",
      "Final Rendering & Delivery"
    ],
    cta: "Have a space to visualize? Let's bring it to life."
  },
  {
    id: "custom-solutions",
    icon: Layers,
    title: "Custom Digital Solutions",
    shortDesc: "CRM, ERP, SaaS, and automation built around you.",
    intro: "Some problems need more than off-the-shelf software. TOFU builds custom systems — from CRMs to AI-powered tools — designed entirely around how your business actually works.",
    offerings: [
      "CRM Development",
      "ERP Solutions",
      "Business Automation Systems",
      "Custom Dashboards",
      "API Integrations",
      "SaaS Development",
      "AI-Powered Solutions",
      "Custom Software Development"
    ],
    process: [
      "Discovery & Requirements",
      "System Architecture & Planning",
      "Development",
      "Testing & Quality Assurance",
      "Deployment & Ongoing Support"
    ],
    cta: "Have a workflow you wish ran itself? Let's design that system.",
    additional: "Virtual Assistant Solutions · Data Entry & Administrative Support · Presentation Design · Technical Documentation · Business Process Optimization"
  }
];
