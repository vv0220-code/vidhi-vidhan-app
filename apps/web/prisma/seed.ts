import { PrismaClient, UserRole } from '@prisma/client';
import { banners, faqs, jabalpurAreas, pandits, products, serviceCategories, services, siteSettings, testimonials } from '../lib/data';

const prisma = new PrismaClient();

async function main() {
  const city = await prisma.city.upsert({ where: { slug: 'jabalpur' }, update: {}, create: { slug: 'jabalpur', name: 'Jabalpur', nameHi: 'जबलपुर', state: 'Madhya Pradesh' } });
  for (const areaName of jabalpurAreas) {
    await prisma.area.upsert({ where: { slug: areaName.toLowerCase().replace(/\s+/g, '-') }, update: {}, create: { cityId: city.id, name: areaName, slug: areaName.toLowerCase().replace(/\s+/g, '-') } });
  }

  for (const cat of serviceCategories) {
    await prisma.serviceCategory.upsert({ where: { slug: cat.slug }, update: cat, create: cat });
  }

  for (const service of services) {
    const category = await prisma.serviceCategory.findUniqueOrThrow({ where: { slug: service.categorySlug } });
    await prisma.pujaService.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        categoryId: category.id,
        slug: service.slug,
        titleEn: service.titleEn,
        titleHi: service.titleHi,
        shortIntro: service.shortIntro,
        priceText: service.price,
        durationText: service.duration,
        whoFor: service.whoFor,
        benefits: service.benefits,
        procedureSummary: service.procedureSummary,
        samagriSummary: service.samagriSummary,
        isPriceConfigurable: service.price === 'Configurable',
      },
    });
  }

  const productCategory = await prisma.productCategory.upsert({ where: { slug: 'spiritual-essentials' }, update: {}, create: { slug: 'spiritual-essentials', nameEn: 'Spiritual Essentials', nameHi: 'आध्यात्मिक सामग्री' } });
  for (const product of products) {
    const created = await prisma.product.upsert({ where: { slug: product.slug }, update: {}, create: { categoryId: productCategory.id, slug: product.slug, nameEn: product.nameEn, nameHi: product.nameHi, description: `${product.nameHi} for daily puja needs.`, price: parseInt(product.price.replace(/[^\d]/g, '') || '0', 10), stock: product.stock } });
    await prisma.productImage.create({ data: { productId: created.id, imageUrl: product.image, altText: product.nameEn } });
  }

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: { name: t.name, city: t.city, quoteEn: t.quote, quoteHi: t.quote, isFeatured: true } });
  }
  for (const f of faqs) {
    await prisma.fAQ.create({ data: { questionEn: f.question, questionHi: f.question, answerEn: f.answer, answerHi: f.answer, isFeatured: true } });
  }
  for (const b of banners) {
    await prisma.banner.create({ data: { titleEn: b.title, titleHi: b.title, subtitleEn: b.subtitle, subtitleHi: b.subtitle, imageUrl: b.image, isActive: true } });
  }

  const admin = await prisma.user.upsert({ where: { email: 'admin@vidhividhan.in' }, update: {}, create: { name: 'Vidhi Vidhan Admin', email: 'admin@vidhividhan.in', role: UserRole.ADMIN, mobile: siteSettings.phone } });
  await prisma.adminProfile.upsert({ where: { userId: admin.id }, update: {}, create: { userId: admin.id } });

  for (const p of pandits) {
    const user = await prisma.user.create({ data: { name: p.fullName, email: `${p.id}@vidhividhan.in`, mobile: siteSettings.phone, role: UserRole.PANDIT } });
    await prisma.panditProfile.create({ data: { userId: user.id, cityId: city.id, fullAddress: `${p.area}, Jabalpur`, yearsOfExperience: parseInt(p.experience), languagesSpoken: ['Hindi', 'Sanskrit'], expertise: ['Griha Pravesh', 'Satyanarayan'], shortBio: `${p.fullName} is a trusted local pandit profile for Jabalpur launch.`, availabilitySchedule: 'Morning and evening slots', verificationStatus: p.verification } });
  }

  await prisma.siteSetting.createMany({ data: Object.entries(siteSettings).map(([key, value]) => ({ key, value })) , skipDuplicates: true });
}

main().finally(async () => prisma.$disconnect());
