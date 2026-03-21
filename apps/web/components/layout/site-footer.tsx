import Link from 'next/link';
import { siteConfig } from '@vidhi-vidhan/shared';

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 bg-stone-950 text-stone-200">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <h3 className="text-2xl font-semibold text-white">Vidhi Vidhan · विधि विधान</h3>
          <p className="max-w-xl text-sm leading-7 text-stone-300">A bilingual, local-first ritual services platform built for families who want trustworthy pandit booking, clear communication, and respectful spiritual guidance starting from Jabalpur.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/services">All Services</Link>
            <Link href="/book-pandit">Book a Pandit</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Contact</h4>
          <div className="space-y-2 text-sm text-stone-300">
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>Instagram: @vidhividhan0220</p>
            <p>Facebook: Vidhi Vidhan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
