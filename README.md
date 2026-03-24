# Vidhi Vidhan (विधि विधान) – Jabalpur Launch Platform

Tagline: **Your Ritual, Our Responsibility** / **आपका विधि-विधान, हमारी ज़िम्मेदारी।**

## 1) Architecture summary

- **Monorepo** with web + mobile-ready apps.
- **Web app**: Next.js App Router + TypeScript + Tailwind (premium devotional UI).
- **Data layer**: Prisma + PostgreSQL.
- **Auth-ready**: NextAuth-compatible role routes for Customer, Pandit, Admin.
- **Commerce + booking**: service booking APIs, product catalog, cart/checkout foundation.
- **Localization**: bilingual Hindi-English content for homepage, services, CTAs, and key flows.
- **PWA/App-ready**: route + component architecture designed for easy Android/iOS packaging later.

## 2) Folder structure

```txt
apps/
  web/
    app/
      (public)/...pages
      api/...routes
    components/
    lib/
    prisma/
  mobile/
packages/
  shared/
  ui/
  config/
```

## 3) Route map

- `/`
- `/about`
- `/contact`
- `/jabalpur/pandit-booking`
- `/services`
- `/services/[slug]`
- `/products`
- `/products/[slug]`
- `/cart`
- `/checkout`
- `/pandit/register`
- `/pandit/login`
- `/pandit/dashboard`
- `/customer/login`
- `/customer/dashboard`
- `/admin/login`
- `/admin/dashboard`
- `/bookings/[id]`
- `/orders/[id]`
- `/privacy-policy`
- `/terms`
- `/refund-policy`
- `/cancellation-policy`

## 4) Database schema plan

Prisma models include:
`User, CustomerProfile, PanditProfile, AdminProfile, ServiceCategory, PujaService, PujaDetailContent, ProductCategory, Product, ProductImage, Booking, BookingStatusHistory, Inquiry, Address, Testimonial, Banner, FAQ, Review, Order, OrderItem, SiteSetting, City, Area`.

## 5) Setup (beginner friendly)

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy env:
   ```bash
   cp apps/web/.env.example apps/web/.env
   ```
3. Push schema + seed:
   ```bash
   pnpm --filter web prisma db push
   pnpm --filter web prisma db seed
   ```
4. Run web app:
   ```bash
   pnpm --filter web dev
   ```
5. Run mobile scaffold:
   ```bash
   pnpm --filter mobile start
   ```

## Replace branding/assets/contact quickly

- Logo: `public/branding/`
- Puja images: `public/poojas/`
- Pandit photos: `public/pandits/`
- Product images: `public/products/`
- Banners: `public/banners/`
- Contact settings and city defaults: `apps/web/lib/data.ts` + `packages/shared/src/index.ts`
- Service prices and titles: `apps/web/lib/data.ts`

## Content seeding

Read: `content-seeding-instructions.md`

## Deployment notes

- Deploy `apps/web` on Vercel.
- Attach managed PostgreSQL.
- Set environment variables from `.env.example`.
- Add Razorpay and Cloudinary keys when going live.

