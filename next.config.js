/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1fdloi71mui9q.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'nonoultratrail.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'ecotrail.run',
      },
      {
        protocol: 'https',
        hostname: 'www.utacchultratrail.com',
      },
      {
        protocol: 'https',
        hostname: 'tyr.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'xtremerace.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
    ],
  },
}

module.exports = nextConfig
