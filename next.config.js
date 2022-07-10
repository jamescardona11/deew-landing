/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   customKey: 'customKey',
  // },
  // basePath: '/src',
  // compress: true,
  // async redirects() {
  //   return [{ source: '/hola', destination: 'hello', permanent: true }]
  // },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
