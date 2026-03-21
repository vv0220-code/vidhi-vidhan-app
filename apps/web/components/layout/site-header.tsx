import Link from 'next/link';
import { PhoneCall, MessageCircleMore } from 'lucide-react';
import { siteConfig } from '@vidhi-vidhan/shared';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Cities', '/cities/jabalpur'],
  ['Blog', '/blog'],
  ['Book a Pandit', '/book-pandit'],
  ['Pandit Registration', '/pandit-registration'],
  ['Contact', '/contact'],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="space-y-1">
          <div className="text-xl font-bold text-brand-vermilion">Vidhi Vidhan</div>
          <div className="text-xs text-stone-500">विधि विधान · {siteConfig.brand.taglineHi}</div>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-stone-700 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-brand-vermilion">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={siteConfig.contact.whatsapp} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            <MessageCircleMore className="size-4" /> WhatsApp
          </Link>
          <Link href={`tel:${siteConfig.contact.phone}`} className="hidden items-center gap-2 rounded-full border border-amber-200 px-4 py-2 text-sm font-semibold text-stone-700 md:inline-flex">
            <PhoneCall className="size-4" /> Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}
