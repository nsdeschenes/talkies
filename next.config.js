/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
    serverComponentsExternalPackages: ["@planetscale/database"],
    turbo: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
    ],
  },
};

module.exports = nextConfig;
