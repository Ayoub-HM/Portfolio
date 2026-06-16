import type { Localized } from "@/lib/i18n/config";

export interface Education {
  id: string;
  degree: Localized;
  school: string;
  period: Localized;
  focus: Localized;
  current?: boolean;
}

/** Academic background, most recent first. Source of truth: CV. */
export const education: Education[] = [
  {
    id: "efrei-msc",
    degree: {
      fr: "Master of Science — Cybersécurité & IA",
      en: "Master of Science — Cybersecurity & AI",
    },
    school: "EFREI Paris",
    period: { fr: "2025 — Présent", en: "2025 — Present" },
    current: true,
    focus: {
      fr: "GRC, DevSecOps, supervision & SOC, IAM, durcissement, pentest et intelligence artificielle appliquée à la sécurité.",
      en: "GRC, DevSecOps, monitoring & SOC, IAM, hardening, pentesting, and AI applied to security.",
    },
  },
  {
    id: "fst-master",
    degree: {
      fr: "Master Universitaire Professionnel — Ingénierie Systèmes, Réseaux & Sécurité",
      en: "Professional Master's — Systems, Networks & Security Engineering",
    },
    school: "FST",
    period: { fr: "2022 — 2023", en: "2022 — 2023" },
    focus: {
      fr: "Systèmes, réseaux et sécurité. PFE : déploiement d'un site web dans un cluster Kubernetes sur Azure.",
      en: "Systems, networks, and security. Capstone: deploying a website on a Kubernetes cluster on Azure.",
    },
  },
  {
    id: "fst-licence",
    degree: {
      fr: "Licence Sciences & Techniques — Systèmes de Transmission & Télécommunications",
      en: "Bachelor of Science & Technology — Transmission Systems & Telecommunications",
    },
    school: "FST",
    period: { fr: "2019 — 2020", en: "2019 — 2020" },
    focus: {
      fr: "Réseaux, transmission et télécommunications.",
      en: "Networks, transmission, and telecommunications.",
    },
  },
  {
    id: "est-dut",
    degree: {
      fr: "DUT — Génie Informatique",
      en: "University Diploma of Technology — Computer Engineering",
    },
    school: "EST",
    period: { fr: "2017 — 2019", en: "2017 — 2019" },
    focus: {
      fr: "Fondamentaux du développement, des systèmes et des bases de données.",
      en: "Fundamentals of development, systems, and databases.",
    },
  },
];
