import React from 'react';
import {useTranslation} from "react-i18next";

import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/Footer/footer'
import {useSelector} from "react-redux";
import {State} from "../../redux/store";
import Cookies from 'js-cookie';

const Main = () => {

    const {t} = useTranslation()

    const loading = useSelector((state:State) => state.loading)
    let page

        if (loading){
            page = <div className="Body flex jc-center ai-center">Loading...</div>
        }else {
            page = (<div className="Body">
                <Header authorized={Cookies.get('access_token')  !== undefined}/>
                <div className="Main flex jc-center ai-center">
                    <h1> {t('welcome') }</h1>
                </div>
                <Footer/>
            </div>)
        }



    return (page);
};

export default Main;