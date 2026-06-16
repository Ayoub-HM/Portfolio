/**
 * Core profile data (links, contact, headline numbers).
 * Edit this file to update personal information across the whole site.
 */
export const profile = {
  name: "Ayoub HAMMOU",
  initials: "AH",
  email: "Ayoubhammou77@gmail.com",
  phone: "+33 7 63 49 61 04",
  phoneHref: "tel:+33763496104",
  location: "Paris, France",
  github: "https://github.com/Ayoub-HM",
  linkedin: "https://www.linkedin.com/in/ayoub-hammou/",
  // Place your CV PDF in /public/cv/ to make the "Download CV" button work.
  cvPath: "/cv/Ayoub-HAMMOU-CV.pdf",
} as const;

/**
 * Stat cards shown under the hero.
 * `labelKey` maps to messages -> stats.<key>. Update the values freely.
 * NOTE: "labHours" is an estimate — adjust it to your real figure (TODO).
 */
export const stats: { id: keyof StatLabels; value: string }[] = [
  { id: "projects", value: "10+" },
  { id: "labHours", value: "300+" }, // TODO: set your real cumulative lab hours
  { id: "tools", value: "40+" },
  { id: "certifications", value: "3" },
];

type StatLabels = {
  projects: string;
  labHours: string;
  tools: string;
  certifications: string;
};
