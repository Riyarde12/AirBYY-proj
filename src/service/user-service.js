import { httpService } from './http.service.js';
import { utilService } from './util-service.js';
import axios from 'axios';
// axios.defaults.withCredentials = true;
const USER = 'user';
const ENDPOINT = "auth/";

// const BASE_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/auth/'
//     : '//localhost:3030/api/auth/';

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
    getUsersAvatar,
};

async function login(username, password) {
    const loggedinUser = { username, password };
    try {
        const user = await httpService.post("auth/login", loggedinUser);
        utilService.saveToStorage(USER, user);
        return user;
    } catch (err) {
        console.log('cent login', err);
    }
};

async function signup(userSignUp) {
    try {
        userSignUp.id = utilService.makeId();
        const user = await httpService.post('auth/signup', userSignUp);
        utilService.saveToStorage(USER, user);
        return user;
    }
    catch (err) {
        console.log('err', err);
    }
}

async function logout() {
    try {
        await httpService.post(`${ENDPOINT}/logout`);
        utilService.saveToStorage(USER, '');
    }
    catch (err) {
        console.log('Cannot logout', err);
        throw err;
    }
}

function getLoggedinUser() {
    let loggedInUser = JSON.parse(sessionStorage.getItem(USER) || 'null');
    return loggedInUser;
}

async function getUsersAvatar() {
    try {
        const res = await axios.get('https://randomuser.me/api/');
        return res.data.results[0].picture.medium;
    }
    catch (err) {
        console.log('Cannot get avatar', err);
        throw err;
    }
}