import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rym.co.jp" }],
        destination: "https://rym.co.jp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
