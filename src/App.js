import "./App.css";
import React from "react";
import "./style/loginPage.css";
import Logout from "./components/logout";
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import Homepage from "./Pages/home";
import RequireAuth from "./app/RequireAuth";
import Loading from "./components/loading";
import NotFoundPage from "./Pages/404page/404";
import AdminChecker from "./Pages/adminChecker";
import ForgotPassword from "./Pages/forgotPassword";
import AdminMainPage from "./Pages/Admin/AdminMainPage";
import AdminCreateUser from "./Pages/Admin/AdminCreateUser";
import AdminCreateMeni from "./Pages/Admin/AdminCreateMeni";
import ResetPassword from "./Pages/resetPassword";
import AdminAllUsers from "./Pages/Admin/AdminAllUsers";


const backendAPIendpoint = "http://localhost:5050/api";
//const backendAPIendpoint = "https://backend.malice.vrtogo.si/api";

export { backendAPIendpoint };



function App() {
  return (
      //ignore /api in url

    <BrowserRouter basename="/">
      <Routes>
        <Route path="/api/*" element={<Loading/>}/>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<AdminChecker />} >
            <Route path="" element={<Navigate to={"/admin/createMeni"} />} />
            <Route path="*" element={<AdminMainPage/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loading" element={<Loading />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path={"/reset-password"} element={<ResetPassword/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
