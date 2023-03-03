import React from 'react';
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/Footer/footer'
import Cookies from "js-cookie";

const Error = () => {
    return (
        <div className="Body">
            <Header authorized={Cookies.get('access_token')  !== undefined}/>
            <div className="Main flex jc-center ai-center">
                <h1>Error page</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Error;