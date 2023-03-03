import ILogin from "./ILogin";
import IReg from "./IReg";

export default interface IUserAction{
    type: string,
    payload: ILogin | IReg,
    nav?: (link: string) => void,
    error?: (error: boolean) => void
    loading?: (loading: boolean) => void
}

