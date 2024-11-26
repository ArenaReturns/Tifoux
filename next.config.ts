import type { NextConfig } from "next";
import  { i18n }  from "./next-i18next.config";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    version,
  },
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
