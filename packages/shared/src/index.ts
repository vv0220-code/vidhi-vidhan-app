import { z } from 'zod';

export const roles = ['GUEST', 'USER', 'PANDIT', 'ADMIN'] as const;
export type Role = (typeof roles)[number];

export const bookingStatuses = ['NEW', 'CONTACTED', 'ASSIGNED', 'CONFIRMED', 'COMPLETED', 'CANCELLED'] as const;
export type BookingStatus = (typeof bookingStatuses)[number];

export const serviceSchema = z.object({
  slug: z.string(),
  titleEn: z.string(),
  titleHi: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  benefits: z.array(z.string()),
  occasions: z.array(z.string()),
  whoShouldBook: z.array(z.string()),
  samagri: z.array(z.string()),
  duration: z.string(),
  price: z.string(),
  category: z.string(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
});
export type RitualService = z.infer<typeof serviceSchema>;

export const bookingInputSchema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().min(10),
  email: z.string().email(),
  city: z.string().min(2),
  address: z.string().min(10),
  serviceSlug: z.string().min(2),
  preferredDate: z.string(),
  preferredTime: z.string(),
  languagePreference: z.string().min(2),
  samagriRequired: z.boolean(),
  budgetPreference: z.string().min(2),
  notes: z.string().optional().default(''),
  whatsappSame: z.boolean().default(true),
});
export type BookingInput = z.infer<typeof bookingInputSchema>;

export const panditRegistrationSchema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().min(10),
  email: z.string().email(),
  address: z.string().min(10),
  city: z.string().min(2),
  experienceYears: z.number().min(0),
  languages: z.array(z.string()).min(1),
  specializations: z.array(z.string()).min(1),
  availableCities: z.array(z.string()).min(1),
  bio: z.string().min(50),
  availability: z.string().min(5),
});
export type PanditRegistrationInput = z.infer<typeof panditRegistrationSchema>;

export const siteConfig = {
  brand: {
    name: 'Vidhi Vidhan',
    nameHi: 'विधि विधान',
    tagline: 'Your Rituals, Our Responsibility.',
    taglineHi: 'आपका विधि-विधान, हमारी ज़िम्मेदारी।',
  },
  contact: {
    phone: '8269250480',
    email: 'vidhividhan0220@gmail.com',
    instagram: 'https://instagram.com/vidhividhan0220',
    facebook: 'https://facebook.com/VidhiVidhan',
    whatsapp: 'https://wa.me/918269250480',
  },
  launchCity: 'Jabalpur',
  launchState: 'Madhya Pradesh',
};
