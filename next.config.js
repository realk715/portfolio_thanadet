/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: '/',
  },
  output: {
    export: true,
  },
  experimental: {
    serverActions: true, 
  },
};

module.exports = nextConfig;