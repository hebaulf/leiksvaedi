/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ['www.pngkey.com', 'images.prismic.io'],
  },
  env: {
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_API: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API,
    NEXT_ALGOLIA_ADMIN_API: process.env.NEXT_ALGOLIA_ADMIN_API,
  }
}

module.exports = nextConfig
