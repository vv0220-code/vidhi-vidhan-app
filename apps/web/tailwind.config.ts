import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: '#d97706',
          vermilion: '#9f1239',
          gold: '#fbbf24',
          charcoal: '#1c1917',
          cream: '#fff8eb',
        },
      },
      backgroundImage: {
        mandala: 'radial-gradient(circle at top, rgba(251,191,36,0.18), transparent 38%), linear-gradient(135deg, rgba(159,18,57,0.06), rgba(217,119,6,0.08))',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(159,18,57,0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
