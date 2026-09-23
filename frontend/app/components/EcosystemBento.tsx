"use client";

import {
  Cpu,
  Database,
  Lightning,
  Network,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

export function EcosystemBento() {
  return (
    <section id="architecture" className="relative border-b border-white/[0.06] bg-[#070709] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Eyebrow (Eyebrow 2 of 2 allowed on page) */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineered for sub-second intelligence.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            A distributed infrastructure designed specifically for high-throughput video generation, frame-level analysis, and automated multi-track timeline synthesis.
          </p>
        </div>

        {/* Asymmetric Bento Grid - 4 Rhythmic Cells with visual diversity */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Cell 1: Large Featured Tile (Distributed GPU Rendering Pipeline) - Span 8 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f0f18] via-[#0d0d14] to-[#07070a] p-8 md:col-span-8">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/50 text-cyan-400">
                  <Cpu size={22} weight="bold" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                  Distributed Timeline Rendering Engine
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  Workloads are split across isolated GPU clusters, allowing real-time timeline previews, instant cuts, and multi-format encoding without frame drops.
                </p>
              </div>

              {/* Visual Stream Simulation inside cell */}
              <div className="mt-8 rounded-xl border border-white/[0.08] bg-black/60 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-400 text-[11px] border-b border-white/[0.06] pb-2">
                  <span>GPU Cluster us-east-1 // Node Array 08</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Load: 24%
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5">
                    <div className="text-[10px] text-zinc-500">THROUGHPUT</div>
                    <div className="mt-0.5 text-sm font-semibold text-white">4.8 GB/s</div>
                  </div>
                  <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5">
                    <div className="text-[10px] text-zinc-500">FRAME TIME</div>
                    <div className="mt-0.5 text-sm font-semibold text-cyan-400">16.4 ms</div>
                  </div>
                  <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5">
                    <div className="text-[10px] text-zinc-500">PARALLEL STREAMS</div>
                    <div className="mt-0.5 text-sm font-semibold text-white">64 Channels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Accent Tile (Sub-50ms Global Edge) - Span 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-[#0e0e16] to-[#07070a] p-8 md:col-span-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-300">
              <Lightning size={22} weight="bold" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Sub-50ms Edge Delivery
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Low-latency edge caching and pre-computed timelines distributed across 32 global edge points of presence.
            </p>

            <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4 font-mono">
              <div className="text-[10px] text-cyan-400">GLOBAL PING BENCHMARK</div>
              <div className="mt-2 space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span>North America (IAD)</span>
                  <span className="text-cyan-300 font-semibold">14ms</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Europe (FRA)</span>
                  <span className="text-cyan-300 font-semibold">22ms</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Asia Pacific (HND)</span>
                  <span className="text-cyan-300 font-semibold">38ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 3: Neural Vector Memory - Span 5 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e14] p-8 md:col-span-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300">
              <Database size={22} weight="bold" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Semantic Asset Graph
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Every video frame, audio transcript, and visual element is indexed into vector embeddings for instant semantic search and contextual B-roll matching.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">Vector Embeddings</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">Whisper Transcript Graph</span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-300">Object Segment Vectors</span>
            </div>
          </div>

          {/* Cell 4: Multi-Agent Pipeline Orchestration - Span 7 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e14] p-8 md:col-span-7">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300">
              <Network size={22} weight="bold" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Autonomous Multi-Agent Pipeline
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Specialized neural agents collaborate asynchronously: one detects narrative peaks, another synchronizes background score, and a third formats dynamic captions.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg border border-white/[0.06] bg-black/40 p-3">
                <div className="font-semibold text-white">Agent Alpha</div>
                <div className="mt-1 text-[11px] text-zinc-400">Narrative & Hook Analysis</div>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-black/40 p-3">
                <div className="font-semibold text-white">Agent Beta</div>
                <div className="mt-1 text-[11px] text-zinc-400">Audio Pacing & Foley</div>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-black/40 p-3">
                <div className="font-semibold text-white">Agent Gamma</div>
                <div className="mt-1 text-[11px] text-zinc-400">Aspect Crop & Render</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
