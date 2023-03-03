import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";

import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {regAllowReducer} from "./regAllowReducer";
import {currentUser} from "./currentUser";
import {loadingReducer} from "./loading";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    currentUser:currentUser,
    allowReg: regAllowReducer,
    loading:loadingReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type State = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)

