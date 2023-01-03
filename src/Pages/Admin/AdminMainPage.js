import {Link, Outlet, Route, Routes} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminCreateUser from "./AdminCreateUser";
import AdminCreateMeni from "./AdminCreateMeni";
import React from "react";

import "../../style/adminMainPage.css";

const AdminMainPage = () => {


    return (
        <div className={"admin-main-page"}>

            <AdminSidebar />
            <Routes path="/admin">
                <Route path="/createUser" element={<AdminCreateUser/>} />
                <Route path="/createMeni" element={<AdminCreateMeni/>} />
            </Routes>
        </div>
    )



}

export default AdminMainPage
