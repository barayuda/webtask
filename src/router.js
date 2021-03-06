import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home2",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // lazy-loaded applied
      component: () => import("./pages/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./pages/Contact.vue")
    }
  ]
});
