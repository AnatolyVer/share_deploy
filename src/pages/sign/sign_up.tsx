import React, {Key, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Header from "../../components/layouts/header/header";
import Footer from '../../components/layouts/Footer/footer'
import Input from '../../components/UI/input/input'

import * as action from '../../redux/action-creators'

import {State} from "../../redux/store";
import IReg from '../../interfaces/IReg';

import IAllow from "../../interfaces/IAllow";
import userImg from './img/user.jpg'

import cross from './img/close.jpg'
import './login.scss'
const SignUp = () => {



    const {t} = useTranslation()
    const dispatch = useDispatch()

    const allowReg:IAllow = useSelector((state:State) => state.allowReg)

    const [regUser, setRegUser] = useState<IReg>({
        email: "",
        username: "",
        password: "",
        password2: ""
    })

    const [avatar, setAvatar] = useState<File | null>()

    const {email, username, password, password2 } = regUser
    const [photo, setPhoto] = useState(userImg)
    const [key, setKey] = useState<Key>(Date.now())

    const changeLogin = (event: React.ChangeEvent<HTMLInputElement>):void=> {
        setRegUser({...regUser, email: event.target.value})
        action.checkLogin(event.target.value)
    }
    const changePassword = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setRegUser({...regUser, password: event.target.value})
        dispatch(action.checkPasswords({ password: event.target.value, confirmPassword: password2}))
    }
    const changeNickname = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setRegUser({...regUser, username: event.target.value})
        action.checkNickname(event.target.value)
    }
    const changeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setRegUser({...regUser, password2: event.target.value})
        dispatch(action.checkPasswords({password, confirmPassword: event.target.value}))
    }
    const addUser = () => {
        dispatch(action.regUserAPI(regUser))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>):void => {

        const reader = new FileReader();
        let file = e.target.files?.item(0)
        if (file){
            setAvatar(file)
            reader.onloadend = () => {
                setPhoto(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const setDefaultPhoto = () => {
        setPhoto(userImg)
        setAvatar(null)
        setKey(Date.now())
    }

    const defaultButton = avatar?.name !== undefined ? <img className="cross" onClick={setDefaultPhoto} src={cross} alt="Avatar"></img> : <button hidden>x</button>

    return (
        <div className="Body">
            <Header/>
            <div className="Main flex jc-center ai-center">
                <div className="MyLoginForm">
                    <div className="AvatarForm">
                        <label htmlFor="avatar"><img className="Avatar" src={photo} alt=""/></label>
                        <input hidden key={key} type="file" id="avatar" name="avatar" onChange={(e)=> handleImageChange(e)} />
                        {defaultButton}
                    </div>
                    <Input key="1" border={allowReg.emailBorderColor} type="email" value={email} placeholder={t('email')} onChange={changeLogin}/>
                    <Input key="4" border={allowReg.usernameBorderColor} type="text" value={username} placeholder={t('nickname')} onChange={changeNickname}/>
                    <Input key="5" border={allowReg.passwordBorderColor} type="password" value={password} placeholder={t('password')} onChange={changePassword}/>
                    <Input key="6" border={allowReg.passwordBorderColor} type="password" value={password2} placeholder={t('confirmPassword')} onChange={changeConfirmPassword}/>
                    <button className={allowReg.allow ? "FormButton" : "FormButton Disabled"} disabled={allowReg.allow} onClick={addUser}>{t('confirm')}</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignUp;