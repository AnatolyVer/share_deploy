import React from 'react';
import IInput from "../../../interfaces/IInput";

import './input.scss'

const Input = ({value, border, placeholder, onChange, type} :IInput) => {

    return (
        <div className="form-floating">
            <input className={`form-control ${border}`} type={type} id={placeholder} placeholder={placeholder} value={value} onChange={onChange}/>
            <label htmlFor={placeholder}>{placeholder}</label>
        </div>
    );
};

export default Input;