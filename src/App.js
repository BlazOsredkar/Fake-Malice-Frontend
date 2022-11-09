import './App.css';
import React  from "react";
import "./style/homestyle.css";
import Login from "./components/login";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Homepage from "./components/home";
import RequireAuth from "./app/RequireAuth";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RequireAuth/>} >
                <Route path="/" element={<Homepage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
