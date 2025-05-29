import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghostwriter",
  description: "Effortlessly manage your email and calendar with natural conversation. Whether you're at your desk, on your commute, or mid-flight—unlock your freedom with AI-powered productivity.",
  keywords: "AI assistant, email management, calendar management, productivity, executive assistant, natural conversation, automation",
  authors: [{ name: "Ghostwriter" }],
  creator: "Ghostwriter",
  publisher: "Ghostwriter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Ghostwriter.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ghostwriter - Ghostwriter Your Day",
    description: "Effortlessly manage your email and calendar with natural conversation. Unlock your freedom with AI-powered productivity.",
    url: 'https://Ghostwriter.ai',
    siteName: 'Ghostwriter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ghostwriter - AI-powered email and calendar management',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ghostwriter - Ghostwriter Your Day",
    description: "Effortlessly manage your email and calendar with natural conversation. Unlock your freedom with AI-powered productivity.",
    images: ['/og-image.png'],
    creator: '@Ghostwriter',
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
    <html lang="en">
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
