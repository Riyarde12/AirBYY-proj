import { httpService } from "./http.service.js";
import { storageService } from './async-storage-service.js';

const ENDPOINT = "room";
const STAY_KEY = "room_db";

export const roomService = {
  query,
  getById,
  // remove,
  save,
  getEmptyRoom,
  // homepageDisplay
};

const gRooms = (JSON.parse(localStorage.getItem(STAY_KEY)));
_createRooms();

function _createRooms() {
  if (!gRooms || !gRooms.length) {
    const gRooms = 
    localStorage.setItem(STAY_KEY, JSON.stringify(gRooms));
  }
  return;
}

const BASE_URL = process.env.NODE_ENV !== "development"
  ? "/api/room/"
  : "//localhost:3030/api/room/";

async function query(filterBy = []) {
  // return await httpService.get(ENDPOINT, filterBy);
  const rooms = await storageService.query(STAY_KEY);
  const roomsForDisplay = _roomsForDisplay(rooms, filterBy);
  return roomsForDisplay;
}

async function homepageDisplay() {
  const rooms = await storageService.query(STAY_KEY);
  // console.log(rooms[0].reviewScores.rating);
  console.log(rooms);
  const homeRooms = rooms.filter(room => room.reviewScores.rating > 80);
  console.log(homeRooms);
  return homeRooms;
}

function _roomsForDisplay(rooms, filterBy) {
  if (filterBy.destination) {
    const currRooms = rooms.filter(room => room.address.country === filterBy.destination);
    console.log('currRooms', currRooms);
    return currRooms;
  }
  else return rooms;
}

async function getById(id) {
  // return await httpService.get(`${ENDPOINT}/${id}`);
  return await storageService.get(STAY_KEY, id);
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
