import { httpService } from './http.service.js';
import { utilService } from './util-service.js';
// import axios from 'axios';
// import { httpService } from './http.service';
// axios.defaults.withCredentials = true;
const LOGGEDIN_USER = 'loggedin';
const ENDPOINT = "auth/";


const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/auth/'
    : '//localhost:3030/api/auth/';

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
};

async function login(username, password) {
    const logedinUser = { username, password };
    try {
        const user = await httpService.post("auth/login", logedinUser);
        console.log('user login');
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
        // console.log('password from front service ', password);
        // const user = await httpService.post(`${BASE_URL}/signup`, { fullname, username, password });
        // const res = axios.post(`${BASE_URL}/signup`, userSignUp);
        // utilService.saveToStorage(LOGGEDIN_USER, res.data);
        // return user.data;
        // utilService.saveToStorage(LOGGEDIN_USER, userSignUp);
        // return userSignUp;
    }

    catch (err) {
        console.log('err', err);
    }
    // return axios.post(`${BASE_URL}/signup`, { fullname, username, password })
    // .then(res => res.data)
    // .then(user => {
    // utilService.saveToStorage('logginUser', user.data);
    // return user;
    // });
}

async function logout() {
    try {
        return await httpService.post(`auth/logout`);

        // utilService.saveToStorage('loggedinUser', '');
    }
    catch (err) {
        console.log('err', err);
    }

    // return axios.post(`${BASE_URL}/logout`)
    //     .then(() => {
    //         utilService.saveToStorage('loggedinUser', '');
    //         return '';
    //     });
}

function getLoggedinUser() {
    console.log('example', JSON.parse(sessionStorage.getItem(LOGGEDIN_USER) || 'null'));
    return JSON.parse(sessionStorage.getItem(LOGGEDIN_USER) || 'null');
}

function getUsersList() {

}