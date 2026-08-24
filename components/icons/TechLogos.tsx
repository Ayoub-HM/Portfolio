import React from "react";

interface LogoProps {
  className?: string;
}

export function KeycloakLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <path
        d="M128 16C66.14 16 16 66.14 16 128s50.14 112 112 112 112-50.14 112-112S189.86 16 128 16z"
        fill="#0088CE"
      />
      <path
        d="M128 48c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 30c27.61 0 50 22.39 50 50s-22.39 50-50 50-50-22.39-50-50 22.39-50 50-50z"
        fill="#FFFFFF"
        fillOpacity="0.25"
      />
      <path
        d="M128 88a40 40 0 100 80 40 40 0 000-80zm0 20a20 20 0 110 40 20 20 0 010-40z"
        fill="#FFFFFF"
      />
      <path
        d="M118 138h20v45h-20zM128 163h25v15h-25z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ActiveDirectoryLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#0078D4" fillOpacity="0.15" />
      <circle cx="128" cy="72" r="32" fill="#0078D4" />
      <circle cx="68" cy="184" r="26" fill="#0078D4" />
      <circle cx="188" cy="184" r="26" fill="#0078D4" />
      <path
        d="M128 104v36M128 140H68v18M128 140h60v18"
        stroke="#0078D4"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="128" cy="72" r="14" fill="#FFFFFF" />
      <circle cx="68" cy="184" r="11" fill="#FFFFFF" />
      <circle cx="188" cy="184" r="11" fill="#FFFFFF" />
    </svg>
  );
}

export function WazuhLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#1B72E8" fillOpacity="0.15" />
      <path
        d="M50 80l40 100 38-75 38 75 40-100"
        stroke="#1B72E8"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="128" cy="60" r="14" fill="#1B72E8" />
    </svg>
  );
}

export function ZabbixLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="40" fill="#D40000" />
      <path
        d="M60 76h136l-84 104h84v20H60l84-104H60V76z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function KaliLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#2980B9" fillOpacity="0.15" />
      <path
        d="M128 32c-35 25-68 62-68 108 0 54 42 84 68 84s68-30 68-84c0-46-33-83-68-108z"
        fill="#2980B9"
      />
      <path
        d="M128 65c-20 20-38 45-38 75 0 35 24 55 38 55s38-20 38-55c0-30-18-55-38-75z"
        fill="#FFFFFF"
      />
      <circle cx="128" cy="130" r="14" fill="#111827" />
    </svg>
  );
}

export function LinuxLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <ellipse cx="128" cy="140" rx="60" ry="70" fill="#262626" />
      <ellipse cx="128" cy="150" rx="44" ry="54" fill="#FFFFFF" />
      <circle cx="128" cy="75" r="45" fill="#262626" />
      <circle cx="112" cy="70" r="8" fill="#FFFFFF" />
      <circle cx="144" cy="70" r="8" fill="#FFFFFF" />
      <circle cx="114" cy="70" r="4" fill="#111827" />
      <circle cx="142" cy="70" r="4" fill="#111827" />
      <path
        d="M112 85c8 12 24 12 32 0-8-4-24-4-32 0z"
        fill="#FFA500"
      />
      <ellipse cx="85" cy="210" rx="30" ry="14" fill="#FFA500" />
      <ellipse cx="171" cy="210" rx="30" ry="14" fill="#FFA500" />
      <ellipse cx="64" cy="140" rx="14" ry="40" fill="#262626" transform="rotate(-20 64 140)" />
      <ellipse cx="192" cy="140" rx="14" ry="40" fill="#262626" transform="rotate(20 192 140)" />
    </svg>
  );
}

export function WindowsServerLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <path d="M36 44l80-11v87H36V44z" fill="#00ADEF" />
      <path d="M126 31l94-15v104h-94V31z" fill="#00ADEF" />
      <path d="M36 136h80v87l-80-11v-76z" fill="#00ADEF" />
      <path d="M126 136h94v104l-94-15V136z" fill="#00ADEF" />
    </svg>
  );
}

