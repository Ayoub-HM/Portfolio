"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { CollapsibleSection } from "./ui/CollapsibleSection";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { locale, m } = useI18n();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [messageText, setMessageText] = useState("");
  const [isPrefilled, setIsPrefilled] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setMessageText(customEvent.detail);
        setIsPrefilled(true);
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 600);
        setTimeout(() => {
          setIsPrefilled(false);
        }, 3500);
      }
    };
    window.addEventListener("prefill-contact-message", handlePrefill);
    return () => window.removeEventListener("prefill-contact-message", handlePrefill);
  }, []);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey ||
          serviceId === "YOUR_SERVICE_ID" ||
          templateId === "YOUR_TEMPLATE_ID" ||
          publicKey === "YOUR_PUBLIC_KEY") {
        // Mode démonstration / sans API Keys
        // On simule l'envoi réussi au lieu d'ouvrir Outlook (demande de l'utilisateur)
        console.log("EmailJS n'est pas configuré. Simulation d'envoi.");
        setStatus("sent");
        setMessageText("");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: "ayoubhammou77@gmail.com",
        },
        publicKey
      );

      setStatus("sent");
      setMessageText("");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
    <CollapsibleSection
      id="contact"
      title={m.contact.title}
      badgeCount={locale === "fr" ? "Ouvert aux opportunités" : "Available"}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Contact Info + Live Status */}
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

          {/* Right: Contact Form with EmailJS */}
          <div>
            <form
            ref={formRef}
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
                ref={nameInputRef}
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

            <div className="relative">
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-semibold text-muted"
                >
                  {m.contact.form.message}
                </label>
                {isPrefilled && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/20 border border-primary/40 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-primary animate-pulse"
                  >
                    ✨ {locale === "fr" ? "Message personnalisé généré" : "Custom message generated"}
                  </motion.span>
                )}
              </div>
              <textarea
                ref={messageInputRef}
                id="message"
                name="message"
                required
                rows={4}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={m.contact.form.messagePlaceholder}
                className={`w-full resize-y rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-all focus:border-primary focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/25 ${
                  isPrefilled
                    ? "border-primary bg-primary/10 ring-2 ring-primary/40"
                    : "border-border/80 bg-surface-2/80"
                }`}
              />
            </div>

            {/* Submit Button with Loading / Success / Error States */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "idle" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-bold text-white shadow-glow transition-all cursor-pointer disabled:cursor-wait ${
                status === "sent"
                  ? "bg-emerald-500 text-slate-950"
                  : status === "error"
                  ? "bg-danger"
                  : status === "sending"
                  ? "bg-primary/70"
                  : "bg-primary hover:bg-sky-400"
              }`}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{locale === "fr" ? "Envoi en cours..." : "Sending..."}</span>
                </>
              ) : status === "sent" ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>{m.contact.form.sent}</span>
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle className="h-4 w-4" />
                  <span>{locale === "fr" ? "Erreur — Réessayer" : "Error — Retry"}</span>
                </>
              ) : (
                <>
                  <span>{m.contact.form.send}</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>

            {/* Status feedback message */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs text-danger font-medium"
              >
                {locale === "fr"
                  ? "L'envoi a échoué. Vérifiez votre connexion ou envoyez un email directement."
                  : "Sending failed. Check your connection or send an email directly."}
              </motion.p>
            )}

            <p className="text-center text-[0.72rem] text-muted">
              {m.contact.form.note}
            </p>
          </form>
        </div>
      </div>
    </CollapsibleSection>
  );
}
