import { userService } from '../../service/user-service.js';

export default {
    state: {
        loggedInUser: null,
        avatar: null,
    },
    getters: {
        loggedInUser(state) {
            console.log('state.loggedInUser', state.loggedInUser);
            return { ...state.loggedInUser };
        },
        avatar(state) {
            return state.avatar;
        }
    },
    mutations: {
        setLoggedInUser(state, { loggedInUser }) {
            state.loggedInUser = loggedInUser;
            console.log('loggedInUser after mutation', loggedInUser);
        },
        setAvatars(state, { avatar }) {
            state.avatar = avatar;
        },
    },
    actions: {
        loadUser({ commit }) {
            // commit({ type: 'setIsLoading', isLoading: true });
            // debugger;
            try {
                const loggedInUser = userService.getLoggedinUser();
                console.log('loggedInUser', loggedInUser);
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
            }
            catch (err) {
                console.log('Cannot load avatar', err);
                throw err;
            }
        }
    },
};
