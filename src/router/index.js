import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/home-page.vue";
import stayApp from "../views/stay-app.vue";
import stayDetails from "../views/stay-details.vue";
import stayEdit from "../views/stay-edit.vue";
import userDetails from "../views/user-details.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/user/:userId?",
      name: "user-details",
      component: userDetails,
    },
    {
      path: "/stay",
      name: "stay-app",
      component: stayApp,
    },
    {
      path: "/stay/:stayId",
      name: "stay-details",
      component: stayDetails,
    },
    {
      path: "/stay/edit/:stayId?",
      name: "stay-edit",
      component: stayEdit,
    },
  ],
});

export default router;
