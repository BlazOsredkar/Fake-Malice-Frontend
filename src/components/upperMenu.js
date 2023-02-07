import React from "react";
import "../style/upperMenu.css";
import logo from "../assets/school_logo.png";
import logoutIcon from "../assets/logoutIcon.png";
import {Link} from "react-router-dom";
import {selectUser} from "../auth/userSlice";
import {useSelector} from "react-redux";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const options = [
  { value: "chocolate", label: "Profil" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
