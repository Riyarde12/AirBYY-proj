import { utilService } from './util-service.js';
// import axios from 'axios';
// import { httpService } from './http.service';
// axios.defaults.withCredentials = true;
const LOGGEDIN_USER = 'loggedin';

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
    console.log('username', username);
    console.log('password', password);
    const user = {
        username,
        password
    };
    try {
        // const loggedinUser = await httpService.post(`${BASE_URL}login`, { username, password });
        // const loggedinUser = await axios.post(`${BASE_URL}/login`, { username, password });
        // utilService.saveToStorage(LOGGEDIN_USER, loggedinUser.data);
        // return loggedinUser.data;
        utilService.saveToStorage(LOGGEDIN_USER, user);
        return user;
    } catch (err) {
        console.log('err', err);
    }
}

async function signup(userSignUp) {
    try {
        // console.log('password from front service ', password);
        // const user = await httpService.post(`${BASE_URL}/signup`, { fullname, username, password });
        // const res = axios.post(`${BASE_URL}/signup`, userSignUp);
        // utilService.saveToStorage(LOGGEDIN_USER, res.data);
        // return user.data;
        utilService.saveToStorage(LOGGEDIN_USER, userSignUp);
        return userSignUp;
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
        utilService.saveToStorage('loggedinUser', '');
        return await httpService.post(`${BASE_URL}/logout`);
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