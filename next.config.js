/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
