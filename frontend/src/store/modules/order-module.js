import { orderService } from '../../service/order-service.js';

export default {
    state: {
        preOrder: orderService.getEmptyRoom,
    },
    getters: {},
    mutations: {},
    actions: {
        async loadOrders({ commit, state }) {

        }
    },

};
