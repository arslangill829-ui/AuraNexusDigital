import React, { useState, useEffect } from "react";
import { services } from "../data";
import { Check, Mail, Sparkles, Send, Database, ShieldAlert, Calculator, Clock, Star } from "lucide-react";
import { ContactSubmission } from "../types";

interface ContactFormProps {
  preselectedService: string;
  onSubmissionSuccess: (submission: ContactSubmission) => void;
}

export function ContactForm({ preselectedService, onSubmissionSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("$3,000 - $10,000");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize preselectedService if user clicked inquiry from Service component
  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
      // Scroll to contact form smoothly
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [preselectedService]);

  const toggleServiceSelection = (srvTitle: string) => {
    if (selectedServices.includes(srvTitle)) {
      setSelectedServices((prev) => prev.filter((s) => s !== srvTitle));
    } else {
      setSelectedServices((prev) => [...prev, srvTitle]);
    }
  };

  // Dynamic estimate timeline computations based on selected services
  const computeEstimates = () => {
    if (selectedServices.length === 0) {
      return { timeline: "N/A", architecture: "Select a service focus", sla: "Standard Standard SLA" };
    }

    let minDays = 14;
    let maxDays = 21;
    let archType = "Serverless Cloud Container Framework";

    if (selectedServices.includes("Web Development")) {
      minDays += 10;
      maxDays += 20;
      archType = "Headless WooCommerce / High-Speed Cache Core";
    }
    if (selectedServices.includes("Application Engineering")) {
      minDays += 25;
      maxDays += 45;
      archType = "Native Android (Java) + Flutter Cross-Platform Server";
    }
    if (selectedServices.includes("Enterprise Customer Support")) {
      minDays += 5;
      maxDays += 10;
      archType = "ViciDialer Carrier Trunk + Zendesk CRM Pipeline API";
    }

    const timelineString = `${Math.ceil(minDays / 7)} - ${Math.ceil(maxDays / 7)} Weeks`;
    
    // SLA Tiers based on budget
    let slaTier = "Standard Client SLA";
    if (budget === "$10,000 - $25,000") {
      slaTier = "Priority Response SLA (Support & Tech)";
    } else if (budget === "$25,000+") {
      slaTier = "24/7 Redundant Operational Guard (Tech & Ops)";
    }

    return { timeline: timelineString, architecture: archType, sla: slaTier };
  };

  const estimates = computeEstimates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const submission: ContactSubmission = {
        id: Math.random().toString(36).substring(2, 9).toUpperCase(),
        name,
        email,
        serviceNeeded: selectedServices.length > 0 ? selectedServices : ["Undisclosed Inbound"],
        projectBudget: budget,
        addNotes: notes,
        submittedAt: new Date().toLocaleTimeString()
      };

      onSubmissionSuccess(submission);

      // Reset
      setName("");
      setEmail("");
      setSelectedServices([]);
      setNotes("");
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="bg-neutral-50 px-4 py-20 transition-colors duration-300 dark:bg-neutral-900/50"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Contact section title */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Secure your transaction pipelines
          </span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Ready to Accelerate? Let&apos;s Build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
            Submit your goals through our interactive briefing structure. Our core engineers will formulate a precise delivery roadmap and response matrix.
          </p>
        </div>

        {/* Form and Dynamic Quote grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Main Inquiry Form - Left 7 cols */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70"
          >
            <div className="space-y-6">
              
              {/* Client Basic Details Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Corporate Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arslan Gill"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-900 transition-all focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="arslan@marketingtectic.com"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-900 transition-all focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-neutral-900"
                  />
                </div>
              </div>

              {/* Multi-select Services needed Checklist */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Select Required Services (Choose multiple to aggregate estimates)
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {services.map((srv) => {
                    const isSelected = selectedServices.includes(srv.title);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleServiceSelection(srv.title)}
                        className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-left text-xs font-medium transition-all ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:border-emerald-400 dark:bg-emerald-505/10 dark:text-emerald-400"
                            : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-neutral-750"
                        }`}
                      >
                        <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                          isSelected ? "border-emerald-500 bg-emerald-500 text-white" : "border-neutral-300 bg-white dark:border-neutral-755 dark:bg-neutral-900"
                        }`}>
                          {isSelected && <Check className="h-3 w-3 inline" />}
                        </div>
                        <span>{srv.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Budget tier Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Select Planned Project Budget Cap
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-950 focus:border-violet-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-200 dark:focus:border-violet-400"
                >
                  <option value="$1,000 - $3,000">Starter Pilot Campaign &bull; $1,000 - $3,000</option>
                  <option value="$3,000 - $10,000">Growth Optimization Scope &bull; $3,000 - $10,000</option>
                  <option value="$10,000 - $25,000">Enterprise System Integration &bull; $10,000 - $25,000</option>
                  <option value="$25,000+">Custom Regional Infrastructure Master &bull; $25,000+</option>
                </select>
              </div>

              {/* Project brief text notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Project Description or Target Goals
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  placeholder="Provide details about your WordPress/wooCommerce degradation, native Application targets, outbound CRM ViciDialer optimization, high-ticket closers layout..."
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-900 transition-all focus:border-violet-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-violet-400 dark:focus:bg-neutral-900"
                />
              </div>

              {/* Actions submit button */}
              <button
                type="submit"
                disabled={isSubmitting || !name || !email}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-4 text-xs font-bold text-white shadow-lg transition-all hover:bg-neutral-850 dark:bg-violet-600 dark:hover:bg-violet-500 disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                <span>
                  {isSubmitting ? "Syncing Proposal CRM Security Logs..." : "Transmit Project Scope Briefing"}
                </span>
              </button>

            </div>
          </form>

          {/* Dynamic Quotation score sheet - Right 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-3xl border border-neutral-200/50 bg-neutral-50 p-6 shadow-xs dark:border-neutral-800/80 dark:bg-neutral-900/60 flex flex-col h-full justify-between">
              
              <div>
                {/* Scorecard title */}
                <div className="flex items-center gap-2 border-b border-neutral-200 pb-3 dark:border-neutral-800">
                  <Calculator className="h-5 w-5 text-violet-500" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                    Dynamic System Estimator
                  </span>
                </div>

                {/* Main numbers estimation display */}
                <div className="mt-6 space-y-5">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-neutral-400">
                      Estimated Release Speed
                    </span>
                    <p className="text-xl font-bold font-sans text-neutral-950 dark:text-white mt-1">
                      {estimates.timeline}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-neutral-400">
                      Primary Pipeline Architecture
                    </span>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-250 mt-1 leading-normal">
                      {estimates.architecture}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-neutral-400">
                      Active Support SLA Tier
                    </span>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-250 mt-1">
                      {estimates.sla}
                    </p>
                  </div>
                </div>
              </div>

              {/* Informative compliance banner */}
              <div className="mt-8 rounded-2xl bg-white p-4.5 border border-neutral-200/70 shadow-xs dark:bg-neutral-950 dark:border-neutral-800 leading-normal">
                <div className="flex items-center gap-2">
                  <Database className="h-4.5 w-4.5 text-violet-500 shrink-0" />
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                    Encrypted CRM Operations
                  </span>
                </div>
                <p className="mt-2 text-[10.5px] text-neutral-400">
                  Your inquiries are channeled through secure SSL environments. Upon transmission, a team architect coordinates and delivers your customized proposal outline under strict strict NDAs.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
