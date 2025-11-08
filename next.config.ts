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
ingonreDuringBuild: true
};

export default nextConfig;
