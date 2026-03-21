import { RitualService, siteConfig } from '@vidhi-vidhan/shared';

export const cities = [
  {
    slug: 'jabalpur',
    name: 'Jabalpur',
    nameHi: 'जबलपुर',
    state: 'Madhya Pradesh',
    hero: 'Trusted local pandits for griha pravesh, vivah, havan, and festival rituals across Jabalpur.',
    highlights: ['Same-day callback', 'Verified local pandits', 'Hindi, Sanskrit, and regional guidance'],
    seoTitle: 'Book Pandit in Jabalpur | Vidhi Vidhan',
    seoDescription: 'Book verified pandits in Jabalpur for puja, havan, griha pravesh, vivah, vastu shanti, and festival rituals with WhatsApp-first support.',
  },
  { slug: 'bhopal', name: 'Bhopal', nameHi: 'भोपाल', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Bhopal.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Bhopal', seoDescription: 'Scalable city landing page for Bhopal ritual bookings.' },
  { slug: 'indore', name: 'Indore', nameHi: 'इंदौर', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Indore.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Indore', seoDescription: 'Scalable city landing page for Indore ritual bookings.' },
  { slug: 'ujjain', name: 'Ujjain', nameHi: 'उज्जैन', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Ujjain.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Ujjain', seoDescription: 'Scalable city landing page for Ujjain ritual bookings.' },
  { slug: 'gwalior', name: 'Gwalior', nameHi: 'ग्वालियर', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Gwalior.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Gwalior', seoDescription: 'Scalable city landing page for Gwalior ritual bookings.' },
  { slug: 'sagar', name: 'Sagar', nameHi: 'सागर', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Sagar.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Sagar', seoDescription: 'Scalable city landing page for Sagar ritual bookings.' },
  { slug: 'rewa', name: 'Rewa', nameHi: 'रीवा', state: 'Madhya Pradesh', hero: 'Expansion-ready city page for Rewa.', highlights: ['Expansion ready'], seoTitle: 'Pandit Services in Rewa', seoDescription: 'Scalable city landing page for Rewa ritual bookings.' },
] as const;

export const services: RitualService[] = [
  {
    slug: 'griha-pravesh-puja', titleEn: 'Griha Pravesh Puja', titleHi: 'गृह प्रवेश पूजा', shortDescription: 'Sacred housewarming ritual for harmony, vastu balance, and शुभारंभ.', longDescription: 'Our bilingual griha pravesh experience is designed for new homeowners in Jabalpur who want a smooth, culturally respectful ceremony with local pandit guidance, samagri planning, muhurt coordination, and family-friendly execution.', benefits: ['Invites peace and prosperity', 'Supports vastu shanti intentions', 'Guides the family through each step'], occasions: ['New home possession', 'Renovated property reopening'], whoShouldBook: ['Families moving into a new flat or bungalow', 'NRI families coordinating remotely'], samagri: ['Kalash', 'Mango leaves', 'Havan samagri', 'Cow ghee'], duration: '2-3 hours', price: 'Starting from ₹4,100', category: 'Home Rituals', seoTitle: 'Griha Pravesh Puja in Jabalpur | Vidhi Vidhan', seoDescription: 'Book griha pravesh puja in Jabalpur with verified pandits, samagri support, and WhatsApp-first confirmation.', faqs: [{ question: 'Can samagri be arranged?', answer: 'Yes, Vidhi Vidhan can coordinate complete samagri support as an add-on.' }, { question: 'Do you support apartment ceremonies?', answer: 'Yes, our pandits regularly conduct compact ceremonies for apartments and gated communities.' }]
  },
  {
    slug: 'satyanarayan-katha', titleEn: 'Satyanarayan Katha', titleHi: 'सत्यनारायण कथा', shortDescription: 'Devotional katha and puja for prosperity, gratitude, and family blessings.', longDescription: 'Ideal for monthly sankalp, birthdays, anniversaries, and milestone gratitude rituals, this service includes guided katha recitation, sankalp support, and ritual coordination tailored for families across Jabalpur.', benefits: ['Spiritual peace', 'Family participation', 'Ideal for celebrations'], occasions: ['Purnima', 'House gatherings', 'Anniversaries'], whoShouldBook: ['Families seeking regular spiritual observance'], samagri: ['Tulsi leaves', 'Panchamrit', 'Prasad ingredients'], duration: '2 hours', price: 'Starting from ₹3,100', category: 'Katha & Path', seoTitle: 'Satyanarayan Katha Booking | Vidhi Vidhan', seoDescription: 'Book Satyanarayan Katha with experienced pandits in Jabalpur and nearby cities.', faqs: [{ question: 'Is prasad guidance included?', answer: 'Yes, our team shares a preparation checklist during confirmation.' }]
  },
]

const filler = [
['marriage-vivah-puja','Marriage / Vivah Puja','विवाह पूजा'],['naamkaran-sanskar','Naamkaran Sanskar','नामकरण संस्कार'],['mundan-sanskar','Mundan Sanskar','मुंडन संस्कार'],['rudrabhishek','Rudrabhishek','रुद्राभिषेक'],['mahamrityunjay-jaap','Mahamrityunjay Jaap','महामृत्युंजय जाप'],['navgrah-shanti-puja','Navgrah Shanti Puja','नवग्रह शांति पूजा'],['vastu-shanti-puja','Vastu Shanti Puja','वास्तु शांति पूजा'],['durga-saptashati-path','Durga Saptashati Path','दुर्गा सप्तशती पाठ'],['sundarkand-path','Sundarkand Path','सुंदरकांड पाठ'],['kaal-sarp-dosh-puja','Kaal Sarp Dosh Puja','काल सर्प दोष पूजा'],['pitra-dosh-puja','Pitra Dosh Puja','पितृ दोष पूजा'],['ganesh-puja','Ganesh Puja','गणेश पूजा'],['bhoomi-pujan','Bhoomi Pujan','भूमि पूजन'],['havan-yagya','Havan & Yagya','हवन और यज्ञ']
] as const;
for (const [slug, titleEn, titleHi] of filler) {
  services.push({
    slug, titleEn, titleHi,
    shortDescription: `${titleEn} with local-first planning and respectful bilingual guidance.`,
    longDescription: `${titleEn} is available through Vidhi Vidhan with verified pandit assignment, WhatsApp-first support, and flexible coordination for homes, temples, and event venues in ${siteConfig.launchCity}.`,
    benefits: ['Experienced pandit support', 'WhatsApp-first updates', 'Samagri planning assistance'],
    occasions: ['Family milestones', 'Festival observance'],
    whoShouldBook: ['Households looking for a reliable ritual experience'],
    samagri: ['As per ritual requirement', 'Custom checklist shared after booking'],
    duration: '1.5-4 hours',
    price: 'Starting from ₹2,500',
    category: 'Special Rituals',
    seoTitle: `${titleEn} Booking | Vidhi Vidhan`,
    seoDescription: `Book ${titleEn} with verified pandits and local support from Vidhi Vidhan.`,
    faqs: [{ question: `How early should I book ${titleEn}?`, answer: 'We recommend booking 2-5 days in advance for the best scheduling options.' }],
  });
}

export const faqs = [
  ['How does booking work?', 'You submit your ritual details, receive a booking ID instantly, and our team confirms pandit availability over WhatsApp or call.'],
  ['Do you only serve Jabalpur?', 'We are launching with strong Jabalpur coverage and have scalable city pages ready for major Madhya Pradesh cities.'],
  ['Can I request samagri support?', 'Yes, the booking form includes a samagri toggle so our team can arrange or advise accordingly.'],
  ['Are pandits verified?', 'Every listed pandit profile goes through an admin review workflow before receiving assignments.'],
  ['Can women and senior citizens book easily?', 'Yes, we designed the flow to be simple, mobile-friendly, and supported by quick WhatsApp confirmation.'],
  ['Is there a booking fee?', 'Pricing depends on ritual type, duration, samagri needs, and travel requirements.'],
  ['Can I choose language preference?', 'Yes, select Hindi, Sanskrit, or a bilingual ritual preference during booking.'],
  ['Do you cover corporate rituals?', 'Yes, bhoomi pujan, office griha pravesh, and festive havan requests can be coordinated.'],
  ['How do cancellations work?', 'Admin reviews cancellations based on pandit allocation, samagri arrangements, and event timing.'],
  ['Do you have festival content?', 'Yes, the blog supports muhurat updates, festival guides, and local ritual education content.'],
].map(([question, answer]) => ({ question, answer }));

export const testimonials = [
  ['Aditi Sharma', 'Jabalpur', 'Our griha pravesh was coordinated beautifully. The pandit arrived on time, explained each step, and the WhatsApp updates kept everything stress-free.'],
  ['Rohit Tiwari', 'Adhartal', 'Vidhi Vidhan felt premium yet personal. Booking my parents’ Satyanarayan Katha took less than five minutes.'],
  ['Megha Dubey', 'Napier Town', 'We needed samagri support and a bilingual pandit for relatives coming from outside MP. The experience was seamless.'],
  ['Sandeep Mishra', 'Madan Mahal', 'The admin team followed up quickly and helped us choose the right havan package for our office inauguration.'],
  ['Priyanka Jain', 'Vijay Nagar', 'Clear pricing, respectful communication, and a truly local team.'],
  ['Ankit Agrawal', 'Gorakhpur', 'The pandit registration and service quality process feels trustworthy.'],
  ['Neha Patel', 'Bargi', 'Excellent coordination for our naamkaran ceremony with family elders involved remotely.'],
  ['Vikas Chaturvedi', 'Sadar', 'The team shared practical samagri guidance and confirmed timing quickly over WhatsApp.'],
  ['Pallavi Joshi', 'Wright Town', 'The site is easy to use and the support team genuinely understands local ritual expectations.'],
  ['Harsh Vyas', 'Karmeta', 'From enquiry to completion, the process was professional and deeply respectful.'],
].map(([name, locality, quote], i) => ({ id: i + 1, name, locality, quote }));

export const blogPosts = [
  { slug: 'griha-pravesh-muhurat-jabalpur', title: 'Best Griha Pravesh Muhurat Planning for Jabalpur Families', excerpt: 'How to plan a culturally grounded yet practical housewarming in Jabalpur.', category: 'Muhurat', readTime: '5 min read' },
  { slug: 'satyanarayan-katha-benefits', title: 'When to Book a Satyanarayan Katha for Family Milestones', excerpt: 'Occasions, expectations, and preparation tips for a meaningful katha.', category: 'Ritual Guide', readTime: '4 min read' },
  { slug: 'navratri-puja-checklist', title: 'Navratri Puja Checklist for Homes in Madhya Pradesh', excerpt: 'A simple devotional checklist for families preparing at home.', category: 'Festival', readTime: '6 min read' },
  { slug: 'vastu-shanti-before-moving', title: 'Should You Book Vastu Shanti Before Moving In?', excerpt: 'Understand when a dedicated vastu ritual makes sense for your property.', category: 'Home Rituals', readTime: '5 min read' },
  { slug: 'how-to-choose-a-pandit', title: 'How to Choose a Pandit Online Without Compromising Trust', excerpt: 'What verified profiles, local experience, and communication quality actually mean.', category: 'Trust & Safety', readTime: '7 min read' },
];

export const pandits = [
  { name: 'Pt. Shashank Dwivedi', experience: '12 years', languages: 'Hindi, Sanskrit', specialties: 'Griha Pravesh, Rudrabhishek, Vivah', city: 'Jabalpur' },
  { name: 'Pt. Nitin Tiwari', experience: '9 years', languages: 'Hindi, Sanskrit, Bundeli', specialties: 'Satyanarayan Katha, Havan, Bhoomi Pujan', city: 'Jabalpur' },
  { name: 'Pt. Ayush Mishra', experience: '15 years', languages: 'Hindi, Sanskrit', specialties: 'Navgrah Shanti, Vastu Shanti, Durga Path', city: 'Jabalpur' },
];

export function getServiceBySlug(slug: string) { return services.find((service) => service.slug === slug); }
export function getCityBySlug(slug: string) { return cities.find((city) => city.slug === slug); }
export function getBlogPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
