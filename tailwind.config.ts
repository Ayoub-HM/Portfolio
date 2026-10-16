import type { Config } from "tailwindcss";

/**
 * Semantic colors are driven by CSS variables defined in app/globals.css.
 * Dark theme is the default (:root); the `.light` class on <html> overrides them.
 * Each variable holds space-separated RGB channels so Tailwind can apply opacity.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          deep: "rgb(var(--primary-deep) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgb(var(--primary) / 0.45)",
        card: "0 20px 50px -24px rgb(0 0 0 / 0.6)",
      },
      keyframes: {
        // Log list is rendered twice; scrolling by half loops seamlessly.
        "log-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "log-scroll": "log-scroll 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
