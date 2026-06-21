import { useState } from "react";
import { testimonials } from "../data";
import { ShieldCheck, ServerCrash, Clock, User, ChevronLeft, ChevronRight, Star, Quote, FileCheck } from "lucide-react";

export function TrustCompliance() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIdx];

  const complianceFeatures = [
    {
      icon: ShieldCheck,
      title: "Encrypted VPN Tunnel Terminals",
      desc: "Every remote Customer Success Manager operates in restricted virtual private network environments conforming with standard compliance frameworks, avoiding data routing leakage from the start."
    },
    {
      icon: ServerCrash,
      title: "100% Active Platform SLA Uptime",
      desc: "By combining multi-region container deployments on premium cloud providers with automatic routing configurations, we guarantee zero service downtime pipelines."
    },
    {
      icon: Clock,
      title: "Uncompromising Deadline Adherence",
      desc: "We prioritize velocity. Project schedules are mapped to strict continuous integration releases with direct compensation guarantees if milestones are exceeded."
    }
  ];

  return (
    <section
      id="trust"
      className="bg-white px-4 py-20 transition-colors duration-300 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Compliance Section Header & Cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Card list - Left 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 font-mono">
                Bulletproof digital compliance
              </span>
              <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                Our Secure Operational Infrastructure
              </h2>
              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                We believe security and speed cannot be decoupled. Our team employs physical and remote guardrails to guarantee your CRM pipelines, dialers, and source codes are completely secure.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {complianceFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5 shadow-xs transition-colors dark:border-neutral-900 dark:bg-neutral-950/60"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-violet-500/10 dark:text-violet-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-neutral-950 dark:text-white">
                        {feat.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial widget - Right 5 cols */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-neutral-200/50 bg-neutral-50 p-6 shadow-xl dark:border-neutral-800/85 dark:bg-neutral-900/60">
              
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                  Verified Executive Review
                </span>
                <Quote className="h-5 w-5 text-violet-500 animate-pulse" />
              </div>

              {/* Dynamic Testimonial body slider with absolute heights */}
              <div className="mt-6 min-h-[170px] flex flex-col justify-between">
                <div>
                  {/* RatingStars */}
                  <div className="flex gap-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="mt-4 font-sans text-xs italic leading-relaxed text-neutral-600 dark:text-neutral-350">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Testimonial executive card */}
                <div className="mt-6 flex items-center justify-between border-t border-neutral-150 pt-4 dark:border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-xs font-black text-white dark:bg-indigo-600">
                      {activeTestimonial.avatarInitials}
                    </div>
                    <div>
                      <p className="font-sans text-xs font-extrabold text-neutral-905 dark:text-white leading-tight">
                        {activeTestimonial.name}
                      </p>
                      <span className="text-[10px] text-neutral-400 font-medium">
                        {activeTestimonial.role} &bull; {activeTestimonial.company}
                      </span>
                    </div>
                  </div>

                  {/* Testimonials controls */}
                  <div className="flex gap-1.5">
                    <button
                      onClick={prevSlide}
                      className="rounded-lg border border-neutral-200 bg-white p-1 text-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="rounded-lg border border-neutral-200 bg-white p-1 text-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
