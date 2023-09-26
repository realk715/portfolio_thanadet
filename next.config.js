/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: '/',
  },
  output: 'export',
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
