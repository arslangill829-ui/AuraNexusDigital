import { useState } from "react";
import { motion } from "motion/react";
import { caseStudies } from "../data";
import { CaseStudy } from "../types";
import { Modal } from "./Modal";
import { ArrowRight, CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";

export function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section
      id="portfolio"
      className="bg-white px-4 py-20 transition-colors duration-300 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Proven business outcomes
          </span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Case Studies & Systems In Operation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
            Real enterprise problems solved. From high-converting e-commerce re-engineering to B2B routing pipelines in international markets, we program for profit.
          </p>
        </div>

        {/* Portfolio Case Studies Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedCase(project)}
              className="group cursor-pointer rounded-3xl border border-neutral-200/50 bg-neutral-50 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
            >
              {/* Art Backdrop (Replaces static image files) */}
              <div className={`relative h-48 flex items-center justify-between px-6 overflow-hidden ${
                project.id === "bini-art-house" 
                  ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-emerald-950" 
                  : "bg-gradient-to-br from-neutral-900 via-zinc-900 to-emerald-950"
              }`}>
                {/* Visual abstract overlay styling */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                
                <div className="relative z-10 text-white space-y-2">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider text-emerald-300 uppercase bg-emerald-950/40 px-2 py-0.5 rounded-md">
                    {project.location}
                  </div>
                  <h3 className="font-sans text-xl font-extrabold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-350 dark:text-neutral-300">
                    {project.category}
                  </p>
                </div>

                {/* Simulated Device Graphic Badge */}
                <div className="relative z-10 hidden sm:block">
                  <div className="flex flex-col gap-1 rounded-xl bg-black/40 backdrop-blur-sm p-3.5 border border-white/10 text-right">
                    <span className="text-[10px] font-mono font-bold text-neural-400 text-white">SLA ACTIVE</span>
                    <span className="text-xl font-extrabold font-sans text-emerald-400">
                      {project.metrics[0].value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Copy Area */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold text-neutral-600 border border-neutral-200/50 dark:bg-neutral-900/60 dark:text-neutral-300 dark:border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-neutral-400 border border-dotted border-neutral-200 dark:bg-neutral-900/40 dark:border-neutral-800">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                    Core Challenge
                  </h4>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed dark:text-neutral-400">
                    {project.problem}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-150 pt-4 dark:border-neutral-800">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Review Inbound Case Studies
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  
                  {/* Performance metric badge */}
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase">SPEED</span>
                    <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                      {project.id === "bini-art-house" ? "1.1s Load" : "99.99% SLA"}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Single Portfolio Modal Inspector */}
        {selectedCase && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedCase(null)}
            title={selectedCase.title}
            subtitle={selectedCase.category}
          >
            <div className="space-y-6">
              
              {/* Highlight Metrics Grid at the absolute top */}
              <div className="grid grid-cols-3 gap-3.5">
                {selectedCase.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-emerald-500/5 border border-emerald-500/10 p-3.5 text-center dark:bg-emerald-500/10 dark:border-emerald-400/10"
                  >
                    <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wide dark:text-emerald-400">
                      {metric.label}
                    </span>
                    <p className="text-xl font-black font-sans text-neutral-950 mt-1 dark:text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Challenge description */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 uppercase tracking-wider dark:text-neutral-200">
                  <Cpu className="h-4 w-4 text-emerald-500" />
                  Client's Problem & Operational Bottleneck
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {selectedCase.problem}
                </p>
              </div>

              {/* Solution architecture */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 uppercase tracking-wider dark:text-neutral-200">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  Our Custom Integrated Solution
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Results metrics */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 uppercase tracking-wider dark:text-neutral-200">
                  <Award className="h-4 w-4 text-emerald-500" />
                  Measurable Business Outcomes Achieved
                </h4>
                <div className="mt-3 space-y-2">
                  {selectedCase.results.map((result, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Tech Stack specs footer inside modal */}
              <div className="border-t border-neutral-100 pt-5 dark:border-neutral-800/80">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-neutral-400">
                  Complete Technology Deployment
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-neutral-100 px-3 py-1.5 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-850 dark:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Modal>
        )}

      </div>
    </section>
  );
}
