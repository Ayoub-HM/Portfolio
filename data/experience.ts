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

/** Work experience, most recent first. Exact source of truth: CV. */
export const experiences: Experience[] = [
  {
    id: "cybersup",
    role: {
      fr: "Stage — IT Monitoring & Sécurité",
      en: "Internship — IT Monitoring & Security",
    },
    company: "Cybersup",
    location: { fr: "Paris, France", en: "Paris, France" },
    period: { fr: "Avr. 2026 — Juin 2026", en: "Apr. 2026 — Jun. 2026" },
    description: {
      fr: "Déploiement et configuration de solutions de supervision Zabbix, gestion de parc et animation d'ateliers de sensibilisation à la cybersécurité.",
      en: "Deployment and configuration of Zabbix monitoring solutions, asset management, and delivery of cybersecurity awareness workshops.",
    },
    responsibilities: {
      fr: [
        "Déployer et configurer Zabbix pour assurer la supervision de la disponibilité, des performances et de la sécurité des systèmes.",
        "Configurer les hôtes, les agents, les modèles de supervision, les déclencheurs et les alertes pour faciliter la détection des incidents.",
        "Documenter les configurations, les procédures de déploiement et les actions de maintenance réalisées.",
        "Concevoir et animer des sessions de sensibilisation à la cybersécurité auprès d'un public jeune (phishing, protection des données, bonnes pratiques).",
      ],
      en: [
        "Deploy and configure Zabbix to ensure monitoring of system availability, performance, and security.",
        "Configure hosts, agents, monitoring templates, triggers, and alerts to streamline incident detection.",
        "Document system configurations, deployment procedures, and completed maintenance actions.",
        "Design and deliver cybersecurity awareness workshops for young audiences (phishing, data protection, digital hygiene).",
      ],
    },
    technologies: ["Zabbix", "Proxmox", "GLPI", "Docker", "Sensibilisation", "Linux"],
  },
  {
    id: "awb-cdi",
    role: {
      fr: "CDI — Administrateur Systèmes, Réseaux & Sécurité",
      en: "Permanent — Systems, Networks & Security Administrator",
    },
    company: "AttijariwafaBank",
    location: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" },
    period: { fr: "Avr. 2024 — Août 2025", en: "Apr. 2024 — Aug. 2025" },
    description: {
      fr: "Administration, sécurisation et supervision continue d'infrastructures bancaires critiques (serveurs, réseau, droits d'accès et correctifs de sécurité).",
      en: "Administration, hardening, and continuous monitoring of critical banking infrastructure (servers, network, access controls, and security patching).",
    },
    responsibilities: {
      fr: [
        "Administrer et maintenir les serveurs Windows/Linux et les équipements réseau.",
        "Gérer les comptes utilisateurs, les droits d'accès et les politiques de sécurité (Active Directory, GPO).",
        "Superviser la disponibilité, les performances et l'état de sécurité des systèmes et du réseau à l'aide de Dynatrace et SolarWinds.",
        "Assurer le déploiement des mises à jour, des correctifs systèmes et des correctifs de sécurité (Patch Management).",
        "Effectuer les sauvegardes, réaliser les tests de restauration et contrôler l'intégrité des données.",
        "Administrer et interroger les bases de données à l'aide de requêtes SQL.",
        "Contribuer aux projets d'infrastructure : migrations, déploiements, mises en production et évolutions techniques.",
      ],
      en: [
        "Administer and maintain Windows/Linux servers and network equipment.",
        "Manage user accounts, access rights, and security policies (Active Directory, GPO).",
        "Monitor system and network availability, performance, and security posture using Dynatrace and SolarWinds.",
        "Ensure deployment of system updates, OS patches, and security hotfixes (Patch Management).",
        "Perform backups, execute restoration tests, and guarantee data integrity.",
        "Administer and query relational databases using SQL.",
        "Contribute to infrastructure projects: migrations, deployments, rollouts, and technical evolutions.",
      ],
    },
    technologies: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "GPO",
      "Dynatrace",
      "SolarWinds",
      "Patch Management",
      "SQL",
      "Sauvegarde",
    ],
  },
  {
    id: "oger",
    role: {
      fr: "Stage — Technicien Systèmes & Réseaux IT",
      en: "Internship — IT Systems & Network Technician",
    },
    company: "OGER International",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "Jan. 2021 — Avr. 2021", en: "Jan. 2021 — Apr. 2021" },
    description: {
      fr: "Administration Windows Server et configuration sécurisée d'équipements réseau d'entreprise.",
      en: "Windows Server administration and secure configuration of enterprise network equipment.",
    },
    responsibilities: {
      fr: [
        "Administrer les services Windows Server : Active Directory, GPO, DNS et DHCP.",
        "Gérer les habilitations, les comptes utilisateurs et les droits d'accès sur l'annuaire Active Directory.",
        "Configurer et diagnostiquer les équipements réseau : switchs, routeurs et firewalls.",
        "Résoudre les incidents techniques et optimiser la disponibilité du parc informatique.",
      ],
      en: [
        "Administer Windows Server services: Active Directory, GPO, DNS, and DHCP.",
        "Manage user accounts, credentials, and access permissions in Active Directory.",
        "Configure and troubleshoot network equipment: switches, routers, and firewalls.",
        "Resolve technical incidents and optimize IT infrastructure availability.",
      ],
    },
    technologies: ["Windows Server", "Active Directory", "GPO", "DNS/DHCP", "Firewalls", "Cisco"],
  },
];
