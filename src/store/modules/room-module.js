import { roomService } from '../../service/room-service.js';

export default {
  state: {
    rooms: null,
    destination: null,
    filterBy: {
      destination: '',
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
      roomType: {
        entirePlace: false,
        privateRoom: false,
        hotelRoom: false,
        sharedRoom: false,
      },
      price: { min: null, max: null }
    },
    homeRooms: null,
    amenities: [],
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
    filterBy(state) {
      console.log('filterBy ', state.filterBy);
      return JSON.parse(JSON.stringify(state.filterBy));
    },
    roomsPrices(state) {
      // let prices = [];
      // state.rooms.forEach(room => {
      //   prices.push(room.price);
      // });
      // return prices;
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
    setFilter(state, { filterBy, }) {
      const {
        destination, adults, children, infants,
        pets, roomType, price
      } = filterBy;


      state.filterBy.roomType = roomType || {};
      state.filterBy.destination = destination || '';
      state.filterBy.adultes = adults || 0;
      state.filterBy.children = children || 0;
      state.filterBy.infants = infants || 0;
      state.filterBy.pets = pets || 0;
      state.filterBy.price = price || 0;
      console.log('state.filterBy', state.filterBy);


    },
    saveDestination(state) {
      const destinationToSave = state.rooms.filter(room => room.address.country);
      state.destination = destinationToSave;
    },
    setAmenities(state, amenities) {
      state.amenities.push(amenities);
    },

  },
  actions: {
    async loadRooms({ commit, state }) {
      console.log('state.filterBy', state.filterBy);
      try {
        const rooms = await roomService.query(state.filterBy);
        commit({ type: 'setRooms', rooms });
        // commit({ type: 'setFilter', filterBy: {} });
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
      console.log('filterBy', filterBy);
      try {
        commit({ type: 'setFilter', filterBy });
        await dispatch({ type: 'loadRooms' });
      } catch (err) {
        console.log('Cannot FilterBy', err);
        throw err;
      }
    },
  },
};