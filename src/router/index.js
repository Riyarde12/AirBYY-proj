import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/home-page.vue";
import roomApp from "../views/room-app.vue";
import roomDetails from "../views/room-details.vue";
import roomEdit from "../views/room-edit.vue";
import userDetails from "../views/user-details.vue";
import explorePage from "../views/explore-page.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    // {
    //   path: "/user/:userId?",
    //   name: "user-details",
    //   component: userDetails,
    // },
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
