"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Sliders,
  Cpu,
  Waves,
  ArrowRight,
  Lightning,
  Sparkle,
} from "@phosphor-icons/react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);
  const [activePreset, setActivePreset] = useState("cinematic");

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 10 : prev + 1));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative flex min-h-[calc(100dvh-68px)] items-center overflow-hidden border-b border-white/[0.06] bg-[#070709] bg-grid-pattern pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Ambient background light gradients - calibrated, non-purple */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Focused Value Proposition */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
            {/* Eyebrow - Section 4.7 Rule: 1 of allowed 2 eyebrows */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              THE NEXT ERA OF MEDIA INTELLIGENCE
            </div>

            {/* Headline - max 2 lines desktop */}
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every medium.
              <br />
              <span className="text-zinc-400">Unified in one engine.</span>
            </h1>

            {/* Subtext - 17 words (strictly <= 20 words) */}
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-400 md:text-lg">
              The autonomous creative platform engineered for creators, studios, and developers building the future of video.
            </p>

            {/* Actions: Primary + Secondary */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-zinc-950 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-150 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98]"
              >
                <span>Request Early Access</span>
                <ArrowRight size={16} weight="bold" className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-150 hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.98]"
              >
                <span>Explore Products</span>
              </a>
            </div>

            {/* Key product badges strip */}
            <div className="mt-12 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">CLIY STUDIO</span>
              <span className="text-zinc-600">/</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">FLOW</span>
              <span className="text-zinc-600">/</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">ENGINE</span>
              <span className="text-zinc-600">/</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">RADAR</span>
              <span className="text-zinc-600">/</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">LENS</span>
            </div>
          </div>

          {/* Right Column: Interactive Cliy Engine Console */}
          <div className="w-full lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#0e0e14]/90 p-5 shadow-2xl backdrop-blur-xl">
              
              {/* Console Window Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs font-medium text-zinc-400">cliy.engine::session_01</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400">
                  <Lightning size={12} weight="fill" />
                  <span>28ms LATENCY</span>
                </div>
              </div>

              {/* Active Pipeline Preview */}
              <div className="relative mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#07070a] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-zinc-950 transition hover:bg-cyan-400"
                      aria-label={isPlaying ? "Pause timeline" : "Play timeline"}
                    >
                      {isPlaying ? <Pause size={14} weight="fill" /> : <Play size={14} weight="fill" />}
                    </button>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">AUTONOMOUS SYNTHESIS</div>
                      <div className="font-mono text-[10px] text-zinc-500">FRAME 0842 · 4K UHD @ 60FPS</div>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    {(["cinematic", "dynamic", "viral"] as const).map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setActivePreset(preset)}
                        className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase transition ${
                          activePreset === preset
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : "bg-white/[0.04] text-zinc-400 border border-transparent hover:text-zinc-200"
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Multitrack Timeline Simulation */}
                <div className="mt-4 space-y-2 font-mono text-[11px]">
                  {/* Track 1: Vision / Scene Cut */}
                  <div className="rounded-lg border border-white/[0.06] bg-zinc-900/60 p-2">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Cpu size={12} className="text-cyan-400" /> Track 01: Neural Video Cut
                      </span>
                      <span className="text-[10px] text-zinc-500">Auto Reframe 9:16</span>
                    </div>
                    {/* Simulated Waveform / Blocks */}
                    <div className="mt-1.5 flex h-4 gap-1 overflow-hidden rounded bg-black/40 p-0.5">
                      <div className="w-[30%] rounded-sm bg-cyan-900/60 border border-cyan-500/40" />
                      <div className="w-[45%] rounded-sm bg-cyan-500/50 border border-cyan-400" />
                      <div className="w-[25%] rounded-sm bg-cyan-900/60 border border-cyan-500/40" />
                    </div>
                  </div>

                  {/* Track 2: Audio & Voice */}
                  <div className="rounded-lg border border-white/[0.06] bg-zinc-900/60 p-2">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Waves size={12} className="text-blue-400" /> Track 02: Voice & Foley Synthesis
                      </span>
                      <span className="text-[10px] text-zinc-500">Stem Isolation 48kHz</span>
                    </div>
                    <div className="mt-1.5 flex h-4 items-center gap-0.5 overflow-hidden rounded bg-black/40 px-1">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full bg-blue-400/80 transition-all duration-150"
                          style={{
                            height: `${Math.max(15, ((i * 17 + progress * 3) % 90))}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Track 3: Semantic Captions */}
                  <div className="rounded-lg border border-white/[0.06] bg-zinc-900/60 p-2">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Sparkle size={12} className="text-amber-400" /> Track 03: Kinetic Typography
                      </span>
                      <span className="text-[10px] text-zinc-500">Whisper-V3 Large</span>
                    </div>
                    <div className="mt-1.5 flex h-4 items-center rounded bg-black/40 px-2 text-[10px] text-amber-300">
                      &quot;The transition occurs at the exact emotional apex.&quot;
                    </div>
                  </div>
                </div>

                {/* Progress bar scrub indicator */}
                <div className="mt-4">
                  <div className="flex justify-between font-mono text-[10px] text-zinc-500">
                    <span>00:14:28:12</span>
                    <span className="text-cyan-400">{progress}% RENDERED</span>
                    <span>00:30:00:00</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all duration-100 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-3.5 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                  <div className="text-[10px] text-zinc-500">PIPELINE</div>
                  <div className="mt-0.5 text-xs font-semibold text-zinc-200">Active (4 Nodes)</div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                  <div className="text-[10px] text-zinc-500">FPS STABILITY</div>
                  <div className="mt-0.5 text-xs font-semibold text-emerald-400">60.0 Locked</div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                  <div className="text-[10px] text-zinc-500">RELEASE STATUS</div>
                  <div className="mt-0.5 text-xs font-semibold text-cyan-400">Coming Soon</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
