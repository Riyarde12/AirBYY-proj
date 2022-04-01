import { userService } from '../../service/user-service.js';

export default {
    state: {
        loggedInUser: userService.getLoggedinUser(),
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
        loadUser({ commit }) {
            // commit({ type: 'setIsLoading', isLoading: true });
            // debugger;
            try {
                const user = userService.getLoggedinUser();
                console.log('user', user);
                commit({ type: 'setLoggedInUser', user });
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
                console.log('avatar', avatar);
            }
            catch (err) {
                console.log('Cannot load avatar', err);
                throw err;
            }
        }
    },
};
