import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/eps-sura-info" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
