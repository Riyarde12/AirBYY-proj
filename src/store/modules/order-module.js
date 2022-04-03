import { orderService } from '../../service/order-service.js';

export default {
    state: {
        preOrder: orderService.getEmptyOrder(),
        orders: [],
    },
    getters: {
        orders(state) {
            console.log('state.orders', state.orders);
            return JSON.parse(JSON.stringify(state.orders));
        },
        getPreOrder({ preOrder }) {
            return JSON.parse(JSON.stringify(preOrder));
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        // saveOrder(state, { order }) {
        //     state.orders.push(order);
        // },
        saveDate(state, { selectedDate }) {
            state.preOrder.dates = selectedDate;
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                const orders = await orderService.query();
                console.log('order', orders);
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
                console.log(savedOrder);
                // commit({ type: 'saveOrder', savedOrder });
                return 'ordered';
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
