/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
};
