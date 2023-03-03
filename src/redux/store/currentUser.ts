import IUser from "../../interfaces/IUser";
import Action from "../../interfaces/IUserAction";

import {Actions} from "../action-types";

const defaultUser : IUser | null = null

export const currentUser = (state = defaultUser, action: Action) => {
    switch (action.type){
        case Actions.LOG_CURRENT_USER:
            return action.payload
        case Actions.CLEAR_CURRENT_USER:
            return defaultUser
        default:
            return state
    }
}
