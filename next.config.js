/**
 * Next.js Configuration File
 * 
 * This file configures Next.js build and runtime settings.
 * 
 * Key Configurations:
 * - reactStrictMode: Enables React strict mode for better development experience
 * - images.remotePatterns: Allows loading images from external domains
 * 
 * To add new image domains:
 * 1. Add a new object to remotePatterns array
 * 2. Specify protocol ('https' or 'http')
 * 3. Specify hostname (domain name)
 * 
 * @module next.config
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection and warnings
  reactStrictMode: true,
  
  // Image optimization configuration
  // Next.js Image component can only load images from domains listed here
  images: {
    remotePatterns: [
      // Placeholder image service
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // Unsplash - free stock photos
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Pexels - free stock photos
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      // Pixabay - free stock photos
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      // Add more domains here as needed
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'your-image-domain.com',
      // },
    ],
    // Disable image optimization to prevent 404 spam errors
    // This prevents Next.js from trying to optimize images server-side which causes spam errors
    // Images will still work but won't be optimized (slightly larger file sizes)
    unoptimized: true,
  },
}

module.exports = nextConfig
