import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export (generates 'out' folder)
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"], // Add Unsplash domain for images
    unoptimized: true,
  },
};

export default nextConfig;
