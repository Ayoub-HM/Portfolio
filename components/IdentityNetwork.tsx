"use client";

import { Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

// Domain acronyms are identical in both languages, so they live here as constants.
const nodes = [
  { label: "IAM", x: 50, y: 9, primary: true },
  { label: "SOC", x: 89, y: 37, primary: true },
  { label: "GRC", x: 71, y: 90, primary: true },
  { label: "PAM", x: 27, y: 88, primary: false },
  { label: "Cloud", x: 9, y: 42, primary: false },
  { label: "DevSecOps", x: 28, y: 12, primary: false },
];

export function IdentityNetwork() {
  const { m } = useI18n();

  return (
    <div className="glass-card relative aspect-square w-full overflow-hidden p-4 shadow-card">
      <div className="absolute left-4 top-4 z-10 font-mono text-xs uppercase tracking-wider text-muted">
        {m.about.identityTitle}
      </div>

      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Connecting lines from center to each node */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-primary"
        preserveAspectRatio="none"
      >
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeOpacity={n.primary ? 0.5 : 0.25}
          />
        ))}
      </svg>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-16 w-16 animate-float place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-primary shadow-glow">
          <Lock className="h-7 w-7" />
        </div>
      </div>

      {/* Orbiting domain nodes */}
      {nodes.map((n) => (
        <div
          key={n.label}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span
            className={`whitespace-nowrap rounded-lg border px-2.5 py-1 font-mono text-xs font-semibold ${
              n.primary
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-border bg-surface-2 text-muted"
            }`}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
