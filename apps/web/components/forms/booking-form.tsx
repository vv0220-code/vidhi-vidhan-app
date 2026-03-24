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
      serviceSlug,
      date: '',
      time: '',
      customerName: '',
      mobile: '',
      address: '',
      city: 'Jabalpur',
      notes: '',
      languagePreference: 'Both',
      panditPreference: '',
      paymentMethod: 'cash',
    },
  });

  async function onSubmit(values: BookingInput) {
    const response = await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(values) });
    const data = await response.json();
    setMessage(`Booking submitted. ID: ${data.bookingId}`);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="card space-y-4 p-6">
      <div className="grid gap-3 md:grid-cols-2">
        <input {...form.register('customerName')} placeholder="Customer Name" className="rounded border p-2" />
        <input {...form.register('mobile')} placeholder="Mobile" className="rounded border p-2" />
        <input type="date" {...form.register('date')} className="rounded border p-2" />
        <input type="time" {...form.register('time')} className="rounded border p-2" />
        <input {...form.register('city')} placeholder="City" className="rounded border p-2" />
        <input {...form.register('panditPreference')} placeholder="Optional pandit preference" className="rounded border p-2" />
      </div>
      <textarea {...form.register('address')} placeholder="Address" className="w-full rounded border p-2" />
      <select {...form.register('languagePreference')} className="rounded border p-2"><option>Both</option><option>Hindi</option><option>English</option></select>
      <select {...form.register('paymentMethod')} className="rounded border p-2"><option value="cash">Cash/manual</option><option value="advance">Advance payment</option></select>
      <textarea {...form.register('notes')} placeholder="Notes" className="w-full rounded border p-2" />
      <button className="rounded-full bg-brand-vermilion px-6 py-3 text-white">Submit Booking</button>
      {message && <p className="text-sm text-emerald-700">{message}</p>}
    </form>
  );
}
