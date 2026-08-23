"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  badgeCount?: string | number;
  children: ReactNode;
  defaultOpen?: boolean;
}

/**
 * 3D Holographic Cyber Shutter with Exclusive Focus Mode (Accordion Solo):
 * - Opening a section automatically closes other sections for focused readability.
 * - Unfolds with high-tech 3D perspective shutter (rotateX), laser sweep, and neon aura.
 */
export function CollapsibleSection({
  id,
  title,
  badgeCount,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const { locale } = useI18n();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    // Open if currently matching URL hash
    if (typeof window !== "undefined" && window.location.hash === `#${id}`) {
      setIsOpen(true);
    }

    const handleHash = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
      }
    };
    window.addEventListener("hashchange", handleHash);

    const handleOpenSection = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const target = customEvent.detail;

      if (target === "all-open") {
        setIsOpen(true);
      } else if (target === "all-close") {
        setIsOpen(false);
      } else if (target === id) {
        setIsOpen(true);
      } else if (typeof target === "string" && target.length > 0) {
        // Exclusive focus: close if another specific section opened
        setIsOpen(false);
      }
    };
    window.addEventListener("open-section", handleOpenSection);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("open-section", handleOpenSection);
    };
  }, [id]);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      // Broadcast opening this section to trigger Exclusive Focus (closing other open sections)
      window.dispatchEvent(new CustomEvent("open-section", { detail: id }));
      setIsOpen(true);
    }
  };

  return (
    <section
      id={id}
      style={{ perspective: 1200 }}
      className="mx-auto max-w-6xl px-5 sm:px-8 py-1.5 sm:py-2 relative scroll-mt-20"
    >
      {/* Clickable Section Title Banner */}
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.99 }}
        className={`group relative w-full flex items-center justify-between gap-4 text-left py-3.5 px-4 sm:px-6 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden ${
          isOpen
            ? "border-primary/70 bg-gradient-to-r from-primary/15 via-surface/95 to-accent/10 shadow-[0_0_35px_-8px_rgba(56,189,248,0.25)] mb-3 ring-1 ring-primary/30"
            : "border-border/80 bg-surface/70 hover:border-primary/50 hover:bg-surface hover:shadow-md mb-0"
        }`}
        aria-expanded={isOpen}
      >
        {/* Holographic light sweep on hover */}
        <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

        {/* Active top laser highlight */}
        {isOpen && (
          <motion.div
            layoutId={`laser-${id}`}
            className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]"
          />
        )}

        <div className="flex items-center gap-3 sm:gap-4 min-w-0 relative z-10">
          <motion.span
            animate={{
              width: isOpen ? 48 : 32,
            }}
            transition={{ duration: 0.3 }}
            className={`h-0.5 shrink-0 rounded-full shadow-sm transition-colors duration-300 ${
              isOpen ? "bg-accent shadow-[0_0_8px_#818cf8]" : "bg-primary shadow-[0_0_6px_#38bdf8]"
            }`}
          />
          <h2 className="font-mono text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wider text-primary group-hover:text-foreground transition-colors truncate">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-10">
          {badgeCount !== undefined && (
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold transition-all ${
                isOpen
                  ? "border border-primary/50 bg-primary/20 text-primary shadow-[0_0_12px_-2px_rgba(56,189,248,0.35)]"
                  : "border border-primary/25 bg-primary/10 text-primary"
              }`}
            >
              {isOpen && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              <span>{badgeCount}</span>
            </span>
          )}

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-primary/70 bg-primary/20 text-primary shadow-[0_0_15px_-2px_rgba(56,189,248,0.4)]"
                : "border-border/80 bg-surface-2/80 text-muted group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10"
            }`}
            title={
              isOpen
                ? locale === "fr"
                  ? "Réduire la section"
                  : "Collapse section"
                : locale === "fr"
                ? "Développer la section"
                : "Expand section"
            }
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* 3D Holographic Cyber Shutter Content Reveal */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              opacity: 0,
              height: 0,
              rotateX: -14,
              scale: 0.97,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              height: "auto",
              rotateX: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              height: 0,
              rotateX: -12,
              scale: 0.97,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.48,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
            className="overflow-hidden relative"
          >
            {/* Luminous laser reveal sweep */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_14px_#38bdf8] z-20"
            />

            {/* Ambient neon backdrop aura */}
            <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="pt-4 pb-3 relative z-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
