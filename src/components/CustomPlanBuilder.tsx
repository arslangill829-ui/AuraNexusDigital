import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Plus, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Settings, 
  HelpCircle,
  HardDrive
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  icon: React.ElementType;
}

interface CustomPlanBuilderProps {
  onPlanSubmit: (planDetails: {
    servicesSelected: string[];
    capacityDevs: number;
    supportSla: string;
    estimatedMonthly: number;
  }) => void;
}

export function CustomPlanBuilder({ onPlanSubmit }: CustomPlanBuilderProps) {
  const serviceOptions: ServiceItem[] = [
    {
      id: "web-app",
      name: "Custom Web & App Development",
      category: "Engineering",
      basePrice: 1950,
      description: "Custom React/Kotlin codebases engineered for speed and raw security pipelines.",
      icon: Smartphone,
    },
    {
      id: "seo-marketing",
      name: "SEO, Inbound SEO & Copywriting",
      category: "Performance Marketing",
      basePrice: 1250,
      description: "Semantic keyword trees, deep technical crawlers, high-intent landing systems.",
      icon: TrendingUp,
    },
    {
      id: "social-scale",
      name: "Social Growth & Audited Proof",
      category: "Social Scale",
      basePrice: 950,
      description: "Viral demographic modeling, high-ticket loops, organic proof boost.",
      icon: Users,
    },
    {
      id: "crm-operations",
      name: "CRM, ViciDialer & Operations Support",
      category: "Operations",
      basePrice: 1450,
      description: "Automated routing queues, dialing servers optimization, Remote setup support.",
      icon: Settings,
    },
  ];

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(["web-app", "seo-marketing"]);
  const [developmentCapacity, setDevelopmentCapacity] = useState<number>(2); // Sliders 1 to 6 devs
  const [supportSla, setSupportSla] = useState<string>("Standard"); // Standard, Enhanced, Enterprise 24/7 dedicated
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Client info state
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");

  useEffect(() => {
    // Calculative pipeline formula
    let sum = 0;
    
    // Sum selected services
    serviceOptions.forEach(service => {
      if (selectedServiceIds.includes(service.id)) {
        sum += service.basePrice;
      }
    });

    // Developer resources cost multiplier
    // $1,200/mo base per developer after the first 1
    sum += (developmentCapacity - 1) * 1250;

    // SLA adjustments
    if (supportSla === "Enhanced") {
      sum += 650;
    } else if (supportSla === "Enterprise") {
      sum += 1850;
    }

    setEstimatedTotal(sum);
  }, [selectedServiceIds, developmentCapacity, supportSla]);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) { // Guard to keep at least one
        setSelectedServiceIds(selectedServiceIds.filter(item => item !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      return;
    }

    const selectedNames = serviceOptions
      .filter(s => selectedServiceIds.includes(s.id))
      .map(s => s.name);

    onPlanSubmit({
      servicesSelected: selectedNames,
      capacityDevs: developmentCapacity,
      supportSla: supportSla,
      estimatedMonthly: estimatedTotal
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setClientName("");
      setClientEmail("");
    }, 4500);
  };

  return (
    <section 
      id="custom-plan" 
      className="relative bg-neutral-950 text-white py-24 overflow-hidden border-t border-b border-neutral-900"
    >
      {/* Intense Dark-Mode Grid Backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(120rem_ellipse_at_top,#2e1065,transparent_60%)] opacity-30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(100rem_ellipse_at_bottom,#030712,transparent_60%)] pointer-events-none" />

      {/* Decorative Neon Accent Nodes */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-bold text-violet-300 tracking-wider uppercase">
            <Sparkles className="h-3 w-3 text-violet-400 animate-pulse" />
            Bespoke Pricing Engine
          </span>
          <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Design Your Own Scaling Plan
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Tailor AuraNexus Digital’s technical capability exactly to your organization’s operational needs. Toggle modules, adjust developers velocity, and optimize support SLAs in real-time.
          </p>
        </div>

        {/* Dynamic Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Configurator (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-neutral-900/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-neutral-800/80">
            
            {/* Step 1: Select Operational Modules */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-violet-400">
                  Step 01 / Select Operational Modules
                </span>
                <span className="text-xs text-neutral-400">At least 1 required</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`text-left rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between h-40 group relative cursor-pointer ${
                        isSelected 
                          ? "bg-violet-900/20 border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]" 
                          : "bg-neutral-900/60 border-neutral-850 hover:bg-neutral-800/40 hover:border-neutral-700"
                      }`}
                    >
                      {/* Check indicator indicator */}
                      <div className={`absolute top-4 right-4 h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? "bg-violet-500 border-violet-400 text-white" 
                          : "border-neutral-700 text-transparent"
                      }`}>
                        <Check className="h-3 w-3" />
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 border border-neutral-700 group-hover:scale-105 transition-transform">
                        <Icon className={`h-5 w-5 ${isSelected ? 'text-violet-400' : 'text-neutral-400'}`} />
                      </div>

                      <div className="mt-2">
                        <h4 className="text-xs font-bold font-sans text-neutral-100">
                          {service.name}
                        </h4>
                        <p className="mt-1 text-[11px] text-neutral-400 leading-tight line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dedicated Developer Resources Intensity Slider */}
            <div className="border-t border-neutral-800 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-purple-400">
                  Step 02 / Allocate Developer Resources
                </span>
                <span className="text-xs font-bold font-sans text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md">
                  {developmentCapacity} Dedicated {developmentCapacity > 1 ? "Developers" : "Developer"}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mb-6 leading-relaxed">
                Choose the intensity of technical execution. Multi-developer allocations supercharge features timelines and allow parallel feature release loops.
              </p>

              {/* Slider Input with Glowing Line track */}
              <div className="relative mt-8">
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={developmentCapacity}
                  onChange={(e) => setDevelopmentCapacity(parseInt(e.target.value))}
                  className="w-full h-1.5 focus:outline-hidden bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 0%, #a78bfa ${((developmentCapacity - 1) / 5) * 100}%, #262626 ${((developmentCapacity - 1) / 5) * 100}%, #262626 100%)`
                  }}
                />
                <div className="flex justify-between text-[11px] font-mono font-bold text-neutral-500 mt-3 px-1">
                  <span>1 Dev (Solo)</span>
                  <span>2 Devs (Pro)</span>
                  <span>3 Devs (Squad)</span>
                  <span>4 Devs (Elite)</span>
                  <span>5 Devs (Enterprise)</span>
                  <span>6+ Devs (Scale)</span>
                </div>
              </div>
            </div>

            {/* Step 3: SLA & Support Coverage Tier */}
            <div className="border-t border-neutral-800 pt-6">
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-cyan-400 block mb-3">
                Step 03 / Operations & Support SLA
              </span>
              <p className="text-[11px] text-neutral-400 mb-4 leading-relaxed">
                Maintain 100% platform availability. Choose how deeply our operational coordinators, CSMs, and remote network leads integrate into your ticketing protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "Standard",
                    name: "Standard SLA",
                    desc: "Business hours coverage, standard queue ticket support.",
                    cost: "Included",
                    accent: "border-neutral-850"
                  },
                  {
                    id: "Enhanced",
                    name: "Enhanced SLA",
                    desc: "Extended hours SLAs, custom pipeline support triggers.",
                    cost: "+$650/mo",
                    accent: "border-purple-900/40"
                  },
                  {
                    id: "Enterprise",
                    name: "Enterprise 24/7",
                    desc: "Redundant coverage SLAs, active global dialer setups.",
                    cost: "+$1,850/mo",
                    accent: "border-cyan-950/40"
                  }
                ].map((tier) => {
                  const isActive = supportSla === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSupportSla(tier.id)}
                      className={`text-left rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between cursor-pointer h-36 ${
                        isActive 
                          ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]" 
                          : "bg-neutral-900/40 border-neutral-850 hover:bg-neutral-800/40 hover:border-neutral-700"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-neutral-100">{tier.name}</span>
                          <span className={`text-[9px] font-mono leading-none rounded px-1 py-0.5 ${isActive ? 'bg-cyan-500/25 text-cyan-400' : 'bg-neutral-800 text-neutral-400'}`}>
                            {tier.cost}
                          </span>
                        </div>
                        <p className="mt-2 text-[10px] text-neutral-400 leading-normal">
                          {tier.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Pricing Estimation Real-Time Panel (5 Cols) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-24">
            
            <div className="rounded-3xl border border-neutral-800/80 bg-gradient-to-tr from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-violet-600/10 blur-xl pointer-events-none" />
              
              <div className="border-b border-neutral-800 pb-5 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase">
                  Dynamic Allocation Model
                </span>
                <h3 className="text-xl font-bold font-sans text-white mt-1">
                  Estimated Pricing Summary
                </h3>
              </div>

              {/* Highlight list */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Selected Tectics Scale:</span>
                  <span className="font-semibold text-neutral-200">{selectedServiceIds.length} Modules Connected</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Allocated Developers Velocity:</span>
                  <span className="font-semibold text-neutral-200">{developmentCapacity} Dedicated {developmentCapacity > 1 ? "Engineers" : "Engineer"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Response SLA Coverage:</span>
                  <span className="font-semibold text-neutral-200">{supportSla} Protection</span>
                </div>

                <div className="border-t border-neutral-850/80 pt-4 mt-6 flex flex-col gap-1 items-stretch">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-neutral-300">ESTIMATED INVESTMENT</span>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                        ${estimatedTotal.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 ml-1">/ mo</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-2 italic leading-normal">
                    *Estimates are calculated objectively according to standard hourly allocation models. Subject to custom adjustments based on detailed scope agreements.
                  </p>
                </div>

              </div>

              {/* Conversion validation submission form */}
              <form onSubmit={handleSubmit} className="border-t border-neutral-800 mt-6 pt-6 space-y-4">
                <p className="text-[10px] font-bold text-violet-300 uppercase tracking-wide">
                  Submit Dynamic Plan to Outbound CRM
                </p>
                
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-violet-500"
                  />
                  
                  <input
                    type="email"
                    required
                    placeholder="Enter Corporate Email Address"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-violet-500"
                  />
                </div>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-3.5 text-center text-xs text-violet-300 font-bold"
                  >
                    🚀 Plan transmitted successfully to executive servers!
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 py-3.5 text-xs font-bold text-white shadow-lg shadow-violet-500/15 hover:bg-violet-400 transition-all duration-300"
                  >
                    <span>Transmit Bespoke Request</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
