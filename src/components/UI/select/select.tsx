import React, { ReactNode, useState } from 'react';
import './select.scss'
const Select = ({children, defaultValue} : { children: ReactNode[], defaultValue: string}) => {

    const [visible, setVisible] = useState(true)

    const changeVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className="select">
            <label onClick={changeVisible} className="label"> <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${defaultValue === "EN"? 'gb': defaultValue.toLowerCase()}.png`}
                alt={`Flag of ${defaultValue}`}
            />{defaultValue}</label>
            <div hidden={visible} onClick={changeVisible} className="options">
                {children}
            </div>
        </div>
    );
};

export default Select;