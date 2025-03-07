/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}
