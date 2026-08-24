import React from "react";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

/**
 * OGER International — Image authentique fournie par l'utilisateur (fond transparent)
 */
export function OgerLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/oger_clean.png"
      alt="OGER International"
      className={`${className} object-contain dark:brightness-110`}
      loading="lazy"
    />
  );
}

/**
 * Attijariwafa Bank — Image authentique fournie par l'utilisateur (fond transparent)
 */
export function AttijariwafaLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/attijariwafa_clean.png"
      alt="Attijariwafa Bank"
      className={`${className} object-contain dark:brightness-110`}
      loading="lazy"
    />
  );
}

/**
 * Cybersup — Image authentique fournie par l'utilisateur (fond transparent)
 */
export function CybersupLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/cybersup_clean.png"
      alt="Cybersup"
      className={`${className} object-contain invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 dark:brightness-110 translate-x-1 translate-y-1`}
      loading="lazy"
    />
  );
}

/**
 * EFREI Paris — Image authentique fournie par l'utilisateur (fond transparent)
 */
export function EfreiLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/efrei_clean.png"
      alt="EFREI Paris"
      className={`${className} object-contain dark:brightness-125`}
      loading="lazy"
    />
  );
}

/**
 * Faculté des Sciences et Techniques Settat (FST Settat) — Image authentique fournie par l'utilisateur (fond transparent)
 */
export function FstLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/fst_clean.png"
      alt="Faculté des Sciences et Techniques Settat"
      className={`${className} object-contain dark:brightness-110`}
      loading="lazy"
    />
  );
}

export function EstLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img
      src="/images/logos/est_clean.png"
      alt="École Supérieure de Technologie"
      className={`${className} object-contain dark:brightness-110`}
      loading="lazy"
    />
  );
}

export const orgLogoMap: Record<
  string,
  React.ComponentType<{ className?: string; withText?: boolean }>
> = {
  EFREI: EfreiLogo,
  "EFREI Paris": EfreiLogo,
  FST: FstLogo,
  "Faculté des Sciences et Techniques (FST)": FstLogo,
  "Faculté des Sciences et Techniques": FstLogo,
  EST: EstLogo,
  "École Supérieure de Technologie (EST)": EstLogo,
  "École Supérieure de Technologie": EstLogo,
  Cybersup: CybersupLogo,
  "Attijariwafa Bank": AttijariwafaLogo,
  "OGER International": OgerLogo,
};
