/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
    serverComponentsExternalPackages: ["@planetscale/database"],
    turbo: true,
    runtime: "experimental-edge",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
    ],
  },
};

module.exports = nextConfig;
