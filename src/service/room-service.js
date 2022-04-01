import { httpService } from "./http.service.js";
import { storageService } from './async-storage-service.js';

const ENDPOINT = "room/";
const STAY_KEY = "room_db";

export const roomService = {
  query,
  getById,
  // remove,
  save,
  getEmptyRoom,
  // homepageDisplay
};

const BASE_URL = process.env.NODE_ENV !== "development"
  ? "/api/room/"
  : "//localhost:3030/api/room/";

async function query(filterBy) {
  try {
    const rooms = httpService.get(ENDPOINT, filterBy);
    return rooms;
  } catch (err) {
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data);
    console.dir(err);
  }
  return await httpService.get(ENDPOINT, filterBy);
  //  OLD SERVICE
  // const rooms = await storageService.query(STAY_KEY);
  // const roomsForDisplay = _roomsForDisplay(rooms, filterBy);

  // return roomsForDisplay;
}


// function _roomsForDisplay(rooms, filterBy) {
//   if (!filterBy) return rooms;
//   let filteredRooms = [];
//   const regex = new RegExp(filterBy.destination, 'i');
//   // const currRooms = rooms.filter(room => room.address.country === filterBy.destination);

//   filteredRooms = rooms.filter(room => regex.test(room.address.country));
//   if (filterBy.adults || filterBy.children) {
//     let guests = +filterBy.adults + +filterBy.children;
//     filteredRooms = filteredRooms.filter(room => guests <= room.capacity);
//   }
//   return filteredRooms;

// }

async function getById(id) {
  try {
    return await httpService.get(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data);
    console.dir(err);
  }

  // return await storageService.get(STAY_KEY, id);
}

// async function remove(id) {
// 	// return await httpService.delete(`${ENDPOINT}/${id}`);
// }

async function save(room) {
  // return room._id
  // 	? await httpService.put(`${ENDPOINT}/${room._id}`, room)
  // 	: await httpService.post(ENDPOINT, room);
  return await storageService._save(STAY_KEY, room);
}

function getEmptyRoom() {

}
