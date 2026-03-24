import Link from 'next/link';
import { notFound } from 'next/navigation';
import { detailTemplate, faqs, getServiceBySlug, selectedDetailedSlugs, services } from '@/lib/data';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();
  const showDetailed = selectedDetailedSlugs.has(slug);
  return (
    <div className="container-shell space-y-8 py-10">
      <div className="card p-6">
        <h1 className="text-3xl font-bold">{service.titleHi}</h1><h2 className="text-2xl">{service.titleEn}</h2>
        <p className="mt-2">{service.shortIntro}</p>
        <p className="mt-2 font-semibold">{service.price} · {service.duration}</p>
        <p className="mt-2">Who it is for: {service.whoFor.join(', ')}</p>
        <p className="mt-2">Benefits: {service.benefits.join(', ')}</p>
        <p className="mt-2">Procedure: {service.procedureSummary}</p>
        <p className="mt-2">Samagri: {service.samagriSummary}</p>
      </div>
      {showDetailed && <div className="grid gap-4 md:grid-cols-2">{Object.entries(detailTemplate).map(([k,v]) => <div className="card p-5" key={k}><h3 className="font-semibold capitalize">{k}</h3><p className="text-sm mt-1">{v}</p></div>)}</div>}
      <div className="card p-5"><h3 className="font-semibold">FAQs</h3>{faqs.slice(0,4).map(f=><p className="mt-2 text-sm" key={f.question}><b>{f.question}</b> — {f.answer}</p>)}</div>
      <div className="grid gap-3 md:grid-cols-3">{services.filter(s=>s.slug!==slug).slice(0,3).map(r=><Link className="card p-4" href={`/services/${r.slug}`} key={r.slug}>{r.titleHi} / {r.titleEn}</Link>)}</div>
      <div className="flex gap-3"><Link href={`/checkout?service=${service.slug}`} className="rounded-full bg-brand-vermilion px-4 py-2 text-white">Book CTA</Link><Link href={`https://wa.me/918269250480?text=Need%20${service.titleEn}`} className="rounded-full border px-4 py-2">WhatsApp CTA</Link></div>
    </div>
  );
}
