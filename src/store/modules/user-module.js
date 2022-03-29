import { userService } from '../../service/user-service.js';

export default {
    state: {
        loggedInUser: null
        // loggedinUser: userService.getLoggedinUser(),
    },
    getters: {
        loggedInUser(state) {
            console.log('state.loggedInUser', state.loggedInUser);
            // return JSON.parse(JSON.stringify(state.loggedInUser));
            return state.loggedinUser;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user;
        },
        setLoggedInUser(state, { loggedInUser }) {
            state.loggedInUser = loggedInUser;
        },

    },
    async login({ commit }, { username, password }) {
        try {
            const loggedInUser = await userService.login(username, password);
            commit({ type: 'setLoggedInUser', loggedInUser });
            // console.log('loggedInUser', loggedInUser);
            return loggedInUser;
        }
        catch (err) {
            console.log('err', err);
        }
    },
    async signUp({ commit }, { userSignUp }) {
        try {
            const newUser = await userService.signup(userSignUp);

        }
        catch (err) {
            console.log('err', err);
        }
    },
};
