/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: '/',
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
