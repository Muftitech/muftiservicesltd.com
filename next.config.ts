import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/muftiservicesltd.com",

  assetPrefix: "/muftiservicesltd.com/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;