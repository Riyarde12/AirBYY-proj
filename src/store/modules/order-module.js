import { orderService } from '../../service/order-service.js';

export default {
    state: {
        // preOrder: null,
        orders: [],
    },
    getters: {
        orders(state) {
            return JSON.parse(JSON.stringify(state.orders));
        },
        getPreOrder({ preOrder }) {
            console.log('preOrder', preOrder);
            return JSON.parse(JSON.stringify(preOrder));
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        saveOrder(state, { order }) {
            state.orders.push(order);
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                const orders = await orderService.query();
                commit({ type: 'setOrders', orders });
                return orders;
            }
            catch (err) {
                console.log('err', err);
            }
        },
        async addOrder({ commit }, { order }) {
            console.log('order', order);
            try {
                const savedOrder = await orderService.save(order);
                commit({ type: 'saveOrder', savedOrder });
            }
            catch (err) {
                console.log('err', err);
            }
        },
        getPreOrder() {
            return orderService.getEmptyOrder();
        },
    },
};
