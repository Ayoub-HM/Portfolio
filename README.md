# Ayoub HAMMOU — Cybersecurity Portfolio

A modern, fully **bilingual (FR/EN)** cybersecurity portfolio built with **Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide React**.
Dark "SOC control center" design with electric-blue / cyan accents, light/dark toggle, and a clean, data-driven architecture so the content is easy to keep up to date.

French is the default language; English is available through the **FR / EN** switcher in the navbar.

---

## ✨ Features

- 🌍 **Bilingual** — every string lives in `messages/fr.json` / `messages/en.json` (FR default, EN switcher). No text is hardcoded in components.
- 🎨 **Cyber dashboard UI** — deep navy background, blue/cyan accents, glassmorphism cards, subtle glow.
- 🌓 **Dark / light mode** — dark by default, persisted in `localStorage`, no flash on load.
- 🧩 **Component-based** — Navbar, Hero, Stats, About, DashboardPreview, Projects, Skills, Certifications, Experience, Education, Contact, Footer.
- 🗂️ **Data-driven** — all profile content lives in `data/*.ts`, separate from the UI.
- ⚡ **Animations** — subtle Framer Motion fade-ins (respects `prefers-reduced-motion`).
- 🔍 **SEO** — translated metadata, Open Graph, favicon.
- ♿ **Accessible & responsive** — semantic HTML, ARIA labels, works on mobile/tablet/desktop.

---

## 🚀 1. Run the project locally

**Prerequisites:** [Node.js](https://nodejs.org/) **18.17+** and npm. (An internet connection is needed on the first build so Next.js can fetch the Google Fonts.)

```bash
# from the project folder
npm install      # install dependencies
npm run dev      # start the dev server
```

Then open **http://localhost:3000**.

Other scripts:

```bash
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # lint the code
```

---

## 👤 2. Where to update your personal information

Everything lives in the **`data/`** folder (one file per topic):

| File | What it holds |
|------|---------------|
| `data/profile.ts` | Name, email, phone, location, GitHub/LinkedIn URLs, CV path, and the 4 **stat cards** (`projects`, `labHours`, `tools`, `certifications`). |
| `data/experience.ts` | Work experience timeline (role, company, dates, responsibilities…). |
| `data/education.ts` | Education timeline. |
| `data/certifications.ts` | Certifications (`obtained` / `in-progress`). |
| `data/skills.ts` | Skill categories, proficiency bars, and the technology icon grid. |
| `data/projects.ts` | Projects (see next section). |

> 📌 **TODO in `data/profile.ts`:** the `labHours` stat and the `cvPath` are placeholders — adjust the lab-hours number to your real figure, and the CV file is at `public/cv/Ayoub-HAMMOU-CV.pdf` (replace it to update the download).

**Bilingual content in data files:** fields that differ per language use a `{ fr, en }` object, e.g.:

```ts
title: { fr: "Pipeline DevSecOps — GitHub Actions", en: "DevSecOps Pipeline — GitHub Actions" }
```

Language-neutral fields (tech tags, URLs, dates, company names) are plain strings.

---

## 🛠️ 3. How to add or edit a project

Open **`data/projects.ts`** and add an object to the `projects` array:

```ts
{
  id: "my-project",                       // unique id
  title: { fr: "Mon projet", en: "My project" },
  description: { fr: "Description FR…", en: "Description EN…" },
  category: "DEVSECOPS",                  // PENTEST | DEVSECOPS | CLOUD | IAM | SOC | GRC | HARDENING
  tags: ["Docker", "CI/CD"],             // small tech tags

  // Choose ONE of the following for the action button:
  github: "https://github.com/Ayoub-HM/my-repo", // → "View Project" button
  // caseStudy: true,                            // → "Case Study" button (scrolls to Contact)
  // (omit both)                                 // → disabled "Coming Soon" button
}
```

Button logic:
- `github` set → **View Project / Voir le projet** (opens the repo).
- no `github` + `caseStudy: true` → **Case Study / Étude de cas** (scrolls to the contact section to request the report).
- neither → disabled **Coming Soon / Bientôt disponible**.

> ⚠️ Never link to a repository that doesn't exist. For private/report-only labs, use `caseStudy: true`.

To add a new project **category**, add it to the `ProjectCategory` union and to `categoryStyles` in `components/Projects.tsx`.

---

## 🌐 4. How to edit French & English translations

All interface text is in:

- `messages/fr.json` — 🇫🇷 French
- `messages/en.json` — 🇬🇧 English

Both files **must have the exact same keys** (only the values differ). The French file is the canonical shape — TypeScript infers the translation type from it, so a missing key in either file will show up as a type error.

Example:

```jsonc
// messages/fr.json
"hero": { "viewProjects": "Voir mes projets" }
// messages/en.json
"hero": { "viewProjects": "View Projects" }
```

In components, text is read from the typed message tree:

```tsx
const { m } = useI18n();
return <button>{m.hero.viewProjects}</button>;
```

To **change the default language**, edit `defaultLocale` in `lib/i18n/config.ts`.

To verify both files stay in sync, you can re-run a key diff (PowerShell) or just rely on `npm run build` to surface mismatches via TypeScript.

---

## 🎨 Customizing the design

- **Colors** — edit the CSS variables in `app/globals.css` (`:root` = dark theme, `:root.light` = light theme). They are space-separated RGB channels.
- **Tailwind tokens** — semantic color names (`background`, `surface`, `primary`, `accent`, …) are mapped in `tailwind.config.ts`.
- **Animations / shadows / grid** — also defined in `tailwind.config.ts` and `app/globals.css`.

---

## ☁️ 5. Deploy on Vercel

This repo is already linked to GitHub (`Ayoub-HM/Portfolio`), so deployment is one click:

1. Push your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
2. Go to **https://vercel.com** and sign in with GitHub.
3. **Add New… → Project** and import the `Ayoub-HM/Portfolio` repository.
4. Vercel auto-detects Next.js — keep the defaults (Build: `next build`, Output: `.next`). No environment variables are needed.
5. Click **Deploy**. Every future `git push` to `main` redeploys automatically.

> After deployment, update `metadataBase` in `app/layout.tsx` with your real Vercel URL (e.g. `https://your-domain.vercel.app`) for correct Open Graph / SEO links.

---

## 📁 Project structure

```
.
├─ app/
│  ├─ layout.tsx          # root layout, fonts, providers, SEO metadata
│  ├─ page.tsx            # composes all sections
│  ├─ globals.css         # theme tokens + base styles
│  └─ icon.svg            # favicon
├─ components/            # all UI components (+ ui/ helpers)
├─ data/                  # ← your content lives here
├─ lib/
│  ├─ i18n/               # custom bilingual system (config, provider, dictionaries)
│  └─ theme/              # dark/light theme provider
├─ messages/
│  ├─ fr.json             # 🇫🇷 translations (default)
│  └─ en.json             # 🇬🇧 translations
├─ public/cv/             # downloadable CV
└─ tailwind.config.ts
```

---

## 📝 Notes

- The **System Overview** dashboard and the hero radar are **design elements** with illustrative (non-operational) data.
- The **contact form** is a UI demo (no backend). To make it send emails, wire `handleSubmit` in `components/Contact.tsx` to a service such as [Formspree](https://formspree.io/), [Resend](https://resend.com/), or a Next.js Route Handler.

---

© 2026 Ayoub HAMMOU — Cybersecurity · IAM · SOC · GRC · DevSecOps
