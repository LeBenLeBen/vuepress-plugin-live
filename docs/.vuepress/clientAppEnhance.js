import { defineClientAppEnhance } from "@vuepress/client";

import VueSlider from "./components/vue-slider";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("VueSlider", VueSlider);
});
