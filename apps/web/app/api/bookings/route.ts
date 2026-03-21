import { bookingInputSchema } from '@vidhi-vidhan/shared'; import { NextResponse } from 'next/server';
let bookingCounter = 1200;
export async function POST(request: Request) { const json = await request.json(); const data = bookingInputSchema.parse(json); bookingCounter += 1; return NextResponse.json({ ok: true, bookingId: `VV-${bookingCounter}`, status: 'NEW', lead: data }); }