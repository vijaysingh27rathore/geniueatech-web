import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com",
      "acropolium.com",
      "www.shutterstock.com",
      "images.unsplash.com",
      "d1zruf9db62p8s.cloudfront.net",
      "www.jdinstitute.edu.in",
    ], // ✅ allow Unsplash
  },
  output: "export",
};

export default nextConfig;