export function DockerLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect x="52" y="104" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="84" y="104" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="116" y="104" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="84" y="72" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="116" y="72" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="148" y="72" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="148" y="104" width="24" height="24" rx="3" fill="#0db7ed" />
      <rect x="180" y="104" width="24" height="24" rx="3" fill="#0db7ed" />
      <path
        d="M242 128c-4 0-22-2-34 10-10-8-26-8-36-2-8-2-120-4-120 54 0 46 42 54 94 54 58 0 102-28 106-90 4-2 10-10 10-18-6-6-14-8-20-8z"
        fill="#0db7ed"
      />
      <circle cx="70" cy="164" r="5" fill="#FFFFFF" />
    </svg>
  );
}

export function KubernetesLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <path
        d="M128 20l94 54v108l-94 54-94-54V74l94-54z"
        fill="#326CE5"
      />
      <path
        d="M128 54l64 37v74l-64 37-64-37V91l64-37z"
        fill="#FFFFFF"
        fillOpacity="0.2"
      />
      <circle cx="128" cy="128" r="26" fill="#FFFFFF" />
      <path
        d="M128 66v26M128 164v26M74 97l22 13M160 146l22 13M74 159l22-13M160 110l22-13"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EksLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#FF9900" fillOpacity="0.15" />
      <path
        d="M128 36l80 46v92l-80 46-80-46V82l80-46z"
        stroke="#FF9900"
        strokeWidth="14"
        fill="#232F3E"
      />
      <path
        d="M128 72l48 28v56l-48 28-48-28v-56l48-28z"
        fill="#FF9900"
      />
      <circle cx="128" cy="128" r="16" fill="#FFFFFF" />
    </svg>
  );
}

export function AksLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#0078D4" fillOpacity="0.15" />
      <path
        d="M128 36l80 46v92l-80 46-80-46V82l80-46z"
        fill="#0078D4"
      />
      <path
        d="M128 68l52 30v60l-52 30-52-30V98l52-30z"
        fill="#50E6FF"
      />
      <circle cx="128" cy="128" r="20" fill="#002952" />
      <circle cx="128" cy="128" r="10" fill="#FFFFFF" />
    </svg>
  );
}

export function TerraformLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <path d="M96 28L44 58v60l52-30V28z" fill="#844FBA" />
      <path d="M106 94l52-30V4l-52 30v60z" fill="#5C4EE5" />
      <path d="M106 104v60l52-30v-60l-52 30z" fill="#844FBA" />
      <path d="M168 70l44 25v60l-44-25V70z" fill="#844FBA" />
      <path d="M106 174v60l52-30v-60l-52 30z" fill="#5C4EE5" />
    </svg>
  );
}

export function ServiceNowLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#81B5A1" fillOpacity="0.18" />
      <path
        d="M128 40a88 88 0 00-88 88c0 48.6 39.4 88 88 88 40 0 74-27 84-64h-35c-9 20-30 34-49 34a58 58 0 1158-58c0 9-2 18-6 26l29 16c8-13 12-27 12-42a88 88 0 00-93-88z"
        fill="#293E40"
        className="dark:fill-[#81B5A1]"
      />
      <circle cx="128" cy="128" r="28" fill="#81B5A1" />
    </svg>
  );
}

export function ItopLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#43A047" fillOpacity="0.15" />
      <path
        d="M128 36l76 44v92l-76 44-76-44V80l76-44z"
        fill="#43A047"
      />
      <path
        d="M108 85h40v26h-40zM116 120h24v60h-24z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GlpiLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#005C9E" fillOpacity="0.15" />
      <circle cx="128" cy="128" r="88" fill="#005C9E" />
      <path
        d="M128 64c-35 0-64 29-64 64s29 64 64 64c20 0 38-9 50-24l-20-15c-8 10-18 15-30 15-22 0-40-18-40-40s18-40 40-40c14 0 26 7 33 18l21-14c-12-17-31-28-54-28z"
        fill="#FFA000"
      />
      <circle cx="128" cy="128" r="20" fill="#FFFFFF" />
    </svg>
  );
}

