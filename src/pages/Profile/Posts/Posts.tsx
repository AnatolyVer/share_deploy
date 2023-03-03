import React from 'react';
import  "./Posts.scss";
import {useTranslation} from "react-i18next";

const Posts = () => {

    const {t} = useTranslation()

    if (0 === 0) return (<div className="PostBar"><h1>{t('no_posts')}</h1></div>)

    return (<div className="PostBar">
                <h1>Posts:</h1>
                    <div className="PostList">
                    </div>
                </div>
      );
};

export default Posts;