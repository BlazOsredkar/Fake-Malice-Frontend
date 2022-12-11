import React, {useState} from "react";
import axios from "axios";
import ScvLogo from "../style/school_logo.png";

const ForgotPassword = () => {
    //check if mail exists in database
    //{emailExists ? <p>Na vaš email smo poslali povezavo za ponastavitev gesla.</p> : <p>Email ne obstaja.</p>}
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
                    <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
                    <input type="submit" className="submit" value="Pošlji"/>
                </form>



            </div>

        </>


    );


}


export default ForgotPassword