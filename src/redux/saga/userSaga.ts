import { put, takeLatest, } from 'redux-saga/effects';
import {Actions} from '../action-types'
import IUserAction from "../../interfaces/IUserAction";


import * as to from '../action-creators'
import * as Effects from "redux-saga/effects";
import * as API from './API/user'
import Cookies from 'js-cookie';
import {getCurrentUser} from "../action-creators";



const call: any = Effects.call;

function* SignInWorker(action: IUserAction){
    try {
        yield put(to.setLoading(true))
        const {data, headers} = yield call(API.signIn, action.payload)
        Cookies.set('refresh_token', headers['refresh-token']);
        Cookies.set('access_token', data.access_token);
        {
            const {data} = yield call(API.getUserByToken);
            console.log(data)
            yield put(to.logCurrentUser({username:data.account.username, avatar: data.account.photo, id: data.account.id, color: data.account.image_color}))
            yield call(action.nav, `/profile/${data.account.username}`)
        }
    }catch (error) {
        console.log(error)
        yield call(action.error, false)
    } finally {
        yield put(to.setLoading(false))
    }
}

function* SignUpWorker(action: IUserAction){
    try {
        yield put(to.setLoading(true))
        const {data} = yield call(API.signUp, action.payload);
        yield put(to.logUser(data.user));
    }catch (error) {

    }finally {
        yield put(to.setLoading(false))
    }
}

function* GetUserWorker(action: IUserAction){
    try {
        yield put(to.setLoading(true))
        const {data} = yield call(API.getUser, action.payload);
        yield put(to.logUser({username:data.account.username, avatar: data.account.photo, id: data.account.id, color: data.account.image_color}))
    }catch (error) {
        console.log(error)
    }finally {
        yield put(to.setLoading(false))
    }
}

function* GetCurrentUserWorker(action: IUserAction){
    try {
        yield put(to.setLoading(true))
        const {data} = yield call(API.getUserByToken, action.payload);
        yield put(to.logCurrentUser({username:data.account.username, avatar: data.account.photo, id: data.account.id, color: data.account.image_color}))
    }catch (error: any){
        console.log("Access or refresh just gone. Rest in peace")
        if (error.response.data.status === 'Access token is not valid') {
            Cookies.set('access_token', error.response.data.access_token)
            Cookies.set('refresh_token', error.response.headers['refresh-token'])
            yield put(getCurrentUser(Cookies.get('access_token')))
        }
    }finally {
        yield put(to.setLoading(false))
    }
}

export default function* userWatcher() {
    yield takeLatest(Actions.LOG_USER_API, SignInWorker)
    yield takeLatest(Actions.REG_USER, SignUpWorker)
    yield takeLatest(Actions.GET_USER, GetUserWorker)
    yield takeLatest(Actions.GET_CURRENT_USER, GetCurrentUserWorker)
}
