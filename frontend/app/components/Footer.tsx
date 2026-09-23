import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070709] py-16 text-xs text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-950/40 text-cyan-300">
                <Sparkle size={15} weight="fill" className="text-cyan-400" />
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-white">CLIY</span>
            </div>
            <p className="mt-3 max-w-sm leading-relaxed text-zinc-400">
              The autonomous creative platform engineered for creators, studios, and developers building the future of media intelligence.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE ARCHITECTURE ONLINE</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
              Products
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  Cliy Studio
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  Cliy Flow
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  Cliy Engine
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  Cliy Radar
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  Cliy Lens
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
              Architecture
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#architecture" className="transition-colors hover:text-white">
                  GPU Render Engine
                </a>
              </li>
              <li>
                <a href="#architecture" className="transition-colors hover:text-white">
                  Vector Memory Graph
                </a>
              </li>
              <li>
                <a href="#architecture" className="transition-colors hover:text-white">
                  Sub-50ms Global Edge
                </a>
              </li>
              <li>
                <a href="#architecture" className="transition-colors hover:text-white">
                  Multi-Agent Pipeline
                </a>
              </li>
            </ul>
          </div>

          {/* Access & Legal */}
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
              Initiative
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#waitlist" className="transition-colors hover:text-white">
                  Early Access Waitlist
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Security & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Developer Documentation
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  System Status
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row font-mono text-[11px]">
          <div>(C) 2026 Cliy Technologies Inc. All rights reserved.</div>
          <div className="text-zinc-500">Autonomous Creative Engineering</div>
        </div>
      </div>
    </footer>
  );
}
