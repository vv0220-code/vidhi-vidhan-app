'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { panditRegistrationSchema, PanditRegistrationInput } from '@vidhi-vidhan/shared';

export function PanditRegistrationForm() {
  const [message, setMessage] = useState('');
  const form = useForm<PanditRegistrationInput>({
    resolver: zodResolver(panditRegistrationSchema),
    defaultValues: { fullName: '', mobile: '', email: '', address: '', city: 'Jabalpur', experienceYears: 5, languages: ['Hindi'], specializations: ['Griha Pravesh Puja'], availableCities: ['Jabalpur'], bio: '', availability: 'Morning and evening slots' },
  });
  async function onSubmit(values: PanditRegistrationInput) {
    const response = await fetch('/api/pandits/register', { method: 'POST', body: JSON.stringify(values) });
    const data = await response.json();
    setMessage(data.message);
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="card space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input {...form.register('fullName')} placeholder="Full name" className="rounded-2xl border border-amber-200 px-4 py-3" />
        <input {...form.register('mobile')} placeholder="Mobile number" className="rounded-2xl border border-amber-200 px-4 py-3" />
        <input {...form.register('email')} placeholder="Email" className="rounded-2xl border border-amber-200 px-4 py-3" />
        <input {...form.register('city')} placeholder="City" className="rounded-2xl border border-amber-200 px-4 py-3" />
      </div>
      <textarea {...form.register('address')} placeholder="Address" className="min-h-20 w-full rounded-2xl border border-amber-200 px-4 py-3" />
      <textarea {...form.register('bio')} placeholder="Bio" className="min-h-28 w-full rounded-2xl border border-amber-200 px-4 py-3" />
      <input {...form.register('availability')} placeholder="Availability" className="w-full rounded-2xl border border-amber-200 px-4 py-3" />
      <button className="rounded-full bg-brand-vermilion px-6 py-3 font-semibold text-white">Submit for verification</button>
      {message && <p className="text-sm text-emerald-700">{message}</p>}
    </form>
  );
}
