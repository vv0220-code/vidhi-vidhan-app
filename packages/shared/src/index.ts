import { z } from 'zod';

export const roles = ['CUSTOMER', 'PANDIT', 'ADMIN'] as const;
export type Role = (typeof roles)[number];

export const bookingStatuses = [
  'pending',
  'inquiry_received',
  'awaiting_confirmation',
  'confirmed',
  'pandit_assigned',
  'in_progress',
  'completed',
  'cancelled',
] as const;
export type BookingStatus = (typeof bookingStatuses)[number];

export const bookingInputSchema = z.object({
  serviceSlug: z.string().min(2),
  date: z.string().min(1),
  time: z.string().min(1),
  customerName: z.string().min(2),
  mobile: z.string().min(10),
  address: z.string().min(8),
  city: z.string().default('Jabalpur'),
  notes: z.string().optional().default(''),
  languagePreference: z.enum(['Hindi', 'English', 'Both']).default('Both'),
  panditPreference: z.string().optional(),
  paymentMethod: z.enum(['advance', 'cash']).default('cash'),
});
export type BookingInput = z.infer<typeof bookingInputSchema>;

export const panditRegistrationSchema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().min(10),
  email: z.string().email(),
  city: z.string().min(2),
  area: z.string().min(2),
  fullAddress: z.string().min(10),
  yearsOfExperience: z.number().min(0),
  languagesSpoken: z.array(z.string()).min(1),
  expertise: z.array(z.string()).min(1),
  shortBio: z.string().min(25),
  availabilitySchedule: z.string().min(5),
  serviceRadiusKm: z.number().min(1),
  homeVisit: z.boolean().default(true),
});

export const siteConfig = {
  brand: {
    name: 'Vidhi Vidhan',
    nameHi: 'विधि विधान',
    tagline: 'Your Ritual, Our Responsibility',
    taglineHi: 'आपका विधि-विधान, हमारी ज़िम्मेदारी।',
  },
  contact: {
    phone: '8269250480',
    whatsapp: '8269250480',
    email: 'vidhividhan0220@gmail.com',
    city: 'Jabalpur',
  },
};
