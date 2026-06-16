import type { Localized } from "@/lib/i18n/config";

export interface Experience {
  id: string;
  role: Localized;
  company: string;
  location: Localized;
  period: Localized;
  current?: boolean;
  description: Localized;
  responsibilities: Localized<string[]>;
  technologies: string[];
}

/** Work experience, most recent first. Source of truth: CV. */
export const experiences: Experience[] = [
  {
    id: "cybersup",
    role: {
      fr: "Stage — IT Monitoring & Sécurité",
      en: "Internship — IT Monitoring & Security",
    },
    company: "Cybersup",
    location: { fr: "France", en: "France" },
    period: { fr: "Avr. 2026 — Présent", en: "Apr. 2026 — Present" },
    current: true,
    description: {
      fr: "Mise en place de solutions de supervision et de gestion de parc, et sensibilisation à l'hygiène numérique.",
      en: "Deployment of monitoring and asset-management solutions, plus digital-hygiene awareness sessions.",
    },
    responsibilities: {
      fr: [
        "Étude et déploiement d'une solution de monitoring basée sur Zabbix.",
        "Mise en place et administration d'un cluster de virtualisation Proxmox.",
        "Déploiement d'un ITSM GLPI pour digitaliser la gestion du parc informatique.",
        "Animation d'ateliers de sensibilisation à la cybersécurité auprès d'un public jeune.",
      ],
      en: [
        "Studied and deployed a Zabbix-based monitoring solution.",
        "Set up and administered a Proxmox virtualization cluster.",
        "Deployed a GLPI ITSM to digitize asset management.",
        "Led cybersecurity awareness workshops for a young audience.",
      ],
    },
    technologies: ["Zabbix", "Proxmox", "GLPI", "Docker"],
  },
  {
    id: "awb-cdi",
    role: {
      fr: "CDI — Back office / Appui supervision",
      en: "Permanent — Back office / Supervision support",
    },
    company: "Attijariwafa bank",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "Avr. 2024 — Août 2025", en: "Apr. 2024 — Aug. 2025" },
    description: {
      fr: "Appui au responsable supervision dans le suivi opérationnel et la coordination de l'équipe.",
      en: "Support to the supervision manager for operational tracking and team coordination.",
    },
    responsibilities: {
      fr: [
        "Appui au responsable supervision dans le suivi opérationnel et la coordination de l'équipe.",
        "Création et amélioration de dashboards Dynatrace pour la supervision temps réel.",
        "Amélioration des procédures d'escalade, de traitement des incidents et de reporting.",
        "Production de reportings opérationnels réguliers à destination de la hiérarchie.",
      ],
      en: [
        "Supported the supervision manager in operational tracking and team coordination.",
        "Built and improved Dynatrace dashboards for real-time monitoring.",
        "Improved escalation, incident-handling, and reporting procedures.",
        "Produced regular operational reports for management.",
      ],
    },
    technologies: ["Dynatrace", "Reporting", "ITSM", "SLA"],
  },
  {
    id: "awb-cdd",
    role: {
      fr: "CDD — Superviseur informatique",
      en: "Fixed-term — IT Supervisor",
    },
    company: "Attijariwafa bank",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "Mars 2022 — Avr. 2024", en: "Mar. 2022 — Apr. 2024" },
    description: {
      fr: "Supervision 24/7 d'une infrastructure bancaire critique (serveurs, réseau, agences).",
      en: "24/7 supervision of a critical banking infrastructure (servers, network, branches).",
    },
    responsibilities: {
      fr: [
        "Supervision 24/7 d'une infrastructure critique couvrant serveurs, réseau et agences.",
        "Analyse, qualification et priorisation des alertes techniques et sécurité par criticité.",
        "Gestion des incidents via ticketing, escalade N2/N3 et suivi des SLA.",
        "Monitoring centralisé (SolarWinds, Dynatrace, Axway Sentinel) et rapports d'incidents.",
      ],
      en: [
        "24/7 supervision of a critical infrastructure spanning servers, network, and branches.",
        "Analyzed, qualified, and prioritized technical and security alerts by criticality.",
        "Handled incidents via ticketing, N2/N3 escalation, and SLA tracking.",
        "Centralized monitoring (SolarWinds, Dynatrace, Axway Sentinel) and incident reports.",
      ],
    },
    technologies: ["SolarWinds", "Dynatrace", "Axway Sentinel", "ITIL"],
  },
  {
    id: "oger",
    role: {
      fr: "Stage — Technicien IT",
      en: "Internship — IT Technician",
    },
    company: "OGER International",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "Jan. 2021 — Avr. 2021", en: "Jan. 2021 — Apr. 2021" },
    description: {
      fr: "Administration Windows Server et configuration sécurisée d'équipements réseau.",
      en: "Windows Server administration and secure configuration of network equipment.",
    },
    responsibilities: {
      fr: [
        "Administration des services Windows Server : Active Directory, GPO, DNS, DHCP.",
        "Gestion des comptes, groupes et droits d'accès dans Active Directory.",
        "Configuration et diagnostic d'équipements réseau : switchs, routeurs, firewalls.",
        "Résolution d'incidents techniques sur le parc informatique.",
      ],
      en: [
        "Administered Windows Server services: Active Directory, GPO, DNS, DHCP.",
        "Managed accounts, groups, and access rights in Active Directory.",
        "Configured and troubleshot network equipment: switches, routers, firewalls.",
        "Resolved technical incidents across the IT estate.",
      ],
    },
    technologies: ["Windows Server", "Active Directory", "GPO", "Networking"],
  },
];
