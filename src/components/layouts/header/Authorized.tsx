import React from 'react';

import Logo from "../../UI/logo/logo";
import Select from "../../UI/select/select";
import {Link} from "react-router-dom";
import { TFunction } from 'i18next';import {Avatar} from "@mui/material";
import userImg from "../../../pages/sign/img/user.jpg";
import IUser from "../../../interfaces/IUser";

interface ILanguage{
    code: string,
    lang: string
}
interface IAuthorizedHeader{
    l: Array<ILanguage>,
    changeLanguage: (event: React.MouseEvent<HTMLElement>) => void
    t?: TFunction<"translation", undefined, "translation">
    currentUser:IUser
}

const Authorized = ({l, changeLanguage, currentUser} : IAuthorizedHeader) => {
    return (
        <header>
            <div className="wrapper">
                <Logo>ShareWise</Logo>
                <div className="header__right">
                    <nav className="header__nav">
                        <Link to={`/profile/${currentUser?.username}`}>
                            <Avatar sx={{ width: 40, height: 40 }} alt={currentUser?.username[0]} src={currentUser?.avatar ? `https://training-django.onrender.com${currentUser?.avatar}` : userImg} />
                        </Link>
                    </nav>
                    <Select defaultValue={localStorage.getItem('lang') || "EN"}>
                        {l.map(l => <label className="option" onClick={changeLanguage} key={l.lang} id={l.lang}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${l.code.toLowerCase()}.png`}
                                alt={`Flag of ${l}`}
                            />
                            {l.lang}</label> )  }
                    </Select>
                </div>
            </div>
        </header>
    );
};

export default Authorized;