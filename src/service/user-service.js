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
    console.log('userSignUp', userSignUp);
    try {
        userSignUp.id = utilService.makeId();
        const user = await httpService.post('auth/signup', userSignUp);
        utilService.saveToStorage(USER, user)
        console.log('sucsess signup', user);
        return user;
    }
    catch (err) {
        console.log('err', err);
    }
}

async function logout() {
    try {
<<<<<<< HEAD
        utilService.saveToStorage('loggedinUser', '');
        return await httpService.post(`${ENDPOINT}/logout`);
=======
        await httpService.post(`${ENDPOINT}/logout`);
        utilService.saveToStorage(USER, '');
>>>>>>> a1787a00108c38c883d26fd53bb44b01acf2d0ca
    }
    catch (err) {
        console.log('Cannot logout', err);
        throw err;
    }
}

function getLoggedinUser() {
    let loggedInUser = JSON.parse(sessionStorage.getItem(USER) || 'null');
    console.log('loggedInUser', loggedInUser);
    return loggedInUser;
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