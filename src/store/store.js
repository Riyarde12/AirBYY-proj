import { createStore } from "vuex";
import roomStore from "./modules/room-module.js";

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    roomStore,
  },
});

export default store;
