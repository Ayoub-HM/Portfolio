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
      fr: "Mise en place d'une solution de supervision et d'un outil de gestion de parc pour l'infrastructure de l'école. Ce stage a couvert l'ensemble du processus, de l'étude comparative des solutions open source jusqu'au déploiement en production, en parallèle d'actions de sensibilisation à la cybersécurité.",
      en: "Implementation of an IT monitoring solution and an IT asset management tool for the school infrastructure. This internship covered the full end-to-end lifecycle, from open-source benchmarking to production rollout, alongside hands-on cybersecurity awareness initiatives.",
    },
    responsibilities: {
      fr: [
        "Supervision (Zabbix) : Réalisation d'une étude comparative de solutions open source (Grafana, Prometheus, InfluxDB, Checkmk). Après validation en local, déploiement de Zabbix en production sur Debian 13 pour superviser des machines virtuelles sous Proxmox (via API et agents).",
        "Gestion de Parc (GLPI) : Déploiement de GLPI via Docker et Portainer pour centraliser l'inventaire matériel. Configuration d'un collecteur de mails (OAuth IMAP Gmail) pour automatiser la création de tickets d'assistance.",
        "Sensibilisation : Animation d'ateliers d'initiation aux bonnes pratiques de cybersécurité (phishing, protection des données) auprès d'un public jeune, en partenariat avec La Plateforme (programme Cyberpark).",
        "Documentation technique : Rédaction des procédures d'installation, de configuration et de sauvegarde pour assurer la maintenance des solutions mises en place.",
      ],
      en: [
        "Monitoring (Zabbix) : Conducted a benchmark study of open-source solutions (Grafana, Prometheus, InfluxDB, Checkmk). Following local validation, deployed Zabbix into production on Debian 13 to monitor Proxmox virtual machines (via API and agents).",
        "IT Asset Management (GLPI) : Deployed GLPI using Docker and Portainer to centralize hardware and software inventory. Configured an automated mail collector (OAuth IMAP Gmail) for seamless helpdesk ticketing.",
        "Cybersecurity Awareness : Led introductory workshops on cybersecurity best practices (phishing prevention, data protection) for young audiences, in partnership with La Plateforme (Cyberpark initiative).",
        "Technical Documentation : Authored comprehensive installation, configuration, and backup standard operating procedures (SOPs) to ensure long-term system maintainability.",
      ],
    },
    technologies: [
      "Zabbix",
      "GLPI",
      "Docker",
      "Portainer",
      "Proxmox",
      "Debian",
      "OAuth IMAP",
      "Cyberpark",
      "Sensibilisation",
    ],
  },
  {
    id: "awb-cdi",
    role: {
      fr: "CDI — Administrateur Systèmes, Réseaux & Sécurité",
      en: "Permanent — Systems, Networks & Security Administrator",
    },
    company: "Attijariwafa Bank",
    location: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" },
    period: { fr: "Avr. 2024 — Août 2025", en: "Apr. 2024 — Aug. 2025" },
    description: {
      fr: "Administration, sécurisation et maintien en conditions opérationnelles (MCO) d'une infrastructure bancaire hautement critique. L'objectif quotidien était de garantir une disponibilité absolue des services tout en appliquant des politiques de sécurité strictes.",
      en: "Administration, hardening, and Maintenance in Operational Condition (MCO) of a mission-critical banking infrastructure. Daily mission focused on ensuring absolute service uptime while enforcing strict information security policies.",
    },
    responsibilities: {
      fr: [
        "Administration Systèmes & Réseaux : Pilotage et maintenance de l'infrastructure serveurs (Windows Server, Linux) et du matériel réseau, garantissant la stabilité du cœur de réseau bancaire.",
        "Gestion des Identités et des Accès (IAM) : Administration centralisée des comptes, des habilitations et durcissement des politiques de sécurité via Active Directory et le déploiement de GPO.",
        "Supervision : Monitoring en temps réel de la disponibilité et des performances du SI à l'aide des plateformes Dynatrace et SolarWinds.",
        "Patch Management & Résilience : Déploiement des correctifs systèmes et des patchs de sécurité. Pilotage du cycle de vie des données critiques (sauvegardes, contrôle d'intégrité et tests réguliers de restauration).",
        "Bases de Données : Administration et interrogation des bases de données relationnelles via des requêtes SQL pour répondre aux besoins d'exploitation.",
        "Projets & Évolutions : Contribution active aux projets de modernisation de l'infrastructure (migrations, déploiements, et mises en production de nouveaux services).",
      ],
      en: [
        "Systems & Networks Administration : Operating and maintaining enterprise server fleets (Windows Server, Linux) and network appliances, guaranteeing high availability across the core banking backbone.",
        "Identity & Access Management (IAM) : Centralized user account administration, granular permission management, and security policy hardening via Active Directory and GPO rollouts.",
        "Monitoring : Real-time monitoring of IT infrastructure availability and performance using Dynatrace and SolarWinds platforms.",
        "Patch Management & Resilience : Deployment of OS updates and security hotfixes. Managing critical data lifecycles (backups, integrity verifications, and disaster recovery drills).",
        "Database Administration : Managing and querying relational database management systems using SQL to support operational requirements.",
        "Projects & Modernization : Active contribution to infrastructure transformation projects (migrations, rollouts, and production deployments of new banking services).",
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
      fr: "Stage de découverte et d'assistance technique. Cette première immersion m'a permis d'observer le fonctionnement d'une infrastructure d'entreprise, de comprendre l'architecture globale d'un Système d'Information et de me familiariser avec les environnements systèmes et réseaux en conditions réelles.",
      en: "Discovery and technical support internship. This initial immersion provided firsthand insight into enterprise infrastructure operations, comprehensive Information System (IS) architectures, and real-world system and network administration.",
    },
    responsibilities: {
      fr: [
        "Découverte de l'Architecture SI : Compréhension de la topologie d'un réseau d'entreprise, du rôle des différents serveurs et des enjeux de disponibilité du parc informatique.",
        "Administration Windows Server : Initiation pratique à la gestion des services cœurs de réseau (DNS, DHCP) et au maintien de l'environnement Microsoft.",
        "Gestion des Utilisateurs (Active Directory) : Prise en main de l'annuaire pour des tâches de base : création de comptes, attribution des droits d'accès, habilitations et observation du fonctionnement des GPO.",
        "Initiation Réseaux & Sécurité : Assistance et observation lors de la configuration et du diagnostic des équipements d'interconnexion (switchs, routeurs Cisco) et des firewalls.",
        "Support de proximité : Participation à la résolution des incidents techniques quotidiens afin d'accompagner les utilisateurs et de garantir le bon fonctionnement de leur matériel.",
      ],
      en: [
        "IS Architecture Discovery : Understanding enterprise network topology, server roles, and IT asset availability requirements.",
        "Windows Server Administration : Hands-on introduction to core network services (DNS, DHCP) and Microsoft server maintenance.",
        "User Management (Active Directory) : Account creation, permission assignments, credential management, and observing GPO enforcement.",
        "Networks & Security Introduction : Assisting and observing configuration and troubleshooting of Cisco switches, routers, and firewalls.",
        "On-site Technical Support : Resolving daily technical incidents to support end-users and ensure hardware reliability.",
      ],
    },
    technologies: ["Windows Server", "Active Directory", "GPO", "DNS/DHCP", "Firewalls", "Cisco"],
  },
];
