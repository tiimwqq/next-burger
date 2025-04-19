import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "burgerking.kz",
      },
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
      },
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
        pathname: '/sushi-market/**', 
      },
    ],
  },
};

export default nextConfig;
