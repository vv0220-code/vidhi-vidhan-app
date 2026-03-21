import Link from 'next/link';
import { Badge, SectionHeading } from '@vidhi-vidhan/ui';
import { blogPosts, cities, faqs, pandits, services, testimonials } from '@/lib/data';
import { BookingForm } from '@/components/forms/booking-form';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="bg-mandala">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="space-y-6">
            <Badge className="bg-amber-100 text-amber-800">Jabalpur-first ritual booking platform</Badge>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-stone-950 md:text-6xl">Premium bilingual pandit booking for every sacred milestone.<span className="mt-3 block text-3xl text-brand-vermilion md:text-5xl">आपका विधि-विधान, हमारी ज़िम्मेदारी।</span></h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">Launch in Jabalpur with verified pandits, WhatsApp-first lead handling, samagri support, and a polished experience built for modern families.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-pandit" className="rounded-full bg-brand-vermilion px-6 py-3 font-semibold text-white">Book a Pandit</Link>
              <Link href="/services" className="rounded-full border border-amber-300 px-6 py-3 font-semibold text-stone-800">Explore Services</Link>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {['Verified pandits','WhatsApp confirmation','Jabalpur local-first'].map((item) => <div key={item} className="rounded-3xl border border-amber-100 bg-white/80 p-4 text-sm font-medium text-stone-700">{item}</div>)}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
      <section className="container-shell space-y-8">
        <SectionHeading eyebrow="Popular services" title="Ritual experiences designed for real family needs" description="From griha pravesh and vivah puja to muhurat-aligned havan, our service architecture is built to scale across Madhya Pradesh and beyond." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{services.slice(0,8).map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="card p-6"><p className="text-sm font-semibold text-brand-vermilion">{service.titleHi}</p><h3 className="mt-2 text-xl font-semibold">{service.titleEn}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{service.shortDescription}</p><p className="mt-4 text-sm font-semibold text-amber-700">{service.price}</p></Link>)}</div>
      </section>
      <section className="container-shell grid gap-6 md:grid-cols-4">{[['1','Submit booking details'],['2','Receive WhatsApp confirmation'],['3','Pandit gets assigned'],['4','Track status until completion']].map(([step,text]) => <div key={step} className="card p-6"><div className="mb-4 text-3xl font-bold text-brand-vermilion">{step}</div><p className="font-medium text-stone-800">{text}</p></div>)}</section>
      <section className="container-shell grid gap-6 lg:grid-cols-2">
        <div className="card p-8"><SectionHeading eyebrow="Why choose us" title="Local trust with product-grade operations" description="Original branding, original UI, bilingual content, and admin-led quality checks give Vidhi Vidhan a stronger local-first foundation than generic listing platforms." /></div>
        <div className="grid gap-6">{['Manual pandit verification', 'Structured city pages for SEO', 'Samagri support workflow', 'Admin dashboard with lead assignment'].map((item) => <div key={item} className="card p-6 text-stone-700">{item}</div>)}</div>
      </section>
      <section className="container-shell space-y-8"><SectionHeading eyebrow="Verified pandits" title="Profiles designed for quality, availability, and specialization" description="Every pandit profile captures languages, expertise, service cities, and admin verification status before assignment." /><div className="grid gap-6 md:grid-cols-3">{pandits.map((pandit) => <div key={pandit.name} className="card p-6"><h3 className="text-xl font-semibold">{pandit.name}</h3><p className="mt-2 text-sm text-stone-600">{pandit.specialties}</p><p className="mt-4 text-sm">{pandit.languages} · {pandit.experience}</p><Badge className="mt-4 bg-emerald-100 text-emerald-700">Verified for {pandit.city}</Badge></div>)}</div></section>
      <section className="container-shell space-y-8"><SectionHeading eyebrow="City coverage" title="Start with Jabalpur, expand with confidence" description="Reusable city templates let the platform scale to Bhopal, Indore, Ujjain, Gwalior, Sagar, and Rewa while preserving local trust signals and SEO strength." /><div className="grid gap-6 md:grid-cols-3">{cities.map((city) => <Link key={city.slug} href={`/cities/${city.slug}`} className="card p-6"><h3 className="text-xl font-semibold">{city.name} · {city.nameHi}</h3><p className="mt-3 text-sm text-stone-600">{city.hero}</p></Link>)}</div></section>
      <section className="container-shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6"><SectionHeading eyebrow="Testimonials" title="Families choose Vidhi Vidhan for clarity and calm" description="Seeded with trustworthy, conversion-focused testimonials that fit the launch market." /><div className="grid gap-6 md:grid-cols-2">{testimonials.slice(0,4).map((item) => <div key={item.id} className="card p-6"><p className="text-sm leading-7 text-stone-600">“{item.quote}”</p><p className="mt-4 font-semibold">{item.name}</p><p className="text-sm text-stone-500">{item.locality}</p></div>)}</div></div>
        <div className="space-y-6"><SectionHeading eyebrow="Festival & Muhurat" title="Content-led acquisition for search and trust" description="Publish local festival guides, ritual preparation content, and muhurat explainers to attract organic demand and strengthen user confidence." />{blogPosts.slice(0,3).map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="card block p-6"><p className="text-sm text-brand-vermilion">{post.category}</p><h3 className="mt-2 text-xl font-semibold">{post.title}</h3><p className="mt-3 text-sm text-stone-600">{post.excerpt}</p></Link>)}</div>
      </section>
      <section className="container-shell space-y-8"><SectionHeading eyebrow="FAQ preview" title="Answers that remove friction before booking" description="High-conviction FAQs reduce hesitation for first-time customers and support local SEO with rich answer content." /><div className="grid gap-4 md:grid-cols-2">{faqs.slice(0,6).map((item) => <div key={item.question} className="card p-6"><h3 className="font-semibold">{item.question}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{item.answer}</p></div>)}</div></section>
      <section className="container-shell"><div className="card bg-brand-charcoal p-10 text-white"><h2 className="text-3xl font-bold">Ready to book a trusted pandit in Jabalpur?</h2><p className="mt-4 max-w-2xl text-stone-300">Start your request online, then continue instantly on WhatsApp or call for fast confirmation, samagri planning, and pandit assignment.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/book-pandit" className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-stone-950">Start booking</Link><Link href="https://wa.me/918269250480" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Chat on WhatsApp</Link></div></div></section>
    </div>
  );
}
