import { NextResponse } from 'next/server';
import { panditRegistrationSchema } from '@vidhi-vidhan/shared';

export async function POST(request: Request) {
  const json = await request.json();
  const data = panditRegistrationSchema.parse(json);
  return NextResponse.json({ ok: true, message: `Registration received for ${data.fullName}. Verification status: pending.` });
}
