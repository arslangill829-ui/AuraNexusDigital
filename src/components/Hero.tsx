import { motion } from "motion/react";
import { ArrowRight, Code, ShieldCheck, Database, Award, Sparkles, Terminal } from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onBookConsultation: () => void;
}

export function Hero({ onExploreServices, onBookConsultation }: HeroProps) {
  const handleScrollToCustomPlan = () => {
    const element = document.getElementById("custom-plan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-neutral-950 text-white py-20"
    >
      {/* Immersive mesh networks decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      {/* Radiant Glowing Neon Orbs */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Hero Copy - Left side (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-[11px] font-bold text-violet-300 tracking-wider uppercase shadow-xs pointer-events-auto"
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-400 animate-pulse" />
              <span>Technical Dominance &bull; 6+ Years International Proof</span>
            </motion.div>

            {/* Headline with luxurious animated purple/cyan/emerald text flow */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6.5xl leading-tight"
            >
              We Code Brands Into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Absolute Market
              </span>{" "}
              Dominance.
            </motion.h1>

            {/* Sub-headline stating global expertise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base leading-relaxed text-neutral-400 max-w-2xl"
            >
              AuraNexus Digital bridges full-stack enterprise platform engineering and aggressive conversion loops. Orchestrating state-of-the-art tech setups and premium marketing models across the <span className="font-semibold text-white">United States</span>, <span className="font-semibold text-white">Australia</span>, and <span className="font-semibold text-white">Thailand</span> since 2018.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row pt-2"
            >
              {/* Consultation Booking (Primary CTA) */}
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-neutral-950 shadow-xl transition-all hover:bg-neutral-100 hover:shadow-white/5 active:scale-98"
              >
                <span>View Elite Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Dynamic Design Plan Custom builder (Secondary CTA) */}
              <button
                onClick={handleScrollToCustomPlan}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-500/30 bg-violet-900/10 px-6 py-4 text-sm font-bold text-violet-300 transition-all hover:border-violet-500/50 hover:bg-violet-900/25 active:scale-98"
              >
                <span>Launch Custom Plan</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </motion.div>

            {/* Real Proof Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-neutral-920 pt-8"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Global Encrypted VPN Endpoints
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-violet-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Redundant Failover SLA / 100% Uptime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-fuchsia-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Dual Technical & Outbound Competency
                </span>
              </div>
            </motion.div>

          </div>

          {/* Visual Showcase Block - Right side (5 cols) */}
          <div className="hidden xl:col-span-5 xl:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md p-6 shadow-2xl"
            >
              {/* Window Bar decoration */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] font-mono font-semibold tracking-wider text-neutral-500 uppercase">
                  auranexus_mainframe.sh
                </span>
              </div>

              {/* Simulated Script Terminal logs representing direct tech execution */}
              <div className="mt-4 font-mono text-xs text-neutral-300 space-y-3">
                <div className="flex gap-2">
                  <span className="text-violet-400 select-none">$</span>
                  <span className="text-white font-bold">./boot-campaign --target="USA_WEST,AU_NSW,TH_BKK"</span>
                </div>
                <div className="text-[11px] leading-relaxed text-neutral-400 border-l-2 border-violet-500 pl-3">
                  <p className="text-neutral-500">&gt; Resolving localized DNS endpoints coordinates...</p>
                  <p className="font-semibold text-cyan-400">&gt; TUNNELS ESTABLISHED [AES-256 SECURED OPERATOR SYSTEM]</p>
                  <p>&gt; Pre-caching custom reactive Presentation schema layer...</p>
                  <p>&gt; TB&C Services Australia operational flow integrated: 100% SLA.</p>
                  <p className="font-semibold text-violet-400">&gt; REVENUE EXTRACTION OPTIMIZED (+210% INBOUND CAPACITY)</p>
                </div>
                
                {/* Visual stats component widget card */}
                <div className="mt-6 rounded-2xl bg-neutral-950 p-4.5 border border-neutral-800/80 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-neutral-500 tracking-wider uppercase">
                        Enterprise Growth Under Management
                      </p>
                      <h4 className="text-2xl font-bold font-sans text-white mt-1">
                        $4.2M+ USD
                      </h4>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-400">
                      +210% Organic
                    </span>
                  </div>
                  
                  {/* Visual micro chart graphic holding dark violet gradient */}
                  <div className="mt-4 flex items-end gap-1.5 h-16 pt-2">
                    <div className="w-full bg-neutral-850 h-1/4 rounded-sm" />
                    <div className="w-full bg-neutral-850 h-2/6 rounded-sm" />
                    <div className="w-full bg-neutral-850 h-3/6 rounded-sm" />
                    <div className="w-full bg-neutral-850 h-3/5 rounded-sm" />
                    <div className="w-full bg-cyan-500/30 h-4/5 rounded-sm" />
                    <div className="w-full bg-violet-500 h-full rounded-sm" />
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
