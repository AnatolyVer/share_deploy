import React, {useEffect} from "react"
import {useTranslation} from "react-i18next";

import Logo from "../../UI/logo/logo";

import IProps from "../../../interfaces/IProps";

import "./header.scss"
import Select from "../../UI/select/select";


function Header({children} :IProps) {

    const {i18n} = useTranslation()

    useEffect(() => {
        !localStorage.getItem('lang') ? localStorage.setItem("lang", "EN") :
        i18n.changeLanguage(localStorage.getItem('lang') || "EN").then()
    }, [i18n])
    const changeLanguage = (event: React.MouseEvent<HTMLElement>):void =>{
       i18n.changeLanguage(event.currentTarget.id).then()
       localStorage.setItem("lang", event.currentTarget.id)
    }

    const lang = [{code:'GB', lang:"EN"}, {code:'UA', lang:"UA"}, {code:'RU', lang:"RU"}]


    return (
        <header>
            <div className="wrapper">
                <Logo>ShareWise</Logo>
                <div className="header__right">
                    <nav className="header__nav">
                        {children}
                    </nav>
                    <Select defaultValue={localStorage.getItem('lang') || "EN"}>
                        {lang.map(l => <label className="option" onClick={changeLanguage} key={l.lang} id={l.lang}>
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
}
export default Header;
