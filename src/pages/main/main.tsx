import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/Footer/footer'
import {Avatar} from "@mui/material";
import userImg from "../sign/img/user.jpg";
import IUser from "../../interfaces/IUser";
import {useSelector} from "react-redux";
import {State} from "../../redux/store";
import Cookies from 'js-cookie';

const Main = () => {

    const {t} = useTranslation()

    const loading = useSelector((state:State) => state.loading)
    const user:IUser = useSelector((state:State) => state.user)
    const currentUser:IUser = useSelector((state:State) => state.currentUser)

    let page

        if (loading){
            page = <div className="Body flex jc-center ai-center">Loading...</div>
        }else {
            const unauthorized = <Header>
                <Link className="header_nav-btn" to="/sign_in">{t('sign_in')}</Link>
                <Link className="header_nav-btn" to="/sign_up">{t('sign_up')}</Link>
            </Header>
            const authorized = <Header>
                {currentUser ? (
                    <Link to={`/profile/${currentUser?.username}`}>
                        <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={currentUser?.avatar ? `https://training-django.onrender.com${currentUser?.avatar}` : userImg} />
                    </Link>) : (<div hidden></div>)}
            </Header>
            page = (<div className="Body">
                {Cookies.get('access_token') ? authorized : unauthorized}
                <div className="Main flex jc-center ai-center">
                    <h1> {t('welcome') }</h1>
                </div>
                <Footer/>
            </div>)
        }



    return (page);
};

export default Main;