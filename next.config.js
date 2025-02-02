/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:'/my-portfolio',
  assetPrefix: "/my-portfolio",

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

