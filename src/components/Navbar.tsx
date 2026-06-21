import React, { useState } from "react";
import { Menu, X, Sun, Moon, Sparkles, Code, Layers } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onBookClick: () => void;
  activeSection: string;
}

export function Navbar({ darkMode, toggleDarkMode, onBookClick, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#custom-plan", label: "Builder" },
    { href: "#portfolio", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-neutral-900/60 dark:bg-neutral-950/90 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="group flex items-center gap-2 font-sans font-black tracking-tight text-neutral-950 dark:text-white"
          >
            <Layers className="h-5 w-5 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-base tracking-tight text-neutral-905 text-neutral-900 dark:text-white">
              AuraNexus<span className="font-medium text-neutral-450 text-neutral-400 dark:text-neutral-500">Digital</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, id)}
                    className={`relative py-2 text-xs font-bold tracking-wider uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-[-16px] left-0 right-0 h-0.5 bg-violet-600 dark:bg-violet-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Micro division line */}
            <span className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800" />

            {/* Dark Mode Icon Toggle */}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-150 transition-colors dark:text-neutral-400 dark:hover:bg-neutral-900 cursor-pointer"
              aria-label="Toggle structural dark/light appearance"
            >
              {darkMode ? (
                <Sun className="h-4.5 w-4.5 text-orange-400" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-neutral-700 dark:text-neutral-400" />
              )}
            </button>

            {/* Dynamic Consultation Call Booking */}
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-4.5 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-neutral-800 hover:shadow-neutral-950/20 active:scale-95 dark:bg-violet-600 dark:hover:bg-violet-500 dark:hover:shadow-violet-600/20 cursor-pointer"
            >
              <Sparkles className="h-3 w-3" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Right Controls Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick Dark Mode Toggle (mobile) */}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-orange-400" />
              ) : (
                <Moon className="h-4 w-4 text-neutral-700" />
              )}
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-100 bg-white shadow-xl md:hidden dark:border-neutral-900 dark:bg-neutral-950">
          <div className="space-y-1.5 px-4 pt-3 pb-4">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, id)}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-neutral-50 text-violet-600 dark:bg-neutral-900 dark:text-violet-400"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="border-t border-neutral-100 pt-3 dark:border-neutral-900">
              <button
                onClick={onBookClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-3 text-xs font-bold text-white dark:bg-violet-600"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book Strategy Session</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
