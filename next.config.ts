import type { NextConfig } from "next";

const isGithubPages = process.env.IS_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/arasue-horizon' : '',
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      }
    ],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
