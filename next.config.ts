import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/coders",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
