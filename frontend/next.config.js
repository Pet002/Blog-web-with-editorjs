/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePath:['./styles'],
  },
  output:'standalone'
}

module.exports = nextConfig
