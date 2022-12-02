import React from "react";
import "../style/upperMenu.css";
import logo from "../assets/school_logo.png"

const options = [
    { value: 'chocolate', label: 'Profil' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const GlavniMeni = () => {

    

    return (
      /*         <div className="upperMenu">
            <div className="upperMenuLeft">
                <div className="upperMenuLeftItem">
                    <a href="/">Domov</a>
                </div>
                <div className="upperMenuLeftItem">
                    <a href="/logout">Odjava</a>
                </div>
            </div>
            <div className="upperMenuRight">
                <div className="upperMenuRightItem">
                    <a href="/profil">Profil</a>
                </div>
                <div className="upperMenuRightItem">
                    <a href="/profil">Nastavitve</a>
                </div>
            </div>
        </div> */

    

      <div className="wrapper">
        <header>
          <nav>
            <div className="menu">
              <ul>
                <div className="logo">
                  <a href="/">
                    <img
                      src={logo}
                      alt="logo"
                      className="logoMenu"
                    />
                  </a>
                </div>
                <li>
                  <a href="/">Domov</a>
                </li>
                <li>
                  <a href="/profil">Profil</a>
                </li>
                <li>
                  <a href="/profil">Nastavitve</a>
                </li>
                <li>
                  <a href="/logout">Odjava</a>
                </li>
                <div className="profile">
                  <a href="/profile">
                    <img
                      src="https://i.imgur.com/YcP0tik.jpeg"
                      alt="profile"
                      className="profilepic"
                    />
                  </a>
                </div>
                
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );



}

export default GlavniMeni;