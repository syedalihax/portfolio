export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
}

export interface ProjectItem {
  id: string;
  title: string;
  categoryLabel: string;
  isRealClient: boolean;
  clientStatusNote: string;
  liveUrl: string;
  buildDuration: string;
  summary: string;
  highlightsLabel: string;
  highlights: string[];
  secondaryHighlightsLabel?: string;
  secondaryHighlights?: string[];
  techStack: string[];
  footnote: string;
  screenshots: ProjectScreenshot[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  scopeNote: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface PricingTier {
  name: string;
  priceLabel: string;
  priceAmount: string;
  positioning: string;
  details: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const SITE_INFO = {
  name: "Syed Ali",
  title: "Software Engineer",
  experience: "1+ years of experience",
  url: "https://www.syedalihax.com",
  handle: "syedalihax",
  email: "syedalihax@gmail.com",
  phoneDisplay: "+92 318 31 79797",
  phoneHref: "tel:+923183179797",
  whatsappHref: "https://wa.me/923183179797",
  emailHref: "mailto:syedalihax@gmail.com",
  formspreeEndpoint: "https://formspree.io/f/xvkaavwv",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/syedalihax",
    ariaLabel: "Visit Syed Ali on GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syedalihax",
    ariaLabel: "Visit Syed Ali on LinkedIn",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/syedali.hax",
    ariaLabel: "Visit Syed Ali on Instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/syedalihax",
    ariaLabel: "Visit Syed Ali on Facebook",
  },
  {
    label: "Website",
    href: "https://syedalihax.com",
    ariaLabel: "Visit Syed Ali's primary website",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services & Pricing", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Websites & Landing Pages",
    description:
      "Responsive business websites, personal portfolios, product landing pages, and marketing websites structured for speed, clarity, and search readiness.",
    deliverables: [
      "Mobile-first responsive layouts across phones, tablets, and desktops",
      "Clean semantic HTML, accessibility focus states, and on-page SEO metadata",
      "Fast initial load times and straightforward deployment setup",
    ],
    scopeNote: "Final page count and integrations are confirmed before quoting.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web products and full-stack applications tailored to real workflows—from customer-facing platforms to internal management tools.",
    deliverables: [
      "Frontend interfaces paired with custom backend APIs and databases",
      "Authentication, user dashboards, and admin management panels",
      "Practical data workflows designed around everyday operators",
    ],
    scopeNote:
      "Authentication, dashboards, and admin tools are included when specified in the agreed scope.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile application development using React Native, focused on clean navigation, reliable state handling, and consistent mobile UX.",
    deliverables: [
      "Shared React Native codebase targeting Android and iOS workflows",
      "API integration, form handling, and responsive touch interfaces",
      "Custom scoping based on screen count and backend requirements",
    ],
    scopeNote: "Mobile applications are quoted based on confirmed feature scope.",
  },
];

export const TECH_GROUPS: TechGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases & Backend Platforms",
    items: ["MongoDB", "Mongoose", "SQL", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Development Tool",
    items: ["Visual Studio Code (VS Code)"],
  },
  {
    category: "Deployment Platforms",
    items: ["Vercel", "Render", "Railway"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "laptopia",
    title: "Laptopia",
    categoryLabel: "Full-Stack E-Commerce Web Application",
    isRealClient: false,
    clientStatusNote: "Concept Project · Not commissioned by a real client",
    liveUrl: "https://laptopia-p.vercel.app/",
    buildDuration: "Approx. 8 days",
    summary:
      "An electronics-store e-commerce application built as a concept product, featuring a customer-facing storefront paired with a dedicated admin management area for the store owner.",
    highlightsLabel: "Customer storefront",
    highlights: [
      "Browse electronics catalog, categories, and product specifications",
      "Filter listings and place orders directly through the storefront",
    ],
    secondaryHighlightsLabel: "Store owner admin",
    secondaryHighlights: [
      "Add, edit, and delete products, categories, and brands",
      "Upload and manage product imagery via Multer and Cloudinary",
      "Update store contact details including store name, phone, and email",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Multer", "Cloudinary"],
    footnote:
      "Live and functional for inspection. Built as a concept e-commerce application rather than a paid client commission.",
    screenshots: [
      {
        src: "/assets/aistudio/laptopia-1_c6c9f4c8.png",
        alt: "Laptopia electronics storefront homepage hero showcase",
        caption: "Storefront homepage and featured hardware hero",
        width: 1917,
        height: 1078,
      },
      {
        src: "/assets/aistudio/laptopia-2_c3ef5369.png",
        alt: "Laptopia product catalogue and category filtering view",
        caption: "Product catalogue with keyword, category, and price filters",
        width: 1917,
        height: 1078,
      },
      {
        src: "/assets/aistudio/laptopia-3_5df9fb23.png",
        alt: "Laptopia individual laptop product detail and cart controls",
        caption: "Individual product detail view and order actions",
        width: 1917,
        height: 1077,
      },
    ],
  },
  {
    id: "easyparking",
    title: "EasyParking",
    categoryLabel: "Parking Management Web Application & PWA",
    isRealClient: false,
    clientStatusNote: "Product Build · Live & Inspectable",
    liveUrl: "https://easy-parking-management.vercel.app/",
    buildDuration: "Approx. 10 days",
    summary:
      "Built to replace paper notebooks and physical registers that are hard for staff to search and maintain. EasyParking organizes members, vehicles, and payment status in one clean, text-first workspace.",
    highlightsLabel: "Operational capabilities",
    highlights: [
      "User registration and login with automatic redirect for authenticated sessions",
      "Manage parking members, join dates, vehicle counts, and registration numbers",
      "Track outstanding payment duration, member status, and payment records",
      "Installable Progressive Web App (PWA) for mobile home-screen launch",
      "Clean, text-first interface designed for non-technical parking operators",
    ],
    techStack: ["Next.js", "MongoDB", "Express.js", "React", "Node.js", "PWA"],
    footnote:
      "Live and functional for inspection. Focuses on practical record-keeping without relying on image uploads.",
    screenshots: [
      {
        src: "/assets/aistudio/easyparking-1-redesign.png",
        alt: "EasyParking public landing page introducing parking business management",
        caption: "Public landing page with product overview",
        width: 1917,
        height: 1075,
        loading: "eager",
      },
      {
        src: "/assets/aistudio/easyparking-2_2b2ac674.png",
        alt: "EasyParking authenticated operator dashboard showing collections and quick actions",
        caption: "Authenticated dashboard with collections and quick actions",
        width: 1550,
        height: 1078,
      },
      {
        src: "/assets/aistudio/easyparking-3_f3f6c710.png",
        alt: "EasyParking reports and member records table view",
        caption: "Structured member records and reporting view",
        width: 1917,
        height: 1078,
      },
    ],
  },
  {
    id: "iftikhari-hall",
    title: "Iftikhari Hall",
    categoryLabel: "Real-Client Local Business Website",
    isRealClient: true,
    clientStatusNote: "Real-Client Project · Hazara Town, Quetta, Pakistan",
    liveUrl: "https://www.iftikharihall.com/",
    buildDuration: "Approx. 3 days",
    summary:
      "Created a dedicated online presence for a local marriage hall that previously had little or no web footprint, helping families explore venue capacity, stage setups, and contact information online.",
    highlightsLabel: "Delivery & search readiness",
    highlights: [
      "Venue introduction, hall capacity overview, and event stage showcase",
      "Curated stage and decor gallery tailored for local event inquiries",
      "On-page SEO foundations including meta title, description, and Open Graph tags",
      "Configured sitemap.xml along with AEO and GEO content structure considerations",
    ],
    techStack: ["Next.js", "SEO Metadata", "Open Graph", "sitemap.xml"],
    footnote:
      "Reported by Syed Ali as appearing in Google Search after launch. Search readiness practices improve discoverability without guaranteeing specific rankings.",
    screenshots: [
      {
        src: "/assets/aistudio/iftikhari-1_4233a9ad.png",
        alt: "Iftikhari Marriage Hall homepage venue introduction and stage highlight",
        caption: "Homepage venue introduction and direct inquiry actions",
        width: 1917,
        height: 982,
      },
      {
        src: "/assets/aistudio/iftikhari-2_db793954.png",
        alt: "Iftikhari Hall stage setups and event space presentation",
        caption: "Hall and wedding stage presentation section",
        width: 1917,
        height: 1078,
      },
      {
        src: "/assets/aistudio/iftikhari-3_cb63340a.png",
        alt: "Iftikhari Hall gallery and event decor showcase",
        caption: "Categorized event decor and stage gallery",
        width: 1911,
        height: 1078,
      },
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    priceLabel: "Starting at",
    priceAmount: "$99+",
    positioning: "A simple, tightly scoped landing page or small one-page website.",
    details: [
      "Single focused page with responsive layout",
      "Clear call-to-action and contact links",
      "Basic on-page meta title and description",
    ],
  },
  {
    name: "Standard",
    priceLabel: "Starting at",
    priceAmount: "$499+",
    positioning: "A small custom business website or a defined multi-page website.",
    details: [
      "Defined multi-section or multi-page structure",
      "Responsive gallery, service details, and contact form",
      "Technical SEO metadata, sitemap, and deployment",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    priceLabel: "Starting at",
    priceAmount: "$999+",
    positioning:
      "A more advanced custom website or a carefully scoped entry-level web application.",
    details: [
      "Custom UI paired with scoped backend/API functionality",
      "Database integration or entry-level dashboard workflow",
      "Complex e-commerce, mobile apps, and large dashboards quoted separately",
    ],
  },
  {
    name: "Hourly",
    priceLabel: "Introductory rate",
    priceAmount: "$10/hr",
    positioning:
      "Small improvements, maintenance, or tasks best estimated by time.",
    details: [
      "UI refinements, responsive fixes, and feature updates",
      "Technical SEO checks and deployment assistance",
      "Clear time estimates shared before work begins",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss Idea & Requirements",
    description:
      "Share your goals, target audience, content readiness, and the problem the website or application needs to solve.",
  },
  {
    step: "02",
    title: "Agree on Scope & Price",
    description:
      "We confirm exact pages, features, revision terms, hosting responsibilities, timeline, and pricing before building.",
  },
  {
    step: "03",
    title: "Design & Develop",
    description:
      "I build the interface, backend APIs, or mobile views cleanly using maintainable, modern TypeScript and React workflows.",
  },
  {
    step: "04",
    title: "Test Across Devices",
    description:
      "Verify functionality, mobile/tablet/desktop responsiveness, keyboard accessibility, and loading performance.",
  },
  {
    step: "05",
    title: "Deploy & Hand Over",
    description:
      "Launch to your hosting platform (such as Vercel, Render, or Railway), verify live forms and links, and hand over access.",
  },
];
