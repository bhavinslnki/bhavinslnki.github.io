/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: "export", // Required for GitHub Pages
  basePath:'/my-portfolio',
  assetPrefix: "/my-portfolio/",

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

