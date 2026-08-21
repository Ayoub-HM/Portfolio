"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";

export function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { m } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] grid place-items-center p-3 sm:p-6 overflow-y-auto"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
          />

          {/* Centered Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-sm sm:max-w-md my-auto max-h-[92vh] flex flex-col rounded-3xl border border-primary/40 bg-surface/98 p-4 sm:p-5 shadow-2xl shadow-primary/25 backdrop-blur-2xl cursor-default"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 z-20 rounded-full bg-surface-2/90 p-2 text-muted transition hover:bg-surface-2 hover:text-foreground border border-border cursor-pointer shadow-md"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Photo container constrained to viewport height */}
            <div className="relative w-full max-h-[58vh] sm:max-h-[64vh] overflow-hidden rounded-2xl border border-border bg-black/60 dark:bg-black/80 flex items-center justify-center shadow-inner">
              {/* Light mode photo */}
              <img
                src="/images/portrait-light.jpg"
                alt={profile.name}
                className="w-full h-auto max-h-[58vh] sm:max-h-[64vh] object-contain rounded-xl block dark:hidden"
              />
              {/* Dark mode photo */}
              <img
                src="/images/portrait-dark.jpg"
                alt={profile.name}
                className="w-full h-auto max-h-[58vh] sm:max-h-[64vh] object-contain rounded-xl hidden dark:block"
              />
            </div>

            {/* Footer information */}
            <div className="mt-3.5 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                  {profile.name}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-primary leading-tight">
                  {m.hero.badge}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] sm:text-xs text-primary">
                {profile.initials} · Cyber
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
