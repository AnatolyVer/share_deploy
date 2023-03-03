import React, {useEffect, useState} from 'react';
import './UserCard.scss'
import userImg from '../../sign/img/user.jpg'
import IUser from "../../../interfaces/IUser";
import img from '../img/black.jpg'
import {FastAverageColor} from "fast-average-color";

const UserCard = ({user}: {user: IUser}) => {

    const ava = user.avatar ? `https://training-django.onrender.com${user.avatar}`: userImg

    const [color, setColor] = useState<string>()

    useEffect(() => {
        const fac = new FastAverageColor()
        fac.getColorAsync(ava).then((col) => {
            setColor(col.hex)
        })
    }, [])


    return (
        <div className="UserCard">
            <img style={{ backgroundColor: color}} className="Background" src={undefined} alt=""/>
            <img className="Avatar" src={ava} alt=""/>
            <div className="User">
                <div className="UserInfo">
                    <div><p>{user.username}</p></div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;