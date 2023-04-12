/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://example.com/server-sitemap-index.xml", // <==== Add here
      "https://example.com/server-sitemap.xml", // <==== Add here
    ],
  },
}
