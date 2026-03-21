import Credentials from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { roles } from '@vidhi-vidhan/shared';

const demoUsers = [
  { id: '1', name: 'Admin', email: 'admin@vidhividhan.in', password: 'Admin@123', role: 'ADMIN' },
  { id: '2', name: 'Pandit Demo', email: 'pandit@vidhividhan.in', password: 'Pandit@123', role: 'PANDIT' },
  { id: '3', name: 'User Demo', email: 'user@vidhividhan.in', password: 'User@123', role: 'USER' },
] as const;

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        const user = demoUsers.find((item) => item.email === credentials.email && item.password === credentials.password);
        if (!user || !roles.includes(user.role as (typeof roles)[number])) return null;
        return user as any;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    session({ session, token }) {
      if (session.user) (session.user as any).role = token.role;
      return session;
    },
    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;
      const role = (auth?.user as any)?.role;
      if (pathname.startsWith('/admin')) return role === 'ADMIN';
      if (pathname.startsWith('/pandit')) return role === 'PANDIT';
      if (pathname.startsWith('/user')) return role === 'USER' || role === 'ADMIN';
      return true;
    },
  },
  trustHost: true,
  session: { strategy: 'jwt' },
});
