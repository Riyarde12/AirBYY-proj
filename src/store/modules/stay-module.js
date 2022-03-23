import { stayService } from '../../service/stay-service.js';

export default {
  state: {
    stays: null,
    // filterBy: null,
    // stayToEdit: null,
    // userSignUp: {
    //   fullname: "",
    //   inputUsername: "",
    //   inputPassword: "",
    // },
  },
  getters: {
    stays(state) {
      return JSON.parse(JSON.stringify(state.stays));
    },
    // stay(state) {
    //     return JSON.parse(JSON.stringify(state.stayToEdit));
    // },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    removeStay(state, { id }) {
      const idx = state.stays.findIndex(stay => stay._id === id);
      state.stays.splice(idx, 1);
    },
    saveStay(state, { savedStay }) {
      const idx = state.stays.findIndex(currStay => currStay._id === savedStay._id);
      if (idx !== -1) state.stays.splice(idx, 1, savedStay);
      else state.stays.push(savedStay);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    // setStayToEdit(state, { stay }) {
    //     state.stayToEdit = stay;
    // },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query(state.filterBy);

        commit({ type: 'setStays', stays });
      }
      catch (err) {
        console.log('err', err);
      }
    },
    // async removeStay({ commit }, { id }) {
    //   console.log('id', id);
    //   try {
    //     await stayService.remove(id);
    //     commit({ type: 'removeStay', id });
    //   }
    //   catch (err) {
    //     console.log('err', err);
    //   }
    // },
    // async saveStay({ commit }, { stay }) {
    //   console.log('stay', stay);
    //   try {
    //     const savedStay = await stayService.save(stay);
    //     commit({ type: 'saveStay', savedStay });
    //   }
    //   catch (err) {
    //     console.log('err', err);
    //   }
    // },
    getStay({ commit, state }, { id }) {
      return id ? stayService.getById(id) : stayService.getEmptyStay();
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadStays' });
    },
  },
};