import type { NextConfig } from "next";

const repository = "medconsulting";
const isGhPages = process.env["GH_PAGES"] === "true";

const nextConfig: NextConfig = {
  basePath: isGhPages ? `/${repository}` : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.onemedical.com",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
