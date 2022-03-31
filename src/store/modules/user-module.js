import { userService } from '../../service/user-service.js';

export default {
    state: {
        loggedInUser: null,
        avatar: null,
        // loggedinUser: userService.getLoggedinUser(),
    },
    getters: {
        loggedInUser(state) {
            console.log('state.loggedInUser', state.loggedInUser);
            return state.loggedInUser;
        },
        avatar(state) {
            return state.avatar;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user;
        },
        setLoggedInUser(state, { loggedInUser }) {
            state.loggedInUser = loggedInUser;
            console.log('loggedInUser after mutation', state.loggedInUser);
        },
        setAvatars(state, { avatar }) {
            state.avatar = avatar;
        },
    },
    actions: {
        // loadUser({ commit }) {
        //     // commit({ type: 'setIsLoading', isLoading: true });
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
                commit({ type: 'setLoggedInUser', loggedInUser });
                console.log('loggedInUser', loggedInUser);
                return loggedInUser;
            }
            catch (err) {
                console.log('Cannot login ', err);
                throw err;
            }
        },
        async signUp({ commit }, { userSignUp }) {
            console.log('userSignUp', userSignUp);
            try {
                const newUser = await userService.signup(userSignUp);
            }
            catch (err) {
                console.log('Cannot signUp', err);
                throw err;
            }
        },
        async loadAvatars({ commit }) {
            try {
                const avatar = await userService.getUsersAvatar();
                commit({ type: 'setAvatars', avatar });
                return avatar;
                console.log('avatar', avatar);
            }
            catch (err) {
                console.log('Cannot load avatar', err);
                throw err;
            }
        }
    },
};
