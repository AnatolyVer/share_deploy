import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


import UserCard from "./UserCard/UserCard";

import Header from "../../components/layouts/header/header";
import Footer from '../../components/layouts/Footer/footer'
import { State } from "../../redux/store";
import * as action from '../../redux/action-creators'
import {useTranslation} from "react-i18next";
import Posts from "./Posts/Posts";
import IUser from "../../interfaces/IUser";
function Profile() {

    const dispatch = useDispatch()
    const user:IUser = useSelector((state:State) => state.user)
    const currentUser:IUser = useSelector((state:State) => state.currentUser)
    const {nickname} = useParams()
    const [loading, setLoading] = useState(false)
    let profile

    const {t} = useTranslation()

    useEffect(() => {
        dispatch(action.getUser(nickname))
    }, [])



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

    let leave

    if (localStorage.getItem('nickname') === user?.username) {
        leave = (<Link className="header_nav-btn" to="/main"
                       onClick={() => localStorage.removeItem('token')}>{t('leave')}</Link>)
    }
    return (
        <div className="Body">
            <Header>
                {leave}
            </Header>
            {profile}
            <Footer/>
        </div>
    );
}

export default Profile;
