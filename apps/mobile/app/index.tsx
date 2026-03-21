import { Link } from 'expo-router';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { siteConfig } from '@vidhi-vidhan/shared';

const cards = [
  ['Services', '/services'], ['Book Pandit', '/book'], ['My Bookings', '/bookings'], ['FAQ', '/faq'], ['Support', '/support'], ['Profile', '/profile']
] as const;
export default function HomeScreen() {
  return <ScrollView style={{ flex: 1, backgroundColor: '#fff8eb' }} contentContainerStyle={{ padding: 20, gap: 20 }}><View style={{ backgroundColor: '#9f1239', borderRadius: 24, padding: 24 }}><Text style={{ color: '#fbbf24', fontSize: 14, fontWeight: '700' }}>Vidhi Vidhan · विधि विधान</Text><Text style={{ color: 'white', fontSize: 30, fontWeight: '800', marginTop: 8 }}>Your Rituals, Our Responsibility.</Text><Text style={{ color: '#fde68a', marginTop: 12 }}>Jabalpur-first pandit booking with WhatsApp support, bilingual guidance, and a polished mobile experience.</Text></View>{cards.map(([label, href]) => <Link key={href} href={href as any} asChild><Pressable style={{ backgroundColor: 'white', borderRadius: 24, padding: 18 }}><Text style={{ fontSize: 18, fontWeight: '700' }}>{label}</Text></Pressable></Link>)}<Text style={{ color: '#444' }}>Support: {siteConfig.contact.phone}</Text></ScrollView>; }
