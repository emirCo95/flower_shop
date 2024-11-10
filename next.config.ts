import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/flower_shop' : '',
  basePath: isProd ? '/flower_shop' : '',
  output: 'export',
};

export default nextConfig;
