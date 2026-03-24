import { siteConfig } from '@vidhi-vidhan/shared';

export const serviceCategories = [
  { nameEn: 'Home & Property Blessings', nameHi: 'घर एवं संपत्ति पूजन', slug: 'home-property-blessings' },
  { nameEn: 'Sacred Recitations', nameHi: 'पाठ एवं स्तोत्र', slug: 'sacred-recitations' },
  { nameEn: 'Sanskars', nameHi: 'संस्कार', slug: 'sanskars' },
  { nameEn: 'Dosha Nivaran Pujas', nameHi: 'दोष निवारण पूजा', slug: 'dosha-nivaran-pujas' },
  { nameEn: 'Deity Worship', nameHi: 'देव पूजन', slug: 'deity-worship' },
  { nameEn: 'Festival Pujas', nameHi: 'त्योहार पूजा', slug: 'festival-pujas' },
  { nameEn: 'Marriage Rituals', nameHi: 'विवाह अनुष्ठान', slug: 'marriage-rituals' },
];

export const services = [
  ['griha-pravesh-puja','Griha Pravesh Puja','गृह प्रवेश पूजा','₹5100','4 hours','home-property-blessings'],
  ['akhand-ramayan-path','Akhand Ramayan Path','अखंड रामायण पाठ पूजा','₹2100','3 hours','sacred-recitations'],
  ['udhyapan-puja','Udhyapan Puja','उद्यापन पूजा','₹2100','3 hours','deity-worship'],
  ['karnavedh-sanskar','Karnavedh Sanskar','कर्णवेध / कान छेदन संस्कार','₹1100','1 hour','sanskars'],
  ['kaal-sarp-dosh-puja','Kaal Sarp Dosh Puja','कालसर्प दोष पूजा','₹5100','3 hours','dosha-nivaran-pujas'],
  ['gandmool-puja','Gandmool Puja','गंडमूल पूजा','₹5100','3 hours','dosha-nivaran-pujas'],
  ['ganesh-chaturthi-sthapana-puja','Ganesh Chaturthi & Sthapana Puja','गणेश चतुर्थी एवं स्थापना पूजा','₹1100','1 hour','festival-pujas'],
  ['navgraha-shanti-puja','Navgraha Shanti Puja','नवग्रह शांति पूजा','₹5100','4 hours','dosha-nivaran-pujas'],
  ['navratri-durga-saptashati-path','Navratri Durga Saptashati Path','नवरात्रि दुर्गा सप्तशती पाठ','₹7100','10 days, 2 hours daily','festival-pujas'],
  ['naamkaran-puja','Naamkaran Puja','नामकरण पूजा','₹1100','1 hour','sanskars'],
  ['pitru-puja','Pitru Puja','पितृ पूजा','₹2100','2 hours','deity-worship'],
  ['bhoomi-pujan','Bhoomi Pujan','भूमि पूजन','₹1100','1 hour','home-property-blessings'],
  ['mangal-dosh-mukti-puja','Mangal Dosh Mukti Puja','मंगल दोष मुक्ति पूजा','₹5100','3 hours','dosha-nivaran-pujas'],
  ['mahamrityunjay-jaap','Mahamrityunjay Jaap','महामृत्युंजय जाप','₹51000','7 days','sacred-recitations'],
  ['mahalakshmi-puja','Mahalakshmi Puja','महालक्ष्मी पूजा','₹2100','3 hours','deity-worship'],
  ['yajnopavit','Yajnopavit','यज्ञोपवीत','₹3100','4 hours','sanskars'],
  ['ram-navami-puja','Ram Navami Puja','रामनवमी पूजा','₹1100','2 hours','festival-pujas'],
  ['rudrabhishek-puja','Rudrabhishek Puja','रुद्राभिषेक पूजा','₹2100','3 hours','deity-worship'],
  ['vivah-puja','Vivah Puja','विवाह पूजा','₹11000','3 days according to muhurat','marriage-rituals'],
  ['satyanarayan-puja','Satyanarayan Puja','सत्यनारायण पूजा','₹1100','2 hours','deity-worship'],
  ['saraswati-pujan','Saraswati Pujan','सरस्वती पूजन','₹2100','1 hour','deity-worship'],
  ['sunderkand-path','Sunderkand Path','सुंदरकांड पाठ','₹2100','2 hours','sacred-recitations'],
  ['mundan-sanskar','Mundan Sanskar','मुण्डन संस्कार','₹1100','1 hour','sanskars'],
  ['hanuman-jayanti-puja','Hanuman Jayanti Puja','हनुमान जयंती पूजा','Configurable','Admin configurable','festival-pujas'],
].map(([slug,titleEn,titleHi,price,duration,categorySlug]) => ({
  slug,titleEn,titleHi,price,duration,categorySlug,
  shortIntro: `${titleHi} (${titleEn}) के लिए जबलपुर में अनुभवी पंडित बुक करें।`,
  description: `Serving Jabalpur families with authentic Vedic process, clear pricing, and WhatsApp support.`,
  benefits: ['Experienced pandit guidance', 'Home visit support in Jabalpur', 'WhatsApp confirmations'],
  whoFor: ['Families in Jabalpur', 'Home or apartment ceremonies'],
  procedureSummary: 'Sankalp, main puja vidhi, mantra path, aarti, and blessings.',
  samagriSummary: 'Standard samagri checklist shared after booking confirmation.',
}));

