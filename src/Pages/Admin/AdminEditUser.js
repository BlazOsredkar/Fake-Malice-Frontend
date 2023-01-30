import axios from "axios";
import {useEffect, useState} from "react";
import {backendAPIendpoint} from "../../App";

import "../../style/adminCreateUser.css";
import {useNavigate, useParams} from "react-router-dom";


const AdminEditUser = () => {

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


    const id = useParams().id;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const loadUser = () => {
        axios.get(`${backendAPIendpoint}/user/find/${id}`, {withCredentials: true})
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadUser();
    },[id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.put(`${backendAPIendpoint}/user/update/${id}`, user, {withCredentials: true})
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Uporabnik uspešno urejen!")
                navigate("/admin/allUsers");

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
                            <input type="text" name="ime" value={user.ime} onChange={handleChange} />
                            <label>Priimek</label>
                            <input type="text" name="priimek" value={user.priimek} onChange={handleChange} />
                            <label>E-pošta</label>
                            <input type="email" name="eposta" value={user.eposta} onChange={handleChange} />
                            <label>EMŠO</label>
                            <input type="text" name="emso" value={user.emso} onChange={handleChange} />
                            <label>Spol</label>
                            <select name="spol" value={user.spol} onChange={handleChange} />
                        </div>
                        <div className="input-container-right">
                            <label>Geslo</label>
                            <input type="password" name="geslo" value={user.geslo} onChange={handleChange} />
                            <label>Ponovi geslo</label>
                            <input type="password" name="Ponovi Geslo" />
                            <label>Telefon</label>
                            <input type="text" name="telefon" value={user.telefon} onChange={handleChange} />
                            <label>Naslov</label>
                            <input type="text" name="naslov" value={user.naslov} onChange={handleChange} />
                            <label>Datum rojstva</label>
                            <input type="date" name="datumroj" value={user.datumroj} onChange={handleChange} />
                        </div>
                    </div>
                    <button className="submit-button" type="submit">Posodobi</button>
                </form>
            </div>
        </div>

    );

}

export default AdminEditUser;