/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/trades-quote',
        destination: '/',
      },
      {
        source: '/trades-quote/:path*',
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig