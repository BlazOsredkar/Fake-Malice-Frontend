import React from "react";
import "../style/upperMenu.css";

const GlavniMeni = () => {

    return (
        <div className="upperMenu">
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
        </div>


    );



}

export default GlavniMeni;