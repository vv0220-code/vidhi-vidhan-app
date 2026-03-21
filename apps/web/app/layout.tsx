import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { StickyContact } from '@/components/layout/sticky-contact';
import { siteConfig } from '@vidhi-vidhan/shared';

export const metadata: Metadata = {
  metadataBase: new URL('https://vidhividhan.in'),
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: 'Book verified pandits, pujas, havan, and city-specific ritual services with a premium bilingual experience starting from Jabalpur.',
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyContact />
      </body>
    </html>
  );
}
