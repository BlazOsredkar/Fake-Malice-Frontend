import React from "react";
import axios from "axios";
import NotFoundPage from "../404page/404";
import {Outlet} from "react-router-dom";
import {backendAPIendpoint} from "../../App";
import {useSelector} from "react-redux";


import {selectUser, selectUserLoading} from "../../auth/userSlice";

const AdminChecker = () => {
    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);

  return (
      <>
      {!loading ? ( user.isadmin ? <Outlet/> : <NotFoundPage/> ) : <div>Loading</div>}
    </>

  );

};

export default AdminChecker;
