import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { AboutTeam } from "./components/AboutTeam";
import { TrustCompliance } from "./components/TrustCompliance";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { CustomPlanBuilder } from "./components/CustomPlanBuilder";
import { ConsultationScheduler } from "./components/ConsultationScheduler";
import { ContactSubmission, BookingSlot } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  X, 
  Terminal, 
  Activity, 
  Wifi, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Cpu
} from "lucide-react";

interface ToastMessage {
  id: string;
  text: string;
  type: "success" | "info" | "secure";
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("marketing-tectic-theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  
  const [selectedInquiryService, setSelectedInquiryService] = useState<string>("");
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  // Real-time operations simulation queue
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [bookings, setBookings] = useState<BookingSlot[]>([]);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM_LOAD] AuraNexus Digital container nodes booted safely.",
    "[SECURITY] VPN endpoints validated [AES-256 encrypted loop].",
    "[MONITOR] Global platform ping response latency: 24ms."
  ]);
  
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Hook into dark mode configurations
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("marketing-tectic-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("marketing-tectic-theme", "light");
    }
  }, [darkMode]);

  // Dynamic system simulation logger
  useEffect(() => {
    const interval = setInterval(() => {
      const livePings = [
        `[MONITOR] Verified active node SLA: 100% platform availability.`,
        `[AUDIT] Standard checkout route pre-fetch latency OK: 1.1s speed.`,
        `[SLA_SYNC] Remote workforce static proxy connection validated.`,
        `[ROUTER] CRM lead queues synced to security vault.`
      ];
      const randomMsg = livePings[Math.floor(Math.random() * livePings.length)];
      setLogs((prev) => [randomMsg, ...prev.slice(0, 19)]);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // Update navbar section highlighter by watching scrolling positions
  useEffect(() => {
    const sections = ["hero", "services", "custom-plan", "portfolio", "about", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    addToast("Theme appearance synchronized dynamically.", "info");
  };

  const addToast = (text: string, type: "success" | "info" | "secure" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);
    
    // Auto clear toasted banners
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedInquiryService(serviceTitle);
    addToast(`Pre-cached inquiry target: "${serviceTitle}".`, "info");
    
    // Scroll smoothly to contact
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExploreServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookingSuccess = (bookingSlot: BookingSlot) => {
    setBookings((prev) => [bookingSlot, ...prev]);
    setLogs((prev) => [
      `[CRM_QUEUE] SECURE BOOKING RECORDED: ${bookingSlot.service} for ${bookingSlot.date} at ${bookingSlot.time}.`,
      ...prev
    ]);
    addToast(`Strategy Session Secured: ${bookingSlot.date} @ ${bookingSlot.time}`, "secure");
  };

  const handleContactFormSubmission = (sub: ContactSubmission) => {
    setSubmissions((prev) => [sub, ...prev]);
    setLogs((prev) => [
      `[CRM_QUEUE] LEAD TRANSMITTED: Reference ID #${sub.id} from ${sub.name} for ${sub.serviceNeeded.join(", ")}.`,
      ...prev
    ]);
    addToast(`Inquiry #:${sub.id} transmitted safely!`, "success");
  };

  const handleCustomPlanSubmission = (planDetails: {
    servicesSelected: string[];
    capacityDevs: number;
    supportSla: string;
    estimatedMonthly: number;
  }) => {
    setLogs((prev) => [
      `[CRM_QUEUE] BESPOKE PLAN LOCKED: Selected components: [${planDetails.servicesSelected.join(", ")}], SLA: ${planDetails.supportSla}, Capacity: ${planDetails.capacityDevs} dev(s). Est: $${planDetails.estimatedMonthly.toLocaleString()}/mo.`,
      ...prev
    ]);
    addToast(`Global plan configured! Monthly quota: $${planDetails.estimatedMonthly.toLocaleString()}/mo`, "secure");
  };

  const handleNewsletterSuccess = () => {
    setLogs((prev) => [
      `[AUDIT] Guest emails synchronized with local communications queue.`,
      ...prev
    ]);
    addToast("Growth briefings subscription logged. Welcome onboard.", "success");
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 font-sans dark:bg-neutral-950 dark:text-neutral-100 selection:bg-emerald-500/25">
      
      {/* Scroll indicator ribbon */}
      <div className="fixed top-0 left-0 z-50 h-[3px] w-full bg-neutral-100 dark:bg-neutral-900">
        <div className="h-full bg-emerald-500 transition-all duration-150" id="scroll-bar" />
      </div>

      {/* Styled Floating Toast messages container */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={t.id}
              className={`flex items-start gap-3 rounded-2xl p-4 shadow-xl border backdrop-blur-md pointer-events-auto ${
                t.type === "success" 
                  ? "bg-white/95 border-emerald-100 dark:bg-neutral-900/95 dark:border-emerald-950 text-neutral-900 dark:text-neutral-100"
                  : t.type === "secure"
                  ? "bg-emerald-500 text-white border-emerald-400 dark:border-emerald-600"
                  : "bg-white/95 border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {t.type === "success" && <CheckCircle className="h-4.5 w-4.5 text-emerald-500" />}
                {t.type === "secure" && <Sparkles className="h-4.5 w-4.5 text-white animate-pulse" />}
                {t.type === "info" && <span className="h-2 w-2 rounded-full bg-blue-500 inline-block" />}
              </div>
              <div className="flex-1 text-xs">
                <p className="font-bold leading-tight select-none">
                  {t.type === "success" && "Transmission Executed"}
                  {t.type === "secure" && "Strategic Session Locked"}
                  {t.type === "info" && "Network Event"}
                </p>
                <p className={`mt-0.5 leading-normal ${t.type === "secure" ? "text-neutral-100" : "text-neutral-550 dark:text-neutral-450"}`}>
                  {t.text}
                </p>
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
                className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Primary Sticky Header */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onBookClick={() => setIsConsultationOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Core Section Injections */}
      <main className="relative">
        
        {/* Banner Segment */}
        <Hero
          onExploreServices={handleExploreServices}
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Services Segment */}
        <Services onSelectService={handleServiceSelect} />

        {/* Dynamic Pricing Plan Builder Segment */}
        <CustomPlanBuilder onPlanSubmit={handleCustomPlanSubmission} />

        {/* Portfolio Showcase Segment */}
        <Portfolio />

        {/* Operational Narrative Segment */}
        <AboutTeam />

        {/* Security & Client Proof Segment */}
        <TrustCompliance />

        {/* CRM Leads Interactive Segment */}
        <ContactForm 
          preselectedService={selectedInquiryService}
          onSubmissionSuccess={handleContactFormSubmission}
        />

      </main>

      {/* Multi-column Footer Section */}
      <Footer onNewsletterSuccess={handleNewsletterSuccess} />

      {/* Interactive Consultation Scheduler Dynamic Slide Modals */}
      <ConsultationScheduler
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      {/* Collapsible Simulated Operations Terminal - Highlights Agency Tech stack */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className={`rounded-2xl border border-neutral-200/50 bg-white shadow-xl transition-all duration-300 dark:border-neutral-850 dark:bg-neutral-900 overflow-hidden ${
          isTerminalOpen ? "w-[380px]" : "w-11"
        }`}>
          {/* Header Bar */}
          <button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="flex h-11 w-full items-center justify-between px-3.5 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
          >
            <div className="flex items-center gap-2">
              <Terminal className="h-4.5 w-4.5 text-emerald-500 animate-pulse" />
              {isTerminalOpen && (
                <span className="text-xs font-mono font-bold tracking-tight text-neutral-800 dark:text-white uppercase">
                  CRM Operation Stream
                </span>
              )}
            </div>
            {isTerminalOpen ? (
              <ChevronDown className="h-4 w-4 text-neutral-400" />
            ) : null}
          </button>

          {/* Collapsible terminal console logs */}
          {isTerminalOpen && (
            <div className="border-t border-neutral-100 bg-neutral-950 p-4 font-mono text-[10px] leading-relaxed text-neutral-400 dark:border-neutral-900">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-2 mb-3">
                <span className="text-emerald-400 uppercase font-bold text-[9px]">Event Streams</span>
                <span className="text-[9px]">Uptime 100%</span>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2 select-none">
                {logs.map((log, idx) => (
                  <p key={idx} className={`${log.includes("SYSTEM_LOAD") ? "text-white" : log.includes("LEAD TRANSMITTED") || log.includes("BOOKING RECORDED") ? "text-emerald-400 font-semibold" : ""}`}>
                    {log}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
