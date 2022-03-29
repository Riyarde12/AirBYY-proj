import { httpService } from "./http.service.js";
import { storageService } from './async-storage-service.js';

const ORDER_KEY = 'order';

export const orderService = {
    query,
    getById,
    // remove,
    save,
    getEmptyOrder,
};


const BASE_URL = process.env.NODE_ENV !== "development"
    ? "/api/room/"
    : "//localhost:3030/api/room/";

async function query(filterBy) {

    // return await httpService.get(ENDPOINT, filterBy);
    const orders = await storageService.query(ORDER_KEY);
    const ordersForDisplay = _ordersForDisplay(orders, filterBy);

    return ordersForDisplay;
}


// function _ordersForDisplay(orders, filterBy) {
//     if (!filterBy) return orders;
//     let filteredOrders = [];
//     const regex = new RegExp(filterBy.destination, 'i');


//     filteredOrders = orders.filter(room => regex.test(room.address.country));
//     if (filterBy.adults || filterBy.children) {
//         let guests = +filterBy.adults + +filterBy.children;
//         filteredOrders = filteredOrders.filter(room => guests <= room.capacity);
//     }
//     return filteredOrders;

// }

async function getById(id) {
    // return await httpService.get(`${ENDPOINT}/${id}`);
    return await storageService.get(ORDER_KEY, id);
}

// async function remove(id) {
// 	// return await httpService.delete(`${ENDPOINT}/${id}`);
// }

async function save(order) {
    let ordered = [];
    ordered.push(order);
    // return room._id
    // 	? await httpService.put(`${ENDPOINT}/${room._id}`, room)
    // 	: await httpService.post(ENDPOINT, room);
    return await storageService.save(ORDER_KEY, order);
}

function getEmptyOrder() {
    return {
        guests: { adults: 0, children: 0, pets: 0, infants: 0 },
        dates: { from: null, to: null },
        reserve: { destination: '', roomName: '', roomId: "" },
    };
}

