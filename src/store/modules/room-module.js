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
      console.log(JSON.parse(JSON.stringify(state.rooms)));
      return JSON.parse(JSON.stringify(state.rooms));
    },
    destinations(state) {
      return JSON.parse(JSON.stringify(state.destination));
    },
    currSearch({ filterBy }) {
      return filterBy.destination;
    },
    roomsPrices(state) {
      let prices = [];
      state.rooms.forEach(room => {
        prices.push(room.price);
      });
      return prices;
    },
  },
  mutations: {
    setRooms(state, { rooms }) {
      state.rooms = rooms;
      console.log('room ', state.rooms);
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
    saveDestination(state) {
      const destinationToSave = state.rooms.filter(room => room.address.country);
      state.destination = destinationToSave;
    }

  },
  actions: {
    async loadRooms({ commit, state }) {
      console.log('state.filterBy', state.filterBy);
      try {
        const rooms = await roomService.query(state.filterBy);
        commit({ type: 'setRooms', rooms });
        commit({ type: 'setFilter', filterBy: {} });
        return rooms;
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
    // // },
    async getRoom({ commit, state }, { id }) {
      try {
        const room = await roomService.getById(id);
        return room;
      }
      catch (err) {
        console.log('err', err);
      }
    },
    async filter({ commit, dispatch }, { filterBy }) {
      try {
        commit({ type: 'setFilter', filterBy });
        await dispatch({ type: 'loadRooms' });
      } catch (err) {

      }

    },
  },
};