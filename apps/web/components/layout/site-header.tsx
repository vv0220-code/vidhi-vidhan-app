import Link from 'next/link';
import { PhoneCall, MessageCircleMore } from 'lucide-react';
import { siteConfig } from '@vidhi-vidhan/shared';

const nav = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Products', '/products'],
  ['Jabalpur', '/jabalpur/pandit-booking'],
  ['Pandit Register', '/pandit/register'],
  ['Contact', '/contact'],
] as const;

export function SiteHeader() {
  const waLink = `https://wa.me/91${siteConfig.contact.whatsapp}`;
  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/30 bg-stone-950/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-4 py-4 text-amber-50">
        <Link href="/" className="space-y-1">
          <div className="text-xl font-bold text-amber-300">{siteConfig.brand.name}</div>
          <div className="text-xs text-amber-100">{siteConfig.brand.nameHi} · {siteConfig.brand.taglineHi}</div>
        </Link>
        <nav className="hidden gap-5 text-sm lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-amber-300">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={waLink} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            <MessageCircleMore className="size-4" /> WhatsApp
          </Link>
          <Link href={`tel:${siteConfig.contact.phone}`} className="hidden items-center gap-2 rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold md:inline-flex">
            <PhoneCall className="size-4" /> Call
          </Link>
        </div>
      </div>
    </header>
  );
}
