import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import pageView from "@/views/pageView.vue";
import errorView from "@/views/errorView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/page",
    name: "page",
    component: pageView,
  },
  {
    path: "/error",
    name: "error",
    component: errorView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
