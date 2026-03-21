import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@vidhi-vidhan/shared', '@vidhi-vidhan/ui'],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
