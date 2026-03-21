'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookingInput, bookingInputSchema } from '@vidhi-vidhan/shared';

export function BookingForm({ serviceSlug = 'griha-pravesh-puja' }: { serviceSlug?: string }) {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingInputSchema),
    defaultValues: {
      fullName: '', mobile: '', email: '', city: 'Jabalpur', address: '', serviceSlug, preferredDate: '', preferredTime: '', languagePreference: 'Hindi', samagriRequired: true, budgetPreference: 'Standard', notes: '', whatsappSame: true,
    },
  });

  async function onSubmit(values: BookingInput) {
    const response = await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(values) });
    const data = await response.json();
    setMessage(`Booking submitted successfully. Your booking ID is ${data.bookingId}.`);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="card space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {['fullName','mobile','email','city','address','preferredDate','preferredTime','languagePreference','budgetPreference'].map((field) => (
          <label key={field} className="space-y-2 text-sm font-medium text-stone-700">
            <span>{field}</span>
            <input type={field.includes('Date') ? 'date' : field.includes('Time') ? 'time' : 'text'} {...form.register(field as keyof BookingInput)} className="w-full rounded-2xl border border-amber-200 px-4 py-3 outline-none ring-brand-vermilion focus:ring" />
          </label>
        ))}
      </div>
      <label className="space-y-2 text-sm font-medium text-stone-700">
        <span>Additional notes</span>
        <textarea {...form.register('notes')} className="min-h-24 w-full rounded-2xl border border-amber-200 px-4 py-3 outline-none focus:ring" />
      </label>
      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" {...form.register('samagriRequired')} /> Need samagri support</label>
        <label className="flex items-center gap-2"><input type="checkbox" {...form.register('whatsappSame')} /> WhatsApp same as mobile</label>
      </div>
      <button type="submit" className="rounded-full bg-brand-vermilion px-6 py-3 font-semibold text-white">Submit booking request</button>
      {message && <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message} Continue on WhatsApp for faster confirmation.</p>}
    </form>
  );
}
