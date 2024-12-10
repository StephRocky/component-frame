import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import TouchUI from "ai.touchui-vue";
import "ai.touchui-vue/lib/theme/css/theme/default.css";

Vue.config.productionTip = false;

Vue.use(TouchUI, {
  fillet: "normal",
  mode: "",
  // baseRatioUnitDesktop: 1366
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
