export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "TypeScript", level: 90 },
      { name: "Redux / Toolkit", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 94 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 82 },
      { name: "Frappe / ERPNext", level: 86 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 84 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git / GitHub", level: 93 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 80 },
      { name: "Jest", level: 76 },
    ],
  },
];

export const experience = [
  {
    role: "SDE-2",
    company: "Klaimify",
    period: "Present",
    summary:
      "Building enterprise ERP applications end to end — from requirement gathering and client communication to architecture, delivery and team leadership.",
    points: [
      "Enterprise ERP applications",
      "Client communication & requirement gathering",
      "Team leadership and project ownership",
      "End-to-end delivery",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Frappe Framework", "Frontend Architecture", "Backend APIs"],
  },
  {
    role: "Full Stack Developer",
    company: "EVD Technologies",
    period: "",
    summary:
      "Delivered full stack products with realtime features, REST APIs and relational + document data models.",
    points: ["Realtime features with Socket.IO", "REST API design", "Full stack product delivery"],
    stack: ["React", "Next.js", "Node", "MongoDB", "MySQL", "Socket.IO"],
  },
  {
    role: "Frontend Developer Intern",
    company: "CredoHire",
    period: "",
    summary: "Built responsive product interfaces with a scalable state layer.",
    points: ["Responsive UI development", "State management with Redux Toolkit"],
    stack: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    role: "Senior Web Development Intern",
    company: "Nable Invent Solution",
    period: "",
    summary: "Developed component-driven interfaces and reusable UI systems.",
    points: ["Component-driven development", "Reusable UI patterns"],
    stack: ["React.js", "Redux"],
  },
];

export const projects = [
  {
    title: "Koradi Temple",
    tagline: "Complete temple booking & donation system",
    description:
      "An end-to-end booking platform handling pooja bookings, donations and payments with multiple gateway integrations and WhatsApp notifications.",
    features: ["CC Avenue integration", "Paytm payments", "WhatsApp API", "Manager POS"],
    tech: ["Next.js", "Node.js", "MySQL", "Frappe"],
    accent: "from-[oklch(0.82_0.14_195)] to-[oklch(0.72_0.15_265)]",
  },
  {
    title: "CG Tourism",
    tagline: "Tourism booking platform",
    description:
      "A state tourism booking platform for properties and packages, built on a Frappe backend with a modern Next.js storefront.",
    features: ["Property & package booking", "Admin dashboard", "Payment workflow"],
    tech: ["Next.js", "Frappe Framework"],
    accent: "from-[oklch(0.85_0.12_160)] to-[oklch(0.82_0.14_195)]",
  },
  {
    title: "E-Pension",
    tagline: "Pension bill automation",
    description:
      "Automated pension bill generation and disbursal with ACH integration, reducing manual processing across departments.",
    features: ["ACH integration", "Bill automation", "Role-based access"],
    tech: ["React.js", "Node.js", "PostgreSQL"],
    accent: "from-[oklch(0.72_0.15_265)] to-[oklch(0.82_0.14_195)]",
  },
  {
    title: "SellerPundit",
    tagline: "Multi-marketplace seller toolkit",
    description:
      "A seller operations platform syncing catalogs and orders across marketplaces with secure token-based auth.",
    features: ["eBay integration", "Walmart integration", "JWT auth", "Inventory sync"],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    accent: "from-[oklch(0.85_0.12_160)] to-[oklch(0.72_0.15_265)]",
  },
  {
    title: "Major Kalshi Classes",
    tagline: "Microservice learning platform",
    description:
      "A scalable education platform built on a microservice architecture with independent services for content, users and billing.",
    features: ["Microservices", "Service-to-service auth", "Scalable content delivery"],
    tech: ["NestJS", "MongoDB", "Next.js"],
    accent: "from-[oklch(0.82_0.14_195)] to-[oklch(0.85_0.12_160)]",
  },
  {
    title: "Taksheela",
    tagline: "Enterprise dashboard suite",
    description:
      "A data-dense dashboard product with a themed Material UI system and a predictable Redux Toolkit state layer.",
    features: ["Material UI design system", "Redux Toolkit store", "Responsive dashboards"],
    tech: ["React.js", "Material UI", "Redux Toolkit"],
    accent: "from-[oklch(0.72_0.15_265)] to-[oklch(0.85_0.12_160)]",
  },
];
