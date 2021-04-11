import { defineAsyncComponent } from "vue";
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app }) => {
  app.component(
    "VueLive",
    defineAsyncComponent(() => import("./vueLiveWithLayout.js"))
  );
});
