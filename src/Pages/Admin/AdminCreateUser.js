import axios from "axios";
import {useState} from "react";
import {backendAPIendpoint} from "../../App";

import "../../style/adminCreateUser.css";


const AdminCreateUser = () => {

    const [user, setUser] = useState({
        ime: '',
        priimek: '',
        eposta: '',
        geslo: '',
        emso: '',
        davcna: '',
        datumroj: '',
        telefon: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${backendAPIendpoint}/register`, user, {withCredentials: true})
            .then(res => {
            console.log(res);
            console.log(res.data);
            alert("Uporabnik uspešno ustvarjen")

            setUser({
                ime: '',
                priimek: '',
                eposta: '',
                geslo: '',
                emso: '',
                davcna: '',
                datumroj: '',
                telefon: '',
            })

        })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
            })
    };

    return (
        <div className={"admin-create-user"}>
            <div className={"admin-create-user-form"}>
             <form onSubmit={handleSubmit}>
                <label>Ime</label>
                <input type="text" name="ime" value={user.ime} onChange={handleChange} required/>
                <label>Priimek</label>
                <input type="text" name="priimek" value={user.priimek} onChange={handleChange} required/>
                <label>E-pošta</label>
                <input type="text" name="eposta" value={user.eposta} onChange={handleChange} required/>
                <label>Geslo</label>
                <input type="password" name="geslo" value={user.geslo} onChange={handleChange} required/>
                <label>EMŠO</label>
                <input type="text" name="emso" value={user.emso} onChange={handleChange} required/>
                <label>Davčna številka</label>
                <input type="text" name="davcna" value={user.davcna} onChange={handleChange} required/>
                <label>Datum rojstva</label>
                <input type="date" name="datumroj" value={user.datumroj} onChange={handleChange} required/>
                <label>Telefon</label>
                <input type="text" name="telefon" value={user.telefon} onChange={handleChange} required/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )

}

export default AdminCreateUser