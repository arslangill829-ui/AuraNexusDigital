import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, subtitle, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal content body container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/50 bg-white shadow-2xl transition-all dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Top Panel Actions */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4.5 dark:border-neutral-800/80">
            <div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight dark:text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-neutral-400 mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              aria-label="Close Case Study Details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Child Injector */}
          <div className="max-h-[75vh] overflow-y-auto px-6 py-6 font-sans">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
