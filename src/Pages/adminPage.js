import React from "react";
import axios from "axios";
import NotFoundPage from "./404page/404";

const AdminPage = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    const odgovor = await axios.get("http://localhost:5050/api/user", {
      withCredentials: true,
    });
    if (odgovor.data.isadmin === true) {
        return (
            <div>
                <h1>Admin Page</h1>
                <p>Only Admins can see this page</p>
            </div>
        );
    } else {
      return(
          <NotFoundPage/>
        );
    }
  }
  return (
      /*Check if user is admin*/
        <form onSubmit={handleSubmit}>
            <div className="button">
                <input className="submit" type="submit" value="Check if admin" />
            </div>
        </form>
  );
};

export default AdminPage;
