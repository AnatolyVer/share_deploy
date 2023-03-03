import React from 'react';
import { Link } from 'react-router-dom';

import IProps from '../../../interfaces/IProps';

import "./logo.scss"


const Logo = ({children} :IProps) => {

    return (
        <span>
             <Link className="logo" to="/main">
                 {children}
             </Link>
        </span>
    );
};

export default Logo;