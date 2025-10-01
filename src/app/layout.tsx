import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'IE Global - AI-driven Digital Agency',
    template: '%s | IE Global'
  },
  description: 'Custom websites that load in <1s and convert 20–40% better. We build high-performance web applications, mobile apps, and M365 solutions.',
  keywords: ['web development', 'mobile apps', 'M365', 'AI', 'digital agency', 'performance', 'accessibility'],
  authors: [{ name: 'IE Global' }],
  creator: 'IE Global',
  publisher: 'IE Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ie-global.example'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ie-global.example',
    title: 'IE Global - AI-driven Digital Agency',
    description: 'Custom websites that load in <1s and convert 20–40% better. We build high-performance web applications, mobile apps, and M365 solutions.',
    siteName: 'IE Global',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IE Global - AI-driven Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IE Global - AI-driven Digital Agency',
    description: 'Custom websites that load in <1s and convert 20–40% better.',
    images: ['/og-image.png'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2A7FFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'IE Global',
              url: 'https://ie-global.example',
              logo: 'https://ie-global.example/logo.png',
              description: 'AI-driven digital agency delivering custom web, app, and M365 solutions',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'sales',
                email: 'sales@ie-global.example',
              },
              sameAs: [
                'https://www.linkedin.com/company/ie-global',
                'https://github.com/ie-global',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

