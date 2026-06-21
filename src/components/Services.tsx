import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Sparkles, Server, Flame, Zap } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface PriceTier {
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  badge?: string;
  desc: string;
  features: string[];
}

interface PricingCategory {
  id: string;
  title: string;
  subtitle: string;
  tiers: PriceTier[];
}

export function Services({ onSelectService }: ServicesProps) {
  // Toggle between "Structured Standard Tiers" and "Bespoke System Infrastructure"
  const [viewMode, setViewMode] = useState<"tiers" | "bespoke">("tiers");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "engineering" | "marketing" | "operations">("all");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // The 4 requested categories each with 3 tiers (Growth, Pro, Enterprise)
  const premiumTiers: PricingCategory[] = [
    {
      id: "web-dev",
      title: "Web & App Development",
      subtitle: "Custom high-converters & native endpoints",
      tiers: [
        {
          name: "Growth Tier",
          price: "$3,500",
          period: "Per Build",
          desc: "High-speed custom responsive layout with fully optimized React/Vite systems, standard local key-values CRM integrations, and premium design.",
          features: [
            "100% Custom React SPA layout",
            "Tailwind CSS responsive design",
            "Speed-focused content hydration (sub-1.5s)",
            "Standard lead-capture SMTP pipeline",
            "1 Month SLA post-launch support"
          ]
        },
        {
          name: "Pro Tier",
          price: "$7,500",
          period: "Per Build",
          isPopular: true,
          badge: "Most Selected",
          desc: "Full-Stack Server & Database integrations, specialized CRM data sync, interactive dynamic widget components, and advanced user roles.",
          features: [
            "Next.js / custom Express server routes",
            "Relational PostgreSQL or Firestore integration",
            "Integrated administrative dynamic dashboard",
            "Advanced telemetry & analytics dashboards",
            "3 Months operational server support"
          ]
        },
        {
          name: "Enterprise Multi-Platform",
          price: "$15,000+",
          period: "Per Build",
          desc: "Comprehensive multi-tier platform layout, custom native Android mobile systems (Java/Flutter), carrier-grade APIs, and robust failover engines.",
          features: [
            "Web system + cross-platform Mobile Apps",
            "Enterprise API sync & redundant databases",
            "Strict banking/payment integrations (Stripe, etc.)",
            "Automated unit testing & CI/CD deployment",
            "Dedicated Developer & Ongoing Architecture SLA"
          ]
        }
      ]
    },
    {
      id: "seo-marketing",
      title: "SEO & Digital Performance",
      subtitle: "Semantic Keyword Mastery & CRO Pipelines",
      tiers: [
        {
          name: "Growth Tier",
          price: "$1,500",
          period: "Month",
          desc: "Perfect for initial inbound traction. Focuses on detailed site crawling, core keyword configurations, and authoritative copy foundations.",
          features: [
            "Semantic keyword map (High transactional intent)",
            "On-page metadata & site architecture repair",
            "2 Elite long-form authority blogs per month",
            "Monthly technical health check Audits",
            "Standard Google Tools analytics telemetry"
          ]
        },
        {
          name: "Pro Performance",
          price: "$3,500",
          period: "Month",
          isPopular: true,
          badge: "High Growth",
          desc: "Aggressive inbound digital lead capture via high-converting copywriting campaigns, ongoing authoritative context building, and heatmap diagnostics.",
          features: [
            "Comprehensive competitor intelligence capture",
            "Optimized high-converting custom landing pages",
            "6 Elite authoritative content assets monthly",
            "Heatmap CRO diagnostic & navigation design",
            "Active high-tier backlinks acquisition network"
          ]
        },
        {
          name: "Enterprise Dominance",
          price: "$6,000",
          period: "Month",
          desc: "Total inbound market takeover. Deploys custom crawler programs, continuous multi-stage copywriting flows, and client conversion matrices.",
          features: [
            "Unrestricted custom crawler audits",
            "Continuous multi-funnel A/B testing strategy",
            "Enterprise scale content pillars (15+ assets/mo)",
            "Direct organic CRM pipeline synchronization",
            "Dedicated senior performance architect lead"
          ]
        }
      ]
    },
    {
      id: "social-growth",
      title: "Social Growth & Engagement",
      subtitle: "Verified Democratic Audience & Proof Tectics",
      tiers: [
        {
          name: "Growth Proof",
          price: "$1,200",
          period: "Month",
          desc: "Initial audience proofing. Real demographic targeting designed to establish an authentic baseline and eliminate generic vanity noise.",
          features: [
            "Real demographic audience analysis",
            "Engagement loop triggers configuration",
            "Guaranteed 500+ active high-intent followers/mo",
            "2 Custom creative content template pillars",
            "Standard monthly audience retention analytics"
          ]
        },
        {
          name: "Pro Engagement Pulse",
          price: "$2,500",
          period: "Month",
          isPopular: true,
          badge: "Highly Effective",
          desc: "Establish total brand gravity with viral loop designs, localized demographic engagement campaigns, and weekly high-tier assets.",
          features: [
            "Inbound viral loop design & integrations",
            "Vibrant organic engagement boost (Real loops)",
            "1,500+ Qualified active followers monthly",
            "8 Custom creative assets (Short video + design)",
            "Cross-platform brand syndication pipeline"
          ]
        },
        {
          name: "Enterprise Gravity",
          price: "$4,500",
          period: "Month",
          desc: "Prestige-level authority loops. Full scale multi-platform social management, audience syndication arrays, and real-time custom trackers.",
          features: [
            "Custom brand narrative & PR syndication",
            "Authority multiplier loops & VIP campaigns",
            "4,000+ Verified active followers monthly",
            "Full-scale high-frequency content production",
            "Multi-channel tracking analytics dashboards"
          ]
        }
      ]
    },
    {
      id: "operations-success",
      title: "Operations & CRM Setup",
      subtitle: "VPN Encryption & Dialer Platform Optimizations",
      tiers: [
        {
          name: "Growth Operations",
          price: "$1,800",
          period: "Month",
          desc: "Standardize client feedback systems. Set up managed Zendesk setups, automated standard email ticket queues, and workflows.",
          features: [
            "Managed CRM intake pipeline setup",
            "Standard Zendesk/Salesforce routing logic",
            "Basic dialing platform compliance audit",
            "Encrypted connection proxy setup (VPN)",
            "Business hours operational coverage SLA"
          ]
        },
        {
          name: "Pro Command SLA",
          price: "$4,000",
          period: "Month",
          isPopular: true,
          badge: "Enterprise Standard",
          desc: "High-performance operational framework. Redundant ViciDialer configurations, complex ticketing networks, and absolute remote workforce setups.",
          features: [
            "ViciDialer carrier & lead route optimization",
            "Complex pipeline ticket automated rules",
            "Redundant backup network nodes mapping",
            "Localized live coordinators (English / global coverage)",
            "Ongoing platform performance logs reporting"
          ]
        },
        {
          name: "Enterprise 24/7 SLA",
          price: "Custom SLA",
          period: "Agreement",
          desc: "Absolute resilience. Full-scale mission-critical coverage, absolute 100% platform SLA uptime guaranteed, custom dialer algorithms, and top closers.",
          features: [
            "Full redundance 24/7 client ticket queues",
            "Immediate 5-minute SLA system support triggers",
            "Custom dialer algorithm & multi-carrier carriers",
            "High-Ticket Closers deal optimization network",
            "Encrypted dedicated global VPN gateways"
          ]
        }
      ]
    }
  ];

  const filterTabs = [
    { value: "all", label: "Full Infrastructure Capabilities" },
    { value: "engineering", label: "Engineering & Dev" },
    { value: "marketing", label: "Marketing & Growth" },
    { value: "operations", label: "Enterprise Support & CRM" }
  ];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((srv) => srv.category === selectedCategory);

  const toggleExpand = (id: string) => {
    if (expandedServiceId === id) {
      setExpandedServiceId(null);
    } else {
      setExpandedServiceId(id);
    }
  };

  return (
    <section
      id="services"
      className="bg-neutral-50 px-4 py-24 transition-colors duration-300 dark:bg-neutral-900/40 relative"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 font-mono">
            Structured Capabilities & Packages
          </span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            High-Value Architecture & Growth Tectics
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Deploying elite technical engineering alongside hyper-targeted conversion layers. Toggle our structured 3-tier packages or inspect our bespoke capabilities list below.
          </p>
        </div>

        {/* Absolute View Mode Selector (Toggle Tabs) */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-neutral-100 p-1 dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-850">
            <button
              onClick={() => setViewMode("tiers")}
              className={`rounded-lg px-4.5 py-2 text-xs font-bold tracking-wide transition-all ${
                viewMode === "tiers"
                  ? "bg-white text-neutral-950 shadow-xs dark:bg-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              System Pricing Tiers
            </button>
            <button
              onClick={() => setViewMode("bespoke")}
              className={`rounded-lg px-4.5 py-2 text-xs font-bold tracking-wide transition-all ${
                viewMode === "bespoke"
                  ? "bg-white text-neutral-950 shadow-xs dark:bg-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              Bespoke Capability Details
            </button>
          </div>
        </div>

        {/* View Mode 1: Detailed Tiers Grid (Sleek Standardized Packages) */}
        {viewMode === "tiers" && (
          <div className="mt-12 space-y-12">
            
            {/* Horizontal sub-tabs for the 4 categories */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-200/40 pb-6 dark:border-neutral-850/60">
              {premiumTiers.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    activeCategoryIndex === index
                      ? "bg-violet-500 text-white shadow-md shadow-violet-500/10"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-350 dark:hover:bg-neutral-800"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Render the 3 pricing cards for active category */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            >
              {premiumTiers[activeCategoryIndex].tiers.map((tier, idx) => {
                const Icon = idx === 0 ? Server : idx === 1 ? Zap : Flame;
                return (
                  <div
                    key={idx}
                    className={`rounded-3xl p-6.5 border flex flex-col justify-between relative transition-all duration-300 ${
                      tier.isPopular 
                        ? "bg-white border-violet-500/80 shadow-xl scale-102 z-10 dark:bg-neutral-950 dark:border-violet-500" 
                        : "bg-white border-neutral-200/50 shadow-xs dark:bg-neutral-950/40 dark:border-neutral-850 hover:border-neutral-400/30"
                    }`}
                  >
                    {/* Popular flag */}
                    {tier.isPopular && tier.badge && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-md">
                        <Sparkles className="h-3 w-3 text-white animate-spin-slow" />
                        {tier.badge}
                      </span>
                    )}

                    <div>
                      {/* Name & Rate layout */}
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4 dark:border-neutral-900">
                        <div>
                          <h3 className="font-sans text-xs font-black tracking-widest text-neutral-400 uppercase">
                            {tier.name}
                          </h3>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-3xl font-black font-sans text-neutral-950 dark:text-white">
                              {tier.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium tracking-normal">
                              / {tier.period}
                            </span>
                          </div>
                        </div>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          tier.isPopular ? "bg-violet-500/15 text-violet-500" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                        }`}>
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                      </div>

                      <p className="mt-4 text-[11px] leading-relaxed text-neutral-550 dark:text-neutral-400">
                        {tier.desc}
                      </p>

                      {/* Included attributes array */}
                      <div className="mt-6">
                        <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-neutral-400">
                          Included In Segment
                        </span>
                        <ul className="mt-3 space-y-2.5">
                          {tier.features.map((feat, featureIdx) => (
                            <li key={featureIdx} className="flex gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                              <Check className="h-4 w-4 shrink-0 text-violet-500 mt-0.5" />
                              <span className="leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Book strategy handler action */}
                    <button
                      onClick={() => onSelectService(`${premiumTiers[activeCategoryIndex].title} (${tier.name})`)}
                      className={`mt-8 w-full rounded-xl py-3 text-center text-xs font-bold transition-all cursor-pointer ${
                        tier.isPopular 
                          ? "bg-violet-500 text-white shadow-lg hover:bg-violet-400 active:scale-98" 
                          : "bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
                      }`}
                    >
                      Deploy {tier.name} System
                    </button>

                  </div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* View Mode 2: Custom Bespoke Capabilities List (Individual Features Grid) */}
        {viewMode === "bespoke" && (
          <div className="mt-12 space-y-8">
            {/* Category Filter Pills Grid (Horizontal) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => {
                    setSelectedCategory(tab.value as any);
                    setExpandedServiceId(null);
                  }}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 pointer-events-auto cursor-pointer ${
                    selectedCategory === tab.value
                      ? "bg-violet-500 text-white shadow-md"
                      : "bg-white text-neutral-650 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:text-neutral-350 dark:hover:bg-neutral-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((srv) => {
                  const isExpanded = expandedServiceId === srv.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={srv.id}
                      className={`group relative rounded-2xl border border-neutral-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-850 dark:bg-neutral-950 ${
                        isExpanded ? "md:col-span-2 lg:col-span-2" : ""
                      }`}
                    >
                      {/* Decorative corner tag depending on category */}
                      <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                        {srv.category}
                      </div>

                      {/* Header Container (Icon + Titles) */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-violet-500 group-hover:text-white dark:bg-neutral-900 dark:text-violet-400 dark:group-hover:bg-violet-500 dark:group-hover:text-white">
                          <ServiceIcon name={srv.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-sans text-base font-bold text-neutral-950 dark:text-white">
                            {srv.title}
                          </h3>
                          <p className="text-[11px] font-mono leading-none text-violet-600 dark:text-violet-400 mt-1">
                            {srv.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Feature Description */}
                      <p className="mt-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {srv.description}
                      </p>

                      {/* Inline Expanded Area showing Features and Timelines */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 border-t border-neutral-100 pt-5 dark:border-neutral-900 space-y-4"
                        >
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Features Column */}
                            <div>
                              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider dark:text-neutral-200">
                                Included Capabilities
                              </h4>
                              <ul className="mt-2.5 space-y-1.5">
                                {srv.features.map((feat, idx) => (
                                  <li key={idx} className="flex gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                    <Check className="h-4 w-4 shrink-0 text-violet-500" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Timeline & Quote recommendations */}
                            <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/60 flex flex-col justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider dark:text-neutral-200">
                                  System Specifications
                                </h4>
                                <div className="mt-2.5 space-y-2 text-xs">
                                  <div className="flex items-center justify-between">
                                    <span className="text-neutral-400">Ballpark Rate:</span>
                                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                      {srv.pricingRange}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-neutral-400">Execution Speed:</span>
                                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                      {srv.avgTimeline}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Book Strategy directly from card */}
                              <button
                                onClick={() => onSelectService(srv.title)}
                                className="mt-4 w-full rounded-xl bg-neutral-950 py-2.5 text-center text-[11px] font-bold text-white transition-all hover:bg-neutral-850 dark:bg-violet-500 dark:hover:bg-violet-400"
                              >
                                Integrate {srv.title} Framework
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Card Actions Bottom */}
                      <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-900">
                        <button
                          onClick={() => toggleExpand(srv.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer"
                        >
                          <span>{isExpanded ? "Collapse Details" : "Inspect Specifications"}</span>
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => onSelectService(srv.title)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
