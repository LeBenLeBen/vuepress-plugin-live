import { h } from "vue";
import { VueLive } from "vue-live";

import layout from "./layout.vue";

export default (props, context) => {
  return h(VueLive, { ...props, layout });
};
