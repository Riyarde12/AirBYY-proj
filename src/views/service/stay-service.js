import { httpService } from "./http.service.js";

const ENDPOINT = "stay";

export const stayService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
};

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/stay/"
    : "//localhost:3030/api/stay/";

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy);
}

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`);
}

async function remove(id) {
  return await httpService.delete(`${ENDPOINT}/${id}`);
}

async function save(stay) {
  return stay._id
    ? await httpService.put(`${ENDPOINT}/${stay._id}`, stay)
    : await httpService.post(ENDPOINT, stay);
}

function getEmptyStay() {
  return {};
}
