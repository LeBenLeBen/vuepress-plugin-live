const path = require("path");

module.exports = {
  dest: "docs/dist",
  title: "VuePress Live",
  description: "Demo site of the VuePress-live plugin",
  debug: true,
  themeConfig: {
    repo: "vue-styleguidist/vuepress-plugin-live",
    editLinks: true,
    docsDir: "docs",
    search: false,
    sidebar: ["/", "/Install.md"],
  },
  plugins: [
    [
      require("../../index"),
      {
        // uncomment next line to use a custom layout
        // layout: path.resolve(__dirname, "./components/custom-layout.vue"),

        // I chose to show a component, vue-slider,
        // that can't be server side rendered
        // so I use the noSsr flag to avoid the "document is not defined" error
        noSsr: true,
      },
    ],
  ],
};
