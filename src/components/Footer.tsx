import React, { useState } from "react";
import { Layers, Github, Twitter, Linkedin, Terminal, Sparkles } from "lucide-react";

interface FooterProps {
  onNewsletterSuccess: () => void;
}

export function Footer({ onNewsletterSuccess }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    onNewsletterSuccess();
    setNewsEmail("");
  };

  const currentYear = new Date().getFullYear();

  const handleLinkScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 transition-colors duration-300">
      
      {/* Upper Footer Segment (Forms & Branding) */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Column 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-base font-black tracking-tight text-white">
              <Layers className="h-5 w-5 text-violet-500" />
              <span>
                AuraNexus<span className="font-medium text-neutral-450 text-neutral-550">Digital</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              An elite global digital agency bridging the profound chasm between clean full-stack software development and high-converting marketing campaigns. Operates transparently across the USA, Australia, and ASEAN.
            </p>

            {/* Social Icons mapping */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                aria-label="Inspect GitHub"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                aria-label="Observe on X/Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-mono text-white text-[11px] font-bold uppercase tracking-widest">
              Agency Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleLinkScroll(e, "hero")}
                  className="hover:text-white transition-colors"
                >
                  Home Core
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkScroll(e, "services")}
                  className="hover:text-white transition-colors"
                >
                  Solutions Grid
                </a>
              </li>
              <li>
                <a
                  href="#custom-plan"
                  onClick={(e) => handleLinkScroll(e, "custom-plan")}
                  className="hover:text-white transition-colors"
                >
                  Plan Builder
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkScroll(e, "portfolio")}
                  className="hover:text-white transition-colors"
                >
                  Featured Cases
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkScroll(e, "about")}
                  className="hover:text-white transition-colors"
                >
                  About Arslan & Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional targets specs (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-white text-[11px] font-bold uppercase tracking-widest">
              Regional Operations
            </h4>
            <ul className="space-y-2.5 leading-relaxed text-neutral-400">
              <li>
                <strong className="text-white">United States Hub:</strong> Corporate lead targeting, direct response landing campaigns, and high-ticket customer conversion architectures.
              </li>
              <li>
                <strong className="text-white">Australia Branch:</strong> Specialized local service routing networks & CRM sync for B2B enterprises.
              </li>
              <li>
                <strong className="text-white">Thailand Office:</strong> Regional support operations, carrier trunk optimization (ViciDialer), and high-frequency content writing teams.
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter capture (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-white text-[11px] font-bold uppercase tracking-widest">
              Get Growth Briefings
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We periodically emit raw, hyper-practical breakdowns of technical conversion optimization tips and SEO tactics we use in real clients. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="CEO Email Address"
                className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white focus:border-violet-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white hover:bg-violet-500 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

         </div>
      </div>

      {/* Extreme Bottom (Copyright + SLA Notice) */}
      <div className="border-t border-neutral-900 bg-neutral-950/60 py-6 text-xs text-neutral-500 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} AuraNexus Digital. Created internationally. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>GDPR Compliance Secure</span>
            <span className="h-3 w-[1px] bg-neutral-805 bg-neutral-800" />
            <span>Encrypted VPN Tunnel Connections [SSL]</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
