import React, {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/main/main";
import Sign_in from "./pages/sign/sign_in";
import Sign_up from "./pages/sign/sign_up";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/error/error";
import {State} from "./redux/store";
import IUser from "./interfaces/IUser";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "./redux/action-creators";
import Cookies from "js-cookie";

function App() {

    const currentUser:IUser = useSelector((state:State) => state.currentUser)
    const dispatch = useDispatch()


    useEffect(() => {
      if (Cookies.get('refresh_token') && currentUser === null) {
            dispatch(getCurrentUser(Cookies.get('access_token')!))
        }
    }, [])


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<Main/>}/>
                <Route path="/sign_in" element={<Sign_in/>}/>
                <Route path="/sign_up" element={<Sign_up/>}/>
                <Route path="/leave" element={<Navigate to="/main" replace />} />
                <Route path="/*" element={<Navigate to="/error" replace />} />
                <Route path="/error" element={<Error/>} />
                <Route path="/*" element={<Navigate to="/error" replace />} />
                <Route path="/profile/:nickname" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
