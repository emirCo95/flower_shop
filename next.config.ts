import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/borcelle-boutique',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
