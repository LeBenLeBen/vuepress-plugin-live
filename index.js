const path = require("path");
const extendsMarkdown = require("./markDownPlugin");

module.exports = (options) => {
  return {
    name: "vuepress-plugin-live",
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
    },
    clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.js"),
    extendsMarkdown: extendsMarkdown(options),
  };
};
