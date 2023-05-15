import "./App.css";
import React from "react";
import "./style/loginPage.css";
import Logout from "./components/logout";
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import Homepage from "./Pages/home";
import RequireAuth from "./app/RequireAuth";
import Loading from "./components/loading";
import NotFoundPage from "./Pages/404page/404";
import AdminChecker from "./Pages/Admin/adminChecker";
import ForgotPassword from "./Pages/forgotPassword";
import AdminMainPage from "./Pages/Admin/AdminMainPage";
import ResetPassword from "./Pages/resetPassword";
import Profile from "./Pages/profile";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";



//const backendAPIendpoint = "http://localhost:5050/api";
const backendAPIendpoint = "https://backend.malice.vrtogo.si/api";

export { backendAPIendpoint };



function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/api/*" element={<Loading/>}/>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/profil" element={<Profile />}/>
          <Route path="/admin" element={<AdminChecker />} >
            <Route path="" element={<Navigate to={"/admin/meni/create"} />} />
            <Route path="*" element={<AdminMainPage/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loading" element={<Loading />} />
          <Route path="/password/forgot" element={<ForgotPassword/>} />
        <Route path={"/password/reset"} element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
