"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Sparkle,
  Copy,
  Check,
  User,
  Buildings,
  Code,
  Briefcase,
} from "@phosphor-icons/react";

const roles = [
  { id: "creator", label: "Solo Creator", icon: User },
  { id: "studio", label: "Production Studio", icon: Buildings },
  { id: "developer", label: "Developer / API", icon: Code },
  { id: "enterprise", label: "Media Enterprise", icon: Briefcase },
];

export function WaitlistSection() {
  const [selectedRole, setSelectedRole] = useState("creator");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [queueNumber, setQueueNumber] = useState(1482);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setQueueNumber(Math.floor(Math.random() * 50) + 1420);
    }, 600);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://cliy.ai?ref=vip-" + queueNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="waitlist" className="relative border-b border-white/[0.06] bg-[#070709] py-24 lg:py-32">
      {/* Calibrated background ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-full max-w-4xl rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get early access to the Cliy suite.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            We are rolling out private access batches sequentially across 2026. Reserve your priority spot in the queue today.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0e0e14] p-6 text-left shadow-2xl backdrop-blur-xl sm:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Role selection pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Select Your Primary Workflow
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isSelected = selectedRole === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setSelectedRole(role.id)}
                          className={`flex items-center gap-2 rounded-xl border p-3 text-xs font-medium transition-all ${
                            isSelected
                              ? "border-cyan-400 bg-cyan-950/40 text-cyan-200 shadow-sm"
                              : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                          }`}
                        >
                          <Icon size={16} weight={isSelected ? "bold" : "regular"} className={isSelected ? "text-cyan-400" : "text-zinc-500"} />
                          <span className="truncate">{role.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email input field */}
                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Work Email Address
                  </label>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="h-12 flex-1 rounded-xl border border-white/15 bg-black/40 px-4 text-sm text-white placeholder-zinc-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:bg-cyan-300 active:scale-[0.98] disabled:opacity-70 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span>Reserving...</span>
                      ) : (
                        <>
                          <span>Request Early Access</span>
                          <ArrowRight size={16} weight="bold" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    No spam. You will receive an invitation token when your cohort batch opens.
                  </p>
                </div>

              </form>
            ) : (
              /* Success State */
              <div className="py-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                  Early access spot reserved.
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  We have added <span className="font-semibold text-white">{email}</span> to the priority queue.
                </p>

                {/* Queue Position Ticket */}
                <div className="mx-auto mt-6 max-w-sm rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 font-mono">
                  <div className="text-[11px] uppercase tracking-wider text-cyan-400">YOUR PRIORITY QUEUE POSITION</div>
                  <div className="mt-1 text-3xl font-extrabold text-white">#{queueNumber}</div>
                  <div className="mt-1 text-[11px] text-zinc-400">Tier: {roles.find(r => r.id === selectedRole)?.label} Cohort</div>
                </div>

                {/* Referral Link Box */}
                <div className="mx-auto mt-6 max-w-md">
                  <div className="text-xs text-zinc-400">Share your invite link to advance 25 spots per accepted referral:</div>
                  <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 p-2 pl-3">
                    <span className="font-mono text-xs text-zinc-300 truncate">
                      https://cliy.ai?ref=vip-{queueNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="ml-2 flex items-center gap-1.5 rounded-lg bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/[0.15]"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
