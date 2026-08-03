// File purpose: Next.js config: images are served unoptimized; eslint is skipped during builds.
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    // Next 13.5 can leave a corrupted webpack pack cache during heavy hot reloads,
    // which shows up as "__webpack_modules__[moduleId] is not a function".
    // Disable only the dev filesystem cache; production builds still use defaults.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
