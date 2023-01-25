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

        axios.post(`${backendAPIendpoint}/user/register`, user, {withCredentials: true})
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
                    <div className="input-container">
                        <div className="input-container-left">
                            <label>Ime</label>
                            <input type="text" name="ime" value={user.ime} onChange={handleChange} required/>
                            <label>Priimek</label>
                            <input type="text" name="priimek" value={user.priimek} onChange={handleChange} required/>
                            <label>E-pošta</label>
                            <input type="text" name="eposta" value={user.eposta} onChange={handleChange} required/>
                            <label>Geslo</label>
                            <input type="password" name="geslo" value={user.geslo} onChange={handleChange} required/>
                        </div>
                        <div className="input-container-right">
                            <label>EMŠO</label>
                            <input type="text" name="ems" value={user.ems} onChange={handleChange} required/>
                            <label>Telefon</label>
                            <input type="text" name="telefon" value={user.telefon} onChange={handleChange} required/>
                            <label>Naslov</label>
                            <input type="text" name="naslov" value={user.naslov} onChange={handleChange} required/>
                            <label>Mesto</label>
                            <input type="text" name="mesto" value={user.mesto} onChange={handleChange} required/>
                        </div>
                    </div>
                    <button className="submit-button" type="submit">Potrdi</button>
                </form>
            </div>
        </div>

    );

}

export default AdminCreateUser