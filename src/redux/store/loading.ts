import IAction from "../../interfaces/IUserAction";
import { Actions } from "../action-types";

const loading : boolean = false

export const loadingReducer = (state = loading, action: IAction) => {
    switch (action.type){
        case Actions.SET_LOADING:
            return action.payload
        default:
            return state
    }
}
