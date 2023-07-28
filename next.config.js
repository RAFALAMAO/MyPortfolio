/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public'
  },
  images: {
    ormats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-portfolio-rafalamao.vercel.app',
        port: '',
        pathname: '/images/projects/**',
      },
    ],
    // unoptimized: true
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig