/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps with development optimizations
  swcMinify: true,       // Enables the SWC compiler for faster builds
  compress: true,        // Ensures the application is compressed for smaller uploads
  output: 'standalone',  // To ensure your app works in environments like Azure without bundling unnecessary dependencies
}

export default nextConfig;
