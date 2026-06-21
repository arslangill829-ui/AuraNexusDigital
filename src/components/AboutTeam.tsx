import { teamMembers } from "../data";
import { Award, ShieldAlert, Sparkles, MapPin, Globe, CheckCircle } from "lucide-react";

export function AboutTeam() {
  return (
    <section
      id="about"
      className="bg-neutral-50 px-4 py-24 transition-colors duration-300 dark:bg-neutral-900/20"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* About Narrative Banner Container */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Narrative Content */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 font-mono">
              More than a generic marketing agency
            </span>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white leading-tight">
              Over 6 Years of Proven International System Integration
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Founded on the belief that pristine code and data-driven copywriting are dual wings of digital progress, AuraNexus Digital operates across boundaries, aligning robust systems architectures with high-performing growth pipelines globally. 
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              We started by managing native Android engineering and enterprise WordPress platforms for fast-scaling systems. Over 6+ years of execution, we built localized customer pipelines, carrier-grade ViciDialer configurations, and multi-channel SEO machines spanning the 
              <strong className="text-neutral-950 dark:text-white"> United States</strong>, 
              <strong className="text-neutral-950 dark:text-white"> Australia</strong>, and 
              <strong className="text-neutral-950 dark:text-white"> Thailand</strong>.
            </p>

            {/* Micro Badges representing global markets */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-neutral-800 border border-neutral-200/50 shadow-xs dark:bg-neutral-950 dark:border-neutral-850 dark:text-neutral-300">
                <Globe className="h-4 w-4 text-violet-500 animate-pulse" />
                <span>United States (USD Markets)</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-neutral-800 border border-neutral-200/50 shadow-xs dark:bg-neutral-950 dark:border-neutral-850 dark:text-neutral-300">
                <Globe className="h-4 w-4 text-cyan-500 animate-pulse" />
                <span>Australia (B2B Territory Lead Routes)</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-neutral-850 border border-neutral-200/50 shadow-xs dark:bg-neutral-950 dark:border-neutral-850 dark:text-neutral-300">
                <Globe className="h-4 w-4 text-fuchsia-400 animate-pulse" />
                <span>Thailand & ASEAN Support Hubs</span>
              </div>
            </div>

            {/* Core commitments */}
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-200/60 pt-6 dark:border-neutral-850/60">
              <div className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">Strict Timelines</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Absolute deadline adherence.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">Absolute Privacy</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Secure remote development VPNs.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Graphical Map/Uptime illustration Column */}
          <div className="rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-sm dark:border-neutral-850 dark:bg-neutral-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 blur-xl pointer-events-none" />
            <h3 className="font-sans text-xs font-extrabold tracking-wider uppercase text-neutral-400 font-mono">
              Live Platform Active SLA Nodes
            </h3>
            
            {/* Real countries latency mock representations */}
            <div className="mt-4 space-y-3 font-mono text-xs text-neutral-500">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-900/65">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500 animate-ping" />
                  <span className="font-bold text-neutral-800 dark:text-white">USA East Hub (Ohio)</span>
                </div>
                <span>99.98% Latency Node</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-900/65">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                  <span className="font-bold text-neutral-800 dark:text-white">AU Southeast Hub (Sydney)</span>
                </div>
                <span>100.0% Latency Node</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-900/65">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-ping" />
                  <span className="font-bold text-neutral-800 dark:text-white">Thailand Hub (Bangkok)</span>
                </div>
                <span>99.95% Latency Node</span>
              </div>
            </div>

            {/* Small informative block inside illustration */}
            <div className="mt-8 rounded-2xl bg-neutral-50 p-4.5 dark:bg-neutral-900/40 leading-relaxed">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-violet-500" />
                <span className="text-xs font-bold text-neutral-850 dark:text-neutral-255 dark:text-neutral-300">
                  Resilient Operational SLA Settings
                </span>
              </div>
              <p className="mt-2 text-[11px] text-neutral-400">
                Every remote analyst and system engineer is backed by static corporate proxies, dedicated VPN targets, and high-redundancy failover protocols ensuring round-the-clock coverage with zero scheduling overlap.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic Founding Team Presentation (Meet the Minds) */}
        <div className="mt-24">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-sans text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Meet The Minds
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-450 dark:text-neutral-400">
              We do not delegate your custom architectures to amateur interns. Our executives and senior full-stack developers build and manage goals directly with client success metrics.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-neutral-200/50 bg-white p-6 shadow-xs dark:border-neutral-850 dark:bg-neutral-950 relative overflow-hidden"
              >
                {/* Member Avatar bubble & name roles */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 text-sm font-black text-white shadow-md">
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-extrabold text-neutral-950 dark:text-white leading-tight">
                      {member.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-violet-600 uppercase dark:text-violet-400 mt-1 block">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Team Bio */}
                <p className="mt-4 text-xs leading-relaxed text-neutral-550 dark:text-neutral-400">
                  {member.bio}
                </p>

                {/* Specializations list footer inside card */}
                <div className="mt-5 border-t border-neutral-100 pt-4 dark:border-neutral-900 text-[10px]">
                  <p className="font-mono text-neutral-400 font-bold uppercase tracking-widest text-[9px]">
                    Primary Specialty
                  </p>
                  <p className="mt-1 font-semibold text-neutral-750 dark:text-neutral-300">
                    {member.specialty}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-neutral-400">
                    <span>Performance validation:</span>
                    <span className="font-bold text-neural-800 text-neutral-900 dark:text-neutral-200">
                      {member.experience}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
