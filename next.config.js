/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:8080", "https://i.imgur.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
