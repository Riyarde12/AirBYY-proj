import { userService } from '../../service/user-service.js';

export default {
    state: {
        loggedInUser: null,
        avatar: null,
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        },
        avatar(state) {
            return state.avatar;
        }
    },
    mutations: {
        clearLoggedInUser(state) {
            state.loggedInUser = null;
        },
        setLoggedInUser(state, { loggedInUser }) {
            state.loggedInUser = loggedInUser;

        },
        setAvatars(state, { avatar }) {
            state.avatar = avatar;
        },
    },
    actions: {
        logoutUser({ commit }) {
            try {
                userService.logout();
                commit({ type: 'clearLoggedInUser' });
            } catch (err) {
                console.log('Cannot logout user', err);
            }
        },
        loadUser({ commit }) {
            // commit({ type: 'setIsLoading', isLoading: true });
            // debugger;
            try {
                const loggedInUser = userService.getLoggedinUser();
                commit({ type: 'setLoggedInUser', loggedInUser });
            }
            catch (err) {
                console.log('Cannot load user');
                throw err;
            }
        },
        async login({ commit }, { username, password }) {
            try {
                const loggedInUser = await userService.login(username, password);

                commit({ type: 'setLoggedInUser', loggedInUser });
            }
            catch (err) {
                console.log('Cannot login ', err);
                throw err;
            }
        },
        async signUp({ commit }, { userSignUp }) {
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
            }
            catch (err) {
                console.log('Cannot load avatar', err);
                throw err;
            }
        }
    },
};
