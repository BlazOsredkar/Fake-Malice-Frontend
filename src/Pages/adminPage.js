import React from "react";
import axios from "axios";
import ScvLogo from "../style/school_logo.png";
import { store } from "../app/store";
import { setUserLoading, userLogin } from "../auth/userSlice";
import { useDispatch } from "react-redux";

const AdminPage = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    const odgovor = await axios.get("http://localhost:5050/api/user", {
      withCredentials: true,
    });
    if (odgovor.data.isadmin === true) {
      alert("Da");
    } else {
      alert("You are not an admin!");
    }
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Only Admins can see this page</p>
    </div>
  );
};

export default AdminPage;
