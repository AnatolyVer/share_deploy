import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";


import UserCard from "./UserCard/UserCard";

import Header from "../../components/layouts/header/header";
import Footer from '../../components/layouts/Footer/footer'
import { State } from "../../redux/store";
import * as action from '../../redux/action-creators'
import {useTranslation} from "react-i18next";
import Posts from "./Posts/Posts";
import IUser from "../../interfaces/IUser";
import Cookies from "js-cookie";
function Profile() {

    const dispatch = useDispatch()
    const user:IUser = useSelector((state:State) => state.user)
    const loading = useSelector((state:State) => state.loading)
    useSelector((state:State) => state.currentUser);
    const {nickname} = useParams()
    let profile

    const {t} = useTranslation()

    useEffect(() => {
        dispatch(action.getUser(nickname))
    }, [nickname, dispatch])



    if (loading) {
        profile =
            <div className="Main flex jc-center ai-center">
             Loading
            </div>
    }
    else {
        if (user) {
            profile = (<div className="Main flex jc-sb ai-center">
                <UserCard user={user}/>
                <Posts/>
            </div>)

        }
        else {
            profile = <div className="Main flex jc-center ai-center">
                <h1>{t('no_user')}</h1>
            </div>
        }
    }

    return (
        <div className="Body">
            <Header authorized={Cookies.get('access_token')  !== undefined}/>
            {profile}
            <Footer/>
        </div>
    );
}

export default Profile;
