import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import fr from "@/messages/fr.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Default (French) SEO metadata. The page title also updates client-side on switch.
export const metadata: Metadata = {
  metadataBase: new URL("https://ayoub-hammou.vercel.app"),
  title: fr.meta.title,
  description: fr.meta.description,
  keywords: fr.meta.keywords.split(",").map((k) => k.trim()),
  authors: [{ name: "Ayoub HAMMOU" }],
  creator: "Ayoub HAMMOU",
  openGraph: {
    title: fr.meta.title,
    description: fr.meta.description,
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fr.meta.title,
    description: fr.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050B18",
  width: "device-width",
  initialScale: 1,
};

// Runs before hydration to apply the saved theme/language and avoid a flash.
const noFlashScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') document.documentElement.classList.add('light');
    var l = localStorage.getItem('locale');
    if (l === 'fr' || l === 'en') document.documentElement.lang = l;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
