"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <div className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      
      {/* 1. Optimized Full-Bleed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/money-poster.jpg"
        className="fixed inset-0 h-full w-full object-cover z-0 pointer-events-none"
      >
        <source src="/money-rain.mp4" type="video/mp4" />
      </video>

      {/* 2. Calibrated Scrim Overlays for Pure Legibility */}
      <div className="fixed inset-0 z-10 bg-black/60 backdrop-blur-[1px] pointer-events-none" />
      <div className="fixed inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/75 pointer-events-none" />

      {/* 3. Top Header Bar (Zero Pills) */}
      <header className="relative z-20 w-full pt-8 sm:pt-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              cliy.me
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/platform"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              Platform Overview
            </Link>
            <a
              href="mailto:hello@cliy.me"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* 4. Main Centered Content */}
      <main className="relative z-20 mx-auto my-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
        
        {/* Pure Typography Eyebrow (No pill) */}
        <div className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-stone-400 font-mono">
          Coming Soon
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          Get ready to build
          <br />
          <span className="text-stone-400">with us.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-stone-300 font-normal">
          We are engineering the future of software development, intelligent tools, and autonomous pipelines. Drop your email to join us on day one.
        </p>

        {/* Primary Action: Email Capture Form */}
        <div className="mt-8 w-full max-w-md">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl bg-white/15 p-2 border border-white/25 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] backdrop-blur-xl focus-within:border-white focus-within:ring-2 focus-within:ring-white/30 transition-all"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join us"
                className="flex-1 px-4 py-3 text-sm text-white placeholder:text-stone-300 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 px-7 rounded-xl bg-white hover:bg-stone-100 text-stone-950 text-sm font-semibold tracking-wide transition-all active:scale-[0.98] shadow-md disabled:opacity-70 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span>Joining...</span>
                ) : (
                  <>
                    <span>Join Us</span>
                    <ArrowRight size={15} weight="bold" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-xl px-5 py-4 text-sm text-emerald-200 font-medium shadow-xl">
              <CheckCircle size={20} weight="fill" className="text-emerald-400 shrink-0" />
              <span>You are on the list. We will send an invite as soon as we open.</span>
            </div>
          )}
          <p className="mt-3 text-xs text-stone-400 font-mono">
            Early access invites dispatched sequentially. Zero spam.
          </p>
        </div>

      </main>

      {/* 5. Bottom Footer Bar (Zero Pills, No Pause Button) */}
      <footer className="relative z-20 w-full pb-8 sm:pb-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-stone-400 sm:px-10 lg:px-16 font-mono text-[11px]">
          <div>(C) 2026 cliy.me. All rights reserved.</div>
          
          <a
            href="mailto:hello@cliy.me"
            className="text-stone-300 transition-colors hover:text-white underline underline-offset-2"
          >
            hello@cliy.me
          </a>
        </div>
      </footer>

    </div>
  );
}
