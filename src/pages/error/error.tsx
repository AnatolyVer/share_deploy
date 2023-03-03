import React from 'react';
import Header from '../../components/layouts/header/header';
import Footer from '../../components/layouts/Footer/footer'

const Error = () => {
    return (
        <div className="Body">
            <Header/>
            <div className="Main flex jc-center ai-center">
                <h1>Error page</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Error;