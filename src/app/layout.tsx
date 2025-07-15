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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      },
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#5D9CEC" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
