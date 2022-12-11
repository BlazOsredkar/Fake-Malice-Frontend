import "./App.css";
import React from "react";
import "./style/homestyle.css";
import Logout from "./components/logout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Pages/home";
import RequireAuth from "./app/RequireAuth";
import Loading from "./components/loading";
import NotFoundPage from "./Pages/404page/404";
import AdminPage from "./Pages/adminPage";
import ForgotPassword from "./Pages/forgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/admin" element={<AdminPage />} >
            <Route path="/admin/" element={<div>Admin</div>} />
        </Route>
          <Route path="/forgotPassword" element={<ForgotPassword/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
