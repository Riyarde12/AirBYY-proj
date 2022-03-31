import { httpService } from './http.service.js';
import { utilService } from './util-service.js';
import axios from 'axios';
// axios.defaults.withCredentials = true;
const LOGGEDIN_USER = 'loggedin';
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
    const logedinUser = { username, password };
    try {
        const user = await httpService.post("auth/login", logedinUser);
        console.log('user login');
        utilService.saveToStorage('loggedin', user.data);
        return user;
    } catch (err) {
        console.log('cent login', err);
    }
};

async function signup(userSignUp) {
    console.log('userSignUp', userSignUp);
    try {
        userSignUp.id = utilService.makeId;
        const user = await httpService.post('auth/signup', userSignUp);
        console.log('sucsess signup', user);
        return user;
    }
    catch (err) {
        console.log('err', err);
    }
}

async function logout() {
    try {
        utilService.saveToStorage('loggedinUser', '');
        return await httpService.post(`${ENDPOINT}/logout`);

    }
    catch (err) {
        console.log('Cannot logout', err);
        throw err;
    }
}

function getLoggedinUser() {
    console.log('example', JSON.parse(sessionStorage.getItem(LOGGEDIN_USER) || 'null'));
    return JSON.parse(sessionStorage.getItem(LOGGEDIN_USER) || 'null');
}

async function getUsersAvatar() {
    try {
        const res = await axios.get('https://randomuser.me/api/');
        console.log('res.data', res.data.results[0].picture.medium);
        return res.data.results[0].picture.medium;
    }
    catch (err) {
        console.log('Cannot get avatar', err);
        throw err;
    }
}