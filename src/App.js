import './App.css';
import React  from "react";
import "./style/homestyle.css";
import Logout from "./components/logout";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Homepage from "./components/home";
import RequireAuth from "./app/RequireAuth";
import Loading from "./components/loading";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RequireAuth/>} >
                <Route path="/" element={<Homepage/>}/>
            </Route>
            <Route path="*" element={<p>404</p>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/loading" element={<Loading/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
