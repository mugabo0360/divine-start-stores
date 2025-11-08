import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*' ,},
    ],
  /* config options here */
},
 eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint errors during production build
  },
};

export default nextConfig;
