import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ ignore lint errors during Vercel builds
    ignoreDuringBuilds: true,
  },
  
};

export default nextConfig;
