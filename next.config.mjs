const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const manualBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const isUserSite = repoName?.toLowerCase().endsWith(".github.io");
const githubActionsBasePath =
  process.env.GITHUB_ACTIONS === "true" && repoName && !isUserSite
    ? `/${repoName}`
    : "";
const basePath = manualBasePath ?? githubActionsBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
