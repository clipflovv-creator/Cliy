"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code,
  Cpu,
  ChatCircleText,
  Lightbulb,
  GearSix,
  CheckCircle,
  Terminal,
  TreeStructure,
  Gauge,
} from "@phosphor-icons/react";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  status: string;
  statusBadge: {
    bg: string;
    text: string;
    border: string;
    dot: string;
  };
  problem: string;
  solution: string;
  tags: string[];
}

const productList: ProductItem[] = [
  {
    id: "flow",
    name: "Cliy Flow",
    category: "PIPELINE AUTOMATION",
    status: "In Active Development",
    statusBadge: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
    },
    problem:
      "Media teams waste tens of hours every week manually cropping, captioning, and re-exporting video for fragmented channels.",
    solution:
      "An autonomous event-driven media pipeline that detects recording drops, transcribes audio, reframes subjects to 9:16, and delivers platform-ready assets.",
    tags: ["Autonomous Workflows", "Auto 9:16 Reframe", "Cloud Webhooks"],
  },
  {
    id: "engine",
    name: "Cliy Engine",
    category: "CLOUD MEDIA API",
    status: "Private Alpha",
    statusBadge: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200",
      dot: "bg-amber-500",
    },
    problem:
      "Building video generation and rendering features into products requires managing complex FFmpeg clusters and dealing with slow, brittle jobs.",
    solution:
      "A headless cloud rendering API with frame-level determinism, sub-50ms dispatch latency, and clean TypeScript SDKs.",
    tags: ["gRPC & REST", "Headless Timeline", "GPU Clusters"],
  },
  {
    id: "canvas",
    name: "Cliy Canvas",
    category: "CREATIVE WORKSPACE",
    status: "Coming Soon",
    statusBadge: {
      bg: "bg-indigo-50",
      text: "text-indigo-800",
      border: "border-indigo-200",
      dot: "bg-indigo-500",
    },
    problem:
      "Creative teams work across disconnected tools, constantly copying assets between editors, caption generators, and voice synthesizers.",
    solution:
      "A unified, spatial desktop workspace combining multitrack video editing, voice cloning, kinetic typography, and asset management in one surface.",
    tags: ["Multitrack Editor", "Voice Synthesis", "Kinetic Typography"],
  },
  {
    id: "pulse",
    name: "Cliy Pulse",
    category: "INTELLIGENCE & RETENTION",
    status: "In Research",
    statusBadge: {
      bg: "bg-purple-50",
      text: "text-purple-800",
      border: "border-purple-200",
      dot: "bg-purple-500",
    },
    problem:
      "Creators and marketers publish videos without knowing where audience attention drops or which narrative structures drive retention.",
    solution:
      "A predictive analytics engine that benchmarks structural hooks, audio pacing, and scene transitions against engagement data before publishing.",
    tags: ["Retention Modeling", "Hook Diagnostics", "Pacing Scores"],
  },
];

const engagementTypes = [
  { id: "product", label: "New Software Product", icon: Lightbulb },
  { id: "workflow", label: "Automate a Workflow", icon: GearSix },
  { id: "custom", label: "Custom Architecture / API", icon: Code },
  { id: "discussion", label: "Explore an Idea / Consult", icon: ChatCircleText },
];

