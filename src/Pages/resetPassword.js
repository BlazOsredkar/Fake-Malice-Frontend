import React, {useEffect, useState} from "react";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {backendAPIendpoint} from "../App";
import ResetImage from '../assets/resetPass.svg'
import LockIcon from '@mui/icons-material/Lock';
import "../style/resetPassword.css";
import axios from "axios";

const ResetPassword = () => {


    const location = useLocation();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    console.log(token);
    console.log(email);

    async function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const geslo = formData.get("geslo");
        const ponovnoGeslo = formData.get("ponovno-geslo");

        if(geslo === ponovnoGeslo){
            try{
                const response = await axios.post(`${backendAPIendpoint}/user/resetPassword`, {token, geslo, ponovnoGeslo, email}, {withCredentials:true});
                if(response.status === 200){
                    alert("Geslo uspešno spremenjeno!");
                    window.location.href = "/";

                }
            }
            catch (e) {
                alert("Napaka pri spremembi gesla!");
            }
        }
        else{
            alert("Gesli se ne ujemata!");
        }
    }



    return (
        <>
            <div className="reset-pass-page">
                <div className="reset-pass-left">
                    <img src={ResetImage} alt="logo" className="logo"/>
                </div>
                <div className="reset-pass-right">
                    <form onSubmit={handleSubmit} className={"reset-pass-form"}>
                        <p className={"reset-pass-title"}>Ponastavitev gesla</p>
                        <p className="p1">(Geslo mora vsebovati 8 ali več znakov, ki so sestavljeni iz vsaj ene številke ter ene velike in ene male črke)</p>
                        <div className="reset-pass-input">
                            <LockIcon />
                            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="input inputPassword" name="geslo" placeholder="Geslo" required/>
                        </div>
                        <div className="reset-pass-input">
                            <LockIcon />
                            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="input inputPassword" name="ponovno-geslo" placeholder="Ponovno Geslo" required/>
                        </div>
                        <input className="button" type="submit"  value="Potrdi"/>
                        <Link to="/" className="PozabilGeslo">Izhod</Link>
                    </form>
                </div>
            </div>


        </>
    );
}
export default ResetPassword;