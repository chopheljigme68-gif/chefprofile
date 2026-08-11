import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const SITE_NAME = 'The Chefs of Bhutan';
const SITE_DESC =
  'A directory of Bhutanese chefs — from executive chefs in luxury resorts to commis coming up through the ranks. Read their profiles, see their kitchens, download their CVs.';

export const metadata: Metadata = {
  metadataBase: new URL('https://chefs-of-bhutan.vercel.app'),
  title: {
    default: `${SITE_NAME} — Culinary talent directory`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    'Bhutan',
    'chefs',
    'culinary',
    'hospitality',
    'Thimphu',
    'Paro',
    'Bhutanese cuisine',
  ],
  openGraph: {
    title: `${SITE_NAME} — Culinary talent directory`,
    description: SITE_DESC,
    type: 'website',
    locale: 'en_BT',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Culinary talent directory`,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FBF7E4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are loaded via <link> rather than next/font so the app builds
          with no network access (offline CI, air-gapped runners). The lint rule
          below targets the pages router's _document and does not apply here.
          To self-host instead, see "Fonts" in the README.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Karla:wght@300..800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-label focus:text-paper"
        >
          Skip to content
        </a>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
