import IPasswords from "./IPasswords";

export default interface IUserAction{
    type: string,
    payload: IPasswords
}

