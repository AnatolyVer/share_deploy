import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/main/main";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/error/error";
import {State} from "./redux/store";
import IUser from "./interfaces/IUser";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "./redux/action-creators";
import Cookies from "js-cookie";
import SignIn from "./pages/sign/sign_in";
import SignUp from "./pages/sign/sign_up";

function App() {

    const currentUser:IUser = useSelector((state:State) => state.currentUser)
    const dispatch = useDispatch()


    useEffect(() => {
      if (Cookies.get('refresh_token') && currentUser === null) {
          dispatch(getCurrentUser(Cookies.get('access_token')!))
        }
    }, [currentUser, dispatch])


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Navigate to="/main" replace />} />
                <Route path="/*" element={<Navigate to="/error" replace />} />
                <Route path="/main" element={<Main/>}/>
                <Route path="/sign_in" element={<SignIn/>}/>
                <Route path="/sign_up" element={<SignUp/>}/>
                <Route path="/profile/:nickname" element={<Profile/>} />
                <Route path="/leave" element={<Navigate to="/main" replace />} />
                <Route path="/error" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
