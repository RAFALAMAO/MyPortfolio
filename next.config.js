/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public'
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig