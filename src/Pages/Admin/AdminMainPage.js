import {Link, Outlet, Route, Routes} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminCreateUser from "./AdminCreateUser";
import AdminCreateMeni from "./AdminCreateMeni";
import React from "react";

import "../../style/adminMainPage.css";
import AdminAllUsers from "./AdminAllUsers";
import AdminEditUser from "./AdminEditUser";
import AdminAllCities from "./AdminAllCities";
import AdminAllClasses from "./AdminAllClasses";
import AdminAllSchools from "./AdminAllSchools";

const AdminMainPage = () => {


    return (
        <div className={"admin-main-page"}>

            <AdminSidebar />
            <Routes path="/admin">
                <Route path="/createUser" element={<AdminCreateUser/>} />
                <Route path="/createMeni" element={<AdminCreateMeni/>} />
                <Route path="/allUsers" element={<AdminAllUsers/>} />
                <Route path="/editUser/:id" element={<AdminEditUser/>} />
                <Route path="/allCities" element={<AdminAllCities/>}  />
                <Route path="/allClasses" element={<AdminAllClasses/>}  />
                <Route path="/allSchools" element={<AdminAllSchools/>} />
            </Routes>
        </div>
    )



}

export default AdminMainPage
