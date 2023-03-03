import {Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import Main from "./pages/main/main";
import Sign_in from "./pages/sign/sign_in";
import Sign_up from "./pages/sign/sign_up";

function Router() {
    return (
        <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/sign_in" element={<Sign_in/>}/>
            <Route path="/sign_up" element={<Sign_up/>}/>
            <Route path="/leave" element={<Navigate to="/main" replace />} />
            <Route path="" element={<Navigate to="/main" replace />} />
            <Route path="/error" element={<div>ERROR</div>} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    );
}

export default Router;
