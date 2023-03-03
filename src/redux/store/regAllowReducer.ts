import IAction from "../../interfaces/IUserAction";

import IAllow from "../../interfaces/IAllow";

import {Actions} from "../action-types";

const defaultAllow = {
    emailBorderColor: "gray",
    usernameBorderColor: "gray",
    passwordBorderColor: "gray",
    allow: false
}
export const regAllowReducer = (state :IAllow = defaultAllow, action: IAction) => {
    switch (action.type){
        case Actions.SET_ALLOW_LOGIN:
            return {...state, emailBorderColor: action.payload}
        case Actions.DROP_ALLOW_LOGIN:
            return {...state, emailBorderColor: "gray"}
        case Actions.SET_ALLOW_NICKNAME:
            return {...state, usernameBorderColor: action.payload}
        case Actions.DROP_ALLOW_NICKNAME:
            return {...state, usernameBorderColor: "gray"}
        case Actions.SET_ALLOW_PASSWORD:
            return {...state, passwordBorderColor: action.payload}
        case Actions.DROP_ALLOW_PASSWORD:
            return {...state, passwordBorderColor: "gray"}
        case Actions.DROP_ALL:
            return defaultAllow
        default:
            return state
    }
}
