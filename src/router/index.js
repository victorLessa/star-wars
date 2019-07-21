import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: require("@/pages/Home").default
    }
  ]
});
