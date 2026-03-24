import Link from 'next/link';
import { siteConfig } from '@vidhi-vidhan/shared';

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-900/40 bg-stone-950 text-stone-200">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-amber-300">Vidhi Vidhan · विधि विधान</h3>
          <p className="mt-2 text-sm">Serving Jabalpur with home visit pandit services and bilingual support.</p>
        </div>
        <div className="space-y-1 text-sm">
          <Link href="/privacy-policy">Privacy Policy</Link><br />
          <Link href="/terms">Terms</Link><br />
          <Link href="/refund-policy">Refund Policy</Link><br />
          <Link href="/cancellation-policy">Cancellation Policy</Link>
        </div>
        <div className="text-sm">
          <p>Phone: {siteConfig.contact.phone}</p>
          <p>Email: {siteConfig.contact.email}</p>
          <p>City: {siteConfig.contact.city}</p>
        </div>
      </div>
    </footer>
  );
}
