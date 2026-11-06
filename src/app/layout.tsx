import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Tugrul Subekci";
const description = "Software engineer building scalable cloud systems and production-grade applications. Explore real-world projects and system architecture work.";
const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["Tugrul Subekci", "portfolio", "full-stack developer", "web development", "projects"],
  authors: [{ name: "Tugrul Subekci" }],
  creator: "Tugrul Subekci",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Tugrul Subekci",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Open Graph meta tags for social media sharing
  openGraph: {
    title: title,
    description: description,
    url: siteUrl,
    siteName: "Tugrul Subekci",
    type: "website",
    locale: "en_US",
  },
  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@tugrulsubekci",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tugrul Subekci",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    description: description,
    sameAs: [
      "https://github.com/tugrulsubekci",
      "https://linkedin.com/in/tugrulsubekci",
      "https://twitter.com/tugrulsubekci",
    ],
    jobTitle: "Software Engineer",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the theme before first paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LDNB8NKB59"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LDNB8NKB59');
          `}
        </Script>
        <ServiceWorkerCleanup />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}