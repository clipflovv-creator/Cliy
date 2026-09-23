"use client";

import { useState } from "react";
import {
  FilmSlate,
  GitBranch,
  Terminal,
  ChartLineUp,
  Eye,
  CheckCircle,
  Lightning,
  Sparkle,
  ArrowRight,
  Cube,
  Play,
  ShareNetwork,
} from "@phosphor-icons/react";

interface Product {
  id: string;
  name: string;
  category: string;
  status: string;
  statusColor: string;
  tagline: string;
  description: string;
  icon: typeof FilmSlate;
  features: string[];
  specs: { label: string; value: string }[];
}

const products: Product[] = [
  {
    id: "studio",
    name: "Cliy Studio",
    category: "CREATION CANVAS",
    status: "Private Alpha",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    tagline: "AI-native multi-track timeline for modern video teams.",
    description:
      "A next-generation desktop canvas designed to turn raw hours of media into publication-ready cuts. Features generative timeline re-sequencing, voice match, and automatic beat sync.",
    icon: FilmSlate,
    features: [
      "Dynamic timeline re-sequencing with emotional arc detection",
      "Studio-grade voice synthesis and stem audio separation",
      "Instant kinetic caption rendering with custom typeface engines",
    ],
    specs: [
      { label: "Rendering Engine", value: "GPU WebGL2 / Metal" },
      { label: "Max Tracks", value: "32 Audio / 16 Video" },
      { label: "Export Formats", value: "ProRes, AV1, H.265" },
    ],
  },
  {
    id: "flow",
    name: "Cliy Flow",
    category: "PIPELINE AUTOMATION",
    status: "Coming Q2",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    tagline: "Autonomous pipelines from raw footage to multi-channel drops.",
    description:
      "Connect file storage, cloud buckets, or live streams directly to automated workflows. Transcribe, segment, crop to 9:16, add captions, and schedule delivery without human intervention.",
    icon: GitBranch,
    features: [
      "Event-driven triggers from S3, Google Cloud Storage, or YouTube links",
      "Algorithmic aspect ratio transformation with subject centering",
      "Automated webhooks with notification callbacks and asset bundling",
    ],
    specs: [
      { label: "Trigger Latency", value: "< 120ms event pickup" },
      { label: "Pipeline Parallelism", value: "Up to 50 concurrent jobs" },
      { label: "Integrations", value: "REST, Zapier, Webhooks" },
    ],
  },
  {
    id: "engine",
    name: "Cliy Engine",
    category: "DEVELOPER API & SDK",
    status: "Developer Preview",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    tagline: "Headless cloud media processing infrastructure.",
    description:
      "Integrate intelligent video generation and automated media transforms directly into your software. Built on distributed micro-workers with frame-level deterministic output.",
    icon: Terminal,
    features: [
      "Sub-50ms frame analysis and transcription endpoints",
      "TypeScript, Python, and Go client libraries with complete type coverage",
      "Dynamic timeline JSON schema for headless rendering at scale",
    ],
    specs: [
      { label: "API Protocol", value: "gRPC & REST / JSON" },
      { label: "Render Throughput", value: "10x real-time speed" },
      { label: "Availability SLA", value: "99.95% target uptime" },
    ],
  },
  {
    id: "radar",
    name: "Cliy Radar",
    category: "CREATOR INTELLIGENCE",
    status: "In Research",
    statusColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    tagline: "Predictive engagement and retention analytics.",
    description:
      "Deep retention modeling that benchmarks short-form video against millions of data points. Identify exact drop-off moments before you publish, optimizing hooks and audio balance.",
    icon: ChartLineUp,
    features: [
      "Second-by-second predicted retention curve calculation",
      "Hook intensity and audio-visual pacing diagnostic scoring",
      "Cross-platform format recommendations based on current trends",
    ],
    specs: [
      { label: "Model Architecture", value: "Cliy-Transformer V2" },
      { label: "Diagnostic Signals", value: "38 structural indicators" },
      { label: "Confidence Threshold", value: "94.2% engagement correlation" },
    ],
  },
  {
    id: "lens",
    name: "Cliy Lens",
    category: "PERCEPTION PLUGIN",
    status: "Coming Soon",
    statusColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    tagline: "Real-time semantic computer vision for video streams.",
    description:
      "A neural perception layer that understands people, gestures, lighting, and narrative context. Automatically inserts context-aware B-roll and generates dynamic depth maps.",
    icon: Eye,
    features: [
      "Real-time subject masking without green screens",
      "Contextual semantic B-roll search and insertion",
      "Cinematic focal blur and lighting recalibration",
    ],
    specs: [
      { label: "Segmentation", value: "Pixel-perfect alpha masks" },
      { label: "Processing Speed", value: "4K real-time @ 60 FPS" },
      { label: "Color Space", value: "10-bit HDR Rec.2020" },
    ],
  },
];

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<string>("studio");
  const activeProduct = products.find((p) => p.id === activeId) || products[0];

  return (
    <section id="products" className="relative border-b border-white/[0.06] bg-[#070709] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header - Stacked vertically per Section 4.7 */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Cliy Product Suite.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Five specialized products designed to work in synergy, from local creation to cloud-scale automated distribution.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5 border-b border-white/[0.08] pb-6">
          {products.map((product) => {
            const Icon = product.icon;
            const isActive = product.id === activeId;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setActiveId(product.id)}
                className={`group flex items-center gap-2.5 rounded-xl px-4 py-3 text-left transition-all duration-150 ${
                  isActive
                    ? "bg-white/[0.08] text-white border border-white/20 shadow-md"
                    : "bg-white/[0.02] text-zinc-400 border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.05] hover:text-zinc-200"
                }`}
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                    isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-white/[0.04] text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  <Icon size={16} weight={isActive ? "bold" : "regular"} />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">{product.name}</div>
                  <div className="text-[10px] font-mono text-zinc-500">{product.category}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Stage */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0e0e14] p-6 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* Left Column: Product Info & Core Capabilities */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-semibold ${activeProduct.statusColor}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {activeProduct.status}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{activeProduct.category}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {activeProduct.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {activeProduct.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {activeProduct.description}
                </p>

                {/* Key Capabilities */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">Key Capabilities</div>
                  {activeProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <div className="grid grid-cols-3 gap-3">
                  {activeProduct.specs.map((spec, idx) => (
                    <div key={idx} className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5">
                      <div className="text-[10px] font-mono text-zinc-500">{spec.label}</div>
                      <div className="mt-1 text-xs font-semibold text-zinc-200">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="#waitlist"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-white px-5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 active:scale-[0.98]"
                  >
                    <span>Request Early Access</span>
                    <ArrowRight size={14} weight="bold" />
                  </a>
                  <span className="text-xs text-zinc-500">Releasing sequentially across 2026</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Simulator Preview */}
            <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#07070a] p-5 lg:col-span-7">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <Cube size={14} className="text-cyan-400" />
                  <span>Interactive Component Sandbox</span>
                </span>
                <span className="text-emerald-400">Simulation Active</span>
              </div>

              {/* Dynamic preview content per product */}
              <div className="mt-5 flex-1">
                {activeProduct.id === "studio" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-3">
                      <div className="flex justify-between text-zinc-400 text-[11px]">
                        <span>Timeline Canvas: Project_Reel_V3</span>
                        <span className="text-cyan-400">Snapping: 120BPM</span>
                      </div>
                      <div className="mt-3 grid grid-cols-4 gap-2">
                        <div className="rounded border border-cyan-500/40 bg-cyan-950/40 p-2 text-[10px] text-cyan-200">
                          Hook Sequence (0:00-0:03)
                        </div>
                        <div className="rounded border border-blue-500/40 bg-blue-950/40 p-2 text-[10px] text-blue-200">
                          Key Insight (0:03-0:14)
                        </div>
                        <div className="rounded border border-amber-500/40 bg-amber-950/40 p-2 text-[10px] text-amber-200">
                          Visual Proof (0:14-0:22)
                        </div>
                        <div className="rounded border border-emerald-500/40 bg-emerald-950/40 p-2 text-[10px] text-emerald-200">
                          Call To Action (0:22-0:28)
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-3">
                        <div className="text-[10px] text-zinc-500">VOICE PROJECTION</div>
                        <div className="mt-1 flex items-center justify-between text-zinc-200">
                          <span>Studio Voice A7</span>
                          <span className="text-emerald-400 text-[10px]">99.8% Match</span>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-3">
                        <div className="text-[10px] text-zinc-500">COLOR SPACE</div>
                        <div className="mt-1 flex items-center justify-between text-zinc-200">
                          <span>DaVinci Wide Gamut</span>
                          <span className="text-cyan-400 text-[10px]">Auto LUT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProduct.id === "flow" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-4">
                      <div className="text-[11px] text-zinc-400">Node Orchestration Graph</div>
                      <div className="mt-4 flex items-center justify-between gap-2 overflow-x-auto py-2">
                        <div className="rounded-lg border border-cyan-500/50 bg-cyan-950/40 px-3 py-2 text-center">
                          <div className="text-[10px] text-cyan-300">INGEST</div>
                          <div className="mt-0.5 text-xs font-bold text-white">S3 Bucket</div>
                        </div>
                        <div className="text-zinc-600">→</div>
                        <div className="rounded-lg border border-blue-500/50 bg-blue-950/40 px-3 py-2 text-center">
                          <div className="text-[10px] text-blue-300">TRANSCRIBE</div>
                          <div className="mt-0.5 text-xs font-bold text-white">Whisper-V3</div>
                        </div>
                        <div className="text-zinc-600">→</div>
                        <div className="rounded-lg border border-amber-500/50 bg-amber-950/40 px-3 py-2 text-center">
                          <div className="text-[10px] text-amber-300">REFRAME</div>
                          <div className="mt-0.5 text-xs font-bold text-white">9:16 Crop</div>
                        </div>
                        <div className="text-zinc-600">→</div>
                        <div className="rounded-lg border border-emerald-500/50 bg-emerald-950/40 px-3 py-2 text-center">
                          <div className="text-[10px] text-emerald-300">PUBLISH</div>
                          <div className="mt-0.5 text-xs font-bold text-white">Webhooks</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-3 text-[11px] text-zinc-400">
                      Auto-triggered 48 minutes ago: 12 vertical clips generated with 0 errors.
                    </div>
                  </div>
                )}

                {activeProduct.id === "engine" && (
                  <div className="rounded-lg border border-white/[0.08] bg-zinc-950 p-4 font-mono text-[11px]">
                    <div className="flex justify-between text-zinc-500">
                      <span>POST /v1/timeline/synthesize</span>
                      <span className="text-emerald-400">200 OK (38ms)</span>
                    </div>
                    <pre className="mt-3 text-cyan-300">
{`{
  "project_id": "proj_94a7e1",
  "resolution": "3840x2160",
  "framerate": 60,
  "nodes": [
    { "type": "scene_detection", "threshold": 0.82 },
    { "type": "neural_captioning", "style": "kinetic" },
    { "type": "export_target", "format": "prores_422" }
  ],
  "status": "rendering_complete"
}`}
                    </pre>
                  </div>
                )}

                {activeProduct.id === "radar" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-4">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-zinc-400">Simulated Retention Trajectory</span>
                        <span className="text-emerald-400 font-bold">88.4% at 30s</span>
                      </div>
                      <div className="mt-4 flex h-24 items-end gap-1 border-b border-zinc-700 pb-1">
                        {[100, 96, 94, 91, 89, 87, 88, 86, 85, 84, 83, 84, 82, 81, 80].map((val, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-cyan-400/80 hover:bg-cyan-300 transition-colors"
                            style={{ height: `${val}%` }}
                            title={`Second ${i * 2}: ${val}% retention`}
                          />
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-zinc-500">
                        <span>0:00 (Hook)</span>
                        <span>0:15 (Pacing Spike)</span>
                        <span>0:30 (Resolution)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeProduct.id === "lens" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-zinc-900/80 p-4">
                      <div className="text-[11px] text-zinc-400">Semantic Segmentation Map</div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="rounded border border-cyan-500/40 bg-cyan-950/30 p-2.5">
                          <div className="text-[10px] text-cyan-400">FOREGROUND</div>
                          <div className="mt-1 text-xs font-semibold text-white">Subject Isolated</div>
                          <div className="text-[10px] text-zinc-400">Confidence: 99.4%</div>
                        </div>
                        <div className="rounded border border-blue-500/40 bg-blue-950/30 p-2.5">
                          <div className="text-[10px] text-blue-400">DEPTH MAP</div>
                          <div className="mt-1 text-xs font-semibold text-white">Z-Buffer 16-Bit</div>
                          <div className="text-[10px] text-zinc-400">Depth: 1.84m</div>
                        </div>
                        <div className="rounded border border-purple-500/40 bg-purple-950/30 p-2.5">
                          <div className="text-[10px] text-purple-400">LIGHTING MAP</div>
                          <div className="mt-1 text-xs font-semibold text-white">5600K Daylight</div>
                          <div className="text-[10px] text-zinc-400">Contrast: Normal</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
