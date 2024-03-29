import { roomService } from '../../service/room-service.js';

export default {
  state: {
    rooms: null,
    destination: null,
    filterBy: {
      amenities: [],
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
      price: { from: null, to: null },
    },
    homeRooms: null,
    currentDestination: null
  },
  getters: {
    rooms(state) {
      return JSON.parse(JSON.stringify(state.rooms));
    },
    destinations(state) {
      return JSON.parse(JSON.stringify(state.destination));
    },
    currSearch({ filterBy }) {
      return filterBy.destination;
    },
    filterBy(state) {
      return JSON.parse(JSON.stringify(state.filterBy));
    },
    filterByRoomType(state) {
      const { roomType } = state.filterBy;
      return JSON.parse(JSON.stringify(roomType));
    },
    filterByPrice(state) {
      return { ...state.filterBy.price };
    },
    roomsPrices(state) {
      let prices = [];
      state.rooms.forEach(room => {
        prices.push(room.price);
      });
      return prices;
    },
    getCurrentDestination(state) {
      return state.currentDestination;
    }
  },
  mutations: {
    setRooms(state, { rooms }) {
      state.rooms = rooms;
      console.log('state.rooms', state.rooms);
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
      const { destination, adults, children, infants, pets, } = filterBy;

      state.filterBy.destination = destination;
      state.filterBy.adults = adults;
      state.filterBy.children = children;
      state.filterBy.infants = infants;
      state.filterBy.pets = pets;
    },
    setFilterByRoomType(state, { filterBy, }) {
      const { roomType, price } = filterBy;
      state.filterBy.roomType = roomType;
      state.filterBy.price = price;
    },
    setAmenities(state, { amenities }) {
      state.filterBy.amenities = (Object.values(amenities));
    },
    saveDestination(state, { destination }) {

      const destinationToSave = state.rooms.filter(room => room.address.country);

      state.destination = destinationToSave;
    },
    saveDestination(state, { destination }) {
      state.currentDestination = destination;


    },
    clearFliterBy(state) {
      state.filterBy = {
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
        price: { min: null, max: null },
        amenities: [],
      };
    },
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
        console.log('Cannot FilterBy', err);
        throw err;
      }
    },
  }
};

