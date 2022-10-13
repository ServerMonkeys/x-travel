/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'https://www.csus.edu/university-advancement/university-foundation/meet-us/_internal/photos/robert-nelsen.jpg'
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
