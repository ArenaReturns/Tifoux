// @ts-check
const { i18n } = require("./next-i18next.config");
const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    version,
  },
  images: {
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
