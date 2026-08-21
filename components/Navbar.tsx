"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, ShieldCheck, X, ZoomIn } from "lucide-react";
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
  | "contact";

const NAV_LINKS: { key: NavKey; href: string }[] = [
  { key: "home", href: "#hero" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "certifications", href: "#certifications" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const { m } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Shadow/blur and avatar swap once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the link of the section currently in view.
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
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{ position: "sticky", top: 0, zIndex: 50 }}
      className="w-full border-b border-border/80 bg-background/95 backdrop-blur-md shadow-md shadow-black/25"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={(e) => {
              if (scrolled) {
                e.preventDefault();
                setIsPhotoModalOpen(true);
              }
            }}
            aria-label={scrolled ? "Agrandir la photo de profil" : profile.name}
            className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-primary/40 bg-surface-2 shadow-sm transition-all duration-300 ${
              scrolled
                ? "cursor-pointer group hover:ring-2 hover:ring-primary hover:scale-105"
                : "cursor-default"
            }`}
            title={scrolled ? "Cliquer pour agrandir la photo" : profile.name}
          >
            {/* Logo / Shield when at top */}
            <span
              className={`absolute inset-0 grid place-items-center bg-primary/10 text-primary transition-all duration-300 ${
                scrolled
                  ? "scale-0 opacity-0 -rotate-90 pointer-events-none"
                  : "scale-100 opacity-100 rotate-0"
              }`}
            >
              <ShieldCheck className="h-5 w-5" />
            </span>

            {/* Profile Photo when scrolled */}
            <img
              src="/images/portrait.jpg"
              alt={profile.name}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-300 ${
                scrolled
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-0 opacity-0 rotate-90 pointer-events-none"
              }`}
            />

            {/* Hover overlay icon when scrolled */}
            {scrolled && (
              <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[0.5px]">
                <ZoomIn className="h-4 w-4 text-white drop-shadow" />
              </div>
            )}
          </button>

          <a href="#hero" className="flex flex-col justify-center group">
            <span className="font-mono text-sm font-bold tracking-wider text-foreground transition-colors group-hover:text-primary leading-tight">
              {profile.name}
            </span>
            <span className="mt-0.5 hidden text-[0.65rem] uppercase tracking-widest text-muted sm:block leading-tight">
              {m.hero.badge}
            </span>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.key}>
                <a
                  href={link.href}
                  className={`relative font-mono text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {m.nav[link.key]}
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
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
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
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
      ) : null}

      {/* Centered Profile Modal */}
      <ProfileModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </header>
  );
}
