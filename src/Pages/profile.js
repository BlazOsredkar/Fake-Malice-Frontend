import GlavniMeni from "../components/upperMenu";
import {useSelector} from "react-redux";
import {selectUser} from "../auth/userSlice";
import React from 'react';



const Profile = () => {
    const user = useSelector(selectUser);


    return (
        <>
        <GlavniMeni />
        <div className={"main"}>
            <div className={"profile-left"}>
                <p>Ime:</p>
                <p>Priimek:</p>
                <p>Email:</p>
                <p>Status Profila:</p>
                <p>EMŠO:</p>
                <p>Telefonska številka:</p>
                <p>Naslov bivanja: </p>
                <p>Kraj: </p>
                <p>Poštna številka: </p>
                <p>Datum rojstva: </p>
                <p>Razred: </p>

            </div>

            <div className={"profile-right"}>
                <p>Profil</p>
                <p>{user.ime}</p>
                <p>{user.priimek}</p>
                <p>{user.email}</p>
                <p>{user.isadmin ? "Admin" : "User"}</p>
                <p>{user.emso}</p>
                <p>{user.telefon}</p>
                <p>{user.naslov}</p>
                <p>{user.kraj}</p>
                <p>{user.postnaStevilka}</p>
                <p>{user.datumroj}</p>
                <p>{user.razred}</p>

        </div>
        </div>
        </>
    );


}

export default Profile;