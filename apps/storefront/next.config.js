// const withTM = require("next-transpile-modules")(["ui", "scripts"]);

// module.exports = withTM({
//   reactStrictMode: true,
//   webpack: (config, options) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },
//   swcMinify: true,
//   experimental: {
//     // Required:
//     appDir: true,
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    transpilePackages: ["ui", "scripts"],
  },
};

module.exports = nextConfig;
