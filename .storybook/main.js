const webpack = require("webpack");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-actions',
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // webpackFinal: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       SC_DISABLE_SPEEDY: true
  //     })
  //   )
  // }
}