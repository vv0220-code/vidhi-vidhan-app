# Vidhi Vidhan Platform

Vidhi Vidhan is a bilingual Hindu ritual services platform designed for Jabalpur-first launch and scalable expansion across Madhya Pradesh and India. This monorepo contains a production-oriented MVP scaffold for:

- Public marketing website in Next.js
- Role-aware dashboards for admin, pandit, and user journeys
- Shared backend API routes and validation
- Prisma database schema with launch seed data
- Expo React Native Android app scaffold for customers
- SEO-ready services, city pages, blog architecture, sitemap, and robots setup

## Monorepo structure

- `apps/web` – Next.js App Router website, dashboards, API routes, Prisma schema, seed script
- `apps/mobile` – Expo Router mobile app scaffold
- `packages/shared` – shared Zod schemas, config, and types
- `packages/ui` – small reusable UI primitives for web
- `packages/config` – base TypeScript config

## Quick start

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy environment variables:
   ```bash
   cp apps/web/.env.example apps/web/.env
   ```
3. Generate Prisma client and seed database:
   ```bash
   createdb vidhi_vidhan
   pnpm --filter web prisma db push
   pnpm prisma:seed
   ```
4. Start the website:
   ```bash
   pnpm dev:web
   ```
5. Start the mobile app:
   ```bash
   pnpm dev:mobile
   ```

## Demo auth accounts

- Admin: `admin@vidhividhan.in` / `Admin@123`
- Pandit: `pandit@vidhividhan.in` / `Pandit@123`
- User: `user@vidhividhan.in` / `User@123`

## Feature coverage

- Home page with bilingual hero, quick booking form, service grid, testimonials, FAQ preview, and sticky WhatsApp/call CTA
- SEO landing pages for services, cities, blog, and policy pages
- Admin, pandit, and user dashboard entry points
- Booking API and pandit registration API with Zod validation
- Prisma schema covering users, profiles, pandits, services, cities, bookings, history, testimonials, FAQs, blog posts, inquiries, settings, notifications, and media assets
- Seed data for Jabalpur, 15 services, 10 testimonials, 10 FAQs, 5 blog posts, admin user, and sample pandit profiles
- Expo mobile app with home, services, book, bookings, FAQ, support, and profile screens

## Deployment notes

### Web
- Deploy `apps/web` on Vercel or a Node-compatible platform.
- Configure `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, and messaging/payment integrations.
- Replace placeholder notification and payment modules with production providers.

### Mobile
- Use EAS Build for Android packaging.
- Point the app to the deployed API base URL through Expo environment config.

## Integration checklist

- Replace demo credential auth with database-backed password hashing and secure account creation.
- Connect WhatsApp automation provider such as Interakt, Twilio, or Meta Cloud API.
- Implement cloud file upload storage for pandit profile images and document verification.
- Add Razorpay order creation and payment capture flow where needed.
- Expand dashboard CRUD operations with persistent database writes.

## Recommended next phase

- Add multilingual content management in admin
- Implement booking assignment workflow persistence
- Add analytics charts and export tools
- Add push notifications and OTP login
- Add future pandit mobile app using the same backend contracts
