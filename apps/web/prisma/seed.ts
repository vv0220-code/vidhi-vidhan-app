import { PrismaClient, Role } from '@prisma/client';
import { blogPosts, cities, faqs, pandits, services, testimonials } from '../lib/data';

const prisma = new PrismaClient();

async function main() {
  const homeCategory = await prisma.serviceCategory.upsert({ where: { slug: 'home-rituals' }, update: {}, create: { slug: 'home-rituals', name: 'Home Rituals' } });
  for (const city of cities) {
    await prisma.city.upsert({ where: { slug: city.slug }, update: city, create: city });
  }
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: { ...service, categoryId: homeCategory.id },
      create: { ...service, categoryId: homeCategory.id },
    });
  }
  for (const item of testimonials) {
    await prisma.testimonial.create({ data: { name: item.name, city: item.locality, quote: item.quote, rating: 5, featured: item.id <= 4 } });
  }
  for (const item of faqs) {
    await prisma.fAQ.create({ data: { ...item, category: 'general' } });
  }
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({ where: { slug: post.slug }, update: { ...post, content: post.excerpt, seoTitle: post.title, seoDescription: post.excerpt }, create: { ...post, content: post.excerpt, seoTitle: post.title, seoDescription: post.excerpt } });
  }
  const admin = await prisma.user.upsert({ where: { email: 'admin@vidhividhan.in' }, update: {}, create: { name: 'Vidhi Vidhan Admin', email: 'admin@vidhividhan.in', passwordHash: 'TODO_HASH', role: Role.ADMIN, phone: '8269250480' } });
  await prisma.admin.upsert({ where: { userId: admin.id }, update: {}, create: { userId: admin.id } });
  for (const pandit of pandits) {
    await prisma.pandit.upsert({ where: { email: `${pandit.name.toLowerCase().replace(/[^a-z]/g,'')}@vidhividhan.in` }, update: {}, create: { fullName: pandit.name, email: `${pandit.name.toLowerCase().replace(/[^a-z]/g,'')}@vidhividhan.in`, mobile: '9000000000', address: pandit.city, city: pandit.city, experienceYears: parseInt(pandit.experience), languages: pandit.languages.split(', '), specializations: pandit.specialties.split(', '), bio: `${pandit.name} is a trusted local pandit profile seeded for the MVP.`, availability: 'Morning and evening', verificationStatus: 'VERIFIED' } });
  }
}
main().finally(() => prisma.$disconnect());
