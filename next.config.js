const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  ...withImages()
}

module.exports = nextConfig