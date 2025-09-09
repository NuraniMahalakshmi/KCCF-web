/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site suitable for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    // Disable Image Optimization (no server on GitHub Pages)
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
