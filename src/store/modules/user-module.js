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
    actions: {
        // loadUser({ commit }) {
        //     commit({ type: 'setIsLoading', isLoading: true });
        //     // debugger;
        //     return userService.getLoggedinUser()
        //         .then(user => {
        //             console.log('user', user);
        //             commit({ type: 'setUser', user });
        //         })
        //         .catch(err => {
        //             console.error('Cannot Load User', err);

        //         })
        //         .finally(() => context.commit({ type: 'setIsLoading', isLoading: false }));
        // },
        async login({ commit }, { username, password }) {
            try {
                const loggedInUser = await userService.login(username, password);
                // commit({ type: 'setLoggedInUser', loggedInUser });
                // console.log('loggedInUser', loggedInUser);
                return loggedInUser;
            }
            catch (err) {
                console.log('err', err);
            }
        },
        async signUp({ commit }, { userSignUp }) {
            console.log('userSignUp', userSignUp);
            try {
                const newUser = await userService.signup(userSignUp);

            }
            catch (err) {
                console.log('err', err);
            }
        },
    },
};
