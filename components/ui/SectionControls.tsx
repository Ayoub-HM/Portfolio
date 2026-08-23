"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { ChevronDown, Layers } from "lucide-react";

export function SectionControls() {
  const { locale } = useI18n();
  const [allOpen, setAllOpen] = useState(false);

  const toggleAll = () => {
    const nextState = !allOpen;
    setAllOpen(nextState);
    window.dispatchEvent(
      new CustomEvent("open-section", {
        detail: nextState ? "all-open" : "all-close",
      })
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 mb-2 flex items-center justify-between text-xs font-mono text-muted border-b border-border/40 pb-3">
      <div className="flex items-center gap-2">
        <Layers className="h-3.5 w-3.5 text-primary" />
        <span className="text-[0.72rem] text-slate-400">
          {locale === "fr" ? "Modules du portfolio" : "Portfolio modules"}
        </span>
      </div>

      <button
        type="button"
        onClick={toggleAll}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface-2/80 px-3 py-1.5 text-xs font-semibold text-muted hover:text-primary hover:border-primary/50 transition-all cursor-pointer shadow-xs"
        aria-expanded={allOpen}
      >
        <span>
          {allOpen
            ? locale === "fr"
              ? "Tout réduire"
              : "Collapse all"
            : locale === "fr"
            ? "Tout développer"
            : "Expand all"}
        </span>
        <motion.div
          animate={{ rotate: allOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </button>
    </div>
  );
}
