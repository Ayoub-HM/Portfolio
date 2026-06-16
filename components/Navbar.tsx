"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, ShieldCheck, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type NavKey =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "certifications"
  | "contact";

const NAV_LINKS: { key: NavKey; href: string }[] = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
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

  // Shadow/blur once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-glow">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-sm font-bold tracking-wider text-foreground">
              {profile.initials}
            </span>
            <span className="hidden text-[0.65rem] uppercase tracking-widest text-muted sm:block">
              {profile.name}
            </span>
          </span>
        </a>

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
    </header>
  );
}
