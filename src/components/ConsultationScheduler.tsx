import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, Smile, Sparkles, Check, ArrowRight, X, AlertCircle } from "lucide-react";
import { BookingSlot } from "../types";

interface ConsultationSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (booking: BookingSlot) => void;
}

export function ConsultationScheduler({ isOpen, onClose, onSuccess }: ConsultationSchedulerProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [service, setService] = useState<string>("Custom Full-Stack Development");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [errorUsr, setErrorUsr] = useState<string>("");

  const dates = [
    { day: "Mon", num: "22", full: "2026-06-22", label: "June 22" },
    { day: "Tue", num: "23", full: "2026-06-23", label: "June 23" },
    { day: "Wed", num: "24", full: "2026-06-24", label: "June 24" },
    { day: "Thu", num: "25", full: "2026-06-25", label: "June 25" },
    { day: "Fri", num: "26", full: "2026-06-26", label: "June 26" }
  ];

  const times = [
    "09:00 AM EST",
    "11:00 AM EST",
    "02:00 PM EST",
    "04:00 PM EST"
  ];

  const servicesList = [
    "Custom Full-Stack Development",
    "WordPress Enterprise Build",
    "Android App Engineering (Java/Flutter)",
    "SEO & Content Traffic Acquisition",
    "Social Media Growth Program",
    "CRM Pipelines & Client Support Hubs"
  ];

  const handleNextStep = () => {
    if (step === 1 && !service) {
      setErrorUsr("Please select a service focal point first.");
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      setErrorUsr("Please pick both an available date and timezone-aligned time session.");
      return;
    }
    setErrorUsr("");
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorUsr("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorUsr("Name and email are mandatory to generate a calendar invite.");
      return;
    }
    onSuccess({
      date: dates.find((d) => d.full === selectedDate)?.label || selectedDate,
      time: selectedTime,
      service: service
    });
    // Reset
    setStep(1);
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setEmail("");
    setCompany("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200/50 bg-white shadow-2xl transition-all dark:border-neutral-800/60 dark:bg-neutral-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 dark:border-neutral-800/60">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
                <Sparkles className="h-4 w-4 text-emerald-500" />
                Book Strategy Consultation
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Aligning technical systems with commercial conversion.
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex h-1 bg-neutral-100 dark:bg-neutral-800">
            <div
              className="bg-emerald-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="p-6">
            {errorUsr && (
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 dark:bg-red-950/40 dark:text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorUsr}</span>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Select your primary technical / commercial focal area:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {servicesList.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => {
                        setService(srv);
                        setErrorUsr("");
                      }}
                      className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs font-medium transition-all ${
                        service === srv
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/80 dark:bg-emerald-500/5 dark:text-emerald-400"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100/70 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/60"
                      }`}
                    >
                      <span>{srv}</span>
                      {service === srv && (
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Pick a Consultation Date:
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {dates.map((dt) => (
                      <button
                        key={dt.full}
                        type="button"
                        onClick={() => {
                          setSelectedDate(dt.full);
                          setErrorUsr("");
                        }}
                        className={`flex flex-col items-center rounded-xl border p-2.5 text-center transition-all ${
                          selectedDate === dt.full
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-500/5 dark:text-emerald-400"
                            : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:border-neutral-700"
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                          {dt.day}
                        </span>
                        <span className="text-sm font-bold">{dt.num}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Select Available Session (EST):
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {times.map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => {
                          setSelectedTime(tm);
                          setErrorUsr("");
                        }}
                        className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-xs font-medium transition-all ${
                          selectedTime === tm
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-500/5 dark:text-emerald-400"
                            : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-300 dark:hover:border-neutral-700"
                        }`}
                      >
                        <Clock className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>{tm}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrorUsr("");
                    }}
                    placeholder="Arslan Gill"
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 transition-all focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Business Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorUsr("");
                    }}
                    placeholder="arslan@example.com"
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 transition-all focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="AuraNexus Digital"
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 transition-all focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-neutral-900"
                  />
                </div>

                <div className="flex gap-2 rounded-xl bg-orange-50/50 p-3 text-[11px] leading-relaxed text-orange-800 dark:bg-orange-950/20 dark:text-orange-300">
                  <Smile className="h-4 w-4 shrink-0 text-orange-500" />
                  <span>
                    Our core engineers and lead strategist will review your application 1 hour prior to our schedule. Expect high-converting insights.
                  </span>
                </div>
              </form>
            )}

            {/* Action buttons */}
            <div className="mt-6 flex justify-between gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800/60">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="rounded-xl border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 px-5  py-2.5 text-xs font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-emerald-600/25 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  Secure Session Appointment
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
