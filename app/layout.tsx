// File purpose: Root layout: loads fonts + global CSS, sets SEO metadata, and wraps every page with the navbar, footer, sticky contact buttons, and a scroll progress bar.
import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { ScrollProgress } from '@/components/motion/ScrollProgress';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvagroup.in'),
  title: {
    default: 'Yuva Group — Premium Homes in Bengaluru | Yuva Structures Pvt. Ltd.',
    template: '%s | Yuva Group',
  },
  description:
    'Yuva Group (Yuva Structures Pvt. Ltd.) builds premium and affordable apartments, villas, and residential communities across south Bengaluru — Electronic City, Attibele, Chandapura, Anekal Road, and Hosur Road.',
  keywords: [
    'builders in Bangalore',
    'flats for sale in Bangalore',
    'apartments near Electronic City',
    'flats near Attibele',
    'apartments near Chandapura',
    'residential projects in Bengaluru',
    'ready to move apartments Bangalore',
    'premium flats Bangalore',
    'Yuva Group',
    'Yuva Structures',
  ],
  icons: {
    icon: [
      { url: '/favicon/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yuvagroup.in',
    siteName: 'Yuva Group',
    title: 'Yuva Group — Premium Homes in Bengaluru',
    description:
      'Premium and affordable apartments, villas, and residential communities across south Bengaluru.',
    images: [{ url: '/photos/amenities/clubhouse.jpg', width: 1199, height: 799, alt: 'Yuva Group clubhouse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuva Group — Premium Homes in Bengaluru',
    description:
      'Premium and affordable apartments, villas, and residential communities across south Bengaluru.',
    images: ['/photos/amenities/clubhouse.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yuva Group',
  alternateName: 'Yuva Structures Pvt. Ltd.',
  url: 'https://yuvagroup.in',
  areaServed: 'Bengaluru, Karnataka, India',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <StickyCTA />
        {/* Spacer so the fixed mobile CTA bar never covers the footer's last line */}
        <div aria-hidden className="h-[76px] sm:h-0" />
      </body>
    </html>
  );
}