export function PythonLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <path
        d="M126 24c-33 0-31 14-31 14l.03 15h32v4.5H62S34 54 34 88s24 33 24 33h14v-16s-.7-19 19-19h32s18 .3 18-17.7V50s2.7-26-21-26zm-17 10a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
        fill="#3776AB"
      />
      <path
        d="M130 232c33 0 31-14 31-14l-.03-15h-32v-4.5h65s28 3.5 28-30.5-24-33-24-33h-14v16s.7 19-19 19h-32s-18-.3-18 17.7V206s-2.7 26 21 26zm17-10a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function GithubLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128 20C68.35 20 20 68.35 20 128c0 47.72 30.95 88.2 73.88 102.47 5.4 1 7.37-2.35 7.37-5.2 0-2.57-.1-11.1-.15-20.08-30.04 6.53-36.38-12.75-36.38-12.75-4.91-12.48-12-15.8-12-15.8-9.8-6.7.75-6.56.75-6.56 10.84.76 16.55 11.13 16.55 11.13 9.63 16.5 25.27 11.73 31.42 8.97 1-.7 2.18-2.6 3.45-4.45-24-2.73-49.2-12-49.2-53.38 0-11.79 4.2-21.43 11.1-28.98-1.12-2.73-4.81-13.71 1.05-28.58 0 0 9.07-2.9 29.7 11.07A103.3 103.3 0 01128 78.4c9.1.04 18.27 1.23 26.85 3.62 20.62-13.97 29.68-11.07 29.68-11.07 5.88 14.87 2.19 25.85 1.07 28.58 6.92 7.55 11.08 17.19 11.08 28.98 0 41.5-25.25 50.62-49.33 53.3 3.87 3.33 7.33 9.9 7.33 19.95 0 14.4-.13 26.02-.13 29.55 0 2.88 1.93 6.25 7.42 5.18C205.1 216.15 236 175.7 236 128c0-59.65-48.35-108-108-108z"
      />
    </svg>
  );
}

export function GithubActionsLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#2088FF" fillOpacity="0.15" />
      <path
        d="M60 128a32 32 0 1064 0 32 32 0 00-64 0zm72 0a32 32 0 1064 0 32 32 0 00-64 0z"
        stroke="#2088FF"
        strokeWidth="14"
      />
      <circle cx="92" cy="128" r="12" fill="#2088FF" />
      <circle cx="164" cy="128" r="12" fill="#2088FF" />
    </svg>
  );
}

export function IsoLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#0284C7" fillOpacity="0.15" />
      <path
        d="M128 32l70 28v68c0 48-30 92-70 104-40-12-70-56-70-104V60l70-28z"
        fill="#0284C7"
      />
      <path
        d="M106 130l16 16 38-40"
        stroke="#FFFFFF"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const techLogoMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Keycloak: KeycloakLogo,
  "Active Directory": ActiveDirectoryLogo,
  Wazuh: WazuhLogo,
  Zabbix: ZabbixLogo,
  Kali: KaliLogo,
  Linux: LinuxLogo,
  "Windows Server": WindowsServerLogo,
  Docker: DockerLogo,
  Kubernetes: KubernetesLogo,
  EKS: EksLogo,
  AKS: AksLogo,
  Terraform: TerraformLogo,
  ServiceNow: ServiceNowLogo,
  iTop: ItopLogo,
  GLPI: GlpiLogo,
  Python: PythonLogo,
  GitHub: GithubLogo,
  "GitHub Actions": GithubActionsLogo,
  "ISO 27001": IsoLogo,
};
