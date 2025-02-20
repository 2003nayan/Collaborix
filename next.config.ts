import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `... connect-src 'self' https://api.resend.com ...`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
