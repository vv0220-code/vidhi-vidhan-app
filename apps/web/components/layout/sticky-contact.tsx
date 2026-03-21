import Link from 'next/link';
import { MessageCircleMore, PhoneCall } from 'lucide-react';
import { siteConfig } from '@vidhi-vidhan/shared';

export function StickyContact() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white p-2 shadow-2xl ring-1 ring-amber-100">
      <Link href={siteConfig.contact.whatsapp} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white">
        <MessageCircleMore className="size-4" /> WhatsApp
      </Link>
      <Link href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 rounded-full bg-brand-vermilion px-4 py-3 text-sm font-semibold text-white">
        <PhoneCall className="size-4" /> Call
      </Link>
    </div>
  );
}
