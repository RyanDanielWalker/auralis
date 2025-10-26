import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*", // intercept calls to /api/*
        destination: "http://localhost:8000/api/:path*", // proxy to FastAPI
      },
    ];
  },
};

export default nextConfig;
