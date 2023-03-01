import React, {useEffect, useState} from "react";
import "../style/upperMenu.css";
import logo from "../assets/school_logo.png";
import logoutIcon from "../assets/logoutIcon.png";
import {Link} from "react-router-dom";
import {selectUser} from "../auth/userSlice";
import {useSelector} from "react-redux";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from "axios";
import {backendAPIendpoint} from "../App";



const GlavniMeni = () => {



  const user = useSelector(selectUser);

  return (
    <>
      <div className="wrapper">
        <header>
          <nav>
            <div className="menu">
              <ul>
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo" className="logoMenu" />
                  </Link>
                </div>
                <li>
                  <Link to={""} style={{ cursor:'default', color: user.stanjerac <= 5 ? '#FF7D7D' : 'lightgreen' }}
                        title={user.stanjerac <= 5 ? 'Prenizko stanje' : 'Razpoložljivo stanje'} >
                    Stanje: {user.stanjerac} €
                  </Link>
                </li>

                <li>
                  <Link to="/">Domov</Link>
                </li>
                <li>
                  <Link to="/profil">Profil</Link>
                </li>

                {user?.isadmin ? <li>
                    <Link to="/admin">Admin</Link>
                </li> : <></>}
                <div className="profile">
                  <Link to="/logout">
                    <ExitToAppIcon />
                  </Link>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default GlavniMeni;
