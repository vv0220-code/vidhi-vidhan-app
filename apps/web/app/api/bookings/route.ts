import { bookingInputSchema } from '@vidhi-vidhan/shared';
import { NextResponse } from 'next/server';

let bookingCounter = 2000;

export async function POST(request: Request) {
  const json = await request.json();
  const data = bookingInputSchema.parse(json);
  bookingCounter += 1;
  return NextResponse.json({
    ok: true,
    bookingId: `VV-JBP-${bookingCounter}`,
    status: 'pending',
    nextStatus: 'inquiry_received',
    lead: data,
  });
}
