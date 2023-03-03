import {Actions} from './action-types'
import IReg from "../interfaces/IReg";
import ILogin from "../interfaces/ILogin";
import IUser from "../interfaces/IUser";
import IPasswords from "../interfaces/IPasswords";

export const logUser = (data: IUser) => {
    return  {
        type: Actions.LOG_USER,
        payload: data
    }
}

export const logCurrentUser = (data: IUser) => {
    return {
        type: Actions.LOG_CURRENT_USER,
        payload: data
    }
}
export const clearUser = ()  => {
    return{
        type: Actions.CLEAR_CURRENT_USER
    }
}
export const getUser = (data:string | undefined)  =>  {
    return{
        type: Actions.GET_USER,
        payload: data,
    }
}

export const setLoading = (data: boolean)  =>  {
    return{
        type: Actions.SET_LOADING,
        payload: data,
    }
}

export const getCurrentUser = (data:string | undefined)  =>  {
    return{
        type: Actions.GET_CURRENT_USER,
        payload: data,
    }
}

export const checkPasswords = (data:IPasswords)  =>  {
    return{
        type: Actions.CHECK_PASSWORDS,
        payload: data
    }
}

export const regUserAPI = (data: IReg) => {
    return  {
        type: Actions.REG_USER,
        payload: data
    }
}
export const logUserAPI = (data: ILogin, nav: (link:string) => void, changeError: (error:boolean) => void)  => {
    return{
        type: Actions.LOG_USER_API,
        payload: data,
        nav,
        error:changeError
    }
}

export const setAllowLogin = (data: string) => {
    return {
        type: Actions.SET_ALLOW_LOGIN,
        payload: data
    }
}
export const checkLogin = (data: string) => {
    return  {
        type: Actions.CHECK_LOGIN,
        payload: data
    }
}
export const dropAllowLogin = () => {
    return   {
        type: Actions.DROP_ALLOW_LOGIN,
    }
}
export const setAllowNickname = (data: string)  => {
    return  {
        type: Actions.SET_ALLOW_NICKNAME,
        payload: data
    }
}
export const checkNickname = (data: string)  => {
    return{
        type: Actions.CHECK_NICKNAME,
        payload:data
    }
}
export const dropAllowNickname = ()  => {
    return {
        type: Actions.DROP_ALLOW_NICKNAME
    }
}

export const setAllowPassword = (data: string)  => {
    return{
        type: Actions.SET_ALLOW_PASSWORD,
        payload:data
    }
}
export const dropAllowPassword = ()  => {
    return {
        type: Actions.DROP_ALLOW_PASSWORD
    }
}