"use client";

import { Reveal } from "./Reveal";

/** Unified section header: horizontal dash with uppercase cyber monospace title. */
export function SectionHeading({
  title,
  kicker,
  subtitle,
}: {
  title: string;
  kicker?: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-8 sm:mb-10">
      <h2 className="flex items-center gap-3 font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider text-primary">
        <span className="h-0.5 w-8 sm:w-10 bg-primary shrink-0" />
        <span>{title}</span>
      </h2>
    </Reveal>
  );
}
