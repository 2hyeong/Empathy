const withTM = require("next-transpile-modules")(["ui", "scripts"]);

module.exports = withTM({
  reactStrictMode: true,
});
