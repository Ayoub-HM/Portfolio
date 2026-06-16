"use client";

import { useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const { m } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — show a confirmation and reset. Wire to a service later.
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3000);
  };

  const links: {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
    external?: boolean;
  }[] = [
    {
      icon: Mail,
      label: m.contact.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: m.contact.phoneLabel,
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      icon: MapPin,
      label: m.contact.locationLabel,
      value: profile.location,
      href: "#contact",
    },
    {
      icon: Github,
      label: m.contact.githubLabel,
      value: "github.com/Ayoub-HM",
      href: profile.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: m.contact.linkedinLabel,
      value: "linkedin.com/in/ayoub-hammou",
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <SectionHeading
        kicker={m.contact.kicker}
        title={m.contact.title}
        subtitle={m.contact.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <Reveal>
          <p className="text-base leading-relaxed text-muted">
            {m.contact.intro}
          </p>
          <div className="mt-6 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 px-4 py-3 transition-all hover:border-primary/40 hover:bg-surface-2/60"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <link.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm text-foreground transition-colors group-hover:text-primary">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs text-muted"
              >
                {m.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={m.contact.form.namePlaceholder}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs text-muted"
              >
                {m.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={m.contact.form.emailPlaceholder}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs text-muted"
              >
                {m.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={m.contact.form.messagePlaceholder}
                className="w-full resize-y rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {sent ? m.contact.form.sent : m.contact.form.send}
              {!sent ? <Send className="h-4 w-4" /> : null}
            </button>
            <p className="text-center text-xs text-muted">
              {m.contact.form.note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
