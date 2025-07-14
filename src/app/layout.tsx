import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Configure Inter font (Primary)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Configure Lora font (Secondary)
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GhostSync",
  description: "Connect your ghostwriting projects with crystal-clear client visibility and seamless workflow management. Turn satisfied authors into raving fans with our ghost link platform.",
  keywords: "ghostwriting, project management, client collaboration, author services, manuscript management, publishing workflow, freelance writing, content creation",
  authors: [{ name: "GhostSync" }],
  creator: "GhostSync",
  publisher: "GhostSync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://GhostSync.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GhostSync - Where Ghostwriters Connect & Deliver Like Pros",
    description: "Connect your ghostwriting projects with crystal-clear client visibility and seamless workflow management. Turn satisfied authors into raving fans.",
    url: 'https://GhostSync.ai',
    siteName: 'GhostSync',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GhostSync - Professional ghostwriting project management',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GhostSync - Where Ghostwriters Connect & Deliver Like Pros",
    description: "Connect your ghostwriting projects with crystal-clear client visibility and seamless workflow management. Turn satisfied authors into raving fans.",
    images: ['/og-image.png'],
    creator: '@GhostSync',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
