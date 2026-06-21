import { Service, CaseStudy, TeamMember, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Custom Full-Stack & Secure WordPress Systems",
    description: "Architecting lightning-fast, secure, and SEO-optimized web systems tailored to business scale. From custom headless architectures to enterprise-level high-performance WordPress builds.",
    icon: "Globe",
    category: "engineering",
    features: [
      "Headless CMS & Custom React/Vite builds",
      "High-Performance Custom WordPress development",
      "Responsive UI & Fluid UX Design Patterns",
      "Advanced Database Architecture & API Orchestrations",
      "Robust Security Protocols & Active Speed Optimizations"
    ],
    pricingRange: "$3,500 - $15,000+",
    avgTimeline: "3 - 6 Weeks"
  },
  {
    id: "app-dev",
    title: "Application Engineering",
    subtitle: "Android Mobile Excellence (Java/Flutter)",
    description: "Building resilient native and cross-platform mobile systems designed for extreme uptime, fluid gestures, and seamless system integrations.",
    icon: "Smartphone",
    category: "engineering",
    features: [
      "Native Android Engineering via Java & Kotlin",
      "Cross-Platform Mastery using Flutter SDK",
      "Real-time Offline Synced Stores",
      "Secure Background Services & Notification Lifecycles",
      "Play Store Publishing, Version Lifecycle & Compliance"
    ],
    pricingRange: "$6,000 - $25,000+",
    avgTimeline: "6 - 12 Weeks"
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Performance",
    subtitle: "Intent-Based Traffic Acquisition",
    description: "Bypassing generic agency vanity metrics. We deploy semantic keyword maps, deep crawling strategies, and highly convertible landing page funnels designed for raw inbound customer acquisition.",
    icon: "TrendingUp",
    category: "marketing",
    features: [
      "Deep Technical crawlers & Core Web Vitals audit",
      "Semantic content pillars & On-page architecture",
      "Strategic, authoritative backlinking networks",
      "Conversion Rate Optimization (CRO) and Heatmap diagnostics",
      "Multi-channel Search & Display campaign management"
    ],
    pricingRange: "$1,500 - $5,000 / mo",
    avgTimeline: "Continuous Execution"
  },
  {
    id: "social-growth",
    title: "Social Growth Campaigns",
    subtitle: "Authorized Audience & Engagement Amplification",
    description: "Creating digital gravity. We orchestrate tailored demographic targeting, engagement optimization, and brand amplification campaigns designed to grow high-intent followers and absolute retention.",
    icon: "Users",
    category: "marketing",
    features: [
      "Audience demographic modelling & targeting assets",
      "Inbound viral loop designs",
      "Certified social proof boost (Clean real loops)",
      "High-frequency engagement triggers",
      "Unified metrics pipelines with complete monthly audits"
    ],
    pricingRange: "$1,000 - $4,000 / mo",
    avgTimeline: "Continuous Execution"
  },
  {
    id: "content-writing",
    title: "Content & High-Impact Copy",
    subtitle: "Data-Driven Core Messaging",
    description: "Converting passive eyeballs into transactional customers. We construct high-converting sales copies, technical guides, authority whitepapers, and brand taglines written by elite copywriters.",
    icon: "FileText",
    category: "marketing",
    features: [
      "Direct response high-ticket sales letters",
      "SEO-Optimized technical product reviews",
      "Premium brand tone guide foundations",
      "Engaging newsletter lifecycle automation",
      "Social media content and video outline scripts"
    ],
    pricingRange: "$800 - $3,000+",
    avgTimeline: "1 - 2 Weeks"
  },
  {
    id: "enterprise-support",
    title: "Enterprise Customer Support",
    subtitle: "CRM Databases & Dialer Optimization",
    description: "Deploying bulletproof operational remote setups. We architect CRM pipeline flows, optimize ViciDialer structures, manage agent shifts, and guarantee 100% platform SLA uptime.",
    icon: "Headphones",
    category: "operations",
    features: [
      "ViciDialer carrier, server, and lead campaign optimization",
      "Zendesk / Salesforce custom pipeline automation",
      "Remote workforce orchestration and operational setup",
      "Live support, ticket queue handling, and technical SLAs",
      "Encrypted VPN endpoints and data privacy standards"
    ],
    pricingRange: "Custom Quote / Dedicated SLA",
    avgTimeline: "Ongoing Integration"
  },
  {
    id: "ticket-sales",
    title: "High-Ticket Sales Closing",
    subtitle: "Relational CRM Closing Networks",
    description: "Direct revenue pipeline reinforcement. We integrate expert closers to handle inbound qualification pipelines, demo bookings, custom enterprise deal modeling, and signature acquisition.",
    icon: "DollarSign",
    category: "operations",
    features: [
      "Inbound strategy & qualification criteria mapping",
      "Elite localized representatives (English with global coverage)",
      "Continuous mock-negotiation audit systems",
      "Contract negotiation, invoice routing, and onboarding sync",
      "Commission-leveraged hybrid pricing models"
    ],
    pricingRange: "Base retainer + Commission",
    avgTimeline: "Flexible Setup"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "bini-art-house",
    title: "Bini Art House E-Commerce",
    clientName: "Bini Art House",
    location: "Global Distribution",
    category: "E-Commerce & Digital Branding",
    heroImage: "bini_art_house",
    techStack: ["WordPress / WooCommerce", "Custom React Dashboard", "Tailwind CSS", "Stripe API", "Google Analytics"],
    problem: "Bini Art House faced severe performance degradation on mobile web, leading to a massive 42% check-out bounce rate. Their previous infrastructure struggled with media-rich high-resolution artwork loading, failing to capture global organic traffic.",
    solution: "We re-engineered their user journey with a custom reactive presentation layer, supercharged WordPress/WooCommerce server caches, optimized images dynamically through Cloudflare CDN, and implemented a multi-stage frictionless checkout experience.",
    results: [
      "48% reduction in page-load speeds (down to 1.1s)",
      "🚀 160% surge in successful checkout conversions",
      "32% boost in average order value (AOV) via strategic up-selling recommendations",
      "Secure global payment integration via premium Stripe gateways with localized formats"
    ],
    metrics: [
      { label: "Checkouts Increased", value: "+160%" },
      { label: "Page Load Time", value: "1.1s" },
      { label: "Mobile Bounce Rate", value: "-28%" }
    ]
  },
  {
    id: "tbc-services",
    title: "TB&C Services Platform",
    clientName: "TB&C Services Pty Ltd",
    location: "Australia",
    category: "Custom Web & Lead Generation",
    heroImage: "tbc_services",
    techStack: ["React / Vite", "Node.js API", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    problem: "TB&C Services needed a state-of-the-art web portal to coordinate localized B2B service queries across multiple territories in Australia. Their manual intake process resulted in client scheduling leakages and lacked transparent progress validation.",
    solution: "We constructed an ultra-modern, lightning-fast digital storefront with automated territory lead routing, interactive service tier builders, custom pricing calculators, and responsive communication channels.",
    results: [
      "Seamless and automated lead collection matching localized operators",
      "📈 210% increase in high-quality organic phone/web inquiries",
      "Over 40 hours of monthly administrative tasks eliminated via CRM workflow pipelines",
      "100% platform uptime achieved through redundant container architectures"
    ],
    metrics: [
      { label: "Inquiries Increase", value: "+210%" },
      { label: "Hours Saved / Mo", value: "40+ Hrs" },
      { label: "Uptime SLA", value: "99.99%" }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Arslan Gill",
    role: "Founder & CEO (Technical & Strategy Lead)",
    bio: "Over 6 years of international expertise coordinating technical architectures, full-stack systems, performance campaigns, and complex outbound networks in the USA, Australia, and ASEAN markets.",
    avatar: "AG",
    specialty: "Full-Stack Development, ViciDialer, CRM Architecture, Global Growth Marketing",
    experience: "6+ Years Executing Internationally"
  },
  {
    id: "engineer-1",
    name: "Marcus Cole",
    role: "Senior Full-Stack Engineer",
    bio: "Specialist in highly optimized React custom software, Node.js endpoints, and persistent database topologies. Obsessed with sub-second reload parameters.",
    avatar: "MC",
    specialty: "Next.js / Express / Cloud Run / PostgreSQL Development",
    experience: "5 Years Mobile & Web Development"
  },
  {
    id: "success-1",
    name: "Nuttaporn S.",
    role: "Customer Success Director",
    bio: "Coordinating strategic remote accounts and enterprise operational pipelines. Maintains tight communications between development deliverables and business outcomes.",
    avatar: "NS",
    specialty: "SLA Management, Client Account Operations, Remote Workflow Integrations",
    experience: "4 Years Multi-market Deployment"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alistair Vaughan",
    role: "Director of Operations",
    company: "TB&C Group Australia",
    quote: "The team at AuraNexus Digital built our platform with precision and speed. Not only did our inbound customer inquiries skyrocket by over 200%, but their ongoing system support has been completely flawless. Their level of technical execution is unmatched.",
    rating: 5,
    avatarInitials: "AV"
  },
  {
    id: "2",
    name: "Bianca De Luca",
    role: "Lead Curator & Founder",
    company: "Bini Art House",
    quote: "Converting our creative portfolio website into a fast, functional worldwide store seemed daunting. AuraNexus solved our checkout issues, made the UX gorgeous on mobile, and unlocked true global sales for us.",
    rating: 5,
    avatarInitials: "BD"
  },
  {
    id: "3",
    name: "George Sterling",
    role: "VP of Business Development",
    company: "Apex Tech Labs USA",
    quote: "Working across timezones with Arslan and his team is remarkably smooth. They optimized our outbound dialing servers and organized specialized CRM ticket pipelines that saved our workflows, maintaining complete 100% platform stability.",
    rating: 5,
    avatarInitials: "GS"
  }
];
