"use client";

import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Pure CSS/SVG "SOC control center" visual for the hero.
 * No external images — radar map, threat pings, sparkline and posture ring.
 */
export function HeroVisual() {
  const { m } = useI18n();

  // Scattered threat "pings" on the radar map (percent coordinates).
  const pings = [
    { x: 22, y: 30, d: "0s", c: "text-accent" },
    { x: 68, y: 22, d: "0.6s", c: "text-primary" },
    { x: 80, y: 58, d: "1.2s", c: "text-warning" },
    { x: 40, y: 66, d: "0.3s", c: "text-primary" },
    { x: 55, y: 44, d: "0.9s", c: "text-accent" },
    { x: 15, y: 60, d: "1.5s", c: "text-danger" },
  ];

  return (
    <div className="glass-card relative overflow-hidden p-4 shadow-card">
      {/* Console top bar */}
      <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
        <span className="h-3 w-3 rounded-full bg-danger/80" />
        <span className="h-3 w-3 rounded-full bg-warning/80" />
        <span className="h-3 w-3 rounded-full bg-success/80" />
        <span className="ml-2 flex-1 text-center font-mono text-xs text-muted">
          {m.hero.consoleTitle}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase text-success">
          <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-success" />
          {m.hero.live}
        </span>
      </div>

      {/* Radar / threat map */}
      <div className="relative h-56 overflow-hidden rounded-xl border border-border bg-surface-2/60 sm:h-64">
        <div className="absolute inset-0 cyber-grid opacity-40" />

        {/* Concentric radar rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[220, 160, 100].map((s) => (
            <div
              key={s}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: s,
                height: s,
                left: -s / 2,
                top: -s / 2,
              }}
            />
          ))}
          {/* Sweeping beam */}
          <div className="radar-sweep absolute -left-[110px] -top-[110px] h-[220px] w-[220px] rounded-full" />
        </div>

        {/* Central shield */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-primary shadow-glow">
            <ShieldCheck className="h-7 w-7" />
          </div>
        </div>

        {/* Threat pings */}
        {pings.map((p, i) => (
          <span
            key={i}
            className={`absolute ${p.c}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60"
                style={{ animationDelay: p.d }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
            </span>
          </span>
        ))}

        {/* Corner label */}
        <span className="absolute bottom-2 left-3 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          {m.hero.monitoring}
        </span>
      </div>

      {/* Bottom panels: sparkline + posture ring */}
      <div className="mt-4 grid grid-cols-5 gap-3">
        {/* Sparkline */}
        <div className="col-span-3 rounded-xl border border-border bg-surface-2/60 p-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
              {m.dashboard.alerts}
            </span>
            <span className="font-mono text-xs font-semibold text-accent">
              {m.hero.nominal}
            </span>
          </div>
          <svg
            viewBox="0 0 200 56"
            className="mt-2 h-12 w-full text-primary"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 40 L25 34 L50 38 L75 22 L100 28 L125 14 L150 24 L175 10 L200 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 40 L25 34 L50 38 L75 22 L100 28 L125 14 L150 24 L175 10 L200 18 L200 56 L0 56 Z"
              fill="url(#spark)"
            />
          </svg>
        </div>

        {/* Posture ring */}
        <div className="col-span-2 flex flex-col items-center justify-center rounded-xl border border-border bg-surface-2/60 p-3">
          <PostureRing value={78} />
          <span className="mt-1 text-center font-mono text-[0.6rem] uppercase leading-tight tracking-wider text-muted">
            {m.dashboard.securityPosture}
          </span>
        </div>
      </div>
    </div>
  );
}

function PostureRing({ value }: { value: number }) {
  const r = 26;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative h-16 w-16">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={r}
          className="text-border"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          className="text-success"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-mono text-sm font-bold text-foreground">
        {value}%
      </span>
    </div>
  );
}
