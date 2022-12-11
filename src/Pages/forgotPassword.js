import React, {useState} from "react";
import axios from "axios";
import {store} from "../app/store";
import {setUserLoading, userLogin} from "../auth/userSlice";

const ForgotPassword = () => {
    //check if mail exists in database
    const [eposta, setEmail] = useState("");
    const [emailExists, setEmailExists] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const eposta = formData.get("eposta");
        try {
            const response = await axios.post('http://localhost:5050/api/forgotPassword', {eposta}, {withCredentials:true})
            if(response.status === 200){
                setEmailExists(true);
            }
        }
        catch (e) {
            setEmailExists(false);
        }

    }


    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
                <input type="submit" value="Pošlji"/>
            </form>
            {emailExists ? <p>Na vaš email smo poslali povezavo za ponastavitev gesla.</p> : <p>Email ne obstaja.</p>}

        </div>


    )


}


export default ForgotPassword