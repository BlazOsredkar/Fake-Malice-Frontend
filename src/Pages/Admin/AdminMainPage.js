import {Link, Outlet, Route, Routes} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminCreateUser from "./AdminCreateUser";
import AdminCreateMeni from "./AdminCreateMeni";
import React from "react";

import "../../style/Admin/adminMainPage.css";
import AdminAllUsers from "./AdminAllUsers";
import AdminEditUser from "./AdminEditUser";
import AdminAllCities from "./AdminAllCities";
import AdminAllClasses from "./AdminAllClasses";
import AdminAllSchools from "./AdminAllSchools";
import AdminEditSchool from "./AdminEditSchool";

const AdminMainPage = () => {


    return (
        <div className={"admin-main-page"}>

            <AdminSidebar />
            <Routes path="/admin">
                <Route path="/user/create" element={<AdminCreateUser/>} />
                <Route path="/meni/create" element={<AdminCreateMeni/>} />
                <Route path="/user/all" element={<AdminAllUsers/>} />
                <Route path="/user/edit/:id" element={<AdminEditUser/>} />
                <Route path="/school/update/:id" element={<AdminEditSchool/>} />
                <Route path="/city/all" element={<AdminAllCities/>}  />
                <Route path="/class/all" element={<AdminAllClasses/>}  />
                <Route path="/school/all" element={<AdminAllSchools/>} />
            </Routes>
        </div>
    )



}

export default AdminMainPage
