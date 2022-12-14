const path = require("path");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      storefront: path.resolve(__dirname, "../../storefront"),
    };

    // mock next/navigation
    config.resolve.alias["next/navigation"] = require.resolve(
      "../__mocks__/next/router.ts"
    );

    return config;
  },
};
