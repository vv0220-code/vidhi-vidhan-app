import Link from 'next/link';
import { serviceCategories, services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="container-shell py-12">
      <h1 className="text-3xl font-bold">Puja Services / पूजा सेवाएँ</h1>
      <p className="mt-2">Browse puja services in Jabalpur with bilingual details, pricing, and duration.</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">{serviceCategories.map(c=><span key={c.slug} className="rounded-full bg-amber-100 px-3 py-1">{c.nameEn} / {c.nameHi}</span>)}</div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{services.map((s)=> <div key={s.slug} className="card p-5"><p className="text-sm text-brand-vermilion">{s.titleHi}</p><h2 className="font-semibold">{s.titleEn}</h2><p className="text-sm">{s.price} · {s.duration}</p><p className="mt-1 text-sm">{s.shortIntro}</p><div className="mt-3 flex gap-2"><Link className="rounded-full bg-brand-vermilion px-3 py-1 text-xs text-white" href={`/services/${s.slug}`}>Book Now</Link><Link className="rounded-full border px-3 py-1 text-xs" href={`https://wa.me/918269250480?text=I%20want%20details%20for%20${s.titleEn}`}>WhatsApp</Link></div></div>)}</div>
    </div>
  );
}
