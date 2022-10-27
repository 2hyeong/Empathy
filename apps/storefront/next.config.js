const withTM = require("next-transpile-modules")(["ui", "scripts"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
});
