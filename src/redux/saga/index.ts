
import {all} from "redux-saga/effects"
import userWatcher from "./userSaga";
import regWatcher from "./passwordSaga";

export function* rootWatcher(){
    yield all([userWatcher(), regWatcher()])
}
