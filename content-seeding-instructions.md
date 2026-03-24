# Content Seeding Instructions

1. Configure `DATABASE_URL` in `apps/web/.env`.
2. Run:
   - `pnpm install`
   - `pnpm --filter web prisma db push`
   - `pnpm --filter web prisma db seed`
3. Seed includes:
   - 24 puja services with bilingual names and launch prices
   - 5 sample pandits in Jabalpur
   - 8 FAQs, 8 testimonials, 4 banners, 10 products
   - Jabalpur + sample service areas
   - Admin placeholder account
