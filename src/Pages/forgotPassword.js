import React, {useState} from "react";
import axios from "axios";
import ScvLogo from "../style/school_logo.png";
import {backendAPIendpoint} from "../App";
import "../style/forgotPassword.css";
import LogoImageForgotPassword from '../assets/LogoImageForgotPassword.svg'
import {Link} from "react-router-dom";

const ForgotPassword = () => {

const [eposta, setEmail] = useState("");
    const [emailExists, setEmailExists] = useState(false);
    let [userLoggedIn, setUserLoggedIn] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const eposta = formData.get("eposta");
        try {
            const response = await axios.post(`${backendAPIendpoint}/user/forgotPassword`, {eposta}, {withCredentials:true})
            if(response.status === 200){
                setEmailExists(true);
                alert("Na vaš email smo poslali povezavo za ponastavitev gesla.");
            }
        }
        catch (e) {
            setEmailExists(false);
            alert("Uporabnik s tem emailom ne obstaja.");
        }




    }


    return(
        <>
            <div className="forgot-password-page">
                <div className="forgot-password-left">
                    <img className="logo" src={LogoImageForgotPassword} alt="Logo"></img>
                </div>
                <div className="forgot-password-right">
                    <form className="forgot-password-form" onSubmit={handleSubmit}>
                        <h2 className="forgot-password-form-title">Pozabljeno geslo</h2>
                        <div className="forgot-password-form-input">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                            <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
                        </div>
                        <button className="button" >Ponastavi geslo</button>
                        <Link to="/" className="Nazaj">Nazaj</Link>
                    </form>
                </div>
            </div>
        </>


    );


}


export default ForgotPassword