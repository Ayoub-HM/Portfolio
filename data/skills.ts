/**
 * Skills data.
 * - `category` keys map to messages -> skills.categories.<key> (translated labels).
 * - `icon` strings map to a Lucide icon in components/Skills.tsx (iconMap).
 * - Proficiency levels are self-assessed (0-100) and drive the progress bars.
 */
export type SkillCategoryKey =
  | "iam"
  | "soc"
  | "grc"
  | "cloud"
  | "devsecops"
  | "scripting"
  | "systems";

export interface SkillGroup {
  key: SkillCategoryKey;
  icon: string;
  skills: string[];
}

export interface Proficiency {
  key: SkillCategoryKey;
  level: number;
}

export interface TechIcon {
  name: string;
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    key: "iam",
    icon: "key-round",
    skills: [
      "Active Directory",
      "Microsoft Entra ID",
      "Keycloak",
      "CyberArk",
      "LDAP",
      "RBAC",
      "SSO",
      "MFA",
      "SAML / OAuth2 / OIDC",
    ],
  },
  {
    key: "soc",
    icon: "radar",
    skills: [
      "Wazuh",
      "Dynatrace",
      "SolarWinds",
      "Zabbix",
      "Kibana",
      "Axway Sentinel",
      "ServiceNow",
      "GLPI",
      "Log analysis",
      "Incident response",
    ],
  },
  {
    key: "grc",
    icon: "scroll-text",
    skills: [
      "ISO 27001 / 27002",
      "EBIOS RM",
      "RGPD / GDPR",
      "NIS2",
      "DORA",
      "PSSI",
      "PRA / PCA",
      "Risk management",
    ],
  },
  {
    key: "cloud",
    icon: "cloud",
    skills: [
      "AWS",
      "AWS EKS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "IaC",
      "HDS",
      "KMS / BYOK",
    ],
  },
  {
    key: "devsecops",
    icon: "infinity",
    skills: [
      "GitHub Actions",
      "CI/CD",
      "Semgrep",
      "CodeQL",
      "SonarQube",
      "Trivy",
      "Grype",
      "Hadolint",
      "Gitleaks",
      "SAST / DAST / SCA",
    ],
  },
  {
    key: "scripting",
    icon: "terminal",
    skills: ["Python", "Bash", "PowerShell", "REST API", "Flask", "SQL"],
  },
  {
    key: "systems",
    icon: "server",
    skills: [
      "Windows Server",
      "Linux",
      "AD / GPO",
      "DNS / DHCP",
      "Firewalls",
      "VMware",
      "Proxmox",
      "Hardening",
    ],
  },
];

export const proficiencies: Proficiency[] = [
  { key: "soc", level: 90 },
  { key: "iam", level: 85 },
  { key: "systems", level: 85 },
  { key: "grc", level: 80 },
  { key: "devsecops", level: 80 },
  { key: "cloud", level: 78 },
  { key: "scripting", level: 75 },
];

export const techIcons: TechIcon[] = [
  { name: "CyberArk", icon: "lock" },
  { name: "Keycloak", icon: "key-round" },
  { name: "Active Directory", icon: "users" },
  { name: "Entra ID", icon: "cloud" },
  { name: "Wazuh", icon: "radar" },
  { name: "Linux", icon: "terminal" },
  { name: "Windows Server", icon: "server" },
  { name: "PowerShell", icon: "square-terminal" },
  { name: "Python", icon: "file-code" },
  { name: "Docker", icon: "container" },
  { name: "Kubernetes", icon: "boxes" },
  { name: "Terraform", icon: "layers" },
  { name: "Git", icon: "git-branch" },
  { name: "ISO 27001", icon: "badge-check" },
  { name: "GitHub Actions", icon: "workflow" },
  { name: "AWS", icon: "cloud-cog" },
];
