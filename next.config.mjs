/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;
