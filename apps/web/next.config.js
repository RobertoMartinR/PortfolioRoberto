/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  output: 'standalone',
  trailingSlash: false,
  generateBuildId: () => 'build',
};

module.exports = nextConfig; 