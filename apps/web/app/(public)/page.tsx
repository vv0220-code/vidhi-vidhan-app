import Link from 'next/link';
import { faqs, pandits, services, siteSettings, testimonials } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-14 pb-24">
      <section className="bg-mandala border-b border-amber-900/30 bg-stone-950 text-amber-50">
        <div className="container-shell py-16">
          <p className="text-amber-300">Serving Jabalpur</p>
          <h1 className="mt-2 text-4xl font-bold">Book Trusted Pandit Services in Jabalpur</h1>
          <h2 className="mt-2 text-3xl font-semibold text-amber-200">जबलपुर में विश्वसनीय पंडित बुकिंग सेवा</h2>
          <p className="mt-5 max-w-3xl text-amber-50/90">Authentic Vedic rituals, experienced pandits, home visit puja services, and easy WhatsApp booking for families in Jabalpur. जबलपुर के परिवारों के लिए अनुभवी पंडितों द्वारा शुद्ध वैदिक विधि से पूजा, घर पहुंच सेवा और आसान व्हाट्सऐप बुकिंग।</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-900">Book Now</Link>
            <Link href="/services" className="rounded-full border border-amber-300 px-5 py-3">Browse Services</Link>
            <Link href={`https://wa.me/91${siteSettings.whatsapp}`} className="rounded-full bg-green-600 px-5 py-3 font-semibold">WhatsApp Us</Link>
          </div>
        </div>
      </section>
      <section className="container-shell grid gap-4 md:grid-cols-5">{['Experienced Pandits / अनुभवी पंडित','Authentic Vedic Rituals / शुद्ध वैदिक विधि','Affordable Packages / उचित शुल्क','Easy WhatsApp Booking / आसान व्हाट्सऐप बुकिंग','Home Visit in Jabalpur / जबलपुर में घर पहुंच सेवा'].map((item) => <div key={item} className="card p-4 text-sm">{item}</div>)}</section>
      <section className="container-shell"><h3 className="text-2xl font-bold">Booking Process</h3><div className="mt-4 grid gap-4 md:grid-cols-4">{['Contact on WhatsApp / व्हाट्सऐप पर संपर्क करें','Select Puja / पूजा चुनें','Confirm Date / तिथि तय करें','Pandit arrives at your home / पंडित आपके घर आएंगे'].map((item,i)=><div key={item} className="card p-5"><p className="text-brand-vermilion font-bold">Step {i+1}</p><p>{item}</p></div>)}</div></section>
      <section className="container-shell"><h3 className="text-2xl font-bold">Featured Services</h3><div className="mt-4 grid gap-4 md:grid-cols-3">{services.slice(0,6).map(s=><Link key={s.slug} href={`/services/${s.slug}`} className="card p-5"><p className="text-sm text-brand-vermilion">{s.titleHi}</p><h4 className="font-semibold">{s.titleEn}</h4><p className="text-sm">{s.price} · {s.duration}</p></Link>)}</div></section>
      <section className="container-shell card bg-brand-vermilion p-8 text-white"><h3 className="text-2xl font-bold">Local Trust Banner</h3><p className="mt-2">Home Visit Pandit Services in Jabalpur · Local puja booking with WhatsApp support.</p></section>
      <section className="container-shell"><h3 className="text-2xl font-bold">Featured Pandits</h3><div className="mt-4 grid gap-4 md:grid-cols-3">{pandits.slice(0,3).map(p=><div key={p.id} className="card p-5"><h4 className="font-semibold">{p.fullName}</h4><p className="text-sm">{p.area} · {p.experience}</p></div>)}</div></section>
      <section className="container-shell"><h3 className="text-2xl font-bold">Testimonials</h3><div className="mt-4 grid gap-4 md:grid-cols-4">{testimonials.map(t=><div key={t.id} className="card p-4 text-sm">“{t.quote}”</div>)}</div></section>
      <section className="container-shell"><h3 className="text-2xl font-bold">FAQs</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{faqs.map(f=><div key={f.question} className="card p-4"><p className="font-semibold">{f.question}</p><p className="text-sm">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
