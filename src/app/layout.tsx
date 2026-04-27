import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const pixel = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

const SITE_URL = "https://javedahmadzai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Muhammad Javed",
    "Senior Software Developer",
    "React Native",
    "Node.js",
    "TypeScript",
    "Toronto",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    creator: "@theahmadzai786",
    images: ["/og.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeInitScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (t === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: "Muhammad",
  familyName: "Javed",
  jobTitle: profile.roleTitle,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  image: `${SITE_URL}/avatar.png`,
  description: profile.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.employer,
    url: "https://tryperdiem.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "St. Francis Xavier University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Arid Agriculture University",
    },
  ],
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.twitter],
  knowsAbout: skills.flatMap((group) => group.items),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${pixel.variable}`}
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: required to set theme before paint
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: standard JSON-LD pattern
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
