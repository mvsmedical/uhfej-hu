/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uhfej.hu',
      },
    ],
  },
}

module.exports = nextConfig
