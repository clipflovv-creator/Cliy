"use client";

import { useState } from "react";
import { ArrowRight, List, X, Sparkle } from "@phosphor-icons/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#070709]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Wordmark */}
        <a href="#" className="group flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkle size={18} weight="fill" className="text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex items-baseline tracking-tight">
            <span className="font-sans text-xl font-bold tracking-tight text-white">CLIY</span>
            <span className="ml-1 text-[11px] font-semibold text-cyan-400">OS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#products"
            className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
          >
            Products
          </a>
          <a
            href="#architecture"
            className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
          >
            Architecture
          </a>
          <a
            href="#pipeline"
            className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
          >
            Pipeline
          </a>
          <a
            href="#waitlist"
            className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
          >
            Access
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#waitlist"
            className="group inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-zinc-950 shadow-sm transition-all duration-150 hover:bg-zinc-200 active:scale-[0.98]"
          >
            <span>Request Early Access</span>
            <ArrowRight size={14} weight="bold" className="transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0c0c12] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white"
            >
              Products
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white"
            >
              Architecture
            </a>
            <a
              href="#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white"
            >
              Pipeline
            </a>
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950"
            >
              <span>Request Early Access</span>
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
