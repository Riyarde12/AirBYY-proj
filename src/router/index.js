import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/home-page.vue";
import roomApp from "../views/room-app.vue";
import roomDetails from "../views/room-details.vue";
import roomEdit from "../views/room-edit.vue";
import test from "../views/test.vue";
import dashBoard from "../views/dashboard.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/test",
      component: test,
    },
    {
      path: "/dashboard",
      name: "dashboard-page",
      component: dashBoard,
    },
    {
      path: "/explore",
      name: "room-app",
      component: roomApp,
    },
    {
      path: "/room/:roomId",
      name: "room-details",
      component: roomDetails,
    },
    {
      path: "/room/edit/:roomId?",
      name: "room-edit",
      component: roomEdit,
    },
  ],
});

export default router;
