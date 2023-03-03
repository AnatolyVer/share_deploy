import React from 'react';
import Logo from "../../UI/logo/logo";
import Select from "../../UI/select/select";
import {TFunction} from "i18next";
import {Link} from "react-router-dom";

interface ILanguage{
    code: string,
    lang: string
}
interface IAuthorizedHeader{
    l: Array<ILanguage>,
    changeLanguage: (event: React.MouseEvent<HTMLElement>) => void,
    t: TFunction<"translation", undefined, "translation">
}

const Unauthorized = ({t, l, changeLanguage} : IAuthorizedHeader) => {
    return (
        <header>
            <div className="wrapper">
                <Logo>ShareWise</Logo>
                <div className="header__right">
                    <nav className="header__nav">
                        <Link className="header_nav-btn" to="/sign_in">{t('sign_in')}</Link>
                        <Link className="header_nav-btn" to="/sign_up">{t('sign_up')}</Link>
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

export default Unauthorized;