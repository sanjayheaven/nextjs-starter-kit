/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require("./next-i18next.config")
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
