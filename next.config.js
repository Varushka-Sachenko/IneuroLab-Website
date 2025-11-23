/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/IneuroLab-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/IneuroLab-Website/' : '',
}

module.exports = nextConfig