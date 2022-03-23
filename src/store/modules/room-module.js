import { roomService } from '../../service/room-service.js';

export default {
  state: {
    rooms: null,
    // filterBy: null,
    // roomToEdit: null,
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
    // room(state) {
    //     return JSON.parse(JSON.stringify(state.roomToEdit));
    // },
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
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    // setRoomToEdit(state, { room }) {
    //     state.roomToEdit = room;
    // },
  },
  actions: {
    async loadRooms({ commit, state }) {
      try {
        const rooms = await roomService.query(state.filterBy);

        commit({ type: 'setRooms', rooms });
      }
      catch (err) {
        console.log('err', err);
      }
    },
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
    // },
    getRoom({ commit, state }, { id }) {
      return id ? roomService.getById(id) : roomService.getEmptyRoom();
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadRooms' });
    },
  },
};