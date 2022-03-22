import { createRouter, createWebHashHistory } from "vue-router";
import HomeApp from "../views/home-app.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomeApp",
      component: HomeApp,
    },
  ],
});

export default router;
