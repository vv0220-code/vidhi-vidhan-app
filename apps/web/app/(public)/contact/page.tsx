import { siteSettings } from '@/lib/data';
export default function ContactPage(){return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Contact</h1><p className="mt-2">Phone: {siteSettings.phone}</p><p>WhatsApp: {siteSettings.whatsapp}</p><p>Email: {siteSettings.email}</p><p>City: {siteSettings.city}</p></div>}
