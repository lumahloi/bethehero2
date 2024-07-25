import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Logon from "./pages/Logon/Logon";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NewIncident from "./pages/NewIncident/NewIncident";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/incidents/new" element={<NewIncident/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas