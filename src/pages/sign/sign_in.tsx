import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from "react-i18next";

import Header from "../../components/layouts/header/header";
import Footer from '../../components/layouts/Footer/footer'
import Input from "../../components/UI/input/input";

import * as action from '../../redux/action-creators'

import ILogin from "../../interfaces/ILogin";

import './login.scss'
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
const SignIn = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [regUser, setRegUser] = useState<ILogin>({username_or_email: "", password: ""})
    const [error, setError] = useState(true)

    const changeError = (error: boolean) => {
        setError(error)
    }

    const changeLogin = (event: React.ChangeEvent<HTMLInputElement> ):void => setRegUser({...regUser, username_or_email: event.target.value})

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>):void => setRegUser({...regUser, password: event.target.value})

    return (
        <div className="Body" onClick={() => changeError(true)}>
            <Header authorized={Cookies.get('access_token') !== undefined}/>
            <div className="Main column flex jc-center ai-center">

                <div className="MyLoginForm">
                    <div hidden={error}><h3 className="Message">Wrong login or password</h3></div>
                    <div className="Inputs">
                        <Input key="1" type="email" value={regUser.username_or_email} placeholder={t('email or nickname')} onChange={changeLogin}/>
                        <Input key="2" type="password" value={regUser.password} placeholder={t('password')} onChange={changePassword} />
                    </div>
                    <button className="FormButton" onClick={() => dispatch(action.logUserAPI(regUser, nav, changeError))}>{t('confirm')}</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignIn;
