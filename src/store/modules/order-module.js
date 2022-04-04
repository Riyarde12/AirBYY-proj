import { orderService } from '../../service/order-service.js';

export default {
    state: {
        preOrder: orderService.getEmptyOrder(),
        orders: [],
        booked: null,
    },
    getters: {
        orders(state) {
            console.log('state.orders', state.orders);
            return JSON.parse(JSON.stringify(state.orders));
        },
        getPreOrder({ preOrder }) {
            return JSON.parse(JSON.stringify(preOrder));
        },
        booked({ booked }) {
            return booked;
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        saveOrder(state, { savedOrder }) {
            state.booked = savedOrder;
        },
        saveDate(state, { selectedDate }) {
            state.preOrder.dates = selectedDate;
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                const orders = await orderService.query();
                commit({ type: 'setOrders', orders });
            }
            catch (err) {
                console.log('Cannot load orders', err);
                throw err;
            }
        },
        async addOrder({ commit }, { order }) {
            console.log('order', order);
            try {
                const savedOrder = await orderService.save(order);
                commit({ type: 'saveOrder', savedOrder });
                return 'booked';
            }
            catch (err) {
                console.log('Cannot create order', err);
                throw err;
            }
        },
        getPreOrder() {
            return orderService.getEmptyOrder();
        },
    },
};
