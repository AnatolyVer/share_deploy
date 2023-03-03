import { put, takeLatest, } from 'redux-saga/effects';
import {Actions} from '../action-types'
import * as Effects from "redux-saga/effects";
import IPasswordAction from '../../interfaces/IPasswordAction';
import {setAllowPassword} from "../action-creators";

const call: any = Effects.call;


function* checkPasswordsWorker(data: IPasswordAction) {
    console.log("checking")
    const  {password, confirmPassword} = data.payload
    let color
    if (password.length === 0 || confirmPassword.length === 0) color = "gray"
    else if (password.length >=8 && password === confirmPassword) color = "green"
    else color = "red"
    console.log(color, password, confirmPassword)
    yield put(setAllowPassword(color))
}
export default function* regWatcher() {
    yield takeLatest(Actions.CHECK_PASSWORDS, checkPasswordsWorker)
}