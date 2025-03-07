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
    ],
  },
};

export default nextConfig;
