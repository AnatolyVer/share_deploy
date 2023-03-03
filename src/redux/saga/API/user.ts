import axios, {Axios} from 'axios';

import ILogin from '../../../interfaces/ILogin'

import 'react-dotenv'
import Cookies from "js-cookie";

export const signIn = (data: ILogin):Promise<Axios> =>{
    return axios({
        withCredentials: true,
        url: 'https://training-django.onrender.com/api' + '/account/login/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    });
}

export const cook = ():Promise<Axios> =>{
    return axios({
        withCredentials: true,
        url: 'http://localhost:4444/api/cookies',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}


export const signUp = (data: ILogin):Promise<Axios> =>{
    return axios({
        url: 'https://training-django.onrender.com/api' + "/register/",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data,
    });
}

export const getUserByToken = ():Promise<Axios> =>{
    return axios({
        url: 'https://training-django.onrender.com/api/account/detail/',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access_token')}`,
            'refresh-token': `${Cookies.get('refresh_token')}`,
            'Content-Type': 'application/json'
        }

    });
}

export const getUser = (data: string):Promise<Axios> => {

    return axios({
        url: `https://training-django.onrender.com/api/account/get/${data}`,
        method: 'GET',
    });
}