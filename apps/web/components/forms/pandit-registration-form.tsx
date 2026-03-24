'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { panditRegistrationSchema, type PanditRegistrationInput } from '@vidhi-vidhan/shared';

export function PanditRegistrationForm() {
  const [message, setMessage] = useState('');
  const form = useForm<PanditRegistrationInput>({
    resolver: zodResolver(panditRegistrationSchema),
    defaultValues: {
      fullName: '', mobile: '', email: '', city: 'Jabalpur', area: '', fullAddress: '', yearsOfExperience: 3,
      languagesSpoken: ['Hindi'], expertise: ['Griha Pravesh Puja'], shortBio: '', availabilitySchedule: 'Morning/Evening', serviceRadiusKm: 15, homeVisit: true,
    },
  });
  async function onSubmit(values: PanditRegistrationInput) {
    const response = await fetch('/api/pandits/register', { method: 'POST', body: JSON.stringify(values) });
    const data = await response.json();
    setMessage(data.message);
  }

  return <form onSubmit={form.handleSubmit(onSubmit)} className="card mt-4 grid gap-3 p-6 md:max-w-2xl">
    <input {...form.register('fullName')} placeholder="Full Name" className="rounded border p-2"/>
    <input {...form.register('mobile')} placeholder="Mobile" className="rounded border p-2"/>
    <input {...form.register('email')} placeholder="Email" className="rounded border p-2"/>
    <input {...form.register('city')} placeholder="City" className="rounded border p-2"/>
    <input {...form.register('area')} placeholder="Area" className="rounded border p-2"/>
    <textarea {...form.register('fullAddress')} placeholder="Full Address" className="rounded border p-2"/>
    <textarea {...form.register('shortBio')} placeholder="Short Bio" className="rounded border p-2"/>
    <p className="text-xs text-stone-600">KYC placeholders: Aadhaar, PAN, certificate, bank details are part of schema and admin workflow.</p>
    <button className="rounded-full bg-brand-vermilion px-4 py-2 text-white">Submit for Verification</button>
    {message && <p className="text-sm text-emerald-700">{message}</p>}
  </form>;
}
