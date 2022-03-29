import { createStore } from "vuex";
import roomStore from "./modules/room-module.js";
import orderStore from './modules/order-module.js';
import userStore from './modules/user-module.js';

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    roomStore,
    orderStore,
    userStore,
  },
});

export default store;