export const selectedDetailedSlugs = new Set([
  'akhand-ramayan-path','udhyapan-puja','karnavedh-sanskar','kaal-sarp-dosh-puja','gandmool-puja','ganesh-chaturthi-sthapana-puja','navgraha-shanti-puja','navratri-durga-saptashati-path','saraswati-pujan','satyanarayan-puja','griha-pravesh-puja',
]);

export const products = [
  ['puja-samagri-kit','Puja Samagri Kit','पूजा सामग्री किट','₹799'],['dhoop-agarbatti','Incense Pack','अगरबत्ती पैक','₹149'],['mitti-diya-set','Diya Set','दीया सेट','₹199'],['cow-ghee-jar','Cow Ghee Jar','देसी घी','₹349'],['roli-chawal-pack','Roli Chawal Pack','रोली चावल पैक','₹99'],['brass-kalash','Brass Kalash','पीतल कलश','₹599'],['pooja-coconut','Coconut (Puja)','पूजा नारियल','₹59'],['camphor-tablets','Camphor Tablets','कपूर टैबलेट','₹89'],['havan-samagri','Havan Samagri','हवन सामग्री','₹299'],['rudraksha-mala','Rudraksha Mala','रुद्राक्ष माला','₹399'],
].map(([slug,nameEn,nameHi,price], i) => ({ slug,nameEn,nameHi,price,stock: 20 + i, image: `/products/product-${(i%4)+1}.jpg`}));

export const testimonials = [
  'Booking process was very easy and pandit ji arrived on time.',
  'घर पर शांतिपूर्वक पूजा हुई, पूरी टीम सहयोगी थी।',
  'Great WhatsApp support and transparent pricing.',
  'Jabalpur local team is trustworthy and polite.',
  'हमारी गृह प्रवेश पूजा बहुत अच्छी तरह सम्पन्न हुई।',
  'Pandit was experienced and explained each step.',
  'Fast response and clear booking updates.',
  'Local and reliable service for families in Jabalpur.',
].map((quote, i) => ({ id: `t-${i+1}`, name: `Customer ${i+1}`, city: 'Jabalpur', quote }));

export const faqs = [
  ['How do I book quickly?','Use Book Now or WhatsApp and share your preferred date/time.'],
  ['क्या घर पर पूजा सेवा उपलब्ध है?','हाँ, जबलपुर में घर पहुंच पंडित सेवा उपलब्ध है।'],
  ['Can I choose language?','Yes, Hindi/English/Bilingual preference is available.'],
  ['Is advance payment required?','Optional. You can choose advance or cash/manual placeholder mode.'],
  ['Can I request specific pandit?','Yes, add pandit preference in booking notes.'],
  ['What if timing changes?','You can request reschedule through WhatsApp support.'],
  ['Do you provide samagri?','Yes, samagri kit add-ons are available.'],
  ['Is this only for Jabalpur?','Yes, launch phase focuses on Jabalpur service areas.'],
].map(([question,answer]) => ({question,answer}));

export const banners = [
  { title: 'Chaitra Navratri Offer', subtitle: 'Festival bookings open for Jabalpur', image: '/banners/banner-1.jpg' },
  { title: 'Griha Pravesh Season', subtitle: 'Trusted pandit home visits', image: '/banners/banner-2.jpg' },
  { title: 'Sanskars with Care', subtitle: 'Family-first ritual assistance', image: '/banners/banner-3.jpg' },
  { title: 'WhatsApp Priority Support', subtitle: 'Quick responses every day', image: '/banners/banner-4.jpg' },
];

export const pandits = [1,2,3,4,5].map((n) => ({
  id: `p-${n}`,
  fullName: `Pt. Local Pandit ${n}`,
  experience: `${6+n} years`,
  area: ['Vijay Nagar','Madan Mahal','Napier Town','Adhartal','Gorakhpur'][n-1],
  expertise: 'Griha Pravesh, Satyanarayan, Rudrabhishek',
  verification: n < 5 ? 'approved' : 'pending',
}));

export const jabalpurAreas = ['Vijay Nagar','Madan Mahal','Napier Town','Adhartal','Gorakhpur','Sadar','Wright Town','Tilwara'];

export const siteSettings = {
  phone: siteConfig.contact.phone,
  whatsapp: siteConfig.contact.whatsapp,
  email: siteConfig.contact.email,
  city: siteConfig.contact.city,
};

export const detailTemplate = {
  origin: 'Placeholder for scriptural origin content (Hindi + English).',
  story: 'Placeholder for traditional कथा / story section.',
  description: 'Placeholder for in-depth bilingual explanation for customers.',
  benefits: 'Placeholder for short and long-term spiritual benefits.',
  vidhi: 'Placeholder for complete vidhi steps and timing guidance.',
  samagri: 'Placeholder for detailed samagri list and substitutions.',
};

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const cities = [{ slug: 'jabalpur', name: 'Jabalpur', nameHi: 'जबलपुर', hero: 'Home visit pandit services in Jabalpur.' }];
export const blogPosts = [];
export const getCityBySlug = (slug: string) => cities.find((city) => city.slug === slug);
export const getBlogPost = (_slug: string) => undefined;
