import React from "react";
import axios from "axios";
import NotFoundPage from "./404page/404";
import {Outlet} from "react-router-dom";

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

  async function handleSubmit() {

    const odgovor = await axios.get("http://localhost:5050/api/user", {
      withCredentials: true,
    });
    console.log(odgovor);
    if (odgovor.data.isadmin === true) {
        setIsAdmin(true);
    } else {
        setIsAdmin(false);
    }
    setIsLoaded(true);
  }

    React.useEffect(() => {
        handleSubmit();
    }
    , []);
  return (
      <>
      {isLoaded ? ( isAdmin ? <Outlet/> : <NotFoundPage/> ) : <div>Loading</div>}
    </>

  );

};

export default AdminPage;
