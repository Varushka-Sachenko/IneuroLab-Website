import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Включает статический экспорт
  trailingSlash: true,
  images: {
    unoptimized: true, // Для корректного отображения картинок на GitHub Pages
  },
  basePath: process.env.NODE_ENV === 'production' ? '/IneuroLab-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/IneuroLab-Website/' : '',
}

export default nextConfig