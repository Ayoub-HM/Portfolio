"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const { locale, m } = useI18n();
  const [sent, setSent] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const links: {
    key: string;
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
    copyable?: boolean;
    external?: boolean;
  }[] = [
    {
      key: "email",
      icon: Mail,
      label: m.contact.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true,
    },
    {
      key: "phone",
      icon: Phone,
      label: m.contact.phoneLabel,
      value: profile.phone,
      href: profile.phoneHref,
      copyable: true,
    },
    {
      key: "location",
      icon: MapPin,
      label: m.contact.locationLabel,
      value: profile.location,
      href: "#contact",
    },
    {
      key: "github",
      icon: Github,
      label: m.contact.githubLabel,
      value: "github.com/Ayoub-HM",
      href: profile.github,
      external: true,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: m.contact.linkedinLabel,
      value: "linkedin.com/in/ayoub-hammou",
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <SectionHeading
        kicker={m.contact.kicker}
        title={m.contact.title}
        subtitle={m.contact.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Contact Info + Live Status */}
        <Reveal>
          <div className="space-y-6">
            {/* Live Availability Banner */}
            <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-surface-2/70 to-emerald-500/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  {locale === "fr" ? "Statut : Ouvert aux opportunités" : "Status: Open to Opportunities"}
                </span>
              </div>
              <p className="mt-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {m.contact.intro}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-surface/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:bg-surface-2"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <link.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block font-mono text-[0.68rem] font-bold uppercase tracking-wider text-muted">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {link.value}
                      </span>
                    </div>
                  </div>

                  {/* Copy button or external icon */}
                  {link.copyable ? (
                    <button
                      type="button"
                      onClick={(e) => handleCopy(link.value, link.key, e)}
                      className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-white"
                      title={copiedKey === link.key ? "Copié !" : "Copier"}
                    >
                      {copiedKey === link.key ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  ) : link.external ? (
                    <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  ) : null}
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Contact Form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-card flex flex-col gap-4 p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Ambient aura */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs font-semibold text-muted"
              >
                {m.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={m.contact.form.namePlaceholder}
                className="w-full rounded-xl border border-border/80 bg-surface-2/80 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-all focus:border-primary focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/25"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs font-semibold text-muted"
              >
                {m.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={m.contact.form.emailPlaceholder}
                className="w-full rounded-xl border border-border/80 bg-surface-2/80 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-all focus:border-primary focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/25"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs font-semibold text-muted"
              >
                {m.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={m.contact.form.messagePlaceholder}
                className="w-full resize-y rounded-xl border border-border/80 bg-surface-2/80 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-all focus:border-primary focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/25"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-bold text-white shadow-glow transition-all cursor-pointer ${
                sent ? "bg-emerald-500 text-slate-950" : "bg-primary hover:bg-sky-400"
              }`}
            >
              {sent ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>{m.contact.form.sent}</span>
                </>
              ) : (
                <>
                  <span>{m.contact.form.send}</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>

            <p className="text-center text-[0.72rem] text-muted">
              {m.contact.form.note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
