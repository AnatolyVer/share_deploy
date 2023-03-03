import React, {useEffect} from "react"
import {useTranslation} from "react-i18next";


import Unauthorized from "./unautorized";
import Authorized from "./Authorized";
import {useSelector} from "react-redux";
import { State } from "../../../redux/store";

import './header.scss'

function Header({authorized} :{authorized: boolean}) {

    const {t, i18n} = useTranslation()

    const lang = [{code:'GB', lang:"EN"}, {code:'UA', lang:"UA"}, {code:'RU', lang:"RU"}]

    const currentUser = useSelector((state: State) => state.currentUser)

    useEffect(() => {
        !localStorage.getItem('lang') ? localStorage.setItem("lang", "EN") :
        i18n.changeLanguage(localStorage.getItem('lang') || "EN").then()
    }, [i18n])
    const changeLanguage = (event: React.MouseEvent<HTMLElement>):void =>{
        i18n.changeLanguage(event.currentTarget.id).then()
        localStorage.setItem("lang", event.currentTarget.id)
    }


    return (authorized ? <Authorized l={lang} changeLanguage={changeLanguage} t={t} currentUser={currentUser}/> : <Unauthorized l={lang} changeLanguage={changeLanguage} t={t}/>);
}
export default Header;
