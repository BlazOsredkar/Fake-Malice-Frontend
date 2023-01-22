import React, {useState} from "react";
import axios from "axios";
import ScvLogo from "../style/school_logo.png";
import {backendAPIendpoint} from "../App";

const ForgotPassword = () => {
    //check if mail exists in database
    //{emailExists ? <p>Na vaš email smo poslali povezavo za ponastavitev gesla.</p> : <p>Email ne obstaja.</p>}
    // This code is used to check if the email that the user entered already exists in the database.
// If it does, then the user will be notified that the email exists already.
// It will then show the user the login page, where he/she can login with the existing email.
// It will also check if the user is logged in. If the user is logged in, then the user will be redirected to the home page.
// If the user is not logged in, then the user will be redirected to the login page.

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
            <div className="App">
                <img src={ScvLogo} alt="logo" className="logo"/>
                <form onSubmit={handleSubmit}>
                    {/*Email*/}
                    <p>Email</p>
                    <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
                    <input type="submit" className="submit" value="Pošlji"/>
                </form>
            </div>
        </>


    );


}


export default ForgotPassword