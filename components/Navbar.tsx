"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Linkedin, Menu, X, ZoomIn } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileModal } from "./ProfileModal";

type NavKey =
  | "home"
  | "experience"
  | "projects"
  | "skills"
  | "certifications"
  | "interests"
  | "contact";

const NAV_LINKS: { key: NavKey; href: string }[] = [
  { key: "home", href: "#hero" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "certifications", href: "#certifications" },
  { key: "interests", href: "#interests" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const { m } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Detect scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the link of the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (scrolled) {
      e.preventDefault();
      setIsPhotoModalOpen(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault(); // Stop the browser's instant jump
      const sectionId = href.slice(1);
      
      // 1. Open the target section
      window.dispatchEvent(
        new CustomEvent("open-section", { detail: sectionId })
      );
      
      // 2. Scroll to it smoothly after a tiny delay so the DOM has started expanding
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update the URL hash without jumping
          window.history.pushState(null, "", href);
        }
      }, 150); // 150ms allows Framer Motion to start the height animation
    }
  };

  return (
    <>
      <header
        style={{ position: "sticky", top: 0, zIndex: 50 }}
        className={`w-full transition-all duration-300 relative ${
          scrolled
            ? "border-b border-primary/25 bg-background/95 backdrop-blur-md shadow-md shadow-black/35"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Subtle bottom neon glow line when scrolled */}
        {scrolled && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
        )}

        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 transition-all duration-300 ${
            scrolled ? "h-16 sm:h-17 py-2" : "h-22 sm:h-24 pt-4 pb-3 sm:pt-6 sm:pb-4"
          }`}
        >
          {/* Brand / Logo + Avatar */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleLogoClick}
              className={`group relative grid place-items-center rounded-xl border border-primary/40 bg-surface-2 p-0.5 shadow-glow transition-all duration-300 hover:border-primary cursor-pointer overflow-hidden ${
                scrolled ? "h-9 w-9" : "h-11 w-11"
              }`}
              title={scrolled ? "Cliquer pour agrandir le portrait" : "Haut de page"}
            >
              <AnimatePresence mode="wait">
                {!scrolled ? (
                  <motion.div
                    key="code-icon"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center text-primary"
                  >
                    <Code2 className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="avatar"
                    initial={{ scale: 1.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 h-full w-full overflow-hidden"
                  >
                    {/* Light mode photo */}
                    <img
                      src="/images/portrait-light.jpg"
                      alt={profile.name}
                      className="h-full w-full object-cover object-top block dark:hidden"
                    />
                    {/* Dark mode photo */}
                    <img
                      src="/images/portrait-dark.jpg"
                      alt={profile.name}
                      className="h-full w-full object-cover object-top hidden dark:block"
                    />
                    {/* Hover overlay icon when scrolled */}
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[0.5px]">
                      <ZoomIn className="h-4 w-4 text-white drop-shadow" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group/brand inline-flex items-center gap-1.5 font-mono text-base sm:text-lg font-black tracking-widest transition-all"
            >
              <span className="relative flex items-center">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent group-hover/brand:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">
                  A
                </span>
                <span className="text-foreground group-hover/brand:text-accent transition-colors">
                  H
                </span>
                <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover/brand:scale-125 group-hover/brand:shadow-[0_0_6px_#34d399] transition-all" />
              </span>
            </a>
          </div>

          {/* Desktop links - strictly fixed without shifting */}
          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.key} className="relative py-1">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`inline-block font-mono text-sm font-semibold transition-colors duration-200 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {m.nav[link.key]}
                  </a>
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary shadow-[0_0_6px_#38bdf8]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right controls - original buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.nav.github}
              className="hidden h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary sm:grid"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.nav.linkedin}
              className="hidden h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary sm:grid"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? m.nav.closeMenu : m.nav.openMenu}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-3 font-mono text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {m.nav[link.key]}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 py-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.nav.github}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.nav.linkedin}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Enlarged Photo Modal */}
      <ProfileModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </>
  );
}



