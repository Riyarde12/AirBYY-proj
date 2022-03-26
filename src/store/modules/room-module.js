import { roomService } from '../../service/room-service.js';

export default {
  state: {
    rooms: null,
    destination: null,
    filterBy: null,
    homeRooms: null,
    // userSignUp: {
    //   fullname: "",
    //   inputUsername: "",
    //   inputPassword: "",
    // },
  },
  getters: {
    rooms(state) {
      return JSON.parse(JSON.stringify(state.rooms));
    },
  },
  mutations: {
    setRooms(state, { rooms }) {
      state.rooms = rooms;
    },
    removeRoom(state, { id }) {
      const idx = state.rooms.findIndex(room => room._id === id);
      state.rooms.splice(idx, 1);
    },
    saveRoom(state, { savedRoom }) {
      const idx = state.rooms.findIndex(currRoom => currRoom._id === savedRoom._id);
      if (idx !== -1) state.rooms.splice(idx, 1, savedRoom);
      else state.rooms.push(savedRoom);
    },
    // if some one use that function (setfilter) tell yosef please
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    // setHomeRoom(state, { homeRooms }) {
    //   state.homeRooms = homeRooms;
    // }
  },
  actions: {
    async loadRooms({ commit, state }, { filterBy = {} }) {
      console.log('filterBy', filterBy);
      try {
        const rooms = await roomService.query(filterBy);
        commit({ type: 'setRooms', rooms });
        return rooms;
      }
      catch (err) {
        console.log('err', err);
      }
    },
    // async topRoomsForDisplay({ commit }) {
    //   const homeRooms = await roomService.homepageDisplay();
    //   commit({ type: 'setHomeRoom', homeRooms });
    //   console.log(homeRooms);
    //   return JSON.parse(JSON.stringify(homeRooms.slice(0, 4)));
    // }
    // async removeRoom({ commit }, { id }) {
    //   console.log('id', id);
    //   try {
    //     await roomService.remove(id);
    //     commit({ type: 'removeRoom', id });
    //   }
    //   catch (err) {
    //     console.log('err', err);
    //   }
    // },
    // async saveRoom({ commit }, { room }) {
    //   console.log('room', room);
    //   try {
    //     const savedRoom = await roomService.save(room);
    //     commit({ type: 'saveRoom', savedRoom });
    //   }
    //   catch (err) {
    //     console.log('err', err);
    //   }
    // // },
    async getRoom({ commit, state }, { id }) {
      console.log('id', id);
      try {
        const room = await roomService.getById(id);
        console.log('room', room);
        return room;
      }
      catch (err) {
        console.log('err', err);
      }
    },
    // filter({ commit, dispatch }, { filterBy }) {
    //   commit({ type: 'setFilter', filterBy });
    //   dispatch({ type: 'loadRooms' });
    // },
  },
};