export function Home() {
  // Undisputed Primary Hero CTA state
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Interactive Software Mockup state
  const [activeTab, setActiveTab] = useState<"code" | "pipeline" | "telemetry">("code");

  // Contact form state
  const [selectedType, setSelectedType] = useState("product");
  const [problemDescription, setProblemDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroEmail || !heroEmail.includes("@")) return;

    setHeroSubmitting(true);
    setTimeout(() => {
      setHeroSubmitting(false);
      setHeroSubmitted(true);
    }, 400);
  };

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactEmail.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#FAFAFA] text-[#18181B] selection:bg-stone-200 selection:text-stone-900">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAFAFA]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="text-xl font-bold tracking-tight text-stone-900">
              cliy
            </span>
            <span className="rounded bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-stone-600 border border-stone-200">
              Software Lab
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#products" className="transition-colors hover:text-stone-950">
              Products
            </a>
            <a href="#how-we-work" className="transition-colors hover:text-stone-950">
              How We Work
            </a>
            <a href="#connect" className="transition-colors hover:text-stone-950">
              Build With Us
            </a>
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-1.5 font-semibold text-stone-900 hover:text-emerald-700 transition-colors"
            >
              <span>Coming Soon</span>
              <span className="rounded bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-1.5 py-0.5">
                Video
              </span>
            </Link>
          </nav>

          {/* Header Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-medium text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lab Active</span>
            </div>
            <a
              href="#connect"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-stone-900 px-4 text-xs font-semibold text-stone-50 transition-all hover:bg-stone-800 active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Single-Focus Strategic Alignment */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 sm:px-10 lg:px-16 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Focused Copy & Undisputed Primary CTA */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-6">
            
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-700">
              <span>INDEPENDENT SOFTWARE PLATFORM</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl leading-[1.08]">
              We build products.
              <br />
              <span className="text-stone-600 font-semibold">We solve problems.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-stone-700 font-normal">
              Cliy is an independent software development platform. We engineer our own product suite and partner with teams to turn complex ideas and bottlenecks into finished software.
            </p>

            {/* Undisputed Primary CTA: Email Capture */}
            <div className="mt-8 w-full max-w-md">
              {!heroSubmitted ? (
                <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl bg-white p-1.5 border border-stone-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] focus-within:border-stone-900 focus-within:ring-2 focus-within:ring-stone-900/10 transition-all">
                  <input
                    type="email"
                    required
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="flex-1 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-600 bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={heroSubmitting}
                    className="inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-semibold tracking-wide transition-all active:scale-[0.98] shadow-sm disabled:opacity-70 whitespace-nowrap"
                  >
                    {heroSubmitting ? (
                      <span>Saving...</span>
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <ArrowRight size={15} weight="bold" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-5 py-3.5 text-sm text-emerald-900 font-medium">
                  <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                  <span>You are on our priority early access list. We will be in touch.</span>
                </div>
              )}
              <p className="mt-2.5 text-xs text-stone-600 font-mono">
                Get early invites as our products roll out. No spam, ever.
              </p>
            </div>

          </div>

          {/* Right Column: Stylized Software Development Platform Visual */}
          <div className="w-full lg:col-span-6 xl:col-span-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] sm:p-5">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs font-semibold text-stone-700">
                    cliy.workspace / engine.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 font-mono text-[10px] font-medium text-stone-600 border border-stone-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Runtime Active</span>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="mt-3 flex gap-2 border-b border-stone-100 pb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeTab === "code"
                      ? "bg-stone-900 text-white shadow-sm"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <Terminal size={14} weight="bold" />
                  <span>Code Editor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("pipeline")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeTab === "pipeline"
                      ? "bg-stone-900 text-white shadow-sm"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <TreeStructure size={14} weight="bold" />
                  <span>Pipeline Graph</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeTab === "telemetry"
                      ? "bg-stone-900 text-white shadow-sm"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <Gauge size={14} weight="bold" />
                  <span>Telemetry</span>
                </button>
              </div>

              {/* Active Tab Content */}
              <div className="mt-4 rounded-xl bg-stone-50 border border-stone-200 p-4 font-mono text-xs text-stone-800">
                {activeTab === "code" && (
                  <div className="space-y-1.5 overflow-x-auto text-[12px] leading-relaxed">
                    <div className="text-stone-600">// Cliy Engine: Autonomous Media Synthesis</div>
                    <div>
                      <span className="text-purple-700 font-semibold">import</span> &#123;{" "}
                      <span className="text-blue-700">CliyPipeline</span>,{" "}
                      <span className="text-blue-700">MediaDispatcher</span> &#125;{" "}
                      <span className="text-purple-700 font-semibold">from</span>{" "}
                      <span className="text-emerald-700">&apos;@cliy/core&apos;</span>;
                    </div>
                    <div className="pt-1">
                      <span className="text-purple-700 font-semibold">const</span> pipeline ={" "}
                      <span className="text-purple-700 font-semibold">new</span>{" "}
                      <span className="text-blue-700">CliyPipeline</span>(&#123;
                    </div>
                    <div className="pl-4">
                      concurrency: <span className="text-amber-700">32</span>,
                    </div>
                    <div className="pl-4">
                      mode: <span className="text-emerald-700">&apos;sub-50ms-deterministic&apos;</span>,
                    </div>
                    <div className="pl-4">
                      autoReframe: &#123; target: <span className="text-emerald-700">&apos;9:16&apos;</span>, subjectTracking: <span className="text-amber-700">true</span> &#125;,
                    </div>
                    <div>&#125;);</div>
                    <div className="pt-1 text-stone-600">
                      <span className="text-purple-700 font-semibold">await</span> pipeline.
                      <span className="text-blue-700">dispatch</span>(&apos;raw_stream_01&apos;);
                    </div>
                  </div>
                )}

                {activeTab === "pipeline" && (
                  <div className="py-2">
                    <div className="text-[11px] font-semibold text-stone-700 mb-3">
                      Event Pipeline: Raw Input to Multi-Platform Render
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
                      <div className="w-full sm:w-auto rounded-lg border border-stone-300 bg-white p-2.5 text-center shadow-xs">
                        <div className="text-[10px] text-stone-600 font-semibold">INGEST</div>
                        <div className="text-xs font-bold text-stone-900">S3 / Stream</div>
                      </div>
                      <span className="text-stone-600 hidden sm:inline">→</span>
                      <div className="w-full sm:w-auto rounded-lg border border-emerald-300 bg-emerald-50/50 p-2.5 text-center shadow-xs">
                        <div className="text-[10px] text-emerald-800 font-semibold">TRANSCRIPTION</div>
                        <div className="text-xs font-bold text-stone-900">Whisper-V3</div>
                      </div>
                      <span className="text-stone-600 hidden sm:inline">→</span>
                      <div className="w-full sm:w-auto rounded-lg border border-blue-300 bg-blue-50/50 p-2.5 text-center shadow-xs">
                        <div className="text-[10px] text-blue-800 font-semibold">NEURAL CUT</div>
                        <div className="text-xs font-bold text-stone-900">Hook Detect</div>
                      </div>
                      <span className="text-stone-600 hidden sm:inline">→</span>
                      <div className="w-full sm:w-auto rounded-lg border border-purple-300 bg-purple-50/50 p-2.5 text-center shadow-xs">
                        <div className="text-[10px] text-purple-800 font-semibold">DELIVERY</div>
                        <div className="text-xs font-bold text-stone-900">Webhook</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "telemetry" && (
                  <div className="grid grid-cols-3 gap-2.5 py-1 text-center">
                    <div className="rounded-lg border border-stone-200 bg-white p-3">
                      <div className="text-[10px] text-stone-600 font-semibold">LATENCY</div>
                      <div className="mt-1 text-sm font-bold text-emerald-600">38 ms</div>
                      <div className="text-[9px] text-stone-600">Sub-50ms target</div>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white p-3">
                      <div className="text-[10px] text-stone-600 font-semibold">THROUGHPUT</div>
                      <div className="mt-1 text-sm font-bold text-stone-900">4.8 GB/s</div>
                      <div className="text-[9px] text-stone-600">32 Edge Nodes</div>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white p-3">
                      <div className="text-[10px] text-stone-600 font-semibold">UPTIME</div>
                      <div className="mt-1 text-sm font-bold text-stone-900">99.99%</div>
                      <div className="text-[9px] text-stone-600">Zero frame loss</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Console Status */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-stone-700 px-1">
                <span>Cliy Distributed Platform Core</span>
                <span className="font-semibold text-stone-900">Release Stage: 2026</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Product Suite with Generous Internal Padding & Clear Status Tags */}
      <section id="products" className="relative z-10 border-t border-stone-200/80 bg-stone-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-700">
              PRODUCT ARCHIVE & PIPELINE
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Software we build.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-700 font-normal">
              Each product in our portfolio targets a structural bottleneck. We design, prototype, and engineer software that eliminates manual operational drag.
            </p>
          </div>

          {/* Product Cards Grid: Generous p-8 to p-10 padding & distinct lifecycle tags */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {productList.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 border border-stone-200/90 shadow-sm transition-all duration-200 hover:shadow-md hover:border-stone-300"
              >
                <div>
                  {/* Category & Status Badge */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <span className="font-mono text-xs font-semibold tracking-wider text-stone-700">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-semibold ${item.statusBadge.bg} ${item.statusBadge.text} ${item.statusBadge.border}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${item.statusBadge.dot}`} />
                      {item.status}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                    {item.name}
                  </h3>

                  {/* High Contrast Problem & Solution Breakdown */}
                  <div className="mt-6 space-y-4 text-base">
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-stone-700">
                        The Problem
                      </div>
                      <p className="mt-1.5 text-stone-700 leading-relaxed font-normal">
                        {item.problem}
                      </p>
                    </div>

                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
                        Our Solution
                      </div>
                      <p className="mt-1.5 text-stone-900 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture Tags */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-stone-100 pt-5 font-mono text-xs text-stone-700">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-stone-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: How We Operate (Consistent 80px-96px vertical rhythm) */}
      <section id="how-we-work" className="relative z-10 border-t border-stone-200/80 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-700">
              HOW WE OPERATE
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              From raw problem to working code.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-700 font-normal">
              We operate both as an internal software foundry and as an engineering partner for founders and organizations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-stone-200 bg-stone-50/50 p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-900 border border-stone-200 shadow-xs">
                <Lightbulb size={24} weight="bold" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-stone-900">
                01. Idea to Product
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-700 font-normal">
                Have an ambitious product concept? We assist with technical architecture, user flow mapping, and rapid end-to-end prototyping.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50/50 p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-900 border border-stone-200 shadow-xs">
                <GearSix size={24} weight="bold" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-stone-900">
                02. Workflow Automation
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-700 font-normal">
                Tired of repetitive manual work? We build custom event-driven pipelines, background workers, and automated integrations that run reliably.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50/50 p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-900 border border-stone-200 shadow-xs">
                <Cpu size={24} weight="bold" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-stone-900">
                03. Custom Engineering
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-700 font-normal">
                High-performance web apps, APIs, and media tools built with strict craftsmanship, clean codebases, and zero unnecessary bloat.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Distinct, Elevated Contact & Solution Finder */}
      <section id="connect" className="relative z-10 border-t border-stone-200/80 bg-stone-50/80 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16 text-center">
          
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-700">
            CONNECT WITH CLIY
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Have a problem to solve or an idea to build?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-stone-700 font-normal">
            Tell us what you are wrestling with. Whether you need a full software product engineered from scratch or a bottleneck eliminated, we are here to collaborate.
          </p>

          {/* Elevated, High-Contrast Form Container */}
          <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 text-left shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleConnectSubmit} className="space-y-6">
                
                {/* Intent Selector */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700">
                    What are you looking to do?
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {engagementTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex items-center gap-3 rounded-2xl border min-h-[48px] p-3.5 text-left text-sm font-semibold transition-all ${
                            isSelected
                              ? "border-stone-900 bg-stone-900 text-stone-50 shadow-sm"
                              : "border-stone-300 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50"
                          }`}
                        >
                          <Icon
                            size={18}
                            weight={isSelected ? "bold" : "regular"}
                            className={isSelected ? "text-stone-300" : "text-stone-700"}
                          />
                          <span>{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Problem / Idea description */}
                <div>
                  <label
                    htmlFor="problem-text"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Briefly describe the idea or problem
                  </label>
                  <textarea
                    id="problem-text"
                    rows={4}
                    required
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="We need a custom tool that takes input X and generates output Y, or we are looking to build a new platform for..."
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50/50 p-4 text-base text-stone-900 placeholder:text-stone-600 focus:border-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Your Email Address
                  </label>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="h-12 flex-1 rounded-2xl border border-stone-300 bg-stone-50/50 px-4 text-base text-stone-900 placeholder:text-stone-600 focus:border-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-stone-900 px-8 text-sm font-semibold tracking-wide text-stone-50 shadow-sm transition-all hover:bg-stone-800 active:scale-[0.98] disabled:opacity-60 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send to Cliy Lab</span>
                          <ArrowRight size={15} weight="bold" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="mt-2.5 font-mono text-xs text-stone-600">
                    We review inquiries daily and respond with technical thoughts within 24 hours.
                  </p>
                </div>

              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                  Message received.
                </h3>
                <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-stone-700">
                  Thank you for reaching out. Our engineering team at Cliy will review your note and get back to{" "}
                  <span className="font-semibold text-stone-900">{contactEmail}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setProblemDescription("");
                  }}
                  className="mt-6 text-sm font-mono underline underline-offset-4 text-stone-700 hover:text-stone-950 font-semibold"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-200/80 bg-white py-12 text-sm text-stone-700">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-stone-900">
                cliy
              </span>
              <span className="text-stone-400">/</span>
              <span className="text-stone-700">Software Development Platform</span>
            </div>
            <div className="text-stone-600">(C) 2026 Cliy. All rights reserved.</div>
            <a
              href="mailto:hello@cliy.ai"
              className="text-stone-700 font-medium transition-colors hover:text-stone-950 underline underline-offset-2"
            >
              hello@cliy.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
